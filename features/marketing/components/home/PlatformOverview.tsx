import ArrowConnector from "@/components/ui/ArrowConnector";
import { platformPillars } from "@/features/marketing/data/platform";

export default function PlatformOverview() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10 overflow-visible">
      <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-10 overflow-visible">

        {/* Header */}
        <div className="flex max-w-3xl flex-col items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
            WHAT IS AIVIQONE?
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
            One Platform for Your Entire Sales Operation.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            AIVIQONE is a modern CRM platform designed to help sales teams
            manage leads, customers, conversations, follow-ups and daily
            sales activity from one place.
          </p>
          <div className="my-2 h-[2px] w-12 bg-sky-400" />
        </div>

        {/* Mobile & Tablet Mode: 2 to 3 per row responsive grid */}
        <div className="w-full py-4 lg:hidden">
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
            {platformPillars.map(({ icon: Icon, label, accent }) => (
              <div
                key={label}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-sky-500/20 bg-[#060c1a]/90 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/70 hover:bg-[#070e24] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] min-h-[135px]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-sky-300 group-hover:bg-sky-500/20 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    className={accent ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" : "text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"}
                  />
                </span>
                <span className="text-center text-xs font-bold uppercase tracking-wider text-slate-200 transition-colors duration-300 group-hover:text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Mode (lg: and up): 7 Connected Pillars in a Single Horizontal Row */}
        <div className="hidden lg:block w-full py-6">
          <div className="mx-auto flex w-full items-center justify-between gap-1.5 xl:gap-2">
            {platformPillars.map(({ icon: Icon, label, accent }, index) => (
              <div key={label} className="flex flex-1 items-center justify-center gap-1.5 xl:gap-2">
                <div
                  className="group relative flex h-38 w-full max-w-[155px] flex-col items-center justify-center gap-3 rounded-2xl border border-sky-500/20 bg-[#060c1a]/90 px-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/70 hover:bg-[#070e24] hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-sky-300 group-hover:bg-sky-500/20 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                    <Icon
                      size={26}
                      strokeWidth={1.8}
                      className={accent ? "text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" : "text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"}
                    />
                  </span>
                  <span className="text-[11.5px] font-bold uppercase tracking-wider text-slate-200 transition-colors duration-300 group-hover:text-white whitespace-nowrap text-center">
                    {label}
                  </span>
                </div>
                {index < platformPillars.length - 1 && (
                  <div className="shrink-0 flex items-center justify-center">
                    <ArrowConnector />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}