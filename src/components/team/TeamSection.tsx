"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  motion,
  useAnimationControls,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { ArrowUpRight } from "lucide-react";
import { SiGithub, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import { teamMembers } from "@/data/teamMembers";
import type { TeamMember } from "@/data/teamMembers";

/* =========================================================
   MOTION VARIANTS
========================================================= */

const headerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* =========================================================
   TEAM CARD
========================================================= */

function TeamCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const router = useRouter();
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();

  const cardRef = useRef<HTMLDivElement | null>(null);

  /* ---- 3D TILT (motion values, no GSAP) ---- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springCfg = { stiffness: 220, damping: 22, mass: 0.6 };
  const smoothX = useSpring(mouseX, springCfg);
  const smoothY = useSpring(mouseY, springCfg);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ---- CLICK BOUNCE + NAVIGATE ---- */
  const handleCardClick = async () => {
    if (reduceMotion) {
      router.push(`/team/${member.id}`);
      return;
    }

    await controls.start({
      y: -10,
      scale: 1.02,
      rotate: index % 2 === 0 ? -0.6 : 0.6,
      transition: { duration: 0.16, ease: "easeOut" },
    });

    await controls.start({
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.22, ease: "easeInOut" },
    });

    router.push(`/team/${member.id}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick();
    }
  };

  /* ---- PER-CARD ENTRANCE: RIGHT → LEFT ---- */
  const cardEntrance = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 90,
      y: reduceMotion ? 0 : 40,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={cardEntrance}
      style={{ perspective: 1200 }}
    >
      <motion.article
        ref={cardRef}
        animate={controls}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        tabIndex={0}
        role="link"
        aria-label={`View ${member.name}'s portfolio`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        className="
          group
          relative
          flex
          h-full
          cursor-pointer
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-black/[0.08]
          bg-white
          shadow-[0_20px_70px_rgba(23,21,27,0.07)]
          outline-none
          transition-all
          duration-500
          hover:border-[#854fee]/35
          hover:shadow-[0_30px_90px_rgba(133,79,238,0.18)]
          focus-visible:ring-2
          focus-visible:ring-[#854fee]/50
          focus-visible:ring-offset-4
          focus-visible:ring-offset-[#f4f3f0]
        "
      >
        {/* IMAGE */}
        <div className="relative aspect-[0.82] overflow-hidden bg-[#17151b]">
          <motion.div
            className="absolute inset-[-3%]"
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={member.image}
              alt={`${member.name} — ${member.role}`}
              fill
              priority={index < 2}
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 50vw,
                25vw
              "
              className="object-cover object-center"
            />
          </motion.div>

          {/* Dark gradient stays — the photo is dark, text overlay needs it */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

          {/* NUMBER */}
          <div className="absolute left-5 top-5 z-20 flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] text-white/55">
            <span className="h-px w-6 bg-[#d6ff00]" />
            {member.number}
          </div>

          {/* ARROW */}
          <div
            aria-hidden="true"
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/30
              text-white/60
              backdrop-blur-md
              transition-all
              duration-500
              group-hover:rotate-45
              group-hover:border-[#d6ff00]/70
              group-hover:bg-[#d6ff00]
              group-hover:text-black
            "
          >
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </div>

          {/* ROLE + NAME */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d6ff00] shadow-[0_0_12px_rgba(214,255,0,0.9)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#d6ff00] drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] sm:text-[11px]">
                {member.role}
              </span>
            </div>

            <h3 className="mt-2 text-[1.7rem] font-bold leading-[0.9] tracking-[-0.055em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.4)] sm:text-[1.9rem] lg:text-[1.65rem] xl:text-[1.9rem]">
              {member.name}
            </h3>

            <div className="mt-3 flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white/55">
              <span className="h-px w-5 bg-white/25" />
              {member.specialty}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5">
          <div className="flex items-center gap-2">
            {member.whatsapp && (
              <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} WhatsApp`}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white text-black/45 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
              >
                <SiWhatsapp size={15} />
              </a>
            )}

            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} GitHub`}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white text-black/45 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black/20"
              >
                <SiGithub size={15} />
              </a>
            )}

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} LinkedIn`}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white text-black/45 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/30"
              >
                <FaLinkedin size={15} />
              </a>
            )}
          </div>

          <div className="flex items-center gap-2 text-right">
            <span className="h-1 w-1 rounded-full bg-[#854fee]" />
            <span className="max-w-[130px] truncate text-[8px] font-bold uppercase tracking-[0.13em] text-black/35">
              {member.specialty}
            </span>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

/* =========================================================
   MAIN TEAM SECTION
========================================================= */

export default function TeamSection() {
  return (
    <section
      id="team"
      data-sidebar-theme="light"
      className="section-with-left-nav relative isolate scroll-mt-24 overflow-hidden bg-[#f4f3f0] text-[#17151b]"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-40 top-[8%] h-[520px] w-[520px] rounded-full bg-[#854fee]/[0.08] blur-[120px]" />
        <div className="absolute -left-40 bottom-[-100px] h-[420px] w-[420px] rounded-full bg-[#d6ff00]/[0.10] blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(23,21,27,0.06)_0.7px,transparent_0.7px)] opacity-40 [background-size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-[#f4f3f0] to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36 xl:px-20">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerContainer}
          className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-20"
        >
          <div>
            <motion.div
              variants={headerItem}
              className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#854fee] sm:text-[11px]"
            >
              <span className="h-px w-10 bg-[#854fee]" />
              The Team
            </motion.div>

            <motion.h2
              variants={headerItem}
              className="mt-6 max-w-[900px] text-[clamp(3.2rem,8vw,7.8rem)] font-bold leading-[0.87] tracking-[-0.075em] text-[#17151b]"
            >
              Small team.
              <br />
              <span className="text-[#854fee]">Big thinking.</span>
            </motion.h2>
          </div>

          <motion.div variants={headerItem}>
            <p className="max-w-md text-sm leading-7 text-black/50 sm:text-base sm:leading-8">
              Nexora Digital brings together strategy, design,
              development and creative execution under one roof.
              Different skills, one shared standard.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-black/40">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6ff00] shadow-[0_0_10px_rgba(214,255,0,0.8)]" />
              Built around collaboration
            </div>
          </motion.div>
        </motion.div>

        {/* TEAM CARDS — every card slides in from the right */}
        <div className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* BOTTOM INFO */}
        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#854fee] shadow-[0_0_10px_rgba(133,79,238,0.7)]" />
            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/35 sm:text-[9px]">
              Four minds. One direction.
            </span>
          </div>
          <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-black/25 sm:text-[9px]">
            Nexora Digital / Team
          </span>
        </div>

        {/* MANIFESTO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerItem}
          className="mt-20 border-t border-black/[0.08] pt-8 sm:mt-28 sm:pt-10 lg:mt-36"
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#854fee]">
                One team. One standard.
              </p>

              <h3 className="mt-4 max-w-4xl text-[clamp(2.2rem,4.5vw,4.8rem)] font-bold leading-[0.95] tracking-[-0.065em] text-[#17151b]">
                Different skills.
                <br />
                <span className="text-black/25">One direction.</span>
              </h3>
            </div>

            <p className="max-w-sm text-xs leading-6 text-black/40 sm:text-right">
              Strategy, design, technology and creativity working
              together to create digital experiences that actually
              move businesses forward.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}