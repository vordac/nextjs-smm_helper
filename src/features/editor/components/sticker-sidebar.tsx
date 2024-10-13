import { ActiveTool, Editor } from "@/features/editor/types";
import { ToolSidebarClose } from "@/features/editor/components/tool-sidebar-close";
import { ToolSidebarHeader } from "@/features/editor/components/tool-sidebar-header";
import { cn } from "@/lib/utils";
import ImageUploadPC from "./image-upload-pc";
import ImageUploadURL from "./image-upload-url";
import { StickerList } from "./sticker-list";

interface StickerSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const StickerSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: StickerSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "sticker" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader
        title="Стікери"
        description="Додавання стікерів на полотно"
      />
      <StickerList />
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
