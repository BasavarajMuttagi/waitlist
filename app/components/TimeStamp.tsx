"use client"
import { CaretDown, Globe } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useCollapse } from "../contexts/CollapseContextProvider";

const TimeStamp = () => {
  const [isCollapsed] = useCollapse();

  return (
    <motion.div
      animate={{
        justifyContent: isCollapsed ? "center" : "",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-3 p-1 rounded-md bg-slate-200 border flex justify-around text-nowrap"
    >
      <motion.div
        animate={{
          opacity: isCollapsed ? 0 : 1,
          width: isCollapsed ? "0px" : "",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="space-y-1"
      >
        <div className="text-slate-700 font-medium text-xs flex items-center space-x-4">
          <span className="font-bold text-sm">08:30 AM</span>
          <span>Tue 20 Jan</span>
        </div>
        <div className="flex items-center space-x-1 text-slate-500">
          <Globe size={16} />
          <span className="text-[10px]">UTC: +5 hours</span>
        </div>
      </motion.div>
      <motion.div
        animate={{
          opacity: isCollapsed ? 0 : 1,
          width: isCollapsed ? "0px" : "",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <CaretDown size={16} />
      </motion.div>
      {isCollapsed && (
        <motion.div
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-slate-500"
        >
          <Globe size={16} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default TimeStamp;
