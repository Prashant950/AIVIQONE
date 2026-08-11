import {
  UserPlus,
  Phone,
  MessageSquare,
  CalendarCheck,
  FileText,
  ShieldCheck,
  CheckCircle2,
  MoveRight,
} from "lucide-react";

const steps = [
  { icon: UserPlus, label: "Lead Captured" },
  { icon: Phone, label: "Contacted" },
  { icon: MessageSquare, label: "Interested" },
  { icon: CalendarCheck, label: "Follow-up" },
  { icon: FileText, label: "Documentation" },
  { icon: ShieldCheck, label: "Approval" },
  { icon: CheckCircle2, label: "Confirmed" },
];

export default function ProcessSection() {
  return (
    <section className="border-t border-slate-800/60 bg-[#070b14] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-center font-sans text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl lg:text-4xl">
          From first contact to confirmed customer.
        </h2>

        {/* Mobile View */}
        <div className="mt-12 grid grid-cols-2 gap-y-8 gap-x-4 sm:hidden">
          {steps.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-center text-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500">
                <Icon size={22} />
              </div>
              <span className="mt-3 font-sans text-sm font-medium leading-snug text-slate-300">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="mt-16 hidden items-center justify-between sm:flex">
          {steps.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center">
              <div className="group flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-[#0f172a]/60 text-slate-300 shadow-sm transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:border-blue-500/60 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                  <Icon size={24} />
                </div>
                <span className="whitespace-nowrap font-sans text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                  {label}
                </span>
              </div>

              {i < steps.length - 1 && (
                <div className="mx-2 mb-7 flex items-center justify-center text-slate-700 lg:mx-3">
                  <div className="flex items-center gap-1">
                    <span className="h-[1px] w-4 border-t border-dashed border-slate-700 lg:w-8" />
                    <MoveRight size={14} className="text-slate-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
