import { MagnifyingGlass, XCircle } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const SearchBar = ({
  initialValue,
  onSearch,
}: {
  initialValue: string;
  onSearch: (data: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm]);
  return (
    <div className="relative text-slate-500">
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        type="text"
        className={twMerge(
          "font-medium rounded-md px-10 py-1.5 h-fit w-full max-w-screen-sm border border-slate-200 outline-none text-sm bg-slate-100 placeholder:text-gray-400",
          searchTerm ? "text-zinc-700" : ""
        )}
        placeholder="Search Payer or attendee name"
      />
      <MagnifyingGlass
        size={20}
        weight="bold"
        className={twMerge(
          "absolute top-[6px] left-2 text-zinc-400",
          searchTerm ? "text-zinc-700" : ""
        )}
      />
      {searchTerm.length > 0 && (
        <XCircle
          size={20}
          weight="bold"
          className="absolute top-2 right-3 cursor-pointer text-black"
          onClick={() => {
            setSearchTerm("");
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
