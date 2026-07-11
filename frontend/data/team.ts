export interface TeamMember {
  id: number;
  name: string;
  role: string;
  status: "online" | "offline";
  project: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ritanshu",
    role: "AI Engineer",
    status: "online",
    project: "Engineering Workspace",
  },
  {
    id: 2,
    name: "John Carter",
    role: "Frontend Developer",
    status: "online",
    project: "Mobile App",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Backend Developer",
    status: "offline",
    project: "ERP Migration",
  },
  {
    id: 4,
    name: "Sophia Wilson",
    role: "UI/UX Designer",
    status: "online",
    project: "Dashboard Redesign",
  },
];
