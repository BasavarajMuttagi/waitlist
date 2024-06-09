import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import { format } from "date-fns";
import { ReactNode, useState } from "react";

const DatePickerWithLabel = ({
  label,
  children,
  value,
}: {
  label: string | undefined;
  children: ReactNode;
  value: string | undefined;
}) => {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <div onClick={() => setShowPicker((prev) => !prev)}>
      <label className="text-xs font-medium">{label}</label>
      <div className="rounded-md border-2 border-zinc-200 flex items-center px-3 py-1.5 space-x-3 cursor-pointer shadow-sm">
        <CalendarBlank size={20} />
        <div className="text-sm font-medium">
          {value ? format(value, "dd MMMM yyyy") : "Pick a date"}
        </div>
      </div>
      <div className="absolute z-30 top-[50%] left-[45%]">
        {showPicker && children}
      </div>
    </div>
  );
};

export default DatePickerWithLabel;
