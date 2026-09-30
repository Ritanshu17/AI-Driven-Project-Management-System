"use client";

import { Task } from "@/components/projects/data/types";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

interface TaskFormProps {
  task: Task;

  onChange: (task: Task) => void;
}

const priorityOptions = [
  "Low",
  "Medium",
  "High",
  "Critical",
];

const statusOptions = [
  "Backlog",
  "Todo",
  "In Progress",
  "Review",
  "Done",
];

export default function TaskForm({
  task,
  onChange,
}: TaskFormProps) {
  return (
    <div className="space-y-5">

      <Input
        label="Title"
        value={task.title}
        onChange={(e) =>
          onChange({
            ...task,
            title: e.target.value,
          })
        }
      />

      <Textarea
        label="Description"
        value={task.description}
        onChange={(e) =>
          onChange({
            ...task,
            description: e.target.value,
          })
        }
      />

      <div className="grid gap-4 md:grid-cols-2">

        <Select
          label="Priority"
          value={task.priority}
          options={priorityOptions}
          onChange={(e) =>
            onChange({
              ...task,
              priority: e.target
                .value as Task["priority"],
            })
          }
        />

        <Select
          label="Status"
          value={task.status}
          options={statusOptions}
          onChange={(e) =>
            onChange({
              ...task,
              status: e.target
                .value as Task["status"],
            })
          }
        />

      </div>

      <Input
        label="Assignee"
        value={task.assignee}
        onChange={(e) =>
          onChange({
            ...task,
            assignee: e.target.value,
          })
        }
      />

      <Input
        label="Due Date"
        type="date"
        value={task.dueDate}
        onChange={(e) =>
          onChange({
            ...task,
            dueDate: e.target.value,
          })
        }
      />

    </div>
  );
}