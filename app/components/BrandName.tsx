"use client"
import CollapseButton from "./CollapseButton";
import { motion } from "framer-motion";
import { useCollapse } from "../contexts/CollapseContextProvider";
import BrandLogo from "./BrandLogo";

const BrandName = () => {
  const [isCollapsed] = useCollapse();

  return (
    <motion.div
      animate={{
        justifyContent: isCollapsed ? "center" : "",
      }}
      className="text-xl flex items-center justify-between"
    >
      <BrandLogo />
      <motion.div
        animate={{
          opacity: isCollapsed ? 0 : 1,
          width: isCollapsed ? "0px" : "100%",
          padding: isCollapsed ? "0px" : "",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex justify-between items-center w-full px-2"
      >
        <div className="flex items-center font-bold tracking-wide space-x-1 text-lg">
          <div>Front</div>
          <div className="rounded-full h-[3px] w-[3px] bg-black"></div>
          <div>Desk</div>
        </div>
        <CollapseButton />
      </motion.div>
    </motion.div>
  );
};

export default BrandName;
