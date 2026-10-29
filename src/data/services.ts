import {
  Film,
  Gauge,
  Globe2,
  Megaphone,
  Search,
} from "lucide-react";

import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "01",
    title: "Web Development",
    shortTitle: "Web Solutions",
    description:
      "Build modern, scalable websites that help businesses grow and stand out online.",
    benefits: [
      "Custom website development",
      "Responsive UI/UX design",
      "Performance & SEO optimization",
    ],
    accent: "#8450EE",
    accentSoft: "#6935D3",
    icon: Globe2,
    direction: "left",
  },
  {
    id: "02",
    title: "Facebook & Instagram Ads",
    shortTitle: "Meta Ads",
    description:
      "Reach the right audience and turn paid social campaigns into measurable business growth.",
    benefits: [
      "Audience research & targeting",
      "Campaign setup & management",
      "Retargeting & ad optimization",
    ],
    accent: "#2563EB",
    accentSoft: "#1D4ED8",
    icon: Megaphone,
    direction: "right",
  },
  {
    id: "03",
    title: "Google Ads",
    shortTitle: "Paid Search",
    description:
      "Connect with high-intent customers through strategic search campaigns built to generate leads and sales.",
    benefits: [
      "Keyword research & strategy",
      "Search & display campaigns",
      "Conversion-focused optimization",
    ],
    accent: "#0891B2",
    accentSoft: "#0E7490",
    icon: Search,
    direction: "bottom",
  },
  {
    id: "04",
    title: "Conversion Tracking & Analytics",
    shortTitle: "Analytics",
    description:
      "Track customer actions and understand which marketing efforts drive meaningful results.",
    benefits: [
      "GA4 & Google Tag Manager",
      "Meta Pixel & Conversions API",
      "Custom events & reporting",
    ],
    accent: "#EA580C",
    accentSoft: "#C2410C",
    icon: Gauge,
    direction: "left",
  },
  {
    id: "05",
    title: "Video Editing & Creative",
    shortTitle: "Video & Motion",
    description:
      "Create compelling video content and ad creatives that capture attention and communicate your brand.",
    benefits: [
      "Short-form video editing",
      "Social media ad creatives",
      "Motion graphics & sound design",
    ],
    accent: "#DB2777",
    accentSoft: "#BE185D",
    icon: Film,
    direction: "right",
  },
];