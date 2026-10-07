import HeroNetworkDiagram from "./HeroNetworkDiagram";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#020617] py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Typography & Content (5 Cols) */}
          <div className="flex flex-col items-start text-left lg:col-span-5">
            <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
              ABOUT AIVIQONE
            </span>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[52px] lg:leading-[1.12]">
              Building the Future <br className="hidden sm:inline" />
              of <span className="text-[#0ea5e9]">Sales Operations.</span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
              AIVIQONE is building intelligent business technology that helps sales
              teams manage leads, customers, conversations and everyday sales
              operations from one connected platform.
            </p>

            <div className="my-6 h-[2px] w-12 bg-sky-400" />

            <p className="text-sm font-semibold text-slate-100 sm:text-base">
              Built in India. Designed for modern businesses.
            </p>
          </div>

          {/* Right Network Connected Visual (7 Cols) */}
          <div className="w-full lg:col-span-7">
            <HeroNetworkDiagram />
          </div>

        </div>
      </div>
    </section>
  );
}