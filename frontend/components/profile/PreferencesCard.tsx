"use client";

import { useState } from "react";
import {
  Bell,
  Monitor,
  Globe,
  LayoutDashboard,
} from "lucide-react";

export default function PreferencesCard() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [desktopNotifications, setDesktopNotifications] = useState(false);
  const [compactMode, setCompactMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  const preferences = [
    {
      icon: Bell,
      title: "Email Notifications",
      description: "Receive project updates by email.",
      enabled: emailNotifications,
      setEnabled: setEmailNotifications,
    },
    {
      icon: Monitor,
      title: "Desktop Notifications",
      description: "Show browser notifications.",
      enabled: desktopNotifications,
      setEnabled: setDesktopNotifications,
    },
    {
      icon: LayoutDashboard,
      title: "Compact Dashboard",
      description: "Display more content with reduced spacing.",
      enabled: compactMode,
      setEnabled: setCompactMode,
    },
    {
      icon: Globe,
      title: "Auto Save",
      description: "Automatically save your changes.",
      enabled: autoSave,
      setEnabled: setAutoSave,
    },
  ];

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

      <h2 className="mb-6 text-lg font-semibold">
        Preferences
      </h2>

      <div className="space-y-5">

        {preferences.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
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
                onClick={() => item.setEnabled(!item.enabled)}
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