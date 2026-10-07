import { Mail, Globe, Building2, ShieldCheck, ArrowRight, Gavel, FileCheck2, Scale } from "lucide-react";
import Link from "next/link";
import TermsHero from "@/features/legal/components/TermsHero";
import TermsTOC from "@/features/legal/components/TermsTOC";
import TermsSectionBlock from "@/features/legal/components/TermsSectionBlock";
import { termsOfServiceSections, termsOfServiceMeta } from "@/features/legal/data/termsOfService";

export const metadata = {
  title: "Terms of Service | AIVIQONE",
  description:
    "Official Terms of Service of AIVIQONE Technologies Pvt. Ltd. governing cloud CRM licensing, customer data ownership, AI services, and enterprise commercial standards.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      {/* Hero with Cyber Legal Shield & Agreement Vault graphic */}
      <TermsHero />

      <div id="policy-content" className="scroll-mt-20 mx-auto w-full max-w-[1420px] px-3.5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
          {/* Left sidebar (Sticky) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-5">
              {/* On This Page card */}
              <div className="rounded-2xl border border-slate-800/90 bg-[#040816]/90 p-4 shadow-xl backdrop-blur-md">
                <span className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-cyan-400">
                  On This Page (74 Sections)
                </span>
                <TermsTOC sections={termsOfServiceSections} />
              </div>

              {/* Legal Guarantee Card */}
              <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/90 bg-[#040816]/90 p-5 shadow-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
                  <Scale size={20} />
                </div>
                <h3 className="text-sm font-bold text-white">Commercial Governance.</h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  Customer Data remains the 100% exclusive property of the customer. AIVIQONE delivers enterprise cloud CRM with strict tenant isolation and binding arbitration under Indian law.
                </p>
                <a
                  href="#s71"
                  className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline pt-1"
                >
                  <Gavel size={13} />
                  Legal Inquiries
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex flex-col gap-3.5 sm:gap-5">
            {termsOfServiceSections.map((section) => (
              <TermsSectionBlock key={section.id} section={section} />
            ))}

            {/* Contact Information Card (Section 71 Highlight) */}
            <div
              id="s71"
              className="scroll-mt-28 relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-800/90 bg-gradient-to-br from-[#060e22] to-[#030712] p-4 sm:p-8 shadow-2xl"
            >
              {/* Ambient lighting inside card */}
              <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px]" />

              <div className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-12 items-center">
                {/* Left Column */}
                <div className="flex flex-col gap-4 md:col-span-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Legal &amp; Compliance Dept
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    71. Contact Information
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    For any questions regarding these Terms of Service, enterprise licensing, or contractual interpretations, please reach out directly to our legal department.
                  </p>
                  <div className="pt-1">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-200 hover:opacity-95 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                    >
                      Contact Legal Counsel
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="flex flex-col gap-3 rounded-xl border border-slate-800/80 bg-[#020510]/80 p-5 md:col-span-6 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/50 text-cyan-400">
                      <Building2 size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-400">Company</span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {termsOfServiceMeta.company}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/50 text-sky-400">
                      <Mail size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-400">General Support &amp; Legal Dept.</span>
                      <a
                        href="mailto:hello@aiviqone.com"
                        className="text-xs sm:text-sm font-semibold text-cyan-300 hover:underline"
                      >
                        hello@aiviqone.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/50 text-blue-400">
                      <Globe size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-400">Official Website</span>
                      <a
                        href="https://www.aiviqone.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs sm:text-sm font-semibold text-sky-300 hover:underline"
                      >
                        https://www.aiviqone.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Footer Specifications */}
            <div className="rounded-2xl border border-slate-800/70 bg-[#030714] p-6 text-xs text-slate-400">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-slate-300">
                  <FileCheck2 size={16} className="text-cyan-400" />
                  <span className="font-semibold text-white">{termsOfServiceMeta.documentTitle}</span>
                  <span className="text-slate-500">•</span>
                  <span>Version {termsOfServiceMeta.version}</span>
                </div>
                <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-300">
                  {termsOfServiceMeta.status}
                </span>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] text-slate-400">
                <span>{termsOfServiceMeta.classification}</span>
                <span>{termsOfServiceMeta.copyright}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
