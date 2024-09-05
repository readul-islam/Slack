import Hint from "@/components/hint";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";

interface WorkspaceSectionProps {
  children: React.ReactNode;
  label: string;
  hint: string;
  onNew?: () => void;
}

const WorkspaceSection = ({
  children,
  label,
  hint,
  onNew,
}: WorkspaceSectionProps) => {
  return (
    <div className="flex flex-col mt-3 px-2">
      <div className="flex justify-between items-center pl-1.5 pr-3  group">
        <div className="flex items-center">
          <Button
            variant={"transparent"}
            className="p-0.5 text-sm text-[#f9edffcc] shrink-0 size-6"
          >
            <FaCaretDown className="size-4" />
          </Button>
          <Button
            variant={"transparent"}
            size={"sm"}
            className="group px-1.5 text-sm text-[#f9edffcc] h-[28px] justify-start overflow-hidden items-center"
          >
            <span className="truncate">{label}</span>
          </Button>
        </div>
        {onNew && (
          <Hint label={hint} side="top" align="center">
            <Button
              onClick={onNew}
              variant="transparent"
              size="iconSm"
              className="opacity-0 group-hover:opacity-100 transition-opacity  ml-auto p-0.5 text-sm text-[#f9edffcc] shrink-0 size-6"
            >
              <PlusIcon className="size-5" />
            </Button>
          </Hint>
        )}
      </div>
      {children}
    </div>
  );
};

export default WorkspaceSection;
