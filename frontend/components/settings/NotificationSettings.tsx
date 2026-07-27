"use client";

import { useState } from "react";
import {
  Mail,
  Bell,
  ClipboardCheck,
  FolderKanban,
  CalendarDays,
  Megaphone,
} from "lucide-react";

const initialSettings = [
  {
    id: 1,
    icon: Mail,
    title: "Email Notifications",
    description: "Receive important updates via email.",
    enabled: true,
  },
  {
    id: 2,
    icon: Bell,
    title: "Push Notifications",
    description: "Show browser notifications.",
    enabled: true,
  },
  {
    id: 3,
    icon: ClipboardCheck,
    title: "Task Assignments",
    description: "Notify when tasks are assigned to you.",
    enabled: true,
  },
  {
    id: 4,
    icon: FolderKanban,
    title: "Project Updates",
    description: "Receive project activity notifications.",
    enabled: false,
  },
  {
    id: 5,
    icon: CalendarDays,
    title: "Weekly Summary",
    description: "Weekly report of your workspace activity.",
    enabled: true,
  },
  {
    id: 6,
    icon: Megaphone,
    title: "Marketing Emails",
    description: "Receive product announcements and tips.",
    enabled: false,
  },
];

export default function NotificationsSettings() {
  const [settings, setSettings] = useState(initialSettings);

  const toggleSetting = (id: number) => {
    setSettings((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, enabled: !item.enabled }
          : item
      )
    );
  };

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

      <h2 className="text-xl font-semibold">
        Notification Settings
      </h2>

      <p className="mt-2 text-[var(--muted)]">
        Choose how you'd like to receive notifications.
      </p>

      <div className="mt-8 space-y-5">

        {settings.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border border-[var(--border)] p-4"
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

              <button
                onClick={() => toggleSetting(item.id)}
                className={`relative h-6 w-11 rounded-full transition ${
                  item.enabled
                    ? "bg-[var(--accent)]"
                    : "bg-[var(--border)]"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                    item.enabled ? "left-5" : "left-0.5"
                  }`}
                />
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}