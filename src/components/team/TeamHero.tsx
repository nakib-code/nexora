
"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";

export default function TeamHero({
  member,
}: {
  member: TeamMember;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-neutral-400"
        >
          {member.role} · {member.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 break-words text-5xl font-semibold tracking-tight sm:text-7xl lg:text-9xl"
        >
          {member.name}
          <span className="text-neutral-600">.</span>
        </motion.h1>

        <div className="mt-10 grid items-end gap-8 md:grid-cols-[1fr_1.2fr] lg:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-md"
          >
            <p className="text-lg leading-8 text-neutral-300">
              {member.shortBio}
            </p>

            <a
              href={`mailto:${member.email}`}
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
            >
              Let's Talk <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="overflow-hidden rounded-2xl bg-neutral-900"
          >
            <img
              src={member.image}
              alt={member.name}
              className="max-h-[650px] w-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
