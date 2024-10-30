"use client";

import { Logo } from "@/features/editor/components/ui/logo";

import "../../../../app/globals.css";

import { CiFileOn } from "react-icons/ci";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Download,
  MousePointerClick,
  Redo2,
  Undo2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BsCloudCheck } from "react-icons/bs";
import { useFilePicker } from "use-file-picker";
import { ActiveTool, Editor } from "@/features/editor/types";
import { cn } from "@/lib/utils";
import { Zoom } from "@/features/editor/components/tools/zoom";

interface NavbarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Navbar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: NavbarProps) => {

  const { openFilePicker } = useFilePicker({
    accept: ".json",
    onFilesSuccessfullySelected: ({ plainFiles }: any) => {
      if (plainFiles && plainFiles.length > 0) {
        const file = plainFiles[0];
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = () => {
          editor?.loadJson(reader.result as string);
        };
      }
    },
  });

  return (
    <nav className="w-full flex items-center p-3 h-[48px] gap-x-8 lg:pl=[48px] bg-muted">
      <Logo/>
      <div className="w-full flex items-center gap-x-1 h-full">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost" className="hover:bg-secondary hover:text-muted h-[40px]">
              <p className="text-primary">Файл</p>
              <ChevronDown className="size-4 ml-2 text-primary" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-60 bg-primary">
            <DropdownMenuItem
              onClick={() => openFilePicker()} 
              className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
            >
              <CiFileOn className="size-8 text-muted" />
              <div className="text-muted">
                <p><b>Відкрити проєкт</b></p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator orientation="vertical" className="mx-2 h-[32px]" />
        <Hint label="Обрати" side="bottom" sideOffset={10}>
          <Button
            onClick={() => onChangeActiveTool("select")}
            variant="ghost"
            size="icon"
            className={cn(activeTool === "select" && "hover:bg-secondary hover:text-primary bg-secondary text-primary" || "hover:bg-secondary hover:text-primary text-primary")}
          >
            <MousePointerClick className="size-4" />
          </Button>
        </Hint>
        <Hint label="Скасувати" side="bottom" sideOffset={10}>
          <Button
            disabled={!editor?.canUndo()}
            variant="ghost"
            size="icon"
            onClick={() => editor?.onUndo()}
          >
            <Undo2 className="size-4 text-primary" />
          </Button>
        </Hint>
        <Hint label="Повторити" side="bottom" sideOffset={10}>
          <Button
            disabled={!editor?.canRedo()}
            variant="ghost"
            size="icon"
            onClick={() => editor?.onRedo()}
          >
            <Redo2 className="size-4 text-primary" />
          </Button>
        </Hint>
        <Separator orientation="vertical" className="mx-2 h-[32px]" />

        <Zoom editor={editor} />

        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="ghost" className="hover:bg-secondary">
                <p className="text-primary">Експортувати</p>
                <Download className="size-4 ml-2 text-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-60 bg-primary">
              <DropdownMenuItem
                onClick={() => editor?.saveJson()}
                className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
              >
                <CiFileOn className="size-8 text-muted" />
                <div className="text-muted">
                  <p><b>JSON</b></p>
                  <p className="text-xs text-muted-foreground">
                    Зберегти для редагування
                  </p>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => editor?.savePng()} 
                className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
              >
                <CiFileOn className="size-8 text-muted" />
                <div className="text-muted">
                  <p><b>PNG</b></p>
                  <p className="text-xs text-muted-foreground">
                    Найкраще для використання в Інтернеті
                  </p>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => editor?.saveJpg()} // TODO: Додати функціонал
                className="flex items-center gap-x-2 hover:bg-secondary hover:cursor-pointer transition"
              >
                <CiFileOn className="size-8 text-muted" />
                <div className="text-muted">
                  <p><b>JPG</b></p>
                  <p className="text-xs">
                    Найкраще для печаті
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
