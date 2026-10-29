import {
  Compass,
  Gauge,
  Layers3,
  MousePointer2,
} from "lucide-react";

export const principles = [
  {
    number: "01",
    title: "Clarity first",
    description:
      "We simplify complex ideas into digital experiences people can understand quickly.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design with purpose",
    description:
      "Every visual decision has a reason, from hierarchy and motion to interaction and conversion.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Measure what matters",
    description:
      "We care about what happens after the click, not just how the work looks on screen.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Refine relentlessly",
    description:
      "Strong digital work comes from testing, reviewing, polishing, and improving the details.",
    icon: MousePointer2,
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "We learn the business, audience, problem, and desired outcome before making decisions.",
  },
  {
    number: "02",
    title: "Create",
    text: "We turn strategy into a clear creative direction, visual language, and digital experience.",
  },
  {
    number: "03",
    title: "Build",
    text: "We develop, produce, launch, and connect every important piece into one working system.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "We review the details, measure what matters, and keep improving the experience.",
  },
] as const;
