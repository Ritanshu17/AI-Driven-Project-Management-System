export interface ProjectProgressData {
  id: number;
  name: string;
  progress: number;
  members: number;
}

export const projectProgress: ProjectProgressData[] = [
  {
    id: 1,
    name: "AI Workspace",
    progress: 75,
    members: 6,
  },
  {
    id: 2,
    name: "ERP Migration",
    progress: 45,
    members: 4,
  },
  {
    id: 3,
    name: "Mobile Application",
    progress: 90,
    members: 8,
  },
  {
    id: 4,
    name: "Internal Dashboard",
    progress: 60,
    members: 5,
  },
];