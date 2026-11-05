"use client";

import { motion } from "framer-motion";

import type { principles } from "@/data/About";

const ease = [0.22, 1, 0.36, 1] as const;

const principleVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const reducedVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function PrincipleCard({
  item,
  reduceMotion,
}: {
  item: (typeof principles)[number];
  reduceMotion: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      variants={reduceMotion ? reducedVariants : principleVariants}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease }}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.015 }}
      className="
        group/principle
        relative
        flex
        min-h-[145px]
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-white/[0.025]
        p-3.5
        text-white
        transition-colors
        duration-300
        hover:border-[#B3D31E]
        hover:bg-[#B3D31E]
        hover:text-[#111111]
        sm:min-h-[155px]
        sm:rounded-2xl
        sm:p-4
      "
    >
      <div className="relative flex items-center justify-between">
        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/[0.04]
            text-[#B3D31E]
            transition-all
            duration-300
            group-hover/principle:border-black/15
            group-hover/principle:bg-black/10
            group-hover/principle:text-[#111111]
            sm:h-9
            sm:w-9
          "
        >
          <Icon size={16} />
        </span>

        <span className="text-[9px] font-bold tracking-[0.14em] text-white/30 transition-colors duration-300 group-hover/principle:text-black/55">
          {item.number}
        </span>
      </div>

      <div className="relative mt-3">
        <h4 className="text-sm font-bold tracking-[-0.025em] text-white/90 transition-colors duration-300 group-hover/principle:text-[#111111] sm:text-base">
          {item.title}
        </h4>

        <p className="mt-1.5 text-[11px] leading-[1.6] text-white/45 transition-colors duration-300 group-hover/principle:text-black/75 sm:text-xs sm:leading-5">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}