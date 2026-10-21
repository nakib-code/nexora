"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks: FooterLink[] = [
  { label: "Facebook / Meta Ads", href: "#services" },
  { label: "Google Ads", href: "#services" },
  { label: "Conversion Tracking", href: "#services" },
  { label: "Video Editing", href: "#services" },
  { label: "Website Design & Development", href: "#services" },
];

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 17L17 7M8 7H17V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 5V19M6 13L12 19L18 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L13.7 8.3L20 10L13.7 11.7L12 18L10.3 11.7L4 10L10.3 8.3L12 2Z"
        fill="currentColor"
      />
      <path
        d="M19 16L19.7 18.3L22 19L19.7 19.7L19 22L18.3 19.7L16 19L18.3 18.3L19 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const columns = footer.querySelectorAll<HTMLElement>(".footer-column");
      const titles = footer.querySelectorAll<HTMLElement>(".footer-column-title");
      const bottomBar = footer.querySelector<HTMLElement>(".footer-bottom");
      const line = footer.querySelector<HTMLElement>(".footer-animated-line");
      const glow = footer.querySelector<HTMLElement>(".footer-ambient-glow");

      if (reduceMotion) {
        gsap.set([...columns, ...titles, bottomBar, line].filter(Boolean), {
          opacity: 1,
          x: 0,
          y: 0,
          scaleX: 1,
        });
        return;
      }

      gsap.set(columns, { opacity: 0, y: 18 });
      gsap.set(titles, { opacity: 0, x: -5 });

      if (bottomBar) gsap.set(bottomBar, { opacity: 0, y: 8 });
      if (line) gsap.set(line, { scaleX: 0, transformOrigin: "left center" });

      gsap.to(columns, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer.querySelector(".footer-grid"),
          start: "top 88%",
          once: true,
        },
      });

      gsap.to(titles, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer.querySelector(".footer-grid"),
          start: "top 86%",
          once: true,
        },
      });

      if (bottomBar) {
        gsap.to(bottomBar, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomBar,
            start: "top 98%",
            once: true,
          },
        });
      }

      if (line) {
        gsap.to(line, {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: line,
            start: "top 95%",
            once: true,
          },
        });
      }

      if (glow) {
        gsap.to(glow, {
          x: 16,
          y: -10,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      data-sidebar-theme="dark"
      className="section-with-left-nav relative isolate overflow-hidden bg-[#050505] text-white"
    >
      <style jsx>{`
        .footer-dark-link {
          transition: color 220ms ease, transform 220ms ease;
        }

        .footer-dark-link:hover {
          color: #fff;
          transform: translateX(3px);
        }

        .footer-contact-button,
        .footer-contact-arrow,
        .footer-back-top {
          transition: transform 250ms ease, background-color 250ms ease,
            border-color 250ms ease, color 250ms ease;
        }

        .footer-contact-button:hover {
          transform: translateY(-2px);
          background: #d6ff63;
          color: #050505;
        }

        .footer-contact-button:hover .footer-contact-arrow {
          transform: rotate(45deg);
        }

        .footer-back-top:hover {
          transform: translateY(-3px);
          border-color: rgba(128, 87, 239, 0.65);
          background: rgba(128, 87, 239, 0.14);
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-dark-link,
          .footer-contact-button,
          .footer-contact-arrow,
          .footer-back-top {
            transition: none !important;
          }
        }
      `}</style>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="footer-ambient-glow absolute -right-[200px] top-5 h-[350px] w-[350px] rounded-full bg-[#8057ef]/[0.08] blur-[130px] sm:h-[480px] sm:w-[480px]" />
        <div className="absolute -left-[240px] bottom-[100px] h-[360px] w-[360px] rounded-full bg-white/[0.025] blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <section
          aria-label="Footer navigation"
          className="footer-grid grid gap-12 py-14 sm:gap-14 sm:py-16 lg:grid-cols-[1.35fr_0.75fr_1fr_0.9fr] lg:gap-12 lg:py-20 xl:gap-20 xl:py-24"
        >
          <div className="footer-column min-w-0">
            <Link
              href="#home"
              aria-label="Nexora Digital home"
              className="footer-column-title group inline-flex items-baseline gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8057ef]"
            >
              <span className="text-[1.65rem] font-bold tracking-[-0.065em] sm:text-[1.8rem]">
                nexora
              </span>
              <span className="text-[1.65rem] font-bold tracking-[-0.065em] text-[#8057ef] sm:text-[1.8rem]">
                .digital
              </span>
            </Link>

            <p className="mt-5 max-w-[350px] text-[12px] font-medium leading-6 text-white/45 sm:text-[13px]">
              We help businesses turn ideas into memorable digital experiences
              through thoughtful design, creative content, and modern web
              development.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">
              <span className="h-px w-7 bg-[#8057ef]/80" />
              DIGITAL / CREATIVE / PERFORMANCE
            </div>
          </div>

          <nav className="footer-column" aria-label="Quick links">
            <p className="footer-column-title mb-6 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
              Explore
            </p>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="footer-dark-link group inline-flex items-center gap-2 text-[13px] font-medium text-white/60 focus:outline-none focus-visible:text-white"
                  >
                    <span className="h-px w-0 bg-[#8057ef] transition-all duration-300 group-hover:w-3" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-column" aria-label="Our services">
            <p className="footer-column-title mb-6 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
              Our Services
            </p>
            <ul className="space-y-3.5">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="footer-dark-link group flex max-w-[250px] items-start gap-2 text-[12px] font-medium leading-5 text-white/55 focus:outline-none focus-visible:text-white sm:text-[13px]"
                  >
                    <span className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-white/25 transition-colors duration-300 group-hover:bg-[#8057ef]" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column min-w-0">
            <p className="footer-column-title mb-6 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
              Let&apos;s Connect
            </p>

            <h3 className="max-w-[260px] text-[1.7rem] font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-[2rem]">
              Have a project
              <br />
              in mind?
            </h3>

            <p className="mt-4 max-w-[260px] text-[12px] font-medium leading-5 text-white/45">
              Tell us what you&apos;re planning. We&apos;d love to hear about it.
            </p>

            <Link
              href="#contact"
              className="footer-contact-button group mt-6 inline-flex min-h-11 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-4 pr-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8057ef]"
            >
              <span>Let&apos;s Talk</span>
              <span className="footer-contact-arrow flex h-8 w-8 items-center justify-center rounded-full bg-[#8057ef] text-white">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </section>

        <div className="relative h-px w-full overflow-hidden bg-white/[0.09]">
          <div className="footer-animated-line absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-[#8057ef] via-[#8057ef]/30 to-transparent" />
        </div>

        <div className="footer-bottom flex flex-col gap-4 py-6 text-[10px] font-medium text-white/35 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-7">
          <p>© {currentYear ?? "2026"} Nexora Digital. All rights reserved.</p>
          <span className="inline-flex items-center gap-2">
            <SparkIcon className="h-3 w-3 text-[#8057ef]" />
            Designed with intention
          </span>
        </div>
      </div>

      <Link
        href="#home"
        aria-label="Back to top"
        className="footer-back-top absolute bottom-6 right-5 hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/55 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8057ef] sm:flex lg:bottom-8 lg:right-8"
      >
        <ArrowDownIcon className="h-4 w-4 rotate-180" />
      </Link>
    </footer>
  );
}
