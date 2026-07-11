"use client";

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
    <div className="flex items-center justify-between rounded-xl border border-[var(--border)] p-4 transition-all duration-300 hover:border-[var(--accent)]">

      <div className="flex items-center gap-4">

        {/* Avatar */}

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
          {initials}
        </div>

        {/* User Info */}

        <div>

          <h4 className="font-semibold">
            {name}
          </h4>

          <p className="text-sm text-[var(--muted)]">
            {role}
          </p>

        </div>

      </div>

      {/* Status */}

      <div className="text-right">

        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
            status === "online"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {status}
        </span>

        <p className="mt-2 text-xs text-[var(--muted)]">
          {project}
        </p>

      </div>

    </div>
  );
}