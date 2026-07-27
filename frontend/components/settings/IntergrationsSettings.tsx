"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  GitBranch,
  MessagesSquare,
  Mail,
  Database,
  Link2,
} from "lucide-react";

const integrations = [
  {
    id: 1,
    name: "GitHub",
    description: "Sync repositories, commits and pull requests.",
    icon: GitBranch,
    connected: true,
  },
  {
    id: 2,
    name: "Slack",
    description: "Receive project notifications in Slack channels.",
    icon: MessagesSquare,
    connected: false,
  },
  {
    id: 3,
    name: "Google Workspace",
    description: "Connect Google Calendar and Gmail.",
    icon: Mail,
    connected: false,
  },
  {
    id: 4,
    name: "Database Backup",
    description: "Automatic scheduled backups.",
    icon: Database,
    connected: true,
  },
];

export default function IntegrationsSettings() {
  const [apps, setApps] = useState(integrations);

  const toggleConnection = (id: number) => {
    setApps((prev) =>
      prev.map((app) =>
        app.id === id
          ? { ...app, connected: !app.connected }
          : app
      )
    );
  };

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

      <div className="mb-8">

        <h2 className="text-xl font-semibold">
          Integrations
        </h2>

        <p className="mt-2 text-[var(--muted)]">
          Connect third-party services with your workspace.
        </p>

      </div>

      <div className="space-y-5">

        {apps.map((app) => {
          const Icon = app.icon;

          return (
            <div
              key={app.id}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] p-5"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-lg bg-[var(--background)] p-3">
                  <Icon
                    size={24}
                    className="text-[var(--accent)]"
                  />
                </div>

                <div>

                  <h3 className="font-semibold">
                    {app.name}
                  </h3>

                  <p className="text-sm text-[var(--muted)]">
                    {app.description}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    app.connected
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  }`}
                >
                  {app.connected ? "Connected" : "Not Connected"}
                </span>

                <Button
                  variant={app.connected ? "outline" : "primary"}
                  onClick={() => toggleConnection(app.id)}
                >
                  <Link2 size={16} />

                  {app.connected ? "Disconnect" : "Connect"}

                </Button>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}