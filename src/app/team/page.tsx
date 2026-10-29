"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
  Users,
} from "lucide-react";

import TeamCard from "@/components/team/TeamCard";
import { teamMembers } from "@/data/teamMembers";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TeamPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0D0A] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* Background effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#D7FF19]/[0.07] blur-[120px]" />

          <div className="absolute -bottom-40 -left-32 h-[350px] w-[350px] rounded-full bg-[#D7FF19]/[0.04] blur-[100px]" />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40">
          <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Hero content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                ease,
              }}
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#D7FF19] shadow-[0_0_12px_#D7FF19]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
                  The People Behind Our Work
                </span>
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[84px]">
                Meet the minds
                <br />
                behind the
                <span className="text-[#D7FF19]"> magic.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/50 sm:text-lg sm:leading-9">
                Meet the people who turn ambitious ideas into
                meaningful digital experiences. Different
                perspectives, shared ambition, and a passion
                for doing great work.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="#our-team"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#D7FF19] px-6 py-3.5 text-sm font-semibold text-[#0B0D0A] transition-all duration-300 hover:bg-[#BDEB00] hover:shadow-[0_0_30px_rgba(215,255,25,0.15)]"
                >
                  Meet the Team
                  <ArrowDownRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/75 transition-all duration-300 hover:border-[#D7FF19]/50 hover:text-[#D7FF19]"
                >
                  Work With Us
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.9,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease,
              }}
              className="relative mx-auto w-full max-w-md lg:ml-auto"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#141711] p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                      ONE TEAM
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                      Shared vision.
                      <br />
                      <span className="text-[#D7FF19]">
                        Better together.
                      </span>
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D7FF19] text-[#0B0D0A]">
                    <Users size={24} />
                  </div>
                </div>

                <div className="relative mt-8 flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0B0D0A] sm:h-52">
                  <div className="absolute h-44 w-44 rounded-full border border-[#D7FF19]/10 sm:h-52 sm:w-52" />

                  <div className="absolute h-32 w-32 rounded-full border border-[#D7FF19]/15" />

                  <div className="absolute h-20 w-20 rounded-full border border-[#D7FF19]/20" />

                  <motion.div
                    animate={
                      shouldReduceMotion ? undefined : { rotate: 360 }
                    }
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-44 w-44 sm:h-52 sm:w-52"
                  >
                    <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#D7FF19] shadow-[0_0_14px_#D7FF19]" />

                    <span className="absolute bottom-5 right-3 h-2 w-2 rounded-full bg-white/60" />
                  </motion.div>

                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { y: [0, -6, 0] }
                    }
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#D7FF19] text-[#0B0D0A] shadow-[0_0_55px_rgba(215,255,25,0.12)] sm:h-24 sm:w-24"
                  >
                    <Sparkles size={36} strokeWidth={1.5} />
                  </motion.div>

                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-white/65 sm:left-5 sm:top-5">
                    Creativity
                  </span>

                  <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-white/65 sm:bottom-5 sm:right-5">
                    Collaboration
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-sm font-semibold">
                      Built on collaboration
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Every perspective matters.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D7FF19]/25 text-[#D7FF19]">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-[#D7FF19]/10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        id="our-team"
        className="scroll-mt-20 bg-[#10120E] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease,
            }}
            className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D7FF19]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D7FF19]" />
                Meet Our People
              </p>

              <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl md:text-5xl">
                The people who make
                <span className="text-white/40"> it happen.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
              Great digital experiences come from people who
              care about the details, challenge assumptions,
              and bring ideas to life.
            </p>
          </motion.div>

          {/* Team cards */}
          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={member.slug}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
              <Users
                size={32}
                className="mx-auto text-[#D7FF19]"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Our team is coming soon.
              </h3>

              <p className="mt-2 text-sm text-white/45">
                Check back soon to meet the people behind our work.
              </p>
            </div>
          )}

          {/* Bottom note */}
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center">
            <p>GOOD PEOPLE. THOUGHTFUL WORK. SHARED GROWTH.</p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 self-start text-white/70 transition-colors hover:text-[#D7FF19] sm:self-auto"
            >
              Have a project in mind?
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B0D0A] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease,
            }}
            className="relative overflow-hidden rounded-[28px] bg-[#D7FF19] px-7 py-12 sm:px-12 sm:py-14 lg:px-16 lg:py-16"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-black/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-12 h-52 w-52 rounded-full border border-black/10"
            />

            <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-black/55">
                  Let&apos;s Create Something Meaningful
                </p>

                <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#0B0D0A] sm:text-5xl lg:text-6xl">
                  Great work starts
                  <br />
                  with great people.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-black/65 sm:text-base">
                  Have an idea, a challenge, or a project in mind?
                  We would love to hear what you are working on.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#0B0D0A] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#25291F] hover:shadow-xl lg:self-auto"
              >
                Let&apos;s Talk
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}