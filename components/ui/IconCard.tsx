import { LucideIcon } from "lucide-react";

export default function IconCard({
  icon: Icon,
  title,
  description,
  badge,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-border bg-bg-card p-6 transition-all duration-200 hover:border-brand/50 hover:bg-bg-elevated">
      {badge && (
        <span className="absolute -top-3 left-4 rounded-full bg-brand-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-bg-elevated text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
      </div>
    </div>
  );
}