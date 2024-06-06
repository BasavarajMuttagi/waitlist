import SideBarLayout from "./layouts/SideBarLayout";
import WaitListLayout from "./layouts/WaitListLayout";
export default function Home() {
  return (
    <main className={"bg-slate-100 flex h-screen"}>
      <SideBarLayout />
      <WaitListLayout />
    </main>
  );
}
