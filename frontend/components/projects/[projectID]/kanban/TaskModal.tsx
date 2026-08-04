"use client";

// import { useState } from "react";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import { Task } from "../../data/types";

interface TaskModalProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  mode?: "create" | "view" | "edit";

  task?: Task | null;
}

interface InfoItemProps {
  label: string;
  value?: string;
}

function InfoItem({
  label,
  value,
}: InfoItemProps) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">

      <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
        {label}
      </p>

      <p className="mt-2 font-medium">
        {value || "-"}
      </p>

    </div>
  );
}

export default function TaskModal({
  open,
  onOpenChange,
  mode = "create",
  task,
}: TaskModalProps) {

  return (
    <Modal
        open={open}
        onOpenChange={onOpenChange}
        title={
          mode === "create"
            ? "Create Task"
            : mode === "edit"
            ? "Edit Task"
            : task?.title ?? "Task Details"
        }
        description="Create a new task for this project."
        footer={
            <>
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Close
              </Button>

              {mode === "create" && (
                <Button>
                  Create Task
                </Button>
              )}

              {mode === "edit" && (
                <Button>
                  Save Changes
                </Button>
              )}

              {mode === "view" && (
                <Button>
                  Edit Task
                </Button>
              )}
            </>
          }
        >
        <div className="space-y-8">

          {/* Description */}

          <div>

            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
              Description
            </h3>

            <p className="leading-7 text-[var(--foreground)]">
              {mode === "create"
                ? "Describe the task..."
                : task?.description}
            </p>

          </div>

          {/* Task Info */}

          <div className="grid gap-6 md:grid-cols-2">

            <InfoItem
              label="Priority"
              value={
                mode === "create"
                  ? "-"
                  : task?.priority
              }
            />

            <InfoItem
              label="Status"
              value={
                mode === "create"
                  ? "-"
                  : task?.status
              }
            />

            <InfoItem
              label="Assignee"
              value={
                mode === "create"
                  ? "-"
                  : task?.assignee
              }
            />

            <InfoItem
              label="Due Date"
              value={
                mode === "create"
                  ? "-"
                  : task?.dueDate
              }
            />

            <InfoItem
              label="Created"
              value={
                mode === "create"
                  ? "-"
                  : task?.createdAt
              }
            />

            <InfoItem
              label="Updated"
              value={
                mode === "create"
                  ? "-"
                  : task?.updatedAt
              }
            />

          </div>

        </div>
    </Modal>
  );
}