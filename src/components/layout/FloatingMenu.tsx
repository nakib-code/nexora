
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
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const ACCENT = "#d6ff00";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Services", href: "#services", icon: BriefcaseBusiness },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarTheme, setSidebarTheme] = useState<"dark" | "light">("dark");
  const reduceMotion = useReducedMotion();

  // Detect the section behind the sidebar.
  useEffect(() => {
    const updateSidebarTheme = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-sidebar-theme]")
      );

      const center = window.innerHeight / 2;

      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= center && rect.bottom > center;
      });

      if (activeSection) {
        setSidebarTheme(
          activeSection.dataset.sidebarTheme === "light" ? "light" : "dark"
        );
      }
    };

    updateSidebarTheme();

    window.addEventListener("scroll", updateSidebarTheme, { passive: true });
    window.addEventListener("resize", updateSidebarTheme);

    return () => {
      window.removeEventListener("scroll", updateSidebarTheme);
      window.removeEventListener("resize", updateSidebarTheme);
    };
  }, []);

  // Lock page scrolling while the menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isLight = sidebarTheme === "light";

  const borderColor = isLight
    ? "border-black/15"
    : "border-white/15";

  const hoverBackground = isLight
    ? "hover:bg-black/5"
    : "hover:bg-white/10";

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-[80]
          hidden h-dvh w-[70px]
          border-r ${borderColor}
          bg-transparent
          transition-colors duration-300
          md:flex md:flex-col md:items-center
        `}
      >
        {/* Vertical Brand */}
        <Link
          href="#home"
          aria-label="Nexora Digital home"
          onClick={closeMenu}
          className="absolute left-1/2 top-7 -translate-x-1/2"
        >
          <span
            className="
              block rotate-180 whitespace-nowrap
              text-sm font-extrabold tracking-[0.25em]
              [writing-mode:vertical-rl]
            "
            style={{ color: ACCENT }}
          >
            NEXORA
          </span>
        </Link>

        {/* Animated Menu Toggle */}
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
            items-center justify-center rounded-full
            border border-[#d6ff00]/35
            transition-colors duration-300
            hover:border-[#d6ff00] hover:bg-[#d6ff00]/10
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#d6ff00] focus-visible:ring-offset-2
            focus-visible:ring-offset-transparent
          `}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduceMotion ? undefined : { rotate: 90, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
                className="flex"
              >
                <X size={23} strokeWidth={1.8} color={ACCENT} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={reduceMotion ? false : { rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={reduceMotion ? undefined : { rotate: -90, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
                className="flex"
              >
                <Menu size={24} strokeWidth={1.8} color={ACCENT} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/9587325902"
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
        </a>
      </aside>

      {/* Mobile Menu Toggle */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        whileTap={reduceMotion ? undefined : { scale: 0.94 }}
        className="
          fixed right-5 top-5 z-[110]
          flex h-12 w-12 items-center justify-center
          rounded-full border border-[#d6ff00]/40
          bg-[#080808]/95 text-[#d6ff00]
          shadow-lg shadow-black/10 backdrop-blur-md
          transition-colors duration-300 hover:bg-[#d6ff00]/10
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-[#d6ff00]
          md:hidden
        "
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="mobile-close"
              initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { rotate: 90, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
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
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
              className="flex"
            >
              <Menu size={24} strokeWidth={1.8} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Fullscreen Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className="
              fixed inset-0 z-[100]
              overflow-y-auto bg-[#080808] text-white
              md:left-[70px]
            "
          >
            <div className="flex min-h-dvh flex-col justify-between px-7 py-24 sm:px-12 md:px-16 md:py-12">
              {/* Menu Header */}
              <div className="flex items-center justify-between">
                <Link
                  href="#home"
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
                        initial={
                          reduceMotion ? false : { opacity: 0, y: 18 }
                        }
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

                  <a
                    href="https://wa.me/9587325902"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 text-sm
                      transition-colors hover:text-[#d6ff00]
                    "
                  >
                    Let&apos;s talk
                    <ArrowUpRight size={16} />
                  </a>
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
