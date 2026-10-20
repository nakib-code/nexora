
"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

import {
  ArrowDown,
  ArrowUpRight,
  Film,
  Gauge,
  Globe2,
  Megaphone,
  Search,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* =========================================================
   TYPES
========================================================= */

type ServiceItem = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ElementType;
  benefits: string[];
};

interface ServicesProps {
  services?: ServiceItem[];
}

/* =========================================================
   SERVICES
========================================================= */

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "FB Ads",
    shortTitle: "Facebook Advertising",
    description:
      "High-converting Facebook advertising campaigns designed to reach the right audience, generate qualified leads, and scale your business rapidly.",
    icon: Megaphone,
    benefits: [
      "Audience targeting & research",
      "Creative & ad strategy",
      "Campaign setup & optimization",
      "Retargeting & LAL setup",
    ],
  },
  {
    number: "02",
    title: "Google Ads",
    shortTitle: "Google Advertising",
    description:
      "Performance-focused Google Ads campaigns that put your business right in front of active buyers searching for your solutions.",
    icon: Search,
    benefits: [
      "Search & display campaigns",
      "High-intent keyword research",
      "Conversion-focused copy",
      "Continuous bid optimization",
    ],
  },
  {
    number: "03",
    title: "Conversion Tracking",
    shortTitle: "Track What Matters",
    description:
      "Accurate conversion tracking setup ensuring complete visibility into sales origins, ROI attribution, and budget efficiency.",
    icon: Gauge,
    benefits: [
      "Server-side GA4 setup",
      "Google Tag Manager",
      "CAPI & Meta Pixel",
      "Custom event funnels",
    ],
  },
  {
    number: "04",
    title: "Video Editing",
    shortTitle: "Content That Converts",
    description:
      "Professional short-form and performance video editing tailored to stop the scroll, engage audiences, and spark immediate action.",
    icon: Film,
    benefits: [
      "Short-form social hooks",
      "High-ROI ad creatives",
      "Sleek motion graphics",
      "Pacing & sound design",
    ],
  },
  {
    number: "05",
    title: "Website Design & Development",
    shortTitle: "Web Experiences",
    description:
      "Modern, fast, conversion-focused web experiences engineered to build authority and transform casual visitors into high-value clients.",
    icon: Globe2,
    benefits: [
      "Modern UI/UX architecture",
      "Ultra-responsive Next.js code",
      "Core Web Vitals optimization",
      "Conversion-optimized CTA design",
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Services({
  services = DEFAULT_SERVICES,
}: ServicesProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  const isAnimatingRef = useRef(false);
  const activeIndexRef = useRef(0);
  const wheelLockRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const totalCards = services.length;

  /* =======================================================
     ACTIVE INDEX
  ======================================================= */

  const updateActiveIndex = useCallback(
    (index: number) => {
      const safeIndex = Math.max(
        0,
        Math.min(index, Math.max(totalCards - 1, 0))
      );

      activeIndexRef.current = safeIndex;
      setActiveIndex(safeIndex);
    },
    [totalCards]
  );

  /* =======================================================
     CARD ANIMATION
  ======================================================= */

  const animateCards = useCallback(
    (
      targetIndex: number,
      direction: "next" | "prev",
      immediate = false
    ) => {
      const container = cardsContainerRef.current;

      if (!container) return;

      const cards = Array.from(
        container.querySelectorAll<HTMLElement>(
          "[data-service-card]"
        )
      );

      if (!cards.length) return;

      const safeIndex = Math.max(
        0,
        Math.min(targetIndex, cards.length - 1)
      );

      cards.forEach((card, index) => {
        const offset = index - safeIndex;

        let x = 0;
        let y = 0;
        let z = 0;
        let rotateY = 0;
        let rotateX = 0;
        let scale = 1;
        let opacity = 1;

        /* ACTIVE */

        if (offset === 0) {
          x = 0;
          y = 0;
          z = 0;
          rotateY = 0;
          rotateX = 0;
          scale = 1;
          opacity = 1;
        }

        /* NEXT */

        else if (offset === 1) {
          x = 30;
          y = 18;
          z = -85;
          rotateY = 8;
          rotateX = 1;
          scale = 0.965;
          opacity = 0.72;
        }

        /* THIRD */

        else if (offset === 2) {
          x = 56;
          y = 34;
          z = -155;
          rotateY = 13;
          rotateX = 2;
          scale = 0.925;
          opacity = 0.4;
        }

        /* BEHIND */

        else if (offset > 2) {
          x = 85;
          y = 48;
          z = -225;
          rotateY = 18;
          rotateX = 3;
          scale = 0.88;
          opacity = 0;
        }

        /* PREVIOUS */

        else if (offset === -1) {
          x = direction === "next" ? -60 : -38;
          y = -8;
          z = -45;
          rotateY = direction === "next" ? -58 : -30;
          rotateX = 0;
          scale = 0.97;
          opacity = 0;
        }

        /* OLD */

        else {
          x = -105;
          y = -15;
          z = -185;
          rotateY = -68;
          rotateX = 0;
          scale = 0.88;
          opacity = 0;
        }

        gsap.set(card, {
          transformPerspective: 1400,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          transformOrigin: "left center",

          zIndex:
            offset === 0
              ? 50
              : offset === 1
                ? 40
                : offset === 2
                  ? 30
                  : Math.max(1, 20 - Math.abs(offset)),
        });

        gsap.to(card, {
          x,
          y,
          z,
          rotateY,
          rotateX,
          scale,
          opacity,
          duration: immediate ? 0 : 0.65,
          ease: "power3.inOut",
          overwrite: true,
        });
      });
    },
    []
  );

  /* =======================================================
     NAVIGATE TO CARD
  ======================================================= */

  const navigateToCard = useCallback(
    (targetIndex: number) => {
      if (totalCards <= 0 || isAnimatingRef.current) {
        return;
      }

      const safeIndex = Math.max(
        0,
        Math.min(targetIndex, totalCards - 1)
      );

      const currentIndex = activeIndexRef.current;

      if (safeIndex === currentIndex) return;

      const direction =
        safeIndex > currentIndex ? "next" : "prev";

      isAnimatingRef.current = true;

      updateActiveIndex(safeIndex);
      animateCards(safeIndex, direction);

      const trigger = ScrollTrigger.getById(
        "services-pin-trigger"
      );

      if (!trigger) {
        isAnimatingRef.current = false;
        return;
      }

      const progress =
        totalCards > 1
          ? safeIndex / (totalCards - 1)
          : 0;

      const targetScroll =
        trigger.start +
        (trigger.end - trigger.start) * progress;

      gsap.to(window, {
        scrollTo: {
          y: targetScroll,
          autoKill: false,
        },
        duration: 0.7,
        ease: "power3.inOut",
        overwrite: true,
        onComplete: () => {
          isAnimatingRef.current = false;
        },
        onInterrupt: () => {
          isAnimatingRef.current = false;
        },
      });
    },
    [animateCards, totalCards, updateActiveIndex]
  );

  /* =======================================================
     SCROLL TO PROJECTS
  ======================================================= */

  const scrollToProjects = useCallback(() => {
    const projectsSection = document.querySelector("#projects");

    if (!projectsSection) return;

    projectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  /* =======================================================
     WHEEL NAVIGATION
  ======================================================= */

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isAnimatingRef.current) {
        event.preventDefault();
        return;
      }

      const trigger = ScrollTrigger.getById(
        "services-pin-trigger"
      );

      if (!trigger || !trigger.isActive) {
        return;
      }

      const delta = event.deltaY;

      if (Math.abs(delta) < 8) return;

      const currentIndex = activeIndexRef.current;
      const goingDown = delta > 0;
      const goingUp = delta < 0;

      /* LAST CARD */

      if (goingDown && currentIndex === totalCards - 1) {
        return;
      }

      /* FIRST CARD */

      if (goingUp && currentIndex === 0) {
        return;
      }

      if (wheelLockRef.current) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      wheelLockRef.current = true;

      const nextIndex = goingDown
        ? currentIndex + 1
        : currentIndex - 1;

      const safeIndex = Math.max(
        0,
        Math.min(nextIndex, totalCards - 1)
      );

      if (safeIndex !== currentIndex) {
        navigateToCard(safeIndex);
      }

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 720);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [navigateToCard, totalCards]);

  /* =======================================================
     GSAP SCROLL TRIGGER
  ======================================================= */

  useGSAP(
    () => {
      const section = sectionRef.current;
      const container = cardsContainerRef.current;

      if (!section || !container) return;

      const cards = Array.from(
        container.querySelectorAll<HTMLElement>(
          "[data-service-card]"
        )
      );

      if (!cards.length) return;

      /* INITIAL POSITIONS */

      cards.forEach((card, index) => {
        const offset = index;

        gsap.set(card, {
          position: "absolute",
          inset: 0,

          transformPerspective: 1400,
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          transformOrigin: "left center",

          x:
            offset === 0
              ? 0
              : offset === 1
                ? 30
                : offset === 2
                  ? 56
                  : 85,

          y:
            offset === 0
              ? 0
              : offset === 1
                ? 18
                : offset === 2
                  ? 34
                  : 48,

          z:
            offset === 0
              ? 0
              : offset === 1
                ? -85
                : offset === 2
                  ? -155
                  : -225,

          rotateY:
            offset === 0
              ? 0
              : offset === 1
                ? 8
                : offset === 2
                  ? 13
                  : 18,

          rotateX:
            offset === 0
              ? 0
              : offset === 1
                ? 1
                : offset === 2
                  ? 2
                  : 3,

          scale:
            offset === 0
              ? 1
              : offset === 1
                ? 0.965
                : offset === 2
                  ? 0.925
                  : 0.88,

          opacity:
            offset === 0
              ? 1
              : offset === 1
                ? 0.72
                : offset === 2
                  ? 0.4
                  : 0,

          zIndex:
            offset === 0
              ? 50
              : offset === 1
                ? 40
                : offset === 2
                  ? 30
                  : Math.max(1, 20 - offset),
        });
      });

      /* SCROLL DISTANCE */

      const scrollDistance =
        Math.max(totalCards - 1, 1) *
        window.innerHeight;

      const trigger = ScrollTrigger.create({
        id: "services-pin-trigger",

        trigger: section,
        start: "top top",
        end: `+=${scrollDistance}`,

        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 0.4,

        invalidateOnRefresh: true,

        snap:
          totalCards > 1
            ? {
                snapTo: 1 / Math.max(totalCards - 1, 1),
                duration: {
                  min: 0.25,
                  max: 0.6,
                },
                delay: 0.04,
                ease: "power2.inOut",
              }
            : false,

        onUpdate: (self) => {
          if (isAnimatingRef.current) return;

          if (totalCards <= 1) {
            updateActiveIndex(0);
            return;
          }

          const rawIndex =
            self.progress * (totalCards - 1);

          const nextIndex = Math.round(rawIndex);

          const safeIndex = Math.max(
            0,
            Math.min(nextIndex, totalCards - 1)
          );

          if (safeIndex !== activeIndexRef.current) {
            const direction =
              safeIndex > activeIndexRef.current
                ? "next"
                : "prev";

            updateActiveIndex(safeIndex);
            animateCards(safeIndex, direction);
          }
        },
      });

      updateActiveIndex(0);
      animateCards(0, "next", true);

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        trigger.kill();
      };
    },
    {
      scope: sectionRef,
      dependencies: [
        services,
        totalCards,
        animateCards,
        updateActiveIndex,
      ],
      revertOnUpdate: true,
    }
  );

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      ref={sectionRef}
      id="services"
      data-sidebar-theme="light"
      className="
        relative
        isolate

        h-[100svh]
        min-h-0

        w-full
        overflow-hidden

        bg-[#f7f7f5]
        text-zinc-950

        md:h-auto
        md:min-h-screen
        md:pl-[70px]
      "
    >
      {/* MAIN CONTAINER */}

      <div
        className="
          relative
          mx-auto

          flex
          h-full
          min-h-0

          w-full
          max-w-[1900px]

          flex-col
          justify-start

          px-4
          pt-7
          pb-6

          max-[380px]:px-[18px]
          max-[380px]:pt-5
          max-[380px]:pb-4

          sm:px-7
          sm:pt-9
          sm:pb-8

          md:h-auto
          md:min-h-screen

          lg:justify-center
          lg:px-14
          lg:py-16
        "
      >
        {/* HEADER */}

        <div
          className="
            mb-4

            flex
            w-full
            flex-col
            gap-3

            max-[380px]:mb-3

            sm:mb-6
            sm:gap-4

            lg:mb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* LEFT */}

          <div className="min-w-0 max-w-[930px]">
            {/* EYEBROW */}

            <div
              className="
                mb-2

                flex
                items-center
                gap-2

                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]

                text-purple-600

                sm:mb-3
                sm:text-[10px]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-600 sm:h-2 sm:w-2" />

              <span>What We Do</span>
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[930px]

                text-[31px]
                font-semibold
                leading-[1.02]
                tracking-[-0.055em]

                text-zinc-950

                max-[380px]:text-[28px]

                sm:text-4xl
                md:text-5xl
                lg:text-[54px]
                xl:text-[58px]
              "
            >
              Services built to{" "}
              <span className="text-purple-600">
                move your business forward.
              </span>
            </h2>
          </div>

          {/* DESKTOP DESCRIPTION */}

          <div
            className="
              hidden
              max-w-[390px]
              shrink-0

              text-sm
              leading-6
              text-zinc-500

              lg:mb-1
              lg:block
            "
          >
            From paid advertising to high-converting websites,
            we build the systems that turn attention into
            measurable growth.
          </div>
        </div>

        {/* SERVICE AREA */}

        <div
          className="
            flex
            min-h-0
            w-full
            flex-1
            flex-col

            gap-1

            lg:grid
            lg:flex-none
            lg:grid-cols-[minmax(0,1fr)_300px]
            lg:gap-12

            xl:grid-cols-[minmax(0,1fr)_320px]
            xl:gap-14
          "
        >
          {/* CARD AREA */}

          <div
            className="
              relative
              min-h-0
              min-w-0
              w-full
              flex-1

              lg:flex-none
            "
          >
            {/* REDUCED MOBILE CARD HEIGHT */}

            <div
              ref={cardsContainerRef}
              className="
                relative
                h-[345px]
                min-h-0
                w-full

                max-[380px]:h-[330px]

                sm:h-[380px]

                lg:h-[425px]

                xl:h-[440px]
              "
              style={{
                perspective: "1400px",
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeIndex === index;

                return (
                  <article
                    key={`${service.number}-${service.title}`}
                    data-service-card
                    className="
                      absolute
                      inset-0
                      overflow-hidden

                      rounded-[24px]

                      border
                      border-zinc-200/80

                      bg-white

                      shadow-[0_20px_60px_rgba(0,0,0,0.07)]

                      sm:rounded-[30px]

                      lg:rounded-[34px]
                    "
                    aria-hidden={!isActive}
                  >
                    {/* PURPLE GLOW */}

                    <div
                      className="
                        pointer-events-none
                        absolute

                        -right-24
                        -top-24

                        h-48
                        w-48

                        rounded-full

                        bg-purple-500/[0.07]

                        blur-3xl

                        sm:-right-32
                        sm:-top-32
                        sm:h-80
                        sm:w-80
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute

                        -bottom-24
                        -left-24

                        h-44
                        w-44

                        rounded-full

                        bg-purple-400/[0.04]

                        blur-3xl

                        sm:-bottom-36
                        sm:h-72
                        sm:w-72
                      "
                    />

                    {/* CARD INNER */}

                    <div
                      className="
                        relative

                        flex
                        h-full
                        flex-col

                        p-4

                        max-[380px]:p-3.5

                        sm:p-7

                        lg:p-9

                        xl:p-10
                      "
                    >
                      {/* TOP */}

                      <div className="flex items-center justify-between">
                        {/* ICON + LABEL */}

                        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                          {/* ICON */}

                          <div
                            className="
                              flex
                              h-10
                              w-10
                              shrink-0

                              items-center
                              justify-center

                              rounded-[13px]

                              bg-zinc-950
                              text-white

                              shadow-[0_8px_20px_rgba(0,0,0,0.14)]

                              sm:h-14
                              sm:w-14
                              sm:rounded-2xl
                            "
                          >
                            <Icon
                              size={19}
                              strokeWidth={1.7}
                              className="sm:h-[21px] sm:w-[21px]"
                            />
                          </div>

                          {/* LABEL */}

                          <div className="min-w-0">
                            <div
                              className="
                                max-w-[155px]
                                truncate

                                text-[8px]
                                font-bold
                                uppercase
                                tracking-[0.14em]

                                text-purple-600

                                max-[380px]:max-w-[135px]

                                sm:max-w-none
                                sm:text-[9px]
                                sm:tracking-[0.18em]
                              "
                            >
                              {service.shortTitle}
                            </div>

                            <div className="mt-1 text-[10px] font-medium text-zinc-400 sm:text-xs">
                              Digital Service
                            </div>
                          </div>
                        </div>

                        {/* NUMBER */}

                        <div
                          className="
                            select-none

                            text-[36px]
                            font-semibold
                            leading-none

                            tracking-[-0.07em]

                            text-zinc-100

                            max-[380px]:text-[33px]

                            sm:text-6xl

                            lg:text-7xl
                          "
                        >
                          {service.number}
                        </div>
                      </div>

                      {/* MAIN CONTENT */}

                      <div
                        className="
                          my-auto

                          py-5

                          max-[380px]:py-4

                          sm:py-10

                          lg:py-0
                        "
                      >
                        {/* SMALL LABEL */}

                        <div
                          className="
                            mb-2.5

                            flex
                            items-center
                            gap-2

                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.2em]

                            text-zinc-400

                            sm:mb-3
                            sm:text-[9px]
                          "
                        >
                          <span className="h-1 w-1 rounded-full bg-purple-600 sm:h-1.5 sm:w-1.5" />

                          What we deliver
                        </div>

                        {/* TITLE */}

                        <h3
                          className="
                            max-w-[720px]

                            text-[27px]
                            font-semibold

                            leading-[1.03]

                            tracking-[-0.05em]

                            text-zinc-950

                            max-[380px]:text-[24px]

                            sm:text-4xl

                            lg:text-[40px]

                            xl:text-[44px]
                          "
                        >
                          {service.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p
                          className="
                            mt-3

                            max-w-[620px]

                            text-[11.5px]

                            leading-[1.55]

                            text-zinc-500

                            max-[380px]:mt-2.5
                            max-[380px]:text-[10.5px]
                            max-[380px]:leading-[1.5]

                            sm:mt-4
                            sm:text-[15px]
                            sm:leading-6

                            lg:text-[16px]
                          "
                        >
                          {service.description}
                        </p>
                      </div>

                      {/* FOOTER */}

                      <div
                        className="
                          flex
                          items-center
                          justify-between

                          border-t
                          border-zinc-100

                          pt-3

                          max-[380px]:pt-2.5

                          sm:pt-5
                        "
                      >
                        {/* BRAND */}

                        <div
                          className="
                            flex
                            items-center
                            gap-1.5

                            text-[7px]
                            font-semibold
                            uppercase
                            tracking-[0.13em]

                            text-zinc-400

                            sm:gap-2
                            sm:text-[9px]
                            sm:tracking-[0.16em]
                          "
                        >
                          <span
                            className="
                              h-1.5
                              w-1.5

                              rounded-full

                              bg-purple-500

                              shadow-[0_0_10px_rgba(147,51,234,0.5)]
                            "
                          />

                          Nexora Digital
                        </div>

                        {/* NEXT */}

                        {activeIndex < totalCards - 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              navigateToCard(activeIndex + 1)
                            }
                            className="
                              group

                              flex
                              items-center
                              gap-1.5

                              rounded-full

                              bg-zinc-950

                              px-3
                              py-2

                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.12em]

                              text-white

                              shadow-[0_8px_20px_rgba(0,0,0,0.12)]

                              transition-all
                              duration-300

                              hover:-translate-y-0.5
                              hover:bg-purple-600

                              hover:shadow-[0_10px_25px_rgba(147,51,234,0.25)]

                              max-[380px]:px-2.5
                              max-[380px]:py-1.5

                              sm:gap-2
                              sm:px-5
                              sm:py-3
                              sm:text-[10px]
                            "
                          >
                            <span>Next</span>

                            <ArrowDown
                              size={12}
                              strokeWidth={2}
                              className="
                                transition-transform
                                duration-300

                                group-hover:translate-y-1

                                sm:h-[13px]
                                sm:w-[13px]
                              "
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* DESKTOP SERVICE NAV */}

          <aside className="hidden w-full justify-self-end lg:block">
            <div className="border-l border-zinc-200 pl-6 xl:pl-7">
              <div
                className="
                  mb-5

                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]

                  text-zinc-400
                "
              >
                Our Services
              </div>

              <div className="space-y-1">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={service.number}
                      type="button"
                      onClick={() => navigateToCard(index)}
                      className={`
                        group
                        relative

                        flex
                        w-full
                        items-center
                        gap-3

                        rounded-2xl

                        px-3
                        py-3

                        text-left

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-white shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
                            : "bg-transparent hover:bg-white/70"
                        }
                      `}
                    >
                      {/* ACTIVE LINE */}

                      <span
                        className={`
                          absolute

                          -left-[25px]
                          top-1/2

                          h-8
                          w-[2px]

                          -translate-y-1/2

                          rounded-full

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "bg-purple-600 shadow-[0_0_15px_rgba(147,51,234,0.8)]"
                              : "bg-transparent"
                          }
                        `}
                      />

                      {/* ICON */}

                      <span
                        className={`
                          flex

                          h-9
                          w-9

                          shrink-0

                          items-center
                          justify-center

                          rounded-full

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "bg-purple-600 text-white shadow-[0_8px_25px_rgba(147,51,234,0.28)]"
                              : "bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200 group-hover:text-zinc-600"
                          }
                        `}
                      >
                        <Icon size={14} strokeWidth={1.8} />
                      </span>

                      {/* TEXT */}

                      <span className="min-w-0 flex-1">
                        <span
                          className={`
                            block

                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.1em]

                            transition-colors
                            duration-300

                            ${
                              isActive
                                ? "text-zinc-950"
                                : "text-zinc-400 group-hover:text-zinc-700"
                            }
                          `}
                        >
                          {service.title}
                        </span>

                        <span
                          className={`
                            mt-0.5
                            block
                            truncate

                            text-[9px]

                            transition-colors
                            duration-300

                            ${
                              isActive
                                ? "text-zinc-500"
                                : "text-zinc-400"
                            }
                          `}
                        >
                          {service.shortTitle}
                        </span>
                      </span>

                      {/* ARROW */}

                      <ArrowUpRight
                        size={13}
                        className={`
                          shrink-0

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "translate-x-0 text-purple-600 opacity-100"
                              : "-translate-x-1 text-zinc-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }
                        `}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>

        {/* MOBILE NEXT ARROW */}

        <div
          className="
            mt-1

            flex
            w-full
            justify-center

            sm:mt-3

            lg:hidden
          "
        >
          {activeIndex < totalCards - 1 && (
            <button
              type="button"
              onClick={() => navigateToCard(activeIndex + 1)}
              aria-label="Next service"
              className="
                group

                flex
                h-9
                w-9

                items-center
                justify-center

                rounded-full

                border
                border-zinc-200

                bg-white

                text-zinc-900

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-purple-500
                hover:bg-purple-600
                hover:text-white

                hover:shadow-[0_15px_35px_rgba(147,51,234,0.22)]

                sm:h-12
                sm:w-12
              "
            >
              <ArrowDown
                size={16}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-y-1

                  sm:h-[19px]
                  sm:w-[19px]
                "
              />
            </button>
          )}
        </div>
      </div>

      {/* FLOATING SCROLL TO PROJECTS */}

      <button
        type="button"
        onClick={scrollToProjects}
        aria-label="Scroll to Projects"
        className="
          group

          absolute

          bottom-3
          right-4

          z-[80]

          flex
          h-10
          w-10

          items-center
          justify-center

          rounded-full

          border
          border-zinc-200

          bg-white/95

          text-zinc-900

          shadow-[0_14px_40px_rgba(0,0,0,0.10)]

          backdrop-blur-md

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-purple-500
          hover:bg-purple-600
          hover:text-white

          hover:shadow-[0_18px_45px_rgba(147,51,234,0.25)]

          md:bottom-6
          md:right-8
          md:h-14
          md:w-14

          lg:bottom-7
          lg:right-8

          xl:right-10
        "
      >
        <ArrowDown
          size={17}
          strokeWidth={2}
          className="
            transition-transform
            duration-300

            group-hover:translate-y-1

            md:h-[21px]
            md:w-[21px]
          "
        />
      </button>
    </section>
  );
}
