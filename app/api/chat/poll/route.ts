import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 40) return true;
  entry.count++;
  return false;
}

/** Decode Slack's mrkdwn entities/links into plain text for the widget. */
function slackToPlainText(text: string): string {
  return text
    .replace(/<(https?:\/\/[^|>]+)\|([^>]+)>/g, "$2 ($1)")
    .replace(/<(https?:\/\/[^>]+)>/g, "$1")
    .replace(/<[@#!][^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

type SlackReply = {
  ts: string;
  text?: string;
  user?: string;
  bot_id?: string;
  subtype?: string;
};

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const botToken = process.env.SLACK_BOT_TOKEN;
  const channel = process.env.SLACK_CHAT_CHANNEL_ID;
  if (!botToken || !channel) {
    // One-way mode: nothing to poll, tell the widget to stop asking.
    return NextResponse.json({ twoWay: false, replies: [] }, { status: 200 });
  }

  const thread = request.nextUrl.searchParams.get("thread") ?? "";
  const after = request.nextUrl.searchParams.get("after") ?? "";
  if (!/^\d+\.\d+$/.test(thread) || (after && !/^\d+\.\d+$/.test(after))) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const params = new URLSearchParams({
      channel,
      ts: thread,
      limit: "50",
    });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);
    let json: { ok: boolean; error?: string; messages?: SlackReply[] };
    try {
      const res = await fetch(
        `https://slack.com/api/conversations.replies?${params}`,
        {
          headers: { Authorization: `Bearer ${botToken}` },
          signal: controller.signal,
        }
      );
      json = await res.json();
    } finally {
      clearTimeout(timeout);
    }
    if (!json.ok) throw new Error(`Slack API error: ${json.error}`);

    const afterNum = after ? parseFloat(after) : 0;
    const replies = (json.messages ?? [])
      // Human replies only: skip the bot's own posts, joins, and the parent.
      .filter(
        (m) =>
          m.user &&
          !m.bot_id &&
          (!m.subtype || m.subtype === "thread_broadcast") &&
          m.ts !== thread &&
          parseFloat(m.ts) > afterNum &&
          m.text
      )
      .map((m) => ({ ts: m.ts, text: slackToPlainText(m.text as string) }))
      .filter((m) => m.text);

    return NextResponse.json(
      { twoWay: true, replies },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    console.error("Chat poll failed:", err);
    return NextResponse.json({ error: "Failed to poll" }, { status: 500 });
  }
}
