import UserButton from "@/features/auth/components/user-button";
import { Bell, Home, MessageSquare, MoreHorizontal } from "lucide-react";
import SidebarButton from "./sidebar-button";
import WorkspaceSwitcher from "./workspace-switcher";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="bg-[#481349] w-[70px] h-full flex flex-col gap-y-4 items-center pt-[9px] pb-4">
      <WorkspaceSwitcher />
      <SidebarButton icon={Home} label="Home" isActive={pathname.includes('/workspace')} />
      <SidebarButton icon={MessageSquare} label="DMs" isActive={pathname.includes('/d')}  />
      <SidebarButton icon={Bell} label="Activity" isActive={pathname.includes('/d')}  />
      <SidebarButton icon={MoreHorizontal} label="More" isActive={pathname.includes('/d')}  />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};

export default Sidebar;
