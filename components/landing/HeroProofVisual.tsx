/**
 * Hero proof visual for the ad landing pages. Two floating "receipt" cards built
 * from the page's own real, named proof stats (no fabricated data, no new assets).
 * A stand-in until bespoke hero graphics exist — but styled to look intentional,
 * matching the homepage proof-card aesthetic. Pure CSS idle float; no client JS.
 */

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
};

function formatStat(s: Stat): string {
  const num =
    s.decimals != null ? s.value.toFixed(s.decimals) : s.value.toLocaleString("en-US");
  return `${s.prefix ?? ""}${num}${s.suffix ?? ""}`;
}

export default function HeroProofVisual({ proof }: { proof: Stat[] }) {
  const primary = proof[0];
  const secondary = proof[1] ?? proof[0];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <span className="led-cross absolute right-0 top-0 text-black/25" aria-hidden="true" />
      <span className="led-cross absolute bottom-0 left-0 text-black/25" aria-hidden="true" />

      <div aria-hidden="true" className="led-ghost absolute -right-2 top-1 text-[9rem] leading-none text-black/[0.05]">
        7x
      </div>

      {/* Dark receipt card — headline stat for this page */}
      <div className="absolute left-0 top-8 w-52 sm:left-2 sm:top-10 sm:w-60">
        <div className="led-float-a rounded-2xl border border-white/10 bg-beast-black p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:p-6">
          <p className="led-label text-white/45">
            {primary.sublabel ? `Proof · ${primary.sublabel}` : "Named proof"}
          </p>
          <p className="mt-4 font-display text-5xl font-black leading-none text-beast-yellow sm:text-6xl">
            {formatStat(primary)}
          </p>
          <p className="mt-2 text-xs text-white/55">{primary.label}</p>
          <div className="mt-4 h-px w-full bg-white/10" />
          <p className="led-label mt-3 text-beast-green">● verified client</p>
        </div>
      </div>

      {/* Pink accent card — second stat */}
      <div className="absolute bottom-6 right-0 w-44 sm:bottom-8 sm:w-52">
        <div className="led-float-b rounded-2xl bg-beast-pink p-5 shadow-[0_24px_60px_rgba(255,17,152,0.30)] sm:p-6">
          <p className="led-label text-white/70">{secondary.label}</p>
          <p className="mt-3 font-display text-4xl font-black leading-none text-white sm:text-5xl">
            {formatStat(secondary)}
          </p>
          {secondary.sublabel ? (
            <p className="mt-2 text-xs font-medium text-white/85">{secondary.sublabel}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
