import { Button } from "@/components/ui/button";
import { Id } from "../../../../convex/_generated/dataModel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cva , type VariantProps} from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useWorkspaceId } from "@/hooks/create-workspace-id";

const userItemVariants = cva("flex items-center gap-1.5 justify-start font-normal h-7 px-4 text-sm overflow-hidden",{variants:{
    variant:{
        default:"text-[#f9edffcc]",
        active:"text-[#481349] bg-white/90 hover:bg-white/90"
    },
    defaultVariants:{
        variant:"default"
    }
}})


interface UserItemProps {
  id: Id<"users">;
  label?: string;
  image?: string;
  variant?: VariantProps<typeof userItemVariants>["variant"];
}

const UserItem = ({ id, label="Member", image, variant }: UserItemProps) => {
    const workspaceId = useWorkspaceId();
  return (
    <Button variant='transparent' size='sm' asChild className={cn(userItemVariants({variant:variant}))}>
        <Link href={`/workspace/${workspaceId}/member/${id}`}>
        
        </Link>
      <Avatar>
        <AvatarImage />
        <AvatarFallback></AvatarFallback>
      </Avatar>
    </Button>
  );
};

export default UserItem;
