"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TeamHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
    data-sidebar-theme="dark"
    className="relative flex min-h-[720px] w-full items-center overflow-hidden bg-[#0B0D0A] text-white lg:min-h-[850px]">
      {/* Background Image */}
      <motion.div
        initial={shouldReduceMotion ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/team/team.jpeg')",
          }}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-black/30 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-24 pt-36 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#C5F467]" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#C5F467] sm:text-sm">
              The People Behind Nexora
            </span>
            <span className="h-px w-10 bg-[#C5F467]" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-[100px]"
          >
            Creative minds.
            <br />
            <span className="font-serif font-normal italic text-[#C5F467]">
              Collective vision.
            </span>
          </motion.h1>

          {/* Calligraphy Text */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="mt-7 font-serif text-4xl italic text-white/90 sm:text-5xl lg:text-6xl"
          >
            Different minds, one purpose.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
          >
            Behind every bold idea is a team of passionate thinkers,
            designers, and developers. Together, we turn ambitious ideas
            into meaningful digital experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#our-team"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C5F467] px-7 py-4 text-sm font-semibold text-[#10120E] transition-all duration-300 hover:bg-white"
            >
              Meet Our Team
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-[#C5F467] hover:text-[#C5F467]"
            >
              Work With Us
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Information */}
        <div className="mt-24 flex flex-col items-center justify-between gap-5 border-t border-white/20 pt-6 sm:flex-row">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
            Nexora Digital — Creative minds, meaningful impact
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C5F467]" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/70">
              Meet the people behind the work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}