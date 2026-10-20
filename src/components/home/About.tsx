"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Compass,
  Layers3,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

const approachItems = [
  {
    number: "01",
    title: "Understand the Goal",
    description:
      "We start with the problem, audience, and outcome so the creative direction has a clear purpose.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design with Purpose",
    description:
      "We turn ideas into clear visual systems and digital experiences that are easy to understand and use.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Build with Care",
    description:
      "From responsive interfaces to polished creative assets, every detail is built with usability in mind.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Refine the Details",
    description:
      "We review, refine, and polish the experience until the important details feel intentional.",
    icon: MousePointer2,
  },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "Graphic Design",
  "Video Editing",
];

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.18,
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

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const statementRef = useRef<HTMLDivElement | null>(null);

  const statementInView = useInView(statementRef, {
    once: true,
    amount: 0.3,
  });

  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="about"
      data-sidebar-theme="dark"
      className="
        relative
        isolate
        overflow-hidden
        scroll-mt-24
        bg-[#050505]
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

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
        {/* Purple atmospheric glow */}
        <motion.div
          className="
            absolute
            -left-40
            top-[18%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#854fee]/[0.08]
            blur-[130px]
            sm:h-[520px]
            sm:w-[520px]
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

        {/* Lime atmospheric glow */}
        <motion.div
          className="
            absolute
            -right-40
            top-[32%]
            h-[340px]
            w-[340px]
            rounded-full
            bg-[#d6ff00]/[0.055]
            blur-[120px]
            sm:h-[500px]
            sm:w-[500px]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -24, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fine dot texture */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(rgba(255,255,255,0.18)_0.7px,transparent_0.7px)]
            [background-size:24px_24px]
            opacity-[0.07]
            sm:[background-size:28px_28px]
          "
        />

        {/* Editorial horizontal lines */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_bottom,transparent_0%,transparent_49.8%,rgba(255,255,255,0.025)_50%,transparent_50.2%,transparent_100%)]
            bg-[length:100%_150px]
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

      {/* =========================================================
          TOP INTRO
      ========================================================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          pb-16
          pt-20
          sm:px-8
          sm:pb-24
          sm:pt-28
          lg:px-14
          lg:pb-32
          lg:pt-36
          xl:px-20
        "
      >
        <Reveal>
          <div
            className="
              mb-4
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
            grid
            gap-10
            lg:grid-cols-[1.15fr_0.85fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* Main heading */}
          <Reveal delay={0.08}>
            <h2
              className="
                max-w-[950px]
                text-[clamp(3.2rem,10vw,8rem)]
                font-bold
                leading-[0.88]
                tracking-[-0.075em]
              "
            >
              Creative thinking.
              <br />
              <span className="text-[#d6ff00]">
                Digital excellence.
              </span>
            </h2>
          </Reveal>

          {/* Intro copy */}
          <Reveal delay={0.18}>
            <div className="max-w-xl lg:pb-2">
              <p
                className="
                  text-sm
                  font-medium
                  leading-7
                  text-white/60
                  sm:text-base
                  sm:leading-8
                "
              >
                Nexora Digital brings strategy, creativity, and technology
                together to turn ideas into useful digital experiences.
                We work across web development, UI/UX design, graphic design,
                and video editing with one clear goal: make digital work feel
                purposeful, polished, and easy to use.
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

        {/* =========================================================
            SERVICE STRIP
        ========================================================= */}

        <Reveal delay={0.26} className="mt-14 sm:mt-20">
          <div
            className="
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-white/[0.035]
              backdrop-blur-sm
              sm:rounded-[30px]
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                p-5
                sm:p-7
                lg:flex-row
                lg:items-center
                lg:justify-between
                lg:px-8
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-white/35
                  "
                >
                  What we bring together
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    font-semibold
                    text-white/80
                    sm:text-base
                  "
                >
                  One creative direction. Multiple digital disciplines.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {services.map((service, index) => (
                  <span
                    key={service}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.035]
                      px-3
                      py-2
                      text-[10px]
                      font-semibold
                      text-white/60
                      sm:px-4
                      sm:text-xs
                    "
                  >
                    <span className="text-[#d6ff00]">
                      0{index + 1}
                    </span>
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* =========================================================
            VISUAL STORY + MISSION
        ========================================================= */}

        <div
          className="
            mt-20
            grid
            gap-5
            lg:mt-28
            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-8
          "
        >
          {/* Visual composition */}
          <Reveal>
            <div
              className="
                relative
                min-h-[390px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#0d0c11]
                sm:min-h-[470px]
                sm:rounded-[34px]
              "
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#854fee]/15
                  blur-[90px]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-28
                  -left-20
                  h-64
                  w-64
                  rounded-full
                  bg-[#d6ff00]/10
                  blur-[90px]
                "
              />

              {/* Decorative grid */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  opacity-[0.16]
                  [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)]
                  [background-size:48px_48px]
                "
              />

              {/* Central composition */}
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
                    scale: reduceMotion ? 1 : 0.88,
                    rotate: reduceMotion ? 0 : -5,
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
                    h-[190px]
                    w-[190px]
                    rounded-[30px]
                    border
                    border-white/15
                    bg-white/[0.045]
                    p-5
                    shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                    backdrop-blur-xl
                    sm:h-[230px]
                    sm:w-[230px]
                  "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                      Nexora
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#d6ff00]" />
                  </div>

                  <div className="mt-9 space-y-2">
                    <div className="h-2 w-20 rounded-full bg-white/20" />
                    <div className="h-2 w-32 rounded-full bg-[#d6ff00]/70" />
                    <div className="h-2 w-24 rounded-full bg-white/10" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-xl border border-white/10 bg-white/[0.035]" />
                    <div className="h-12 rounded-xl border border-[#d6ff00]/20 bg-[#d6ff00]/[0.05]" />
                    <div className="h-12 rounded-xl border border-white/10 bg-white/[0.035]" />
                  </div>
                </motion.div>

                {/* Floating labels */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : -25,
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

                <motion.div
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 25,
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
                    bottom-8
                    right-5
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
                    sm:right-8
                  "
                >
                  Experience
                </motion.div>
              </div>

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
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Creative system
                </span>

                <ArrowDownRight
                  size={17}
                  className="text-[#d6ff00]"
                />
              </div>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={0.12}>
            <div
              className="
                flex
                h-full
                flex-col
                justify-between
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.035]
                p-6
                sm:rounded-[34px]
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
                  Our approach
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
                  We don't just make things look good.
                  <span className="text-white/35">
                    {" "}
                    We make them make sense.
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-sm
                    leading-7
                    text-white/50
                    sm:text-base
                    sm:leading-8
                  "
                >
                  Every project starts with understanding what needs to be
                  solved. From there, we combine thoughtful design,
                  development, and creative execution to build work that is
                  clear, useful, and considered.
                </p>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  "Clear communication",
                  "Purposeful design",
                  "Responsive experiences",
                  "Attention to detail",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/10
                      px-4
                      py-3.5
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#d6ff00]/10
                        text-[#d6ff00]
                      "
                    >
                      <Check size={14} />
                    </span>

                    <span className="text-xs font-semibold text-white/60">
                      {item}
                    </span>

                    <span className="ml-auto text-[9px] font-bold text-white/20">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* =========================================================
            APPROACH STEPS
        ========================================================= */}

        <div className="mt-24 sm:mt-32 lg:mt-40">
          <Reveal>
            <div
              className="
                flex
                flex-col
                gap-5
                border-b
                border-white/10
                pb-6
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
                  How we work
                </p>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-bold
                    tracking-[-0.055em]
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  A simple process.
                  <br />
                  <span className="text-white/30">
                    Thoughtful execution.
                  </span>
                </h3>
              </div>

              <p className="max-w-sm text-xs leading-6 text-white/40 sm:text-sm">
                Good creative work becomes stronger when the process is clear,
                focused, and intentional.
              </p>
            </div>
          </Reveal>

          <div className="mt-6">
            {approachItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.number}
                  delay={reduceMotion ? 0 : index * 0.08}
                >
                  <div
                    className="
                      group
                      grid
                      gap-5
                      border-b
                      border-white/10
                      py-6
                      transition-colors
                      duration-300
                      hover:border-white/20
                      sm:grid-cols-[80px_0.9fr_1.1fr]
                      sm:items-center
                      sm:py-8
                      lg:grid-cols-[100px_0.8fr_1.2fr]
                      lg:gap-8
                    "
                  >
                    <span
                      className="
                        text-[11px]
                        font-bold
                        tracking-[0.14em]
                        text-[#d6ff00]
                      "
                    >
                      {item.number}
                    </span>

                    <div className="flex items-center gap-4">
                      <span
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.035]
                          text-white/60
                          transition-all
                          duration-300
                          group-hover:border-[#d6ff00]/25
                          group-hover:bg-[#d6ff00]/10
                          group-hover:text-[#d6ff00]
                        "
                      >
                        <Icon size={18} />
                      </span>

                      <h4
                        className="
                          text-lg
                          font-bold
                          tracking-[-0.035em]
                          text-white/85
                          sm:text-xl
                          lg:text-2xl
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    <p
                      className="
                        max-w-xl
                        text-sm
                        leading-7
                        text-white/40
                        sm:justify-self-end
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            BIG STATEMENT
        ========================================================= */}

        <div
          ref={statementRef}
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-[#0c0b10]
            px-6
            py-12
            sm:mt-32
            sm:rounded-[36px]
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
              right-[-120px]
              top-[-120px]
              h-[300px]
              w-[300px]
              rounded-full
              bg-[#d6ff00]/10
              blur-[110px]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              bottom-[-150px]
              left-[-120px]
              h-[320px]
              w-[320px]
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
            Our belief
          </p>

          <p
            className="
              relative
              z-10
              max-w-6xl
              text-[clamp(2rem,5.5vw,5.5rem)]
              font-bold
              leading-[0.98]
              tracking-[-0.065em]
            "
          >
            <span className="text-white/35">
              Good design gets attention.
            </span>{" "}
            <span
              className={
                statementInView
                  ? "text-white transition-colors duration-700"
                  : "text-white/10 transition-colors duration-700"
              }
            >
              Thoughtful digital experiences create lasting value.
            </span>
          </p>

          <div className="relative z-10 mt-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d6ff00]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d6ff00]">
              Nexora Digital
            </span>
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

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
                text-[#050505]
                transition-transform
                duration-300
                hover:-translate-y-1
                sm:px-6
                sm:py-4
              "
            >
              Let&apos;s work together

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#050505]
                  text-[#d6ff00]
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

        {/* Scroll cue */}
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
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
            <ArrowDownRight size={13} />
          </span>
          Keep exploring
        </div>
      </div>
    </section>
  );
}
