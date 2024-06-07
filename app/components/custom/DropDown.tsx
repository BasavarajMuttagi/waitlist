"use client";
import { CaretDown, Check } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";


const Dropdown = ({
  options,
  onChange,
  value,
}: {
  options: string[];
  onChange: (data: string) => void;
  value: string;
}) => {
  const [selected, setSelected] = useState(value);
  const [show, setShow] = useState(false);
  const updateState = (option: string) => {
    setSelected((prev) => (prev = option));
    onChange(option);
  };
  return (
    <div
      className="max-w-screen-md w-full relative rounded-md border-2 border-zinc-200 shadow-sm"
      onClick={() => setShow((prev) => !prev)}
    >
      <div
        className="rounded-md  flex justify-between items-center px-3 py-1.5"
      >
        <span className="text-sm font-normal">{selected}</span>
        <CaretDown size={12} className="text-zinc-500" />
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

export default Dropdown;

const Options = ({
  options,
  selected,
  updateState,
}: {
  options: string[];
  updateState: (data: string) => void;
  selected: string;
}) => {
  return (
    <ul
      style={{ scrollbarWidth: "thin" }}
      className="text-sm font-normal max-w-screen-md w-full absolute top-12 z-10 border rounded-md h-[232px] overflow-y-auto  bg-white drop-shadow"
    >
      {options.map((eachOption) => (
        <li
          key={eachOption}
          value={eachOption}
          className="cursor-pointer px-3 py-2 rounded-md flex items-center justify-between hover:bg-neutral-100"
          onClick={() => updateState(eachOption)}
        >
          <span>{eachOption}</span>
          {selected == eachOption && (
            <Check size={20} className="text-zinc-500" />
          )}
        </li>
      ))}
    </ul>
  );
};
