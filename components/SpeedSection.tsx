import {
  Clock,
  Bell,
  MessageSquare,
  Users,
  Layers,
  Lock,
} from "lucide-react";

const points = [
  {
    icon: Clock,
    title: "Real-time Visibility",
    desc: "Track every activity as it happens.",
  },
  {
    icon: Bell,
    title: "Automated Follow-ups",
    desc: "Stay consistent without the manual work.",
  },
  {
    icon: MessageSquare,
    title: "Centralized Communication",
    desc: "Calls, WhatsApp, emails and notes in one place.",
  },
  {
    icon: Users,
    title: "Team Accountability",
    desc: "Know who did what, when and what's next.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Built to grow with your team and your business.",
  },
  {
    icon: Lock,
    title: "Secure Business Data",
    desc: "Enterprise-grade security to protect your data.",
  },
];

export default function SpeedSection() {
  return (
    <section className="border-t border-slate-800/60 bg-[#070b14] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <h2 className="text-center font-sans text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl lg:text-4xl">
          Built for speed. Designed for control.
        </h2>

        {/* Responsive Grid System */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative flex flex-col items-center rounded-xl border border-slate-800/80 bg-[#0d1322]/60 p-5 text-center transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-[#0d1322] hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Clean Icon without background box (Image UI Matching Style) */}
              <div className="flex items-center justify-center text-blue-500 transition-transform duration-300 group-hover:scale-110">
                <Icon size={28} strokeWidth={1.5} />
              </div>

              {/* Card Title */}
              <h3 className="mt-4 font-sans text-sm font-medium leading-snug text-slate-100 transition-colors duration-300 group-hover:text-blue-400">
                {title}
              </h3>

              {/* Card Description */}
              <p className="mt-2 font-sans text-xs font-normal leading-relaxed text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
