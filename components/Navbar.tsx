"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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

  // Mobile menu close handler
  const handleMobileNavClick = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-[#070b14]/90 backdrop-blur-md transition-all">
      <nav
        ref={navRef}
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5 lg:px-8"
      >
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0469F8] font-bold text-white text-base shadow-sm">
            A1
          </div>

          <span className="text-xl font-semibold tracking-tight text-slate-100">
            AIVIQ<span className="text-[#0469F8]">ONE</span>
          </span>
        </div>

        {/* Desktop Right Side: Navigation Links + Action Buttons */}
        <div className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {/* Menu Items */}
          <div className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    link.dropdown && toggleDropdown(link.label)
                  }
                  className="flex items-center gap-1.5 text-sm font-normal text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}

                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label
                          ? "rotate-180 text-[#0469F8]"
                          : "text-slate-400"
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {link.dropdown &&
                  activeDropdown === link.label && (
                    <div className="absolute left-0 top-full mt-3 w-52 rounded-xl border border-slate-800/80 bg-[#0d1322] p-2 shadow-xl shadow-black/50 backdrop-blur-xl">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block rounded-lg px-3 py-2 text-sm font-normal text-slate-300 transition-colors hover:bg-blue-500/10 hover:text-white"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>

          {/* Login Link & Action Buttons */}
          <div className="flex items-center gap-3 pl-2">
            <a
              href="#"
              className="px-2 text-sm font-normal text-slate-300 transition-colors hover:text-white"
            >
              Login
            </a>

            <button
              type="button"
              className="rounded-lg border border-[#0469F8]/60 bg-transparent px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-[#0469F8] hover:bg-[#0469F8]/10 hover:text-white"
            >
              Book a Demo
            </button>

            <button
              type="button"
              className="rounded-lg bg-[#0469F8] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#0352c5] hover:shadow-lg hover:shadow-[#0469F8]/20"
            >
              Start Free
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="rounded-lg p-1.5 text-slate-300 hover:bg-slate-800/60 hover:text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Responsive Navigation Panel */}
      {open && (
        <div className="border-t border-slate-800/60 bg-[#070b14]/95 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <button
                    type="button"
                    onClick={() => toggleDropdown(link.label)}
                    className="flex w-full items-center justify-between py-2.5 text-sm font-normal text-slate-300 hover:text-white"
                  >
                    {link.label}
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.label
                          ? "rotate-180 text-[#0469F8]"
                          : "text-slate-500"
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href="#"
                    onClick={handleMobileNavClick}
                    className="block py-2.5 text-sm font-normal text-slate-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                )}

                {/* Mobile Accordion Submenu */}
                {link.dropdown &&
                  activeDropdown === link.label && (
                    <div className="ml-2 flex flex-col gap-1 border-l border-slate-800/80 pl-4 py-1.5">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          onClick={handleMobileNavClick}
                          className="py-1.5 text-sm text-slate-400 hover:text-white"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
              </div>
            ))}

            <a
              href="#"
              onClick={handleMobileNavClick}
              className="py-2.5 text-sm font-normal text-slate-300 hover:text-white"
            >
              Login
            </a>

            {/* Mobile Action Buttons */}
            <div className="mt-4 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleMobileNavClick}
                className="w-full rounded-lg border border-[#0469F8]/60 bg-[#0d1322]/60 py-2.5 text-sm font-medium text-slate-200 hover:border-[#0469F8]"
              >
                Book a Demo
              </button>

              <button
                type="button"
                onClick={handleMobileNavClick}
                className="w-full rounded-lg bg-[#0469F8] py-2.5 text-sm font-medium text-white hover:bg-[#0352c5]"
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
