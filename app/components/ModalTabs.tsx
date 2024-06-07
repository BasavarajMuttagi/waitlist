import { CalendarBlank, Users, SquaresFour } from "@phosphor-icons/react";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useActiveTab } from "../contexts/ActiveTabContextProvider";

const ModalTabs = () => {
  const [activeTab, setActiveTab] = useActiveTab();

  return (
    <div className="bg-slate-50 w-full h-fit p-2  border-b sm:border-b-0  sm:rounded-tl-md sm:border-r border-slate-200  sm:max-w-[230px] sm:flex-1 sm:h-full">
      <ul>
        <li className="cursor-pointer">
          <div
            className={twMerge(
              "flex items-center space-x-2 px-3 py-2 rounded-md",
              activeTab === "SCHEDULE" ? "bg-slate-200" : ""
            )}
            onClick={() => setActiveTab("SCHEDULE")}
          >
            <CalendarBlank weight="thin" size={16} className="text-slate-700" />
            <span className="text-[14px] font-medium text-slate-700">
              Scheduled Date
            </span>
          </div>
        </li>
        <li className="cursor-pointer">
          <div
            className={twMerge(
              "flex items-center space-x-2 px-3 py-2 rounded-md",
              activeTab === "PEOPLE" ? "bg-slate-200" : ""
            )}
            onClick={() => setActiveTab("PEOPLE")}
          >
            <Users weight="thin" size={16} className="text-slate-700" />
            <span className="text-[14px] font-medium text-slate-700">
              People
            </span>
          </div>
        </li>
        <li className="cursor-pointer">
          <div
            className={twMerge(
              "flex items-center space-x-2 px-3 py-2 rounded-md",
              activeTab === "PRODUCT" ? "bg-slate-200" : ""
            )}
            onClick={() => setActiveTab("PRODUCT")}
          >
            <SquaresFour weight="thin" size={16} className="text-slate-700" />
            <span className="text-[14px] font-medium text-slate-700">
              Services / Products
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ModalTabs;
