"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   ICONS
========================================================= */

function ArrowUpRightIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
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

function ArrowRightIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
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

function SparkIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
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

/* =========================================================
   TYPES
========================================================= */

type FooterLink = {
  label: string;
  href: string;
};

type ServiceLink = {
  label: string;
  href: string;
};

/* =========================================================
   NAVIGATION
========================================================= */

const quickLinks: FooterLink[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Our Process",
    href: "#process",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

/*
 * The existing Services section is one interactive section.
 * Individual service routes/anchors were not verified, so these
 * safely point to the existing Services section instead of
 * creating broken URLs.
 */
const serviceLinks: ServiceLink[] = [
  {
    label: "Facebook / Meta Ads",
    href: "#services",
  },
  {
    label: "Google Ads",
    href: "#services",
  },
  {
    label: "Conversion Tracking",
    href: "#services",
  },
  {
    label: "Video Editing",
    href: "#services",
  },
  {
    label: "Website Design & Development",
    href: "#services",
  },
];

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const ctaItems = footer.querySelectorAll<HTMLElement>(
        ".footer-cta-reveal"
      );

      const columns = footer.querySelectorAll<HTMLElement>(
        ".footer-column"
      );

      const columnTitles = footer.querySelectorAll<HTMLElement>(
        ".footer-column-title"
      );

      const bottomBar = footer.querySelector<HTMLElement>(
        ".footer-bottom"
      );

      const decorativeLine = footer.querySelector<HTMLElement>(
        ".footer-animated-line"
      );

      const ambientGlow = footer.querySelector<HTMLElement>(
        ".footer-ambient-glow"
      );

      if (reduceMotion) {
        gsap.set(
          [...ctaItems, ...columns, bottomBar, decorativeLine].filter(
            Boolean
          ),
          {
            opacity: 1,
            y: 0,
            x: 0,
            scaleX: 1,
          }
        );

        return;
      }

      gsap.set(ctaItems, {
        opacity: 0,
        y: 42,
      });

      gsap.set(columns, {
        opacity: 0,
        y: 28,
      });

      if (bottomBar) {
        gsap.set(bottomBar, {
          opacity: 0,
          y: 18,
        });
      }

      if (decorativeLine) {
        gsap.set(decorativeLine, {
          scaleX: 0,
          transformOrigin: "left center",
        });
      }

      /*
       * CTA reveal
       */
      const ctaTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 78%",
          once: true,
        },
      });

      ctaTimeline.to(ctaItems, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
      });

      /*
       * Columns
       */
      gsap.to(columns, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-grid",
          start: "top 82%",
          once: true,
        },
      });

      /*
       * Column heading micro reveal
       */
      gsap.fromTo(
        columnTitles,
        {
          opacity: 0,
          x: -10,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".footer-grid",
            start: "top 78%",
            once: true,
          },
        }
      );

      /*
       * Bottom bar
       */
      if (bottomBar) {
        gsap.to(bottomBar, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomBar,
            start: "top 94%",
            once: true,
          },
        });
      }

      /*
       * Animated divider
       */
      if (decorativeLine) {
        gsap.to(decorativeLine, {
          scaleX: 1,
          duration: 1.15,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: decorativeLine,
            start: "top 88%",
            once: true,
          },
        });
      }

      /*
       * Very restrained ambient movement.
       * This stays subtle so the footer doesn't feel noisy.
       */
      if (ambientGlow) {
        gsap.to(ambientGlow, {
          x: 30,
          y: -20,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, footer);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#09090b]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main subtle purple atmosphere */}
        <div
          className="
            footer-ambient-glow
            absolute
            -right-[180px]
            top-[80px]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#854fee]/[0.10]
            blur-[130px]
            sm:h-[520px]
            sm:w-[520px]
            sm:blur-[160px]
          "
        />

        {/* Secondary light */}
        <div
          className="
            absolute
            -left-[220px]
            bottom-[120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-white/[0.025]
            blur-[130px]
          "
        />

        {/* Fine dot texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.055]
            [background-image:radial-gradient(rgba(255,255,255,0.8)_0.6px,transparent_0.6px)]
            [background-size:24px_24px]
            sm:[background-size:28px_28px]
          "
        />

        {/* Editorial horizontal lines */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_bottom,transparent_0%,transparent_49.8%,rgba(255,255,255,0.9)_50%,transparent_50.2%,transparent_100%)]
            [background-size:100%_170px]
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[38%]
            bg-gradient-to-t
            from-black/45
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          CONTENT WRAPPER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* ===================================================
            CTA
        ==================================================== */}

        <section
          aria-labelledby="footer-cta-title"
          className="
            relative
            border-b
            border-white/[0.10]
            py-20
            sm:py-28
            lg:py-32
          "
        >
          {/* Small editorial index */}
          <div
            className="
              footer-cta-reveal
              mb-8
              flex
              items-center
              gap-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-white/45
              sm:text-[10px]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#854fee]
                shadow-[0_0_20px_rgba(133,79,238,0.7)]
              "
            />

            READY TO BUILD SOMETHING GREAT?
          </div>

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
              lg:gap-16
            "
          >
            {/* Heading */}
            <div className="min-w-0">
              <h2
                id="footer-cta-title"
                className="
                  footer-cta-reveal
                  max-w-[1000px]
                  text-[clamp(3.2rem,9vw,8.5rem)]
                  font-bold
                  leading-[0.88]
                  tracking-[-0.075em]
                  text-white
                "
              >
                Let&apos;s Make Your
                <br />
                <span className="text-[#854fee]">
                  Next Big Idea
                </span>{" "}
                Happen.
              </h2>
            </div>

            {/* CTA information */}
            <div
              className="
                flex
                max-w-[480px]
                flex-col
                items-start
                lg:ml-auto
              "
            >
              <p
                className="
                  footer-cta-reveal
                  max-w-[430px]
                  text-[13px]
                  font-medium
                  leading-6
                  text-white/55
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                From creative design to powerful digital
                experiences, let&apos;s turn your vision into
                something meaningful.
              </p>

              <div
                className="
                  footer-cta-reveal
                  mt-8
                  flex
                  w-full
                  flex-col
                  items-start
                  gap-5
                  sm:flex-row
                  sm:items-center
                "
              >
                {/* Primary CTA */}
                <Link
                  href="#contact"
                  className="
                    footer-primary-cta
                    group
                    relative
                    inline-flex
                    min-h-12
                    items-center
                    gap-4
                    overflow-hidden
                    rounded-full
                    bg-white
                    px-6
                    py-3.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-black
                    transition-transform
                    duration-300
                    hover:-translate-y-0.5
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#854fee]
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#09090b]
                  "
                >
                  <span
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-[2px]
                      origin-left
                      scale-x-0
                      bg-[#854fee]
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-x-100
                    "
                  />

                  <span className="relative z-10">
                    Start a Project
                  </span>

                  <span
                    className="
                      relative
                      z-10
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-white
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="#projects"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    border-b
                    border-white/20
                    pb-1.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-white/65
                    transition-colors
                    duration-300
                    hover:border-[#854fee]
                    hover:text-white
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#854fee]
                  "
                >
                  <span>Explore Our Work</span>

                  <ArrowRightIcon
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative oversized mark */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-8
              right-0
              hidden
              select-none
              text-[8rem]
              font-black
              leading-none
              tracking-[-0.1em]
              text-white/[0.025]
              lg:block
              xl:text-[11rem]
            "
          >
            N.
          </div>
        </section>

        {/* ===================================================
            FOOTER GRID
        ==================================================== */}

        <section
          aria-label="Footer navigation"
          className="
            footer-grid
            grid
            gap-12
            py-16
            sm:gap-14
            sm:py-20
            lg:grid-cols-[1.35fr_0.75fr_1fr_0.9fr]
            lg:gap-12
            xl:gap-20
            xl:py-24
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div className="footer-column min-w-0">
            <Link
              href="#home"
              className="
                footer-column-title
                group
                inline-flex
                items-baseline
                gap-1
                text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#854fee]
              "
              aria-label="Nexora Digital home"
            >
              <span
                className="
                  text-[1.65rem]
                  font-bold
                  tracking-[-0.065em]
                  sm:text-[1.8rem]
                "
              >
                nexora
              </span>

              <span
                className="
                  text-[1.65rem]
                  font-bold
                  tracking-[-0.065em]
                  text-[#854fee]
                  sm:text-[1.8rem]
                "
              >
                .digital
              </span>
            </Link>

            <p
              className="
                mt-6
                max-w-[350px]
                text-[12px]
                font-medium
                leading-6
                text-white/42
                sm:text-[13px]
                sm:leading-6
              "
            >
              We help businesses turn ideas into memorable
              digital experiences through thoughtful design,
              creative content, and modern web development.
            </p>

            {/* Decorative brand signature */}
            <div
              className="
                mt-8
                flex
                items-center
                gap-3
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-[#854fee]/70
                "
              />

              DIGITAL / CREATIVE / PERFORMANCE
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <nav
            className="footer-column"
            aria-label="Quick links"
          >
            <p
              className="
                footer-column-title
                mb-6
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/35
              "
            >
              Explore
            </p>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[13px]
                      font-medium
                      text-white/60
                      transition-colors
                      duration-300
                      hover:text-white
                      focus:outline-none
                      focus-visible:text-white
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-[#854fee]
                        transition-all
                        duration-300
                        group-hover:w-3
                      "
                    />

                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================================
              SERVICES
          ================================================== */}

          <nav
            className="footer-column"
            aria-label="Our services"
          >
            <p
              className="
                footer-column-title
                mb-6
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/35
              "
            >
              Our Services
            </p>

            <ul className="space-y-3.5">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="
                      group
                      flex
                      max-w-[250px]
                      items-start
                      gap-2
                      text-[12px]
                      font-medium
                      leading-5
                      text-white/55
                      transition-colors
                      duration-300
                      hover:text-white
                      focus:outline-none
                      focus-visible:text-white
                      sm:text-[13px]
                    "
                  >
                    <span
                      className="
                        mt-[8px]
                        h-1
                        w-1
                        shrink-0
                        rounded-full
                        bg-white/20
                        transition-all
                        duration-300
                        group-hover:bg-[#854fee]
                        group-hover:shadow-[0_0_12px_rgba(133,79,238,0.8)]
                      "
                    />

                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================================
              LET'S CONNECT
          ================================================== */}

          <div className="footer-column min-w-0">
            <p
              className="
                footer-column-title
                mb-6
                text-[9px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/35
              "
            >
              Let&apos;s Connect
            </p>

            <h3
              className="
                max-w-[260px]
                text-[1.7rem]
                font-bold
                leading-[0.95]
                tracking-[-0.055em]
                text-white
                sm:text-[2rem]
              "
            >
              Have a project
              <br />
              in mind?
            </h3>

            <p
              className="
                mt-5
                max-w-[260px]
                text-[12px]
                font-medium
                leading-5
                text-white/40
              "
            >
              Tell us what you&apos;re planning. We&apos;d love
              to hear about it.
            </p>

            <Link
              href="#contact"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-3
                text-[11px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-white
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#854fee]
              "
            >
              <span
                className="
                  relative
                  border-b
                  border-white/25
                  pb-1.5
                  transition-colors
                  duration-300
                  group-hover:border-[#854fee]
                "
              >
                Let&apos;s Talk
              </span>

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#854fee]
                  text-white
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </section>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div
          className="
            relative
            h-px
            w-full
            overflow-hidden
            bg-white/[0.10]
          "
        >
          <div
            aria-hidden="true"
            className="
              footer-animated-line
              absolute
              inset-y-0
              left-0
              w-full
              bg-gradient-to-r
              from-[#854fee]
              via-white/20
              to-transparent
            "
          />
        </div>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <div
          className="
            footer-bottom
            flex
            flex-col
            gap-6
            py-7
            text-[10px]
            font-medium
            text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-8
          "
        >
          <p>
            © {currentYear} Nexora Digital. All rights
            reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
            "
          >
            {/*
             * Privacy Policy / Terms intentionally omitted:
             * no verified routes/pages were found in the project.
             */}

            <span className="inline-flex items-center gap-2">
              <SparkIcon className="h-3 w-3 text-[#854fee]" />
              Designed with intention
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          BACK TO TOP
      ====================================================== */}

      <Link
        href="#home"
        aria-label="Back to top"
        className="
          absolute
          bottom-6
          right-5
          hidden
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/[0.025]
          text-white/45
          transition-all
          duration-300
          hover:border-[#854fee]/50
          hover:bg-[#854fee]/10
          hover:text-white
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#854fee]
          sm:flex
          lg:bottom-8
          lg:right-8
        "
      >
        <ArrowDownIcon className="h-4 w-4 rotate-180 transition-transform duration-300 hover:-translate-y-0.5" />
      </Link>
    </footer>
  );
}