
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { expertise } from "@/data/home";

export default function ExpertiseStrip() {
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;

  // Duplicate items to create a seamless scrolling strip.
  const items = [...expertise, ...expertise];

  return (
      <section
        data-sidebar-theme="dark"
        className="relative flex h-[120px] items-center overflow-hidden bg-[#C9F31E] text-[#050505]"
      >
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex w-max shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={
              reduceMotion
                ? undefined
                : {
                    duration: 24,
                    ease: "linear",
                    repeat: Infinity,
                  }
            }
          >
            {items.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="shrink-0 whitespace-nowrap text-lg font-extrabold tracking-tight text-[#050505] sm:text-2xl lg:text-3xl"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
  );
}
