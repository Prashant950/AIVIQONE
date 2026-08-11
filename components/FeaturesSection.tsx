import { User, BrainCircuit, MessageCircle, PhoneCall } from "lucide-react";

const features = [
  {
    icon: User,
    title: "Smart CRM",
    desc: "Manage leads, customers, activities and conversations from one workspace.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Lead Intelligence",
    desc: "Prioritize leads and identify the opportunities most likely to convert.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp & Communication",
    desc: "Manage customer conversations and campaigns without leaving your CRM.",
  },
  {
    icon: PhoneCall,
    title: "VoIP & Call Management",
    desc: "Make, receive and track business calls directly from your sales workflow.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
          One platform. Your entire sales operation.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <Icon className="text-accent-light" size={24} />
              <h3 className="mt-4 text-base font-semibold leading-snug">
                {title}
              </h3>
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