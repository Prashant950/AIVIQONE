import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutCTA() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-6 sm:py-8 md:py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-sky-500/20 bg-[#070d18]/70 p-6 sm:flex-row sm:gap-8 sm:p-8">
          <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden p-1.5">
          <Image
            src="/A_logo.png"
            alt="AIVIQONE Logo"
            width={52}
            height={52}
            className="h-full w-full object-contain border border-sky-500/20 shadow-[0_0_15px_rgba(2,132,199,0.3)]"
          />
        </div>

          <span className="hidden h-12 w-px bg-slate-800 sm:block" />

          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <p className="text-sm leading-relaxed text-slate-400 sm:text-sm">
              AIVIQONE Technologies Pvt. Ltd. is on a mission to empower every sales professional
              and business with technology that makes sales operations smarter, faster and more effective.
            </p>
            <p className="text-sm font-bold text-white sm:text-base">
              One Platform. Every Lead. <span className="text-sky-400">Endless Growth.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}