import Container from "@/components/ui/Container";

export default function TechSimplifySection() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-8 sm:py-10 md:py-12">
      <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center gap-6 px-5 text-center sm:px-8 lg:px-12">
        <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
          THE COMPANY
        </span>
        <h2 className="max-w-3xl text-2xl font-extrabold tracking-tight text-white sm:text-[28px] lg:text-[32px] lg:leading-[1.25]">
          Technology Should Simplify Business, Not Complicate It.
        </h2>
        <div className="flex max-w-3xl flex-col gap-4 text-slate-300">
          <p className="text-sm leading-relaxed sm:text-base">
            Businesses today operate across countless tools, spreadsheets,
            messaging platforms and disconnected systems. AIVIQONE was
            created with a simple belief: the technology running a business
            should work together.
          </p>
          <p className="text-sm leading-relaxed sm:text-base">
            Instead of forcing teams to manage multiple disconnected systems,
            AIVIQONE is building a unified platform where customer
            relationships, conversations, sales workflows and intelligent
            decision-support work together.
          </p>
        </div>
      </div>
    </section>
  );
}