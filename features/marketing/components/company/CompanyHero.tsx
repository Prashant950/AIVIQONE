import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import HubDiagram from "@/components/ui/HubDiagram";

export default function CompanyHero() {
    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#020617] py-10 lg:py-14">
            <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">

                {/* Left Side Content (5 cols) - Shifted slightly to the right */}
                <div className="flex flex-col items-start text-left lg:col-span-5 pl-1 sm:pl-3 lg:pl-6 xl:pl-8">
                    <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
                        About AIVIQONE
                    </span>

                    <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
                        Building Smarter Infrastructure for Modern{" "}
                        <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                            Businesses.
                        </span>
                    </h1>

                    <p className="mt-6 text-sm leading-relaxed text-slate-400 sm:text-base">
                        AIVIQONE Technologies is building intelligent business software
                        that brings customer management, communication, automation and
                        decision-support into one connected platform.
                    </p>

                    {/* Action CTA Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            href="/signup"
                            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all hover:opacity-90 active:scale-95"
                        >
                            Explore AIVIQONE
                            <ArrowRight size={16} />
                        </Link>

                        <Link
                            href="/contact"
                            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#070e24]/70 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-sky-400 hover:text-white"
                        >
                            Talk to Us
                            <PhoneCall size={15} className="text-sky-400" />
                        </Link>
                    </div>
                </div>

                {/* Right Side Visual (7 cols) */}
                <div className="w-full lg:col-span-7">
                    <HubDiagram />
                </div>

            </div>
        </section>
    );
}