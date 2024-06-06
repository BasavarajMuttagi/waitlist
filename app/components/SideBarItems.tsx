"use client"
import {
  CalendarDots,
  CheckSquare,
  HourglassHigh,
  Tray,
} from "@phosphor-icons/react/dist/ssr";
import { useContext } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useCollapse } from "../contexts/CollapseContextProvider";

const SideBarItems = () => {
  const [isCollapsed] = useCollapse();

  return (
    <div className="w-full">
      <ul className="text-slate-700 text-xs font-medium">
        <motion.li
          className={twMerge(
            "flex items-center space-x-4 py-2  rounded-md px-4",
            isCollapsed ? "space-x-0" : ""
          )}
          animate={{
            justifyContent: isCollapsed ? "center" : "",
          }}
        >
          <Tray size={16} className="shrink-0" />
          <motion.span
            animate={{
              opacity: isCollapsed ? 0 : 1,
              width: isCollapsed ? "0px" : "100%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Orders
          </motion.span>
        </motion.li>
        <motion.li
          className={twMerge(
            "flex items-center space-x-4 py-2  rounded-md px-4",
            isCollapsed ? "space-x-0" : ""
          )}
          animate={{
            justifyContent: isCollapsed ? "center" : "",
          }}
        >
          <CheckSquare size={16} className="shrink-0" />
          <motion.span
            animate={{
              opacity: isCollapsed ? 0 : 1,
              width: isCollapsed ? "0px" : "100%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Subscriptions
          </motion.span>
        </motion.li>
        <motion.li
          className={twMerge(
            "flex items-center space-x-4 py-2  rounded-md px-4",
            isCollapsed ? "space-x-0" : ""
          )}
          animate={{
            justifyContent: isCollapsed ? "center" : "",
          }}
        >
          <CalendarDots size={16} className="shrink-0" />
          <motion.span
            animate={{
              opacity: isCollapsed ? 0 : 1,
              width: isCollapsed ? "0px" : "100%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Calendar
          </motion.span>
        </motion.li>
        <motion.li
          className={twMerge(
            "flex items-center space-x-4 py-2  rounded-md shadow bg-white px-4",
            isCollapsed ? "space-x-0" : ""
          )}
          animate={{
            justifyContent: isCollapsed ? "center" : "",
          }}
        >
          <HourglassHigh size={16} className="shrink-0" />
          <motion.span
            animate={{
              opacity: isCollapsed ? 0 : 1,
              width: isCollapsed ? "0px" : "100%",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            Waitlist
          </motion.span>
        </motion.li>
      </ul>
    </div>
  );
};

export default SideBarItems;
