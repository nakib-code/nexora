
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const phrase = "studio";
const ease = [0.22, 1, 0.36, 1] as const;

function TypingText({ reduceMotion }: { reduceMotion: boolean }) {
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
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(phrase.slice(0, text.length - 1));
      }, 65);
    } else {
      timeout = setTimeout(() => setDeleting(false), 350);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, reduceMotion]);

  return (
    <span className="inline-flex min-w-0 items-baseline">
      <span>{text}</span>

      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="ml-1 inline-block h-[0.72em] w-[3px] translate-y-[0.04em] rounded-full bg-[#d6ff00]"
          animate={{ opacity: [1, 0, 1] }}
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

function CreativeCard({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: reduceMotion ? 0 : 18,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduceMotion ? 0 : 0.7,
            ease,
          },
        },
      }}
      className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Ambient lime glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-[#d6ff00]/10 blur-[60px]"
      />

      <div className="relative flex items-center gap-4">
        {/* Orbital graphic */}
        <div className="relative flex h-[100px] w-[100px] shrink-0 items-center justify-center">
          <motion.div
            aria-hidden="true"
            className="absolute inset-1 rounded-full border border-[#d6ff00]/25"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="absolute left-3 top-3 h-2 w-2 rounded-full bg-[#d6ff00] shadow-[0_0_12px_#d6ff00]" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="absolute inset-[15px] rounded-full border border-dashed border-white/20"
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="absolute h-14 w-14 rounded-full bg-[#d6ff00]/20 blur-2xl" />

          <motion.div
            className="relative flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-[#d6ff00]/40 bg-[#d6ff00]/10 shadow-[0_0_30px_rgba(214,255,0,0.08)]"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -4, 0], rotate: [0, 4, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-2xl font-semibold tracking-[-0.1em] text-[#d6ff00]">
              Nx
            </span>
          </motion.div>

          <span className="absolute bottom-1 right-0 rounded-full border border-white/10 bg-[#101010] px-2 py-1 text-[8px] font-medium tracking-wider text-white/60">
            01 / 04
          </span>
        </div>

        {/* Card copy */}
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6ff00]" />

            <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-[9px]">
              The creative process
            </span>
          </div>

          <h3 className="text-[clamp(1.2rem,5.5vw,1.6rem)] font-semibold leading-[1.05] tracking-[-0.06em] text-white">
            Ideas into
            <br />
            <span className="text-[#d6ff00]">impact.</span>
          </h3>

          <p className="mt-2 text-[10px] leading-relaxed text-white/45 sm:text-[11px]">
            Strategy meets creativity to build digital experiences that matter.
          </p>
        </div>
      </div>

      {/* Card footer */}
      <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3">
        <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-white/35">
          Nexora Digital
        </span>

        <div
          aria-label="Creative process, step one of four"
          className="flex items-center gap-1.5"
        >
          <span className="h-1 w-5 rounded-full bg-[#d6ff00]" />
          <span className="h-1 w-2 rounded-full bg-white/20" />
          <span className="h-1 w-2 rounded-full bg-white/20" />
          <span className="h-1 w-2 rounded-full bg-white/20" />
        </div>
      </div>
    </motion.div>
  );
}

