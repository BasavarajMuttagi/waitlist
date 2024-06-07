"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const ActiveTabContext = createContext<
  [
    "SCHEDULE" | "PEOPLE" | "PRODUCT",
    Dispatch<SetStateAction<"SCHEDULE" | "PEOPLE" | "PRODUCT">>
  ]
>(["SCHEDULE", () => {}]);

const ActiveTabContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<"SCHEDULE" | "PEOPLE" | "PRODUCT">(
    "SCHEDULE"
  );
  return (
    <ActiveTabContext.Provider value={[activeTab, setActiveTab]}>
      {children}
    </ActiveTabContext.Provider>
  );
};

export default ActiveTabContextProvider;

export const useActiveTab = () => useContext(ActiveTabContext);
