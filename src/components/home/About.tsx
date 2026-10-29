
"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import { principles, processSteps } from "@/data/About";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  duration = 0.75,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  const variants = {
    up: { y: 35, x: 0, scale: 1, filter: "blur(0px)" },
    left: { y: 0, x: -45, scale: 1, filter: "blur(0px)" },
    right: { y: 0, x: 45, scale: 1, filter: "blur(0px)" },
    scale: { y: 0, x: 0, scale: 0.92, filter: "blur(0px)" },
    blur: { y: 20, x: 0, scale: 0.98, filter: "blur(8px)" },
  };

  const initial = variants[variant];

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              ...initial,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}

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
      className="section-with-left-nav relative isolate scroll-mt-24 overflow-hidden bg-[#050505] text-white"
    >
      {/* ANIMATED BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute -left-40 top-[10%] h-[340px] w-[340px] rounded-full bg-[#D6FF09]/[0.05] blur-[120px] sm:h-[520px] sm:w-[520px]"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 35, 0],
                  y: [0, -25, 0],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-40 top-[42%] h-[320px] w-[320px] rounded-full bg-[#D6FF09]/[0.035] blur-[110px] sm:h-[480px] sm:w-[480px]"
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
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_0.7px,transparent_0.7px)] opacity-[0.055] [background-size:25px_25px] sm:[background-size:28px_28px]" />

        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36 xl:px-20">
        {/* INTRO */}
        <Reveal variant="blur">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6FF09] sm:text-xs">
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : { opacity: [1, 0.45, 1], scale: [1, 1.3, 1] }
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#D6FF09]"
            />
            About Nexora Digital
          </div>
        </Reveal>

        <div className="mt-5 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-20">
          <Reveal variant="left" delay={0.08}>
            <h2 className="max-w-[1000px] text-[clamp(3.1rem,9vw,8rem)] font-bold leading-[0.88] tracking-[-0.075em]">
              We build digital
              <br />
              <span className="text-[#D6FF09]">that moves.</span>
            </h2>
          </Reveal>

          <Reveal variant="right" delay={0.15}>
            <div className="max-w-xl lg:pb-2">
              <p className="text-sm font-medium leading-7 text-white/60 sm:text-base sm:leading-8">
                Nexora Digital is a creative digital agency bringing
                strategy, advertising, design, technology, and content
                together under one roof.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                We help businesses turn attention into action by building
                digital experiences and growth systems that are clear,
                useful, measurable, and built to perform.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 border-b border-white/20 pb-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#D6FF09] hover:text-[#D6FF09] sm:text-sm"
              >
                Start a conversation
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* POSITIONING STRIP */}
        <Reveal variant="up" delay={0.1}>
          <div className="group/position relative isolate mt-16 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-[#D6FF09]/40 hover:bg-[#D6FF09]/[0.025] hover:shadow-[0_15px_45px_rgba(214,255,9,0.07)] sm:mt-20 sm:rounded-[28px] lg:mt-24">
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 -z-10 h-44 w-44 rounded-full bg-[#D6FF09]/10 blur-[65px]"
              animate={
                reduceMotion ? undefined : { scale: [1, 1.3, 1] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10 grid gap-5 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Our philosophy
                </p>

                <p className="mt-2 max-w-2xl text-base font-semibold leading-7 tracking-[-0.02em] text-white/80 sm:text-lg">
                  Strategy, creative, and technology. One connected
                  digital system.
                </p>
              </div>

              <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                <span className="h-px w-8 bg-[#D6FF09]" />
                Built around your goals
              </div>
            </div>
          </div>
        </Reveal>

        {/* VISUAL STORY */}
        <div className="mt-24 grid gap-5 sm:mt-32 lg:mt-40 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <Reveal variant="left">
            <div className="group/visual relative isolate min-h-[390px] overflow-hidden rounded-[26px] border border-white/10 bg-[#0c0b10] transition-all duration-500 hover:border-[#D6FF09]/40 hover:shadow-[0_20px_60px_rgba(214,255,9,0.08)] sm:min-h-[480px] sm:rounded-[32px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 z-0 h-80 w-80 rounded-full bg-[#D6FF09]/10 blur-[100px] transition-all duration-700 group-hover/visual:scale-125 group-hover/visual:bg-[#D6FF09]/20"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-24 z-0 h-72 w-72 rounded-full bg-[#D6FF09]/[0.06] blur-[100px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]"
              />

              <div className="absolute inset-0 z-10 flex items-center justify-center p-5 sm:p-8">
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, scale: 0.85, rotate: -6 }
                  }
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.9,
                    ease,
                  }}
                  className="group/system relative h-[205px] w-[205px] rounded-[26px] border border-white/15 bg-white/[0.045] p-5 shadow-[0_35px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-500 hover:border-[#D6FF09]/40 hover:bg-white/[0.07] sm:h-[255px] sm:w-[255px] sm:rounded-[30px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                      Nexora System
                    </span>

                    <motion.span
                      animate={
                        reduceMotion
                          ? undefined
                          : { scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-2 w-2 rounded-full bg-[#D6FF09]"
                    />
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="h-2 w-24 rounded-full bg-white/15" />

                    <motion.div
                      animate={
                        reduceMotion
                          ? undefined
                          : { width: ["55%", "72%", "55%"] }
                      }
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-3 rounded-full bg-[#D6FF09]/80"
                    />

                    <div className="h-2 w-32 rounded-full bg-white/10" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((item) => (
                      <motion.div
                        key={item}
                        animate={
                          reduceMotion
                            ? undefined
                            : { y: [0, item === 1 ? -5 : 4, 0] }
                        }
                        transition={{
                          duration: 2.5,
                          delay: item * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`h-12 rounded-xl border ${
                          item === 1
                            ? "border-[#D6FF09]/25 bg-[#D6FF09]/[0.07]"
                            : "border-white/10 bg-white/[0.035]"
                        } sm:h-14`}
                      />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.2,
                    duration: 0.65,
                    ease,
                  }}
                  className="absolute left-4 top-7 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/60 backdrop-blur-md sm:left-8 sm:top-9"
                >
                  Strategy
                </motion.div>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.35,
                    duration: 0.65,
                    ease,
                  }}
                  className="absolute right-4 top-[42%] rounded-full border border-[#D6FF09]/25 bg-[#D6FF09]/[0.07] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#D6FF09] backdrop-blur-md sm:right-8"
                >
                  Creative
                </motion.div>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: reduceMotion ? 0 : 0.5,
                    duration: 0.65,
                    ease,
                  }}
                  className="absolute bottom-[76px] left-4 rounded-full border border-[#D6FF09]/20 bg-[#D6FF09]/[0.06] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#D6FF09]/90 backdrop-blur-md sm:bottom-24 sm:left-8"
                >
                  Technology
                </motion.div>
              </div>

              <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between border-t border-white/10 pt-3 sm:bottom-6 sm:left-7 sm:right-7 sm:pt-4">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                  One connected system
                </span>

                <ArrowDownRight
                  size={17}
                  className="text-[#D6FF09] transition-transform duration-300 group-hover/visual:translate-x-1 group-hover/visual:translate-y-1"
                />
              </div>
            </div>
          </Reveal>

          {/* PHILOSOPHY + COMPACT CARDS */}
          <Reveal variant="right" delay={0.1}>
            <div className="group/philosophy relative isolate flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-[#D6FF09]/35 hover:bg-white/[0.04] sm:rounded-[32px] sm:p-7 lg:p-9 xl:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 z-0 h-64 w-64 rounded-full bg-[#D6FF09]/[0.04] blur-[90px] transition-all duration-700 group-hover/philosophy:bg-[#D6FF09]/[0.12]"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D6FF09]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D6FF09]" />
                  Why Nexora
                </div>

                <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-[0.98] tracking-[-0.055em] sm:mt-5 sm:text-4xl lg:text-[2.65rem]">
                  We don&apos;t build digital
                  <span className="text-white/30">
                    {" "}
                    just to fill a screen.
                  </span>
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 sm:mt-5 sm:text-base sm:leading-8">
                  Good digital work should have a job to do. It should
                  communicate clearly, look considered, work beautifully,
                  and help a business move forward.
                </p>
              </div>

              {/* COMPACT PRINCIPLE CARDS */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: reduceMotion ? 0 : 0.1,
                      delayChildren: reduceMotion ? 0 : 0.1,
                    },
                  },
                }}
                className="relative z-10 mt-7 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:mt-8 sm:gap-3"
              >
                {principles.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: reduceMotion ? 0 : 22,
                          scale: reduceMotion ? 1 : 0.96,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        },
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.55,
                        ease,
                      }}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { y: -4, scale: 1.015 }
                      }
                      className="group/principle relative flex min-h-[145px] flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-3.5 text-white transition-colors duration-300 hover:border-[#B3D31E] hover:bg-[#B3D31E] hover:text-[#111111] sm:min-h-[155px] sm:rounded-2xl sm:p-4"
                    >
                      {/* Hover glow */}
                      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#B3D31E]/0 blur-2xl transition-all duration-500 group-hover/principle:bg-[#B3D31E]/0" />

                      <div className="relative flex items-center justify-between">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#B3D31E] transition-all duration-300 group-hover/principle:border-black/15 group-hover/principle:bg-black/10 group-hover/principle:text-[#111111] sm:h-9 sm:w-9">
                          <Icon size={16} />
                        </span>

                        <span className="text-[9px] font-bold tracking-[0.14em] text-white/30 transition-colors duration-300 group-hover/principle:text-black/55">
                          {item.number}
                        </span>
                      </div>

                      <div className="relative mt-3">
                        <h4 className="text-sm font-bold tracking-[-0.025em] text-white/90 transition-colors duration-300 group-hover/principle:text-[#111111] sm:text-base">
                          {item.title}
                        </h4>

                        <p className="mt-1.5 text-[11px] leading-[1.6] text-white/45 transition-colors duration-300 group-hover/principle:text-black/75 sm:text-xs sm:leading-5">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* PROCESS */}
        <div className="mt-24 sm:mt-32 lg:mt-40">
          <Reveal variant="up">
            <div className="border-b border-white/10 pb-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6FF09]">
                How we work
              </p>

              <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <h3 className="max-w-3xl text-3xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                  Think clearly.
                  <br />
                  <span className="text-white/30">
                    Build intentionally.
                  </span>
                </h3>

                <p className="max-w-sm text-xs leading-6 text-white/40 sm:text-sm">
                  Every project moves through a simple process designed to
                  keep ideas focused and execution sharp.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-5">
            {processSteps.map((item, index) => (
              <Reveal
                key={item.number}
                variant={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.06}
                duration={0.65}
              >
                <div className="group/process relative isolate grid gap-3 overflow-hidden border-b border-white/10 py-5 transition-all duration-500 hover:border-[#D6FF09]/45 sm:grid-cols-[70px_0.7fr_1.3fr] sm:items-center sm:gap-5 sm:py-7 lg:grid-cols-[100px_0.7fr_1.3fr] lg:gap-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#D6FF09]/0 via-[#D6FF09]/0 to-[#D6FF09]/0 transition-all duration-500 group-hover/process:from-[#D6FF09]/[0.05] group-hover/process:via-[#D6FF09]/[0.025] group-hover/process:to-[#D6FF09]/[0.015]"
                  />

                  <span className="relative z-10 text-[10px] font-bold tracking-[0.16em] text-[#D6FF09]">
                    {item.number}
                  </span>

                  <h4 className="relative z-10 text-xl font-bold tracking-[-0.04em] text-white/85 transition-colors duration-300 group-hover/process:text-[#D6FF09] sm:text-2xl">
                    {item.title}
                  </h4>

                  <p className="relative z-10 max-w-xl text-sm leading-7 text-white/40 transition-colors duration-300 group-hover/process:text-white/65 sm:justify-self-end">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* BIG STATEMENT */}
        <motion.div
          ref={statementRef}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 35, scale: 0.98 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
          className="group/statement relative isolate mt-24 overflow-hidden rounded-[26px] border border-white/10 bg-[#0c0b10] px-5 py-10 transition-all duration-500 hover:border-[#D6FF09]/35 hover:shadow-[0_20px_60px_rgba(214,255,9,0.07)] sm:mt-32 sm:rounded-[34px] sm:px-10 sm:py-16 lg:mt-40 lg:px-16 lg:py-24 xl:px-24"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 z-0 h-[320px] w-[320px] rounded-full bg-[#D6FF09]/10 blur-[115px]"
            animate={
              reduceMotion ? undefined : { scale: [1, 1.2, 1] }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-32 z-0 h-[330px] w-[330px] rounded-full bg-[#D6FF09]/[0.05] blur-[120px]"
          />

          <p className="relative z-10 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 sm:mb-7">
            What we believe
          </p>

          <p className="relative z-10 max-w-6xl text-[clamp(2rem,5.5vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.065em]">
            <span className="text-white/30">
              Good digital work gets attention.
            </span>{" "}
            <motion.span
              animate={
                reduceMotion
                  ? undefined
                  : {
                      color: statementInView
                        ? "#ffffff"
                        : "#383838",
                    }
              }
              transition={{ duration: 0.9, ease }}
            >
              Great digital work gives people a reason to act.
            </motion.span>
          </p>

          <div className="relative z-10 mt-8 flex items-center gap-3 sm:mt-10">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.3,
                ease,
              }}
              className="h-px bg-[#D6FF09]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D6FF09]">
              Nexora Digital
            </span>
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <Reveal variant="up" delay={0.08}>
          <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:mt-20 sm:flex-row sm:items-end sm:justify-between lg:mt-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                Ready when you are
              </p>

              <h3 className="mt-3 max-w-2xl text-2xl font-bold tracking-[-0.045em] sm:text-3xl">
                Have an idea worth building?
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/40">
                Let&apos;s turn your next idea into something meaningful.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-between gap-5 rounded-full bg-[#D6FF09] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.08em] !text-[#050505] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(214,255,9,0.2)] sm:px-6 sm:py-4"
            >
              Let&apos;s work together

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#050505] !text-[#D6FF09] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </Reveal>

        {/* SCROLL CUE */}
        <Reveal variant="scale" delay={0.1}>
          <div className="mt-12 flex items-center justify-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/30 sm:mt-16">
            <motion.span
              animate={
                reduceMotion ? undefined : { y: [0, 5, 0] }
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#D6FF09]/50 hover:bg-[#D6FF09]/10 hover:text-[#D6FF09]"
            >
              <ArrowDownRight size={13} />
            </motion.span>

            Meet the team next
          </div>
        </Reveal>
      </div>
    </section>
  );
}
