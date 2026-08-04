import { Task } from "./types";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Design Login Screen",
    description: "Create responsive authentication page.",
    priority: "High",
    status: "Todo",
    assignee: "Ritanshu",
    order: 0,

    dueDate: "2026-08-15",
    createdAt: "2026-07-20",
    updatedAt: "2026-07-28",
  },
  {
    id: 2,
    title: "Setup Authentication",
    description: "Implement JWT authentication.",
    priority: "Critical",
    status: "In Progress",
    assignee: "Alex",
    order:1,

    dueDate: "2026-06-15",
    createdAt: "2026-05-20",
    updatedAt: "2026-05-28",
  },
  {
    id: 3,
    title: "Deploy Frontend",
    description: "Deploy using Vercel.",
    priority: "Medium",
    status: "Done",
    assignee: "Sarah",
    order:2,

    dueDate: "2026-07-15",
    createdAt: "2026-06-20",
    updatedAt: "2026-06-28",
  },
];