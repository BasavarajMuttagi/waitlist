import { Funnel } from "@phosphor-icons/react/dist/ssr";
import IconButton from "../components/IconButton";
import SummaryBox from "../components/SummaryBox";
import WaitListTable from "../components/WaitListTable";


const WaitListLayout = () => {
  return (
    <div className="p-2 w-full rounded-md space-y-10 bg-white drop-shadow-md">
      <h1 className="text-2xl font-semibold text-slate-700">Waitlist</h1>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 overflow-x-auto sm:justify-between sm:space-x-10">
          <SummaryBox text="All Waitlists" count={100} />
          <SummaryBox text="Newly Added" count={50} />
          <SummaryBox text="Leads" count={20} />
        </div>
        <IconButton>
          <Funnel size={16} />
          <span className="text-xs font-medium">Add Filter</span>
        </IconButton>
        <WaitListTable />
      </div>
    </div>
  );
};

export default WaitListLayout;
