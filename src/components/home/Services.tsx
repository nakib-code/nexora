"use client";

import { useRef, type ElementType } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Film,
  Gauge,
  Globe2,
  Megaphone,
  Search,
} from "lucide-react";
import Link from "next/link";

/* ================================================================
   TYPES
================================================================ */

type Service = {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  benefits: string[];
  accent: string;
  accentSoft: string;
  icon: ElementType;
};

/* ================================================================
   SERVICES DATA
================================================================ */

const services: Service[] = [
  {
    id: "01",
    title: "Facebook Advertising",
    shortTitle: "FB Ads",
    subtitle: "Facebook Advertising",
    description:
      "Turn attention into predictable growth with strategic Facebook advertising built around your audience, creative, and conversion goals.",
    benefits: [
      "Audience targeting & research",
      "Creative & ad strategy",
      "Campaign setup & optimization",
      "Retargeting & LAL setup",
    ],
    accent: "#8B5CF6",
    accentSoft: "#6D28D9",
    icon: Megaphone,
  },
  {
    id: "02",
    title: "Google Advertising",
    shortTitle: "Google Ads",
    subtitle: "Google Advertising",
    description:
      "Capture high-intent demand with Google campaigns designed to put your business in front of people actively searching for what you offer.",
    benefits: [
      "Search & display campaigns",
      "High-intent keyword research",
      "Conversion-focused copy",
      "Continuous bid optimization",
    ],
    accent: "#0891B2",
    accentSoft: "#0E7490",
    icon: Search,
  },
  {
    id: "03",
    title: "Conversion Tracking",
    shortTitle: "Tracking",
    subtitle: "Track What Matters",
    description:
      "Build a reliable measurement system so every important click, lead, purchase, and customer journey can be understood and optimized.",
    benefits: [
      "Server-side GA4 setup",
      "Google Tag Manager",
      "CAPI & Meta Pixel",
      "Custom event funnels",
    ],
    accent: "#EA580C",
    accentSoft: "#C2410C",
    icon: Gauge,
  },
  {
    id: "04",
    title: "Video Editing",
    shortTitle: "Video",
    subtitle: "Content That Converts",
    description:
      "Create scroll-stopping video content with strong hooks, intentional pacing, polished motion, and sound designed to hold attention.",
    benefits: [
      "Short-form social hooks",
      "High-ROI ad creatives",
      "Sleek motion graphics",
      "Pacing & sound design",
    ],
    accent: "#DB2777",
    accentSoft: "#BE185D",
    icon: Film,
  },
  {
    id: "05",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    subtitle: "Web Experiences",
    description:
      "Design and develop fast, modern websites that combine premium visual systems with technical performance and conversion-focused experiences.",
    benefits: [
      "Modern UI/UX architecture",
      "Ultra-responsive Next.js code",
      "Core Web Vitals optimization",
      "Conversion-optimized CTA design",
    ],
    accent: "#2563EB",
    accentSoft: "#1D4ED8",
    icon: Globe2,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* ================================================================
   SECTION REVEAL
================================================================ */

function SectionReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.12,
  });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 28,
        filter: reduceMotion ? "blur(0px)" : "blur(6px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
          : undefined
      }
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================
   SERVICE CARD
