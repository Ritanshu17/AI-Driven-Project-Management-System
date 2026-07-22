import {
  FolderKanban,
  CheckCircle2,
  ListTodo,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Projects",
    value: 18,
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    value: 142,
    icon: ListTodo,
  },
  {
    title: "Completed",
    value: 126,
    icon: CheckCircle2,
  },
  {
    title: "Team",
    value: 6,
    icon: Users,
  },
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-[var(--muted)]">
                  {stat.title}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {stat.value}
                </h3>

              </div>

              <Icon
                className="text-[var(--accent)]"
                size={28}
              />

            </div>
          </div>
        );
      })}
    </div>
  );
}