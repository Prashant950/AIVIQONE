"use client";

import CollapsibleSection from "@/components/ui/CollapsibleSection";
import type { CookieSection, CookieSubsection } from "@/features/legal/data/cookiePolicy";
import CookieHighlightGrid from "./CookieHighlightGrid";
import CookieTypesTable from "./CookieTypesTable";
import CookiePreferencesPanel from "./CookiePreferencesPanel";
import { CheckCircle2, ShieldCheck, FileText, AlertCircle } from "lucide-react";

function SubsectionContent({ sub }: { sub: CookieSubsection }) {
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

export default function CookiePolicySectionBlock({ section }: { section: CookieSection }) {
  // Default open first 5 sections
  const isDefaultOpen = ["s1", "s2", "s3", "s4", "s5", "s16", "s40", "s41"].includes(section.id);

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

      {/* Interactive additions for Section 3 */}
      {section.id === "s3" && (
        <div className="my-2">
          <CookieHighlightGrid />
        </div>
      )}

      {/* Interactive additions for Section 4 */}
      {section.id === "s4" && (
        <div className="my-2">
          <CookieTypesTable />
        </div>
      )}

      {/* Interactive additions for Section 16 */}
      {section.id === "s16" && (
        <div id="cookie-preferences" className="my-2 scroll-mt-28">
          <CookiePreferencesPanel />
        </div>
      )}

      {/* Special Box for Section 40: Final Acknowledgement */}
      {section.id === "s40" && (
        <div className="my-3 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-sky-950/40 via-[#040816] to-cyan-950/40 p-5 shadow-lg">
          <div className="flex items-center gap-2.5 pb-3 text-cyan-400">
            <CheckCircle2 size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">User Declaration &amp; Acceptance</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300">
            By proceeding to use AIVIQONE Services, you confirm you have reviewed these operational cookie practices and exercised available consent selections.
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
