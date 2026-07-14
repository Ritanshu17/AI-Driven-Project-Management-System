"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title: string;
  description?: string;

  children: ReactNode;

  footer?: ReactNode;
}

export default function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
}: ModalProps) {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Portal>

        {/* Overlay */}

        <Dialog.Overlay
          className="
            fixed
            inset-0
            bg-black/50
            backdrop-blur-sm
            animate-in
            fade-in
            z-50
          "
        />

        {/* Content */}

        <Dialog.Content
          className="
            fixed
            left-1/2
            top-1/2
            z-50
            w-full
            max-w-lg
            -translate-x-1/2
            -translate-y-1/2
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            shadow-xl
            p-6
            animate-in
            zoom-in-95
          "
        >

          {/* Header */}

          <div className="flex items-start justify-between">

            <div>

              <Dialog.Title
                className="text-2xl font-semibold"
              >
                {title}
              </Dialog.Title>

              {description && (

                <Dialog.Description
                  className="mt-2 text-sm text-[var(--muted)]"
                >
                  {description}
                </Dialog.Description>

              )}

            </div>

            <Dialog.Close
              className="
                rounded-lg
                p-2
                hover:bg-[var(--border)]
              "
            >
              <X size={18} />
            </Dialog.Close>

          </div>

          {/* Body */}

          <div className="mt-6">

            {children}

          </div>

          {/* Footer */}

          {footer && (

            <div className="mt-8 flex justify-end gap-3">

              {footer}

            </div>

          )}

        </Dialog.Content>

      </Dialog.Portal>
    </Dialog.Root>
  );
}