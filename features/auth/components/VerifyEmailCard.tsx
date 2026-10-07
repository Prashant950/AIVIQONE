"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, CheckCircle2, ArrowRight, RefreshCw } from "lucide-react";
import Logo from "@/components/ui/Logo";
import CosmicBackground from "./CosmicBackground";

export default function VerifyEmailCard() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resending, setResending] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val[0];
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    // Auto-focus next input
    if (val && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setVerified(true);
  };

  const handleResend = () => {
    setResending(true);
    setTimeout(() => setResending(false), 1000);
  };

  return (
    <div className="relative h-screen max-h-screen w-full overflow-hidden text-white flex flex-col justify-between selection:bg-sky-500 selection:text-white animate-fade-in-up">
      {/* Cosmic Star / 3D Celestial Rotating Globe Background */}
      <CosmicBackground globePosition="left" />

      {/* Top Navbar */}
      <header className="relative z-20 w-full shrink-0">
        <div className="mx-auto flex h-12 sm:h-14 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />
          <Link
            href="/login"
            className="rounded-xl border border-sky-400/40 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)] backdrop-blur-md transition-all hover:bg-sky-500 hover:text-white"
          >
            Sign In
          </Link>
        </div>
      </header>

      {/* Main Content Area (Shifted towards the right with card + footer aligned together) */}
      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 flex-1 flex items-center justify-center lg:justify-end min-h-0 py-2">
        <div className="flex flex-col items-center w-full max-w-[440px] sm:max-w-[460px]">
          
          {/* Card Wrapper */}
          <div className="relative w-full">
            {/* Neon Glow */}
            <div className="absolute -inset-1.5 rounded-[28px] bg-gradient-to-r from-blue-600/35 via-sky-500/25 to-blue-500/35 blur-xl -z-10" />
            <div className="absolute -inset-0.5 rounded-[26px] bg-gradient-to-b from-sky-400/25 via-blue-600/10 to-transparent blur-md -z-10" />

            <div className="relative overflow-hidden rounded-[24px] border border-blue-500/25 bg-[#050b1d]/90 p-5 sm:p-7 backdrop-blur-2xl shadow-[0_0_45px_-5px_rgba(37,99,235,0.35)] text-center">
              {!verified ? (
                <>
                  <div className="mx-auto mb-3.5 flex h-13 w-13 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <Mail size={24} />
                  </div>

                  <h1 className="text-xl sm:text-2xl font-bold text-white">
                    Check Your <span className="text-sky-400">Email</span>
                  </h1>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed max-w-xs mx-auto">
                    We sent a 6-digit verification code to your email address. Enter it below to verify your account.
                  </p>

                  <form onSubmit={handleVerify} className="mt-5 flex flex-col gap-3.5">
                    <div className="flex justify-center gap-2 sm:gap-2.5">
                      {otp.map((digit, idx) => (
                        <input
                          key={idx}
                          id={`otp-${idx}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(idx, e.target.value)}
                          className="h-11 w-10 sm:h-12 sm:w-11 rounded-xl border border-slate-700/70 bg-[#081026] text-center text-lg font-bold text-white focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                        />
                      ))}
                    </div>

                    <button
                      type="submit"
                      disabled={otp.some((d) => !d)}
                      className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_15px_rgba(14,165,233,0.35)] transition-all hover:opacity-95 active:scale-[0.99] disabled:opacity-40 cursor-pointer"
                    >
                      <span>Verify &amp; Proceed</span>
                      <ArrowRight size={15} />
                    </button>
                  </form>

                  <div className="mt-3.5 flex items-center justify-center gap-1 text-xs text-slate-400">
                    <span>Didn&rsquo;t receive the code?</span>
                    <button
                      onClick={handleResend}
                      disabled={resending}
                      className="flex items-center gap-1 font-semibold text-sky-400 hover:underline cursor-pointer"
                    >
                      <RefreshCw size={11} className={resending ? "animate-spin" : ""} />
                      <span>{resending ? "Sending..." : "Resend Code"}</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center gap-3 py-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 size={30} />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    Email <span className="text-emerald-400">Verified!</span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    Your email has been verified. Welcome to AIVIQONE!
                  </p>
                  <Link
                    href="/coming-soon"
                    className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_15px_rgba(14,165,233,0.35)]"
                  >
                    <span>Go to Workspace</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Under-Card Footer (Directly under the card) */}
          <div className="mt-3 flex flex-col items-center gap-1 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/80 bg-[#060c20]/75 px-3.5 py-1 backdrop-blur-md text-[11px] shadow-sm">
              <span className="text-slate-400">Already verified?</span>
              <Link
                href="/login"
                className="font-semibold text-sky-400 transition-colors hover:text-sky-300 hover:underline"
              >
                Sign In
              </Link>
            </div>
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
