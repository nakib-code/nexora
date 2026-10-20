"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TYPES
========================================================= */

type SocialPlatform = "linkedin" | "github" | "portfolio";

type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  intro: string;
  image?: string;
  social?: SocialLink[];
  placeholder?: boolean;
};

/* =========================================================
   TEAM DATA

   IMPORTANT:
   No verified team-member data was found in the project
   data available to this component.

   Replace ONLY this array with real team information.
   Do not add invented portraits/social URLs.
========================================================= */

const teamMembers: TeamMember[] = [
  {
    id: "member-01",
    name: "Your Name",
    role: "Founder / Full Stack Developer",
    intro:
      "Replace this placeholder with the real founder profile and a short introduction.",
    image: undefined,
    social: [],
    placeholder: true,
  },
  {
    id: "member-02",
    name: "Team Member",
    role: "UI/UX Designer",
    intro:
      "Replace this placeholder with the real team member information.",
    image: undefined,
    social: [],
    placeholder: true,
  },
  {
    id: "member-03",
    name: "Team Member",
    role: "Graphic Designer",
    intro:
      "Replace this placeholder with the real team member information.",
    image: undefined,
    social: [],
    placeholder: true,
  },
  {
    id: "member-04",
    name: "Team Member",
    role: "Video Editor",
    intro:
      "Replace this placeholder with the real team member information.",
    image: undefined,
    social: [],
    placeholder: true,
  },
];

/* =========================================================
   INLINE ICONS

   Inline SVG keeps this component independent from
   lucide-react social icon exports.
========================================================= */

function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
    >
      <path
        d="M19 12H5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M11 18L5 12L11 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-[17px] w-[17px]"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8 7H17V16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialIcon({
  platform,
}: {
  platform: SocialPlatform;
}) {
  if (platform === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-4 w-4"
      >
        <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.4 9.2h3.6V21H3.4V9.2Zm5.8 0h3.45v1.62h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.49V21h-3.6v-5.8c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.21 1.5-2.21 3.05V21H9.2V9.2Z" />
      </svg>
    );
  }

  if (platform === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-4 w-4"
      >
        <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.5-3.79-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
      </svg>
    );
  }

  return <ArrowUpRightIcon />;
}

/* =========================================================
   TEAM CARD
========================================================= */

type TeamCardProps = {
  member: TeamMember;
  index: number;
  active: boolean;
  onActivate: () => void;
};

