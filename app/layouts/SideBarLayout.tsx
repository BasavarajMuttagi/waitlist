import { useContext } from "react";
import Logo from "../components/Logo";
import TimeStamp from "../components/TimeStamp";
import { CollapseContext } from "../page";
import { motion } from "framer-motion";
import DashBoardLink from "../components/DashBoardLink";
import Help from "../components/Help";
import LocationCard from "../components/Location";
import ProfileCard from "../components/ProfileCard";
import SideBarItems from "../components/SideBarItems";

const SideBarLayout = () => {
  const [isCollapsed] = useContext(CollapseContext);

  return (
    <motion.aside
      initial={{ width: "250px" }}
      animate={{ width: isCollapsed ? "80px" : "250px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="hidden sm:flex flex-col justify-between shrink-0 p-2"
    >
      <div className="space-y-10">
        <Logo />
        <div className="space-y-2">
          <LocationCard />
          <TimeStamp />
        </div>
        <SideBarItems />
      </div>
      <div className="space-y-2">
        <DashBoardLink />
        <ProfileCard />
        <Help />
      </div>
    </motion.aside>
  );
};

export default SideBarLayout;
