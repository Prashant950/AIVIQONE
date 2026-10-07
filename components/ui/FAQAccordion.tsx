"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#0e2144] bg-[#050c1e]/90 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.15)] divide-y divide-[#0e2144]/80">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="transition-colors hover:bg-sky-500/5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left transition-colors sm:px-6"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-white sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-sky-400" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-slate-300 sm:px-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}