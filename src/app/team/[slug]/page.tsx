
import { notFound } from "next/navigation";
import { teamMembers } from "@/data/teamMembers";
import TeamHero from "@/components/team/TeamHero";
import TeamProjects from "@/components/team/TeamProjects";
import TeamServices from "@/components/team/TeamServices";
import TeamAboutSkills from "@/components/team/TeamAboutSkills";

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
        <TeamHero member={member} />
        <TeamAboutSkills member={member}/>
        <TeamServices member={member}/>
        <TeamProjects member={member} />
    </>
  );
}
