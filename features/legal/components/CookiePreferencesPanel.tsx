"use client";

import { useState } from "react";
import { Check, SlidersHorizontal, RotateCcw, ShieldCheck } from "lucide-react";
import { cookiePreferenceToggles } from "@/features/legal/data/cookiePolicy";

export default function CookiePreferencesPanel() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    essential: true,
    functional: true,
    performance: true,
    analytics: false,
    marketing: false,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setToggles({
      essential: true,
      functional: false,
      performance: false,
      analytics: false,
      marketing: false,
    });
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5 rounded-xl sm:rounded-2xl border border-slate-800/90 bg-gradient-to-br from-[#060e22] to-[#020510] p-3.5 sm:p-6 shadow-xl">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-cyan-400">
            <SlidersHorizontal size={16} />
            <h4 className="text-xs font-bold uppercase tracking-wider">Interactive Consent Manager</h4>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Adjust your granular cookie preferences. Changes take effect across your current session.
          </p>
        </div>

        {saved && (
          <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 animate-fade-in mt-1 sm:mt-0">
            <Check size={14} /> Preferences Saved!
          </span>
        )}
      </div>

      <div className="flex flex-col divide-y divide-slate-800/80 rounded-xl border border-slate-800/80 bg-[#020510]/90 p-3 sm:p-4">
        {cookiePreferenceToggles.map((item) => (
          <div key={item.key} className="flex items-center justify-between py-2.5 sm:py-3 gap-2">
            <div className="flex flex-col pr-2 sm:pr-4">
              <span className="text-xs font-semibold text-white">{item.label}</span>
              <span className="text-[11px] text-slate-400 leading-snug">{item.description}</span>
            </div>

            {item.locked ? (
              <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                <Check size={12} /> Always Active
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setToggles((p) => ({ ...p, [item.key]: !p[item.key] }))}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                  toggles[item.key] ? "bg-gradient-to-r from-sky-500 to-cyan-500" : "bg-slate-700"
                }`}
                aria-pressed={toggles[item.key]}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    toggles[item.key] ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <RotateCcw size={13} />
          Reset to Essential Only
        </button>

        <button
          type="button"
          onClick={handleSave}
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-2 text-xs font-bold text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all hover:opacity-95"
        >
          <Check size={14} />
          Save Preferences
        </button>
      </div>
    </div>
  );
}