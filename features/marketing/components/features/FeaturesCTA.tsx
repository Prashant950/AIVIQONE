import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import OrbitDiagram from "@/components/ui/OrbitDiagram";
import { orbitItems } from "@/features/marketing/data/about";

export default function FeaturesCTA() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10">
      {/* Soft Ambient Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Left Typography & Actions (7 Cols) */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
              SALES OPERATIONS
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
              Your Sales Operation <br className="hidden sm:inline" />
              <span className="text-[#0ea5e9]">Shouldn’t Be Scattered.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Bring your CRM, conversations, calling, follow-ups and lending
              workflows into one intelligent platform.
            </p>

            <div className="my-5 h-[2px] w-12 bg-sky-400" />

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/book-a-demo"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_35px_rgba(56,189,248,0.6)]"
              >
                Book a Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/signup"
                className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-[#060c1a]/90 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-[#070e24] hover:text-white"
              >
                Get Started
                <Rocket size={16} />
              </Link>
            </div>
          </div>

          {/* Right Visual Diagram (5 Cols) - Scaled up for grander presence */}
          <div className="flex items-center justify-center lg:col-span-5 lg:justify-end overflow-visible p-2 sm:p-4">
            <div className="transform scale-110 sm:scale-125 origin-center lg:origin-right transition-transform duration-500">
              <OrbitDiagram items={orbitItems} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}