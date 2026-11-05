"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { principles } from "@/data/About";
import Reveal from "./Reveal";
import PrincipleCard from "./PrincipleCard";
import AboutBottom from "./AboutBottom";

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <>
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
                : { x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.08, 1] }
            }
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -right-40 top-[42%] h-[320px] w-[320px] rounded-full bg-[#D6FF09]/[0.035] blur-[110px] sm:h-[480px] sm:w-[480px]"
            animate={
              reduceMotion
                ? undefined
                : { x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }
            }
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
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
                  Nexora Digital is a creative digital agency bringing strategy,
                  advertising, design, technology, and content together under
                  one roof.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                  We help businesses turn attention into action by building
                  digital experiences and growth systems that are clear, useful,
                  measurable, and built to perform.
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
                animate={reduceMotion ? undefined : { scale: [1, 1.3, 1] }}
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
                    Strategy, creative, and technology. One connected digital
                    system.
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
            {/* LEFT — visual system */}
            <Reveal variant="left">
              <div className="group/visual relative isolate min-h-[390px] overflow-hidden rounded-[26px] border border-white/10 bg-[#0c0b10] transition-all duration-500 hover:border-[#D6FF09]/40 hover:shadow-[0_20px_60px_rgba(214,255,9,0.08)] sm:min-h-[480px] sm:rounded-[32px]">
                <div className="pointer-events-none absolute -right-24 -top-24 z-0 h-80 w-80 rounded-full bg-[#D6FF09]/10 blur-[100px] transition-all duration-700 group-hover/visual:scale-125 group-hover/visual:bg-[#D6FF09]/20" />
                <div className="pointer-events-none absolute -bottom-28 -left-24 z-0 h-72 w-72 rounded-full bg-[#D6FF09]/[0.06] blur-[100px]" />
                <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-10 flex items-center justify-center p-5 sm:p-8"
                >
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, scale: 0.85, rotate: -6 }
                    }
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: reduceMotion ? 0 : 0.9, ease }}
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
                        initial={{ width: "55%" }}
                        animate={
                          reduceMotion
                            ? { width: "55%" }
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

            {/* RIGHT — philosophy + principle cards */}
            <Reveal variant="right" delay={0.1}>
              <div className="group/philosophy relative isolate flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-[#D6FF09]/35 hover:bg-white/[0.04] sm:rounded-[32px] sm:p-7 lg:p-9 xl:p-10">
                <div className="pointer-events-none absolute -right-24 -top-24 z-0 h-64 w-64 rounded-full bg-[#D6FF09]/[0.04] blur-[90px] transition-all duration-700 group-hover/philosophy:bg-[#D6FF09]/[0.12]" />

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
                    communicate clearly, look considered, work beautifully, and
                    help a business move forward.
                  </p>
                </div>

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
                  {principles.map((item) => (
                    <PrincipleCard
                      key={item.number}
                      item={item}
                      reduceMotion={Boolean(reduceMotion)}
                    />
                  ))}
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <AboutBottom />
    </>
  );
}