================================================================ */

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = service.icon;
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : (index % 3) * 0.09,
        ease,
      }}
      className="
        group/card relative isolate flex h-full min-w-0
        flex-col overflow-hidden rounded-[26px]
        border border-black/[0.07]
        bg-white p-5
        shadow-[0_4px_24px_rgba(0,0,0,0.025)]
        transition-[border-color,box-shadow,background-color]
        duration-500
        hover:border-black/[0.12]
        hover:bg-white
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)]
        sm:rounded-[30px] sm:p-7
        lg:p-7 xl:p-8
      "
      style={
        {
          "--service-accent": service.accent,
          "--service-accent-soft": service.accentSoft,
        } as React.CSSProperties
      }
    >
      {/* TOP ACCENT LINE */}
      <div
        aria-hidden="true"
        className="
          absolute left-0 top-0 h-[3px] w-full
          origin-left scale-x-50 opacity-60
          transition-all duration-500
          group-hover/card:scale-x-100
          group-hover/card:opacity-100
        "
        style={{
          background: `linear-gradient(90deg, ${service.accentSoft}, ${service.accent}, transparent)`,
        }}
      />

      {/* COLORED GLOW */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-20 -top-24 h-56 w-56
          rounded-full opacity-[0.045]
          blur-[75px]
          transition-all duration-700
          group-hover/card:scale-125
          group-hover/card:opacity-[0.12]
        "
        style={{ backgroundColor: service.accent }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -bottom-24 -left-20 h-48 w-48
          rounded-full opacity-0 blur-[75px]
          transition-opacity duration-700
          group-hover/card:opacity-[0.07]
        "
        style={{ backgroundColor: service.accent }}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* CARD TOP */}
        <div className="flex items-start justify-between gap-4">
          <div
            className="
              flex h-[54px] w-[54px] shrink-0
              items-center justify-center rounded-[18px]
              border transition-all duration-500
              group-hover/card:rotate-[-6deg]
              group-hover/card:scale-105
            "
            style={{
              color: service.accent,
              backgroundColor: `${service.accent}0D`,
              borderColor: `${service.accent}24`,
            }}
          >
            <Icon size={23} strokeWidth={1.7} />
          </div>

          <span
            className="
              select-none text-[50px] font-bold
              leading-[0.8] tracking-[-0.09em]
              transition-colors duration-500
              sm:text-[58px]
            "
            style={{ color: `${service.accent}20` }}
          >
            {service.id}
          </span>
        </div>

        {/* CATEGORY */}
        <div className="mt-8">
          <div
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] sm:text-[10px]"
            style={{ color: service.accent }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: service.accent }}
            />
            {service.shortTitle}
          </div>

          <h3 className="mt-3 max-w-[420px] text-[25px] font-bold leading-[1.02] tracking-[-0.055em] text-[#171717] sm:text-[30px] lg:text-[28px] xl:text-[32px]">
            {service.title}
          </h3>

          <p className="mt-3 text-[11px] font-medium tracking-wide text-black/40">
            {service.subtitle}
          </p>

          <p className="mt-4 text-[13px] leading-6 text-[#737373] sm:text-sm sm:leading-7">
            {service.description}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-6 h-px w-full bg-black/[0.07]" />

        {/* BENEFITS */}
        <div className="flex-1">
          <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#404040]">
            What&apos;s included
          </h4>

          <div className="mt-4 space-y-3">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="
                  flex items-start gap-3
                  text-[12px] leading-5 text-[#737373]
                  transition-colors duration-300
                  group-hover/card:text-[#525252]
                  sm:text-[13px]
                "
              >
                <span
                  className="
                    mt-0.5 flex h-[17px] w-[17px]
                    shrink-0 items-center justify-center
                    rounded-full transition-transform duration-300
                    group-hover/card:scale-110
                  "
                  style={{
                    color: service.accent,
                    backgroundColor: `${service.accent}12`,
                  }}
                >
                  <Check size={10} strokeWidth={2.5} />
                </span>

                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-8 flex items-center justify-between border-t border-black/[0.07] pt-5">
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
            Nexora Digital
          </span>

          <span
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border
              transition-all duration-300
              group-hover/card:translate-x-0.5
              group-hover/card:-translate-y-0.5
            "
            style={{
              color: service.accent,
              borderColor: `${service.accent}30`,
              backgroundColor: `${service.accent}08`,
            }}
          >
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* ================================================================
   SERVICES SECTION
================================================================ */

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      data-sidebar-theme="light"
      className="
        section-with-left-nav relative isolate
        scroll-mt-24 overflow-hidden
        bg-[#FAFAF8] text-[#171717]
      "
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-[8%] h-[320px] w-[320px] rounded-full bg-violet-400/[0.09] blur-[120px] sm:h-[500px] sm:w-[500px]" />

        <div className="absolute -right-40 top-[35%] h-[300px] w-[300px] rounded-full bg-cyan-300/[0.10] blur-[120px] sm:h-[450px] sm:w-[450px]" />

        <div className="absolute bottom-0 left-[25%] h-[300px] w-[300px] rounded-full bg-pink-300/[0.07] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.22)_0.65px,transparent_0.65px)] opacity-[0.08] [background-size:26px_26px]" />

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36 xl:px-20">
        {/* HEADER */}
        <SectionReveal>
          <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#657D00] sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#A5C900]" />
            What We Do
          </div>
        </SectionReveal>

        <div className="mt-6 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
          <SectionReveal delay={0.08}>
            <h2 className="max-w-[900px] text-[clamp(3rem,8.2vw,7.2rem)] font-bold leading-[0.88] tracking-[-0.075em] text-[#171717]">
              Built for attention.
              <br />
              <span className="bg-gradient-to-r from-[#789600] via-[#8EAD12] to-[#4D7C0F] bg-clip-text text-transparent">
                Designed for growth.
              </span>
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.18}>
            <div className="max-w-xl lg:justify-self-end lg:pb-2">
              <p className="text-sm leading-7 text-[#737373] sm:text-base sm:leading-8">
                From paid advertising to high-converting websites, we build
                the systems that turn attention into measurable growth.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-[9px] font-bold uppercase tracking-[0.16em] text-black/45 sm:text-[10px]">
                <span>Strategy</span>
                <span className="h-1 w-1 rounded-full bg-[#8EAD12]" />
                <span>Creative</span>
                <span className="h-1 w-1 rounded-full bg-[#8EAD12]" />
                <span>Performance</span>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* SMALL INTRO STRIP */}
        <SectionReveal delay={0.12} className="mt-12 sm:mt-16">
          <div className="flex flex-col gap-4 rounded-2xl border border-black/[0.07] bg-white/75 p-5 shadow-[0_4px_24px_rgba(0,0,0,0.025)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:rounded-[22px] sm:px-7 sm:py-6">
            <div>
              <p className="text-sm font-semibold text-[#262626] sm:text-base">
                Five capabilities. One growth-focused team.
              </p>

              <p className="mt-1 text-xs leading-6 text-[#737373] sm:text-sm">
                Every service is designed to work independently or as part
                of a connected system.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-black/45">
              <span className="h-2 w-2 rounded-full bg-[#A5C900]" />
              Built around your goals
            </div>
          </div>
        </SectionReveal>

        {/* SERVICE CARDS */}
        <div className="mt-7 grid grid-cols-1 items-stretch gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3 xl:gap-6">
          {services.map((service, index) => (
            <SectionReveal
              key={service.id}
              delay={reduceMotion ? 0 : (index % 3) * 0.07}
              className="h-full min-w-0"
            >
              <ServiceCard service={service} index={index} />
            </SectionReveal>
          ))}

          {/* CLOSING CARD */}
          <SectionReveal
            delay={reduceMotion ? 0 : 0.12}
            className="h-full min-w-0"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.35, ease }}
              className="
                group/closing relative isolate
                flex h-full min-h-[300px]
                flex-col justify-between overflow-hidden
                rounded-[26px] border border-[#D6FF09]/70
                bg-[#D6FF09] p-6 text-[#080808]
                shadow-[0_12px_40px_rgba(120,150,0,0.08)]
                sm:rounded-[30px] sm:p-7
                xl:min-h-[360px] xl:p-8
              "
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/60 blur-[75px] transition-transform duration-700 group-hover/closing:scale-125"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-black/[0.07] blur-[70px]"
              />

              <div className="relative z-10">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/55">
                  One connected system
                </span>

                <h3 className="mt-5 max-w-[300px] text-[clamp(2rem,4vw,3.1rem)] font-bold leading-[0.92] tracking-[-0.065em]">
                  Good work.
                  <br />
                  Real impact.
                </h3>

                <p className="mt-5 max-w-[300px] text-sm leading-7 text-black/70">
                  Strategy, creative, tracking, and technology working
                  together to help your business move forward.
                </p>
              </div>

              <div className="relative z-10 mt-8 flex items-center justify-between border-t border-black/15 pt-5">
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/60">
                  Let&apos;s build something
                </span>

                <Link
                  href="/contact"
                  aria-label="Contact Nexora Digital"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#080808] text-[#D6FF09] transition-transform duration-300 hover:rotate-45"
                >
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </motion.div>
          </SectionReveal>
        </div>

        {/* BOTTOM CTA */}
        <SectionReveal delay={0.1} className="mt-16 sm:mt-20 lg:mt-24">
          <div className="flex flex-col gap-6 border-t border-black/10 pt-7 sm:flex-row sm:items-end sm:justify-between sm:pt-9">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">
                Have a project in mind?
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-bold tracking-[-0.045em] text-[#171717] sm:text-3xl lg:text-4xl">
                Let&apos;s turn your next idea into progress.
              </h3>
            </div>

            <motion.a
              href="/contact"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="
                group inline-flex shrink-0 items-center
                justify-between gap-5 rounded-full
                bg-[#D6FF09] px-5 py-3.5
                text-xs font-bold uppercase tracking-[0.08em]
                text-[#050505]
                transition-shadow duration-300
                hover:shadow-[0_10px_35px_rgba(120,150,0,0.18)]
                sm:px-6 sm:py-4
              "
            >
              Start a project

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#050505] text-[#D6FF09] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
