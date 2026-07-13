"use client";

import { teamMembers } from "@/data/team";
import TeamMemberCard from "./TeamMemberCard";
import DashboardSection from "./DashboardSection";
export default function TeamMembers() {
  return (

  <DashboardSection
  title="Team Members"
  subtitle="Current workspace contributors"
>
  <div className="space-y-4">
    {teamMembers.map((member) => (
      <TeamMemberCard
        key={member.id}
        name={member.name}
        role={member.role}
        status={member.status}
        project={member.project}
      />
    ))}
  </div>
</DashboardSection>
  )
};

    // <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">

    //   <h2 className="mb-6 text-xl font-semibold">
    //     Team Members
    //   </h2>

    //   <div className="space-y-4">

    //     {teamMembers.map((member) => (
    //       <TeamMemberCard
    //         key={member.id}
    //         name={member.name}
    //         role={member.role}
    //         status={member.status}
    //         project={member.project}
    //       />
    //     ))}

    //   </div>

    // </section>