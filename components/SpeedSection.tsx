import {
  Clock,
  Bell,
  MessagesSquare,
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
    icon: MessagesSquare,
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
    <section className="border-t border-border/60 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
          Built for speed. Designed for control.
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <Icon className="text-accent-light" size={26} />
              <h3 className="mt-3 text-sm font-semibold leading-snug">
                {title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}