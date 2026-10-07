"use client";

import { useRef } from "react";
import DynamicComparisonFlow from "@/features/marketing/components/about/DynamicComparisonFlow";
import { beforeItems, afterItems } from "@/features/marketing/data/about";

export default function WhyExists() {
    const containerRef = useRef<HTMLDivElement>(null);
    const vsRef = useRef<HTMLDivElement>(null);
    const leftItemRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const rightIconRefs = useRef<(HTMLSpanElement | null)[]>([]);

    return (
        <section className="border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10">
            <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">

                    {/* Left Typography & Content (5 Cols) */}
                    <div className="flex flex-col items-start text-left lg:col-span-5">
                        <span className="text-sm font-bold tracking-widest text-sky-400 uppercase">
                            WHY AIVIQONE EXISTS
                        </span>

                        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
                            Sales Shouldn’t Be <br className="hidden sm:inline" />
                            <span className="text-[#0ea5e9]">This Complicated.</span>
                        </h2>

                        <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
                            We believe sales teams should spend their time selling — not
                            searching for information, updating spreadsheets or chasing
                            scattered conversations.
                        </p>

                        <div className="my-6 h-[2px] w-12 bg-sky-400" />

                        <p className="text-sm font-semibold text-slate-100 sm:text-base">
                            Replace disconnected chaos with a unified sales flow.
                        </p>
                    </div>

                    {/* Right Comparison Block (7 Cols) */}
                    <div className="w-full lg:col-span-7 flex items-center justify-center lg:justify-end">
                        <div
                            ref={containerRef}
                            className="relative flex w-full max-w-2xl flex-col items-stretch justify-between gap-4 md:flex-row md:gap-0"
                        >
                            {/* SVG Dynamic Flow Connector */}
                            <DynamicComparisonFlow
                                containerRef={containerRef}
                                vsRef={vsRef}
                                leftItemRefs={leftItemRefs}
                                rightIconRefs={rightIconRefs}
                            />

                            {/* Left Card: BEFORE */}
                            <div className="relative z-10 flex flex-1 flex-col justify-between rounded-2xl border border-sky-500/20 bg-[#060c1a]/95 p-6 backdrop-blur-md md:rounded-r-none md:border-r-0">
                                <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider text-rose-500 uppercase">
                                    <span className="text-sm font-black">✕</span> BEFORE
                                </div>

                                <ul className="flex flex-col gap-4">
                                    {beforeItems.map(({ label, icon: Icon, color }, idx) => (
                                        <li key={label} className="flex h-7 items-center gap-3">
                                            <span className={`flex h-5 w-5 shrink-0 items-center justify-center ${color}`}>
                                                <Icon size={17} />
                                            </span>
                                            <span
                                                ref={(el) => {
                                                    leftItemRefs.current[idx] = el;
                                                }}
                                                className="whitespace-nowrap text-xs font-medium text-slate-300 sm:text-sm"
                                            >
                                                {label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Central VS Badge */}
                            <div
                                ref={vsRef}
                                className="relative z-20 my-2 flex items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:my-0 md:-translate-x-1/2 md:-translate-y-1/2"
                            >
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sky-400/80 bg-[#040916] text-xs font-extrabold text-white shadow-[0_0_25px_rgba(56,189,248,0.55)]">
                                    VS
                                </div>
                            </div>

                            {/* Right Card: AIVIQONE */}
                            <div className="relative z-10 flex flex-1 flex-col justify-between rounded-2xl border border-sky-500/30 bg-[#070e24]/95 p-6 backdrop-blur-md md:rounded-l-none md:pl-16">
                                <div className="mb-6 flex items-center gap-2 text-xs font-bold tracking-wider text-sky-400 uppercase">
                                    <span className="text-sm font-black">✓</span> AIVIQONE
                                </div>

                                <ul className="flex flex-col gap-4">
                                    {afterItems.map(({ label, icon: Icon, color }, idx) => (
                                        <li key={label} className="flex h-7 items-center gap-3">
                                            <span
                                                ref={(el) => {
                                                    rightIconRefs.current[idx] = el;
                                                }}
                                                className={`flex h-5 w-5 shrink-0 items-center justify-center ${color}`}
                                            >
                                                <Icon size={17} />
                                            </span>
                                            <span className="whitespace-nowrap text-xs font-medium text-slate-200 sm:text-sm">
                                                {label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}