"use client";

import CollapsibleSection from "@/components/ui/CollapsibleSection";
import type { RefundSection, RefundSubsection } from "@/features/legal/data/refundPolicy";
import { refundHighlights, nonRefundableItemsList } from "@/features/legal/data/refundPolicy";
import {
  CheckCircle2,
  AlertCircle,
  FileCheck2,
  Scale,
  ShieldCheck,
  Zap,
  HelpCircle,
  Clock,
  Ban,
  Receipt,
  Gavel,
} from "lucide-react";

function SubsectionContent({ sub }: { sub: RefundSubsection }) {
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

export default function RefundPolicySectionBlock({ section }: { section: RefundSection }) {
  // Default open key sections
  const isDefaultOpen = [
    "s1",
    "s2",
    "s3",
    "s7",
    "s9",
    "s10",
    "s11",
    "s14",
    "s24",
    "s32",
    "s33",
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

      {/* Special Grid for Section 3: General Commercial Principles */}
      {section.id === "s3" && (
        <div className="my-2 sm:my-3 flex flex-col gap-3 rounded-xl sm:rounded-2xl border border-slate-800/80 bg-[#040816] p-3.5 sm:p-5">
          <div className="flex flex-col gap-0.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Commercial Operations Framework
            </h4>
            <p className="text-xs text-slate-300">
              Guiding standards for digital provisioning and subscription lifecycles:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {refundHighlights.map((item) => (
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

      {/* Special Matrix for Section 10: Non-Refundable Fee Categories */}
      {section.id === "s10" && (
        <div className="my-2 sm:my-3 flex flex-col gap-3 rounded-xl sm:rounded-2xl border border-slate-800/80 bg-[#040816] p-3.5 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-2.5 gap-2">
            <div className="flex items-center gap-2 text-cyan-400">
              <Ban size={16} />
              <h4 className="text-xs font-bold uppercase tracking-wider">
                Non-Refundable Fee Schedule (20 Items)
              </h4>
            </div>
            <span className="inline-flex self-start sm:self-auto rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-slate-300">
              Digital &amp; Consumable Assets
            </span>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 pt-1 sm:pt-2">
            {nonRefundableItemsList.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 rounded-lg border border-slate-800/60 bg-[#020510]/60 px-3 py-2 text-xs text-slate-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Special Showcase for Section 11: Exceptional Refunds Review */}
      {section.id === "s11" && (
        <div className="my-2 sm:my-3 flex flex-col gap-3 rounded-xl sm:rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-[#040816] to-[#020510] p-3.5 sm:p-5 shadow-lg">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 size={16} />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Exceptional Refund Evaluation Criteria
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 pt-1">
            <div className="flex flex-col gap-1 rounded-xl border border-slate-800/80 bg-[#020510]/80 p-3 sm:p-3.5">
              <span className="text-xs font-bold text-white">1. Duplicate Transaction</span>
              <p className="text-[11px] leading-relaxed text-slate-400">
                System or gateway duplication for identical billing periods is refunded 100%.
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-xl border border-slate-800/80 bg-[#020510]/80 p-3 sm:p-3.5">
              <span className="text-xs font-bold text-white">2. Verified System Error</span>
              <p className="text-[11px] leading-relaxed text-slate-400">
                Billing errors attributable solely to AIVIQONE technical infrastructure.
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-xl border border-slate-800/80 bg-[#020510]/80 p-3 sm:p-3.5">
              <span className="text-xs font-bold text-white">3. Original Method Credit</span>
              <p className="text-[11px] leading-relaxed text-slate-400">
                Approved funds are returned to original payment source within standard banking windows.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Special Showcase for Section 24: Dispute Resolution & Arbitration */}
      {section.id === "s24" && (
        <div className="my-2 sm:my-3 flex flex-col gap-3 rounded-xl sm:rounded-2xl border border-sky-500/30 bg-[#040816] p-3.5 sm:p-5">
          <div className="flex items-center gap-2 text-sky-400">
            <Gavel size={16} />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              Arbitration &amp; Dispute Resolution Framework
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 pt-1">
            <div className="flex flex-col gap-0.5 rounded-lg border border-slate-800 bg-[#020510] p-2.5 sm:p-3">
              <span className="text-[10px] text-slate-400">Governing Act</span>
              <span className="text-xs font-bold text-white">Arbitration Act 1996</span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-lg border border-slate-800 bg-[#020510] p-2.5 sm:p-3">
              <span className="text-[10px] text-slate-400">Seat &amp; Venue</span>
              <span className="text-xs font-bold text-white">New Delhi, India</span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-lg border border-slate-800 bg-[#020510] p-2.5 sm:p-3">
              <span className="text-[10px] text-slate-400">Proceedings Language</span>
              <span className="text-xs font-bold text-white">English</span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-lg border border-slate-800 bg-[#020510] p-2.5 sm:p-3">
              <span className="text-[10px] text-slate-400">Tribunal</span>
              <span className="text-xs font-bold text-white">Sole Arbitrator (1)</span>
            </div>
          </div>
        </div>
      )}

      {/* Special Box for Section 32: Final Acknowledgement */}
      {section.id === "s32" && (
        <div className="my-2 sm:my-3 rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-sky-950/40 via-[#040816] to-cyan-950/40 p-3.5 sm:p-5 shadow-lg">
          <div className="flex items-center gap-2.5 pb-2 sm:pb-3 text-cyan-400">
            <CheckCircle2 size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Customer Declaration &amp; Legal Binding
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            By purchasing, subscribing to, or accessing AIVIQONE Services, you confirm you have read, understood, and voluntarily agreed to be legally bound by this Refund &amp; Cancellation Policy.
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
