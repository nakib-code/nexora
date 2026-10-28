
import TeamCard from "@/components/team/TeamCard";
import { teamMembers } from "@/data/teamMembers";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0d] px-5 py-24 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
          The People Behind Our Work
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Meet the minds
          <br />
          behind the magic.
        </h1>

        <p className="mt-6 max-w-xl leading-7 text-neutral-400">
          Meet the people who turn ambitious ideas into meaningful digital
          experiences.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </div>
    </main>
  );
}
