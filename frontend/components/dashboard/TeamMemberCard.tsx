"use client";

import Card from "@/components/ui/Card"
import { Avatar } from "../ui";

interface TeamMemberCardProps {
  name: string;
  role: string;
  status: "online" | "offline";
  project: string;
}

export default function TeamMemberCard({
  name,
  role,
  status,
  project,
}: TeamMemberCardProps) {


<Avatar
  name={name}
  status={status}
/>

  return (
    <Card
      className=" p-6"
    >
      {/* Left */}

      <div className="flex items-center gap-4">


        {/* Info */}

        <div>

          <h3 className="font-semibold transition-colors duration-300 group-hover:text-[var(--accent)]">
            {name}
          </h3>

          <p className="mt-1 text-sm text-[var(--muted)]">
            {role}
          </p>

          <span className="mt-3 inline-block rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]">
            {project}
          </span>

        </div>

      </div>

      {/* Right */}

      <div className="text-right">

        <p
          className={`text-sm font-semibold ${
            status === "online"
              ? "text-emerald-500"
              : "text-gray-500"
          }`}
        >
          {status === "online"
            ? "Active Now"
            : "Offline"}
        </p>

      </div>


    </Card>
  );
}