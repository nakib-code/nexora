"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  MessageCircle,
  ArrowUpRight,
  Home,
  BriefcaseBusiness,
  FolderKanban,
  UserRound,
  Mail,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const ACCENT = "#d6ff00";
const WHATSAPP_URL = "https://wa.me/9587325902";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: BriefcaseBusiness },
  { label: "About", href: "/about", icon: UserRound },
  { label: "Team", href: "/team", icon: FolderKanban },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarTheme, setSidebarTheme] =
    useState<"dark" | "light">("dark");

  const reduceMotion = useReducedMotion();
  const isLight = sidebarTheme === "light";

  const themeAccent = isLight ? "#111111" : ACCENT;

  const closeMenu = () => setIsOpen(false);

  // Detect the section behind the sidebar and update its theme.
  useEffect(() => {
    let frame = 0;

    const updateSidebarTheme = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const sections = Array.from(
          document.querySelectorAll<HTMLElement>(
            "[data-sidebar-theme]"
          )
        );

        const center = window.innerHeight / 2;

        const activeSection = sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= center && rect.bottom > center;
        });

        if (activeSection) {
          const nextTheme =
            activeSection.dataset.sidebarTheme === "light"
              ? "light"
              : "dark";

          setSidebarTheme((current) =>
            current === nextTheme ? current : nextTheme
          );
        }
      });
    };

    updateSidebarTheme();

    window.addEventListener("scroll", updateSidebarTheme, {
      passive: true,
    });
    window.addEventListener("resize", updateSidebarTheme);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateSidebarTheme);
      window.removeEventListener("resize", updateSidebarTheme);
    };
  }, []);

  // Lock background scrolling while the fullscreen menu is open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : previousOverflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const desktopToggleTheme = isLight
    ? "border-black/20 bg-white/80 hover:border-black/50 hover:bg-black/5"
    : "border-[#d6ff00]/35 bg-transparent hover:border-[#d6ff00] hover:bg-[#d6ff00]/10";

  const mobileToggleTheme = isLight
    ? "border-black/20 bg-white/95 text-black hover:border-black/40 hover:bg-black/5"
    : "border-[#d6ff00]/40 bg-[#080808]/95 text-[#d6ff00] hover:bg-[#d6ff00]/10";

  const focusRing = isLight
    ? "focus-visible:ring-black"
    : "focus-visible:ring-[#d6ff00]";

  const iconMotion = reduceMotion
    ? { duration: 0 }
    : { duration: 0.18 };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside
        className={`
          fixed left-0 top-0 z-[80]
          hidden h-dvh w-[70px]
          border-r
          ${isLight ? "border-black/15" : "border-white/15"}
          bg-transparent
          transition-colors duration-300
          md:flex md:flex-col md:items-center
        `}
      >
        {/* Brand */}
        <Link
          href="/"
          aria-label="Nexora Digital home"
          onClick={closeMenu}
          className="absolute left-1/2 top-7 -translate-x-1/2"
        >
          <span
            className="
              block rotate-180 whitespace-nowrap
              text-sm font-extrabold tracking-[0.25em]
              [writing-mode:vertical-rl]
              transition-colors duration-300
            "
            style={{ color: themeAccent }}
          >
            NEXORA
          </span>
        </Link>

        {/* Desktop Menu Toggle */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          whileHover={reduceMotion ? undefined : { scale: 1.06 }}
          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          className={`
            group absolute left-1/2 top-1/2
            flex h-12 w-12 -translate-x-1/2 -translate-y-1/2
            items-center justify-center rounded-full border
            transition-colors duration-300
            ${desktopToggleTheme}
            focus-visible:outline-none focus-visible:ring-2
            ${focusRing} focus-visible:ring-offset-2
          `}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="desktop-close"
                initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduceMotion ? undefined : { rotate: 90, opacity: 0 }}
                transition={iconMotion}
                className="flex"
              >
                <X size={23} strokeWidth={1.8} color={themeAccent} />
              </motion.span>
            ) : (
              <motion.span
                key="desktop-menu"
                initial={reduceMotion ? false : { rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduceMotion ? undefined : { rotate: -90, opacity: 0 }}
                transition={iconMotion}
                className="flex"
              >
                <Menu size={24} strokeWidth={1.8} color={themeAccent} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* WhatsApp */}
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="
            absolute bottom-7 left-1/2
            flex h-11 w-11 -translate-x-1/2
            items-center justify-center rounded-full
            bg-[#25D366] text-white
            transition-transform duration-300 hover:scale-110
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#25D366] focus-visible:ring-offset-2
          "
        >
          <MessageCircle size={21} strokeWidth={1.9} />
        </Link>
      </aside>

      {/* MOBILE MENU BUTTON */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        whileTap={reduceMotion ? undefined : { scale: 0.94 }}
        className={`
          fixed right-5 top-5 z-[110]
          flex h-12 w-12 items-center justify-center
          rounded-full border shadow-lg shadow-black/10
          backdrop-blur-md transition-colors duration-300
          ${mobileToggleTheme}
          focus-visible:outline-none focus-visible:ring-2
          ${focusRing}
          md:hidden
        `}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="mobile-close"
              initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { rotate: 90, opacity: 0 }}
              transition={iconMotion}
              className="flex"
            >
              <X size={23} strokeWidth={1.8} />
            </motion.span>
          ) : (
            <motion.span
              key="mobile-menu"
              initial={reduceMotion ? false : { rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { rotate: -90, opacity: 0 }}
              transition={iconMotion}
              className="flex"
            >
              <Menu size={24} strokeWidth={1.8} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* FULLSCREEN NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="
              fixed inset-0 z-[100] overflow-y-auto
              bg-[#080808] text-white
              md:left-[70px]
            "
          >
            <div
              className="
                flex min-h-dvh flex-col justify-between
                px-7 py-24 sm:px-12 md:px-16 md:py-12
              "
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-sm font-extrabold tracking-[0.25em]"
                  style={{ color: ACCENT }}
                >
                  NEXORA
                </Link>

                <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Navigation
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="my-12">
                <ul className="space-y-2 sm:space-y-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.li
                        key={item.label}
                        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.35,
                          delay: reduceMotion ? 0 : index * 0.07,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="
                            group flex items-center justify-between
                            border-b border-white/10 py-3
                            transition-colors duration-300
                            hover:border-[#d6ff00]
                          "
                        >
                          <span className="flex items-center gap-4 sm:gap-6">
                            <span className="text-xs text-white/35">
                              0{index + 1}
                            </span>

                            <span
                              className="
                                text-3xl font-medium tracking-tight
                                transition-colors duration-300
                                group-hover:text-[#d6ff00]
                                sm:text-5xl md:text-6xl
                              "
                            >
                              {item.label}
                            </span>
                          </span>

                          <span className="flex items-center gap-3">
                            <Icon
                              size={19}
                              strokeWidth={1.5}
                              className="
                                text-white/40 transition-colors
                                group-hover:text-[#d6ff00]
                              "
                            />

                            <ArrowUpRight
                              size={23}
                              className="
                                text-white/40 transition-all
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                                group-hover:text-[#d6ff00]
                              "
                            />
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Menu Footer */}
              <div
                className="
                  flex flex-col gap-5 border-t border-white/10
                  pt-6 sm:flex-row sm:items-end sm:justify-between
                "
              >
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/40">
                    Have a project in mind?
                  </p>

                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 text-sm
                      transition-colors hover:text-[#d6ff00]
                    "
                  >
                    Let&apos;s talk
                    <ArrowUpRight size={16} />
                  </Link>
                </div>

                <p className="text-xs text-white/35">
                  © {new Date().getFullYear()} Nexora Digital
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