export default function MobileHero() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
      filter: reduceMotion ? "blur(0px)" : "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduceMotion ? 0 : 0.75,
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
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#030303] text-white sm:hidden"
    >
      {/* Animated background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#030303]" />

        {/* World map */}
        <motion.div
          className="absolute inset-0 overflow-hidden mix-blend-screen"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.035, 1],
                  opacity: [0.36, 0.5, 0.36],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/world-map-bg-m.png"
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </motion.div>

        {/* Main lime atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_35%,rgba(214,255,0,0.14),transparent_52%)]" />

        <motion.div
          className="absolute left-1/2 top-[36%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6ff00]/[0.07] blur-[110px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.16, 1],
                  opacity: [0.45, 0.8, 0.45],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-36 -top-16 h-[330px] w-[330px] rounded-full bg-[#d6ff00]/[0.09] blur-[100px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -24, 0],
                  y: [0, 22, 0],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -left-40 top-[48%] h-[270px] w-[270px] rounded-full bg-white/[0.045] blur-[100px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 22, 0],
                  y: [0, -18, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Contrast and texture */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-[#030303]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(0,0,0,0.58)_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_0.65px,transparent_0.65px)] [background-size:22px_22px] opacity-[0.06]" />

        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#030303] via-[#030303]/75 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[560px] flex-1 flex-col px-5 pb-5 pt-5 sm:px-7">
        {/* Top label */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/contact"
            className="group inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[9px] font-medium uppercase tracking-[0.13em] text-white/70 backdrop-blur-xl transition-colors hover:border-[#d6ff00]/40 hover:text-white"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              {!reduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d6ff00] opacity-50" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d6ff00]" />
            </span>

            <span className="whitespace-nowrap">
              Strategy, Design, Development
            </span>

            <MoveUpRight
              size={12}
              className="shrink-0 text-[#d6ff00] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Headline and message */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-1 flex-col pt-12"
        >
          <motion.div
            variants={reveal}
            className="flex items-start justify-between gap-3"
          >
            <h1 className="min-w-0 text-[clamp(3.65rem,16.8vw,5.25rem)] font-bold leading-[0.82] tracking-[-0.085em]">
              Digital
              <br />
              agency
            </h1>

            <span className="mt-1 shrink-0 rounded-lg border border-white/45 px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-white/80">
              Pro
            </span>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-6 overflow-hidden"
          >
            <h2 className="whitespace-nowrap text-[clamp(4.15rem,18.8vw,6.7rem)] font-bold leading-[0.82] tracking-[-0.09em] text-[#d6ff00]">
              <TypingText reduceMotion={reduceMotion} />
            </h2>
          </motion.div>

          <motion.div variants={reveal} className="mt-7">
            <p className="max-w-[390px] text-[13px] font-normal leading-[1.85] text-white/60">
              With every project, we bring{" "}
              <span className="font-medium text-white">
                creativity, strategy, and technology
              </span>{" "}
              together to solve problems and create digital experiences that{" "}
              <span className="font-medium text-[#d6ff00]">
                move businesses forward.
              </span>
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div variants={reveal} className="mt-7">
            <Link
              href="/contact"
              className="group flex min-h-[54px] w-full items-center justify-between border-b border-white/20 px-1 py-3 text-[13px] font-semibold transition-colors duration-300 hover:border-[#d6ff00]/60"
            >
              <span>Let&apos;s work together</span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6ff00] text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </motion.div>

          {/* Supporting brand statement */}
          <motion.div
            variants={reveal}
            className="mt-8 flex items-center gap-3"
          >
            <span className="h-px w-8 shrink-0 bg-[#d6ff00]/70" />

            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/45">
              Thoughtful ideas. Meaningful digital experiences.
            </p>
          </motion.div>

          {/* Creative card replaces the empty hello area */}
          <CreativeCard reduceMotion={reduceMotion} />

          {/* Explore footer */}
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.35,
              ease,
            }}
            className="mt-auto flex items-end justify-between gap-4 pt-8"
          >
            <a
              href="#about"
              className="group inline-flex min-h-10 items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-[#d6ff00]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#d6ff00]/60 group-hover:bg-[#d6ff00]/10">
                <ArrowDown
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </span>

              Explore
            </a>

            <span className="pb-3 text-[9px] uppercase tracking-[0.18em] text-white/30">
              Scroll to discover
            </span>
          </motion.div>
        </motion.div>

        {/* Animated accent line */}
        <div className="relative mt-5 h-px w-full overflow-hidden bg-white/10">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#d6ff00] to-transparent"
            animate={
              reduceMotion
                ? undefined
                : { x: ["-100%", "400%"] }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </section>
  );
}
