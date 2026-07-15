import { Project } from "components/projects/data/types";

export const projects: Project[] = [
  {
    id: 1,
    name: "AI Project Management",
    description:
      "AI-powered engineering workspace for teams.",

    progress: 72,

    priority: "High",

    status: "In Progress",

    members: 8,

    deadline: "15 Aug 2026",
  },

  {
    id: 2,
    name: "Customer Portal",

    description:
      "Modern client portal with authentication.",

    progress: 100,

    priority: "Medium",

    status: "Completed",

    members: 5,

    deadline: "01 Jul 2026",
  },

  {
    id: 3,
    name: "Analytics Dashboard",

    description:
      "Real-time analytics with AI insights.",

    progress: 48,

    priority: "Critical",

    status: "Planning",

    members: 6,

    deadline: "30 Sep 2026",
  },
];