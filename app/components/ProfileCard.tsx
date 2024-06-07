"use client";
import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AdminMenu from "./AdminMenu";
import { useCollapse } from "../contexts/CollapseContextProvider";
import Image from "next/image";
const ProfileCard = () => {
  const [isCollapsed] = useCollapse();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setShowMenu(false);
  }, [isCollapsed]);
  return (
    <>
      {showMenu && <AdminMenu />}

      <motion.div
        animate={{
          justifyContent: isCollapsed ? "center" : "",
        }}
        onClick={() => !isCollapsed && setShowMenu((prev) => !prev)}
        className="cursor-pointer w-full rounded-md flex items-center p-2 shadow bg-white border border-slate-100"
      >
        <Image
          alt="Profile Pic"
          height={35}
          width={35}
          className="rounded-full"
          src="https://s3-alpha-sig.figma.com/img/50bf/8335/ed36576c36a0ca9f2f12b142cec2231f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLJrDcPNwLeXl1fqOW9QH6WBak0JztYdJQoreyNZTv~WNzqoB6NIKmQbmJ549bbX2J3YgQSvbpvUVc26AtIQwAR7gBW-8423vbWmxX27y80kAneVljohzH7Ackx~BpBnYUtBzMrvh9QsKwyZWItZYKbaffFNXWTFteRzD0moBEMxeRq4XL-2SURMTm7n1doYAztaYGwhXRzt4SIQUR4rqd5oCCbY~Vgh4-KPuYZjDlH-WzEbBbj090XD-v6rT-lSAaq7dFzQCuCEj-5JU1N65e2GyuBdIE~c8AjEIuA-v7grY8H4TlJUL8pdL-6LOoGkVup1nddx41OLPaQs0qKEVg__"
        />
        <motion.div
          animate={{
            width: isCollapsed ? "0px" : "100%",
            opacity: isCollapsed ? 0 : 1,
            padding: isCollapsed ? "0px" : "",
          }}
          className="flex items-center justify-between w-full px-1"
        >
          <div className="space-y-1 text-nowrap">
            <div className="text-slate-900 font-medium text-xs">Admin Name</div>
            <div className="text-slate-500 text-[10px]">admin@gmail.com</div>
          </div>
          {showMenu ? (
            <CaretUp size={10} className="text-slate-700" />
          ) : (
            <CaretDown size={10} className="text-slate-700" />
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProfileCard;
