"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  Lock,
  HelpCircle,
  Send,
  Headset,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import CosmicBackground from "./CosmicBackground";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitted && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [submitted, countdown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setCountdown(60);
    }, 600);
  };

  const handleResend = () => {
    if (countdown > 0 || resending) return;
    setResending(true);
    setTimeout(() => {
      setResending(false);
      setCountdown(60);
    }, 800);
  };

  return (
    <div className="relative h-screen max-h-screen w-full overflow-hidden text-white flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Dynamic Cosmic Celestial Background */}
      <CosmicBackground globePosition="left" />

      {/* Top Navbar */}
      <header className="relative z-20 w-full shrink-0">
        <div className="mx-auto flex h-12 sm:h-14 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />

          {!submitted ? (
            <Link
              href="/login"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              <ArrowLeft size={15} />
              <span>Back to Login</span>
            </Link>
          ) : (
            <div className="flex items-center gap-2.5">
              <span className="hidden text-xs text-slate-400 sm:inline">
                Need help?
              </span>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 rounded-xl border border-slate-700/80 bg-[#070e24]/70 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-sky-400 hover:text-white"
              >
                <Headset size={13} />
                <span>Contact Support</span>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area (Shifted towards the right with card + footer aligned together) */}
      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 flex-1 flex items-center justify-center lg:justify-end min-h-0 py-2">
        <div className="flex flex-col items-center w-full max-w-[460px] sm:max-w-[480px]">
          
          {/* Card Wrapper */}
          <div className="relative w-full">
            {/* Glowing Atmospheric Backside Neon Aura */}
            <div className="absolute -inset-1.5 rounded-[28px] bg-gradient-to-r from-blue-600/35 via-sky-500/25 to-blue-500/35 blur-xl -z-10" />
            <div className="absolute -inset-0.5 rounded-[26px] bg-gradient-to-b from-sky-400/25 via-blue-600/10 to-transparent blur-md -z-10" />

            {/* Card Body */}
            <div className="relative overflow-hidden rounded-[24px] border border-blue-500/25 bg-[#050b1d]/90 p-5 sm:p-6 lg:p-7 backdrop-blur-2xl shadow-[0_0_45px_-5px_rgba(37,99,235,0.35)]">
              
              {/* ═══════════════════════════════════════════════════════════════
                  STATE 1: FORGOT PASSWORD (EMAIL INPUT & 3-STEP TIMELINE)
                 ═══════════════════════════════════════════════════════════════ */}
              {!submitted ? (
                <div className="flex flex-col animate-fade-in-up">
                  
                  {/* Header Icon */}
                  <div className="mx-auto mb-2.5 relative flex items-center justify-center">
                    <div className="absolute -inset-1.5 rounded-full bg-sky-500/20 blur-md" />
                    <div className="relative flex h-13 w-13 items-center justify-center rounded-full border border-sky-400/30 bg-[#071330] text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                      <Lock size={22} className="text-sky-400" />
                      <div className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 border-2 border-[#050b1d] text-white shadow-sm">
                        <span className="text-[10.5px] font-bold leading-none">?</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-center mb-4">
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      Forgot{" "}
                      <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                        Password?
                      </span>
                    </h1>
                    <p className="mt-1 text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-sm mx-auto">
                      Don&rsquo;t worry! It happens. Enter your email address and we&rsquo;ll send you a link to reset your password.
                    </p>
                  </div>

                  {/* 3-Step Vertical Process Timeline */}
                  <div className="space-y-3 mb-4">
                    
                    {/* Step 1: Active Email Input */}
                    <div className="relative flex items-start gap-3">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-blue-600 text-white text-[11px] font-bold ring-2 ring-blue-500/25 shadow-[0_0_8px_rgba(37,99,235,0.8)]">
                          1
                        </div>
                        <div className="w-[1.5px] h-full min-h-[72px] bg-slate-800 my-1 border-dashed" />
                      </div>

                      <div className="flex-1 pb-0.5">
                        <label className="text-xs font-semibold text-white block mb-1">
                          Enter your email address
                        </label>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                          <div className="relative flex items-center">
                            <Mail
                              size={15}
                              className="pointer-events-none absolute left-3 text-slate-400"
                            />
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your registered email"
                              required
                              className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-3 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={loading || !email}
                            className="group relative flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_15px_rgba(14,165,233,0.38)] transition-all hover:opacity-95 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                          >
                            {loading ? (
                              <Loader2 size={15} className="animate-spin text-white" />
                            ) : (
                              <>
                                <Send size={14} className="rotate-45" />
                                <span>Send Reset Link</span>
                              </>
                            )}
                          </button>
                        </form>

                        <p className="mt-1 text-[10.5px] text-slate-400">
                          We&rsquo;ll send a password reset link to your email.
                        </p>
                      </div>
                    </div>

                    {/* Step 2: Check Email */}
                    <div className="relative flex items-start gap-3">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 text-[10.5px] font-semibold">
                          2
                        </div>
                        <div className="w-[1.5px] h-3.5 bg-slate-800 my-0.5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold text-slate-300">
                          Check your email
                        </h4>
                        <p className="text-[10.5px] text-slate-400">
                          Open the email from AIVIQONE and click on the reset link.
                        </p>
                      </div>
                    </div>

                    {/* Step 3: Create New Password */}
                    <div className="relative flex items-start gap-3">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="flex h-6.5 w-6.5 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 text-[10.5px] font-semibold">
                          3
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold text-slate-300">
                          Create new password
                        </h4>
                        <p className="text-[10.5px] text-slate-400">
                          Set a new password for your account and you&rsquo;re all set.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Trouble Box */}
                  <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-[#070e24]/70 p-2.5 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-500/10 text-sky-400">
                        <HelpCircle size={14} />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-200 block text-xs">
                          Still having trouble?
                        </span>
                        <span className="text-[10.5px] text-slate-400">
                          Contact our support team for quick help.
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 font-semibold text-sky-400 hover:text-sky-300 hover:underline flex items-center gap-0.5 text-xs"
                    >
                      <span>Contact Support</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ) : (
                /* ═══════════════════════════════════════════════════════════════
                    STATE 2: VERIFY YOUR EMAIL (LINK SENT CONFIRMATION)
                   ═══════════════════════════════════════════════════════════════ */
                <div className="flex flex-col text-center animate-fade-in-up">
                  
                  {/* Glowing Envelope Icon */}
                  <div className="mx-auto mb-3 relative flex items-center justify-center">
                    <div className="absolute -inset-1.5 rounded-full bg-blue-500/20 blur-md" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/30 bg-gradient-to-br from-[#0a183d] to-[#040e26] text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                      <Mail size={26} className="text-sky-400" />
                      <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 border-2 border-[#050b1d] text-white shadow-sm">
                        <CheckCircle2 size={13} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Verify{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                      Your Email
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-1 text-xs text-slate-400">
                    We&rsquo;ve sent a verification link to
                  </p>
                  <div className="mt-1 inline-block">
                    <span className="font-semibold text-sky-400 text-xs sm:text-sm underline underline-offset-4 decoration-sky-400/50">
                      {email || "hello@aiviqone.com"}
                    </span>
                  </div>

                  {/* OR Divider */}
                  <div className="my-3.5 flex items-center gap-2.5">
                    <div className="h-px flex-1 bg-slate-800" />
                    <span className="text-[9.5px] font-semibold uppercase tracking-widest text-slate-500">
                      OR
                    </span>
                    <div className="h-px flex-1 bg-slate-800" />
                  </div>

                  {/* Haven't Received Email Notice */}
                  <div className="flex items-center gap-2.5 rounded-xl border border-slate-800 bg-[#070e24]/70 p-2.5 text-left">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-500/10 text-sky-400">
                      <Clock size={15} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        Haven&rsquo;t received the email?
                      </h4>
                      <p className="text-[10.5px] text-slate-400">
                        Check your spam or junk folder.
                      </p>
                    </div>
                  </div>

                  {/* Resend Email Button */}
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={countdown > 0 || resending}
                    className="mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_15px_rgba(14,165,233,0.35)] transition-all hover:opacity-95 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {resending ? (
                      <Loader2 size={15} className="animate-spin text-white" />
                    ) : (
                      <>
                        <Mail size={15} />
                        <span>Resend Email</span>
                      </>
                    )}
                  </button>

                  {/* Countdown display */}
                  {countdown > 0 && (
                    <p className="mt-1.5 text-xs text-slate-400">
                      You can resend in{" "}
                      <span className="font-bold text-sky-400">{countdown}</span> seconds
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Under-Card Footer (Directly under the card) */}
          <div className="mt-3 flex flex-col items-center gap-1 text-center">
            {!submitted ? (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-[#060c20]/75 px-3.5 py-1 backdrop-blur-md text-[11px] shadow-sm">
                <span className="text-slate-400">Remember your password?</span>
                <Link
                  href="/login"
                  className="font-semibold text-sky-400 transition-colors hover:text-sky-300 hover:underline flex items-center gap-0.5"
                >
                  <span>Back to Login</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-[#060c20]/75 px-3.5 py-1 backdrop-blur-md text-[11px] shadow-sm">
                <span className="text-slate-400">Already verified?</span>
                <Link
                  href="/login"
                  className="font-semibold text-sky-400 transition-colors hover:text-sky-300 hover:underline"
                >
                  Sign In
                </Link>
              </div>
            )}
            <div className="text-[10px] text-slate-600">
              &copy; {new Date().getFullYear()} AIVIQONE. All rights reserved.
            </div>
          </div>
        </div>
      </main>

      {/* Subtle bottom padding balance */}
      <div className="h-2 shrink-0" />
    </div>
  );
}
