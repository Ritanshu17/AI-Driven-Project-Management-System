import {
  Lock,
  ShieldCheck,
  Monitor,
  Clock,
  ChevronRight,
} from "lucide-react";

const securityOptions = [
  {
    icon: Lock,
    title: "Change Password",
    description: "Update your account password.",
  },
  {
    icon: ShieldCheck,
    title: "Two-Factor Authentication",
    description: "Coming soon",
  },
  {
    icon: Monitor,
    title: "Active Sessions",
    description: "View devices currently signed in.",
  },
  {
    icon: Clock,
    title: "Login Activity",
    description: "Review recent login history.",
  },
];

export default function SecurityCard() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

      <h2 className="mb-6 text-lg font-semibold">
        Security
      </h2>

      <div className="divide-y divide-[var(--border)]">

        {securityOptions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="flex w-full items-center justify-between py-5 text-left transition hover:bg-[var(--background)] rounded-lg px-2"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-lg bg-[var(--background)] p-2">
                  <Icon
                    size={18}
                    className="text-[var(--accent)]"
                  />
                </div>

                <div>
                  <h3 className="font-medium">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>

              </div>

              <ChevronRight
                size={18}
                className="text-[var(--muted)]"
              />
            </button>
          );
        })}

      </div>

    </div>
  );
}