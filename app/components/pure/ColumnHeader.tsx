const ColumnHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center space-x-2 text-slate-500 text-xs font-medium">
      {children}
    </div>
  );
};

export default ColumnHeader;
