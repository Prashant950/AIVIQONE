"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Lock,
  Eye,
  EyeOff,
  Check,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import CosmicBackground from "./CosmicBackground";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Real-Time Password Validation Logic
  const hasMinLength = password.length >= 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]]/.test(password);

  const passedCriteriaCount = [
    hasMinLength,
    hasLowercase,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
  ].filter(Boolean).length;

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  // Strength Calculation
  let strengthLabel = "Weak";
  let strengthColor = "text-red-400";
  let strengthBarColor = "bg-red-500";
  let strengthWidth = "w-1/3";

  if (!password) {
    strengthLabel = "None";
    strengthColor = "text-slate-400";
    strengthBarColor = "bg-slate-700";
    strengthWidth = "w-0";
  } else if (!hasMinLength || passedCriteriaCount <= 2) {
    strengthLabel = "Weak";
    strengthColor = "text-red-400";
    strengthBarColor = "bg-red-500";
    strengthWidth = "w-1/3";
  } else if (passedCriteriaCount === 3 || passedCriteriaCount === 4) {
    strengthLabel = "Medium";
    strengthColor = "text-amber-400";
    strengthBarColor = "bg-amber-400";
    strengthWidth = "w-2/3";
  } else if (passedCriteriaCount === 5) {
    strengthLabel = "Strong";
    strengthColor = "text-emerald-400";
    strengthBarColor = "bg-emerald-400";
    strengthWidth = "w-full";
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!passwordsMatch || passedCriteriaCount < 3) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  return (
    <div className="relative h-screen max-h-screen w-full overflow-hidden text-white flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Dynamic Cosmic Celestial Background */}
      <CosmicBackground globePosition="left" />

      {/* Top Navbar */}
      <header className="relative z-20 w-full shrink-0">
        <div className="mx-auto flex h-12 sm:h-14 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />

          <Link
            href="/login"
            className="flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            <span>Back to Login</span>
            <ArrowRight size={14} />
          </Link>
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
              {!submitted ? (
                <div className="flex flex-col animate-fade-in-up">
                  
                  {/* Header Icon */}
                  <div className="mx-auto mb-2.5 relative flex items-center justify-center">
                    <div className="absolute -inset-1.5 rounded-full bg-sky-500/20 blur-md" />
                    <div className="relative flex h-13 w-13 items-center justify-center rounded-full border border-sky-400/30 bg-[#071330] text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                      <Lock size={22} className="text-sky-400" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-center mb-3.5">
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      Set{" "}
                      <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                        New Password
                      </span>
                    </h1>
                    <p className="mt-1 text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-xs mx-auto">
                      Your new password must be different from previously used passwords.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                    
                    {/* New Password */}
                    <div className="flex flex-col gap-0.5">
                      <label className="text-[11px] font-medium text-slate-300">
                        New Password
                      </label>
                      <div className="relative flex items-center">
                        <Lock
                          size={15}
                          className="pointer-events-none absolute left-3 text-slate-400"
                        />
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your new password"
                          required
                          className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-10 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          className="absolute right-3 text-slate-400 transition-colors hover:text-slate-200 cursor-pointer"
                        >
                          {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                    </div>

                    {/* Retype Password */}
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-medium text-slate-300">
                          Retype Password
                        </label>
                        {passwordsMatch && (
                          <span className="text-[10px] font-medium text-emerald-400 flex items-center gap-0.5">
                            <Check size={10} /> Passwords match
                          </span>
                        )}
                        {passwordsMismatch && (
                          <span className="text-[10px] font-medium text-red-400 flex items-center gap-0.5">
                            <AlertCircle size={10} /> Do not match
                          </span>
                        )}
                      </div>
                      <div className="relative flex items-center">
                        <Lock
                          size={15}
                          className="pointer-events-none absolute left-3 text-slate-400"
                        />
                        <input
                          type={showConfirm ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Retype your new password"
                          required
                          className={`w-full rounded-xl border bg-[#081026]/90 py-2 pl-9 pr-10 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:outline-none focus:ring-1 ${
                            passwordsMismatch
                              ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/40"
                              : passwordsMatch
                              ? "border-emerald-500/70 focus:border-emerald-500 focus:ring-emerald-500/40"
                              : "border-slate-700/60 focus:border-sky-400 focus:bg-[#0a1532] focus:ring-sky-400/40"
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirm(!showConfirm)}
                          aria-label={showConfirm ? "Hide password" : "Show password"}
                          className="absolute right-3 text-slate-400 transition-colors hover:text-slate-200 cursor-pointer"
                        >
                          {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                        </button>
                      </div>
                    </div>

                    {/* Password Strength Meter */}
                    <div className="pt-0.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-300">Password must contain:</span>
                        <span className="text-slate-400">
                          Strength:{" "}
                          <span className={`font-semibold ${strengthColor}`}>
                            {strengthLabel}
                          </span>
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-slate-800 flex gap-1 p-0.5">
                        <div
                          className={`h-full flex-1 rounded-full transition-all duration-300 ${
                            passedCriteriaCount >= 1 ? strengthBarColor : "bg-transparent"
                          }`}
                        />
                        <div
                          className={`h-full flex-1 rounded-full transition-all duration-300 ${
                            passedCriteriaCount >= 3 ? strengthBarColor : "bg-transparent"
                          }`}
                        />
                        <div
                          className={`h-full flex-1 rounded-full transition-all duration-300 ${
                            passedCriteriaCount === 5 ? "bg-emerald-400" : "bg-transparent"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Requirements Checklist */}
                    <div className="grid grid-cols-2 gap-1 text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                            hasMinLength
                              ? "border-emerald-400 bg-emerald-500/20 text-emerald-400"
                              : "border-slate-600 bg-slate-900/60 text-transparent"
                          }`}
                        >
                          <Check size={9} className="stroke-[3]" />
                        </div>
                        <span className={hasMinLength ? "text-slate-200" : "text-slate-400"}>
                          Min 8 chars
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div
                          className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                            hasLowercase
                              ? "border-emerald-400 bg-emerald-500/20 text-emerald-400"
                              : "border-slate-600 bg-slate-900/60 text-transparent"
                          }`}
                        >
                          <Check size={9} className="stroke-[3]" />
                        </div>
                        <span className={hasLowercase ? "text-slate-200" : "text-slate-400"}>
                          One lowercase
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div
                          className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                            hasUppercase
                              ? "border-emerald-400 bg-emerald-500/20 text-emerald-400"
                              : "border-slate-600 bg-slate-900/60 text-transparent"
                            }`}
                        >
                          <Check size={9} className="stroke-[3]" />
                        </div>
                        <span className={hasUppercase ? "text-slate-200" : "text-slate-400"}>
                          One uppercase
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <div
                          className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                            hasNumber
                              ? "border-emerald-400 bg-emerald-500/20 text-emerald-400"
                              : "border-slate-600 bg-slate-900/60 text-transparent"
                          }`}
                        >
                          <Check size={9} className="stroke-[3]" />
                        </div>
                        <span className={hasNumber ? "text-slate-200" : "text-slate-400"}>
                          One number
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 col-span-2">
                        <div
                          className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border ${
                            hasSpecialChar
                              ? "border-emerald-400 bg-emerald-500/20 text-emerald-400"
                              : "border-slate-600 bg-slate-900/60 text-transparent"
                          }`}
                        >
                          <Check size={9} className="stroke-[3]" />
                        </div>
                        <span className={hasSpecialChar ? "text-slate-200" : "text-slate-400"}>
                          One special character
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading || !passwordsMatch || passedCriteriaCount < 3}
                      className="group relative mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_15px_rgba(14,165,233,0.35)] transition-all hover:opacity-95 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <Loader2 size={15} className="animate-spin text-white" />
                      ) : (
                        <>
                          <span>Reset Password</span>
                          <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 text-center animate-fade-in-up py-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 size={30} />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    Password <span className="text-emerald-400">Reset!</span>
                  </h2>
                  <p className="text-xs text-slate-400 max-w-xs">
                    Your password has been reset successfully. You can now sign in with your new password.
                  </p>
                  <Link
                    href="/login"
                    className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_15px_rgba(14,165,233,0.35)]"
                  >
                    <span>Back to Login</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Under-Card Footer (Directly under the card) */}
          <div className="mt-3 flex flex-col items-center gap-1 text-center">
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