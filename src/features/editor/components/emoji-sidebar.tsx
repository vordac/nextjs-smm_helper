import { ActiveTool, Editor } from "@/features/editor/types";
import { ToolSidebarClose } from "@/features/editor/components/tool-sidebar-close";
import { ToolSidebarHeader } from "@/features/editor/components/tool-sidebar-header";
import { cn } from "@/lib/utils";
import { EmojiGrid } from "./emoji-grid";

interface EmojiSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const EmojiSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: EmojiSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        'bg-white relative border-r z-[40] w-[360px] h-full flex flex-col',
        activeTool === 'emoji' ? 'visible' : 'hidden'
      )}
    >
      <ToolSidebarHeader
        title="Емодзі"
        description="Додавання емодзі на полотно"
      />
      <EmojiGrid addEmojiToCanvas={editor?.addEmoji} />
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
