"use client";

import CollapsibleSection from "@/components/ui/CollapsibleSection";
import type { TermsSection, TermsSubsection } from "@/features/legal/data/termsOfService";
import { termsHighlights } from "@/features/legal/data/termsOfService";
import {
  ShieldCheck,
  CheckCircle2,
  Ban,
  Lock,
  Scale,
  Sparkles,
  MessageSquare,
  FileCheck2,
  Gavel,
  Database,
  Cpu,
  KeyRound,
} from "lucide-react";

function SubsectionContent({ sub }: { sub: TermsSubsection }) {
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
    </div>
  );
}

export default function TermsSectionBlock({ section }: { section: TermsSection }) {
  // Default open key core sections
  const isDefaultOpen = [
    "s1",
    "s2",
    "s3",
    "s5",
    "s10",
    "s14",
    "s15",
    "s19",
    "s28",
    "s31",
    "s44",
    "s45",
    "s54",
    "s73",
    "s74",
  ].includes(section.id);

  return (
    <CollapsibleSection id={section.id} title={section.title} defaultOpen={isDefaultOpen} level={0}>
      {/* Top paragraphs */}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed text-slate-300">
          {p}
        </p>
      ))}

      {/* Top bullets if any */}
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

      {/* Special Grid for Section 5: Commercial SaaS License Pillars */}
      {section.id === "s5" && (
        <div className="my-2 sm:my-3 flex flex-col gap-3 rounded-xl sm:rounded-2xl border border-slate-800/80 bg-[#040816] p-3.5 sm:p-5">
          <div className="flex flex-col gap-0.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              SaaS License &amp; Governance Principles
            </h4>
            <p className="text-xs text-slate-300">
              Core operating parameters for internal business subscriptions:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {termsHighlights.map((item) => (
              <div
                key={item.key}
                className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-[#020510]/80 p-3 sm:p-3.5 transition-all duration-200 hover:border-cyan-500/40"
              >
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  <ShieldCheck size={16} />
                </span>
                <div className="flex flex-col gap-0.5">
                  <h5 className="text-xs font-bold text-white">{item.title}</h5>
                  <p className="text-[11px] leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Special Showcase for Section 14: Prohibited Activities Matrix */}
      {section.id === "s14" && (
        <div className="my-2 sm:my-3 flex flex-col gap-3 rounded-xl sm:rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-950/20 via-[#040816] to-[#020510] p-3.5 sm:p-5 shadow-lg">
          <div className="flex items-center gap-2 text-rose-400">
            <Ban size={16} />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Zero-Tolerance Platform Prohibitions (8 Categories)
            </h4>
          </div>
          <p className="text-xs text-slate-300">
            Strict restrictions enforced automatically via telemetry and proactive security controls:
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 pt-1">
            {[
              { num: "01", label: "Illegal Activity & Fraud", desc: "Phishing, identity theft, money laundering" },
              { num: "02", label: "Platform Abuse & Attacks", desc: "Malware, ransomware, DDoS, scans" },
              { num: "03", label: "Credential Sharing", desc: "Bypassing MFA or unauthorized logins" },
              { num: "04", label: "Reverse Engineering", desc: "Decompiling, cloning, source logic" },
              { num: "05", label: "IP & License Violations", desc: "Redistribution, reselling, label removal" },
              { num: "06", label: "Automated Scraping", desc: "Bots, crawlers, unauthorized harvesting" },
              { num: "07", label: "Unsolicited Spam", desc: "Deceptive mass broadcasts without consent" },
              { num: "08", label: "Harmful Content", desc: "Defamatory, obscene, or infringing files" },
            ].map((p, idx) => (
              <div key={idx} className="flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-[#020510]/80 p-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-rose-500/30 bg-rose-500/10 text-[10px] font-bold text-rose-400">
                  {p.num}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-white">{p.label}</span>
                  <span className="text-[11px] leading-relaxed text-slate-400">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Special Box for Section 28: Intellectual Property Exclusivity */}
      {section.id === "s28" && (
        <div className="my-2 sm:my-3 flex flex-col gap-3 rounded-xl sm:rounded-2xl border border-sky-500/30 bg-[#040816] p-3.5 sm:p-5">
          <div className="flex items-center gap-2 text-sky-400">
            <Lock size={16} />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Intellectual Property Exclusivity (AIVIQONE Proprietary Assets)
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 pt-1 text-xs text-slate-300">
            <div className="rounded-lg border border-slate-800 bg-[#020510] p-2.5 flex items-center gap-2.5">
              <Cpu size={15} className="text-cyan-400 shrink-0" />
              <span className="text-xs font-medium">Proprietary AI Models</span>
            </div>
            <div className="rounded-lg border border-slate-800 bg-[#020510] p-2.5 flex items-center gap-2.5">
              <KeyRound size={15} className="text-sky-400 shrink-0" />
              <span className="text-xs font-medium">Source &amp; Object Code</span>
            </div>
            <div className="rounded-lg border border-slate-800 bg-[#020510] p-2.5 flex items-center gap-2.5">
              <Database size={15} className="text-blue-400 shrink-0" />
              <span className="text-xs font-medium">Platform Architecture</span>
            </div>
            <div className="rounded-lg border border-slate-800 bg-[#020510] p-2.5 flex items-center gap-2.5">
              <Sparkles size={15} className="text-emerald-400 shrink-0" />
              <span className="text-xs font-medium">Trademarks &amp; Branding</span>
            </div>
          </div>
        </div>
      )}

      {/* Special Box for Section 31: AI and Machine Learning Safeguards */}
      {section.id === "s31" && (
        <div className="my-2 sm:my-3 flex flex-col gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-sky-950/20 via-[#040816] to-cyan-950/20 p-3.5 sm:p-5 shadow-lg">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles size={16} />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Responsible AI &amp; Tenant Data Isolation Guarantee
            </h4>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            AIVIQONE does not intentionally use customer CRM records, private documents, or communications to train publicly available third-party AI models. All automated inferences operate within isolated customer contexts.
          </p>
        </div>
      )}

      {/* Special Showcase for Section 54: Dispute Resolution & Arbitration */}
      {section.id === "s54" && (
        <div className="my-2 sm:my-3 flex flex-col gap-3 rounded-xl sm:rounded-2xl border border-sky-500/30 bg-[#040816] p-3.5 sm:p-5">
          <div className="flex items-center gap-2 text-sky-400">
            <Gavel size={16} />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Arbitration &amp; Dispute Resolution Framework
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 pt-1">
            <div className="flex flex-col gap-0.5 rounded-lg border border-slate-800 bg-[#020510] p-2.5 sm:p-3">
              <span className="text-[10px] text-slate-400">Governing Law</span>
              <span className="text-xs font-bold text-white">Republic of India</span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-lg border border-slate-800 bg-[#020510] p-2.5 sm:p-3">
              <span className="text-[10px] text-slate-400">Seat &amp; Venue</span>
              <span className="text-xs font-bold text-white">New Delhi, India</span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-lg border border-slate-800 bg-[#020510] p-2.5 sm:p-3">
              <span className="text-[10px] text-slate-400">Arbitration Act</span>
              <span className="text-xs font-bold text-white">Act 1996 (Sole Arbitrator)</span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-lg border border-slate-800 bg-[#020510] p-2.5 sm:p-3">
              <span className="text-[10px] text-slate-400">Official Language</span>
              <span className="text-xs font-bold text-white">English</span>
            </div>
          </div>
        </div>
      )}

      {/* Special Box for Section 73: Final Legal Acknowledgement */}
      {section.id === "s73" && (
        <div className="my-2 sm:my-3 rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-sky-950/40 via-[#040816] to-cyan-950/40 p-3.5 sm:p-5 shadow-lg">
          <div className="flex items-center gap-2.5 pb-2 sm:pb-3 text-cyan-400">
            <CheckCircle2 size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Customer Declaration &amp; Legal Binding
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            By accessing, registering for, subscribing to, purchasing, or using AIVIQONE Services, you confirm you have read, understood, and voluntarily agree to be legally bound by these Terms of Service in their entirety.
          </p>
        </div>
      )}

      {/* Subsections rendering */}
      {section.subsections && section.subsections.length > 0 && (
        <div className="flex flex-col gap-3 pt-2">
          {section.subsections.map((sub) => (
            <CollapsibleSection key={sub.id} id={sub.id} title={sub.title} defaultOpen={isDefaultOpen} level={1}>
              <SubsectionContent sub={sub} />
            </CollapsibleSection>
          ))}
        </div>
      )}
    </CollapsibleSection>
  );
}
