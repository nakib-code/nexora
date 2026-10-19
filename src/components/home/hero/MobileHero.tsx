"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  MoveUpRight,
  Plus,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

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
   MOBILE HERO
========================================================= */

export default function MobileHero() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
      filter: reduceMotion ? "blur(0px)" : "blur(7px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="home-mobile"
      data-sidebar-theme="dark"
      className="
        relative
        isolate
        flex
        min-h-[100svh]
        w-full
        flex-col
        overflow-hidden
        bg-[#030303]
        text-white
        sm:hidden
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
            bg-[length:210%_auto]
            opacity-[0.48]
            mix-blend-screen
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.025, 1],
                  opacity: [0.4, 0.52, 0.4],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Map glow */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              ellipse_at_60%_42%,
              rgba(214,255,0,0.13),
              transparent 50%
            )]
          "
        />

        {/* Center glow */}
        <motion.div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#d6ff00]/[0.055]
            blur-[115px]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.45, 0.75, 0.45],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Top right */}
        <motion.div
          className="
            absolute
            -right-40
            -top-24
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#d6ff00]/10
            blur-[105px]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -20, 0],
                  y: [0, 25, 0],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Left glow */}
        <motion.div
          className="
            absolute
            -left-44
            top-[44%]
            h-[250px]
            w-[250px]
            rounded-full
            bg-white/[0.04]
            blur-[95px]
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

        {/* Readability */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Cinematic gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/45
            via-transparent
            to-black/90
          "
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              ellipse_at_center,
              transparent 18%,
              rgba(0,0,0,0.74) 100%
            )]
          "
        />

        {/* Dots */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              rgba(255,255,255,0.18)_0.65px,
              transparent_0.65px
            )]
            [background-size:20px_20px]
            opacity-[0.07]
          "
        />

        {/* Scan lines */}
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
            bg-[length:100%_130px]
            opacity-40
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[42%]
            bg-gradient-to-t
            from-[#030303]
            via-[#030303]/80
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[100svh]
          flex-col
          px-5
        "
      >
        {/* =======================================================
            TOP LABEL
        ======================================================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="pt-5"
        >
          <Link
            href="/contact"
            className="
              group
              inline-flex
              max-w-full
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/[0.035]
              px-3.5
              py-2
              text-[9px]
              font-medium
              uppercase
              tracking-[0.13em]
              text-white/65
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

            <span className="whitespace-nowrap">
              Strategy, Design, Development
            </span>

            <MoveUpRight
              size={12}
              className="shrink-0 text-[#d6ff00]"
            />
          </Link>
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="
            flex
            flex-1
            flex-col
            pt-9
          "
        >
          {/* =====================================================
              HEADING
          ===================================================== */}

          <motion.div
            variants={reveal}
            className="
              flex
              items-start
              justify-between
              gap-3
            "
          >
            <h1
              className="
                min-w-0
                text-[clamp(3.8rem,18vw,4.55rem)]
                font-bold
                leading-[0.78]
                tracking-[-0.08em]
              "
            >
              Digital
              <br />
              agency
            </h1>

            <span
              className="
                mt-1
                shrink-0
                rounded-md
                border
                border-white/55
                px-2
                py-1
                text-[9px]
                font-semibold
                text-white/75
              "
            >
              Pro
            </span>
          </motion.div>

          {/* =====================================================
              STUDIO
          ===================================================== */}

          <motion.div
            variants={reveal}
            className="mt-5 overflow-hidden"
          >
            <h2
              className="
                min-w-0
                whitespace-nowrap
                text-[clamp(4rem,19vw,6.5rem)]
                font-bold
                leading-[0.78]
                tracking-[-0.09em]
                text-[#d6ff00]
              "
            >
              <TypingText reduceMotion={reduceMotion} />
            </h2>
          </motion.div>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <motion.div
            variants={reveal}
            className="mt-5"
          >
            <p
              className="
                max-w-[350px]
                text-[12px]
                font-medium
                leading-[1.75]
                text-white/55
              "
            >
              With every project, we bring creativity,
              strategy, and technology together to solve
              problems and create digital experiences that
              move businesses forward.
            </p>
          </motion.div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <motion.div
            variants={reveal}
            className="mt-6"
          >
            <Link
              href="/contact"
              className="
                group
                flex
                min-h-12
                w-full
                items-center
                justify-between
                border-b
                border-white/20
                px-1
                py-3
                text-[13px]
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
                  h-9
                  w-9
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
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </motion.div>

          {/* =====================================================
              NEW MIDDLE AREA
              Fills the empty space
          ===================================================== */}

          <motion.div
            variants={reveal}
            className="
              mt-10
              flex
              flex-col
            "
          >
            {/* Small label */}

            <div
              className="
                mb-4
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white/35
                "
              >
                What we do
              </span>

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-[#d6ff00]/60
                "
              >
                01 — 04
              </span>
            </div>

            {/* Capabilities box */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.025]
                backdrop-blur-[2px]
              "
            >
              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  top-1/2
                  h-40
                  w-40
                  -translate-y-1/2
                  rounded-full
                  bg-[#d6ff00]/[0.07]
                  blur-[60px]
                "
              />

              {/* Strategy */}

              <div
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-4
                  py-4
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      text-[9px]
                      font-mono
                      text-[#d6ff00]/60
                    "
                  >
                    01
                  </span>

                  <span
                    className="
                      text-[13px]
                      font-medium
                      text-white/80
                    "
                  >
                    Strategy
                  </span>
                </div>

                <Plus
                  size={14}
                  className="text-white/30"
                />
              </div>

              {/* Design */}

              <div
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-4
                  py-4
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      text-[9px]
                      font-mono
                      text-[#d6ff00]/60
                    "
                  >
                    02
                  </span>

                  <span
                    className="
                      text-[13px]
                      font-medium
                      text-white/80
                    "
                  >
                    Design
                  </span>
                </div>

                <Plus
                  size={14}
                  className="text-white/30"
                />
              </div>

              {/* Development */}

              <div
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-4
                  py-4
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      text-[9px]
                      font-mono
                      text-[#d6ff00]/60
                    "
                  >
                    03
                  </span>

                  <span
                    className="
                      text-[13px]
                      font-medium
                      text-white/80
                    "
                  >
                    Development
                  </span>
                </div>

                <Plus
                  size={14}
                  className="text-white/30"
                />
              </div>

              {/* Growth */}

              <div
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-between
                  px-4
                  py-4
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      text-[9px]
                      font-mono
                      text-[#d6ff00]/60
                    "
                  >
                    04
                  </span>

                  <span
                    className="
                      text-[13px]
                      font-medium
                      text-white/80
                    "
                  >
                    Growth
                  </span>
                </div>

                <Plus
                  size={14}
                  className="text-white/30"
                />
              </div>
            </div>

            {/* Small visual line */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
              "
            >
              <span className="h-px flex-1 bg-white/10" />

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#d6ff00]
                  shadow-[0_0_14px_rgba(214,255,0,0.8)]
                "
              />

              <span className="h-px w-10 bg-white/10" />
            </div>
          </motion.div>

          {/* =====================================================
              BOTTOM
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
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
              mt-10
              flex
              items-end
              justify-between
              gap-4
              pb-5
              pt-2
            "
          >
            {/* Scroll */}

            <a
              href="#about"
              aria-label="Scroll to explore"
              className="
                group
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                text-white/60
                transition-all
                duration-300
                hover:border-[#d6ff00]/60
                hover:bg-[#d6ff00]/10
                hover:text-[#d6ff00]
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
                    text-[2.6rem]
                    font-semibold
                    leading-none
                    tracking-[-0.075em]
                  "
                >
                  25
                </span>

                <span
                  className="
                    text-[1.55rem]
                    font-semibold
                    leading-none
                    tracking-[-0.06em]
                    text-[#d6ff00]
                  "
                >
                  k+
                </span>
              </div>

              <p
                className="
                  mt-1.5
                  max-w-[165px]
                  text-[9px]
                  leading-4
                  text-white/40
                "
              >
                Projects completed successfully
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              ANIMATED LINE
          ===================================================== */}

          <div
            className="
              relative
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

          <div className="h-4" />
        </motion.div>
      </div>
    </section>
  );
}