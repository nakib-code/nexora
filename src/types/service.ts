import type { LucideIcon } from "lucide-react";

export type AnimationDirection =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "scale";

export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  benefits: string[];
  accent: string;
  accentSoft: string;
  icon: LucideIcon;
  direction: AnimationDirection;
};