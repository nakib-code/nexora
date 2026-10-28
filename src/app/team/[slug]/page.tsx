
import Link from "next/link";
import { notFound } from "next/navigation";

import { teamMembers } from "@/data/teamMembers";
import TeamHero from "@/components/team/TeamHero";
import TeamAboutServices from "@/components/team/TeamAboutServices";
import TeamProjects from "@/components/team/TeamProjects";
import { ArrowLeft } from "lucide-react";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TeamMemberPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const member = teamMembers.find((item) => item.id === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#17151b] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* 1. Hero */}
        <TeamHero member={member} />

        {/* 2. About + Services + Skills */}
        <TeamAboutServices member={member} />

        {/* 3. Projects / Case Studies */}
        <TeamProjects member={member} />

        {/* Back to Team */}
        <div className="mt-16 border-t border-white/10 py-8">
          <Link
            href="/#team"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-[#d6ff00] hover:text-[#d6ff00]"
          >
            <ArrowLeft size={16} />
            Back to Team
          </Link>
        </div>
      </div>
    </main>
  );
}
