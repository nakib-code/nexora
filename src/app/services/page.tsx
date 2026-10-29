"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  MousePointerClick,
  Play,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const services = [
  {
    number: "01",
    title: "Meta Ads",
    eyebrow: "PAID SOCIAL",
    description:
      "Reach the right audience on Facebook and Instagram with strategic campaigns designed to turn attention into meaningful business growth.",
    features: [
      "Campaign strategy and setup",
      "Audience research",
      "Creative testing",
      "Performance optimization",
    ],
    icon: MousePointerClick,
    metric: "Better targeting",
    featured: true,
  },
  {
    number: "02",
    title: "Google Ads",
    eyebrow: "SEARCH MARKETING",
    description:
      "Get in front of people who are already searching for what you offer with carefully structured, conversion-focused campaigns.",
    features: [
      "Search campaign setup",
      "Keyword research",
      "Ad copy optimization",
      "Conversion-focused campaigns",
    ],
    icon: Search,
    metric: "High-intent traffic",
    featured: false,
  },
  {
    number: "03",
    title: "Conversion Tracking",
    eyebrow: "DATA & ANALYTICS",
    description:
      "Make smarter marketing decisions with reliable tracking that shows what happens after someone interacts with your campaigns.",
    features: [
      "Google Analytics 4 setup",
      "Google Tag Manager",
      "Meta Pixel integration",
      "Conversion event tracking",
    ],
    icon: BarChart3,
    metric: "Clearer insights",
    featured: false,
  },
  {
    number: "04",
    title: "Video Editing",
    eyebrow: "CREATIVE PRODUCTION",
    description:
      "Turn raw footage and ideas into engaging video content that captures attention and communicates your brand with clarity.",
    features: [
      "Reels and short-form videos",
      "Social media ad creatives",
      "Captions and motion graphics",
      "Brand-focused editing",
    ],
    icon: Play,
    metric: "Made to engage",
    featured: false,
  },
  {
    number: "05",
    title: "Website Design & Development",
    eyebrow: "WEB EXPERIENCE",
    description:
      "Build a fast, responsive website that communicates your value, creates a strong first impression, and guides visitors toward action.",
    features: [
      "Responsive website design",
      "Landing pages",
      "Business websites",
      "Performance optimization",
    ],
    icon: Code2,
    metric: "Built for growth",
    featured: true,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  const reveal: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease,
      },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* HERO */}
      <section
        id="services"
        data-sidebar-theme="dark"
        className="section-with-left-nav relative isolate overflow-hidden bg-[#0B0D0A] text-white"
      >
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -right-40 -top-40 size-[420px] rounded-full bg-[#D7FF19]/[0.07] blur-[110px] sm:size-[600px]" />

          <div className="absolute -bottom-64 left-[15%] size-[400px] rounded-full bg-[#B3D31E]/[0.05] blur-[110px]" />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
        </div>

        <motion.div
          className="container section-padding relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-32"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Hero copy */}
          <div className="max-w-3xl">
            <motion.div
              variants={reveal}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#D7FF19] opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-[#D7FF19]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
                Digital services / 2026
              </span>
            </motion.div>

            <motion.p
              variants={reveal}
              className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#D7FF19]"
            >
              WHAT WE DO
            </motion.p>

            <motion.h1
              variants={reveal}
              className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[82px]"
            >
              Good ideas.
              <br />
              <span className="text-white/40">Better execution.</span>
              <br />
              <span className="text-[#D7FF19]">
                Real growth.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
            >
              From performance marketing to high-quality web experiences,
              we bring strategy, creativity, and technology together to
              help your business move forward.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#D7FF19] px-6 py-3 text-sm font-bold text-[#0B0D0A] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Discuss Your Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href="#services-list"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-white/75 transition duration-300 hover:border-white/30 hover:text-white"
              >
                Explore services
                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6"
            >
              <div className="flex items-center gap-2 text-xs text-white/55">
                <Check size={15} className="text-[#D7FF19]" />
                Strategy-led solutions
              </div>

              <div className="flex items-center gap-2 text-xs text-white/55">
                <Check size={15} className="text-[#D7FF19]" />
                Data-informed decisions
              </div>
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            variants={reveal}
            className="relative mx-auto w-full max-w-[500px] lg:ml-auto"
          >
            <div className="absolute -inset-5 rounded-[32px] bg-[#D7FF19]/[0.05] blur-2xl" />

            <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#11140F] p-5 shadow-2xl shadow-black/30 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    The bigger picture
                  </p>
                  <p className="mt-1.5 text-lg font-semibold tracking-tight text-white">
                    Growth ecosystem
                  </p>
                </div>

                <div className="flex size-11 items-center justify-center rounded-xl border border-[#D7FF19]/20 bg-[#D7FF19]/10 text-[#D7FF19]">
                  <Sparkles size={21} />
                </div>
              </div>

              {/* Connected services */}
              <div className="relative mt-6 space-y-3">
                <div
                  aria-hidden="true"
                  className="absolute bottom-10 left-[22px] top-10 w-px bg-gradient-to-b from-[#D7FF19]/50 via-white/10 to-transparent"
                />

                {[
                  {
                    icon: MousePointerClick,
                    title: "Paid advertising",
                    detail: "Reach the right audience",
                    number: "01",
                  },
                  {
                    icon: BarChart3,
                    title: "Performance analytics",
                    detail: "Measure what matters",
                    number: "02",
                  },
                  {
                    icon: Code2,
                    title: "Digital experiences",
                    detail: "Turn visits into action",
                    number: "03",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, x: 16 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.55,
                        delay: reduceMotion ? 0 : 0.35 + index * 0.12,
                        ease,
                      }}
                      className="group relative flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition-colors duration-300 hover:border-[#D7FF19]/30 hover:bg-[#D7FF19]/[0.04] sm:p-5"
                    >
                      <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#181C15] text-[#D7FF19] transition-colors duration-300 group-hover:border-[#D7FF19]/30">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/40">
                          {item.detail}
                        </p>
                      </div>

                      <span className="text-xs font-medium tabular-nums text-white/25">
                        {item.number}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-[#D7FF19] p-4 sm:p-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/55">
                    One connected approach
                  </p>
                  <p className="mt-1 text-sm font-bold tracking-tight text-[#0B0D0A] sm:text-base">
                    Built around your goals.
                  </p>
                </div>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-black/10 text-black">
                  <TrendingUp size={20} />
                </div>
              </div>
            </div>

            <div className="absolute -right-2 -top-4 hidden items-center gap-2 rounded-full border border-white/10 bg-[#171A14] px-4 py-2.5 shadow-xl sm:flex lg:-right-5">
              <span className="size-2 rounded-full bg-[#D7FF19]" />
              <span className="text-xs font-medium text-white/75">
                Strategy meets creativity
              </span>
            </div>
          </motion.div>
        </motion.div>

        <div className="container relative pb-6">
          <div className="flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
              Strategy / Creative / Technology
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
              Scroll to explore ↓
            </span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services-list"
        data-sidebar-theme="light"
        className="section-with-left-nav container section-padding"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-12 flex flex-col justify-between gap-7 md:mb-14 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <motion.p
              variants={reveal}
              className="section-label"
            >
              OUR EXPERTISE
            </motion.p>

            <motion.h2
              variants={reveal}
              className="section-title mt-4 max-w-2xl"
            >
              The right tools for your next chapter.
            </motion.h2>

            <motion.p
              variants={reveal}
              className="section-description mt-4 max-w-xl"
            >
              Focused digital services that work independently or
              together to support your business goals.
            </motion.p>
          </div>

          <motion.div variants={reveal} className="shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted">
              <span className="size-2 rounded-full bg-primary" />
              05 services · One clear direction
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.06 }}
          className="grid gap-4 sm:gap-5 lg:grid-cols-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={reveal}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.25, ease },
                      }
                }
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-border bg-background p-6 transition-[background-color,border-color,box-shadow,color] duration-300 hover:border-[#D7FF19] hover:bg-[#D7FF19] hover:text-[#0B0D0A] hover:shadow-xl hover:shadow-black/[0.04] sm:p-7 ${
                  service.featured
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
                }`}
              >
                {/* Subtle decorative corner */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full border border-primary/10 transition-all duration-500 group-hover:scale-125 group-hover:border-black/10"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-surface text-primary transition-all duration-300 group-hover:border-black/10 group-hover:bg-black/10 group-hover:text-[#0B0D0A]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-semibold tabular-nums text-muted transition-colors duration-300 group-hover:text-black/50">
                    / {service.number}
                  </span>
                </div>

                <div className="relative mt-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary transition-colors duration-300 group-hover:text-black/55">
                    {service.eyebrow}
                  </p>

                  <h3 className="mt-3 max-w-md text-xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-[#0B0D0A] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-muted transition-colors duration-300 group-hover:text-black/70">
                    {service.description}
                  </p>
                </div>

                <div className="relative mt-6 border-t border-border/80 pt-5 transition-colors duration-300 group-hover:border-black/15">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.17em] text-muted transition-colors duration-300 group-hover:text-black/50">
                    What&apos;s included
                  </p>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex min-w-0 items-start gap-2.5 text-sm text-foreground transition-colors duration-300 group-hover:text-black/80"
                      >
                        <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-black/10 group-hover:text-black">
                          <Check size={10} strokeWidth={2.5} />
                        </span>

                        <span className="leading-5">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-auto flex items-center justify-between gap-3 pt-7">
                  <span className="text-xs font-medium text-muted transition-colors duration-300 group-hover:text-black/55">
                    {service.metric}
                  </span>

                  <Link
                    href="/contact"
                    aria-label={`Discuss ${service.title}`}
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-black/15 group-hover:bg-[#0B0D0A] group-hover:text-[#D7FF19]"
                  >
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </Link>
                </div>

                {/* Card index detail */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-5 right-16 text-5xl font-bold tracking-tighter text-primary/[0.035] transition-colors duration-300 group-hover:text-black/[0.06]"
                >
                  {service.number}
                </span>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Small note under the grid */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-muted">
            Not every business needs everything. Start with the service
            that solves your biggest challenge.
          </p>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors hover:text-primary"
          >
            Find your starting point
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </section>

      {/* CTA */}
      <section
        id="services-cta"
        data-sidebar-theme="dark"
        className="section-with-left-nav container pb-20 sm:pb-28"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 24,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="group relative isolate overflow-hidden rounded-[28px] bg-[#0B0D0A] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          {/* CTA background details */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -right-20 -top-32 size-80 rounded-full bg-[#D7FF19]/10 blur-[90px] transition-transform duration-700 group-hover:scale-125 sm:size-[450px]" />

            <div className="absolute -bottom-32 left-1/3 size-64 rounded-full bg-[#D7FF19]/[0.04] blur-[80px]" />

            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.8) 0.7px, transparent 0.7px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>

          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
                <Sparkles size={14} className="text-[#D7FF19]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                  Let&apos;s build something meaningful
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Your next big move
                <br />
                starts with a{" "}
                <span className="text-[#D7FF19]">conversation.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                Tell us where you want your business to go. We&apos;ll
                help you explore the right services and a practical way
                to get started.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <Link
                href="/contact"
                className="group/button inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#D7FF19] px-6 py-4 text-sm font-bold text-[#0B0D0A] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Let&apos;s Talk
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Link>

              <span className="text-xs text-white/35">
                Have a project in mind?
              </span>
            </div>
          </div>

          <div className="relative mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Strategy first. Results always.
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Let&apos;s make it happen ↗
            </span>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
