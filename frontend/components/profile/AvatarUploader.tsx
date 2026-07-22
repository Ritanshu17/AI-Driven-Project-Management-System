"use client";

import { useRef, useState } from "react";
import { Camera, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function AvatarUploader() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [avatar, setAvatar] = useState<string | null>(null);

  const handleSelect = () => {
    inputRef.current?.click();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setAvatar(url);
  };

  const handleRemove = () => {
    setAvatar(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center">

      <div className="relative">

        {avatar ? (
          <img
            src={avatar}
            alt="Avatar"
            className="h-28 w-28 rounded-full object-cover border-4 border-[var(--border)]"
          />
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[var(--accent)] text-4xl font-bold text-white">
            A
          </div>
        )}

        <button
          type="button"
          onClick={handleSelect}
          className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-lg"
        >
          <Camera size={18} />
        </button>

      </div>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/*"
        onChange={handleChange}
      />

      {avatar && (
        <Button
          variant="outline"
          className="mt-4"
          onClick={handleRemove}
        >
          <Trash2 size={16} />
          Remove Avatar
        </Button>
      )}
        {/* {avatar && (
            <button onClick={handleRemove}>
                Remove Avatar
            </button>
        )} */}
    </div>
  );
}