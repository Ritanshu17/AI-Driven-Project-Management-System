import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Globe,
} from "lucide-react";

const information = [
  {
    icon: Mail,
    label: "Email",
    value: "admin@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra",
  },
  {
    icon: Briefcase,
    label: "Role",
    value: "Software Engineer",
  },
  {
    icon: Globe,
    label: "Website",
    value: "projectpilot.ai",
  },
  {
    icon: Calendar,
    label: "Joined",
    value: "July 2026",
  },
];

export default function PersonalInformation() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

      <h2 className="mb-6 text-lg font-semibold">
        Personal Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {information.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-start gap-4"
            >
              <div className="rounded-lg bg-[var(--background)] p-2">
                <Icon
                  size={18}
                  className="text-[var(--accent)]"
                />
              </div>

              <div>
                <p className="text-sm text-[var(--muted)]">
                  {item.label}
                </p>

                <p className="mt-1 font-medium">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}