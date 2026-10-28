
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { TeamMember } from "@/data/teamMembers";

type TeamCardProps = {
  member: TeamMember;
};

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Link
        href={`/team/${member.slug}`}
        aria-label={`View ${member.name}'s portfolio`}
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900">
          <motion.img
            src={member.image}
            alt={member.name}
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-neutral-300">
                  {member.role}
                </p>
              </div>

              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                ↗
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
