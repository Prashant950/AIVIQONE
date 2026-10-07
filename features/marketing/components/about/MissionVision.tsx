import OrbitDiagram from "@/components/ui/OrbitDiagram";
import { orbitItems } from "@/features/marketing/data/about";

export default function MissionVision() {
    return (
        <section className="border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10">
            <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

                    {/* LEFT SIDE: OUR MISSION (5 Cols) */}
                    <div className="flex flex-col items-start text-left lg:col-span-5">
                        <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
                            OUR MISSION
                        </span>

                        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
                            Our Mission
                        </h2>

                        <h3 className="mt-3.5 text-lg font-bold leading-snug text-white sm:text-xl lg:text-[20px]">
                            To <span className="text-[#0ea5e9]">simplify</span> the way <br className="hidden sm:inline" />
                            businesses manage sales.
                        </h3>

                        <div className="my-5 h-[2px] w-12 bg-sky-400" />

                        <p className="max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
                            We are building technology that gives sales teams the structure,
                            visibility and tools they need to work smarter, respond faster and
                            grow consistently.
                        </p>
                    </div>

                    {/* RIGHT SIDE: OUR VISION + ORBIT DIAGRAM (7 Cols) */}
                    <div className="flex flex-col gap-8 lg:col-span-7 lg:flex-row lg:items-center lg:justify-between">

                        {/* Vision Typography */}
                        <div className="flex flex-1 min-w-[220px] flex-col items-start text-left">
                            <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
                                OUR VISION
                            </span>

                            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
                                Our Vision
                            </h2>

                            <h3 className="mt-3.5 text-lg font-bold leading-snug text-white sm:text-xl lg:text-[20px]">
                                To become the <span className="text-[#0ea5e9]">operating layer</span> <br className="hidden sm:inline" />
                                for modern sales teams.
                            </h3>

                            <div className="my-5 h-[2px] w-12 bg-sky-400" />

                            <p className="max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
                                We envision a world where every lead, customer interaction,
                                follow-up, conversation and sales decision is connected through
                                intelligent technology.
                            </p>
                        </div>

                        {/* Orbit Diagram Visual */}
                        <div className="flex shrink-0 items-center justify-center overflow-visible p-1">
                            <OrbitDiagram items={orbitItems} />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}