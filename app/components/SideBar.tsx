"use client";
import { motion } from "framer-motion";
import { useCollapse } from "../contexts/CollapseContextProvider";
import BrandLogo from "./BrandLogo";
import LocationCard from "./Location";
import TimeStamp from "./TimeStamp";

const SideBar = () => {
  const [isCollapsed] = useCollapse();
  return (
    <motion.div
      className="h-screen rounded-md  bg-slate-100 absolute w-full sm:hidden"
      initial={{ x: "-100%" }}
      animate={{ x: isCollapsed ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="text-xl flex items-center  p-2 space-x-10">
        <BrandLogo />
        <div className="flex justify-between items-center px-2">
          <div className="flex items-center font-bold tracking-wide space-x-1 text-lg">
            <div>Front</div>
            <div className="rounded-full h-[3px] w-[3px] bg-black"></div>
            <div>Desk</div>
          </div>
        </div>
      </div>
      <div className="space-y-4 p-2">
        <LocationCard />
        <TimeStamp />
      </div>
    </motion.div>
  );
};

export default SideBar;
