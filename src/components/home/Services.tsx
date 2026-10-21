"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  ArrowDown,
  ArrowRight,
  Check,
  Film,
  Gauge,
  Globe2,
  Megaphone,
  Search,
} from "lucide-react";

/* ================================================================
   GSAP
================================================================ */

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ================================================================
   TYPES
================================================================ */

type Service = {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  benefits: string[];
  accent: string;
  accentSoft: string;
  icon: React.ElementType;
};

/* ================================================================
   SERVICES
================================================================ */

const services: Service[] = [
  {
    id: "01",
    title: "Facebook Advertising",
    shortTitle: "FB Ads",
    subtitle: "Facebook Advertising",
    description:
      "Turn attention into predictable growth with strategic Facebook advertising built around your audience, creative, and conversion goals.",
    benefits: [
      "Audience targeting & research",
      "Creative & ad strategy",
      "Campaign setup & optimization",
      "Retargeting & LAL setup",
    ],
    accent: "#7c3aed",
    accentSoft: "#a855f7",
    icon: Megaphone,
  },

  {
    id: "02",
    title: "Google Advertising",
    shortTitle: "Google Ads",
    subtitle: "Google Advertising",
    description:
      "Capture high-intent demand with Google campaigns designed to put your business in front of people actively searching for what you offer.",
    benefits: [
      "Search & display campaigns",
      "High-intent keyword research",
      "Conversion-focused copy",
      "Continuous bid optimization",
    ],
    accent: "#22c1dc",
    accentSoft: "#06b6d4",
    icon: Search,
  },

  {
    id: "03",
    title: "Conversion Tracking",
    shortTitle: "Conversion Tracking",
    subtitle: "Track What Matters",
    description:
      "Build a reliable measurement system so every important click, lead, purchase, and customer journey can be understood and optimized.",
    benefits: [
      "Server-side GA4 setup",
      "Google Tag Manager",
      "CAPI & Meta Pixel",
      "Custom event funnels",
    ],
    accent: "#fb9b63",
    accentSoft: "#f97316",
    icon: Gauge,
  },

  {
    id: "04",
    title: "Video Editing",
    shortTitle: "Video Editing",
    subtitle: "Content That Converts",
    description:
      "Create scroll-stopping video content with strong hooks, intentional pacing, polished motion, and sound designed to hold attention.",
    benefits: [
      "Short-form social hooks",
      "High-ROI ad creatives",
      "Sleek motion graphics",
      "Pacing & sound design",
    ],
    accent: "#e879d8",
    accentSoft: "#d946ef",
    icon: Film,
  },

  {
    id: "05",
    title: "Website Design & Development",
    shortTitle: "Website Design & Development",
    subtitle: "Web Experiences",
    description:
      "Design and develop fast, modern websites that combine premium visual systems with technical performance and conversion-focused experiences.",
    benefits: [
      "Modern UI/UX architecture",
      "Ultra-responsive Next.js code",
      "Core Web Vitals optimization",
      "Conversion-optimized CTA design",
    ],
    accent: "#4f8df7",
    accentSoft: "#2563eb",
    icon: Globe2,
  },
];

/* ================================================================
   COMPONENT
================================================================ */

