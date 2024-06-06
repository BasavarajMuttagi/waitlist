import { twMerge } from "tailwind-merge";

const StatusBadge = ({
  type,
}: {
  type: "Active" | "Inactive" | "Lead" | string;
}) => {
  if (type == "Active") return <Badge type={type} text="Active" />;
  if (type == "Inactive") return <Badge type={type} text="Inactive" />;
  if (type == "Lead") return <Badge type={type} text="Lead" />;
};

export default StatusBadge;

const Badge = ({
  text,
  type,
}: {
  text: string;
  type: "Active" | "Inactive" | "Lead";
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center space-x-2 rounded-full px-2 py-1 w-fit",
        type == "Active"
          ? "bg-green-100"
          : type == "Inactive"
          ? "bg-slate-100"
          : "bg-blue-100"
      )}
    >
      <div
        className={twMerge(
          "h-[6px] w-[6px] rounded-full",
          type == "Active"
            ? "bg-green-700"
            : type == "Inactive"
            ? "bg-slate-700"
            : "bg-blue-500"
        )}
      ></div>
      <div
        className={twMerge(
          "text-xs font-medium",
          type == "Active"
            ? "text-green-700"
            : type == "Inactive"
            ? "text-slate-700"
            : "text-blue-500"
        )}
      >
        {text}
      </div>
    </div>
  );
};
