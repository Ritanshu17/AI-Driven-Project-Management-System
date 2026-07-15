"use client";

import {
  Button,
  Input,
  Modal,
  Select,
  Textarea,
} from "@/components/ui";

import { useState } from "react";

import { Project } from "components/projects/data/types";

interface CreateProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (project: Project) => void;
}


const priorityOptions = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Critical", value: "critical" },
];

const statusOptions = [
  { label: "Planning", value: "planning" },
  { label: "In Progress", value: "progress" },
];


export default function CreateProjectModal({
  open,
  onOpenChange,
  onCreate,
}: CreateProjectModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("planning");

  const handleSubmit = () => {
  if (!name.trim()) return;

  onCreate({
    id: Date.now(),
    name,
    description,
    progress: 0,
    priority,
    status,
    members: 1,
    deadline: "No Deadline",
  });

  setName("");
  setDescription("");
  setPriority("medium");
  setStatus("planning");

  onOpenChange(false);
};
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Create Project"
      description="Create a new engineering project."
      footer={
        <>
          <Button
            variant="secondary"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button onClick={handleSubmit}>
            Create Project
          </Button>
        </>
      }
    >
      <div className="space-y-5">

        <Input
          label="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="AI Project Management"
        />

        

        <Textarea
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your project..."
        />

        <Select
          label="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          options={priorityOptions}
        />

        <Select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={statusOptions}
        />

      </div>
    </Modal>
  );
}