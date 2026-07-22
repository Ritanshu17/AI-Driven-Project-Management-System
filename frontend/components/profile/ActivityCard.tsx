import {
  CheckCircle2,
  FolderKanban,
  UserPlus,
} from "lucide-react";

const activities = [
  {
    icon: FolderKanban,
    title: "Created Project Alpha",
    time: "2 hours ago",
  },
  {
    icon: CheckCircle2,
    title: "Completed Dashboard UI",
    time: "Yesterday",
  },
  {
    icon: UserPlus,
    title: "Joined Workspace",
    time: "3 days ago",
  },
];

export default function ActivityCard() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">

      <h2 className="mb-5 text-lg font-semibold">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">

                <Icon
                  className="text-[var(--accent)]"
                  size={20}
                />

                <span>{activity.title}</span>

              </div>

              <span className="text-sm text-[var(--muted)]">
                {activity.time}
              </span>
            </div>
          );
        })}

      </div>

    </div>
  );
}