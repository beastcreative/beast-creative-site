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
  first: z.boolean().optional(),
  threadTs: z
    .string()
    .regex(/^\d+\.\d+$/)
    .optional(),
  website: z.string().max(0).optional(),
});

const SITE_LABEL = "BEAST";
const SITE_URL = "https://beastcreativeagency.com";

/** "U123,U456" -> "<@U123> <@U456>" — pings on each NEW conversation. */
function mentions(): string {
  return (process.env.SLACK_CHAT_MENTIONS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean)
    .map((id) => `<@${id}>`)
    .join(" ");
}

async function slackFetch(url: string, body: object, token: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const json = await res.json();
    if (!res.ok || !json.ok) {
      throw new Error(`Slack API error: ${json.error ?? res.status}`);
    }
    return json;
  } finally {
    clearTimeout(timeout);
  }
}

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

    const session = data.sessionId?.slice(0, 8) ?? "unknown";
    const botToken = process.env.SLACK_BOT_TOKEN;
    const channel = process.env.SLACK_CHAT_CHANNEL_ID;

    // Two-way mode: post via the bot into a per-visitor thread. Replies in
    // that thread are read back by /api/chat/poll and shown in the widget.
    const pageUrl = data.page ? `${SITE_URL}${data.page}` : SITE_URL;
    const contactLine = data.contact ? `\n*Reply to:* ${data.contact}` : "";
    const quoted = `>${data.message.replace(/\n/g, "\n>")}`;

    if (botToken && channel) {
      if (data.threadTs) {
        await slackFetch(
          "https://slack.com/api/chat.postMessage",
          { channel, thread_ts: data.threadTs, text: `${quoted}${contactLine}` },
          botToken
        );
        return NextResponse.json(
          { success: true, threadTs: data.threadTs },
          { status: 200 }
        );
      }

      const ping = mentions();
      const parent = await slackFetch(
        "https://slack.com/api/chat.postMessage",
        {
          channel,
          text:
            `${ping ? `${ping} ` : ""}:speech_balloon: *New chat — ${SITE_LABEL} site*\n` +
            `*Visitor:* \`${session}\`  ·  *Page:* ${pageUrl}` +
            `${contactLine}\n${quoted}\n` +
            `_Reply in this thread and the visitor sees it live on the site._`,
        },
        botToken
      );
      return NextResponse.json(
        { success: true, threadTs: parent.ts },
        { status: 200 }
      );
    }

    // One-way fallback: incoming webhook (no reading back).
    const webhook = process.env.SLACK_CHAT_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json(
        { error: "Chat is not configured" },
        { status: 503 }
      );
    }

    const ping = data.first ? mentions() : "";
    const lines = [
      `${ping ? `${ping} ` : ""}:speech_balloon: *${data.first ? "New chat" : "Follow-up"} — ${SITE_LABEL} site* — visitor \`${session}\``,
      `*Page:* ${pageUrl}`,
      data.contact ? `*Reply to:* ${data.contact}` : null,
      quoted,
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
