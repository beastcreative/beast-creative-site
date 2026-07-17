/**
 * Labeled placeholder for a missing visual. Styled to look intentional (Ledger
 * dashed frame), and every one documents what asset it's waiting for so the
 * "what I need from you" list is self-generating.
 */
export default function AssetPlaceholder({
  label,
  note,
  ratio = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  note: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-2xl border-2 border-dashed border-black/15 bg-white ${className}`}
    >
      <span className="led-cross absolute left-3 top-3 text-black/25" aria-hidden="true" />
      <span className="led-cross absolute bottom-3 right-3 text-black/25" aria-hidden="true" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="led-label text-beast-pink">Placeholder asset</span>
        <span className="font-display text-lg font-bold uppercase leading-tight text-black/70">{label}</span>
        <span className="max-w-xs text-xs leading-relaxed text-black/45">{note}</span>
      </div>
    </div>
  );
}
