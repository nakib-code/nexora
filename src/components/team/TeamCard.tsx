"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { TeamMember } from "@/data/teamMembers";

type TeamCardProps = {
  member: TeamMember;
  index?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function TeamCard({
  member,
  index = 0,
}: TeamCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      layout={!shouldReduceMotion}
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 24 }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : (index % 3) * 0.1,
        ease,
      }}
      whileHover={
        shouldReduceMotion ? undefined : { y: -7 }
      }
      className="group h-full"
    >
      <Link
        href={`/team/${member.slug}`}
        aria-label={`View ${member.name}'s portfolio`}
        className="block h-full rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF19] focus-visible:ring-offset-4 focus-visible:ring-offset-[#10120E]"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#181A15] transition-all duration-500 group-hover:border-[#D7FF19]/70 group-hover:bg-[#D7FF19]">
          {/* Member image */}
          <motion.img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-85"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/15 to-black/5 transition-opacity duration-500 group-hover:from-[#D7FF19] group-hover:via-[#D7FF19]/15 group-hover:to-transparent" />

          {/* Top label */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-5 sm:p-6">
            <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-colors duration-300 group-hover:border-black/10 group-hover:bg-black/[0.06] group-hover:text-black/70">
              Team Member
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-md transition-all duration-300 group-hover:border-black/10 group-hover:bg-black group-hover:text-[#D7FF19]">
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>

          {/* Member information */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="mb-3 h-px w-10 bg-[#D7FF19] transition-all duration-500 group-hover:w-16 group-hover:bg-black/40" />

            <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#0B0D0A] sm:text-2xl">
              {member.name}
            </h3>

            <div className="mt-2 flex items-end justify-between gap-3">
              <p className="text-sm text-white/70 transition-colors duration-300 group-hover:text-[#0B0D0A]/70">
                {member.role}
              </p>

              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45 transition-colors duration-300 group-hover:text-black/50">
                View Profile
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}