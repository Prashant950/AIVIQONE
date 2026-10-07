import { coreValues } from "@/features/marketing/data/about";

export default function OurValues() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10">
      <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
            OUR VALUES
          </span>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:gap-5">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group flex h-full flex-col items-center justify-start rounded-2xl border border-sky-500/20 bg-[#060c1a]/90 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/60 hover:bg-[#070e24] hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]"
                >
                  <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(2,132,199,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:border-sky-300 group-hover:bg-sky-500/20 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                    <Icon size={22} />
                  </div>
                  
                  <h3 className="mb-2.5 text-sm sm:text-base font-bold text-white transition-colors duration-300 group-hover:text-sky-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}