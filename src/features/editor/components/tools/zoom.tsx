import { Minimize, ZoomIn, ZoomOut } from "lucide-react";

import { Editor } from "@/features/editor/types";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";

interface ZoomProps {
  editor: Editor | undefined;
};

export const Zoom = ({ editor }: ZoomProps) => {
  return (
    <div className="flex gap-x-1">
      <Hint label="Скинути" side="top" sideOffset={10}>
        <Button
          onClick={() => editor?.autoZoom()}
          size="icon"
          variant="ghost"
          className="hover:bg-secondary"
        >
          <Minimize className="size-4 text-primary" />
        </Button>
      </Hint>
      <Hint label="Збільшити масштаб" side="top" sideOffset={10}>
        <Button
          onClick={() => editor?.zoomIn()}
          size="icon"
          variant="ghost"
          className="hover:bg-secondary"
        >
          <ZoomIn className="size-4 text-primary" />
        </Button>
      </Hint>
      <Hint label="Зменшити масштаб" side="top" sideOffset={10}>
        <Button
          onClick={() => editor?.zoomOut()}
          size="icon"
          variant="ghost"
          className="hover:bg-secondary"
        >
          <ZoomOut className="size-4 text-primary" />
        </Button>
      </Hint>
    </div>
  );
};
