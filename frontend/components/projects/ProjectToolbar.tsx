"use client";

import { Search, Plus } from "lucide-react";

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
  { label: "In Progress", value: "progress" },
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
  onCreateProject: () => void;
}


export default function ProjectToolbar({
  search,
  onSearchChange,
  onCreateProject,
}: ProjectToolbarProps) {
  return (
    <div className="flex flex-col gap-4 p-6">

      {/* Search */}

      <div className="flex-1">

        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Projects..."
          leftIcon={<Search size={18} />}
        />

      </div>

      {/* Priority */}

      <div className="w-full lg:w-48">

        <Select
          options={priorityOptions}
        />

      </div>

      {/* Status */}

      <div className="w-full lg:w-48">

        <Select
          options={statusOptions}
        />

      </div>

      {/* Sort */}

      <div className="w-full lg:w-52">

        <Select
          options={sortOptions}
        />

      </div>

      {/* Button */}

      <Button
        leftIcon={<Plus size={18} />}
        onClick={onCreateProject}
      >
        New Project
      </Button>

    </div>
  );
  
}