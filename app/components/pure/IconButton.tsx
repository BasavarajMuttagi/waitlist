import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const IconButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, className, ...rest } = props;
  return (
    <button
      {...rest}
      className={twMerge(
        "flex items-center p-2 rounded-md bg-slate-200 text-slate-700 border space-x-2 h-fit w-fit",
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
