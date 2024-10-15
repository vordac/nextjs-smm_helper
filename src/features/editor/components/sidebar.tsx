import {
  LayoutTemplate,
  ImageIcon,
  Pencil,
  Settings,
  Shapes,
  Sparkles,
  Type,
  Smile,
} from "lucide-react";

import "../../../app/globals.css";

import { SidebarItem } from "@/features/editor/components/sidebar-item";
import { ActiveTool } from "@/features/editor/types";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface SidebarProps {
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Sidebar = ({ activeTool, onChangeActiveTool }: SidebarProps) => {
  return (
    <aside className="bg-white flex flex-col w-[100px] h-full border-r overflow-y-auto overflow-x-hidden">
      <ScrollArea className="w-full flex flex-col">
          {/* Дизайн */}
          <SidebarItem
            icon={LayoutTemplate}
            label="Дизайн"
            isActive={activeTool === "templates"}
            onClick={() => onChangeActiveTool("templates")}
          />

          {/* Зображення */}
          <SidebarItem
            icon={ImageIcon}
            label="Зображення"
            isActive={activeTool === "images"}
            onClick={() => onChangeActiveTool("images")}
          />

          {/* Текст */}
          <SidebarItem
            icon={Type}
            label="Текст"
            isActive={activeTool === "text"}
            onClick={() => onChangeActiveTool("text")}
          />

          {/* Форми */}
          <SidebarItem
            icon={Shapes}
            label="Форми"
            isActive={activeTool === "shapes"}
            onClick={() => onChangeActiveTool("shapes")}
          />

          {/* Малювання */}
          <SidebarItem
            icon={Pencil}
            label="Малювання"
            isActive={activeTool === "draw"}
            onClick={() => onChangeActiveTool("draw")}
          />

          {/* Стікери */}
          <SidebarItem
            icon={Sparkles}
            label="Стікери"
            isActive={activeTool === "sticker"}
            onClick={() => onChangeActiveTool("sticker")}
          />

          {/* Емодзі */}
          <SidebarItem
            icon={Smile}
            label="Емодзі"
            isActive={activeTool === "emoji"}
            onClick={() => onChangeActiveTool("emoji")}
          />

          {/* Налаштування */}
          <SidebarItem
            icon={Settings}
            label="Налаштування"
            isActive={activeTool === "settings"}
            onClick={() => onChangeActiveTool("settings")}
          />
      </ScrollArea>
    </aside>
  );
};
