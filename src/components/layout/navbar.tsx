
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/[0.07] bg-white/90 shadow-[0_8px_30px_rgba(20,15,40,0.04)] backdrop-blur-xl"
          : "border-b border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Nexora Digital homepage"
          className="group relative z-[60] flex shrink-0 items-center gap-2.5"
        >
          <span className="relative grid size-10 place-items-center overflow-hidden rounded-[13px] bg-[#8057ef] text-white shadow-[0_5px_15px_rgba(128,87,239,0.22)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
            <span className="text-[25px] font-black tracking-[-2px]">
              n
            </span>
            <span className="absolute -right-1 -top-1 size-4 rounded-full border-2 border-white/70 bg-[#d6ff63]" />
          </span>

          <span className="flex flex-col leading-none">
            <span className="text-[22px] font-black tracking-[-1.3px] text-[#19171f]">
              nexora<span className="text-[#8057ef]">.</span>
            </span>
            <span className="mt-1.5 text-[8px] font-bold uppercase tracking-[2.8px] text-gray-400">
              Digital studio
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative rounded-full px-4 py-2.5 text-[13px] font-semibold transition-colors duration-200 ${
                  active
                    ? "bg-[#8057ef]/[0.08] text-[#8057ef]"
                    : "text-[#696773] hover:bg-gray-100/80 hover:text-[#19171f]"
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute bottom-[3px] left-1/2 h-[3px] w-3 -translate-x-1/2 rounded-full bg-[#8057ef]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="relative z-[60] flex items-center gap-3">
          <div className="hidden items-center gap-2.5 border-r border-gray-200 pr-5 xl:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-semibold text-gray-500">
              Available for projects
            </span>
          </div>

          <Link
            href="/contact"
            className="group hidden items-center gap-3 rounded-full bg-[#19171f] py-3 pl-5 pr-3.5 text-[12px] font-bold text-white transition-all duration-300 hover:bg-[#8057ef] hover:shadow-[0_8px_24px_rgba(128,87,239,0.22)] sm:flex"
          >
            Let&apos;s Talk
            <span className="grid size-7 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white/20">
              <ArrowUpRight size={15} />
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`grid size-11 place-items-center rounded-full border transition-all duration-200 lg:hidden ${
              menuOpen
                ? "border-[#8057ef] bg-[#8057ef] text-white"
                : "border-gray-200 bg-white text-[#19171f] hover:border-[#8057ef]/40 hover:text-[#8057ef]"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[76px] z-40 bg-[#19171f]/20 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`absolute inset-x-0 top-0 border-t border-gray-100 bg-white px-5 pb-7 pt-5 shadow-[0_25px_50px_rgba(20,15,40,0.12)] transition-transform duration-300 sm:px-8 ${
            menuOpen ? "translate-y-0" : "-translate-y-3"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
              <Sparkles size={13} className="text-[#8057ef]" />
              Explore Nexora
            </span>
            <span className="text-[10px] font-medium text-gray-400">
              MENU / 01
            </span>
          </div>

          <div className="space-y-1">
            {navLinks.map((link, index) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={menuOpen ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-200 ${
                    active
                      ? "bg-[#8057ef]/[0.08] text-[#8057ef]"
                      : "text-[#292631] hover:bg-gray-50"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`text-[10px] font-bold ${
                        active ? "text-[#8057ef]" : "text-gray-400"
                      }`}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-[17px] font-bold tracking-[-0.5px]">
                      {link.label}
                    </span>
                  </span>

                  <ArrowDownRight
                    size={19}
                    className={`transition-transform duration-200 ${
                      active
                        ? "translate-x-0.5 text-[#8057ef]"
                        : "text-gray-300 group-hover:translate-x-0.5 group-hover:text-[#8057ef]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-5 rounded-[22px] bg-[#f6f3ff] p-5">
            <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#8057ef]">
              Have a project in mind?
            </span>
            <p className="mt-2 max-w-[280px] text-xl font-extrabold leading-tight tracking-[-0.8px] text-[#19171f]">
              Let&apos;s turn your idea into something great.
            </p>

            <Link
              href="/contact"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#8057ef] px-5 py-3 text-[12px] font-bold text-white transition-colors hover:bg-[#6e46df]"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <p className="mt-5 text-center text-[10px] font-medium text-gray-400">
            Creative thinking. Thoughtful execution.
          </p>
        </nav>
      </div>
    </header>
  );
}
