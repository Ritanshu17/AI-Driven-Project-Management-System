"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store/sidebarStore";

import {
  FolderKanban,
  LayoutDashboard,
  Settings,
  UserCircle2,
} from "lucide-react";



const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed } = useSidebarStore();
  
  return (
    <aside className= {`flex h-screen flex-col border-r border-[var(--border)] bg-[var(--surface)] transition-all duration-300 ease-in-out ${
      isCollapsed ? "w-20" : "w-64"
    }`}
    >

      {/* Logo */}
      <div 
        className={`border-b border-[var(--border)] ${
          isCollapsed ? "flex items-center justify-center p-4" : "p-6"
        }`}
      >
        <div
          className={`flex items-center ${
            isCollapsed
            ? "justify-center"
            : "gap-3"
        }`}
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] font-bold text-white">
            EW
          </div>

        {!isCollapsed && (
          <div>
            <h2 className="font-semibold">
              Engineering Workspace
            </h2>

            <p className="text-xs text-[var(--muted)]">
              Project Management
            </p>
          </div>
        )}
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`flex-1 ${
          isCollapsed ? "p-2" : "p-4"
        }`}
      >
        <ul className="space-y-2">

          {navigation.map((item) => {
            const Icon = item.icon;

            const active = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center rounded-lg py-3 transition-all duration-300 ${
                    isCollapsed
                    ? "h-11 justify-center px-0"
                    : "gap-3 px-4"
                  } ${
                    active
                      ? "bg-[var(--accent)] text-white"
                      : "hover:bg-[var(--border)]"
                  }`}
                >
                  <Icon size={20} 
                  className="shrink-0"
                  />

                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}

        </ul>

      </nav>

      {/* User */}
      <div
        className={`border-t border-[var(--border)] ${
          isCollapsed ? "p-2" : "p-4"
        }`}
      >

        <button
          className={`mx-auto flex items-center rounded-lg py-3 transition-all duration-300 hover:bg-[var(--border)] ${
            isCollapsed
              ? "h-11 w-11 justify-center"
              : "w-full gap-3 px-4"
          }`}
        >

          <UserCircle2 size={28} />

        { !isCollapsed && (
            <div className="text-left">

              <p className="font-medium">
                Ritanshu
              </p>

              <p className="text-xs text-[var(--muted)]">
                AI Engineer
              </p>

          </div>
        )}
        </button>

      </div>

    </aside>
  );
}