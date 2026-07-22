"use client";

import { Mail, MapPin, Briefcase } from "lucide-react";
import Button from "@/components/ui/Button";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import AvatarUploader from "./AvatarUploader";

export default function ProfileCard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">

      <div className="flex flex-col items-center">

        <AvatarUploader />

        <h2 className="mt-5 text-xl font-semibold">
          Admin User
        </h2>

        <p className="text-[var(--muted)]">
          Software Engineer
        </p>

      </div>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3 text-sm">
          <Mail size={18} />
          <span>admin@example.com</span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <MapPin size={18} />
          <span>Pune, India</span>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Briefcase size={18} />
          <span>ProjectPilot Workspace</span>
        </div>

      </div>

      <Button
        fullWidth
        className="mt-8"
        onClick={() => setOpen(true)}
      >
        Edit Profile
      </Button>

      <EditProfileModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}