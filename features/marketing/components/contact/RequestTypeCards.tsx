import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { requestTypeCards } from "@/features/marketing/data/contact";

export default function RequestTypeCards() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-6 sm:py-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {requestTypeCards.map(({ icon: Icon, title, description, linkLabel, href }, i) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between items-center rounded-2xl border border-sky-900/60 border-t-sky-500/40 bg-[#050c1e]/95 p-6 sm:p-7 text-center shadow-[inset_0_1px_0_0_rgba(56,189,248,0.25)] backdrop-blur-sm transition-all duration-300 hover:border-sky-400/60 hover:bg-[#071128] hover:shadow-[0_0_30px_rgba(2,132,199,0.2),inset_0_1px_0_0_rgba(56,189,248,0.5)] hover:-translate-y-1 min-h-[310px]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Top Content: Icon, Title, Description */}
              <div className="flex flex-col items-center gap-3.5">
                {/* Glowing Cyan Vector Icon */}
                <div className="flex items-center justify-center text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.35)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={38} strokeWidth={1.5} />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  {description}
                </p>
              </div>

              {/* Bottom Action Button */}
              <div className="w-full pt-6">
                <Link
                  href={href}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-sky-500/40 bg-transparent py-2.5 px-4 text-xs sm:text-sm font-semibold text-sky-400 transition-all duration-300 group-hover:border-sky-400 group-hover:bg-sky-500/10 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                >
                  <span>{linkLabel}</span>
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}