"use client";
import useWaitlistStore from "../store";
import IconButton from "./IconButton";
import { X } from "@phosphor-icons/react/dist/ssr";

const PayerNameChips = () => {
  const { filters, removeNameChip } = useWaitlistStore();
  return (
    <div className="flex items-center space-x-1.5">
      {filters.people?.map((eachPerson) => (
        <IconButton key={eachPerson}>
          <span className="text-xs font-medium">{eachPerson}</span>
          <X size={16} onClick={() => removeNameChip(eachPerson)} />
        </IconButton>
      ))}
    </div>
  );
};

export default PayerNameChips;
