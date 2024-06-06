import { useContext } from "react";
import collapse from "@/public/assets/collapse.svg";
import { CollapseContext } from "../page";

const CollapseButton = () => {
  const [_, setIsCollapsed] = useContext(CollapseContext);

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
