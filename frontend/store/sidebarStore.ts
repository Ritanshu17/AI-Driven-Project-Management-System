import { create } from "zustand";

interface SidebarState {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  expandSidebar: () => void;
  collapseSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isCollapsed: false,

  toggleSidebar: () =>
    set((state) => ({
      isCollapsed: !state.isCollapsed,
    })),

  expandSidebar: () =>
    set({
      isCollapsed: false,
    }),

  collapseSidebar: () =>
    set({
      isCollapsed: true,
    }),
}));