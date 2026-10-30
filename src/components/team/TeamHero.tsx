
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

type TeamHeroProps = {
  member: TeamMember;
};

const textVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function TeamHero({ member }: TeamHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0f] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#854fee]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#854fee]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#team"
            className="group mb-14 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors duration-300 hover:text-[#d6ff00]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Team
          </Link>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="order-2 md:order-1"
          >
            {/* Eyebrow */}
            <motion.div variants={textVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#854fee]/25 bg-[#854fee]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b69aff]">
                <Sparkles size={14} />
                Nexora Digital / Our Team
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={textVariants}
              className="mt-8 break-words text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[84px]"
            >
              {member.name}
              <span className="text-[#854fee]">.</span>
            </motion.h1>

            {/* Role */}
            <motion.div variants={textVariants} className="mt-7">
              <p className="text-xl font-semibold text-[#d6ff00] sm:text-2xl">
                {member.role}
              </p>

              <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-white/40 sm:text-sm">
                {member.specialty}
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={textVariants}
              className="my-8 h-px w-24 bg-gradient-to-r from-[#854fee] to-transparent"
            />

            {/* Introduction */}
            <motion.p
              variants={textVariants}
              className="max-w-xl text-sm leading-8 text-white/55 sm:text-base"
            >
              {member.intro}
            </motion.p>

            {/* Bottom Info */}
            <motion.div
              variants={textVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#d6ff00]" />
                <span className="text-xs font-medium tracking-wide text-white/70">
                  Team Member
                </span>
              </div>

              <Link
                href="#about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-[#d6ff00]"
              >
                Explore Profile
                <MoveUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="order-1 md:order-2"
          >
            <div className="relative mx-auto w-full max-w-[440px]">

              {/* Decorative Background */}
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[30px] border border-[#854fee]/30 sm:-right-5 sm:-top-5" />

              {/* Image Container */}
              <div className="group relative aspect-[0.85] overflow-hidden rounded-[26px] border border-white/10 bg-[#17151b] shadow-2xl shadow-black/30">

                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />

                {/* Image Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b0f]/80 via-transparent to-transparent" />

                {/* Image Top Label */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 backdrop-blur-md">
                  <Sparkles size={13} className="text-[#d6ff00]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                    Nexora Digital
                  </span>
                </div>

                {/* Image Bottom Info */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                    Meet Our Team
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {member.name}
                  </h2>

                  <p className="mt-2 text-sm text-white/60">
                    {member.role}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#d6ff00]/50 group-hover:bg-[#854fee]">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Decorative Dot */}
              <div className="absolute -bottom-3 -left-3 h-12 w-12 rounded-full border border-[#854fee]/30 bg-[#854fee]/10 blur-[1px]" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 h-px origin-left bg-gradient-to-r from-white/15 via-white/5 to-transparent"
        />
      </div>
    </section>
  );
}
