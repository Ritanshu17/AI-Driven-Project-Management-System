import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

export default function Table({
  children,
  className = "",
}: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={`
          w-full
          border-collapse
          text-left
          ${className}
        `}
      >
        {children}
      </table>
    </div>
  );
}