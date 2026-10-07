import { audiences } from "@/features/marketing/data/audiences";

export default function AudienceSection() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center gap-10 px-5 text-center sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
            WHO IS AIVIQONE FOR?
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
            Built for Businesses That Depend on Sales.
          </h2>
          <div className="my-1 h-[2px] w-12 bg-sky-400" />
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 sm:gap-5">
          {audiences.map(({ icon: Icon, title, description, badge }) => (
            <div
              key={title}
              className={`group relative flex h-full flex-col items-center gap-3.5 rounded-2xl border p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 ${badge
                ? "border-sky-400/50 bg-[#070e24] shadow-[0_0_25px_rgba(56,189,248,0.2)]"
                : "border-sky-500/20 bg-[#060c1a]/90 hover:border-sky-400/60 hover:bg-[#070e24] hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]"
                }`}
            >
              {badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                  {badge}
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(2,132,199,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:border-sky-300 group-hover:bg-sky-500/20 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <Icon size={22} strokeWidth={1.75} />
              </div>

              <h3 className="text-sm font-bold text-white transition-colors duration-300 group-hover:text-sky-300">{title}</h3>
              <p className="text-xs leading-relaxed text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}