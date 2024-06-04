import React from "react";
import { twMerge } from "tailwind-merge";

const StatusBadge = ({ type }: { type: "active" | "inactive" | "lead" }) => {
  if (type == "active") return <Badge type={type} text="Active" />;
  if (type == "inactive") return <Badge type={type} text="Inactive" />;
  if (type == "lead") return <Badge type={type} text="Lead" />;
};

export default StatusBadge;

const Badge = ({
  text,
  type,
}: {
  text: string;
  type: "active" | "inactive" | "lead";
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center space-x-2 rounded-full px-2 py-1 w-fit",
        type == "active"
          ? "bg-green-50"
          : type == "inactive"
          ? "bg-slate-50"
          : "bg-blue-50"
      )}
    >
      <div
        className={twMerge(
          "h-[6px] w-[6px] rounded-full",
          type == "active"
            ? "bg-green-700"
            : type == "inactive"
            ? "bg-slate-700"
            : "bg-blue-500"
        )}
      ></div>
      <div
        className={twMerge(
          "text-xs font-medium",
          type == "active"
            ? "text-green-700"
            : type == "inactive"
            ? "text-slate-700"
            : "text-blue-500"
        )}
      >
        {text}
      </div>
    </div>
  );
};
