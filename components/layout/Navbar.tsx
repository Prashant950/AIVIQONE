"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  FileText,
  Building2,
  HelpCircle,
  Home,
  Layers,
  Info,
  CreditCard,
  Mail,
  Calendar,
  ChevronRight,
  User,
  Sparkles,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { navLinks, type DropdownItem } from "@/features/marketing/data/navigation";
import Link from "next/link";

function getNavIcon(label: string) {
  const lower = label.toLowerCase();
  if (lower === "home") return Home;
  if (lower === "about") return Info;
  if (lower === "features") return Layers;
  if (lower === "pricing") return CreditCard;
  if (lower === "company") return Building2;
  if (lower === "contact") return Mail;
  return HelpCircle;
}

function getDropdownIcon(label: string) {
  const lower = label.toLowerCase();
  if (lower.includes("privacy")) return ShieldCheck;
  if (lower.includes("terms") || lower.includes("cookie")) return FileText;
  if (lower.includes("company") || lower.includes("about")) return Building2;
  return HelpCircle;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close dropdown and mobile drawer on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body & html scroll completely when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#020617]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 sm:h-20 w-full max-w-[1420px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo />

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => {
              const hasSubmenu = !!link.dropdownItems?.length;
              const isLinkActive =
                isActive(link.href) ||
                (link.dropdownItems?.some((sub) => isActive(sub.href)) ?? false);
              const isOpen = openDropdown === link.label;

              if (hasSubmenu) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        className={`group relative flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors hover:text-sky-400 ${
                          isLinkActive
                            ? "text-sky-400 after:absolute after:inset-x-3 after:-bottom-1 after:h-0.5 after:bg-sky-400"
                            : "text-slate-300"
                        }`}
                        aria-current={isLinkActive ? "page" : undefined}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-sky-400" : "group-hover:text-sky-400"
                          }`}
                        />
                      </Link>
                    </div>

                    {/* Desktop Dropdown Card */}
                    {isOpen && (
                      <div className="absolute left-0 top-full pt-2 w-72">
                        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#050c1e]/95 p-2 shadow-2xl backdrop-blur-xl animate-fade-in-up">
                          <div className="flex flex-col gap-1">
                            {link.dropdownItems!.map((item: DropdownItem) => {
                              const Icon = getDropdownIcon(item.label);
                              const itemActive = isActive(item.href);

                              return (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className={`flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-slate-800/60 ${
                                    itemActive ? "bg-slate-800/40 text-sky-400" : "text-slate-300"
                                  }`}
                                >
                                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/50 text-sky-400">
                                    <Icon size={16} />
                                  </span>
                                  <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-white group-hover:text-sky-400">
                                      {item.label}
                                    </span>
                                    {item.description && (
                                      <span className="text-xs text-slate-400 leading-tight">
                                        {item.description}
                                      </span>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group relative flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors hover:text-sky-400 ${
                    isActive(link.href)
                      ? "text-sky-400 after:absolute after:inset-x-3 after:-bottom-1 after:h-0.5 after:bg-sky-400"
                      : "text-slate-300"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/login"
              className="px-3 py-2 text-sm font-semibold text-slate-300 transition-colors hover:text-sky-400"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-[#060c1a]/90 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-[#070e24] hover:text-white"
            >
              Get Started
            </Link>

            <Link
              href="/contact#form"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]"
            >
              Book a Demo
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile toggle hamburger button */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-[#050c1e] text-slate-200 transition-colors hover:border-sky-500/50 hover:text-sky-400 active:scale-95 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* PORTAL TO BODY: Direct Body Portal for smooth slide-in/slide-out without clipping */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] lg:hidden transition-all duration-300 ${
              mobileOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
            }`}
          >
            {/* 1. Backdrop Overlay */}
            <div
              onClick={() => setMobileOpen(false)}
              onTouchMove={(e) => e.preventDefault()}
              className={`absolute inset-0 bg-black/80 backdrop-blur-md touch-none transition-opacity duration-300 ease-in-out ${
                mobileOpen ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            />

            {/* 2. Full Height Slide-In Drawer */}
            <aside
              className={`absolute top-0 right-0 h-[100dvh] w-[85%] max-w-[340px] border-l border-slate-800/90 bg-[#040816] px-5 pt-3.5 pb-5 shadow-[0_0_60px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-y-auto overscroll-contain touch-pan-y transition-transform duration-300 ease-out ${
                mobileOpen ? "translate-x-0" : "translate-x-full"
              }`}
              aria-label="Mobile Navigation Drawer"
            >
              <div>
                {/* Header: Logo Higher Up + Sleek Circular Close Button */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="scale-95 origin-left">
                    <Logo />
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close navigation"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 bg-slate-800/80 text-slate-300 transition-all hover:border-sky-400 hover:text-white active:scale-90 shadow-md"
                  >
                    <X size={17} />
                  </button>
                </div>

                {/* Primary CTA Button: Book a Demo Now */}
                <Link
                  href="/contact#form"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3.5 flex items-center justify-between rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 px-4 py-3 text-sm font-extrabold text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all hover:opacity-95 active:scale-[0.98]"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar size={17} className="shrink-0" />
                    <span>Book a Demo Now</span>
                  </div>
                  <ChevronRight size={16} className="shrink-0" />
                </Link>

                {/* Section Label: MENU NAVIGATION */}
                <span className="mt-5 mb-2 block text-[10.5px] font-extrabold tracking-widest text-slate-400 uppercase">
                  MENU NAVIGATION
                </span>

                {/* Navigation Cards List */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const Icon = getNavIcon(link.label);
                    const hasSubmenu = !!link.dropdownItems?.length;
                    const isExpanded = mobileExpanded[link.label];
                    const isLinkActive =
                      isActive(link.href) ||
                      (link.dropdownItems?.some((sub) => isActive(sub.href)) ?? false);

                    if (hasSubmenu) {
                      return (
                        <div key={link.label} className="flex flex-col rounded-2xl overflow-hidden">
                          <div
                            className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition-colors ${
                              isLinkActive
                                ? "border-sky-500/60 bg-[#081533] text-sky-400"
                                : "border-slate-800/80 bg-[#060d1f]/90 text-white hover:border-slate-700"
                            }`}
                          >
                            <Link
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex flex-1 items-center gap-3 text-sm font-semibold"
                            >
                              <Icon size={18} className="text-sky-400 shrink-0" />
                              <span>{link.label}</span>
                            </Link>

                            {/* Dropdown Arrow Only for Submenu item */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleMobileSubmenu(link.label);
                              }}
                              aria-label={`Toggle ${link.label} submenu`}
                              className="p-1 rounded-lg text-sky-400 hover:bg-sky-500/10 transition-colors"
                            >
                              <ChevronDown
                                size={17}
                                className={`transition-transform duration-200 ${
                                  isExpanded ? "rotate-180 text-cyan-400" : "text-sky-400"
                                }`}
                              />
                            </button>
                          </div>

                          {/* Attractive Submenu Items */}
                          {isExpanded && (
                            <div className="mt-2 flex flex-col gap-1.5 rounded-2xl border border-sky-500/20 bg-[#050c1c]/95 p-2 shadow-inner">
                              {link.dropdownItems!.map((item) => {
                                const SubIcon = getDropdownIcon(item.label);
                                const itemActive = isActive(item.href);

                                return (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-start gap-2.5 rounded-xl p-2.5 transition-all ${
                                      itemActive
                                        ? "bg-sky-500/20 text-sky-300 font-bold border border-sky-500/30"
                                        : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                                    }`}
                                  >
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                                      <SubIcon size={13} />
                                    </span>
                                    <div className="flex flex-col">
                                      <span className="text-xs font-semibold">{item.label}</span>
                                      {item.description && (
                                        <span className="text-[10px] text-slate-400 leading-tight">
                                          {item.description}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    {/* Standard Links: No extra chevron arrow on the right */}
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                          isLinkActive
                            ? "border-sky-500/60 bg-[#081533] text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                            : "border-slate-800/80 bg-[#060d1f]/90 text-white hover:border-slate-700 hover:bg-[#08122c]"
                        }`}
                        aria-current={isLinkActive ? "page" : undefined}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} className="text-sky-400 shrink-0" />
                          <span>{link.label}</span>
                        </div>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Login Card & Copyright */}
              <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex flex-col gap-2.5">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-2xl border border-sky-500/40 bg-gradient-to-r from-[#071638] to-[#040c1e] p-3 shadow-lg transition-all hover:border-sky-400 active:scale-[0.98]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-slate-950 font-bold">
                    <User size={18} />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-bold text-white">Login to Console</span>
                    <span className="text-[10.5px] text-slate-400">Access CRM, leads &amp; dashboard</span>
                  </div>
                </Link>

                <p className="text-center text-[10px] text-slate-500">
                  &copy; 2026 AIVIQONE Technologies Pvt. Ltd.
                </p>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}
