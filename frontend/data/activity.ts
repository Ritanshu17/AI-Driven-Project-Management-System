export interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
  type: "success" | "info" | "warning";
}

export const activities: Activity[] = [
  {
    id: 1,
    title: "Dashboard module completed",
    description: "Dashboard UI has been implemented successfully.",
    time: "10 min ago",
    type: "success",
  },
  {
    id: 2,
    title: "Project updated",
    description: "Engineering Workspace project was modified.",
    time: "35 min ago",
    type: "info",
  },
  {
    id: 3,
    title: "Sprint deadline approaching",
    description: "Sprint 4 will end tomorrow.",
    time: "1 hour ago",
    type: "warning",
  },
];