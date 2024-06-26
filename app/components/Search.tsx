import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { InputHTMLAttributes } from "react";

const Search = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div className="relative text-xs text-slate-500">
      <input
        {...rest}
        placeholder="Search client"
        className="px-8 py-2 rounded-md shadow outline-none border"
      />
      <MagnifyingGlass size={16} className="absolute top-[9px] left-2" />
    </div>
  );
};

export default Search;
