import { PhoneMissed, MessagesSquare, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Lost Follow-ups",
    desc: "Never miss an important conversation or scheduled follow-up.",
  },
  {
    icon: MessagesSquare,
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
    <section className="border-t border-border/60 px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
          Your leads shouldn&apos;t disappear
          <br className="hidden sm:block" /> between calls, WhatsApp and
          spreadsheets.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:divide-x sm:divide-border/60">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center px-4">
              <Icon className="text-accent-light" size={28} />
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}