import { 
  ActiveTool, 
  Editor,
} from "@/features/editor/types";
import { ToolSidebarClose } from "@/features/editor/components/tool-sidebar-close";
import { ToolSidebarHeader } from "@/features/editor/components/tool-sidebar-header";


import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TemplateStories } from "./template-stories";
import { TemplatePost } from "./template-post";

interface TemplateSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
};

export const TemplateSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: TemplateSidebarProps) => {

  const onClose = () => {
    onChangeActiveTool("select");
  };


  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "templates" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Шаблони"
        description="Готові шаблони для роботи"
      />
      <ScrollArea className="p-4">
        <TemplateStories editor={editor}/>
        <TemplatePost editor={editor}/>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
