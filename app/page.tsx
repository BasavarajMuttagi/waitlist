import SideBarLayout from "@/layouts/SideBarLayout";
import WaitListLayout from "@/layouts/WaitListLayout";

export default function Home() {
  return (
    <main className="bg-slate-300 flex h-screen p-1">
      {/* <SideBarLayout /> */}
      <WaitListLayout />
    </main>
  );
}
