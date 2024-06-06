"use client"
import { ArrowSquareOut, SquaresFour } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { useCollapse } from "../contexts/CollapseContextProvider";

const DashBoardLink = () => {
  const [isCollapsed] = useCollapse();

  return (
    <motion.div
      animate={{
        justifyContent: isCollapsed ? "center" : "",
      }}
      className="flex items-center justify-between font-medium text-slate-700 mb-4"
    >
      <motion.div
        animate={{
          opacity: isCollapsed ? 0 : 1,
          width: isCollapsed ? "0px" : "100%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center space-x-4  text-xs"
      >
        <SquaresFour size={16} />
        <span>Dashboard</span>
      </motion.div>
      <ArrowSquareOut size={16} />
    </motion.div>
  );
};

export default DashBoardLink;
