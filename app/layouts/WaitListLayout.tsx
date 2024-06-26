"use client";
import {
  ArrowsClockwise,
  DownloadSimple,
  List,
} from "@phosphor-icons/react/dist/ssr";
import SummaryBox from "../components/SummaryBox";
import WaitListTable from "../components/WaitListTable";
import SearchBar from "../components/Search";
import AddFilter from "../components/AddFilter";
import PayerNameChips from "../components/PayerNameChips";
import HideColumns from "../components/HideColumns";
import { useCollapse } from "../contexts/CollapseContextProvider";

const WaitListLayout = () => {
  const [_, setIsCollapsed] = useCollapse();
  return (
    <div className="px-1 py-2 w-full rounded-md space-y-10 bg-white drop-shadow-md sm:mt-3 sm:h-[95%] sm:p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-slate-700">Waitlist</h1>
        <List
          size={40}
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="sm:hidden"
        />
      </div>
      <div className="space-y-6">
        <div
          className="flex items-center space-x-4 overflow-x-auto sm:justify-between sm:space-x-10"
          style={{ scrollbarWidth: "thin" }}
        >
          <SummaryBox text="All Waitlists" count={100} />
          <SummaryBox text="Newly Added" count={50} />
          <SummaryBox text="Leads" count={20} />
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center space-x-3 overflow-x-auto text-nowrap">
            <AddFilter /> <PayerNameChips />
          </div>
          <div className="flex justify-between items-center sm:flex sm:items-center sm:space-x-8 sm:mr-2">
            <SearchBar />
            <ArrowsClockwise size={16} className="text-slate-700" />
            <HideColumns />
            <DownloadSimple size={16} className="text-slate-700" />
          </div>
        </div>
        <WaitListTable />
      </div>
    </div>
  );
};

export default WaitListLayout;
