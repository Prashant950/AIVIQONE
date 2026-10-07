import { Rocket, PhoneCall, ArrowRight } from "lucide-react";
import Link from "next/link";

const ctaLinks = [
  {
    icon: Rocket,
    title: "Start Free Trial",
    description: "Explore AIVIQONE free for 14 days. No credit card required.",
    linkLabel: "Start Free Trial",
    href: "/start-free-trial",
  },
  {
    icon: PhoneCall,
    title: "Book a Demo",
    description: "See how AIVIQONE can transform your sales operations.",
    linkLabel: "Book a Demo",
    href: "/book-a-demo",
  },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800/80 bg-[#020617] py-8 sm:py-10 md:py-12">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-[1420px] flex-col items-center gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12">
        {/* Left: eyebrow + heading + subtext */}
        <div className="flex max-w-xl flex-col gap-4 text-center lg:text-left">
          <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
            GET STARTED TODAY
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
            Ready to Transform Your <br className="hidden sm:inline" />
            <span className="text-[#0ea5e9]">Sales Operations?</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Join thousands of sales teams who trust AIVIQONE to manage leads,
            close more deals and grow faster.
          </p>
          <div className="my-1 h-[2px] w-12 bg-sky-400" />
        </div>

        {/* Right: action cards */}
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {ctaLinks.map(({ icon: Icon, title, description, linkLabel, href }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-sky-500/20 bg-[#060c1a]/90 p-6 text-left backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/60 hover:bg-[#070e24] hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 transition-all duration-300 group-hover:scale-110 group-hover:border-sky-300 group-hover:bg-sky-500/20 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <Icon size={22} strokeWidth={1.75} />
              </span>

              <span className="flex flex-col gap-1.5">
                <span className="text-base font-bold text-white transition-colors duration-300 group-hover:text-sky-300">{title}</span>
                <span className="text-xs sm:text-sm leading-relaxed text-slate-300">{description}</span>
              </span>

              <span className="mt-auto flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-400 group-hover:text-white transition-colors">
                {linkLabel}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}