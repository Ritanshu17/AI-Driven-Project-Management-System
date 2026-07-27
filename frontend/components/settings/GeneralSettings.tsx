"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function GeneralSettings() {
  const [workspaceName, setWorkspaceName] = useState("ProjectPilot");

  const [workspaceUrl, setWorkspaceUrl] = useState("projectpilot");

  const [description, setDescription] = useState(
    "AI-powered project management platform."
  );

  const [timezone, setTimezone] = useState(
    "(GMT+05:30) Asia/Kolkata"
  );

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

      <h2 className="text-xl font-semibold">
        General Settings
      </h2>

      <p className="mt-2 text-[var(--muted)]">
        Manage your workspace information.
      </p>

      <div className="mt-8 space-y-6">

        {/* Workspace Name */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Workspace Name
          </label>

          <input
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none focus:border-[var(--accent)]"
          />
        </div>

        {/* Workspace URL */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Workspace URL
          </label>

          <input
            value={workspaceUrl}
            onChange={(e) => setWorkspaceUrl(e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none focus:border-[var(--accent)]"
          />
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none focus:border-[var(--accent)]"
          />
        </div>

        {/* Timezone */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Time Zone
          </label>

          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 outline-none focus:border-[var(--accent)]"
          >
            <option>(GMT+05:30) Asia/Kolkata</option>
            <option>(UTC+00:00) London</option>
            <option>(UTC−05:00) New York</option>
            <option>(UTC+01:00) Berlin</option>
            <option>(UTC+09:00) Tokyo</option>
            <option>(UTC+10:00) Sydney</option>
          </select>
        </div>

        <div className="flex justify-end">
          <Button>
            Save Changes
          </Button>
        </div>

      </div>

    </div>
  );
}