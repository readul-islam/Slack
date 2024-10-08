import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useWorkspaceId } from "@/hooks/create-workspace-id";

import { Loader, LucideBadgeCheck, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const WorkspaceSwitcher = () => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const [_open, setOpen] = useCreateWorkspaceModal();

  const { data: workspaces, isLoading: workspacesLoading } = useGetWorkspaces();

  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });

  const filteredWorkspace = workspaces?.filter(
    (workspace) => workspace?._id !== workspaceId
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 text-slate-800 font-semibold text-xl">
          {workspaceLoading ? (
            <Loader className="size-5 animate-spin shrink-0" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem
          onClick={() => router.push(`/workspace/${workspaceId}`)}
          className="cursor-pointer  flex  items-start capitalize"
        >
          <div className="shrink-0   size-9 relative overflow-hidden bg-[#616061] text-white text-lg rounded-md flex items-center justify-center mr-2">
            {workspace?.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-col flex">
            {workspace?.name}
            <span className=" text-xs text-muted-foreground flex items-center gap-x-[3px]">
              Active workspace
              <LucideBadgeCheck className="size-4 text-purple-700   " />
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {filteredWorkspace?.map((workspace) => (
          <DropdownMenuItem
            className="cursor-pointer capitalize overflow-hidden"
            key={workspace?._id}
            onClick={() => router.push(`/workspace/${workspace._id}`)}
          >
            <div className="shrink-0   size-9 relative overflow-hidden bg-[#616061] text-white text-lg rounded-md flex items-center justify-center mr-2">
              {workspace.name.charAt(0).toUpperCase()}
            </div>
            <p className="truncate">{workspace.name}</p>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        >
          <div className="size-9 relative overflow-hidden bg-[#F2F2F2] text-slate-800 text-lg rounded-md flex items-center justify-center mr-2">
            <Plus />
          </div>
          Create a new workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;
