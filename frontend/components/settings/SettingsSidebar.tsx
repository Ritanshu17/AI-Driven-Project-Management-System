"use client";

interface Props {
  active: string;
  onChange: (section: string) => void;
}

const items = [
  "General",
  "Members",
  "Notifications",
  "Appearance",
  "Billing",
  "Integrations",
];

export default function SettingsSidebar({
  active,
  onChange,
}: Props) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">

      <nav className="space-y-2">

        {items.map((item) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`w-full rounded-lg px-4 py-3 text-left transition ${
              active === item
                ? "bg-[var(--accent)] text-white"
                : "hover:bg-[var(--background)]"
            }`}
          >
            {item}
          </button>
        ))}

      </nav>

    </div>
  );
}