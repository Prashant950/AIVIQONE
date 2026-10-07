"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import type { RefundSection } from "@/features/legal/data/refundPolicy";

export default function RefundPolicyTOC({ sections }: { sections: RefundSection[] }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav className="flex max-h-[calc(100vh-240px)] flex-col gap-0.5 overflow-y-auto pr-1 text-xs sm:text-sm custom-scrollbar">
      {sections.map((section) => {
        const hasChildren = !!section.subsections?.length;
        const isOpen = expanded[section.id];
        const isActive = activeId === section.id;

        return (
          <div key={section.id} className="flex flex-col">
            <div className="flex items-center gap-1">
              {hasChildren ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setExpanded((p) => ({ ...p, [section.id]: !p[section.id] }));
                  }}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-slate-400 hover:bg-slate-800/60 hover:text-white"
                  aria-label="Toggle sub-sections"
                >
                  <ChevronRight
                    size={13}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-90 text-cyan-400" : ""}`}
                  />
                </button>
              ) : (
                <span className="w-6 shrink-0" />
              )}

              <a
                href={`#${section.id}`}
                onClick={() => setActiveId(section.id)}
                className={`flex-1 truncate rounded-lg px-2 py-1.5 transition-colors ${
                  isActive
                    ? "bg-cyan-500/10 font-semibold text-cyan-400 border-l-2 border-cyan-400 pl-2.5"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
                title={section.title}
              >
                {section.title}
              </a>
            </div>

            {hasChildren && isOpen && (
              <div className="ml-7 flex flex-col gap-0.5 border-l border-slate-800 pl-2 pt-0.5">
                {section.subsections!.map((sub) => (
                  <a
                    key={sub.id}
                    href={`#${sub.id}`}
                    className="rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800/40 hover:text-cyan-300 truncate"
                    title={sub.title}
                  >
                    {sub.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