export function TeamCard({
  member,
  index,
  active,
  onActivate,
}: TeamCardProps) {
  return (
    <article
      data-team-card
      data-active={active ? "true" : "false"}
      className={`
        relative
        h-[410px]
        shrink-0
        overflow-hidden
        rounded-[28px]
        border
        outline-none
        transition-[width,background-color,border-color,box-shadow]
        duration-500
        ease-out
        sm:h-[455px]
        sm:rounded-[32px]
        lg:h-[485px]
        ${
          active
            ? "w-[min(72vw,540px)] border-[#242128] bg-[#1d1a20] text-white shadow-[0_30px_90px_rgba(28,23,35,0.20)]"
            : "w-[min(22vw,205px)] border-black/[0.08] bg-white text-[#17151b] shadow-[0_16px_50px_rgba(23,21,27,0.05)]"
        }
      `}
      tabIndex={0}
      aria-current={active ? "true" : undefined}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          onActivate();
        }
      }}
    >
      {/* Accent glow */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-[#854fee]/20
          blur-[70px]
          transition-opacity
          duration-500
          ${
            active
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      />

      {/* Top meta */}
      <div className="absolute left-5 right-5 top-5 z-20 flex items-start justify-between sm:left-6 sm:right-6 sm:top-6">
        <span
          className={`
            text-[10px]
            font-bold
            tracking-[0.16em]
            ${
              active
                ? "text-white/45"
                : "text-black/25"
            }
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`
            rounded-full
            border
            px-2.5
            py-1
            text-[8px]
            font-bold
            uppercase
            tracking-[0.16em]
            ${
              active
                ? "border-white/10 bg-white/[0.06] text-white/50"
                : "border-black/[0.06] bg-black/[0.02] text-black/30"
            }
          `}
        >
          {active ? "Selected" : "Profile"}
        </span>
      </div>

      {/* Portrait / placeholder */}
      <div
        className={`
          absolute
          inset-x-0
          top-0
          overflow-hidden
          ${
            active
              ? "h-[55%]"
              : "h-full"
          }
        `}
      >
        {member.image ? (
          <>
            <img
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              className={`
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                ${
                  active
                    ? "scale-100"
                    : "scale-[1.03]"
                }
              `}
              draggable={false}
            />

            <div
              className={`
                absolute
                inset-0
                bg-gradient-to-t
                ${
                  active
                    ? "from-[#1d1a20] via-transparent to-transparent"
                    : "from-black/25 via-transparent to-transparent"
                }
              `}
            />
          </>
        ) : (
          <div
            className={`
              relative
              flex
              h-full
              w-full
              items-center
              justify-center
              overflow-hidden
              ${
                active
                  ? "bg-[#29232f]"
                  : "bg-[#efedf2]"
              }
            `}
          >
            {/* Abstract placeholder */}
            <div
              aria-hidden="true"
              className={`
                absolute
                h-44
                w-44
                rounded-full
                bg-[#854fee]/20
                blur-3xl
              `}
            />

            <div
              className={`
                relative
                flex
                h-28
                w-28
                items-center
                justify-center
                rounded-full
                border
                text-3xl
                font-semibold
                tracking-[-0.06em]
                ${
                  active
                    ? "border-white/10 bg-white/[0.05] text-white/70"
                    : "border-black/[0.07] bg-white text-black/20"
                }
              `}
            >
              {member.name
                .split(" ")
                .filter(Boolean)
                .slice(0, 2)
                .map((part) => part[0])
                .join("")
                .toUpperCase()}
            </div>

            <span
              className={`
                absolute
                bottom-7
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                text-[8px]
                font-bold
                uppercase
                tracking-[0.16em]
                ${
                  active
                    ? "text-white/25"
                    : "text-black/20"
                }
              `}
            >
              Photo placeholder
            </span>
          </div>
        )}
      </div>

      {/* Inactive vertical identity */}
      {!active && (
        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-white via-white/95 to-transparent px-5 pb-5 pt-20">
          <p className="truncate text-sm font-semibold tracking-[-0.02em]">
            {member.name}
          </p>

          <p className="mt-1 truncate text-[9px] font-bold uppercase tracking-[0.12em] text-[#854fee]">
            {member.role}
          </p>
        </div>
      )}

      {/* Active content */}
      {active && (
        <div className="absolute inset-x-0 bottom-0 z-10 flex h-[49%] flex-col justify-end p-6 sm:p-7 lg:p-8">
          <div className="flex items-end justify-between gap-5">
            <div className="min-w-0">
              <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#a984ff]">
                {member.role}
              </p>

              <h3 className="text-3xl font-semibold leading-none tracking-[-0.05em] sm:text-4xl lg:text-[2.8rem]">
                {member.name}
              </h3>

              <p className="mt-4 max-w-[470px] text-xs leading-6 text-white/55 sm:text-sm sm:leading-6">
                {member.intro}
              </p>

              {/* Placeholder notice */}
              {member.placeholder && (
                <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.14em] text-white/25">
                  Replace with verified team data
                </p>
              )}
            </div>

            <button
              type="button"
              aria-label={`Select ${member.name}`}
              onClick={(event) => {
                event.stopPropagation();
                onActivate();
              }}
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#854fee]/40
                bg-[#854fee]
                text-white
                shadow-[0_12px_30px_rgba(133,79,238,0.30)]
                transition-transform
                duration-300
                hover:scale-105
                focus:outline-none
                focus:ring-2
                focus:ring-[#a984ff]
                focus:ring-offset-2
                focus:ring-offset-[#1d1a20]
              "
            >
              <ArrowUpRightIcon />
            </button>
          </div>

          {/* Real socials only */}
          {member.social &&
            member.social.length > 0 && (
              <div className="mt-5 flex gap-2">
                {member.social.map((social) => (
                  <Link
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} — ${social.label}`}
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.05]
                      text-white/60
                      transition-all
                      duration-200
                      hover:border-[#854fee]
                      hover:bg-[#854fee]
                      hover:text-white
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#a984ff]
                    "
                  >
                    <SocialIcon
                      platform={social.platform}
                    />
                  </Link>
                ))}
              </div>
            )}
        </div>
      )}

      {/* Active purple edge */}
      <div
        aria-hidden="true"
        className={`
          absolute
          bottom-0
          left-0
          top-0
          w-[3px]
          bg-[#854fee]
          transition-opacity
          duration-300
          ${
            active
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      />
    </article>
  );
}

/* =========================================================
   TEAM SECTION
========================================================= */

export default function TeamSection() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const viewportRef =
    useRef<HTMLDivElement | null>(null);

  const trackRef =
    useRef<HTMLDivElement | null>(null);

  const cardsRef =
    useRef<(HTMLElement | null)[]>([]);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeIndexRef =
    useRef(0);

  const touchStartX =
    useRef<number | null>(null);

  const touchStartY =
    useRef<number | null>(null);

  const memberCount = teamMembers.length;

  /* =======================================================
     ACTIVE MEMBER
  ======================================================= */

  const setActive = useCallback(
    (nextIndex: number) => {
      if (!memberCount) return;

      const normalized =
        (nextIndex + memberCount) %
        memberCount;

      if (
        normalized ===
        activeIndexRef.current
      ) {
        return;
      }

      activeIndexRef.current =
        normalized;

      setActiveIndex(normalized);
    },
    [memberCount]
  );

  const goNext = useCallback(() => {
    setActive(
      activeIndexRef.current + 1
    );
  }, [setActive]);

  const goPrevious = useCallback(() => {
    setActive(
      activeIndexRef.current - 1
    );
  }, [setActive]);

  /* =======================================================
     GSAP — SECTION ENTRANCE
  ======================================================= */

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const reduceMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      const eyebrow =
        section.querySelector(
          "[data-team-eyebrow]"
        );

      const heading =
        section.querySelector(
          "[data-team-heading]"
        );

      const description =
        section.querySelector(
          "[data-team-description]"
        );

      const features =
        gsap.utils.toArray<HTMLElement>(
          "[data-team-feature]"
        );

      const viewport =
        section.querySelector(
          "[data-team-viewport]"
        );

      const navigation =
        section.querySelector(
          "[data-team-navigation]"
        );

      if (reduceMotion) {
        gsap.set(
          [
            eyebrow,
            heading,
            description,
            ...features,
            viewport,
            navigation,
          ],
          {
            clearProps: "all",
          }
        );

        return;
      }

      const intro =
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        });

      intro
        .from(eyebrow, {
          y: 18,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        })
        .from(
          heading,
          {
            y: 34,
            opacity: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .from(
          description,
          {
            y: 22,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.42"
        )
        .from(
          features,
          {
            y: 18,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.35"
        );

      gsap.from(viewport, {
        y: 40,
        opacity: 0,
        scale: 0.985,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: viewport,
          start: "top 86%",
          once: true,
        },
      });

      gsap.from(navigation, {
        y: 16,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: navigation,
          start: "top 94%",
          once: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  /* =======================================================
     GSAP — ACTIVE CARD TRANSITION
  ======================================================= */

  useEffect(() => {
    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const cards =
      cardsRef.current.filter(
        Boolean
      ) as HTMLElement[];

    if (!cards.length) return;

    if (reduceMotion) {
      cards.forEach((card, index) => {
        const active =
          index === activeIndex;

        gsap.set(card, {
          width: active
            ? "min(72vw, 540px)"
            : "min(22vw, 205px)",
          opacity: active ? 1 : 0.78,
          scale: active ? 1 : 0.96,
          y: active ? 0 : 8,
        });
      });

      return;
    }

    const mobile = window.innerWidth < 768;
    const tablet =
      window.innerWidth >= 768 &&
      window.innerWidth < 1024;

    const activeWidth = mobile
      ? "78vw"
      : tablet
        ? "48vw"
        : "min(44vw, 540px)";

    const inactiveWidth = mobile
      ? "17vw"
      : tablet
        ? "21vw"
        : "min(13vw, 185px)";

    const timeline = gsap.timeline({
      defaults: {
        duration: 0.65,
        ease: "power3.out",
      },
    });

    cards.forEach((card, index) => {
      const active =
        index === activeIndex;

      timeline.to(
        card,
        {
          width: active
            ? activeWidth
            : inactiveWidth,
          opacity: active ? 1 : 0.76,
          scale: active ? 1 : 0.965,
          y: active ? 0 : 6,
          boxShadow: active
            ? "0 30px 90px rgba(28,23,35,0.20)"
            : "0 16px 50px rgba(23,21,27,0.05)",
        },
        0
      );
    });

    return () => {
      timeline.kill();
    };
  }, [activeIndex]);

  /* =======================================================
     KEEP ACTIVE CARD VISIBLE

     Uses the browser's native horizontal scrolling model
     instead of locking the page.
  ======================================================= */

  useEffect(() => {
    const viewport =
      viewportRef.current;

    const activeCard =
      cardsRef.current[activeIndex];

    if (!viewport || !activeCard) {
      return;
    }

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    const viewportRect =
      viewport.getBoundingClientRect();

    const cardRect =
      activeCard.getBoundingClientRect();

    const desired =
      viewport.scrollLeft +
      (cardRect.left -
        viewportRect.left) -
      (viewportRect.width -
        cardRect.width) /
        2;

    const maxScroll =
      viewport.scrollWidth -
      viewport.clientWidth;

    const target =
      Math.max(
        0,
        Math.min(desired, maxScroll)
      );

    if (reduceMotion) {
      viewport.scrollLeft = target;
      return;
    }

    gsap.to(viewport, {
      scrollLeft: target,
      duration: 0.7,
      ease: "power3.out",
      overwrite: true,
    });
  }, [activeIndex]);

  /* =======================================================
     RESIZE
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =======================================================
     KEYBOARD NAVIGATION
  ======================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      const target =
        event.target as HTMLElement | null;

      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }
    };

    section.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      section.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [goNext, goPrevious]);

  /* =======================================================
     TOUCH / SWIPE
  ======================================================= */

  const handleTouchStart = (
    event: React.TouchEvent
  ) => {
    touchStartX.current =
      event.touches[0]?.clientX ?? null;

    touchStartY.current =
      event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (
    event: React.TouchEvent
  ) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const endX =
      event.changedTouches[0]?.clientX ?? 0;

    const endY =
      event.changedTouches[0]?.clientY ?? 0;

    const deltaX =
      endX - touchStartX.current;

    const deltaY =
      endY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    /* Ignore mostly vertical gestures */
    if (
      Math.abs(deltaY) >
      Math.abs(deltaX)
    ) {
      return;
    }

    if (Math.abs(deltaX) < 45) {
      return;
    }

    if (deltaX < 0) {
      goNext();
    } else {
      goPrevious();
    }
  };

  const activeMember =
    teamMembers[activeIndex];

  if (!teamMembers.length) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="team"
      tabIndex={-1}
      className="
        relative
        overflow-hidden
        bg-[#f7f7f5]
        px-5
        py-24
        text-[#17151b]
        outline-none
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
        xl:px-16
      "
    >
      {/* =================================================
          BACKGROUND DETAIL
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -right-40
            top-10
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#854fee]/[0.055]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            -left-48
            bottom-10
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#854fee]/[0.035]
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.25]
            [background-image:linear-gradient(rgba(23,21,27,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,21,27,0.035)_1px,transparent_1px)]
            [background-size:72px_72px]
            [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
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
                tracking-[0.28em]
                text-[#854fee]
                sm:text-[11px]
              "
            >
              <span className="h-px w-9 bg-[#854fee]" />

              Meet the Team
            </div>

            <h2
              data-team-heading
              className="
                mt-5
                max-w-4xl
                text-[clamp(2.8rem,6vw,6.7rem)]
                font-semibold
                leading-[0.9]
                tracking-[-0.065em]
              "
            >
              The People
              <br />
              Behind{" "}
              <span className="text-[#854fee]">
                Nexora Digital.
              </span>
            </h2>

            <p
              data-team-description
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-black/50
                sm:text-base
                sm:leading-8
              "
            >
              Strategy, design, development and
              creativity come together through
              people who care about the details.
              Meet the minds shaping the digital
              work behind Nexora.
            </p>
          </div>

          {/* =================================================
              FEATURE PRINCIPLES
          ================================================= */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                number: "01",
                title: "Creative Minds",
                text: "Ideas with purpose.",
              },
              {
                number: "02",
                title: "Technical Expertise",
                text: "Built to perform.",
              },
              {
                number: "03",
                title: "Collaborative Spirit",
                text: "Better work together.",
              },
            ].map((feature) => (
              <div
                key={feature.number}
                data-team-feature
                className="
                  flex
                  items-center
                  gap-4
                  border-t
                  border-black/[0.08]
                  py-4
                  lg:justify-between
                "
              >
                <span className="text-[9px] font-bold tracking-[0.16em] text-[#854fee]">
                  {feature.number}
                </span>

                <div className="min-w-0 lg:flex-1 lg:px-5">
                  <p className="text-xs font-semibold tracking-[-0.01em]">
                    {feature.title}
                  </p>

                  <p className="mt-0.5 text-[10px] text-black/35">
                    {feature.text}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    hidden
                    h-px
                    w-12
                    bg-black/10
                    sm:block
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            TEAM SHOWCASE
        ================================================= */}

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <div
            ref={viewportRef}
            data-team-viewport
            className="
              -mx-5
              overflow-x-auto
              overscroll-x-contain
              px-5
              pb-5
              [scrollbar-width:none]
              [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              sm:-mx-8
              sm:px-8
              lg:-mx-12
              lg:px-12
              xl:-mx-16
              xl:px-16
            "
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="
                flex
                min-w-max
                items-stretch
                gap-3
                sm:gap-4
              "
            >
              {teamMembers.map(
                (member, index) => (
                  <TeamCard
                    key={member.id}
                    member={member}
                    index={index}
                    active={
                      index === activeIndex
                    }
                    onActivate={() =>
                      setActive(index)
                    }
                  />
                )
              )}
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            ref={(node) => {
              if (node) {
                // Keep the DOM reference local for animation
              }
            }}
            data-team-navigation
            className="
              mt-5
              flex
              flex-col
              gap-4
              border-t
              border-black/[0.08]
              pt-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Current member */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/30">
                Current
              </span>

              <span className="h-px w-7 bg-black/10" />

              <span className="font-mono text-xs font-semibold tracking-[0.08em]">
                {String(activeIndex + 1).padStart(
                  2,
                  "0"
                )}
                <span className="mx-1 text-black/20">
                  /
                </span>
                {String(memberCount).padStart(
                  2,
                  "0"
                )}
              </span>

              <span className="hidden text-xs text-black/35 sm:block">
                {activeMember?.name}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Previous team member"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/[0.09]
                  bg-white
                  text-black/55
                  shadow-[0_8px_25px_rgba(23,21,27,0.04)]
                  transition-all
                  duration-300
                  hover:-translate-x-0.5
                  hover:border-[#854fee]/30
                  hover:bg-[#854fee]
                  hover:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#854fee]
                  focus:ring-offset-2
                "
              >
                <ArrowLeftIcon />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next team member"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#17151b]
                  text-white
                  shadow-[0_10px_30px_rgba(23,21,27,0.12)]
                  transition-all
                  duration-300
                  hover:translate-x-0.5
                  hover:bg-[#854fee]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#854fee]
                  focus:ring-offset-2
                "
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}

        <div className="mt-20 border-t border-black/[0.08] pt-7 sm:mt-24 sm:flex sm:items-end sm:justify-between sm:gap-10">
          <p className="max-w-2xl text-xl font-medium leading-tight tracking-[-0.035em] text-black/70 sm:text-2xl">
            Different disciplines.
            <br />
            <span className="text-[#854fee]">
              One shared standard.
            </span>
          </p>

          <p className="mt-4 max-w-sm text-xs leading-6 text-black/35 sm:mt-0 sm:text-right">
            We believe the best digital work
            happens when creative thinking and
            technical execution move together.
          </p>
        </div>
      </div>
    </section>
  );
}
