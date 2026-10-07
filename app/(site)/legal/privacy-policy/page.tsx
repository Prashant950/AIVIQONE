import { Mail, Globe, Building2, ShieldCheck, ArrowRight, UserCheck } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PrivacyPolicyHero from "@/features/legal/components/PrivacyPolicyHero";
import PolicyTOC from "@/features/legal/components/PolicyTOC";
import PolicySectionBlock from "@/features/legal/components/PolicySectionBlock";
import { privacyPolicySections } from "@/features/legal/data/privacyPolicy";

export const metadata = {
  title: "Privacy Policy | AIVIQONE",
  description:
    "Official Privacy Policy of AIVIQONE Technologies Pvt. Ltd. detailing data collection, processing, security standards, and privacy rights.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      {/* Hero with lock & connected nodes graphic */}
      <PrivacyPolicyHero />

      <div id="policy-content" className="scroll-mt-20 mx-auto w-full max-w-[1420px] px-3.5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
          {/* Left sidebar (Sticky) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-5">
            {/* On This Page card */}
            <div className="rounded-2xl border border-slate-800/90 bg-[#040816]/90 p-4 shadow-xl backdrop-blur-md">
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-widest text-cyan-400">
                On This Page
              </span>
              <PolicyTOC sections={privacyPolicySections} />
            </div>

            {/* Privacy Guarantee Card */}
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-800/90 bg-[#040816]/90 p-5 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-400">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-sm font-bold text-white">We take your privacy seriously.</h3>
              <p className="text-xs leading-relaxed text-slate-400">
                This Privacy Policy explains how we collect, use, store and protect your
                information when you use AIVIQONE products, websites and services.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex flex-col gap-3.5 sm:gap-5">
          {privacyPolicySections.map((section) => (
            <PolicySectionBlock key={section.id} section={section} />
          ))}

          {/* Contact Us & Grievance Card matching the screenshot */}
          <div
            id="contact-us"
            className="scroll-mt-28 relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-800/90 bg-gradient-to-br from-[#060e22] to-[#030712] p-4 sm:p-8 shadow-2xl"
          >
            {/* Ambient lighting inside card */}
            <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px]" />

            <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
              {/* Left Column */}
              <div className="flex flex-col gap-4 md:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Get in Touch
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  30. Contact Us &amp; Inquiries
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  For privacy-related questions, data access requests, or concerns, please
                  contact us using the details provided or reach out directly to our privacy team.
                </p>
                <div className="pt-1">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-200 hover:opacity-95 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
                  >
                    Contact Privacy Team
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Right Column: Details & Neon Graphic */}
              <div className="flex flex-col gap-3 rounded-xl border border-slate-800/80 bg-[#020510]/80 p-5 md:col-span-6 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/50 text-cyan-400">
                    <Building2 size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-400">Company</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      AIVIQONE Technologies Pvt. Ltd.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/50 text-cyan-400">
                    <UserCheck size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-400">Grievance Officer (India)</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Anant &bull; <a href="mailto:hello@aiviqone.com" className="text-sky-400 hover:underline">hello@aiviqone.com</a> (Mon-Fri)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/50 text-cyan-400">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-400">Email</span>
                    <a
                      href="mailto:privacy@aiviqone.com"
                      className="text-xs sm:text-sm font-semibold text-cyan-400 hover:underline"
                    >
                      privacy@aiviqone.com / hello@aiviqone.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/50 text-cyan-400">
                    <Globe size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-400">Website</span>
                    <a
                      href="https://www.aiviqone.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-cyan-400 hover:underline"
                    >
                      aiviqone.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}