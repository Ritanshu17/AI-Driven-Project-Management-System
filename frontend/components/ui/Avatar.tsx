"use client";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  status?: "online" | "offline";
}

export default function Avatar({
  name,
  size = "md",
  status,
}: AvatarProps) {

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const sizes = {
    sm: "h-10 w-10 text-sm",
    md: "h-14 w-14 text-lg",
    lg: "h-20 w-20 text-2xl",
  };

  return (
    <div className="relative">

      <div
        className={`
          flex
          items-center
          justify-center
          rounded-full
          bg-[var(--accent)]
          font-bold
          text-white
          shadow-md
          ${sizes[size]}
        `}
      >
        {initials}
      </div>

      {status && (
        <span
          className={`
            absolute
            bottom-0
            right-0
            h-4
            w-4
            rounded-full
            border-2
            border-[var(--background)]
            ${
              status === "online"
                ? "bg-emerald-500"
                : "bg-gray-400"
            }
          `}
        />
      )}

    </div>
  );
}