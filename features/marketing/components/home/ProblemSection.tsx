import { problems } from "@/features/marketing/data/problems";

export default function ProblemSection() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10">
      <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center gap-10 px-5 text-center sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
            THE PROBLEM
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
            Your Sales Team Doesn’t Have a Lead Problem. <br />
            <span>They Have a Management Problem.</span>
          </h2>
          <div className="my-1 h-[2px] w-12 bg-sky-400" />
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {problems.map(({ icon: Icon, title, description, hasDots }) => (
            <div
              key={title}
              className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-sky-500/20 bg-[#060c1a]/90 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/60 hover:bg-[#070e24] hover:shadow-[0_0_25px_rgba(56,189,248,0.25)]"
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(2,132,199,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:border-sky-300 group-hover:bg-sky-500/20 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                <Icon size={28} strokeWidth={1.75} />
                {hasDots && (
                  <span className="absolute inset-0 flex items-center justify-center gap-[3px] pb-2.5">
                    <span className="h-[3px] w-[3px] rounded-full bg-sky-400" />
                    <span className="h-[3px] w-[3px] rounded-full bg-sky-400" />
                    <span className="h-[3px] w-[3px] rounded-full bg-sky-400" />
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-sky-300">{title}</h3>
              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}