"use client";
import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useAuthActions } from "@convex-dev/auth/react";
import { useEffect, useMemo } from "react";

export default function Home() {
  const { signOut } = useAuthActions();
  const { data, isLoading } = useGetWorkspaces();
  const workspacesId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;
    if (workspacesId) {
      console.log("Redirect to workspace");
    } else {
      console.log("Open creation modal");
    }
  }, [workspacesId, isLoading]);
  
  return (
    <div>
      <Button onClick={() => void signOut()}>signOut</Button>
      <UserButton />
    </div>
  );
}