export default function Services() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const desktopCardsRef =
    useRef<HTMLDivElement | null>(null);

  const mobileCardsRef =
    useRef<HTMLDivElement | null>(null);

  const desktopTriggerRef =
    useRef<ScrollTrigger | null>(null);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeIndexRef =
    useRef(0);

  const [isDesktop, setIsDesktop] =
    useState(false);

  /* ================================================================
     RESPONSIVE
  ================================================================= */

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1024px)"
    );

    const handleChange = () => {
      setIsDesktop(media.matches);
    };

    handleChange();

    media.addEventListener(
      "change",
      handleChange
    );

    return () => {
      media.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  /* ================================================================
     ACTIVE INDEX
  ================================================================= */

  const updateActiveIndex =
    useCallback((index: number) => {
      const safeIndex = Math.max(
        0,
        Math.min(
          index,
          services.length - 1
        )
      );

      activeIndexRef.current =
        safeIndex;

      setActiveIndex(safeIndex);
    }, []);

  /* ================================================================
     DESKTOP CARD STACK
  ================================================================= */

  const updateDesktopCards =
    useCallback((progress: number) => {
      const cards =
        desktopCardsRef.current?.querySelectorAll<HTMLElement>(
          "[data-service-card]"
        );

      if (!cards?.length) {
        return;
      }

      const total =
        services.length;

      const exactIndex =
        progress * (total - 1);

      const currentIndex =
        Math.round(exactIndex);

      if (
        currentIndex !==
        activeIndexRef.current
      ) {
        activeIndexRef.current =
          currentIndex;

        setActiveIndex(
          currentIndex
        );
      }

      cards.forEach(
        (card, index) => {
          const distance =
            index - exactIndex;

          const absDistance =
            Math.abs(distance);

          let x = 0;
          let y = 0;
          let scale = 1;
          let opacity = 1;
          let rotate = 0;
          let rotateY = 0;
          let zIndex = 10;

          /* --------------------------------------------------------
             ACTIVE CARD
          --------------------------------------------------------- */

          if (
            absDistance < 0.55
          ) {
            const t =
              Math.min(
                absDistance /
                  0.55,
                1
              );

            x =
              distance * -10;

            y =
              absDistance * 3;

            scale =
              1 - t * 0.02;

            opacity =
              1 - t * 0.05;

            rotate =
              distance * -0.5;

            rotateY =
              distance * -2;

            zIndex = 100;
          }

          /* --------------------------------------------------------
             NEXT CARDS
          --------------------------------------------------------- */

          else if (
            distance > 0
          ) {
            const t =
              Math.min(
                (distance -
                  0.55) /
                  1.25,
                1
              );

            x =
              28 - t * 15;

            y =
              14 + t * 15;

            scale =
              0.965 - t * 0.05;

            opacity =
              0.55 - t * 0.4;

            rotate =
              1 + t * 1.5;

            rotateY =
              3 + t * 5;

            zIndex =
              80 - index;
          }

          /* --------------------------------------------------------
             PREVIOUS CARDS
          --------------------------------------------------------- */

          else {
            const t =
              Math.min(
                (-distance -
                  0.55) /
                  1.25,
                1
              );

            x =
              -28 - t * 18;

            y =
              15 + t * 18;

            scale =
              0.96 - t * 0.06;

            opacity =
              0.25 - t * 0.2;

            rotate =
              -1 - t * 2;

            rotateY =
              -4 - t * 5;

            zIndex =
              70 - index;
          }

          gsap.set(card, {
            xPercent: x,
            yPercent: y,
            scale,
            opacity,
            rotate,
            rotateY,
            zIndex,
            transformPerspective: 1400,
            transformOrigin:
              "center center",
          });
        }
      );
    }, []);

  /* ================================================================
     DESKTOP PIN
  ================================================================= */

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const ctx =
      gsap.context(() => {
        gsap.registerPlugin(
          ScrollTrigger
        );

        updateDesktopCards(0);

        desktopTriggerRef.current =
          ScrollTrigger.create({
            id: "services-pin-trigger",

            trigger: section,

            start: "top top",

            end: () =>
              `+=${window.innerHeight * 4}`,

            pin: true,

            pinSpacing: true,

            anticipatePin: 1,

            scrub: 0.35,

            invalidateOnRefresh:
              true,

            onUpdate: (self) => {
              updateDesktopCards(
                self.progress
              );
            },
          });

        ScrollTrigger.refresh();
      }, section);

    return () => {
      desktopTriggerRef.current?.kill();

      desktopTriggerRef.current =
        null;

      ctx.revert();
    };
  }, [
    isDesktop,
    updateDesktopCards,
  ]);

  /* ================================================================
     MOBILE FLYING CARD ANIMATION
  ================================================================= */

  useEffect(() => {
    if (isDesktop) {
      return;
    }

    const container =
      mobileCardsRef.current;

    if (!container) {
      return;
    }

    const ctx =
      gsap.context(() => {
        const cards =
          container.querySelectorAll<HTMLElement>(
            "[data-mobile-card]"
          );

        cards.forEach(
          (card, index) => {
            const fromLeft =
              index % 2 === 0;

            gsap.fromTo(
              card,
              {
                x: fromLeft
                  ? -90
                  : 90,

                y: 35,

                rotate: fromLeft
                  ? -4
                  : 4,

                scale: 0.94,

                opacity: 0,

                transformOrigin:
                  fromLeft
                    ? "left center"
                    : "right center",
              },
              {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
                opacity: 1,

                duration: 0.85,

                ease:
                  "power3.out",

                scrollTrigger: {
                  trigger: card,

                  start:
                    "top 88%",

                  end:
                    "top 52%",

                  scrub: 0.75,

                  invalidateOnRefresh:
                    true,
                },
              }
            );
          }
        );
      }, container);

    return () => {
      ctx.revert();
    };
  }, [isDesktop]);

  /* ================================================================
     DESKTOP NAVIGATION
  ================================================================= */

  const goToService =
    useCallback(
      (index: number) => {
        const safeIndex =
          Math.max(
            0,
            Math.min(
              index,
              services.length - 1
            )
          );

        if (!isDesktop) {
          const card =
            document.querySelector(
              `[data-mobile-service="${safeIndex}"]`
            );

          card?.scrollIntoView({
            behavior:
              "smooth",
            block: "center",
          });

          return;
        }

        const trigger =
          desktopTriggerRef.current;

        if (!trigger) {
          updateActiveIndex(
            safeIndex
          );

          return;
        }

        const progress =
          safeIndex /
          (services.length - 1);

        const targetY =
          trigger.start +
          (trigger.end -
            trigger.start) *
            progress;

        window.scrollTo({
          top: targetY,
          behavior:
            "smooth",
        });
      },
      [
        isDesktop,
        updateActiveIndex,
      ]
    );

  /* ================================================================
     RESIZE
  ================================================================= */

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const handleResize =
      () => {
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
  }, [isDesktop]);

  /* ================================================================
     SERVICE CARD
  ================================================================= */

  const renderServiceCard =
    (
      service: Service,
      index: number,
      mobile = false
    ) => {
      const Icon =
        service.icon;

      return (
        <article
          key={service.id}
          data-service-card={
            !mobile
              ? true
              : undefined
          }
          data-mobile-card={
            mobile
              ? true
              : undefined
          }
          data-mobile-service={
            mobile
              ? index
              : undefined
          }
          className={
            mobile
              ? `
                relative
                w-full
                overflow-hidden
                rounded-[28px]
                border
                border-[#e6e7ef]
                bg-white
                p-5
                shadow-[0_18px_55px_rgba(50,45,90,.08)]
                sm:rounded-[32px]
                sm:p-7
              `
              : `
                absolute
                left-0
                top-1/2
                h-[clamp(420px,58vh,525px)]
                w-full
                -translate-y-1/2
                overflow-hidden
                rounded-[32px]
                border
                border-[#e3e4ec]
                bg-white
                p-7
                shadow-[0_30px_90px_rgba(55,45,100,.12)]
                xl:p-8
              `
          }
          style={{
            borderTopColor:
              `${service.accent}70`,
            borderTopWidth:
              "3px",
          }}
        >
          {/* =======================================================
              CARD HEADER
          ======================================================== */}

          <div className="relative z-10 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-[54px]
                  w-[54px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[17px]
                  text-white
                  shadow-lg
                "
                style={{
                  background:
                    `linear-gradient(135deg, #17122c, ${service.accent})`,

                  boxShadow:
                    `0 10px 25px ${service.accent}30`,
                }}
              >
                <Icon
                  size={
                    mobile
                      ? 24
                      : 25
                  }
                  strokeWidth={
                    1.8
                  }
                />
              </div>

              <div>
                <div
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                  "
                  style={{
                    color:
                      service.accent,
                  }}
                >
                  Service
                </div>

                <div className="mt-1 text-[12px] text-[#7b89a4]">
                  Nexora Digital
                </div>
              </div>
            </div>

            <div
              className="
                select-none
                text-[62px]
                font-bold
                leading-[0.7]
                tracking-[-0.08em]
                sm:text-[72px]
              "
              style={{
                color:
                  `${service.accent}13`,
              }}
            >
              {service.id}
            </div>
          </div>

          {/* =======================================================
              CONTENT
          ======================================================== */}

          <div
            className={
              mobile
                ? "relative z-10 mt-8"
                : "relative z-10 mt-7"
            }
          >
            <div
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
              "
              style={{
                color:
                  service.accent,
              }}
            >
              {service.shortTitle}
            </div>

            <h3
              className={
                mobile
                  ? `
                    mt-2
                    max-w-[560px]
                    text-[clamp(2.2rem,10vw,3.5rem)]
                    font-bold
                    leading-[0.95]
                    tracking-[-0.055em]
                    text-[#171936]
                  `
                  : `
                    mt-2
                    max-w-[680px]
                    text-[clamp(2.6rem,3.8vw,4rem)]
                    font-bold
                    leading-[0.94]
                    tracking-[-0.06em]
                    text-[#171936]
                  `
              }
            >
              {service.title}
            </h3>

            <p
              className={
                mobile
                  ? `
                    mt-5
                    max-w-[650px]
                    text-[14px]
                    leading-6
                    text-[#6d7d9d]
                    sm:text-[15px]
                    sm:leading-7
                  `
                  : `
                    mt-4
                    max-w-[680px]
                    text-[14px]
                    leading-6
                    text-[#6d7d9d]
                    xl:text-[15px]
                    xl:leading-7
                  `
              }
            >
              {service.description}
            </p>
          </div>

          {/* =======================================================
              DIVIDER
          ======================================================== */}

          <div
            className={
              mobile
                ? "relative z-10 my-6 h-px w-full"
                : "relative z-10 my-5 h-px w-full"
            }
            style={{
              background:
                "#e8e9ef",
            }}
          />

          {/* =======================================================
              BENEFITS
          ======================================================== */}

          <div className="relative z-10">
            <h4
              className={
                mobile
                  ? "text-[14px] font-bold text-[#20233f]"
                  : "text-[14px] font-bold text-[#20233f]"
              }
            >
              Key Benefits
            </h4>

            <div
              className={
                mobile
                  ? "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
                  : "mt-3 grid grid-cols-2 gap-x-7 gap-y-3"
              }
            >
              {service.benefits.map(
                (benefit) => (
                  <div
                    key={benefit}
                    className="
                      flex
                      items-start
                      gap-3
                      text-[12px]
                      leading-5
                      text-[#71819f]
                      sm:text-[13px]
                    "
                  >
                    <span
                      className="
                        mt-0.5
                        flex
                        h-4
                        w-4
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-white
                      "
                      style={{
                        background:
                          service.accent,
                      }}
                    >
                      <Check
                        size={10}
                        strokeWidth={3}
                      />
                    </span>

                    <span>
                      {benefit}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* =======================================================
              BOTTOM ACCENT
          ======================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-full
            "
            style={{
              background:
                service.accent,
            }}
          />
        </article>
      );
    };

  /* ================================================================
     RETURN
  ================================================================= */

  return (
    <section
      ref={sectionRef}
      id="services"
      data-sidebar-theme="light"
      className="
        relative
        overflow-hidden
        bg-[#f8f8fa]
        text-[#171936]
        section-with-left-nav
      "
    >
      {/* ==============================================================
          DESKTOP
      =============================================================== */}

      <div
        className="
          relative
          hidden
          h-[100svh]
          min-h-[680px]
          overflow-hidden
          lg:block
        "
      >
        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-[1750px]
            flex-col
            px-8
            py-8
            xl:px-10
            xl:py-9
          "
        >
          {/* ========================================================
              HEADER
          ========================================================= */}

          <div className="grid grid-cols-[1fr_0.65fr] gap-10">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-600" />

                <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-violet-600">
                  What We Do
                </span>
              </div>

 <h2 className="max-w-[780px] text-[clamp(3.2rem,4.7vw,5.4rem)] font-bold leading-[0.93] tracking-[-0.065em]">
  Built for attention.
  <br />
  <span className="bg-gradient-to-r from-[#9b4dff] via-[#7436f2] to-[#6b21ff] bg-clip-text text-transparent">
    Designed for growth.
  </span>
</h2>
            </div>
          </div>

          {/* ========================================================
              MAIN
              
              CARD = WIDER
              BUTTONS = NARROWER
          ========================================================= */}

          <div
            className="
              mt-5
              grid
              min-h-0
              flex-1
              grid-cols-[minmax(0,1.5fr)_minmax(280px,.58fr)]
              gap-10
              xl:grid-cols-[minmax(0,1.6fr)_minmax(300px,.55fr)]
              xl:gap-14
            "
          >
            {/* ======================================================
                LEFT CARD
            ======================================================= */}

            <div
              ref={desktopCardsRef}
              className="
                relative
                min-h-0
                overflow-visible
              "
              style={{
                perspective:
                  "1400px",
              }}
            >
              {services.map(
                (
                  service,
                  index
                ) =>
                  renderServiceCard(
                    service,
                    index,
                    false
                  )
              )}
            </div>

            {/* ======================================================
                RIGHT NAV
            ======================================================= */}

            <div className="flex min-h-0 items-center justify-end">
              <div className="w-full max-w-[370px] space-y-2.5">
                {services.map(
                  (
                    service,
                    index
                  ) => {
                    const Icon =
                      service.icon;

                    const isActive =
                      activeIndex ===
                      index;

                    return (
                      <button
                        key={
                          service.id
                        }
                        type="button"
                        onClick={() =>
                          goToService(
                            index
                          )
                        }
                        className="
                          group
                          relative
                          flex
                          w-full
                          items-center
                          gap-3
                          overflow-hidden
                          rounded-[19px]
                          border
                          p-2.5
                          text-left
                          transition-all
                          duration-500
                        "
                        style={{
                          borderColor:
                            isActive
                              ? `${service.accent}65`
                              : "#e3e4eb",

                          background:
                            isActive
                              ? "#ffffff"
                              : "rgba(255,255,255,.72)",

                          boxShadow:
                            isActive
                              ? `0 14px 40px ${service.accent}18`
                              : "0 7px 24px rgba(40,40,80,.035)",
                        }}
                      >
                        {/* Active line */}

                        <span
                          className="
                            absolute
                            left-0
                            top-1/2
                            h-7
                            w-[3px]
                            -translate-y-1/2
                            rounded-r-full
                            transition-all
                            duration-500
                          "
                          style={{
                            background:
                              isActive
                                ? service.accent
                                : "transparent",
                          }}
                        />

                        {/* Icon */}

                        <span
                          className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-[16px]
                            transition-all
                            duration-500
                          "
                          style={{
                            background:
                              isActive
                                ? `linear-gradient(135deg, ${service.accent}, ${service.accentSoft})`
                                : "#f3f4f8",

                            color:
                              isActive
                                ? "#ffffff"
                                : service.accent,

                            boxShadow:
                              isActive
                                ? `0 10px 24px ${service.accent}35`
                                : "none",
                          }}
                        >
                          <Icon
                            size={22}
                            strokeWidth={1.9}
                          />
                        </span>

                        {/* Text */}

                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[14px] font-bold tracking-[-0.015em] text-[#20233f]">
                            {
                              service.shortTitle
                            }
                          </span>

                          <span className="mt-0.5 block truncate text-[11px] text-[#7b8ba8]">
                            {
                              service.subtitle
                            }
                          </span>
                        </span>

                        {/* Number */}

                        <span
                          className="
                            hidden
                            text-[11px]
                            font-bold
                            tracking-[0.08em]
                            sm:block
                          "
                          style={{
                            color:
                              isActive
                                ? service.accent
                                : "#a4aabd",
                          }}
                        >
                          {
                            service.id
                          }
                        </span>

                        {/* Arrow */}

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            transition-all
                            duration-500
                          "
                          style={{
                            background:
                              isActive
                                ? service.accent
                                : "#f1f2f6",

                            color:
                              isActive
                                ? "#ffffff"
                                : "#8b94aa",
                          }}
                        >
                          <ArrowRight
                            size={15}
                            className="
                              transition-transform
                              duration-300
                              group-hover:translate-x-0.5
                            "
                          />
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* ========================================================
              DESKTOP FOOTER
              
              Explore Projects REMOVED
          ========================================================= */}
        </div>
      </div>

      {/* ==============================================================
          MOBILE
          
          NORMAL SCROLL
          NO PIN
          FLYING SIDE ANIMATION
          NO EXPLORE BUTTON
      =============================================================== */}

      <div className="block lg:hidden">
        <div className="px-5 pb-16 pt-12 sm:px-7 sm:pt-16">
          {/* ========================================================
              MOBILE HEADER
          ========================================================= */}

          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-violet-600" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">
                What We Do
              </span>
            </div>

            <h2 className="max-w-[650px] text-[clamp(2.65rem,11vw,4.2rem)] font-bold leading-[0.93] tracking-[-0.065em]">
              Services built to
              <br />

              <span className="bg-gradient-to-r from-[#9b4dff] via-[#7436f2] to-[#6b21ff] bg-clip-text text-transparent">
                move your business
                forward.
              </span>
            </h2>

            <p className="mt-5 max-w-[620px] text-[14px] leading-6 text-[#7182a1] sm:text-[15px] sm:leading-7">
              From paid advertising
              to high-converting
              websites, we build
              the systems that turn
              attention into
              measurable growth.
            </p>
          </div>

          {/* ========================================================
              MOBILE CARDS
              
              SIDE → CENTER FLYING ANIMATION
          ========================================================= */}

          <div
            ref={mobileCardsRef}
            className="
              mt-8
              space-y-5
              overflow-visible
              sm:mt-10
              sm:space-y-7
            "
          >
            {services.map(
              (
                service,
                index
              ) =>
                renderServiceCard(
                  service,
                  index,
                  true
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}