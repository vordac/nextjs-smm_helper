import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";

import { ActiveTool, Editor } from "@/features/editor/types";
import { ToolSidebarClose } from "@/features/editor/components/sidebar/tool-sidebar-close";
import { ToolSidebarHeader } from "@/features/editor/components/sidebar/tool-sidebar-header";
import { ColorPicker } from "@/features/editor/components/tools/color-picker";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fabric } from "fabric";

interface SettingsSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const SettingsSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: SettingsSidebarProps) => {
  const workspace = editor?.getWorkspace();

  const initialWidth = useMemo(() => `${workspace?.width ?? 0}`, [workspace]);
  const initialHeight = useMemo(() => `${workspace?.height ?? 0}`, [workspace]);
  const initialBackground = useMemo(
    () => workspace?.fill ?? "#ffffff",
    [workspace]
  );

  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [background, setBackground] = useState(initialBackground);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setWidth(initialWidth);
    setHeight(initialHeight);
    setBackground(initialBackground);
  }, [initialWidth, initialHeight, initialBackground]);

  const changeWidth = (value: string) => setWidth(value);
  const changeHeight = (value: string) => setHeight(value);
  const changeBackground = (value: string) => {
    setBackground(value);
    editor?.changeBackground(value);
  };

  const changeSizeStories = () => {
    changeWidth("1080");
    changeHeight("1920");
  };

  const changeSizePost = () => {
    changeWidth("1080");
    changeHeight("1080");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editor?.changeSize({
      width: parseInt(width, 10),
      height: parseInt(height, 10),
    });
  };

  const onClose = () => {
    onChangeActiveTool("select");
  };

  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] w-[360px] h-full flex flex-col",
        activeTool === "settings" ? "visible" : "hidden"
      )}
    >
      <ToolSidebarHeader
        title="Налаштування"
        description="Зміна параметрів полотна"
      />
      <ScrollArea>
        <form className="space-y-4 p-4" onSubmit={onSubmit}>
          <div className="flex w-full gap-4">
            <div className="space-y-2">
              <Label className="text-muted">Висота</Label>
              <Input
                placeholder="Висота"
                className="bg-primary hover:bg-secondary"
                value={height}
                type="number"
                onChange={(e) => changeHeight(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted">Ширина</Label>
              <Input
                placeholder="Ширина"
                className="bg-primary hover:bg-secondary"
                value={width}
                type="number"
                onChange={(e) => changeWidth(e.target.value)}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-muted text-primary hover:bg-primary hover:cursor-pointer hover:text-muted"
          >
            Змінити
          </Button>
          <div className="space-y-2">
            <Label className="text-muted">Пресети Instagram</Label>
            <div className="flex w-full gap-4">
              <Button
                type="submit"
                className="w-full bg-muted text-primary hover:bg-primary hover:cursor-pointer hover:text-muted"
                onClick={changeSizeStories}
              >
                Сторіс
              </Button>
              <Button
                type="submit"
                className="w-full bg-muted text-primary hover:bg-primary hover:cursor-pointer hover:text-muted"
                onClick={changeSizePost}
              >
                Пост
              </Button>
            </div>
          </div>
        </form>
        <div className="p-4">
          <Label className="text-muted">Колір фону</Label>
          <div className="h-[16px]"></div>
          <ColorPicker
            value={background as string} // We dont support gradients or patterns
            onChange={changeBackground}
          />
        </div>
      </ScrollArea>
      <ToolSidebarClose onClick={onClose} />
    </aside>
  );
};
