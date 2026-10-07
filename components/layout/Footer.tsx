import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { footerColumns } from "@/features/marketing/data/navigation";

const socials = [
  { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { icon: "x", href: "https://x.com", label: "X" },
  { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
  { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M5.2 8.1H1.7V22h3.5V8.1ZM3.45 2A2.05 2.05 0 1 0 3.45 6.1 2.05 2.05 0 0 0 3.45 2ZM8.1 8.1V22h3.5v-6.88c0-1.82.34-3.58 2.6-3.58 2.23 0 2.26 2.08 2.26 3.7V22H20v-7.5c0-3.68-.79-6.5-5.08-6.5-2.06 0-3.44 1.13-4 2.2h-.05V8.1H8.1Z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M13.8 22v-8h2.7l.4-3.2h-3.1V8.76c0-.93.26-1.56 1.6-1.56h1.7V4.34c-.3-.04-1.34-.14-2.55-.14-2.52 0-4.25 1.54-4.25 4.38v2.22H7.45V14h2.85v8h3.5Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.45" cy="6.65" r="1" className="fill-current stroke-none" />
      </svg>
    );
  }

  // X / Twitter
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-[#020617] text-slate-400">
      {/* Subtle bottom ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-64 w-[800px] -translate-x-1/2 rounded-full bg-sky-500/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand & Mission Column (4 cols) */}
          <div className="flex flex-col gap-5 lg:col-span-4 lg:pr-8">
            <Logo />
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              AIVIQONE is India&rsquo;s modern CRM platform built for Loan DSAs,
              Sales Teams and growing businesses looking to scale operations intelligently.
            </p>

            <div className="flex flex-col gap-1 text-xs text-slate-400">
              <span>AIVIQONE Technologies Pvt. Ltd.</span>
              <a href="mailto:hello@aiviqone.com" className="text-sky-400 hover:underline">
                hello@aiviqone.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-2 flex items-center gap-3">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#050c1e] text-slate-400 transition-all duration-300 hover:border-sky-400 hover:bg-sky-500/10 hover:text-sky-400 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                >
                  <SocialIcon name={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Columns (8 cols: 4 columns x 2 cols each) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                  {column.title}
                </h4>
                <span className="-mt-2.5 h-0.5 w-5 bg-sky-400 rounded-full" />
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-400 transition-colors duration-200 hover:text-sky-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Copyright & Badges */}
        <div className="mt-8 sm:mt-10 border-t border-slate-800/80 pt-5 flex flex-col items-center justify-between gap-3 text-xs text-slate-400 sm:flex-row text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} AIVIQONE Technologies Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-400">
            <span className="text-sky-400">Secure Cloud CRM</span>
            <span aria-hidden="true" className="text-slate-600">&bull;</span>
            <span className="text-sky-400">Built in India. Serving Globally.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}