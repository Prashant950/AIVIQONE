"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  Building,
  Phone,
  ArrowRight,
  ArrowLeft,
  Calendar,
  ShieldCheck,
  Briefcase,
  Users,
  MapPin,
  Package,
  Headset,
  Check,
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import CosmicBackground from "./CosmicBackground";
import { trackCompleteRegistration } from "@/lib/fpixel";

export default function SignupStepper() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [maxVisitedStep, setMaxVisitedStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    mobileNumber: "",
    dob: "",
    companyName: "",
    industryType: "",
    teamSize: "",
    address: "",
    productInterested: "",
    password: "",
    retypePassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Real-Time Password Validation Logic
  const hasMinLength = formData.password.length >= 8;
  const hasLowercase = /[a-z]/.test(formData.password);
  const hasUppercase = /[A-Z]/.test(formData.password);
  const hasNumber = /[0-9]/.test(formData.password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]]/.test(formData.password);

  const passedCriteriaCount = [
    hasMinLength,
    hasLowercase,
    hasUppercase,
    hasNumber,
    hasSpecialChar,
  ].filter(Boolean).length;

  const passwordsMatch =
    formData.retypePassword.length > 0 &&
    formData.password === formData.retypePassword;
  const passwordsMismatch =
    formData.retypePassword.length > 0 &&
    formData.password !== formData.retypePassword;

  // Realistic Password Strength Calculation
  let strengthLabel = "Weak";
  let strengthColor = "text-red-400";
  let strengthBarColor = "bg-red-500";
  let strengthWidth = "w-1/3";

  if (!formData.password) {
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

  const goToStep = (targetStep: 1 | 2 | 3) => {
    setStep(targetStep);
    if (targetStep > maxVisitedStep) {
      setMaxVisitedStep(targetStep);
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      goToStep(2);
    } else if (step === 2) {
      goToStep(3);
    } else if (step === 3) {
      if (passwordsMismatch) {
        return;
      }
      setLoading(true);
      trackCompleteRegistration({
        content_name: "User Signup Registration",
        status: "success",
      });
      setTimeout(() => {
        router.push("/verify-email");
      }, 500);
    }
  };

  return (
    <div className="relative min-h-screen lg:h-screen lg:max-h-screen w-full overflow-x-hidden lg:overflow-hidden text-white flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Dynamic Cosmic Star / 3D Celestial Rotating Globe Background */}
      <CosmicBackground globePosition="left" />

      {/* Top Navbar */}
      <header className="relative z-20 w-full shrink-0 pt-2 sm:pt-3">
        <div className="flex w-full items-center justify-between px-6 sm:px-10 lg:px-14 xl:px-16">
          <Logo />

          <div className="flex items-center gap-3">
            {step === 3 ? (
              <>
                <span className="hidden text-xs text-slate-400 sm:inline sm:text-sm">
                  Need help?
                </span>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-[#070e24]/70 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-sky-400 hover:text-white"
                >
                  <Headset size={14} />
                  <span>Contact Support</span>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <span className="hidden text-xs text-slate-400 sm:inline sm:text-sm">
                  Already have an account?
                </span>
                <Link
                  href="/login"
                  className="rounded-xl border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)] backdrop-blur-md transition-all hover:bg-sky-500 hover:text-white"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12 flex-1 flex items-center justify-center lg:justify-end min-h-0 py-2">
        <div className="flex items-center justify-center gap-4 lg:gap-5 w-full max-w-[760px] lg:max-w-none lg:justify-end">
          
          {/* Sized-Up Floating Card */}
          <div className="relative w-full max-w-[500px] sm:max-w-[520px] lg:max-w-[530px] shrink-0">
            
            {/* Glowing Atmospheric Backside Neon Aura */}
            <div className="absolute -inset-1.5 rounded-[28px] bg-gradient-to-r from-blue-600/35 via-sky-500/25 to-blue-500/35 blur-xl -z-10" />
            <div className="absolute -inset-0.5 rounded-[26px] bg-gradient-to-b from-sky-400/25 via-blue-600/10 to-transparent blur-md -z-10" />

            {/* Stepper Card Body */}
            <div className="relative overflow-hidden rounded-[24px] border border-blue-500/25 bg-[#050b1d]/90 p-5 sm:p-6 lg:p-7 backdrop-blur-2xl shadow-[0_0_45px_-5px_rgba(37,99,235,0.35)]">
              
              {/* Card Header Title */}
              <div className="text-center">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Create Your{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.3)]">
                    Account
                  </span>
                </h1>
                <p className="mt-1 text-xs sm:text-[13px] text-slate-400">
                  Join AIVIQONE and power your business smarter.
                </p>
              </div>

              {/* 3-Step Interactive Stepper Bar */}
              <div className="mt-4 mb-4 sm:mb-5">
                <div className="relative flex items-center justify-between max-w-[390px] mx-auto px-2">
                  
                  {/* Step 1 Node */}
                  <button
                    type="button"
                    onClick={() => goToStep(1)}
                    className="flex flex-col items-center z-10 cursor-pointer group focus:outline-none"
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                        step > 1
                          ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                          : step === 1
                          ? "bg-blue-600 text-white ring-4 ring-blue-500/25 shadow-[0_0_14px_rgba(37,99,235,0.8)] scale-105"
                          : "border border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-500"
                      }`}
                    >
                      {step > 1 ? <Check size={14} className="stroke-[3]" /> : "1"}
                    </div>
                    <span
                      className={`mt-1.5 text-[10.5px] sm:text-[11.5px] font-medium transition-colors ${
                        step === 1
                          ? "text-sky-400 font-semibold"
                          : "text-slate-400 group-hover:text-slate-300"
                      }`}
                    >
                      Personal Details
                    </span>
                  </button>

                  {/* Connector Line 1 to 2 */}
                  <div className="absolute top-[16px] left-[18%] right-[52%] h-[2px] -translate-y-1/2 bg-slate-800 pointer-events-none">
                    <div
                      className="h-full bg-blue-500 transition-all duration-400 ease-out"
                      style={{ width: step >= 2 ? "100%" : "0%" }}
                    />
                  </div>

                  {/* Step 2 Node */}
                  <button
                    type="button"
                    onClick={() => goToStep(2)}
                    className="flex flex-col items-center z-10 cursor-pointer group focus:outline-none"
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                        step > 2
                          ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                          : step === 2
                          ? "bg-blue-600 text-white ring-4 ring-blue-500/25 shadow-[0_0_14px_rgba(37,99,235,0.8)] scale-105"
                          : "border border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-500"
                      }`}
                    >
                      {step > 2 ? <Check size={14} className="stroke-[3]" /> : "2"}
                    </div>
                    <span
                      className={`mt-1.5 text-[10.5px] sm:text-[11.5px] font-medium transition-colors ${
                        step === 2
                          ? "text-sky-400 font-semibold"
                          : "text-slate-400 group-hover:text-slate-300"
                      }`}
                    >
                      Company Details
                    </span>
                  </button>

                  {/* Connector Line 2 to 3 */}
                  <div className="absolute top-[16px] left-[52%] right-[18%] h-[2px] -translate-y-1/2 bg-slate-800 pointer-events-none">
                    <div
                      className="h-full bg-blue-500 transition-all duration-400 ease-out"
                      style={{ width: step >= 3 ? "100%" : "0%" }}
                    />
                  </div>

                  {/* Step 3 Node */}
                  <button
                    type="button"
                    onClick={() => goToStep(3)}
                    className="flex flex-col items-center z-10 cursor-pointer group focus:outline-none"
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                        step === 3
                          ? "bg-blue-600 text-white ring-4 ring-blue-500/25 shadow-[0_0_14px_rgba(37,99,235,0.8)] scale-105"
                          : "border border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-500"
                      }`}
                    >
                      3
                    </div>
                    <span
                      className={`mt-1.5 text-[10.5px] sm:text-[11.5px] font-medium transition-colors ${
                        step === 3
                          ? "text-sky-400 font-semibold"
                          : "text-slate-400 group-hover:text-slate-300"
                      }`}
                    >
                      Security Setup
                    </span>
                  </button>
                </div>
              </div>

              {/* Stepper Sliding Track */}
              <div className="w-full overflow-hidden">
                <div
                  className="flex w-[300%] transition-transform duration-400 ease-out"
                  style={{ transform: `translateX(-${(step - 1) * (100 / 3)}%)` }}
                >
                  
                  {/* ─────────────────────────────────────────────────────────────
                      SLIDE 1: PERSONAL DETAILS
                     ───────────────────────────────────────────────────────────── */}
                  <div className="w-1/3 px-1">
                    <form onSubmit={handleNext} className="flex flex-col gap-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                          Step 1 of 3
                        </span>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Let&rsquo;s start with your personal details.
                        </p>
                      </div>

                      {/* First & Last Name */}
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-medium text-slate-300">
                            First Name
                          </label>
                          <div className="relative flex items-center">
                            <User
                              size={15}
                              className="pointer-events-none absolute left-3 text-slate-400"
                            />
                            <input
                              type="text"
                              value={formData.firstName}
                              onChange={(e) => handleChange("firstName", e.target.value)}
                              placeholder="Enter first name"
                              required={step === 1}
                              className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-3 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-medium text-slate-300">
                            Last Name
                          </label>
                          <div className="relative flex items-center">
                            <User
                              size={15}
                              className="pointer-events-none absolute left-3 text-slate-400"
                            />
                            <input
                              type="text"
                              value={formData.lastName}
                              onChange={(e) => handleChange("lastName", e.target.value)}
                              placeholder="Enter last name"
                              required={step === 1}
                              className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-3 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Work Email */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-medium text-slate-300">
                          Work Email
                        </label>
                        <div className="relative flex items-center">
                          <Mail
                            size={15}
                            className="pointer-events-none absolute left-3 text-slate-400"
                          />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="Enter your work email"
                            required={step === 1}
                            className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-3 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                          />
                        </div>
                      </div>

                      {/* Mobile Number with Country Code */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-medium text-slate-300">
                          Mobile Number
                        </label>
                        <div className="relative flex items-center">
                          <Phone
                            size={15}
                            className="pointer-events-none absolute left-3 text-slate-400"
                          />
                          <select
                            value={formData.countryCode}
                            onChange={(e) => handleChange("countryCode", e.target.value)}
                            className="absolute left-8 bg-transparent text-[11px] font-semibold text-slate-300 focus:outline-none cursor-pointer pr-1.5 border-r border-slate-700"
                          >
                            <option value="+91" className="bg-slate-900 text-white">+91</option>
                            <option value="+1" className="bg-slate-900 text-white">+1</option>
                            <option value="+44" className="bg-slate-900 text-white">+44</option>
                            <option value="+971" className="bg-slate-900 text-white">+971</option>
                          </select>
                          <input
                            type="tel"
                            value={formData.mobileNumber}
                            onChange={(e) => handleChange("mobileNumber", e.target.value)}
                            placeholder="Enter your mobile number"
                            required={step === 1}
                            className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-22 pr-3 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                          />
                        </div>
                      </div>

                      {/* Date of Birth */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-medium text-slate-300">
                          Date of Birth
                        </label>
                        <div className="relative flex items-center">
                          <Calendar
                            size={15}
                            className="pointer-events-none absolute left-3 text-slate-400"
                          />
                          <input
                            type="text"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => {
                              if (!e.target.value) e.target.type = "text";
                            }}
                            value={formData.dob}
                            onChange={(e) => handleChange("dob", e.target.value)}
                            placeholder="Select your date of birth"
                            required={step === 1}
                            className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-9 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40 [color-scheme:dark]"
                          />
                          <Calendar
                            size={15}
                            className="pointer-events-none absolute right-3 text-slate-500"
                          />
                        </div>
                      </div>

                      {/* Step 1 Next Button */}
                      <button
                        type="submit"
                        className="group relative mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(14,165,233,0.35)] transition-all hover:opacity-95 hover:shadow-[0_0_22px_rgba(14,165,233,0.5)] active:scale-[0.99] cursor-pointer"
                      >
                        <span>Next</span>
                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>

                      {/* Security Footnote */}
                      <div className="flex items-center justify-center gap-1.5 text-center text-[10.5px] text-slate-500 pt-0.5">
                        <Lock size={11} className="text-slate-400" />
                        <span>Your data is safe with us. We never share your information.</span>
                      </div>
                    </form>
                  </div>

                  {/* ─────────────────────────────────────────────────────────────
                      SLIDE 2: COMPANY DETAILS
                     ───────────────────────────────────────────────────────────── */}
                  <div className="w-1/3 px-1">
                    <form onSubmit={handleNext} className="flex flex-col gap-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                          Step 2 of 3
                        </span>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Tell us about your company.
                        </p>
                      </div>

                      {/* Company Name */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-medium text-slate-300">
                          Company Name
                        </label>
                        <div className="relative flex items-center">
                          <Building
                            size={15}
                            className="pointer-events-none absolute left-3 text-slate-400"
                          />
                          <input
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => handleChange("companyName", e.target.value)}
                            placeholder="Enter company name"
                            required={step === 2}
                            className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-3 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                          />
                        </div>
                      </div>

                      {/* Industry Type & Team Size in 2 columns */}
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-medium text-slate-300">
                            Industry Type
                          </label>
                          <div className="relative flex items-center">
                            <Briefcase
                              size={15}
                              className="pointer-events-none absolute left-3 text-slate-400"
                            />
                            <select
                              value={formData.industryType}
                              onChange={(e) => handleChange("industryType", e.target.value)}
                              required={step === 2}
                              className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-6 text-xs text-white transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40 cursor-pointer truncate"
                            >
                              <option value="" disabled className="bg-slate-900 text-slate-400">
                                Select industry
                              </option>
                              <option value="Finance / Loan DSA" className="bg-slate-900 text-white">
                                Loan DSA
                              </option>
                              <option value="Credit Card Agency" className="bg-slate-900 text-white">
                                Credit Card
                              </option>
                              <option value="Insurance Advisory" className="bg-slate-900 text-white">
                                Insurance
                              </option>
                              <option value="NBFC / Banking" className="bg-slate-900 text-white">
                                NBFC / Bank
                              </option>
                              <option value="Real Estate" className="bg-slate-900 text-white">
                                Real Estate
                              </option>
                              <option value="Technology & SaaS" className="bg-slate-900 text-white">
                                Technology
                              </option>
                              <option value="Other" className="bg-slate-900 text-white">
                                Other
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-medium text-slate-300">
                            Team Size
                          </label>
                          <div className="relative flex items-center">
                            <Users
                              size={15}
                              className="pointer-events-none absolute left-3 text-slate-400"
                            />
                            <select
                              value={formData.teamSize}
                              onChange={(e) => handleChange("teamSize", e.target.value)}
                              required={step === 2}
                              className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-6 text-xs text-white transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40 cursor-pointer"
                            >
                              <option value="" disabled className="bg-slate-900 text-slate-400">
                                Select size
                              </option>
                              <option value="1-5" className="bg-slate-900 text-white">1 - 5</option>
                              <option value="6-20" className="bg-slate-900 text-white">6 - 20</option>
                              <option value="21-50" className="bg-slate-900 text-white">21 - 50</option>
                              <option value="50+" className="bg-slate-900 text-white">50+</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-medium text-slate-300">
                          Address
                        </label>
                        <div className="relative flex items-center">
                          <MapPin
                            size={15}
                            className="pointer-events-none absolute left-3 text-slate-400"
                          />
                          <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            placeholder="Enter company address"
                            required={step === 2}
                            className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-3 text-xs sm:text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                          />
                        </div>
                      </div>

                      {/* Product Interested In */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-medium text-slate-300">
                          Product Interested In
                        </label>
                        <div className="relative flex items-center">
                          <Package
                            size={15}
                            className="pointer-events-none absolute left-3 text-slate-400"
                          />
                          <select
                            value={formData.productInterested}
                            onChange={(e) =>
                              handleChange("productInterested", e.target.value)
                            }
                            required={step === 2}
                            className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2 pl-9 pr-6 text-xs text-white transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40 cursor-pointer truncate"
                          >
                            <option value="" disabled className="bg-slate-900 text-slate-400">
                              Select product
                            </option>
                            <option value="All-in-One CRM Suite" className="bg-slate-900 text-white">
                              All-in-One CRM Suite
                            </option>
                            <option value="Telephony & Call Center" className="bg-slate-900 text-white">
                              Telephony &amp; Call Center
                            </option>
                            <option value="WhatsApp Business API" className="bg-slate-900 text-white">
                              WhatsApp Automation
                            </option>
                            <option value="Lead Management & DSA Pipeline" className="bg-slate-900 text-white">
                              Lead Management &amp; DSA
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Step 2 Buttons Row */}
                      <div className="mt-2 flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => goToStep(1)}
                          className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700/80 bg-[#081026]/90 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all cursor-pointer"
                        >
                          <ArrowLeft size={14} />
                          <span>Back</span>
                        </button>

                        <button
                          type="submit"
                          className="group relative flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(14,165,233,0.35)] transition-all hover:opacity-95 hover:shadow-[0_0_22px_rgba(14,165,233,0.5)] active:scale-[0.99] cursor-pointer"
                        >
                          <span>Next</span>
                          <ArrowRight
                            size={15}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* ─────────────────────────────────────────────────────────────
                      SLIDE 3: SECURITY SETUP
                     ───────────────────────────────────────────────────────────── */}
                  <div className="w-1/3 px-1">
                    <form onSubmit={handleNext} className="flex flex-col gap-2.5">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                          Step 3 of 3
                        </span>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Set a strong password to secure your account.
                        </p>
                      </div>

                      {/* Password Field */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-medium text-slate-300">
                          Password
                        </label>
                        <div className="relative flex items-center">
                          <Lock
                            size={15}
                            className="pointer-events-none absolute left-3 text-slate-400"
                          />
                          <input
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            placeholder="Enter your password"
                            required={step === 3}
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

                      {/* Retype Password Field */}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <label className="text-[11px] font-medium text-slate-300">
                            Retype Password
                          </label>
                          {passwordsMatch && (
                            <span className="text-[10px] font-medium text-emerald-400 flex items-center gap-1">
                              <Check size={10} /> Passwords match
                            </span>
                          )}
                          {passwordsMismatch && (
                            <span className="text-[10px] font-medium text-red-400 flex items-center gap-1">
                              <AlertCircle size={10} /> Passwords do not match
                            </span>
                          )}
                        </div>
                        <div className="relative flex items-center">
                          <Lock
                            size={15}
                            className="pointer-events-none absolute left-3 text-slate-400"
                          />
                          <input
                            type={showRetypePassword ? "text" : "password"}
                            value={formData.retypePassword}
                            onChange={(e) =>
                              handleChange("retypePassword", e.target.value)
                            }
                            placeholder="Retype your password"
                            required={step === 3}
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
                            onClick={() => setShowRetypePassword(!showRetypePassword)}
                            aria-label={
                              showRetypePassword ? "Hide password" : "Show password"
                            }
                            className="absolute right-3 text-slate-400 transition-colors hover:text-slate-200 cursor-pointer"
                          >
                            {showRetypePassword ? (
                              <EyeOff size={15} />
                            ) : (
                              <Eye size={15} />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Password Strength & Criteria Header */}
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

                        {/* Multi-Segment Dynamic Strength Progress Bar */}
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-800 flex gap-1 p-0.5">
                          <div
                            className={`h-full flex-1 rounded-full transition-all duration-300 ${
                              passedCriteriaCount >= 1
                                ? strengthBarColor
                                : "bg-transparent"
                            }`}
                          />
                          <div
                            className={`h-full flex-1 rounded-full transition-all duration-300 ${
                              passedCriteriaCount >= 3
                                ? strengthBarColor
                                : "bg-transparent"
                            }`}
                          />
                          <div
                            className={`h-full flex-1 rounded-full transition-all duration-300 ${
                              passedCriteriaCount === 5
                                ? "bg-emerald-400"
                                : "bg-transparent"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Password Requirements Checklist (2 columns) */}
                      <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <div
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                              hasMinLength
                                ? "border-emerald-400 bg-emerald-500/20 text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                                : "border-slate-600 bg-slate-900/60 text-transparent"
                            }`}
                          >
                            <Check size={10} className="stroke-[3]" />
                          </div>
                          <span
                            className={
                              hasMinLength ? "text-slate-100 font-medium" : "text-slate-400"
                            }
                          >
                            Min 8 characters
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <div
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                              hasLowercase
                                ? "border-emerald-400 bg-emerald-500/20 text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                                : "border-slate-600 bg-slate-900/60 text-transparent"
                            }`}
                          >
                            <Check size={10} className="stroke-[3]" />
                          </div>
                          <span
                            className={
                              hasLowercase ? "text-slate-100 font-medium" : "text-slate-400"
                            }
                          >
                            One lowercase
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <div
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                              hasUppercase
                                ? "border-emerald-400 bg-emerald-500/20 text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                                : "border-slate-600 bg-slate-900/60 text-transparent"
                            }`}
                          >
                            <Check size={10} className="stroke-[3]" />
                          </div>
                          <span
                            className={
                              hasUppercase ? "text-slate-100 font-medium" : "text-slate-400"
                            }
                          >
                            One uppercase
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <div
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                              hasNumber
                                ? "border-emerald-400 bg-emerald-500/20 text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                                : "border-slate-600 bg-slate-900/60 text-transparent"
                            }`}
                          >
                            <Check size={10} className="stroke-[3]" />
                          </div>
                          <span
                            className={
                              hasNumber ? "text-slate-100 font-medium" : "text-slate-400"
                            }
                          >
                            One number
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 col-span-2">
                          <div
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-all ${
                              hasSpecialChar
                                ? "border-emerald-400 bg-emerald-500/20 text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                                : "border-slate-600 bg-slate-900/60 text-transparent"
                            }`}
                          >
                            <Check size={10} className="stroke-[3]" />
                          </div>
                          <span
                            className={
                              hasSpecialChar ? "text-slate-100 font-medium" : "text-slate-400"
                            }
                          >
                            One special character
                          </span>
                        </div>
                      </div>

                      {/* Step 3 Action Buttons */}
                      <div className="mt-2 flex flex-col gap-2">
                        <button
                          type="submit"
                          disabled={loading || passwordsMismatch}
                          className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(14,165,233,0.35)] transition-all hover:opacity-95 hover:shadow-[0_0_22px_rgba(14,165,233,0.5)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                        >
                          {loading ? (
                            <Loader2 size={16} className="animate-spin text-white" />
                          ) : (
                            <>
                              <span>Complete Registration</span>
                              <ArrowRight
                                size={15}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => goToStep(2)}
                          className="flex items-center justify-center gap-1 text-[11px] font-medium text-slate-400 hover:text-white transition-colors cursor-pointer py-0.5"
                        >
                          <ArrowLeft size={13} />
                          <span>Back</span>
                        </button>
                      </div>

                      {/* Step 3 Security Guarantee */}
                      <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-[#070e24]/60 p-2 text-[10px] text-slate-400">
                        <ShieldCheck size={14} className="text-sky-400 shrink-0" />
                        <span>
                          Your data is safe with us. We never share your information.
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Under-Card Footer (Directly under the card) */}
            <div className="mt-3 flex flex-col items-center gap-1 text-center">
              <div className="text-[10px] text-slate-600">
                &copy; {new Date().getFullYear()} AIVIQONE. All rights reserved.
              </div>
            </div>
          </div>

          {/* Secure & Trusted Badge */}
          <div className="hidden xl:flex flex-col gap-2 rounded-2xl border border-blue-500/20 bg-[#060c20]/80 p-4 backdrop-blur-xl shadow-[0_0_25px_rgba(37,99,235,0.25)] w-[180px] shrink-0 self-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
              <ShieldCheck size={18} />
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mt-0.5">
              Secure &amp; Trusted
            </h4>
            <p className="text-[11px] text-slate-400 leading-snug">
              Enterprise grade security for your data.
            </p>
          </div>
        </div>
      </main>

      {/* Subtle bottom spacer */}
      <div className="h-2 shrink-0" />
    </div>
  );
}
