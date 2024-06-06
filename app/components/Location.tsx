"use client"
import { ArrowsLeftRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { useCollapse } from "../contexts/CollapseContextProvider";

const LocationCard = () => {
  const [isCollapsed] = useCollapse();

  return (
    <motion.div
      animate={{
        justifyContent: isCollapsed ? "center" : "",
        paddingLeft: isCollapsed ? "0px" : "",
      }}
      className="text-xs font-medium text-slate-700 cursor-pointer flex items-center space-x-4 py-2 px-4 rounded-md shadow bg-white border border-slate-100 justify-between"
    >
      <motion.span
        animate={{
          opacity: isCollapsed ? 0 : 1,
          width: isCollapsed ? "0px" : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="text-nowrap"
      >
        Location Name
      </motion.span>
      <ArrowsLeftRight size={16} />
    </motion.div>
  );
};

export default LocationCard;
