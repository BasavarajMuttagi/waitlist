import { useContext } from "react";
import logo from "@/public/assets/logo.svg";
import CollapseButton from "./CollapseButton";
import { motion } from "framer-motion";
import { CollapseContext } from "../page";

const Logo = () => {
  const [isCollapsed, setIsCollapsed] = useContext(CollapseContext);

  return (
    <motion.div
      animate={{
        justifyContent: isCollapsed ? "center" : "",
      }}
      className="text-xl flex items-center justify-between"
    >
      <img
        src={logo.src}
        alt="logo"
        className="h-8"
        onClick={() => setIsCollapsed((prev) => !prev)}
      />
      <motion.div
        animate={{
          opacity: isCollapsed ? 0 : 1,
          width: isCollapsed ? "0px" : "100%",
          padding: isCollapsed ? "0px" : "",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex justify-between items-center w-full px-2"
      >
        <div className="flex items-center font-bold tracking-wide space-x-1">
          <div>Front</div>
          <div className="rounded-full h-[3px] w-[3px] bg-black"></div>
          <div>Desk</div>
        </div>
        <CollapseButton />
      </motion.div>
    </motion.div>
  );
};

export default Logo;
