"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Phone,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { AuthTopbarFull } from "./AuthTopbar";
import CosmicBackground from "./CosmicBackground";

// Clean SVGs for Google & Microsoft
function GoogleIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 23 23">
      <path fill="#f35325" d="M1 1h10v10H1z" />
      <path fill="#81bc06" d="M12 1h10v10H12z" />
      <path fill="#05a6f0" d="M1 12h10v10H1z" />
      <path fill="#ffba08" d="M12 12h10v10H12z" />
    </svg>
  );
}

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [role, setRole] = useState<string>("sales-agent");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        router.push("/coming-soon");
      } else {
        setError("Please enter valid credentials.");
      }
    }, 600);
  };

  const handleSocialLogin = (provider: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/coming-soon");
    }, 600);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Dynamic Cosmic Star / Celestial Mesh Wave Background */}
      <CosmicBackground />

      {/* Top Navbar */}
      <header className="relative z-20 w-full shrink-0">
        <AuthTopbarFull />
      </header>

      {/* Main Content Area: Centered, balanced container with optimal spacing */}
      <main className="relative z-10 mx-auto w-full max-w-[1140px] px-5 sm:px-8 lg:px-10 py-6 lg:py-10 flex-1 flex items-center justify-center">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          
          {/* Left Column: Branding & Highlights (Compact and close to card) */}
          <div className="flex flex-col lg:col-span-6 lg:pr-2">
            
            {/* Main Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
              All Your Business. <br />
              One{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                Smart Platform
              </span>
              .
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 text-sm leading-relaxed text-slate-300 sm:text-base max-w-lg">
              AIVIQONE brings CRM, Telephony, WhatsApp &amp; AI together to help you
              manage, engage and grow your business — effortlessly.
            </p>

            {/* Feature Highlights */}
            <div className="mt-7 space-y-4">
              {/* Feature 1: Smart CRM */}
              <div className="group flex items-center gap-3.5 transition-transform hover:translate-x-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-950/40 text-blue-400 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.2)] backdrop-blur-md transition-colors group-hover:border-blue-400/40 group-hover:bg-blue-900/40">
                  <BarChart3 size={19} className="text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    Smart CRM
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Track, manage &amp; grow your leads
                  </p>
                </div>
              </div>

              {/* Feature 2: Telephony */}
              <div className="group flex items-center gap-3.5 transition-transform hover:translate-x-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-950/40 text-blue-400 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.2)] backdrop-blur-md transition-colors group-hover:border-blue-400/40 group-hover:bg-blue-900/40">
                  <Phone size={19} className="text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    Telephony
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Make &amp; receive calls seamlessly
                  </p>
                </div>
              </div>

              {/* Feature 3: WhatsApp Integration */}
              <div className="group flex items-center gap-3.5 transition-transform hover:translate-x-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-950/40 text-blue-400 shadow-[inset_0_1px_0_0_rgba(56,189,248,0.2)] backdrop-blur-md transition-colors group-hover:border-blue-400/40 group-hover:bg-blue-900/40">
                  <MessageCircle size={19} className="text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    WhatsApp Integration
                  </h3>
                  <p className="text-xs text-slate-400 sm:text-sm">
                    Engage customers at scale
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Security Guarantee */}
            <div className="mt-8 flex items-center gap-3 text-slate-400">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-400/20 bg-sky-500/10 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <ShieldCheck size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-200 sm:text-sm">
                  Enterprise Grade Security
                </span>
                <span className="text-[11px] text-slate-400">
                  Your data is safe with us.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Glassmorphism Login Card */}
          <div className="flex justify-center lg:col-span-6 lg:justify-end">
            <div className="relative w-full max-w-[440px] sm:max-w-[460px]">
              
              {/* Backside Neon Halo Glow */}
              <div className="absolute -inset-1.5 rounded-[28px] bg-gradient-to-r from-blue-600/35 via-sky-500/30 to-blue-500/35 blur-2xl -z-10" />
              <div className="absolute -inset-0.5 rounded-[26px] bg-gradient-to-b from-sky-400/30 via-blue-600/10 to-transparent blur-md -z-10" />

              {/* Login Card Body */}
              <div className="relative overflow-hidden rounded-[24px] border border-blue-500/25 bg-[#050b1d]/85 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_-5px_rgba(37,99,235,0.35)]">
                
                {/* Header inside card */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl flex items-center justify-center gap-2">
                    <span>Welcome Back</span>
                    <span className="text-2xl sm:text-3xl">👋</span>
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
                    Sign in to continue to your AIVIQONE workspace
                  </p>
                </div>

                {/* Error Banner */}
                {error && (
                  <div className="mt-3.5 rounded-xl border border-red-500/30 bg-red-500/10 p-2 text-center text-xs text-red-400">
                    {error}
                  </div>
                )}

                {/* Role Switcher Demo Helper */}
                <div className="mt-3.5 flex items-center justify-between rounded-lg border border-slate-800 bg-[#070e24]/70 px-3 py-1.5 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Sign in role:</span>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="bg-transparent font-semibold text-sky-400 focus:outline-none cursor-pointer"
                  >
                    <option value="sales-agent" className="bg-slate-900 text-white">Sales Agent</option>
                    <option value="team-lead" className="bg-slate-900 text-white">Team Lead</option>
                    <option value="super-admin" className="bg-slate-900 text-white">Super Admin</option>
                    <option value="hr-admin" className="bg-slate-900 text-white">HR Admin</option>
                  </select>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3.5">
                  {/* Work Email Field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-300">
                      Work Email
                    </label>
                    <div className="relative flex items-center">
                      <Mail
                        size={16}
                        className="pointer-events-none absolute left-3.5 text-slate-400"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your work email"
                        required
                        className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-300">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <Lock
                        size={16}
                        className="pointer-events-none absolute left-3.5 text-slate-400"
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        className="w-full rounded-xl border border-slate-700/60 bg-[#081026]/90 py-2.5 pl-10 pr-11 text-sm text-white placeholder:text-slate-500 transition-all focus:border-sky-400 focus:bg-[#0a1532] focus:outline-none focus:ring-1 focus:ring-sky-400/40"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-3.5 text-slate-400 transition-colors hover:text-slate-200"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password Row */}
                  <div className="flex items-center justify-between pt-0.5 text-xs">
                    <label className="flex cursor-pointer items-center gap-2 text-slate-300 select-none">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-sky-500 focus:ring-sky-400 focus:ring-offset-0"
                      />
                      <span>Remember Me</span>
                    </label>
                    <Link
                      href="/forgot-password"
                      className="font-medium text-sky-400 transition-colors hover:text-sky-300 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Primary Sign In Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(14,165,233,0.38)] transition-all hover:opacity-95 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <Loader2 size={18} className="animate-spin text-white" />
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>

                {/* OR Divider */}
                <div className="my-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-800" />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    OR
                  </span>
                  <div className="h-px flex-1 bg-slate-800" />
                </div>

                {/* Social Login Buttons (Google & Microsoft) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("google")}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-[#081026]/90 px-3 py-2 text-xs font-medium text-slate-200 shadow-sm transition-all hover:bg-[#0c1838] hover:border-slate-600 active:scale-[0.98] cursor-pointer"
                  >
                    <GoogleIcon />
                    <span className="truncate">Continue with Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSocialLogin("microsoft")}
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-700/60 bg-[#081026]/90 px-3 py-2 text-xs font-medium text-slate-200 shadow-sm transition-all hover:bg-[#0c1838] hover:border-slate-600 active:scale-[0.98] cursor-pointer"
                  >
                    <MicrosoftIcon />
                    <span className="truncate">Continue with Microsoft</span>
                  </button>
                </div>

                {/* Create Account Footer */}
                <div className="mt-5 text-center text-xs text-slate-400">
                  Don&rsquo;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-sky-400 transition-colors hover:text-sky-300 hover:underline"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Clean bottom subtle spacer */}
      <footer className="relative z-10 py-3 text-center text-[11px] text-slate-600 shrink-0">
        &copy; {new Date().getFullYear()} AIVIQONE. All rights reserved.
      </footer>
    </div>
  );
}
