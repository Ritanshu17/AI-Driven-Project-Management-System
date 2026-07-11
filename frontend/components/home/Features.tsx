import {
  LayoutDashboard,
  FolderKanban,
  Users,
  ClipboardCheck,
  MoonStar,
  Settings,
} from "lucide-react";

const features = [
  {
    title: "Dashboard",
    description:
      "View projects, tasks and workspace updates from one organized dashboard.",
    icon: LayoutDashboard,
  },
  {
    title: "Project Management",
    description:
      "Create, organize and monitor engineering projects with a clean interface.",
    icon: FolderKanban,
  },
  {
    title: "Team Workspace",
    description:
      "Collaborate with teammates and keep everyone aligned on project goals.",
    icon: Users,
  },
  {
    title: "Task Tracking",
    description:
      "Track project tasks, monitor progress and stay on schedule.",
    icon: ClipboardCheck,
  },
  {
    title: "Dark Mode",
    description:
      "Comfortable light and dark themes with seamless switching.",
    icon: MoonStar,
  },
  {
    title: "Workspace Settings",
    description:
      "Customize your workspace preferences and personalize your experience.",
    icon: Settings,
  },
];

export default function Features() {
  return (
    <section className="relative border-t border-[var(--border)] py-28">

      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}

        <div className="mb-16 text-center">

          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)]">
            Engineering Workspace provides essential tools to
            manage projects, collaborate with teams and keep
            development organized.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)] hover:shadow-lg"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)]/10">

                  <Icon
                    size={28}
                    className="text-[var(--accent)]"
                  />

                </div>

                <h3 className="mb-3 text-left text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="flex-1 text-left leading-7 text-[var(--muted)]">
                  {feature.description}
                </p>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}