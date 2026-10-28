"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

type TeamMember = {
  id: string;
  number: string;
  name: string;
  role: string;
  specialty: string;
  intro: string;
  image: string;
  whatsapp?: string;
  github?: string;
  linkedin?: string;
};

/* =========================================================
   TEAM DATA
========================================================= */

const teamMembers: TeamMember[] = [
  {
    id: "founder",
    number: "01",
    name: "Your Name",
    role: "Founder & Creative Lead",
    specialty: "Strategy / Development",
    intro:
      "Leading Nexora Digital with a focus on strategy, digital experiences, and building work that connects creative thinking with real business goals.",
    image: "/me.png",
    whatsapp: "https://wa.me/8801XXXXXXXXX",
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
  },
  {
    id: "developer",
    number: "02",
    name: "Team Member",
    role: "Full Stack Developer",
    specialty: "Web / Technology",
    intro:
      "Turning ideas into fast, responsive, and scalable digital experiences with clean development and thoughtful interaction.",
    image: "/me.png",
    whatsapp: "https://wa.me/8801XXXXXXXXX",
    github: "https://github.com/developerusername",
    linkedin: "https://www.linkedin.com/in/developerusername",
  },
  {
    id: "designer",
    number: "03",
    name: "Team Member",
    role: "UI/UX & Graphic Designer",
    specialty: "Design / Visual Identity",
    intro:
      "Creating visual systems and interfaces that make brands feel clear, distinctive, and easy to understand.",
    image: "/me.png",
    whatsapp: "https://wa.me/8801XXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/designerusername",
  },
  {
    id: "editor",
    number: "04",
    name: "Team Member",
    role: "Video Editor",
    specialty: "Motion / Content",
    intro:
      "Turning raw ideas into engaging visual stories through editing, motion, pacing, and creative direction.",
    image: "/me.png",
    whatsapp: "https://wa.me/8801XXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/editorusername",
  },
];

/* =========================================================
   INLINE ICONS
========================================================= */

function ArrowUpRightIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 7H17V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.2 3.8A10.1 10.1 0 0 0 13 1a10 10 0 0 0-8.6 15.1L3 22l6.1-1.6A10 10 0 0 0 23 12a10.1 10.1 0 0 0-2.8-8.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8.7 7.2c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.3 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.2.6 0l.7-.5c.2-.1.4-.1.6 0l1.8.8c.3.1.4.3.4.5v.6c0 .3 0 .5-.4.7-.4.2-1 .4-1.6.3-1-.2-2.2-.8-3.4-1.9-1.2-1.1-2-2.2-2.4-3.2-.3-.8-.2-1.5-.1-1.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7A11.3 11.3 0 0 0 8.4 22.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.2 1.2a10.8 10.8 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.2 3.5A2.3 2.3 0 1 1 .6 3.5a2.3 2.3 0 0 1 4.6 0ZM1 8h4.3v13H1V8Zm6.9 0h4.1v1.8h.1c.6-1.1 2-2.2 4.2-2.2 4.5 0 5.3 3 5.3 6.9V21h-4.3v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H7.9V8Z" />
    </svg>
  );
}

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

  const cardRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const image = imageRef.current;

    if (!card || !glow || !image) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 5;
    const rotateX = (y / rect.height - 0.5) * -5;

    gsap.to(card, {
      rotateX,
      rotateY,
      y: -7,
      duration: 0.35,
      ease: "power3.out",
      transformPerspective: 900,
      transformOrigin: "center center",
      overwrite: true,
    });

    gsap.to(image, {
      scale: 1.055,
      x: (x / rect.width - 0.5) * 8,
      y: (y / rect.height - 0.5) * 8,
      duration: 0.45,
      ease: "power3.out",
      overwrite: true,
    });

    gsap.to(glow, {
      opacity: 1,
      x: x - rect.width / 2,
      y: y - rect.height / 2,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const image = imageRef.current;

    if (!card || !glow || !image) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.55,
      ease: "power3.out",
      overwrite: true,
    });

    gsap.to(image, {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.55,
      ease: "power3.out",
      overwrite: true,
    });

    gsap.to(glow, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      overwrite: true,
    });
  };

  /* =======================================================
     CARD CLICK + NAVIGATION
  ======================================================= */

  const handleCardClick = () => {
    const card = cardRef.current;

    if (!card) return;

    gsap.killTweensOf(card);

    const timeline = gsap.timeline({
      onComplete: () => {
        router.push(`/team/${member.id}`);
      },
    });

    timeline
      .to(card, {
        y: -10,
        scale: 1.02,
        rotateZ: index % 2 === 0 ? -0.6 : 0.6,
        duration: 0.16,
        ease: "power3.out",
      })
      .to(card, {
        y: 0,
        scale: 1,
        rotateZ: 0,
        duration: 0.25,
        ease: "power2.out",
      });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick();
    }
  };

  return (
    <article
      ref={cardRef}
      data-team-card
      tabIndex={0}
      role="link"
      aria-label={`View ${member.name}'s portfolio`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        team-card
        group
        relative
        h-full
        cursor-pointer
        overflow-visible
        rounded-[27px]
        outline-none
        [transform-style:preserve-3d]
        will-change-transform
        focus-visible:ring-2
        focus-visible:ring-[#854fee]/50
        focus-visible:ring-offset-4
        focus-visible:ring-offset-[#f4f3f0]
      "
    >
      {/* ROTATING BORDER LIGHT */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-[2px]
          -z-20
          overflow-hidden
          rounded-[29px]
          opacity-70
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            inset-[-35%]
            rounded-[35%]
            bg-[conic-gradient(from_0deg,transparent_0deg,#854fee_70deg,transparent_125deg,transparent_180deg,#d6ff00_230deg,transparent_285deg,transparent_360deg)]
            blur-[1px]
            animate-spin
          "
          style={{ animationDuration: "5s" }}
        />

        <div
          className="
            absolute
            inset-[2px]
            rounded-[27px]
            bg-[#f4f3f0]
          "
        />
      </div>

      {/* SOFT AURA */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-4
          -z-30
          rounded-[35px]
          bg-[conic-gradient(from_180deg,#854fee,transparent_28%,#d6ff00,transparent_55%,#854fee)]
          opacity-20
          blur-[22px]
          animate-spin
          transition-opacity
          duration-500
          group-hover:opacity-40
        "
        style={{ animationDuration: "9s" }}
      />

      {/* MOUSE GLOW */}

      <div
        ref={glowRef}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-48
          w-48
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#854fee]/35
          opacity-0
          blur-[65px]
        "
      />

      {/* CARD BODY */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[26px]
          border
          border-black/[0.08]
          bg-white
          shadow-[0_20px_70px_rgba(23,21,27,0.07)]
          transition-shadow
          duration-500
          group-hover:shadow-[0_30px_90px_rgba(133,79,238,0.18)]
        "
      >
        {/* INNER BORDER */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-[1px]
            z-30
            rounded-[25px]
            border
            border-white/20
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* IMAGE */}

        <div className="relative aspect-[0.82] overflow-hidden bg-[#17151b]">
          <div
            ref={imageRef}
            className="absolute inset-[-3%] will-change-transform"
          >
            <Image
              src={member.image}
              alt={`${member.name} — ${member.role}`}
              fill
              priority={index === 0}
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 50vw,
                25vw
              "
              className="object-cover object-center"
            />
          </div>

          {/* DARK GRADIENT */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />

          {/* PURPLE GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              bg-[#854fee]/25
              blur-[75px]
              transition-all
              duration-700
              group-hover:bg-[#854fee]/50
            "
          />

          {/* LIME GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-52
              w-52
              rounded-full
              bg-[#d6ff00]/10
              blur-[70px]
              transition-all
              duration-700
              group-hover:bg-[#d6ff00]/25
            "
          />

          {/* NUMBER */}

          <div
            className="
              absolute
              left-5
              top-5
              z-20
              flex
              items-center
              gap-2
              text-[9px]
              font-bold
              tracking-[0.2em]
              text-white/55
            "
          >
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
              bg-black/20
              text-white/60
              backdrop-blur-md
              transition-all
              duration-500
              group-hover:border-[#d6ff00]/70
              group-hover:bg-[#d6ff00]
              group-hover:text-black
              group-hover:rotate-45
            "
          >
            <ArrowUpRightIcon size={16} />
          </div>

          {/* ROLE + NAME */}

          <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#d6ff00]
                  shadow-[0_0_12px_rgba(214,255,0,0.9)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.15em]
                  text-[#d6ff00]
                  drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]
                  sm:text-[11px]
                "
              >
                {member.role}
              </span>
            </div>

            <h3
              className="
                mt-2
                text-[1.7rem]
                font-bold
                leading-[0.9]
                tracking-[-0.055em]
                text-white
                drop-shadow-[0_3px_18px_rgba(0,0,0,0.4)]
                sm:text-[1.9rem]
                lg:text-[1.65rem]
                xl:text-[1.9rem]
              "
            >
              {member.name}
            </h3>

            <div
              className="
                mt-3
                flex
                items-center
                gap-2
                text-[8px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-white/55
              "
            >
              <span className="h-px w-5 bg-white/25" />
              {member.specialty}
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5">
          {/* SOCIALS */}

          <div className="flex items-center gap-2">
            {member.whatsapp && (
              <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} WhatsApp`}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-white
                  text-black/45
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#25D366]
                  hover:bg-[#25D366]
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#25D366]/40
                "
              >
                <WhatsAppIcon size={15} />
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
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-white
                  text-black/45
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-black/20
                "
              >
                <GitHubIcon size={15} />
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
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.08]
                  bg-white
                  text-black/45
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0A66C2]
                  hover:bg-[#0A66C2]
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#0A66C2]/30
                "
              >
                <LinkedInIcon size={15} />
              </a>
            )}
          </div>

          {/* SPECIALTY */}

          <div className="flex items-center gap-2 text-right">
            <span className="h-1 w-1 rounded-full bg-[#854fee]" />

            <span
              className="
                max-w-[130px]
                truncate
                text-[8px]
                font-bold
                uppercase
                tracking-[0.13em]
                text-black/30
              "
            >
              {member.specialty}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN TEAM SECTION
========================================================= */

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const eyebrow = section.querySelector("[data-team-eyebrow]");
      const heading = section.querySelector("[data-team-heading]");
      const description = section.querySelector("[data-team-description]");
      const cards = section.querySelectorAll("[data-team-card]");
      const manifesto = section.querySelector("[data-team-manifesto]");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      timeline
        .from(eyebrow, {
          y: 18,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(
          heading,
          {
            y: 45,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .from(
          description,
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          cards,
          {
            y: 50,
            opacity: 0,
            scale: 0.94,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          manifesto,
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25"
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      data-sidebar-theme="light"
      className="
        section-with-left-nav
        relative
        isolate
        overflow-hidden
        bg-[#f4f3f0]
        text-[#17151b]
      "
    >
      {/* BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute
            -right-40
            top-[8%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#854fee]/[0.07]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-[-100px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#d6ff00]/[0.035]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
            [background-image:linear-gradient(rgba(23,21,27,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,21,27,0.035)_1px,transparent_1px)]
            [background-size:70px_70px]
            [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
          "
        />
      </div>

      {/* CONTAINER */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-20
          sm:px-8
          sm:py-28
          lg:px-14
          lg:py-36
          xl:px-20
        "
      >
        {/* HEADER */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-20">
          <div>
            <div
              data-team-eyebrow
              className="
                flex
                items-center
                gap-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#854fee]
                sm:text-[11px]
              "
            >
              <span className="h-px w-10 bg-[#854fee]" />
              The Team
            </div>

            <h2
              data-team-heading
              className="
                mt-6
                max-w-[900px]
                text-[clamp(3.2rem,8vw,7.8rem)]
                font-bold
                leading-[0.87]
                tracking-[-0.075em]
              "
            >
              Small team.
              <br />
              <span className="text-[#854fee]">Big thinking.</span>
            </h2>
          </div>

          <div>
            <p
              data-team-description
              className="max-w-md text-sm leading-7 text-black/50 sm:text-base sm:leading-8"
            >
              Nexora Digital brings together strategy, design,
              development and creative execution under one roof.
              Different skills, one shared standard.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6ff00] shadow-[0_0_10px_rgba(214,255,0,0.8)]" />
              Built around collaboration
            </div>
          </div>
        </div>

        {/* TEAM CARDS */}

        <div
          className="mt-14 grid gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          style={{ perspective: "1200px" }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>

        {/* BOTTOM INFO */}

        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#854fee] shadow-[0_0_10px_rgba(133,79,238,0.7)]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/30 sm:text-[9px]">
              Four minds. One direction.
            </span>
          </div>

          <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-black/20 sm:text-[9px]">
            Nexora Digital / Team
          </span>
        </div>

        {/* MANIFESTO */}

        <div
          data-team-manifesto
          className="mt-20 border-t border-black/[0.08] pt-8 sm:mt-28 sm:pt-10 lg:mt-36"
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#854fee]">
                One team. One standard.
              </p>

              <h3 className="mt-4 max-w-4xl text-[clamp(2.2rem,4.5vw,4.8rem)] font-bold leading-[0.95] tracking-[-0.065em]">
                Different skills.
                <br />
                <span className="text-black/25">One direction.</span>
              </h3>
            </div>

            <p className="max-w-sm text-xs leading-6 text-black/35 sm:text-right">
              Strategy, design, technology and creativity working
              together to create digital experiences that actually
              move businesses forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
