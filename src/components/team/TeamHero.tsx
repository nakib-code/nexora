
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import type { TeamMember } from "@/data/teamMembers";

type TeamHeroProps = {
  member: TeamMember;
};

export default function TeamHero({ member }: TeamHeroProps) {
  return (
    <section className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      <div>
        <Link
          href="/#team"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#d6ff00]"
        >
          <ArrowLeft size={16} />
          Back to Team
        </Link>

        <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#854fee] sm:text-sm">
          <Sparkles size={15} />
          Nexora Digital / Team
        </p>

        <h1 className="break-words text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          {member.name}
        </h1>

        <p className="mt-5 text-xl font-medium text-[#d6ff00] sm:text-2xl">
          {member.role}
        </p>

        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/45 sm:text-sm">
          {member.specialty}
        </p>

        <p className="mt-6 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
          {member.intro}
        </p>
      </div>

      <div className="relative mx-auto aspect-[0.85] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] md:ml-auto">
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17151b]/40 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur-md">
          Nexora Digital
        </div>
      </div>
    </section>
  );
}
