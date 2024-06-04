const ColumnHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center space-x-2 text-slate-500">{children}</div>
  );
};

export default ColumnHeader;
