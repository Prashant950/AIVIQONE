"use client";

import Image from "next/image";

export default function IndiaMapFigure() {
  return (
    <div className="relative flex h-full w-full select-none items-center justify-center overflow-visible">
      {/* Ambient background glow behind map */}
      <div className="pointer-events-none absolute inset-0 -m-6 rounded-full bg-sky-500/15 blur-2xl" />

      {/* Cyber India Map Graphic with Seamless Dark Blending */}
      <div className="relative h-[290px] w-[290px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px] shrink-0 transition-transform duration-500 hover:scale-105">
        <Image
          src="/india_cyber_map.jpg"
          alt="AIVIQONE Business Presence Across India"
          fill
          priority
          sizes="(max-width: 640px) 290px, (max-width: 1024px) 340px, 380px"
          className="object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.4)] mix-blend-screen"
        />
      </div>
    </div>
  );
}
