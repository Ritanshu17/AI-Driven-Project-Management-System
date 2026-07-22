"use client";


import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";

import {
  Bell,
  Menu,
  Search,
  UserCircle,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { useSidebarStore } from "@/store/sidebarStore";

export default function Navbar() {
  const { toggleSidebar } = useSidebarStore();
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };
  return (
    <header className="flex h-16 items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-6">

      {/* Left Section */}
      <div className="flex items-center gap-3">

        <button
          onClick={toggleSidebar}
          className="rounded-lg p-2 transition hover:bg-[var(--border)]"
          aria-label="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Center Section */}
      <div className="hidden flex-1 px-6 md:block">

        <div className="mx-auto flex max-w-md items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2">

          <Search
            size={18}
            className="text-[var(--muted)]"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
          />

        </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">

        <ThemeToggle />

        <button
          className="rounded-lg p-2 transition hover:bg-[var(--border)]"
        >
          <Bell size={20} />
        </button>

        <button
          className="rounded-lg p-2 transition hover:bg-[var(--border)]"
        >
          <UserCircle size={24} />
        </button>
        
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg border px-3 py-2 hover:bg-[var(--card-hover)] transition-colors"
        >
          <LogOut size={16} />
          Logout
        </button>


      </div>

    </header>
  );
}