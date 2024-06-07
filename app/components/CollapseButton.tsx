"use client";
import collapse from "@/public/assets/collapse.svg";
import { useCollapse } from "../contexts/CollapseContextProvider";
import Image from "next/image";

const CollapseButton = () => {
  const [_, setIsCollapsed] = useCollapse();

  return (
    <div>
      <Image
        src={collapse.src}
        alt="logo"
        className="cursor-pointer"
        height={20}
        width={20}
        onClick={() => setIsCollapsed((prev) => !prev)}
      />
    </div>
  );
};

export default CollapseButton;
