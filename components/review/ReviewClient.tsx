"use client";

import { useEffect, useState, useCallback } from "react";

type Lead = {
  lead_id: string;
  company: string;
  contact: string;
  email: string;
  website: string;
  score: number;
  cats: { need: number; budget: number; timing: number; authority: number; fit: number };
  why: string;
  goal: string;
  challenge: string;
  brief_url: string;
  created_at: string;
};

const CATS: [keyof Lead["cats"], string, number][] = [
  ["need", "Need", 25],
  ["budget", "Budget", 25],
  ["timing", "Timing", 15],
  ["authority", "Authority", 15],
  ["fit", "Fit", 15],
];

export default function ReviewClient() {
  const [leads, setLeads] = useState<Lead[] | null>(null);
  const [error, setError] = useState("");
  const [acting, setActing] = useState<Record<string, "approve" | "decline">>({});
  const [done, setDone] = useState<{ company: string; action: string } | null>(null);

  const load = useCallback(async () => {
    setError("");
    setLeads(null);
    try {
      const r = await fetch("/api/review/list", { cache: "no-store" });
      const j = await r.json();
      if (!r.ok || j.success === false) throw new Error(j.error || "load failed");
      setLeads(j.leads || []);
    } catch {
      setError("Couldn't load the queue. Try refreshing.");
      setLeads([]);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function decide(lead: Lead, action: "approve" | "decline") {
    setActing((a) => ({ ...a, [lead.lead_id]: action }));
    try {
      const r = await fetch("/api/review/decide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lead: lead.lead_id, action }),
      });
      const j = await r.json();
      if (!r.ok || j.success === false) throw new Error();
      setLeads((ls) => (ls ? ls.filter((l) => l.lead_id !== lead.lead_id) : ls));
      setDone({ company: lead.company, action });
      setTimeout(() => setDone(null), 4000);
    } catch {
      setActing((a) => {
        const n = { ...a };
        delete n[lead.lead_id];
        return n;
      });
      setError("That didn't go through. Try again.");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-8 sm:py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-beast-pink">Beast · Review Queue</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase leading-none tracking-tight">
            Leads waiting on you
          </h1>
        </div>
        <button onClick={load} className="shrink-0 rounded-lg border border-white/15 px-3 py-2 font-mono text-[11px] uppercase tracking-wide text-white/70 hover:text-white">
          Refresh
        </button>
      </div>

      {done && (
        <div className="mt-5 rounded-xl border border-beast-pink/40 bg-beast-pink/10 px-4 py-3 text-sm">
          <strong>{done.company}</strong> {done.action === "approve" ? "approved — booking link sent." : "declined — self-serve plan sent."}
        </div>
      )}
      {error && <div className="mt-5 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/70">{error}</div>}

      {leads === null && <p className="mt-10 text-center text-sm text-white/40">Loading…</p>}

      {leads && leads.length === 0 && !error && (
        <div className="mt-16 text-center">
          <p className="font-display text-2xl font-bold uppercase text-white/80">All clear.</p>
          <p className="mt-2 text-sm text-white/45">No leads are waiting on a decision right now.</p>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-4">
        {leads?.map((l) => {
          const busy = acting[l.lead_id];
          const hot = l.score >= 65;
          return (
            <div key={l.lead_id} className="rounded-2xl border border-white/12 bg-white/[0.03] p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="truncate font-display text-xl font-bold uppercase leading-tight">{l.company}</h2>
                  <p className="mt-0.5 truncate text-sm text-white/55">{l.contact} · {l.email}</p>
                </div>
                <div className={`shrink-0 rounded-lg px-3 py-1.5 text-center ${hot ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}>
                  <div className="font-mono text-lg font-bold leading-none">{l.score}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wide opacity-70">/ 100</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-5 gap-1.5">
                {CATS.map(([k, label, max]) => (
                  <div key={k} className="text-center">
                    <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full bg-beast-pink" style={{ width: `${Math.round((l.cats[k] / max) * 100)}%` }} />
                    </div>
                    <div className="mt-1 font-mono text-[9px] uppercase tracking-wide text-white/45">{label}</div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-white/75"><span className="text-white/45">Why review: </span>{l.why}</p>
              {l.challenge && <p className="mt-2 text-sm text-white/60"><span className="text-white/45">Their problem: </span>“{l.challenge}”</p>}

              {l.brief_url && (
                <a href={l.brief_url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-mono text-[11px] uppercase tracking-wide text-beast-pink hover:underline">
                  Open full AI brief →
                </a>
              )}

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => decide(l, "approve")}
                  disabled={!!busy}
                  className="flex-1 rounded-xl bg-emerald-600 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wide text-white disabled:opacity-50"
                >
                  {busy === "approve" ? "Approving…" : "Approve · send booking"}
                </button>
                <button
                  onClick={() => decide(l, "decline")}
                  disabled={!!busy}
                  className="flex-1 rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wide text-white/80 disabled:opacity-50"
                >
                  {busy === "decline" ? "Declining…" : "Decline · send plan"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-10 text-center font-mono text-[11px] text-white/30">
        Undecided leads auto-send a self-serve plan after 3 days.
      </p>
    </div>
  );
}
