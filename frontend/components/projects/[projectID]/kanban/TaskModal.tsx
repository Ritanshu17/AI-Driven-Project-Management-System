"use client";

import { useState } from "react";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

interface TaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  
}

export default function TaskModal({
  open,
  onOpenChange,
}: TaskModalProps) {

  return (
    <Modal
        open={open}
        onOpenChange={onOpenChange}
        title="Add Task"
        description="Create a new task for this project."
        footer={
            <>
            <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
            >
                Cancel
            </Button>

            <Button>
                Create Task
            </Button>
            </>
        }
        >
        <div />
    </Modal>
  );
}