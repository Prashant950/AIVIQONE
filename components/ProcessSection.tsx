import {
  UserPlus,
  Phone,
  MessageSquare,
  CalendarCheck,
  FileText,
  ShieldCheck,
  CheckCircle2,
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
    <section className="border-t border-border/60 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
          From first contact to confirmed customer.
        </h2>

        {/* Mobile & tablet: compact grid, 3 per row */}
        <div className="mt-12 grid grid-cols-3 gap-x-3 gap-y-8 sm:hidden">
          {steps.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent-light">
                <Icon size={18} />
              </div>
              <span className="mt-2 text-[11px] font-medium leading-tight text-slate-300">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop / larger tablets: connected horizontal flow */}
        <div className="mt-14 hidden items-center justify-between gap-2 sm:flex">
          {steps.map(({ icon: Icon, label }, i) => (
            <div key={label} className="contents">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent-light">
                  <Icon size={22} />
                </div>
                <span className="whitespace-nowrap text-xs font-medium text-slate-300">
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="mx-1 mb-6 h-px w-6 shrink-0 border-t border-dashed border-border lg:w-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}