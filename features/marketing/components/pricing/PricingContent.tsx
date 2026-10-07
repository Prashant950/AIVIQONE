"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  ChevronDown,
  PhoneCall,
  Flame,
  X,
  CreditCard,
  Receipt,
  Headphones,
} from "lucide-react";

export default function PricingContent() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const plans = [
    {
      name: "Starter",
      subtitle: "For DSA advisors, solo brokers & individual sales agents.",
      monthly: {
        price: "₹4,499",
        period: "/month",
        billedNote: "Billed monthly • Cancel anytime",
        annualHint: "Switch to Annual & save ₹8,989/yr",
      },
      annual: {
        effectiveMonthly: "₹3,750",
        totalAnnual: "₹44,999",
        savingsAmount: "₹8,989",
        discountPercent: "17%",
        originalMonthly: "₹4,499",
      },
      badge: null,
      ctaText: "Start Free Trial",
      href: "/signup",
      popular: false,
      features: [
        "Up to 1,000 Active Leads",
        "Lead Pipeline & Status Tracking",
        "Click-to-Call & Basic Call Logs",
        "WhatsApp Click-to-Chat Integration",
        "Follow-up Reminders & Notifications",
        "Standard Analytics & CSV Data Export",
        "Email & In-App Helpdesk Support",
      ],
      notIncluded: [
        "Automated WhatsApp Bulk Campaigns",
        "Smart Auto-Dialer & VoIP Integrations",
        "Team Role-Based Access Hierarchy",
        "Dedicated Account Manager",
      ],
    },
    {
      name: "Professional",
      subtitle: "For growing sales teams, DSA agencies & multi-agent branches.",
      monthly: {
        price: "₹7,999",
        period: "/month",
        billedNote: "Billed monthly • Cancel anytime",
        annualHint: "Switch to Annual & save ₹15,989/yr",
      },
      annual: {
        effectiveMonthly: "₹6,667",
        totalAnnual: "₹79,999",
        savingsAmount: "₹15,989",
        discountPercent: "17%",
        originalMonthly: "₹7,999",
      },
      badge: "MOST POPULAR",
      ctaText: "Get Started Now",
      href: "/signup",
      popular: true,
      features: [
        "Unlimited Leads & Contact Storage",
        "Full WhatsApp Business Automation & Templates",
        "Smart Auto-Dialer & Direct VoIP Integration",
        "Multi-Agent Team Hierarchy & Manager Views",
        "Live Call Recording & Transcription Logs",
        "Document Vault & Customer KYC Management",
        "Performance Leaderboards & Real-time Reports",
        "Priority 24/7 Phone & Chat Support",
      ],
      notIncluded: [
        "Custom Dedicated Server Instance",
        "Custom Core Banking API Integrations",
      ],
    },
    {
      name: "Business / Enterprise",
      subtitle: "For large lending institutions, NBFCs & high-volume enterprises.",
      monthly: {
        price: "₹14,999",
        period: "/month",
        billedNote: "Billed monthly • Cancel anytime",
        annualHint: "Switch to Annual & save ₹29,989/yr",
      },
      annual: {
        effectiveMonthly: "₹12,500",
        totalAnnual: "₹1,49,999",
        savingsAmount: "₹29,989",
        discountPercent: "17%",
        originalMonthly: "₹14,999",
      },
      badge: "ENTERPRISE SCALE",
      ctaText: "Contact Enterprise Sales",
      href: "/contact",
      popular: false,
      features: [
        "Everything in Professional Unlimited",
        "Dedicated High-Speed Cloud Server Instance",
        "Custom API & Core Banking Integration Support",
        "Granular Role-Based Permissions & Audit Logs",
        "Automated Multi-Branch Lead Routing Engines",
        "Enterprise Data Encryption & IP Whitelisting",
        "Dedicated Account Director & Priority Onboarding",
        "Guaranteed 99.95% SLA & 24/7 Dedicated Support",
      ],
      notIncluded: [],
    },
  ];

  const faqs = [
    {
      q: "Can I switch between monthly and annual billing later?",
      a: "Yes, you can upgrade, downgrade, or switch from monthly to annual billing at any time directly from your billing dashboard. When upgrading to annual, your remaining balance will be prorated automatically.",
    },
    {
      q: "How does the annual discount work?",
      a: "When you choose annual billing, you receive approximately 17% discount (equivalent to 2 full months free) compared to paying monthly for 12 months. For example, the Starter plan saves you ₹8,989/year, Professional saves ₹15,989/year, and Enterprise saves ₹29,989/year.",
    },
    {
      q: "Do you provide GST invoices for tax credit (ITC)?",
      a: "Yes, 100%. We provide official GST-compliant tax invoices for every transaction. Simply enter your company GSTIN during checkout or in your organization billing profile to claim full Input Tax Credit (ITC).",
    },
    {
      q: "Is there any setup fee or hidden cost?",
      a: "No. There are zero setup fees, zero hidden onboarding charges, and zero cancellation penalties across all standard tiers.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major Indian and international payment methods including UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards (Visa, Mastercard, RuPay, Amex), Net Banking (50+ Indian banks), and Corporate Bank Transfers / NEFT / RTGS for Enterprise plans.",
    },
    {
      q: "What if I need custom features or have more than 50 agents?",
      a: "Our Enterprise plan is fully customizable for large DSA networks, NBFCs, and financial institutions. Contact our enterprise sales team for customized volume pricing, on-premise deployments, or custom core banking API integrations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Hero Header Section */}
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 sm:h-96 sm:w-96 -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto flex w-full max-w-[1420px] flex-col items-center gap-4 sm:gap-6 px-4 text-center sm:px-8 lg:px-12">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-400 backdrop-blur-md">
            <Sparkles size={12} className="text-sky-400 animate-pulse" />
            Simple, Transparent &amp; Scalable Pricing
          </div>

          <h1 className="max-w-4xl text-2xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] leading-tight sm:leading-[1.15]">
            High Performance Sales Infrastructure. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Zero Hidden Surprises.
            </span>
          </h1>

          <p className="max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 px-2">
            Choose the right plan to power your lead pipeline, calling, and WhatsApp automation. Upgrade or modify your billing cycle anytime.
          </p>

          {/* Interactive Billing Toggle Switch (Mobile Responsive Segmented Pill) */}
          <div className="mt-4 flex flex-col items-center gap-2.5 w-full max-w-[340px] sm:max-w-md">
            <div className="grid grid-cols-2 gap-1 w-full rounded-2xl sm:rounded-full border border-slate-800 bg-[#050c1e]/95 p-1 shadow-[0_0_25px_rgba(2,132,199,0.2)] backdrop-blur-md">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`flex items-center justify-center rounded-xl sm:rounded-full py-2 px-3 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`flex items-center justify-center gap-1.5 rounded-xl sm:rounded-full py-2 px-2.5 sm:px-3 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  billingCycle === "yearly"
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>Annual</span>
                <span className="rounded-full bg-emerald-400/20 border border-emerald-400/40 px-1.5 py-0.5 text-[10px] font-extrabold text-emerald-300 whitespace-nowrap">
                  Save 17%
                </span>
              </button>
            </div>

            <p className="text-[11px] sm:text-xs text-center">
              {billingCycle === "yearly" ? (
                <span className="text-emerald-400 font-semibold">
                  ✓ Active: Annual discount applied (2 Months Free)
                </span>
              ) : (
                <span className="text-slate-400">
                  Switch to Annual &amp; save up to <strong className="text-sky-400">₹29,989/year</strong>
                </span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="relative mx-auto w-full max-w-[1420px] px-4 pb-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const isYearly = billingCycle === "yearly";

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-sky-400/70 bg-gradient-to-b from-[#08183d] to-[#040b1e] shadow-[0_0_40px_rgba(2,132,199,0.3),inset_0_1px_0_0_rgba(56,189,248,0.4)]"
                    : "border-slate-800/90 bg-[#050c1e]/90 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.12)] hover:border-sky-500/40"
                }`}
              >
                {/* Popular / Category Ribbon */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 px-3.5 py-0.5 text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                      <Zap size={11} className="fill-slate-950 text-slate-950" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header & Description */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400 min-h-[32px]">
                    {plan.subtitle}
                  </p>

                  {/* Pricing Display Block */}
                  <div className="mt-5 rounded-2xl border border-slate-800/80 bg-[#030714]/80 p-4 sm:p-5 backdrop-blur-sm">
                    {isYearly ? (
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        {/* Strikethrough original monthly price */}
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="line-through text-slate-500 font-medium">
                            {plan.annual.originalMonthly}/month
                          </span>
                          <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">
                            Save {plan.annual.discountPercent}
                          </span>
                        </div>

                        {/* Main Effective Monthly Rate */}
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                            {plan.annual.effectiveMonthly}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-400">/month</span>
                        </div>

                        {/* Annual Billing Line */}
                        <div className="flex flex-col gap-1 pt-2 border-t border-slate-800/60">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-300">Billed annually at</span>
                            <span className="text-white font-bold">{plan.annual.totalAnnual}</span>
                          </div>

                          {/* Savings Highlight Badge */}
                          <div className="mt-1 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 py-1 px-2.5 text-xs font-bold text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.12)]">
                            <Flame size={13} className="text-emerald-400 shrink-0" />
                            <span>Save {plan.annual.savingsAmount}/year</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1.5 sm:gap-2">
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="text-sky-400 font-semibold text-[11px]">Standard Monthly Tier</span>
                        </div>

                        {/* Main Monthly Rate */}
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                            {plan.monthly.price}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-slate-400">{plan.monthly.period}</span>
                        </div>

                        {/* Monthly Subtext */}
                        <div className="flex flex-col gap-0.5 pt-2 border-t border-slate-800/60">
                          <span className="text-xs text-slate-300">
                            {plan.monthly.billedNote}
                          </span>
                          <span className="text-[11px] text-sky-400 font-semibold">
                            {plan.monthly.annualHint}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Included Features List */}
                  <div className="mt-5">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                      Everything included:
                    </p>
                    <ul className="flex flex-col gap-2.5 sm:gap-3">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}

                      {/* Not included items with subtle cross */}
                      {plan.notIncluded.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-500 opacity-60">
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-500">
                            <X size={11} strokeWidth={2} />
                          </div>
                          <span className="leading-snug line-through">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-800/80">
                  <Link
                    href={plan.href}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 sm:py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.98] ${
                      plan.popular
                        ? "bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-white shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:opacity-95 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
                        : "border border-slate-700 bg-[#070e24]/80 text-slate-200 hover:border-sky-400 hover:bg-[#0b1638] hover:text-white"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={15} />
                  </Link>

                  <p className="mt-2 text-center text-[10.5px] sm:text-[11px] text-slate-400">
                    Instant access &bull; GST invoice provided
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust, Security & Billing Assurance Bar */}
      <section className="border-y border-slate-800/80 bg-[#030714]/90 py-6 sm:py-8">
        <div className="mx-auto w-full max-w-[1420px] px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            <div className="flex items-center gap-3 rounded-xl border border-slate-800/60 bg-[#050c1e]/60 p-3 sm:p-0 sm:border-0 sm:bg-transparent">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400">
                <Receipt size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white">GST Invoicing</span>
                <span className="text-[11px] text-slate-400">100% Tax Credit (ITC)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-800/60 bg-[#050c1e]/60 p-3 sm:p-0 sm:border-0 sm:bg-transparent">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <Shield size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white">Bank Grade Security</span>
                <span className="text-[11px] text-slate-400">AES-256 Bit Encryption</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-800/60 bg-[#050c1e]/60 p-3 sm:p-0 sm:border-0 sm:bg-transparent">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                <CreditCard size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white">UPI &amp; Cards</span>
                <span className="text-[11px] text-slate-400">Instant Activation</span>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-800/60 bg-[#050c1e]/60 p-3 sm:p-0 sm:border-0 sm:bg-transparent">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400">
                <Headphones size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-white">Priority Support</span>
                <span className="text-[11px] text-slate-400">Dedicated Onboarding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise & Custom DSA Help Banner (Mobile Polished) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1420px] px-4 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-r from-[#06122d] via-[#040c20] to-[#020617] p-6 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(2,132,199,0.15)]">
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[90px]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="flex flex-col gap-2.5 text-center lg:text-left max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Custom DSA &amp; Enterprise Requirements
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                  Need custom multi-branch setup or high-volume API integrations?
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  Our solutions architecture team provides tailor-made deployments, custom webhook integrations with existing banking portals, and dedicated training for your entire sales force.
                </p>
              </div>

              <div className="w-full sm:w-auto flex justify-center shrink-0">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all hover:opacity-95 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
                >
                  <span>Schedule Solution Call</span>
                  <PhoneCall size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Got Questions?
            </span>
            <h2 className="mt-1.5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              Everything you need to know about our billing, plans, and activations.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-[#050c1e]/90 transition-colors hover:border-slate-700"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm md:text-base font-bold text-white"
                  >
                    <span className="pr-2">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-sky-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm leading-relaxed text-slate-300 border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
