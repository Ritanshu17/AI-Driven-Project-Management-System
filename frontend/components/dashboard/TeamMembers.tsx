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
  <div className="space-y-5">
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

