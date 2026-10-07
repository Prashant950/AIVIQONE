"use client";

import CollapsibleSection from "@/components/ui/CollapsibleSection";
import type { PolicySection, PolicySubsection } from "@/features/legal/data/privacyPolicy";
import {
  AppWindow,
  UserCheck,
  Headphones,
  CreditCard,
  Sparkles,
  MailCheck,
  ShieldCheck,
  Lock,
  BarChart3,
  Scale,
  Server,
  Database,
  Radio,
  FileCheck2,
} from "lucide-react";

// 10 Icons for "How We Use Information"
const useInfoCards = [
  { label: "Provide and operate AIVIQONE services", icon: AppWindow },
  { label: "Create and manage user accounts", icon: UserCheck },
  { label: "Provide customer support", icon: Headphones },
  { label: "Process payments and transactions", icon: CreditCard },
  { label: "Improve products and services", icon: Sparkles },
  { label: "Send important service communications", icon: MailCheck },
  { label: "Maintain security and system integrity", icon: ShieldCheck },
  { label: "Prevent fraud, abuse and misuse", icon: Lock },
  { label: "Understand product usage and performance", icon: BarChart3 },
  { label: "Comply with legal obligations", icon: Scale },
];

// 6 Cards for "How We Share Information"
const sharingCards = [
  {
    title: "Service Providers",
    description: "Third-party vendors who help us provide and operate our Services.",
    icon: Server,
  },
  {
    title: "Payment Providers",
    description: "Providers who process payments and related financial transactions.",
    icon: CreditCard,
  },
  {
    title: "Infrastructure Providers",
    description: "Cloud hosting and infrastructure providers who store and process data.",
    icon: Database,
  },
  {
    title: "Communication Providers",
    description: "Providers who enable email, SMS, WhatsApp and other communications.",
    icon: Radio,
  },
  {
    title: "Analytics Providers",
    description: "Providers who help us analyze and improve our products and services.",
    icon: BarChart3,
  },
  {
    title: "Legal & Regulatory Authorities",
    description: "When required by law, regulation or legal process.",
    icon: FileCheck2,
  },
];

// Cookie Table Data
const cookieTableData = [
  {
    technology: "Essential Cookies",
    purpose: "Required for core website functionality and security.",
    category: "Essential",
  },
  {
    technology: "Analytics Cookies",
    purpose: "Help us understand how users interact with our website and services.",
    category: "Analytics",
  },
  {
    technology: "Functional Cookies",
    purpose: "Remember your preferences and provide enhanced features.",
    category: "Preferences",
  },
  {
    technology: "Advertising Cookies",
    purpose: "Used to deliver relevant content and measure campaign performance.",
    category: "Analytics",
  },
];

function SubsectionContent({ sub }: { sub: PolicySubsection }) {
  return (
    <div className="flex flex-col gap-3">
      {sub.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed text-slate-300">
          {p}
        </p>
      ))}

      {sub.bullets && (
        <ul className="flex flex-col gap-2 pl-1">
          {sub.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {sub.note && (
        <p className="rounded-xl border border-sky-500/20 bg-sky-500/5 px-4 py-3 text-xs leading-relaxed text-slate-300">
          <strong className="text-sky-400">Note: </strong> {sub.note}
        </p>
      )}
    </div>
  );
}

export default function PolicySectionBlock({ section }: { section: PolicySection }) {
  // Check if this is the Information We Collect section
  const isInfoCollectSection = section.id === "info-we-collect";
  // Check if this is How We Use section
  const isHowWeUseSection = section.id === "how-we-use";
  // Check if this is Cookies section
  const isCookiesSection = section.id === "cookies-tracking";
  // Check if this is Sharing section
  const isSharingSection = section.id === "sharing-info";

  // Default open first few main sections
  const isDefaultOpen = [
    "intro",
    "purpose",
    "info-we-collect",
    "how-we-use",
    "cookies-tracking",
    "sharing-info",
  ].includes(section.id);

  return (
    <CollapsibleSection id={section.id} title={section.title} defaultOpen={isDefaultOpen} level={0}>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed text-slate-300">
          {p}
        </p>
      ))}

      {/* Special 3-Column UI for "Information We Collect" */}
      {isInfoCollectSection && (
        <div className="my-2 grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-2.5 rounded-xl border border-slate-800/90 bg-[#040816] p-3 sm:p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Information You Provide
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Name &amp; Email address
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Phone number &amp; Job title
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Company &amp; Business info
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Account credentials
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Billing information
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Forms &amp; Survey data
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Support communications
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2.5 rounded-xl border border-slate-800/90 bg-[#040816] p-3 sm:p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Information Collected Automatically
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> IP address &amp; ISP
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Browser type &amp; version
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Device &amp; OS info
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Usage telemetry &amp; logs
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Session duration &amp; clicks
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Cookies &amp; Local storage
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Website interaction data
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2.5 rounded-xl border border-slate-800/90 bg-[#040816] p-3 sm:p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Information Related to Our Services
            </h4>
            <ul className="flex flex-col gap-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Customer &amp; Lead records
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Sales pipeline data
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Communication logs
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Uploaded documents &amp; files
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Tasks &amp; Workflow info
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Team assignments
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-400" /> Activity within AIVIQONE
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Special 10-Item Icon Grid for "How We Use Information" */}
      {isHowWeUseSection && (
        <div className="my-2 grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 md:grid-cols-5">
          {useInfoCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 rounded-xl border border-slate-800/80 bg-[#040816] p-2.5 sm:p-3 text-center transition-all hover:border-sky-500/30 hover:bg-[#071126]"
              >
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 leading-tight">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Special Table for "Cookies & Tracking Technologies" */}
      {isCookiesSection && (
        <div className="my-2 overflow-hidden rounded-xl border border-slate-800/90 bg-[#040816]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60 text-slate-200">
                  <th className="px-4 py-3 font-semibold">Technology</th>
                  <th className="px-4 py-3 font-semibold">Purpose</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {cookieTableData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-white">{row.technology}</td>
                    <td className="px-4 py-3 text-slate-300">{row.purpose}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-semibold text-cyan-400">
                        {row.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Special Grid for "How We Share Information" */}
      {isSharingSection && (
        <div className="my-2 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {sharingCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-slate-800/80 bg-[#040816] p-3.5 transition-all hover:border-sky-500/30"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400">
                  <Icon size={16} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-xs font-bold text-white">{card.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Standard Bullets */}
      {section.bullets && (
        <ul className="flex flex-col gap-2 pl-1">
          {section.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Bullet Groups */}
      {section.bulletGroups?.map((group, i) => (
        <div key={i} className="flex flex-col gap-2">
          <p className="text-sm font-semibold text-white">{group.heading}</p>
          <ul className="flex flex-col gap-2 pl-1">
            {group.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Note Callout */}
      {section.note && (
        <p className="rounded-xl border border-sky-500/20 bg-sky-500/5 px-4 py-3 text-xs leading-relaxed text-slate-300">
          <strong className="text-sky-400">Note: </strong> {section.note}
        </p>
      )}

      {/* Subsections */}
      {section.subsections && section.subsections.length > 0 && (
        <div className="flex flex-col gap-2.5 mt-2">
          {section.subsections.map((sub) => (
            <CollapsibleSection key={sub.id} id={sub.id} title={sub.title} level={1} defaultOpen={isDefaultOpen}>
              <SubsectionContent sub={sub} />
            </CollapsibleSection>
          ))}
        </div>
      )}
    </CollapsibleSection>
  );
}