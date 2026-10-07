import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ContactFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-6 sm:py-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-80 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="relative flex flex-col items-center justify-between gap-8 rounded-3xl border border-sky-600/30 bg-gradient-to-r from-[#021845] via-[#041233] to-[#03091e] p-8 sm:p-10 lg:flex-row lg:px-12 lg:py-10 shadow-[0_0_40px_rgba(2,132,199,0.15),inset_0_1px_0_0_rgba(56,189,248,0.25)] backdrop-blur-xl">
          
          {/* Subtle Ambient Radial Flare on the Left */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-sky-400/15 blur-2xl" />

          {/* Left Text Block */}
          <div className="flex flex-col text-center lg:text-left shrink-0 z-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[38px] leading-[1.15]">
              Ready to See <br className="hidden sm:inline" />
              AIVIQONE in Action?
            </h2>
            <p className="mt-2.5 max-w-xs text-xs sm:text-sm text-slate-300 leading-relaxed">
              Take the next step toward a more connected sales operation.
            </p>
          </div>

          {/* Center Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 z-10">
            <Link
              href="/book-a-demo"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(2,132,199,0.5)] transition-all hover:opacity-95 active:scale-95 whitespace-nowrap"
            >
              <span>Book a Demo</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/features"
              className="flex items-center gap-2 rounded-xl border border-sky-500/40 bg-[#061230]/70 px-6 py-3.5 text-sm font-semibold text-sky-200 backdrop-blur-sm transition-all hover:border-sky-400 hover:bg-sky-500/10 hover:text-white whitespace-nowrap"
            >
              <span>Explore Features</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right A1 Monogram Watermark */}
          <div className="relative hidden md:flex items-center justify-end w-[180px] lg:w-[220px] h-[110px] lg:h-[130px] shrink-0 z-10">
            <Image
              src="/A_logo.png"
              alt="AIVIQONE A1 Monogram"
              fill
              sizes="(max-width: 1024px) 180px, 220px"
              className="object-contain opacity-35 mix-blend-lighten drop-shadow-[0_0_25px_rgba(2,132,199,0.3)] select-none pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}