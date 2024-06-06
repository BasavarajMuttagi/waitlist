"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const CollapseContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

const CollapseContextProvider = ({ children }: { children: ReactNode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <CollapseContext.Provider value={[isCollapsed, setIsCollapsed]}>
      {children}
    </CollapseContext.Provider>
  );
};

export default CollapseContextProvider;

export const useCollapse = () => useContext(CollapseContext);
