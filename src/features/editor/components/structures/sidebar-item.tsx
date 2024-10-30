import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const SidebarItem = ({
  icon: Icon,
  label,
  isActive,
  onClick,
}: SidebarItemProps) => {
  return (
    <div className="h-[48px] bg-primary">
      <Button
        variant="ghost"
        onClick={onClick}
        className={cn(
          "w-full h-full aspect-video p-3 py-4 flex flex-col rounded-none hover:bg-secondary transition",
          isActive && "bg-secondary text-primary"
        )}
      >
        <Icon className="size-5 stroke-2 shrink-0 text-muted" />
        {/* <span className="mt-2 text-xs text-muted">{label}</span> */}
      </Button>
    </div>
  );
};
