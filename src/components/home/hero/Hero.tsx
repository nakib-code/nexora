"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import MobileHero from "./MobileHero";

const phrase = "studio";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   TYPING TEXT
========================================================= */

function TypingText({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setText(phrase);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < phrase.length) {
      timeout = setTimeout(() => {
        setText(phrase.slice(0, text.length + 1));
      }, 130);
    } else if (!deleting && text.length === phrase.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1600);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(phrase.slice(0, text.length - 1));
      }, 65);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
      }, 350);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, reduceMotion]);

  return (
    <span className="inline-flex min-w-0 items-baseline">
      <span>{text}</span>

      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="
            ml-1
            inline-block
            h-[0.75em]
            w-[3px]
            translate-y-[0.04em]
            rounded-full
            bg-[#d6ff00]
            sm:ml-2
            sm:w-1
          "
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 0.85,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </span>
  );
}

/* =========================================================
   DESKTOP / TABLET HERO
========================================================= */

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
      filter: reduceMotion ? "blur(0px)" : "blur(8px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: reduceMotion ? 0 : 0.9,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / TABLET
      ===================================================== */}

      <section
        id="home"
        data-sidebar-theme="dark"
        className="
          relative
          isolate
          hidden
          min-h-screen
          w-full
          overflow-hidden
          bg-[#050505]
          text-white
          sm:flex
          sm:flex-col
          md:pl-[70px]
        "
      >
        {/* ===================================================
            BACKGROUND
        =================================================== */}

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
          {/* Base */}
          <div className="absolute inset-0 bg-[#030303]" />

          {/* World Map */}
          <motion.div
            className="
              absolute
              inset-0
              bg-[url('/world-map-bg.png')]
              bg-center
              bg-no-repeat
              bg-[length:110%_auto]
              opacity-[0.52]
              mix-blend-screen
            "
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.015, 1],
                    opacity: [0.44, 0.55, 0.44],
                  }
            }
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Lime Map Glow */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(
                ellipse_at_60%_42%,
                rgba(214,255,0,0.16),
                transparent 48%
              )]
            "
          />

          {/* Center Glow */}
          <motion.div
            className="
              absolute
              left-1/2
              top-[48%]
              h-[700px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#d6ff00]/[0.045]
              blur-[180px]
            "
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Top Right Light */}
          <motion.div
            className="
              absolute
              -right-40
              -top-20
              h-[550px]
              w-[550px]
              rounded-full
              bg-[#d6ff00]/10
              blur-[150px]
            "
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.12, 1],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Left White Glow */}
          <motion.div
            className="
              absolute
              -left-40
              top-[42%]
              h-[430px]
              w-[430px]
              rounded-full
              bg-white/[0.05]
              blur-[140px]
            "
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 30, 0],
                    y: [0, -25, 0],
                  }
            }
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Readability */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/30
              via-transparent
              to-black/80
            "
          />

          {/* Vignette */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(
                ellipse_at_center,
                transparent 28%,
                rgba(0,0,0,0.65) 100%
              )]
            "
          />

          {/* Dots */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(
                rgba(255,255,255,0.16)_0.7px,
                transparent_0.7px
              )]
              [background-size:28px_28px]
              opacity-[0.08]
            "
          />

          {/* Scan Lines */}
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(
                to_bottom,
                transparent 0%,
                transparent 49.8%,
                rgba(255,255,255,0.025) 50%,
                transparent 50.2%,
                transparent 100%
              )]
              bg-[length:100%_150px]
              opacity-40
            "
          />

          {/* Bottom Darkness */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[38%]
              bg-gradient-to-t
              from-[#030303]
              to-transparent
            "
          />
        </div>

        {/* ===================================================
            TOP LABEL
        =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1900px]
            px-9
            pt-16
            lg:px-14
            lg:pt-20
          "
        >
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/[0.035]
                px-4
                py-2.5
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/70
                backdrop-blur-md
                transition-colors
                hover:border-[#d6ff00]/40
                hover:text-white
              "
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-[#d6ff00]
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-[#d6ff00]
                  "
                />
              </span>

              <span>
                Strategy, Design, Development
              </span>

              <MoveUpRight
                size={14}
                className="
                  shrink-0
                  text-[#d6ff00]
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </motion.div>
        </div>

        {/* ===================================================
            MAIN
        =================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1900px]
            flex-1
            flex-col
            px-9
            pb-10
            pt-20
            lg:px-14
            lg:pt-24
          "
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Heading */}

            <motion.div
              variants={reveal}
              className="
                flex
                min-w-0
                items-center
                gap-5
                lg:gap-7
              "
            >
              <h1
                className="
                  min-w-0
                  whitespace-nowrap
                  text-8xl
                  font-bold
                  leading-[0.88]
                  tracking-[-0.075em]
                  md:text-9xl
                "
              >
                Digital agency
              </h1>

              <span
                className="
                  shrink-0
                  rounded-2xl
                  border-2
                  border-white/60
                  px-4
                  py-2
                  text-xl
                  font-semibold
                  text-white/80
                  lg:px-5
                  lg:py-2.5
                  lg:text-2xl
                "
              >
                Pro
              </span>
            </motion.div>

            {/* Studio + Description */}

            <div
              className="
                mt-9
                grid
                min-w-0
                grid-cols-1
                items-start
                gap-6
                lg:grid-cols-[1.2fr_0.8fr]
                lg:items-center
                lg:gap-6
              "
            >
              <motion.h2
                variants={reveal}
                className="
                  min-w-0
                  max-w-full
                  whitespace-nowrap
                  text-[clamp(5rem,9.5vw,10.5rem)]
                  font-bold
                  leading-[0.82]
                  tracking-[-0.085em]
                  text-[#d6ff00]
                "
              >
                <TypingText reduceMotion={reduceMotion} />
              </motion.h2>

              <motion.div
                variants={reveal}
                className="
                  relative
                  mt-10
                  w-full
                  max-w-[600px]
                  min-w-0
                  lg:-ml-8
                "
              >
                <p
                  className="
                    max-w-[520px]
                    text-base
                    font-medium
                    leading-7
                    text-white/60
                    lg:text-[15px]
                    lg:leading-6
                  "
                >
                  With every project, we bring creativity,
                  strategy, and technology together to solve
                  problems and create digital experiences that
                  move businesses forward.
                </p>

                <Link
                  href="/contact"
                  className="
                    group
                    mt-6
                    inline-flex
                    min-h-12
                    items-center
                    justify-center
                    gap-5
                    border-b
                    border-white/20
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    hover:border-white/60
                  "
                >
                  <span>
                    Let&apos;s work together
                  </span>

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-[#d6ff00]
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* =================================================
              BOTTOM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
              delay: reduceMotion ? 0 : 0.5,
              ease,
            }}
            className="
              relative
              mt-auto
              flex
              min-h-[190px]
              items-end
              justify-between
              gap-4
              pt-16
              lg:min-h-[200px]
              lg:pt-20
            "
          >
            {/* Scroll */}

            <a
              href="#about"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-xs
                uppercase
                tracking-[0.16em]
                text-white/50
                transition-colors
                hover:text-[#d6ff00]
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  transition-all
                  duration-300
                  group-hover:border-[#d6ff00]/60
                  group-hover:bg-[#d6ff00]/10
                "
              >
                <ArrowDown
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                />
              </span>

              Scroll to explore
            </a>

            {/* Counter */}

            <div
              className="
                ml-auto
                flex
                min-w-0
                flex-col
                items-end
                text-right
              "
            >
              <div className="flex items-baseline gap-1">
                <span
                  className="
                    text-5xl
                    font-semibold
                    leading-none
                    tracking-[-0.075em]
                    lg:text-6xl
                  "
                >
                  25
                </span>

                <span
                  className="
                    text-4xl
                    font-semibold
                    leading-none
                    tracking-[-0.06em]
                    text-[#d6ff00]
                    lg:text-5xl
                  "
                >
                  k+
                </span>
              </div>

              <p
                className="
                  mt-2
                  text-xs
                  leading-5
                  text-white/45
                "
              >
                Projects completed successfully
              </p>
            </div>
          </motion.div>

          {/* Animated Line */}

          <div
            className="
              relative
              mt-7
              h-px
              w-full
              overflow-hidden
              bg-white/10
            "
          >
            <motion.div
              className="
                absolute
                inset-y-0
                left-0
                w-1/3
                bg-gradient-to-r
                from-transparent
                via-[#d6ff00]
                to-transparent
              "
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: ["-100%", "400%"],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE — SEPARATE COMPONENT
      ===================================================== */}

      <MobileHero />
    </>
  );
}