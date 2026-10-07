import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

type OrbitItem = {
  label: string;
  icon: LucideIcon | IconType;
  angle: number;
};

export default function OrbitDiagram({ items }: { items: OrbitItem[] }) {
  const radius = 94;
  const center = 160;

  return (
    <div className="relative flex h-80 w-80 shrink-0 items-center justify-center overflow-visible select-none">
      {/* Outer Dashed Orbit Track */}
      <div className="absolute inset-4 animate-[spin_45s_linear_infinite] rounded-full border border-dashed border-sky-500/25" />
      
      {/* Secondary Inner Subtle Orbit Track */}
      <div className="absolute inset-16 animate-[spin_30s_linear_infinite_reverse] rounded-full border border-dotted border-sky-500/15" />

      {/* SVG Radial Connector Rays */}
      <svg
        viewBox="0 0 320 320"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {items.map(({ label, angle }) => {
          const rad = (angle * Math.PI) / 180;
          const x = center + radius * Math.cos(rad);
          const y = center + radius * Math.sin(rad);
          return (
            <line
              key={label}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#0284c7"
              strokeWidth="0.9"
              strokeDasharray="3 3"
              strokeOpacity="0.5"
            />
          );
        })}
      </svg>

      {/* Center Glowing Logo Core */}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-sky-400/80 bg-[#030712] shadow-[0_0_35px_rgba(56,189,248,0.6)]">
        {/* Soft Ambient Inner Glow */}
        <div className="absolute inset-1 rounded-full bg-sky-500/15 blur-sm" />
        
        {/* Render A_logo */}
        <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden p-1.5">
          <Image
            src="/A_logo.png"
            alt="AIVIQONE Logo"
            width={52}
            height={52}
            className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.85)]"
          />
        </div>
      </div>

      {/* Orbit Satellite Nodes */}
      {items.map(({ label, icon: Icon, angle }) => {
        const rad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <div
            key={label}
            className="group/node absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 cursor-pointer transition-all duration-300 hover:scale-110"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-500/35 bg-[#070d18] text-sky-400 shadow-[0_0_12px_rgba(2,132,199,0.3)] transition-all duration-300 group-hover/node:border-sky-300 group-hover/node:bg-[#0c1830] group-hover/node:text-white group-hover/node:shadow-[0_0_20px_rgba(56,189,248,0.75)]">
              <Icon size={16} />
            </span>
            <span className="whitespace-nowrap text-[10px] font-semibold text-slate-200 transition-colors duration-300 group-hover/node:text-white">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}