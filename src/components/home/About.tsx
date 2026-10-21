"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Compass,
  Gauge,
  Globe2,
  Layers3,
  MousePointer2,
  Play,
  Search,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    number: "01",
    title: "Facebook Advertising",
    shortTitle: "Meta Ads",
    description:
      "Audience-focused campaigns built around creative testing, targeting, retargeting, and measurable growth.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Google Advertising",
    shortTitle: "Google Ads",
    description:
      "High-intent search and display campaigns designed to connect your business with people ready to act.",
    icon: Search,
  },
  {
    number: "03",
    title: "Conversion Tracking",
    shortTitle: "Tracking",
    description:
      "Reliable measurement systems that connect clicks, campaigns, conversions, and real business outcomes.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Video Editing",
    shortTitle: "Video",
    description:
      "Sharp, engaging video content built for social platforms, advertising, storytelling, and attention.",
    icon: Play,
  },
  {
    number: "05",
    title: "Website Design & Development",
    shortTitle: "Web",
    description:
      "Fast, responsive, conversion-focused digital experiences designed to turn attention into action.",
    icon: Globe2,
  },
];

const principles = [
  {
    number: "01",
    title: "Clarity first",
    description:
      "We simplify complex ideas into digital experiences people can understand quickly.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design with purpose",
    description:
      "Every visual decision has a reason, from hierarchy and motion to interaction and conversion.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Measure what matters",
    description:
      "We care about what happens after the click, not just how the work looks on screen.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Refine relentlessly",
    description:
      "Strong digital work comes from testing, reviewing, polishing, and improving the details.",
    icon: MousePointer2,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 30,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.16,
  });

  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : y,
        filter: reduceMotion ? "blur(0px)" : "blur(8px)",
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
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  item,
  index,
}: {
  item: (typeof services)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.035]
        p-5
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.055]
        sm:p-6
        lg:p-7
      "
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-[#854fee]/0
          blur-[70px]
          transition-all
          duration-500
          group-hover:bg-[#854fee]/20
        "
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <span
            className="
              text-[10px]
              font-bold
              tracking-[0.18em]
              text-[#d6ff00]
            "
          >
            {item.number}
          </span>

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.035]
              text-white/50
              transition-all
              duration-300
              group-hover:border-[#d6ff00]/20
              group-hover:bg-[#d6ff00]/10
              group-hover:text-[#d6ff00]
            "
          >
            <Icon size={17} />
          </span>
        </div>

        <p
          className="
            mt-7
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-white/30
          "
        >
          {item.shortTitle}
        </p>

        <h3
          className="
            mt-2
            max-w-[280px]
            text-xl
            font-bold
            leading-[1]
            tracking-[-0.045em]
            text-white
            sm:text-2xl
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-4
            max-w-[330px]
            text-xs
            leading-6
            text-white/40
            sm:text-sm
            sm:leading-7
          "
        >
          {item.description}
        </p>

        <div className="mt-7 flex items-center gap-2">
          <span className="h-px w-7 bg-[#d6ff00]/60 transition-all duration-300 group-hover:w-12" />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-white/25
            "
          >
            Nexora Digital
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  const statementRef = useRef<HTMLDivElement | null>(null);

  const statementInView = useInView(statementRef, {
    once: true,
    amount: 0.3,
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      data-sidebar-theme="dark"
      className="
        section-with-left-nav
        relative
        isolate
        overflow-hidden
        scroll-mt-24
        bg-[#050505]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Purple glow */}
        <motion.div
          className="
            absolute
            -left-40
            top-[14%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#854fee]/[0.08]
            blur-[130px]
            sm:h-[550px]
            sm:w-[550px]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 25, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Lime glow */}
        <motion.div
          className="
            absolute
            -right-40
            top-[42%]
            h-[330px]
            w-[330px]
            rounded-full
            bg-[#d6ff00]/[0.05]
            blur-[120px]
            sm:h-[500px]
            sm:w-[500px]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -25, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Dot texture */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(rgba(255,255,255,0.18)_0.7px,transparent_0.7px)]
            [background-size:24px_24px]
            opacity-[0.055]
            sm:[background-size:28px_28px]
          "
        />

        {/* Horizontal editorial lines */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_bottom,transparent_0%,transparent_49.8%,rgba(255,255,255,0.025)_50%,transparent_50.2%,transparent_100%)]
            bg-[length:100%_160px]
            opacity-40
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[35%]
            bg-gradient-to-t
            from-[#050505]
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-20
          sm:px-8
          sm:py-28
          lg:px-14
          lg:py-36
          xl:px-20
        "
      >
        {/* ===================================================
            INTRO
        =================================================== */}

        <Reveal>
          <div
            className="
              flex
              items-center
              gap-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#d6ff00]
              sm:text-xs
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#d6ff00]" />

            About Nexora Digital
          </div>
        </Reveal>

        <div
          className="
            mt-5
            grid
            gap-10
            lg:grid-cols-[1.25fr_0.75fr]
            lg:items-end
            lg:gap-20
          "
        >
          {/* Heading */}

          <Reveal delay={0.08}>
            <h2
              className="
                max-w-[1000px]
                text-[clamp(3.1rem,9vw,8rem)]
                font-bold
                leading-[0.88]
                tracking-[-0.075em]
              "
            >
              We build digital
              <br />
              <span className="text-[#d6ff00]">
                that moves.
              </span>
            </h2>
          </Reveal>

          {/* Description */}

          <Reveal delay={0.18}>
            <div className="max-w-xl lg:pb-2">
              <p
                className="
                  text-sm
                  font-medium
                  leading-7
                  text-white/55
                  sm:text-base
                  sm:leading-8
                "
              >
                Nexora Digital is a creative digital agency bringing
                strategy, advertising, design, technology, and content
                together under one roof.
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-white/35
                  sm:text-base
                  sm:leading-8
                "
              >
                We help businesses turn attention into action by building
                digital experiences and growth systems that are clear,
                useful, measurable, and built to perform.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-white/20
                  pb-3
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-white
                  transition-colors
                  hover:border-[#d6ff00]
                  hover:text-[#d6ff00]
                  sm:text-sm
                "
              >
                Start a conversation

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ===================================================
            POSITIONING STRIP
        =================================================== */}

        <Reveal delay={0.25} className="mt-16 sm:mt-20 lg:mt-24">
          <div
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-white/[0.03]
              sm:rounded-[30px]
            "
          >
            <div
              className="
                grid
                gap-6
                p-6
                sm:p-8
                lg:grid-cols-[1fr_auto]
                lg:items-center
                lg:px-10
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  Our philosophy
                </p>

                <p
                  className="
                    mt-2
                    max-w-2xl
                    text-base
                    font-semibold
                    leading-7
                    tracking-[-0.02em]
                    text-white/75
                    sm:text-lg
                  "
                >
                  Five disciplines. One connected digital system.
                </p>
              </div>

              <div
                className="
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
                <span className="h-px w-8 bg-[#d6ff00]" />
                Strategy × Creative × Technology
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===================================================
            FIVE CORE DISCIPLINES
        =================================================== */}

        <div className="mt-24 sm:mt-32 lg:mt-40">
          <Reveal>
            <div
              className="
                flex
                flex-col
                gap-5
                border-b
                border-white/10
                pb-7
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#d6ff00]
                  "
                >
                  What we do
                </p>

                <h3
                  className="
                    mt-3
                    max-w-3xl
                    text-3xl
                    font-bold
                    leading-[0.98]
                    tracking-[-0.055em]
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Everything your digital
                  <br />
                  <span className="text-white/30">
                    presence needs.
                  </span>
                </h3>
              </div>

              <p
                className="
                  max-w-sm
                  text-xs
                  leading-6
                  text-white/35
                  sm:text-sm
                "
              >
                We combine five core disciplines to create a connected
                digital ecosystem instead of isolated pieces of work.
              </p>
            </div>
          </Reveal>

          {/* Service grid */}

          <div
            className="
              mt-7
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {services.map((item, index) => (
              <ServiceCard
                key={item.number}
                item={item}
                index={index}
              />
            ))}

            {/* Closing card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease,
              }}
              className="
                relative
                flex
                min-h-[250px]
                flex-col
                justify-between
                overflow-hidden
                rounded-[24px]
                border
                border-[#d6ff00]/20
                bg-[#d6ff00]
                p-6
                text-[#050505]
                sm:p-7
                lg:min-h-0
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20
                  h-44
                  w-44
                  rounded-full
                  bg-white/40
                  blur-[70px]
                "
              />

              <div className="relative z-10">
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-black/45
                  "
                >
                  One agency
                </span>

                <h4
                  className="
                    mt-4
                    max-w-[270px]
                    text-2xl
                    font-bold
                    leading-[0.95]
                    tracking-[-0.05em]
                    sm:text-3xl
                  "
                >
                  Built to work together.
                </h4>
              </div>

              <div
                className="
                  relative
                  z-10
                  flex
                  items-end
                  justify-between
                  gap-5
                "
              >
                <p
                  className="
                    max-w-[220px]
                    text-xs
                    font-medium
                    leading-6
                    text-black/55
                  "
                >
                  Strategy, media, content, tracking, and web working as
                  one system.
                </p>

                <span
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#050505]
                    text-[#d6ff00]
                  "
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===================================================
            VISUAL STORY
        =================================================== */}

        <div
          className="
            mt-24
            grid
            gap-5
            sm:mt-32
            lg:mt-40
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-8
          "
        >
          {/* Visual */}

          <Reveal>
            <div
              className="
                relative
                min-h-[430px]
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-[#0c0b10]
                sm:min-h-[520px]
                sm:rounded-[36px]
              "
            >
              {/* Purple glow */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-24
                  -top-24
                  h-80
                  w-80
                  rounded-full
                  bg-[#854fee]/20
                  blur-[100px]
                "
              />

              {/* Lime glow */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-28
                  -left-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#d6ff00]/10
                  blur-[100px]
                "
              />

              {/* Grid */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  opacity-[0.15]
                  [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
                  [background-size:46px_46px]
                "
              />

              {/* Central system */}

              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  p-8
                "
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: reduceMotion ? 1 : 0.85,
                    rotate: reduceMotion ? 0 : -6,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 1,
                    ease,
                  }}
                  className="
                    relative
                    h-[220px]
                    w-[220px]
                    rounded-[32px]
                    border
                    border-white/15
                    bg-white/[0.045]
                    p-5
                    shadow-[0_35px_100px_rgba(0,0,0,0.45)]
                    backdrop-blur-xl
                    sm:h-[270px]
                    sm:w-[270px]
                  "
                >
                  {/* Header */}

                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white/35
                      "
                    >
                      Nexora System
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#d6ff00]" />
                  </div>

                  {/* Main bars */}

                  <div className="mt-9 space-y-3">
                    <div className="h-2 w-24 rounded-full bg-white/15" />

                    <div className="h-3 w-40 rounded-full bg-[#d6ff00]/70" />

                    <div className="h-2 w-32 rounded-full bg-white/10" />
                  </div>

                  {/* Data blocks */}

                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-xl border border-white/10 bg-white/[0.035]" />

                    <div className="h-16 rounded-xl border border-[#d6ff00]/20 bg-[#d6ff00]/[0.05]" />

                    <div className="h-16 rounded-xl border border-white/10 bg-white/[0.035]" />
                  </div>
                </motion.div>

                {/* Strategy */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.25,
                    duration: reduceMotion ? 0 : 0.7,
                    ease,
                  }}
                  className="
                    absolute
                    left-5
                    top-8
                    rounded-full
                    border
                    border-white/10
                    bg-black/40
                    px-3
                    py-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white/55
                    backdrop-blur-md
                    sm:left-8
                  "
                >
                  Strategy
                </motion.div>

                {/* Creative */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.4,
                    duration: reduceMotion ? 0 : 0.7,
                    ease,
                  }}
                  className="
                    absolute
                    right-5
                    top-[42%]
                    rounded-full
                    border
                    border-[#854fee]/25
                    bg-[#854fee]/[0.08]
                    px-3
                    py-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#bda3ff]
                    backdrop-blur-md
                    sm:right-8
                  "
                >
                  Creative
                </motion.div>

                {/* Technology */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.55,
                    duration: reduceMotion ? 0 : 0.7,
                    ease,
                  }}
                  className="
                    absolute
                    bottom-20
                    left-5
                    rounded-full
                    border
                    border-[#d6ff00]/20
                    bg-[#d6ff00]/[0.06]
                    px-3
                    py-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#d6ff00]/80
                    backdrop-blur-md
                    sm:left-8
                  "
                >
                  Technology
                </motion.div>
              </div>

              {/* Bottom label */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  pt-4
                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                "
              >
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white/30
                  "
                >
                  One connected system
                </span>

                <ArrowDownRight
                  size={17}
                  className="text-[#d6ff00]"
                />
              </div>
            </div>
          </Reveal>

          {/* Philosophy */}

          <Reveal delay={0.12}>
            <div
              className="
                flex
                h-full
                flex-col
                justify-between
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
                sm:rounded-[36px]
                sm:p-8
                lg:p-10
                xl:p-12
              "
            >
              <div>
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#854fee]
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#854fee]" />
                  Why Nexora
                </div>

                <h3
                  className="
                    mt-5
                    max-w-2xl
                    text-3xl
                    font-bold
                    leading-[0.98]
                    tracking-[-0.055em]
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  We don't build digital
                  <span className="text-white/30">
                    {" "}
                    just to fill a screen.
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/45
                    sm:text-base
                    sm:leading-8
                  "
                >
                  We believe good digital work should have a job to do.
                  It should communicate clearly, look considered, work
                  beautifully, and ultimately help a business move forward.
                </p>
              </div>

              {/* Principles */}

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {principles.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="
                        group
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/10
                        p-4
                        transition-all
                        duration-300
                        hover:border-white/20
                        hover:bg-white/[0.035]
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.035]
                            text-white/50
                            transition-all
                            duration-300
                            group-hover:border-[#d6ff00]/20
                            group-hover:bg-[#d6ff00]/10
                            group-hover:text-[#d6ff00]
                          "
                        >
                          <Icon size={15} />
                        </span>

                        <div>
                          <p
                            className="
                              text-xs
                              font-bold
                              text-white/75
                            "
                          >
                            {item.title}
                          </p>

                          <span
                            className="
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.14em]
                              text-white/20
                            "
                          >
                            {item.number}
                          </span>
                        </div>
                      </div>

                      <p
                        className="
                          mt-3
                          text-[11px]
                          leading-5
                          text-white/30
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ===================================================
            PROCESS
        =================================================== */}

        <div className="mt-24 sm:mt-32 lg:mt-40">
          <Reveal>
            <div
              className="
                border-b
                border-white/10
                pb-7
              "
            >
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#d6ff00]
                "
              >
                How we work
              </p>

              <div
                className="
                  mt-4
                  flex
                  flex-col
                  gap-5
                  lg:flex-row
                  lg:items-end
                  lg:justify-between
                "
              >
                <h3
                  className="
                    max-w-3xl
                    text-3xl
                    font-bold
                    leading-[0.98]
                    tracking-[-0.055em]
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  Think clearly.
                  <br />
                  <span className="text-white/30">
                    Build intentionally.
                  </span>
                </h3>

                <p
                  className="
                    max-w-sm
                    text-xs
                    leading-6
                    text-white/35
                    sm:text-sm
                  "
                >
                  Every project moves through a simple process designed to
                  keep ideas focused and execution sharp.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-5">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We learn the business, audience, problem, and desired outcome before making decisions.",
              },
              {
                number: "02",
                title: "Create",
                text: "We turn strategy into a clear creative direction, visual language, and digital experience.",
              },
              {
                number: "03",
                title: "Build",
                text: "We develop, produce, launch, and connect every important piece into one working system.",
              },
              {
                number: "04",
                title: "Optimize",
                text: "We review the details, measure what matters, and keep improving the experience.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.number}
                delay={reduceMotion ? 0 : index * 0.07}
              >
                <div
                  className="
                    group
                    grid
                    gap-4
                    border-b
                    border-white/10
                    py-6
                    transition-colors
                    duration-300
                    hover:border-white/20
                    sm:grid-cols-[80px_0.7fr_1.3fr]
                    sm:items-center
                    sm:py-7
                    lg:grid-cols-[100px_0.7fr_1.3fr]
                    lg:gap-8
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.16em]
                      text-[#d6ff00]
                    "
                  >
                    {item.number}
                  </span>

                  <h4
                    className="
                      text-xl
                      font-bold
                      tracking-[-0.04em]
                      text-white/85
                      sm:text-2xl
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      max-w-xl
                      text-sm
                      leading-7
                      text-white/35
                      sm:justify-self-end
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ===================================================
            BIG STATEMENT
        =================================================== */}

        <div
          ref={statementRef}
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-[#0c0b10]
            px-6
            py-12
            sm:mt-32
            sm:rounded-[38px]
            sm:px-10
            sm:py-16
            lg:mt-40
            lg:px-16
            lg:py-24
            xl:px-24
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              right-[-130px]
              top-[-130px]
              h-[320px]
              w-[320px]
              rounded-full
              bg-[#d6ff00]/10
              blur-[115px]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[-150px]
              left-[-120px]
              h-[330px]
              w-[330px]
              rounded-full
              bg-[#854fee]/10
              blur-[120px]
            "
          />

          <p
            className="
              relative
              z-10
              mb-7
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-white/30
            "
          >
            What we believe
          </p>

          <p
            className="
              relative
              z-10
              max-w-6xl
              text-[clamp(2.1rem,5.5vw,5.5rem)]
              font-bold
              leading-[0.98]
              tracking-[-0.065em]
            "
          >
            <span className="text-white/30">
              Good digital work gets attention.
            </span>{" "}
            <span
              className={
                statementInView
                  ? "text-white transition-colors duration-700"
                  : "text-white/10 transition-colors duration-700"
              }
            >
              Great digital work gives people a reason to act.
            </span>
          </p>

          <div
            className="
              relative
              z-10
              mt-10
              flex
              items-center
              gap-3
            "
          >
            <span className="h-px w-10 bg-[#d6ff00]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#d6ff00]
              "
            >
              Nexora Digital
            </span>
          </div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <Reveal delay={0.08}>
          <div
            className="
              mt-16
              flex
              flex-col
              gap-7
              border-t
              border-white/10
              pt-8
              sm:mt-20
              sm:flex-row
              sm:items-end
              sm:justify-between
              lg:mt-24
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                "
              >
                Ready when you are
              </p>

              <h3
                className="
                  mt-3
                  max-w-2xl
                  text-2xl
                  font-bold
                  tracking-[-0.045em]
                  sm:text-3xl
                "
              >
                Have an idea worth building?
              </h3>
            </div>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-between
                gap-5
                rounded-full
                bg-[#d6ff00]
                px-5
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.08em]
                !text-[#050505]
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:px-6
                sm:py-4
              "
            >
              Let's work together

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#050505]
                  !text-[#d6ff00]
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </Reveal>

        {/* ===================================================
            SCROLL CUE
        =================================================== */}

        <div
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-3
            text-[9px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-white/25
            sm:mt-16
          "
        >
          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-white/10
            "
          >
            <ArrowDownRight size={13} />
          </span>

          Meet the team next
        </div>
      </div>
    </section>
  );
}