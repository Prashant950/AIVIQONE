import Link from "next/link";
import { Mail, Globe, Building2 } from "lucide-react";

export const directContactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@aiviqone.com",
    href: "mailto:hello@aiviqone.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "aiviqone.com",
    href: "https://aiviqone.com",
  },
  {
    icon: Building2,
    label: "Company",
    value: "AIVIQONE Technologies Pvt. Ltd.",
    href: null,
  },
];

export default function ReachDirectly() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-5 sm:py-7 border-t border-slate-800/60">
      <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:px-12">
        {/* Left Heading */}
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl text-center lg:text-left shrink-0">
          Prefer to Reach Us Directly?
        </h2>

        {/* Right Contact Cards */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {directContactCards.map(({ icon: Icon, label, value, href }) => {
            const CardContent = (
              <div className="group flex items-center gap-4 rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 px-5 py-3.5 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.15)] backdrop-blur-sm transition-all duration-300 hover:border-sky-500/40 hover:bg-[#071128] hover:shadow-[0_0_20px_rgba(2,132,199,0.15)]">
                <div className="flex shrink-0 items-center justify-center text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-xs text-slate-400 font-normal">{label}</span>
                  <span className="text-sm font-semibold text-sky-400 transition-colors group-hover:text-sky-300">
                    {value}
                  </span>
                </div>
              </div>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-transform active:scale-95"
              >
                {CardContent}
              </a>
            ) : (
              <div key={label}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}