"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import Button from "@/components/ui/Button";
import {
  Sun,
  Moon,
  Monitor,
  Palette,
  PanelLeft,
  LayoutDashboard,
} from "lucide-react";

export default function AppearanceSettings() {
  const { theme, setTheme } = useTheme();

  const [sidebarStyle, setSidebarStyle] = useState("Expanded");
  const [accentColor, setAccentColor] = useState("Blue");
  const [compactMode, setCompactMode] = useState(false);

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

      <h2 className="text-xl font-semibold">
        Appearance
      </h2>

      <p className="mt-2 text-[var(--muted)]">
        Customize how ProjectPilot looks and feels.
      </p>

      <div className="mt-8 space-y-8">

        {/* Theme */}

        <div>
          <label className="mb-3 block text-sm font-medium">
            Theme
          </label>

          <div className="flex gap-3 flex-wrap">

            <Button
              variant={theme === "light" ? "primary" : "outline"}
              onClick={() => setTheme("light")}
            >
              <Sun size={16} />
              Light
            </Button>

            <Button
              variant={theme === "dark" ? "primary" : "outline"}
              onClick={() => setTheme("dark")}
            >
              <Moon size={16} />
              Dark
            </Button>

            <Button
              variant={theme === "system" ? "primary" : "outline"}
              onClick={() => setTheme("system")}
            >
              <Monitor size={16} />
              System
            </Button>

          </div>
        </div>

        {/* Sidebar Style */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Sidebar Style
          </label>

          <select
            value={sidebarStyle}
            onChange={(e) => setSidebarStyle(e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3"
          >
            <option>Expanded</option>
            <option>Collapsed</option>
            <option>Auto</option>
          </select>
        </div>

        {/* Accent Color */}

        <div>
          <label className="mb-2 block text-sm font-medium">
            Accent Color
          </label>

          <select
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3"
          >
            <option>Blue</option>
            <option>Purple</option>
            <option>Green</option>
            <option>Orange</option>
          </select>
        </div>

        {/* Compact Mode */}

        <div className="flex items-center justify-between rounded-lg border border-[var(--border)] p-4">

          <div className="flex items-center gap-4">

            <div className="rounded-lg bg-[var(--background)] p-2">
              <LayoutDashboard
                size={18}
                className="text-[var(--accent)]"
              />
            </div>

            <div>
              <h3 className="font-medium">
                Compact Mode
              </h3>

              <p className="text-sm text-[var(--muted)]">
                Reduce spacing across the interface.
              </p>
            </div>

          </div>

          <button
            onClick={() => setCompactMode(!compactMode)}
            className={`relative h-6 w-11 rounded-full transition ${
              compactMode
                ? "bg-[var(--accent)]"
                : "bg-[var(--border)]"
            }`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${
                compactMode ? "left-5" : "left-0.5"
              }`}
            />
          </button>

        </div>

      </div>

    </div>
  );
}