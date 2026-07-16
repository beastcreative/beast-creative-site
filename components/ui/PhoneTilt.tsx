"use client";

import Image from "next/image";

export default function PhoneTilt() {
  return (
    <div className="mx-auto w-1/2 transition-transform duration-500 hover:scale-110 cursor-pointer">
      <Image
        src="/assets/allstars-phone-mockup.png"
        alt="Williams All-Stars campaign: live Facebook and Instagram posts on phone mockups"
        width={1200}
        height={900}
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.18))" }}
      />
    </div>
  );
}
