import { Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export default function WhoWeAre() {
  const highlights = [
    {
      icon: Layers,
      title: "Unified Sales Ecosystem",
      desc: "Bringing leads, calls, WhatsApp, and customer histories under a single intelligent console.",
    },
    {
      icon: Zap,
      title: "Practical Automation",
      desc: "Eliminating manual data entry and repetitive follow-ups so teams focus entirely on closing deals.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Reliability",
      desc: "Built on secure cloud infrastructure designed for high data integrity and scale.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020617] py-8 sm:py-10 md:py-12 border-t border-slate-800/60">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
            Who We Are
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Building Technology for the{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Next Era of Sales.
            </span>
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              <strong className="text-white font-semibold">AIVIQONE Technologies Pvt. Ltd.</strong> is a technology company focused on building practical, intelligent, and scalable software for businesses that depend on active sales operations.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              AIVIQONE brings CRM, lead management, customer activity, follow-ups, communication channels, and sales intelligence into one connected ecosystem designed specifically for the pace of modern enterprises.
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3.5 rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 p-6 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.15)] backdrop-blur-sm transition-all duration-300 hover:border-sky-500/40 hover:bg-[#071128] hover:shadow-[0_0_25px_rgba(2,132,199,0.15)] hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-bold text-white tracking-wide">
                {title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}