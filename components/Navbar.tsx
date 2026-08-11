"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";

const navLinks = [
  {
    label: "Product",
    dropdown: ["Smart CRM", "AI Lead Intelligence", "WhatsApp & Calls"],
  },
  {
    label: "Solutions",
    dropdown: ["For Sales Teams", "For Agencies", "For Startups"],
  },
  {
    label: "Resources",
    dropdown: ["Blog", "Help Center", "API Docs"],
  },
  {
    label: "Company",
    dropdown: ["About Us", "Careers", "Contact"],
  },
  {
    label: "Pricing",
    dropdown: null,
  },
  {
    label: "Login",
    dropdown: null,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) =>
      prev === label ? null : label
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/90 backdrop-blur-md">
      <nav
        ref={navRef}
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-accent-light to-accent-dark font-bold text-white">
            A1
          </div>

          <span className="text-lg font-bold tracking-tight">
            AIVIQ
            <span className="text-accent-light">ONE</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <button
                type="button"
                onClick={() =>
                  link.dropdown && toggleDropdown(link.label)
                }
                className="flex items-center gap-1 text-sm text-slate-300 transition-colors hover:text-white"
              >
                {link.label}

                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      activeDropdown === link.label
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                )}
              </button>

              {/* Desktop Dropdown */}
              {link.dropdown &&
                activeDropdown === link.label && (
                  <div className="absolute left-0 top-full mt-3 w-52 rounded-lg border border-border bg-card p-2 shadow-xl shadow-black/40">
                    {link.dropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent/60"
          >
            <Calendar size={16} />
            Book a Demo
          </button>

          <button
            type="button"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Start Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border/60 bg-bg px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={() =>
                    link.dropdown && toggleDropdown(link.label)
                  }
                  className="flex w-full items-center justify-between py-2.5 text-sm text-slate-300 hover:text-white"
                >
                  {link.label}

                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        activeDropdown === link.label
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {link.dropdown &&
                  activeDropdown === link.label && (
                    <div className="ml-2 flex flex-col gap-1 border-l border-border/60 pl-4 pb-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="py-1.5 text-sm text-slate-400 hover:text-white"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            {/* Mobile Buttons */}
            <div className="mt-3 flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium"
              >
                <Calendar size={16} />
                Book a Demo
              </button>

              <button
                type="button"
                className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium"
              >
                Start Free
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}