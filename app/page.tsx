"use client";

import { createContext, useState } from "react";
import SideBarLayout from "./layouts/SideBarLayout";
import WaitListLayout from "./layouts/WaitListLayout";
export const CollapseContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);
export default function Home() {
  const [context, setContext] = useState(false);
  return (
    <main className={"bg-slate-100 flex h-screen"}>
      <CollapseContext.Provider value={[context, setContext]}>
        <SideBarLayout />
        <WaitListLayout />
      </CollapseContext.Provider>
    </main>
  );
}
