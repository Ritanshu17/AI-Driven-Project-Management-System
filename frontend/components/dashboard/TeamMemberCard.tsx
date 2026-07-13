"use client";

import Card from "@/components/ui/Card"
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

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <Card
      className=" p-6"
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Avatar */}

        <div className="relative">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-bold text-white shadow-md">
            {initials}
          </div>

          <span
            className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[var(--background)] ${
              status === "online"
                ? "bg-emerald-500"
                : "bg-gray-400"
            }`}
          />

        </div>

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