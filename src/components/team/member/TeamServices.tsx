
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Layout,
  Server,
  Code2,
  Workflow,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

type TeamServicesProps = {
  member: TeamMember;
};

// Icons are only for visual presentation.
// Service data comes directly from member.services.
const icons = [Layout, Server, Code2, Workflow];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function TeamServices({ member }: TeamServicesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      data-sidebar-theme="dark"
      className="section-with-left-nav relative isolate overflow-hidden bg-[#050505] text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#854fee]/15 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D6FF09]/[0.06] blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-32 xl:px-20">
        {/* Section heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6FF09]">
              <Sparkles size={15} />
              What I Offer
            </p>

            <h2 className="text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.065em]">
              Services I
              <span className="text-white/35"> Provide.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
              Explore the services I offer to build modern,
              functional, and scalable digital solutions.
            </p>
          </div>

          {/* Service count */}
          <div className="flex w-fit shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D6FF09] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D6FF09]" />
            </span>

            <span className="text-sm font-medium text-white/55">
              <span className="font-semibold text-[#D6FF09]">
                {member.services.length}
              </span>{" "}
              Services Available
            </span>
          </div>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {member.services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={`${service}-${index}`}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -7 }
                }
                className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-[#D6FF09]/30 hover:bg-white/[0.045] sm:p-8"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-48 w-48 rounded-full bg-[#854fee]/0 blur-[80px] transition-colors duration-500 group-hover:bg-[#854fee]/20" />

                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D6FF09]/15 bg-[#D6FF09]/[0.06] text-[#D6FF09] transition-all duration-300 group-hover:border-[#D6FF09]/30 group-hover:bg-[#D6FF09]/10">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-semibold tracking-[0.2em] text-white/25 transition-colors group-hover:text-[#D6FF09]/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Service name */}
                <h3 className="mt-8 text-lg font-semibold tracking-tight text-white/85 transition-colors duration-300 group-hover:text-[#D6FF09] sm:text-xl">
                  {service}
                </h3>

                {/* Bottom row */}
                <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span className="text-xs font-medium text-white/35">
                    {member.role}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#D6FF09]/30 group-hover:bg-[#D6FF09] group-hover:text-[#050505]">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* Bottom hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D6FF09] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom information */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-1 w-10 rounded-full bg-[#D6FF09]" />

            <p className="text-xs font-medium text-white/35">
              Turning ideas into meaningful digital experiences.
            </p>
          </div>

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
            Nexora Digital / Services
          </p>
        </div>
      </div>
    </section>
  );
}
