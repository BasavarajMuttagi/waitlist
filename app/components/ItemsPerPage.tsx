"use client";
import { CaretUpDown } from "@phosphor-icons/react";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

const ItemsPerPage = ({
  options,
  onChange,
  value,
}: {
  options: string[];
  onChange: (data: string) => void;
  value: string | undefined;
}) => {
  const [selected, setSelected] = useState(value);
  const [show, setShow] = useState(false);
  const updateState = (option: string) => {
    setSelected((prev) => (prev = option));
    onChange(option);
  };
  return (
    <div
      className="w-fit relative rounded-md border-2 border-zinc-200 shadow-sm text-xs"
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="rounded-md  flex justify-between items-center px-2 py-1 space-x-3">
        <span className="sm:text-sm font-medium">{selected}</span>
        <CaretUpDown size={12} className="text-zinc-500" />
      </div>
      {show && (
        <Options
          options={options}
          selected={selected}
          updateState={updateState}
        />
      )}
    </div>
  );
};

export default ItemsPerPage;

const Options = ({
  options,
  selected,
  updateState,
}: {
  options: string[];
  updateState: (data: string) => void;
  selected: string | undefined;
}) => {
  return (
    <ul
      style={{ scrollbarWidth: "none" }}
      className="text-sm font-normal max-w-screen-md w-full absolute top-0 z-10 border rounded-md  overflow-y-auto  bg-white drop-shadow h-20"
    >
      {options.map((eachOption) => (
        <li
          key={eachOption}
          value={eachOption}
          className="cursor-pointer px-3 py-2 rounded-md flex items-baseline justify-between hover:bg-neutral-100"
          onClick={() => updateState(eachOption)}
        >
          <span>{eachOption}</span>
          {selected == eachOption && (
            <Check size={12} className="text-zinc-500" />
          )}
        </li>
      ))}
    </ul>
  );
};
