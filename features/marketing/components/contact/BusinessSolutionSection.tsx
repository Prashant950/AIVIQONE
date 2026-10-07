import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BusinessSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-8 sm:py-10 md:py-12 border-t border-slate-800/60">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[130px]" />

      <div className="relative mx-auto flex w-full max-w-[1420px] flex-col items-center gap-6 px-5 text-center sm:px-8 lg:px-12">
        <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
          Looking for a Business Solution?
        </span>

        {/* Full Row Responsive Heading */}
        <h2 className="w-full text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.15] max-w-5xl">
          Let&rsquo;s Build the Right Solution for{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Your Business.
          </span>
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
          If you&rsquo;re evaluating AIVIQONE for your sales team, loan
          agency, DSA operation or growing business, tell us what
          you&rsquo;re trying to solve.
        </p>

        <div className="mt-2 flex items-center justify-center">
          <Link
            href="#form"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(2,132,199,0.4)] transition-all hover:opacity-95 active:scale-95"
          >
            <span>Talk to Our Team</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}