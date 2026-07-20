import type { Metadata } from "next";
import { cookies } from "next/headers";
import { reviewToken, REVIEW_COOKIE } from "@/lib/review-auth";
import ReviewLogin from "@/components/review/ReviewLogin";
import ReviewClient from "@/components/review/ReviewClient";

export const metadata: Metadata = {
  title: "Review Queue | Beast",
  robots: { index: false, follow: false },
};

export default async function ReviewPage() {
  const c = await cookies();
  const authed = c.get(REVIEW_COOKIE)?.value === reviewToken();
  return (
    <div className="min-h-screen bg-[#0d0b0a] text-white">
      {authed ? <ReviewClient /> : <ReviewLogin />}
    </div>
  );
}
