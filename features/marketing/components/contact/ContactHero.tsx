import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import HubDiagram from "@/components/ui/HubDiagram";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#020617] py-10 lg:py-14">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-[1420px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        {/* Left Side Content (5 cols) - Aligned like other pages */}
        <div className="flex flex-col items-start text-left lg:col-span-5 pl-1 sm:pl-4 lg:pl-10 xl:pl-14">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
            Contact AIVIQONE
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
            Let&rsquo;s Build Something Better{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Together.
            </span>
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-slate-400 sm:text-base">
            Have a question, want to see AIVIQONE in action, or looking to
            discuss how we can help your business? Our team is ready to talk.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-demo"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(2,132,199,0.4)] transition-all hover:opacity-90 active:scale-95"
            >
              Book a Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#form"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#070e24]/70 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-sky-400 hover:text-white"
            >
              Send an Inquiry
              <Mail size={15} className="text-sky-400" />
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