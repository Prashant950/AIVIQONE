import Link from "next/link";
import { Headset } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export function AuthTopbarFull() {
  return (
    <Container className="flex h-20 items-center justify-between">
      <Logo />

      <div className="flex items-center gap-8">
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            About Us
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/signup"
          className="rounded-xl border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)] backdrop-blur-md transition-all hover:bg-sky-500 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
        >
          Get Started
        </Link>
      </div>
    </Container>
  );
}

export function AuthTopbarMinimal() {
  return (
    <Container className="flex h-20 items-center justify-between">
      <Logo />

      <div className="flex items-center gap-4">
        <span className="hidden text-sm text-slate-400 sm:inline">
          Need help?
        </span>
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-sky-400 hover:text-white"
        >
          <Headset size={16} />
          Contact Support
        </Link>
      </div>
    </Container>
  );
}