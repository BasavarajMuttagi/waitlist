import { useContext } from "react";
import Logo from "../components/Logo";
import SideBarItems from "../components/pure/SideBarItems";
import { motion } from "framer-motion";
import ProfileCard from "../components/pure/ProfileCard";
import Help from "../components/pure/Help";
import DashBoardLink from "../components/pure/DashBoardLink";
import LocationCard from "../components/pure/Location";
import TimeStamp from "../components/TimeStamp";
import { CollapseContext } from "../page";

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
