"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PHONE_DISPLAY } from "@/lib/contact";

type ChatMessage = {
  role: "beast" | "visitor";
  text: string;
};

const GREETING: ChatMessage = {
  role: "beast",
  text: "For real. Real live human here. Tell us a joke. Share your fears. Or we can talk shop.",
};

const ASK_CONTACT: ChatMessage = {
  role: "beast",
  text: "Got it — a real human just saw that. Drop an email or cell below in case we get separated, and keep typing if you've got more to say.",
};

const spring = { type: "spring" as const, stiffness: 400, damping: 18 };

function getSessionId(): string {
  try {
    let id = sessionStorage.getItem("beast-chat-session");
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem("beast-chat-session", id);
    }
    return id;
  } catch {
    return "no-storage";
  }
}

function pushDataLayer(event: string) {
  try {
    (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({ event });
  } catch {
    /* analytics must never break chat */
  }
}

function save(key: string, value: string) {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* storage unavailable */
  }
}

export default function ChatWidget() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [draft, setDraft] = useState("");
  const [contact, setContact] = useState("");
  const [contactSent, setContactSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [unread, setUnread] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const threadRef = useRef<string | null>(null);
  const lastTsRef = useRef<string>("");
  const twoWayRef = useRef(true);
  const pollingRef = useRef(false);
  const openRef = useRef(false);
  openRef.current = open;

  // Bounce in after the visitor has had a moment on the page.
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(t);
  }, []);

  // Restore the conversation across page navigations.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("beast-chat-messages");
      if (saved) setMessages(JSON.parse(saved));
      const savedContact = sessionStorage.getItem("beast-chat-contact");
      if (savedContact) {
        setContact(savedContact);
        setContactSent(true);
      }
      threadRef.current = sessionStorage.getItem("beast-chat-thread");
      lastTsRef.current = sessionStorage.getItem("beast-chat-lastts") ?? "";
    } catch {
      /* fresh conversation */
    }
  }, []);

  useEffect(() => {
    try {
      if (messages.length > 1) {
        sessionStorage.setItem("beast-chat-messages", JSON.stringify(messages));
      }
    } catch {
      /* storage unavailable */
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setUnread(0);
      pushDataLayer("chat_opened");
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages, open]);

  // Poll the Slack thread for human replies while a conversation exists.
  const poll = useCallback(async () => {
    if (
      pollingRef.current ||
      !twoWayRef.current ||
      !threadRef.current ||
      document.visibilityState !== "visible"
    ) {
      return;
    }
    pollingRef.current = true;
    try {
      const params = new URLSearchParams({ thread: threadRef.current });
      if (lastTsRef.current) params.set("after", lastTsRef.current);
      const res = await fetch(`/api/chat/poll?${params}`);
      if (!res.ok) return;
      const data: { twoWay: boolean; replies: { ts: string; text: string }[] } =
        await res.json();
      if (!data.twoWay) {
        twoWayRef.current = false;
        return;
      }
      if (data.replies.length) {
        lastTsRef.current = data.replies[data.replies.length - 1].ts;
        save("beast-chat-lastts", lastTsRef.current);
        setMessages((prev) => [
          ...prev,
          ...data.replies.map((r) => ({ role: "beast" as const, text: r.text })),
        ]);
        if (!openRef.current) setUnread((n) => n + data.replies.length);
      }
    } catch {
      /* transient network error — next tick retries */
    } finally {
      pollingRef.current = false;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(poll, 4000);
    poll();
    return () => clearInterval(interval);
  }, [poll]);

  const send = async (text: string, contactInfo?: string, first?: boolean) => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: text,
        contact: contactInfo || undefined,
        sessionId: getSessionId(),
        page: window.location.pathname,
        first: first || undefined,
        threadTs: threadRef.current || undefined,
      }),
    });
    if (!res.ok) throw new Error("Failed to send");
    const data: { threadTs?: string } = await res.json();
    if (data.threadTs && !threadRef.current) {
      threadRef.current = data.threadTs;
      save("beast-chat-thread", data.threadTs);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text || sending) return;
    setSending(true);
    setError("");
    try {
      await send(
        text,
        contact.trim() || undefined,
        !messages.some((m) => m.role === "visitor")
      );
      pushDataLayer("chat_message_sent");
      setDraft("");
      setMessages((prev) => {
        const next: ChatMessage[] = [...prev, { role: "visitor", text }];
        // First visitor message and no contact info yet: ask for it.
        if (!prev.some((m) => m.role === "visitor") && !contact.trim()) {
          next.push(ASK_CONTACT);
        }
        return next;
      });
    } catch {
      setError(`Chat hiccup. Text us instead: ${PHONE_DISPLAY}`);
    } finally {
      setSending(false);
    }
  };

  const handleContact = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = contact.trim();
    if (!value || sending) return;
    setSending(true);
    setError("");
    try {
      await send(`Visitor left contact info: ${value}`, value);
      setContactSent(true);
      save("beast-chat-contact", value);
      setMessages((prev) => [
        ...prev,
        {
          role: "beast",
          text: "Perfect. Keep this window open — replies land right here. We're quick during business hours.",
        },
      ]);
    } catch {
      setError(`Chat hiccup. Text us instead: ${PHONE_DISPLAY}`);
    } finally {
      setSending(false);
    }
  };

  const hasVisitorMessage = messages.some((m) => m.role === "visitor");
  const showContactField = hasVisitorMessage && !contactSent;

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ ...spring, damping: 24 }}
            className="w-[min(92vw,22rem)] rounded-2xl border border-white/10 bg-near-black shadow-2xl shadow-black/60 overflow-hidden"
            role="dialog"
            aria-label="Chat with Beast Creative"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-beast-black border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beast-pink opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-beast-pink" />
                </span>
                <div>
                  <p className="font-display font-bold text-white text-sm leading-tight">
                    Beast Creative
                  </p>
                  <p className="text-[11px] text-gray-500 leading-tight">
                    Real humans. No bots.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Tuck chat away"
                className="w-7 h-7 flex items-center justify-center rounded-full text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="max-h-72 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "visitor" ? "flex justify-end" : "flex justify-start"}>
                  <p
                    className={
                      m.role === "visitor"
                        ? "max-w-[85%] rounded-2xl rounded-br-sm bg-beast-pink text-white text-sm px-3.5 py-2.5 leading-snug"
                        : "max-w-[85%] rounded-2xl rounded-bl-sm bg-white/8 border border-white/10 text-gray-200 text-sm px-3.5 py-2.5 leading-snug"
                    }
                  >
                    {m.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact capture */}
            {showContactField && (
              <form onSubmit={handleContact} className="px-4 pb-2 flex gap-2">
                <label htmlFor="chat-contact" className="sr-only">
                  Email or cell for our reply
                </label>
                <input
                  id="chat-contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Email or cell for our reply"
                  maxLength={254}
                  className="form-input !py-2 !text-sm flex-1"
                />
                <button
                  type="submit"
                  disabled={sending || !contact.trim()}
                  className="text-xs font-bold text-beast-pink hover:text-white transition-colors disabled:opacity-40 shrink-0"
                >
                  Save
                </button>
              </form>
            )}

            {/* Composer */}
            <form onSubmit={handleSend} className="px-4 pb-4 pt-1">
              <div className="flex gap-2">
                <label htmlFor="chat-message" className="sr-only">
                  Your message
                </label>
                <input
                  ref={inputRef}
                  id="chat-message"
                  type="text"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Say anything..."
                  maxLength={1000}
                  className="form-input !py-2 !text-sm flex-1"
                />
                <button
                  type="submit"
                  disabled={sending || !draft.trim()}
                  aria-label="Send message"
                  className="w-10 h-10 shrink-0 rounded-full bg-beast-pink text-white flex items-center justify-center hover:brightness-110 transition disabled:opacity-40"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {error && (
                <p className="text-red-400 text-xs mt-2" role="alert">
                  {error}
                </p>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher pill */}
      <motion.button
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={spring}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Tuck chat away" : "Open chat — real human here"}
        aria-expanded={open}
        className="relative flex items-center gap-2.5 rounded-full bg-beast-pink text-white font-bold text-sm pl-4 pr-5 py-3 shadow-lg shadow-beast-pink/30 hover:brightness-110 transition"
      >
        {unread > 0 && !open && (
          <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-white text-beast-pink text-xs font-extrabold flex items-center justify-center border-2 border-beast-pink">
            {unread}
          </span>
        )}
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        {open ? "Tuck away" : "Real human here"}
      </motion.button>
    </div>
  );
}
