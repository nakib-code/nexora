
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

import type { TeamMember } from "@/data/teamMembers";

type TeamHeroProps = {
  member: TeamMember;
};

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function TeamMemberHero({ member }: TeamHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      data-sidebar-theme="dark"
      className="section-with-left-nav relative isolate overflow-hidden bg-[#050505] text-white"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-40 top-[5%] h-[450px] w-[450px] rounded-full bg-[#D6FF09]/[0.045] blur-[120px]" />

        <div className="absolute -left-40 bottom-[-100px] h-[400px] w-[400px] rounded-full bg-[#854fee]/[0.06] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.16)_0.7px,transparent_0.7px)] opacity-[0.05] [background-size:26px_26px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-20 pt-8 sm:px-8 sm:pb-24 sm:pt-10 lg:px-14 lg:pb-32 lg:pt-12 xl:px-20">

        {/* BACK NAVIGATION */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
        >
          <Link
            href="/#team"
            className="group inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 transition-colors duration-300 hover:text-[#D6FF09] sm:text-[10px]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#D6FF09]/40 group-hover:bg-[#D6FF09] group-hover:text-black">
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </span>

            Back to Team
          </Link>
        </motion.div>

        {/* HERO CONTENT */}
        <div className="mt-12 grid items-center gap-12 sm:mt-16 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={containerVariants}
            className="order-2 min-w-0 md:order-1"
          >
            {/* EYEBROW */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#D6FF09] sm:text-[10px] sm:tracking-[0.25em]">
                <span className="h-px w-9 bg-[#D6FF09]" />

                The Team

                <span className="text-white/25">/</span>

                Nexora Digital
              </div>
            </motion.div>

            {/* NAME */}
            <motion.h1
              variants={itemVariants}
              className="mt-7 break-words text-[clamp(3.2rem,7vw,7rem)] font-bold leading-[0.9] tracking-[-0.075em] text-white sm:mt-8"
            >
              {member.name}
              <span className="text-[#D6FF09]">.</span>
            </motion.h1>

            {/* ROLE */}
            <motion.div variants={itemVariants} className="mt-7 sm:mt-9">
              <p className="text-xl font-semibold tracking-tight text-[#D6FF09] sm:text-2xl">
                {member.role}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="h-px w-7 bg-white/25" />

                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 sm:text-[10px] sm:tracking-[0.2em]">
                  {member.specialty}
                </p>
              </div>
            </motion.div>

            {/* DIVIDER */}
            <motion.div
              variants={itemVariants}
              className="my-7 h-px w-full max-w-[340px] bg-gradient-to-r from-white/15 via-white/5 to-transparent sm:my-9"
            />

            {/* INTRO */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8"
            >
              {member.intro}
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-5 sm:mt-11"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D6FF09] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D6FF09]" />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45 sm:text-[10px]">
                  Nexora Team Member
                </span>
              </div>

              <Link
                href="#skills"
                className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/65 transition-colors duration-300 hover:text-[#D6FF09]"
              >
                Explore Profile

                <MoveUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 35,
                    scale: 0.95,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.15,
              ease,
            }}
            className="order-1 flex min-w-0 justify-center md:order-2 md:justify-end"
          >
            <div className="relative w-full max-w-[350px] sm:max-w-[420px] lg:max-w-[470px]">

              {/* OUTER BORDER */}
              <div
                aria-hidden="true"
                className="absolute -right-2 -top-2 h-full w-full rounded-[24px] border border-[#D6FF09]/20 sm:-right-4 sm:-top-4 sm:rounded-[30px]"
              />

              {/* IMAGE CARD */}
              <div className="group relative aspect-[0.82] overflow-hidden rounded-[22px] border border-white/10 bg-[#0c0b10] shadow-[0_25px_80px_rgba(0,0,0,0.45)] sm:rounded-[28px]">

                {/* PROFILE IMAGE */}
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  priority
                  sizes="(max-width: 767px) 90vw, (max-width: 1023px) 420px, 470px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* IMAGE OVERLAY */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#854fee]/10 via-transparent to-transparent" />

                {/* TOP NUMBER / BRAND */}
                <div className="absolute left-5 top-5 z-20 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 sm:left-6 sm:top-6">
                  <span className="h-px w-6 bg-[#D6FF09]" />

                  Nexora Digital
                </div>

                {/* TOP ICON */}
                <div
                  aria-hidden="true"
                  className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/70 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-[#D6FF09]/70 group-hover:bg-[#D6FF09] group-hover:text-black sm:right-6 sm:top-6"
                >
                  <ArrowUpRight size={17} />
                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7 lg:p-8">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D6FF09] shadow-[0_0_12px_rgba(214,255,9,0.9)]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D6FF09]">
                      Meet Our Team
                    </span>
                  </div>

                  <h2 className="mt-3 break-words text-2xl font-bold leading-tight tracking-[-0.045em] text-white sm:text-3xl lg:text-4xl">
                    {member.name}
                  </h2>

                  <p className="mt-2 text-xs text-white/55 sm:text-sm">
                    {member.role}
                  </p>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-white/20 to-transparent" />

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="truncate text-[8px] font-bold uppercase tracking-[0.16em] text-white/40 sm:text-[9px]">
                      {member.specialty}
                    </span>
                  </div>
                </div>
              </div>

              {/* DECORATIVE ACCENT */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-10 w-10 rounded-full border border-[#854fee]/30 bg-[#854fee]/10 blur-[1px] sm:-bottom-4 sm:-left-4 sm:h-12 sm:w-12"
              />

              <div
                aria-hidden="true"
                className="absolute -right-3 top-1/3 h-16 w-px bg-gradient-to-b from-transparent via-[#D6FF09]/70 to-transparent sm:-right-5"
              />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM INFORMATION */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:pt-8 lg:mt-28">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6FF09] shadow-[0_0_10px_rgba(214,255,9,0.8)]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/35 sm:text-[9px]">
              Different skills. One direction.
            </span>
          </div>

          <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/25 sm:text-[9px]">
            Nexora Digital / Team Profile
          </span>
        </div>
      </div>
    </section>
  );
}
