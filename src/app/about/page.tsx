"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  Eye,
  HeartHandshake,
  Target,
  TrendingUp,
  Sparkles,
  MousePointer2,
  BarChart3,
  Video,
  Code2,
  MoveUpRight,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    number: "01",
    icon: Target,
    title: "Purpose before tactics",
    description:
      "Every decision starts with a clear objective. We focus on what moves your business forward, not what simply looks impressive.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Clarity over complexity",
    description:
      "Good strategy makes things simpler. We turn complex digital challenges into practical, measurable steps.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Partnership over promises",
    description:
      "We believe the best work comes from honest communication, shared goals, and a genuine commitment to your success.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Progress through learning",
    description:
      "Digital growth is never static. We test, learn, refine, and keep improving as your business evolves.",
  },
];

const capabilities = [
  {
    number: "01",
    icon: MousePointer2,
    title: "Performance Marketing",
    description:
      "Reach the right people with focused campaigns designed to generate meaningful business results.",
    tags: ["Paid Ads", "Campaign Strategy"],
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Analytics & Tracking",
    description:
      "Understand what works through reliable tracking, actionable insights, and clear performance reporting.",
    tags: ["Conversion Tracking", "Analytics"],
  },
  {
    number: "03",
    icon: Video,
    title: "Creative & Content",
    description:
      "Bring your brand to life with purposeful creative assets that capture attention and communicate value.",
    tags: ["Ad Creatives", "Video Content"],
  },
  {
    number: "04",
    icon: Code2,
    title: "Web Design & Development",
    description:
      "Build thoughtful digital experiences that make your brand easier to discover, understand, and trust.",
    tags: ["UI/UX Design", "Development"],
  },
];

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { delay }
      }
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-background text-foreground">
      {/* ===================== HERO ===================== */}
      <section className="relative isolate overflow-hidden bg-[#0B0D0A] text-white">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full bg-[#D7FF19]/[0.07] blur-[120px]" />

          <div className="absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-[#D7FF19]/[0.05] blur-[110px]" />

          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
        </div>

        <div className="container relative mx-auto px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12 lg:pb-32 lg:pt-36">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
          >
            {/* Hero content */}
            <div>
              <motion.div
                variants={reveal}
                className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-[#D7FF19] shadow-[0_0_12px_#D7FF19]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                  About Nexora Digital
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl xl:text-[88px]"
              >
                Digital growth
                <br />
                starts with the
                <br />
                <span className="text-[#D7FF19]">
                  right direction.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg sm:leading-9"
              >
                We combine strategy, creativity, and technology
                to help businesses build a stronger digital
                presence and move forward with confidence.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="#who-we-are"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#D7FF19] px-6 py-3.5 text-sm font-semibold text-[#0B0D0A] transition-all duration-300 hover:bg-[#BDEB00] hover:shadow-[0_0_35px_rgba(215,255,25,0.18)]"
                >
                  Get to Know Us
                  <ArrowDownRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-[#D7FF19]/50 hover:text-[#D7FF19]"
                >
                  Let&apos;s Talk
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            </div>

            {/* Hero visual */}
            <motion.div
              variants={reveal}
              className="relative mx-auto w-full max-w-[500px]"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#141711] p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-medium text-white/40">
                      THE NEXORA APPROACH
                    </p>
                    <p className="mt-1 text-lg font-semibold tracking-tight">
                      Growth, with direction.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D7FF19] text-[#0B0D0A]">
                    <Sparkles size={19} />
                  </div>
                </div>

                <div className="relative mt-6 flex h-[230px] items-center justify-center overflow-hidden rounded-2xl bg-[#0B0D0A] sm:h-[270px]">
                  <div className="absolute h-56 w-56 rounded-full border border-[#D7FF19]/10 sm:h-64 sm:w-64" />
                  <div className="absolute h-40 w-40 rounded-full border border-[#D7FF19]/15 sm:h-48 sm:w-48" />
                  <div className="absolute h-24 w-24 rounded-full border border-[#D7FF19]/20" />

                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { rotate: 360 }
                    }
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-56 w-56 sm:h-64 sm:w-64"
                  >
                    <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#D7FF19] shadow-[0_0_18px_#D7FF19]" />
                    <span className="absolute bottom-7 right-5 h-2 w-2 rounded-full bg-white/60" />
                  </motion.div>

                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { y: [0, -7, 0] }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-[26px] border border-[#D7FF19]/30 bg-[#D7FF19] text-[#0B0D0A] shadow-[0_0_65px_rgba(215,255,25,0.12)] sm:h-32 sm:w-32"
                  >
                    <Compass size={31} strokeWidth={1.5} />

                    <span className="mt-2 text-xs font-bold uppercase tracking-[0.16em]">
                      Nexora
                    </span>
                  </motion.div>

                  <div className="absolute left-4 top-5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-sm sm:left-6">
                    <div className="flex items-center gap-2">
                      <Target
                        size={14}
                        className="text-[#D7FF19]"
                      />
                      <span className="text-[10px] font-medium text-white/70 sm:text-xs">
                        Strategy
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-5 right-4 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 backdrop-blur-sm sm:bottom-6 sm:right-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp
                        size={14}
                        className="text-[#D7FF19]"
                      />
                      <span className="text-[10px] font-medium text-white/70 sm:text-xs">
                        Growth
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { title: "Think", subtitle: "Strategically" },
                    { title: "Create", subtitle: "Purposefully" },
                    { title: "Grow", subtitle: "Continuously" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-4"
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-white/40 sm:text-xs">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 -left-3 -z-10 h-28 w-28 rounded-full bg-[#D7FF19]/10 blur-3xl" />
            </motion.div>
          </motion.div>

          <Reveal className="mt-20 border-t border-white/10 pt-6 sm:mt-24">
            <div className="flex flex-col justify-between gap-3 text-xs text-white/35 sm:flex-row sm:items-center">
              <span>STRATEGY. CREATIVITY. TECHNOLOGY.</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D7FF19]" />
                Built around your business goals
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== WHO WE ARE ===================== */}
      <section
        id="who-we-are"
        className="section-padding scroll-mt-24"
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="section-label">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#D7FF19]" />
                WHO WE ARE
              </div>

              <h2 className="section-title mt-5 max-w-lg">
                More than digital services.
                <span className="block text-[#8B9A69]">
                  A clearer way forward.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="max-w-2xl">
                <p className="text-lg leading-8 text-foreground/80 sm:text-xl sm:leading-9">
                  Nexora Digital is built around a simple idea:
                  digital growth works best when every part of
                  your strategy moves in the same direction.
                </p>

                <p className="section-description mt-6">
                  From marketing and analytics to creative
                  production and web development, we bring
                  different digital capabilities together to
                  solve real business challenges. We focus on
                  understanding your goals first, then finding
                  the right approach to help you reach them.
                </p>

                <div className="mt-9 flex items-center gap-4 border-t border-border pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D7FF19]/15 text-[#778C19]">
                    <Compass size={23} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Direction before execution
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Clear thinking. Purposeful work. Better decisions.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== MISSION & VISION ===================== */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <div className="section-label justify-center">
              OUR PURPOSE
            </div>

            <h2 className="section-title mt-5">
              What guides everything we do.
            </h2>

            <p className="section-description mx-auto mt-5 max-w-xl">
              Our mission defines the work we do today. Our
              vision shapes the impact we want to create tomorrow.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-2"
          >
            <motion.article
              variants={reveal}
              className="group relative overflow-hidden rounded-[28px] border border-border bg-background p-7 transition-all duration-500 hover:border-[#D7FF19]/60 hover:bg-[#D7FF19] sm:p-10"
            >
              <div className="mb-12 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D7FF19]/15 text-[#778C19] transition-colors duration-500 group-hover:bg-black/10 group-hover:text-[#0B0D0A]">
                  <Target size={27} strokeWidth={1.6} />
                </div>

                <span className="text-xs font-semibold tracking-[0.18em] text-muted transition-colors group-hover:text-black/50">
                  01 / MISSION
                </span>
              </div>

              <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-[#0B0D0A] sm:text-4xl">
                Our Mission
              </h3>

              <p className="mt-5 max-w-lg leading-8 text-muted transition-colors group-hover:text-[#0B0D0A]/70">
                To help businesses navigate the digital world
                with clarity, thoughtful strategy, and
                purposeful execution that supports sustainable
                growth.
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-[#0B0D0A]">
                Make every move meaningful
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <div className="pointer-events-none absolute -bottom-20 -right-12 h-52 w-52 rounded-full border border-[#D7FF19]/20 transition-colors group-hover:border-black/10" />
            </motion.article>

            <motion.article
              variants={reveal}
              className="group relative overflow-hidden rounded-[28px] border border-border bg-background p-7 transition-all duration-500 hover:border-[#D7FF19]/60 hover:bg-[#D7FF19] sm:p-10"
            >
              <div className="mb-12 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D7FF19]/15 text-[#778C19] transition-colors duration-500 group-hover:bg-black/10 group-hover:text-[#0B0D0A]">
                  <Eye size={27} strokeWidth={1.6} />
                </div>

                <span className="text-xs font-semibold tracking-[0.18em] text-muted transition-colors group-hover:text-black/50">
                  02 / VISION
                </span>
              </div>

              <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-[#0B0D0A] sm:text-4xl">
                Our Vision
              </h3>

              <p className="mt-5 max-w-lg leading-8 text-muted transition-colors group-hover:text-[#0B0D0A]/70">
                To build meaningful digital partnerships where
                businesses can adapt, innovate, and grow with
                confidence in an ever-changing digital landscape.
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-[#0B0D0A]">
                Build for what comes next
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <div className="pointer-events-none absolute -bottom-20 -right-12 h-52 w-52 rounded-full border border-[#D7FF19]/20 transition-colors group-hover:border-black/10" />
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* ===================== OUR VALUES ===================== */}
      <section className="section-padding">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal className="max-w-2xl">
              <div className="section-label">
                WHAT WE BELIEVE
              </div>

              <h2 className="section-title mt-5">
                Principles that shape
                <span className="block text-[#8B9A69]">
                  every partnership.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="max-w-sm">
              <p className="section-description">
                Good work begins with good principles. These
                values influence how we think, collaborate, and
                approach every challenge.
              </p>
            </Reveal>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.number}
                  variants={reveal}
                  className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[24px] border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#D7FF19] hover:bg-[#D7FF19] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.15em] text-muted transition-colors group-hover:text-black/50">
                      {value.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D7FF19]/15 text-[#778C19] transition-all duration-500 group-hover:bg-black/10 group-hover:text-[#0B0D0A]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="mt-auto pt-12">
                    <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-[#0B0D0A]">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted transition-colors group-hover:text-[#0B0D0A]/70">
                      {value.description}
                    </p>
                  </div>

                  <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-[#D7FF19]/0 blur-2xl transition-all duration-500 group-hover:bg-black/[0.07]" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===================== CAPABILITIES ===================== */}
      <section className="section-padding bg-[#0B0D0A] text-white">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="section-label text-[#D7FF19]">
                WHAT WE BRING
              </div>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Different skills.
                <span className="block text-[#D7FF19]">
                  One direction.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-white/50">
                We bring together the capabilities your
                business needs to build a more connected and
                effective digital presence.
              </p>

              <Link
                href="/services"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#D7FF19] px-6 py-3.5 text-sm font-semibold text-[#0B0D0A] transition-all duration-300 hover:bg-[#BDEB00]"
              >
                Explore Our Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="divide-y divide-white/10"
            >
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.number}
                    variants={reveal}
                    className="group py-7 first:pt-0 last:pb-0 sm:py-8"
                  >
                    <div className="flex gap-5 sm:gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#D7FF19] transition-all duration-300 group-hover:border-[#D7FF19]/30 group-hover:bg-[#D7FF19] group-hover:text-[#0B0D0A]">
                        <Icon size={21} strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="mb-2 text-[10px] font-semibold tracking-[0.2em] text-white/30">
                              {capability.number}
                            </p>

                            <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#D7FF19] sm:text-2xl">
                              {capability.title}
                            </h3>
                          </div>

                          <ArrowUpRight
                            size={20}
                            className="mt-1 shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D7FF19]"
                          />
                        </div>

                        <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
                          {capability.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {capability.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-medium text-white/50 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/75"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== HOW WE WORK ===================== */}
      <section className="section-padding">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="section-label justify-center">
              A BETTER WAY TO GROW
            </div>

            <h2 className="section-title mt-5">
              Thoughtful work.
              <span className="block text-[#8B9A69]">
                Meaningful progress.
              </span>
            </h2>

            <p className="section-description mx-auto mt-5 max-w-xl">
              We believe effective digital work starts with
              understanding, develops through collaboration,
              and improves through continuous learning.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-14 grid gap-4 md:grid-cols-3"
          >
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "We learn about your business, audience, challenges, and goals before choosing a direction.",
              },
              {
                number: "02",
                title: "Build",
                description:
                  "We turn insights into a focused plan and create the right digital solutions for your needs.",
              },
              {
                number: "03",
                title: "Improve",
                description:
                  "We evaluate performance, learn from the results, and identify opportunities to do better.",
              },
            ].map((step) => (
              <motion.article
                key={step.number}
                variants={reveal}
                className="group rounded-[24px] border border-border bg-surface p-7 transition-all duration-300 hover:border-[#D7FF19]/70 hover:bg-[#D7FF19] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-[0.15em] text-muted transition-colors group-hover:text-black/50">
                    {step.number}
                  </span>

                  <CheckCircle2
                    size={21}
                    className="text-[#8B9A69] transition-colors group-hover:text-[#0B0D0A]"
                  />
                </div>

                <h3 className="mt-12 text-2xl font-semibold tracking-tight transition-colors group-hover:text-[#0B0D0A]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted transition-colors group-hover:text-[#0B0D0A]/70">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <Reveal>
          <div className="container relative mx-auto overflow-hidden rounded-[30px] bg-[#D7FF19] px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-black/[0.08]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-12 h-64 w-64 rounded-full border border-black/[0.08]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-white/20 blur-3xl"
            />

            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B0D0A]/70">
                  <Sparkles size={13} />
                  YOUR NEXT CHAPTER
                </div>

                <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#0B0D0A] sm:text-5xl lg:text-7xl">
                  Let&apos;s make your
                  <br />
                  next move count.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-[#0B0D0A]/65 sm:text-lg">
                  Tell us where you want to go. Together, we can
                  explore the right strategy to help you get there.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#0B0D0A] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#20251A] hover:shadow-xl lg:self-auto"
              >
                Start a Conversation
                <MoveUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}