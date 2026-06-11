import AnimatedSection from "@/components/ui/AnimatedSection";

/**
 * ReviewBadges — a reusable "reviewed & recognized" strip.
 *
 * A row of uniform white badge chips, each showing the platform's official
 * logo + star rating, linking out to our profile there. Data-driven: edit
 * `DEFAULT_BADGES` (or pass a `badges` prop) to add / remove / reorder.
 *
 * Logos (2026-06-11):
 *  - Google + Trustpilot: real official marks (inline SVG).
 *  - DesignRush: official flame mark (public/assets/badges/designrush.png) + wordmark.
 *  - Clutch: clean wordmark rendition — no public logo file yet. To use the
 *    official logo, drop it in public/assets/badges/clutch.(svg|png) and set
 *    `image` on the Clutch badge below (overrides the inline wordmark).
 */

type Variant = "light" | "dark";
type LogoKey = "google" | "trustpilot" | "designrush" | "clutch";

interface ReviewBadge {
  name: string;
  href: string;
  alt: string;
  logo: LogoKey;
  /** Optional: path to an official logo file; overrides the inline logo. */
  image?: string;
  /** Not live yet → renders non-interactive with a "Reviews soon" tag. */
  comingSoon?: boolean;
}

interface ReviewBadgesProps {
  variant?: Variant;
  eyebrow?: string;
  badges?: ReviewBadge[];
}

const DEFAULT_BADGES: ReviewBadge[] = [
  {
    name: "Google",
    logo: "google",
    href: "https://g.page/r/CWQ8IqxL5yCrEAI/review",
    alt: "Read our reviews on Google",
  },
  {
    name: "DesignRush",
    logo: "designrush",
    href: "https://www.designrush.com/agency/profile/beast-creative-agency#reviews",
    alt: "View our DesignRush agency profile",
  },
  {
    name: "Clutch",
    logo: "clutch",
    href: "#",
    alt: "View our Clutch agency profile",
    comingSoon: true,
  },
  {
    name: "Trustpilot",
    logo: "trustpilot",
    href: "#",
    alt: "Read our reviews on Trustpilot",
    comingSoon: true,
  },
];

/* ---------- Official / wordmark logo lockups (all ~h-6, centered) ---------- */

function GoogleLogo() {
  return (
    <span className="flex items-center gap-1.5">
      <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-0.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
      </svg>
      <span className="font-display text-[17px] font-semibold tracking-tight text-[#5F6368]">
        Google
      </span>
    </span>
  );
}

function TrustpilotLogo() {
  return (
    <span className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] fill-[#00B67A]" aria-hidden="true">
        <path d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z" />
      </svg>
      <span className="font-display text-[17px] font-semibold tracking-tight text-beast-black">
        Trustpilot
      </span>
    </span>
  );
}

function DesignRushLogo() {
  return (
    <span className="flex items-center gap-1.5">
      {/* Official DesignRush flame mark (their app icon). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/badges/designrush.png"
        alt=""
        className="h-[22px] w-[22px] rounded-[5px]"
      />
      <span className="font-display text-[17px] font-bold tracking-tight text-beast-black">
        DesignRush
      </span>
    </span>
  );
}

function ClutchLogo() {
  return (
    <span className="font-display text-[17px] font-bold tracking-tight text-beast-black">
      Clutch
    </span>
  );
}

const LOGOS: Record<LogoKey, () => React.ReactElement> = {
  google: GoogleLogo,
  trustpilot: TrustpilotLogo,
  designrush: DesignRushLogo,
  clutch: ClutchLogo,
};

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-[#FFB400]">
          <path d="M10 1.5l2.47 5.36 5.88.62-4.4 3.95 1.23 5.78L10 14.9l-5.18 2.81 1.23-5.78-4.4-3.95 5.88-.62L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function Badge({ badge }: { badge: ReviewBadge }) {
  const Logo = LOGOS[badge.logo];
  const card =
    "flex h-[104px] w-[176px] flex-col items-center justify-center gap-3 rounded-2xl bg-white border border-gray-100 px-4";

  const inner = (
    <>
      <div className="flex h-7 items-center justify-center">
        {badge.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={badge.image}
            alt={badge.name}
            className="h-6 w-auto max-w-[130px] object-contain"
          />
        ) : (
          <Logo />
        )}
      </div>
      {badge.comingSoon ? (
        <span className="inline-flex items-center rounded-full bg-beast-pink/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-beast-pink">
          Reviews soon
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <Stars />
          <span className="text-xs font-semibold text-gray-500">5.0</span>
        </span>
      )}
    </>
  );

  if (badge.comingSoon) {
    return (
      <div
        className={`${card} opacity-60 shadow-[0_2px_8px_rgba(0,0,0,0.05)]`}
        aria-label={`${badge.name} — reviews coming soon`}
      >
        {inner}
      </div>
    );
  }

  return (
    <a
      href={badge.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={badge.alt}
      className={`group ${card} shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-beast-pink/30 hover:shadow-[0_10px_22px_rgba(0,0,0,0.12)]`}
    >
      {inner}
    </a>
  );
}

export default function ReviewBadges({
  variant = "light",
  eyebrow = "Reviewed & Recognized",
  badges = DEFAULT_BADGES,
}: ReviewBadgesProps) {
  const isDark = variant === "dark";

  return (
    <section className={`${isDark ? "bg-beast-black" : "bg-section-offwhite"} py-14 lg:py-16`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <AnimatedSection>
          <p className="section-eyebrow mb-8 text-center text-beast-pink">
            {eyebrow}
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-5">
          {badges.map((badge, i) => (
            <AnimatedSection key={badge.name} delay={i * 0.08} variant="fadeUp">
              <Badge badge={badge} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
