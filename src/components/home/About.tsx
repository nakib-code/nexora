
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutStats } from "@/data/home";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#19171e] py-20 text-white sm:py-28"
    >
      <div className="container grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
            <span className="h-2 w-2 rounded-full bg-[#d6ff63]" />
            About Nexora
          </p>

          <h2 className="max-w-2xl text-4xl font-black leading-[1.03] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            We believe good digital work should{" "}
            <span className="text-[#d6ff63]">feel effortless.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
            Nexora Digital brings web development, video editing, UI/UX, and
            graphic design together under one creative direction. Our goal is
            to make useful things, solve real problems, and help brands show
            up with confidence.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#19171e] transition hover:bg-[#d6ff63]"
          >
            More About Us <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-36 flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.04] p-5 sm:min-h-44 sm:p-7"
            >
              <span className="text-4xl font-black tracking-[-0.07em] text-[#d6ff63] sm:text-5xl">
                {stat.value}
              </span>

              <span className="mt-5 text-xs leading-5 text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
