export interface Project {
  id: number;
  name: string;
  description: string;
  progress: number;
  priority: string;
  status: string;
  members: number;
  deadline: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;

  priority: "Low" | "Medium" | "High" | "Critical";

  status:
    | "Backlog"
    | "Todo"
    | "In Progress"
    | "Review"
    | "Done";

  assignee: string;
}