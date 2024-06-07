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
      className="h-5"
      onClick={() => setIsCollapsed((prev) => !prev)}
    />
  );
};

export default BrandLogo;
