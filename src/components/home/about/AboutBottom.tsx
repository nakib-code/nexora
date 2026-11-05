"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { processSteps } from "@/data/About";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutBottom() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about-bottom"
      data-sidebar-theme="light"
      className="section-with-left-nav relative isolate scroll-mt-24 overflow-hidden bg-[#f4f3f0] text-[#17151b]"
    >
      {/* LIGHT BACKGROUND — one shared backdrop for the whole section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-[15%] h-[420px] w-[420px] rounded-full bg-[#D6FF09]/[0.12] blur-[120px]" />
        <div className="absolute -right-40 bottom-[-120px] h-[380px] w-[380px] rounded-full bg-[#B3D31E]/[0.08] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(23,21,27,0.06)_0.7px,transparent_0.7px)] opacity-40 [background-size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-[#f4f3f0] to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-28 xl:px-20">
        {/* PROCESS */}
        <Reveal variant="up">
          <div className="border-b border-black/10 pb-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#854fee]">
              How we work
            </p>

            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h3 className="max-w-3xl text-3xl font-bold leading-[0.98] tracking-[-0.055em] text-[#17151b] sm:text-4xl lg:text-5xl">
                Think clearly.
                <br />
                <span className="text-black/30">Build intentionally.</span>
              </h3>

              <p className="max-w-sm text-xs leading-6 text-black/50 sm:text-sm">
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
              <div className="group/process relative isolate grid gap-3 overflow-hidden border-b border-black/10 py-5 transition-all duration-500 hover:border-[#854fee]/40 sm:grid-cols-[80px_0.7fr_1.3fr] sm:items-center sm:gap-5 sm:py-7 lg:grid-cols-[100px_0.7fr_1.3fr] lg:gap-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#D6FF09]/0 via-[#D6FF09]/0 to-[#D6FF09]/0 transition-all duration-500 group-hover/process:from-[#D6FF09]/[0.18] group-hover/process:via-[#D6FF09]/[0.10] group-hover/process:to-[#D6FF09]/[0.05]"
                />

                <span className="relative z-10 text-[10px] font-bold tracking-[0.16em] text-[#854fee]">
                  {item.number}
                </span>

                <h4 className="relative z-10 text-xl font-bold tracking-[-0.04em] text-black/85 transition-colors duration-300 group-hover/process:text-[#17151b] sm:text-2xl">
                  {item.title}
                </h4>

                <p className="relative z-10 max-w-xl text-sm leading-7 text-black/50 transition-colors duration-300 group-hover/process:text-black/75 sm:justify-self-end">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* BIG STATEMENT — dark contrast card on light section */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease }}
          className="group/statement relative isolate mt-20 overflow-hidden rounded-[26px] border border-black/10 bg-[#0c0b10] px-5 py-10 text-white shadow-[0_20px_60px_rgba(23,21,27,0.10)] transition-all duration-500 hover:border-[#D6FF09]/35 hover:shadow-[0_30px_80px_rgba(214,255,9,0.15)] sm:mt-24 sm:rounded-[34px] sm:px-10 sm:py-16 lg:mt-28 lg:px-16 lg:py-24 xl:px-24"
        >
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 z-0 h-[320px] w-[320px] rounded-full bg-[#D6FF09]/10 blur-[115px]"
            animate={reduceMotion ? undefined : { scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="pointer-events-none absolute -bottom-36 -left-32 z-0 h-[330px] w-[330px] rounded-full bg-[#D6FF09]/[0.05] blur-[120px]" />

          <p className="relative z-10 mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 sm:mb-7">
            What we believe
          </p>

          <p className="relative z-10 max-w-6xl text-[clamp(2rem,5.5vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.065em]">
            <span className="text-white/30">
              Good digital work gets attention.
            </span>{" "}
            <span className="text-white">
              Great digital work gives people a reason to act.
            </span>
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

        {/* CTA BLOCK — moved to the bottom */}
        <Reveal variant="up" delay={0.08}>
          <div className="mt-20 flex flex-col gap-8 border-t border-black/10 pt-10 sm:mt-24 sm:flex-row sm:items-end sm:justify-between sm:pt-12 lg:mt-28">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                Ready when you are
              </p>

              <h3 className="mt-3 max-w-2xl text-3xl font-bold tracking-[-0.045em] text-[#17151b] sm:text-4xl lg:text-5xl">
                Have an idea worth building?
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-black/50 sm:text-base">
                Let&apos;s turn your next idea into something meaningful.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center justify-between gap-5 rounded-full bg-[#17151b] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#D6FF09] hover:text-[#050505] hover:shadow-[0_10px_30px_rgba(214,255,9,0.3)] sm:px-6 sm:py-4"
            >
              Let&apos;s work together

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D6FF09] text-[#050505] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#17151b] group-hover:text-[#D6FF09]">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}