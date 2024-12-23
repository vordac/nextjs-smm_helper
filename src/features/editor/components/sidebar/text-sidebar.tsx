import { 
  ActiveTool, 
  Editor, 
} from "@/features/editor/types";
import { ToolSidebarClose } from "@/features/editor/components/sidebar/tool-sidebar-close";
import { ToolSidebarHeader } from "@/features/editor/components/sidebar/tool-sidebar-header";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface TextSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
};

export const TextSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: TextSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
    editor?.autoZoom();
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "text" ? "visible" : "hidden",
      )}
    >
      <ToolSidebarHeader
        title="Текст"
        description="Додавання тексту на полотно"
      />
      <ScrollArea>
        <div className="p-4 space-y-4 border-b">
          <Button
            className="w-full bg-muted text-primary hover:text-muted"
            onClick={() => editor?.addText("Поле")}
          >
            Додати текстове поле
          </Button>
          <Button
            className="w-full h-16 bg-primary text-muted"
            variant="secondary"
            size="lg"
            onClick={() => editor?.addText("Заголовок", {
              fontSize: 80,
              fontWeight: 700,
            })}
          >
            <span className="text-3xl font-bold text-muted">
              Заголовок
            </span>
          </Button>
          <Button
            className="w-full h-16 bg-primary text-muted"
            variant="secondary"
            size="lg"
            onClick={() => editor?.addText("Підзаголовок", {
              fontSize: 44,
              fontWeight: 600,
            })}
          >
            <span className="text-xl font-semibold text-muted">
              Підзаголовок
            </span>
          </Button>
          <Button
            className="w-full h-16 bg-primary text-muted"
            variant="secondary"
            size="lg"
            onClick={() => editor?.addText("Параграф", {
              fontSize: 32,
            })}
          >
            Параграф
          </Button>
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
