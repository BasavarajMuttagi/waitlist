const SummaryBox = ({ text, count }: { text: string; count: number }) => {
  return (
    <div className="border border-slate-200 rounded-md  px-5 py-3 flex items-baseline space-x-2 text-nowrap w-full sm:max-w-xs">
      <div className="font-semibold text-xs text-slate-700">{text}</div>
      <div className="font-medium text-[10px] text-slate-500">{count}</div>
    </div>
  );
};

export default SummaryBox;
