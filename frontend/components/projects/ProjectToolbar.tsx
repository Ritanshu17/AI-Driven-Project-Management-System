"use client";

import { Search, Plus, LayoutGrid, Table2, SquareKanban} from "lucide-react";

import {
  Button,
  Input,
  Select,
} from "@/components/ui";

const priorityOptions = [
  { label: "All Priorities", value: "all" },
  { label: "Critical", value: "critical" },
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

const statusOptions = [
  { label: "All Status", value: "all" },
  { label: "Planning", value: "planning" },
  { label: "In Progress", value: "in progress" },
  { label: "Completed", value: "completed" },
];


const sortOptions = [
  { label: "Recently Updated", value: "updated" },
  { label: "Deadline", value: "deadline" },
  { label: "Progress", value: "progress" },
  { label: "Alphabetical", value: "name" },
];

interface ProjectToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  priority: string;
  onPriorityChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  sort: string;
  onSortChange: (value: string) => void;

  

  view: "grid" | "table" | "kanban";
  onViewChange: (view: "grid" | "table" | "kanban") => void;

  onCreateProject: () => void;
}


export default function ProjectToolbar({
  search,
  onSearchChange,

  priority,
  onPriorityChange,

  status,
  onStatusChange,

  sort,
  onSortChange,

  view,
  onViewChange,

  onCreateProject,
}: ProjectToolbarProps) {
return (
  <div className="space-y-6">

    {/* Top Right Controls */}
    <div className="flex justify-end items-center gap-2">
      <Button
        variant={view === "grid" ? "primary" : "outline"}
        size="icon"
        onClick={() => onViewChange("grid")}
      >
        <LayoutGrid size={18} />
      </Button>

      <Button
        variant={view === "table" ? "primary" : "outline"}
        size="icon"
        onClick={() => onViewChange("table")}
      >
        <Table2 size={18} />
      </Button>

      <Button
        variant={view === "kanban" ? "primary" : "outline"}
        size="icon"
        onClick={() => onViewChange("kanban")}
      >
        <SquareKanban size={18} />
      </Button>

      <Button
        leftIcon={<Plus size={18} />}
        onClick={onCreateProject}
      >
        New Project
      </Button>
    </div>

    {/* Search & Filters */}
    <div className="flex flex-col gap-4">
      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search Projects..."
        leftIcon={<Search size={18} />}
      />

      <Select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
        options={priorityOptions}
      />

      <Select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        options={statusOptions}
      />

      <Select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        options={sortOptions}
      />
    </div>

  </div>
);
}