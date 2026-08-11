import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-hero-glow px-5 pb-20 pt-16 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Turn Every Lead
          <br />
          Into an <span className="text-accent-light">Opportunity.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          AIVIQONE brings CRM, AI-powered lead management, WhatsApp, and
          business communication into one intelligent platform built for
          modern sales teams.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button className="flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark">
            Start Free
            <ArrowRight size={16} />
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/60">
            Book a Demo
            <Calendar size={16} />
          </button>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
          <ShieldCheck size={16} className="text-accent-light" />
          Built for teams that refuse to lose leads.
        </div>
      </div>
    </section>
  );
}