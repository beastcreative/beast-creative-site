import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/proposals/megafoods-unlock" },
  title: "Confidential Proposal · Beast Creative",
  robots: { index: false, follow: false },
};

export default async function MegaFoodsUnlock({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#0A0A0A",
        color: "#FFFFFF",
        fontFamily:
          "Inter, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#141414",
          border: "1px solid #2A2A2A",
          borderRadius: "16px",
          padding: "40px 32px",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,.45)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/beast-logo.svg"
          alt="Beast Creative"
          width={120}
          style={{ margin: "0 auto 28px", display: "block" }}
        />
        <p
          style={{
            margin: "0 0 8px",
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#FFE500",
            fontWeight: 700,
          }}
        >
          Confidential Proposal
        </p>
        <h1
          style={{
            margin: "0 0 10px",
            fontSize: "24px",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          Mega&nbsp;Foods&nbsp;×&nbsp;Beast&nbsp;Creative
        </h1>
        <p
          style={{
            margin: "0 0 24px",
            fontSize: "15px",
            color: "#B3B3B3",
            lineHeight: 1.5,
          }}
        >
          This growth proposal is private. Enter the password to view it.
        </p>

        <form
          method="POST"
          action="/api/proposals/megafoods/unlock"
          style={{ display: "grid", gap: "12px" }}
        >
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoFocus
            required
            aria-label="Password"
            style={{
              width: "100%",
              padding: "14px 16px",
              fontSize: "16px",
              borderRadius: "10px",
              border: `1px solid ${error ? "#FF4D4D" : "#2A2A2A"}`,
              background: "#0A0A0A",
              color: "#FFFFFF",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px 16px",
              fontSize: "16px",
              fontWeight: 700,
              borderRadius: "10px",
              border: "none",
              background: "#FF1198",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            View Proposal
          </button>
          {error ? (
            <p
              role="alert"
              style={{ margin: "4px 0 0", fontSize: "13px", color: "#FF4D4D" }}
            >
              Incorrect password. Please try again.
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
