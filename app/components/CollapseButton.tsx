"use client";
import collapse from "@/public/assets/collapse.svg";
import { useCollapse } from "../contexts/CollapseContextProvider";

const CollapseButton = () => {
  const [_, setIsCollapsed] = useCollapse();

  return (
    <div>
      <img
        src={collapse.src}
        alt="logo"
        className="h-5 cursor-pointer"
        onClick={() => setIsCollapsed((prev) => !prev)}
      />
    </div>
  );
};

export default CollapseButton;
