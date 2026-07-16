import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 10) return true;
  entry.count++;
  return false;
}

const schema = z.object({
  message: z.string().min(1).max(1000),
  contact: z.string().max(254).optional(),
  sessionId: z.string().max(64).optional(),
  page: z.string().max(200).optional(),
  website: z.string().max(0).optional(),
});

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await request.json();
    const data = schema.parse(body);

    if (data.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const webhook = process.env.SLACK_CHAT_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json(
        { error: "Chat is not configured" },
        { status: 503 }
      );
    }

    const session = data.sessionId?.slice(0, 8) ?? "unknown";
    const lines = [
      `:speech_balloon: *Site chat* — visitor \`${session}\``,
      data.page ? `*Page:* ${data.page}` : null,
      data.contact ? `*Reply to:* ${data.contact}` : null,
      `>${data.message.replace(/\n/g, "\n>")}`,
    ].filter(Boolean);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: lines.join("\n") }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Slack responded ${res.status}`);
    } finally {
      clearTimeout(timeout);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    console.error("Chat send failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
