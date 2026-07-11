export interface DashboardStat {
  id: number;
  title: string;
  value: string | number;
  description: string;
  icon: "projects" | "tasks" | "members" | "sprint";
}

export const dashboardStats: DashboardStat[] = [
  {
    id: 1,
    title: "Projects",
    value: 12,
    description: "+2 Active",
    icon: "projects",
  },
  {
    id: 2,
    title: "Tasks",
    value: 148,
    description: "32 Completed",
    icon: "tasks",
  },
  {
    id: 3,
    title: "Members",
    value: 8,
    description: "All Online",
    icon: "members",
  },
  {
    id: 4,
    title: "Sprint",
    value: "92%",
    description: "Completion",
    icon: "sprint",
  },
];