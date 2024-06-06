import { CollapseContext } from "@/app/page";
import { Question } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

const Help = () => {
  const [isCollapsed] = useContext(CollapseContext);

  return (
    <motion.div
      animate={{
        justifyContent: isCollapsed ? "center" : "",
      }}
      className={twMerge(
        "flex items-center space-x-4 p-2 text-nowrap",
        isCollapsed ? "space-x-0" : ""
      )}
    >
      <Question size={22} className="text-slate-600 shrink-0" />
      <motion.div
        animate={{
          opacity: isCollapsed ? 0 : 1,
          width: isCollapsed ? "0px" : "100%",
          padding: isCollapsed ? "0px" : "",
        }}
        className="space-y-1"
      >
        <div className="text-xs text-slate-700">Help center</div>
        <div className="text-[10px] text-slate-500">@2024 Omnify.Inc.</div>
      </motion.div>
    </motion.div>
  );
};

export default Help;
