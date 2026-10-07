import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { featuresHeroBadges } from "@/features/marketing/data/features-page";

export default function FeaturesHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#020617] py-10 lg:py-14">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      
      <div className="relative mx-auto flex w-full max-w-[1420px] flex-col items-center gap-8 px-5 text-center sm:px-8 lg:px-12">
        <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
          FEATURES
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.12]">
          Everything Your Sales Team Needs. <br />
          <span className="text-[#0ea5e9]">One Intelligent Platform.</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Manage leads, customers, conversations, calls, follow-ups and
          lending workflows from one powerful platform.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/book-a-demo"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_35px_rgba(56,189,248,0.6)]"
          >
            Book a Demo
            <ArrowRight size={18} />
          </Link>
          <a
            href="#workflow"
            className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-[#060c1a]/90 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-[#070e24] hover:text-white"
          >
            Explore Features
            <Compass size={18} />
          </a>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {featuresHeroBadges.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center gap-3.5 rounded-2xl border border-sky-500/20 bg-[#060c1a]/80 px-4 py-3 text-left backdrop-blur-sm transition-all duration-300 hover:border-sky-400/50 hover:bg-[#070e24]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_12px_rgba(2,132,199,0.2)]">
                <Icon size={20} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-white">{label}</span>
                <span className="text-xs text-slate-400">{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}