import { User, Brain, Phone } from "lucide-react";

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 32, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const features = [
  {
    icon: User,
    title: "Smart CRM",
    desc: "Manage leads, customers, activities and conversations from one workspace.",
  },
  {
    icon: Brain,
    title: "AI-Powered Lead Intelligence",
    desc: "Prioritize leads and identify the opportunities most likely to convert.",
  },
  {
    icon: WhatsAppIcon, // Added WhatsApp Icon here
    title: "WhatsApp & Communication",
    desc: "Manage customer conversations and campaigns without leaving your CRM.",
  },
  {
    icon: Phone,
    title: "VoIP & Call Management",
    desc: "Make, receive and track business calls directly from your sales workflow.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="border-t border-slate-800/60 bg-[#070b14] px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Main Heading */}
        <h2 className="text-center font-sans text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl lg:text-4xl">
          One platform. Your entire sales operation.
        </h2>

        {/* Responsive Grid System */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-800/80 bg-[#0d1322]/60 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-[#0d1322] hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Top border glow effect on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Icon Container with WhatsApp & other Lucide icons matched */}
                <div className="flex h-10 w-10 items-center justify-start text-blue-500 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={32} />
                </div>

                {/* Card Title */}
                <h3 className="mt-4 font-sans text-base font-medium leading-snug text-slate-100 transition-colors duration-300 group-hover:text-blue-400">
                  {title}
                </h3>

                {/* Card Description */}
                <p className="mt-2.5 font-sans text-sm font-normal leading-relaxed text-slate-400">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
