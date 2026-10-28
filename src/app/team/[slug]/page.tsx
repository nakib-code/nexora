import { notFound } from "next/navigation";

const teamMembers = [
  {
    id: "founder",
    name: "Your Name",
    role: "Founder & Creative Lead",
    specialty: "Strategy / Development",
    intro:
      "Leading Nexora Digital with a focus on strategy, digital experiences, and building work that connects creative thinking with real business goals.",
    image: "/me.png",
  },
  {
    id: "developer",
    name: "Team Member",
    role: "Full Stack Developer",
    specialty: "Web / Technology",
    intro:
      "Turning ideas into fast, responsive, and scalable digital experiences with clean development and thoughtful interaction.",
    image: "/me.png",
  },
  {
    id: "designer",
    name: "Team Member",
    role: "UI/UX & Graphic Designer",
    specialty: "Design / Visual Identity",
    intro:
      "Creating visual systems and interfaces that make brands feel clear, distinctive, and easy to understand.",
    image: "/me.png",
  },
  {
    id: "editor",
    name: "Team Member",
    role: "Video Editor",
    specialty: "Motion / Content",
    intro:
      "Turning raw ideas into engaging visual stories through editing, motion, pacing, and creative direction.",
    image: "/me.png",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function TeamMemberPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const member = teamMembers.find(
    (item) => item.id === slug
  );

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#17151b] px-6 py-20 text-white sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#854fee]">
            Nexora Digital / Team
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            {member.name}
          </h1>

          <p className="mt-5 text-xl text-[#d6ff00]">
            {member.role}
          </p>

          <p className="mt-3 text-sm uppercase tracking-widest text-white/50">
            {member.specialty}
          </p>

          <p className="mt-8 max-w-xl leading-8 text-white/65">
            {member.intro}
          </p>

          <a
            href="/#team"
            className="mt-10 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-[#d6ff00] hover:text-[#d6ff00]"
          >
            ← Back to Team
          </a>
        </div>

        <div className="relative aspect-[0.85] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}