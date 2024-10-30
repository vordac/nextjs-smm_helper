import { ActiveTool, Editor } from "@/features/editor/types";
import { ToolSidebarClose } from "@/features/editor/components/sidebar/tool-sidebar-close";
import { ToolSidebarHeader } from "@/features/editor/components/sidebar/tool-sidebar-header";
import { cn } from "@/lib/utils";
import ImageUploadPC from "@/features/editor/components/tools/image-upload-pc";
import ImageUploadURL from "@/features/editor/components/tools/image-upload-url";

interface ImageSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const ImageSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: ImageSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };

  const addImageToCanvasFile = (imageUrl: string) => {
    if (editor) {
      editor.addImageFile(imageUrl);
    }
  };

  const addImageToCanvasURL = (imageUrl: fabric.Image) => {
    if (editor) {
      editor.addImageUrl(imageUrl);
    }
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "images" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader
        title="Зображення"
        description="Додавання зображень на полотно"
      />
      <ImageUploadPC addImageToCanvas={addImageToCanvasFile} />
      <ImageUploadURL addImageToCanvas={addImageToCanvasURL} />
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
