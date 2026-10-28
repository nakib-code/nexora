
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeamScrollReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-reveal",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="space-y-5 px-5 py-20 sm:px-8 lg:px-16"
    >
      <p className="team-reveal text-sm uppercase tracking-widest text-neutral-500">
        Our Philosophy
      </p>

      <h2 className="team-reveal max-w-3xl text-4xl font-semibold text-white sm:text-6xl">
        Thoughtful work.
        <br />
        Meaningful impact.
      </h2>

      <p className="team-reveal max-w-xl leading-8 text-neutral-400">
        We combine creativity, technology, and collaboration to create
        better digital experiences.
      </p>
    </section>
  );
}
