"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EditProfileModal({
  open,
  onClose,
}: Props) {
  const [name, setName] = useState("Admin User");
  const [role, setRole] = useState("Software Engineer");
  const [email, setEmail] = useState("admin@example.com");
  const [location, setLocation] = useState("Pune, India");
  const [bio, setBio] = useState(
    "Building AI-powered software with modern technologies."
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">

      <div className="w-full max-w-2xl rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-xl">

        <div className="mb-6">

          <h2 className="text-2xl font-semibold">
            Edit Profile
          </h2>

          <p className="mt-1 text-sm text-[var(--muted)]">
            Update your personal information.
          </p>

        </div>

        <div className="space-y-5">

          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <Textarea
            label="Bio"
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            onClick={onClose}
          >
            Save Changes
          </Button>

        </div>

      </div>

    </div>
  );
}