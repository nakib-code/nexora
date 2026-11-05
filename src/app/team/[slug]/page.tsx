
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/teamMembers";
import TeamProjects from "@/components/team/member/TeamProjects";
import TeamServices from "@/components/team/member/TeamServices";
import TeamAboutSkills from "@/components/team/member/TeamAboutSkills";
import TeamMemberHero from "@/components/team/member/TeamHero";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.id,
  }));
}

export default async function TeamMemberPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const member = teamMembers.find((item) => item.id === slug);

  if (!member) {
    notFound();
  }

  return (
    <>
        {/* Hero */}
        <TeamMemberHero member={member} />
        <TeamAboutSkills member={member}/>
        <TeamServices member={member}/>
        <TeamProjects member={member} />
    </>
  );
}
