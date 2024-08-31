import UserButton from "@/features/auth/components/user-button";
import WorkspaceSwitcher from "./workspace-switcher";

const Sidebar = () => {
  return (
    <aside className="bg-[#481349] w-[70px] h-full flex flex-col gap-y-4 items-center pt-[9px] pb-4">

      <WorkspaceSwitcher/>
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};

export default Sidebar;
