import { PhoneOutgoing, MessageSquare, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: PhoneOutgoing, // Call Cut / Disconnect / Missed Call Icon
    title: "Lost Follow-ups",
    desc: "Never miss an important conversation or scheduled follow-up.",
  },
  {
    icon: MessageSquare,
    title: "Scattered Communication",
    desc: "Bring calls, WhatsApp and customer interactions into one place.",
  },
  {
    icon: BarChart3,
    title: "Blind Sales Decisions",
    desc: "Give your team the data and intelligence needed to prioritize the right leads.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-t border-slate-800/60 bg-[#070b14] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl text-center">
        {/* Main Heading */}
        <h2 className="font-sans text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl lg:text-4xl">
          Your leads shouldn&apos;t disappear
          <br className="hidden sm:block" /> between calls, WhatsApp and
          spreadsheets.
        </h2>

        {/* Responsive Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative flex flex-col items-center rounded-xl border border-slate-800/80 bg-[#0d1322]/60 p-6 sm:p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:bg-[#0d1322] hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Top accent glow line on hover */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Clean Icon without background box */}
              <div className="flex items-center justify-center text-blue-500 transition-transform duration-300 group-hover:scale-110">
                <Icon size={32} strokeWidth={1.5} />
              </div>

              {/* Card Title */}
              <h3 className="mt-5 font-sans text-base sm:text-lg font-medium text-slate-100 transition-colors duration-300 group-hover:text-blue-400">
                {title}
              </h3>

              {/* Card Description */}
              <p className="mt-2.5 font-sans text-sm font-normal leading-relaxed text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
