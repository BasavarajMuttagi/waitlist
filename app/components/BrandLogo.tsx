"use client";
import logo from "@/public/assets/logo.svg";
import { useCollapse } from "../contexts/CollapseContextProvider";
import Image from "next/image";

const BrandLogo = () => {
  const [_, setIsCollapsed] = useCollapse();

  return (
    <Image
      src={logo.src}
      alt="logo"
      className="cursor-pointer"
      height={20}
      width={20}
      onClick={() => setIsCollapsed((prev) => !prev)}
    />
  );
};

export default BrandLogo;
