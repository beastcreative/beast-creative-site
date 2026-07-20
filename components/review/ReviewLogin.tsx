"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReviewLogin() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    const r = await fetch("/api/review/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    setBusy(false);
    if (r.ok) router.refresh();
    else setErr("That password didn't work.");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form onSubmit={submit} className="w-full max-w-sm">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-beast-pink">Beast · Internal</p>
        <h1 className="mt-3 font-display text-3xl font-extrabold uppercase leading-none tracking-tight">Review Queue</h1>
        <p className="mt-3 text-sm text-white/50">Leads waiting on your decision. Enter the password to continue.</p>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          autoFocus
          placeholder="Password"
          className="mt-6 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white outline-none focus:border-beast-pink"
        />
        {err && <p className="mt-2 text-sm text-beast-pink">{err}</p>}
        <button
          type="submit"
          disabled={busy || !pw}
          className="mt-4 w-full rounded-xl bg-beast-pink px-4 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.1em] text-white disabled:opacity-50"
        >
          {busy ? "Checking…" : "Enter"}
        </button>
      </form>
    </div>
  );
}
