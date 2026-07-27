import { Mail, Crown, Shield, User } from "lucide-react";
import Button from "@/components/ui/Button";

const members = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    role: "Owner",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john@example.com",
    role: "Member",
    status: "Pending",
  },
];

const roleIcon = {
  Owner: Crown,
  Admin: Shield,
  Member: User,
};

export default function MembersSettings() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-semibold">
            Workspace Members
          </h2>

          <p className="mt-2 text-[var(--muted)]">
            Manage your team members and their permissions.
          </p>
        </div>

        <Button>
          Invite Member
        </Button>

      </div>

      <div className="space-y-4">

        {members.map((member) => {
          const Icon = roleIcon[member.role as keyof typeof roleIcon];

          return (
            <div
              key={member.id}
              className="flex items-center justify-between rounded-lg border border-[var(--border)] p-4"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-semibold text-white">
                  {member.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-medium">
                    {member.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-[var(--muted)]">
                    <Mail size={14} />
                    {member.email}
                  </div>

                </div>

              </div>

              <div className="flex items-center gap-6">

                <div className="flex items-center gap-2 text-sm">

                  <Icon size={16} />

                  {member.role}

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    member.status === "Active"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                  }`}
                >
                  {member.status}
                </span>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}