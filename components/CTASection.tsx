import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="border-t border-border/60 bg-hero-glow px-5 py-16 text-center lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Stop managing leads. Start converting them.
        </h2>
        <p className="mt-4 text-sm text-slate-400 sm:text-base">
          Give your sales team one system to manage every lead, conversation
          and follow-up.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button className="flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark">
            Get Started with AIVIQONE
            <ArrowRight size={16} />
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent/60">
            Talk to Sales
            <Phone size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}