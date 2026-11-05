"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

const revealFrom: Record<
  RevealVariant,
  { x: number; y: number; scale: number; filter: string }
> = {
  up: { x: 0, y: 35, scale: 1, filter: "blur(0px)" },
  left: { x: -45, y: 0, scale: 1, filter: "blur(0px)" },
  right: { x: 45, y: 0, scale: 1, filter: "blur(0px)" },
  scale: { x: 0, y: 0, scale: 0.92, filter: "blur(0px)" },
  blur: { x: 0, y: 20, scale: 0.98, filter: "blur(8px)" },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  duration = 0.75,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  const from = revealFrom[variant];

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...from }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}