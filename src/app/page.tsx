"use client";
import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
// home page
export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useCreateWorkspaceModal();
  const { signOut } = useAuthActions();
  const { data, isLoading } = useGetWorkspaces();
  const workspacesId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;
    if (workspacesId) {
    } else if (!open) {
      setOpen(true);
    }
  }, [workspacesId, isLoading, open, setOpen, router]);

  return (
    <div>
      <Button onClick={() => void signOut()}>signOut</Button>
      <UserButton />
    </div>
  );
}
