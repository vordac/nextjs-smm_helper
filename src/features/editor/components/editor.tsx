"use client";

import { fabric } from "fabric";
// import debounce from "lodash.debounce";
import { useCallback, useEffect, useRef, useState } from "react";

// import { ResponseType } from "@/features/projects/api/use-get-project";
// import { useUpdateProject } from "@/features/projects/api/use-update-project";

import { ActiveTool, selectionDependentTools } from "@/features/editor/types";
import { Navbar } from "@/features/editor/components/navbar";
import { Footer } from "@/features/editor/components/footer";
import { useEditor } from "@/features/editor/hooks/use-editor";
import { Sidebar } from "@/features/editor/components/sidebar";
import { Toolbar } from "@/features/editor/components/toolbar";
import { ShapeSidebar } from "@/features/editor/components/shape-sidebar";
import { FillColorSidebar } from "@/features/editor/components/fill-color-sidebar";
import { StrokeColorSidebar } from "@/features/editor/components/stroke-color-sidebar";
import { StrokeWidthSidebar } from "@/features/editor/components/stroke-width-sidebar";
import { OpacitySidebar } from "@/features/editor/components/opacity-sidebar";
import { TextSidebar } from "@/features/editor/components/text-sidebar";
import { FontSidebar } from "./font-sidebar";
import { ImageSidebar } from "./image-sidebar";
import { StickerSidebar } from "./sticker-sidebar";
import { EmojiSidebar } from "./emoji-sidebar";
// import { ImageSidebar } from "./image-sidebar";
// import { TemplateSidebar } from "./template-sidebar";
// import { FilterSidebar } from "./filter-sidebar";
// import { AiSidebar } from "./ai-sidebar";
// import { RemoveBgSidebar } from "./remove-bg-sidebar";
// import { DrawSidebar } from "./draw-sidebar";
// import { SettingsSidebar } from "./settings-sidebar";
// import { FontSidebar } from "@/features/editor/components/font-sidebar";
// import { ImageSidebar } from "@/features/editor/components/image-sidebar";
// import { FilterSidebar } from "@/features/editor/components/filter-sidebar";
// import { DrawSidebar } from "@/features/editor/components/draw-sidebar";
// import { AiSidebar } from "@/features/editor/components/ai-sidebar";
// import { TemplateSidebar } from "@/features/editor/components/template-sidebar";
// import { RemoveBgSidebar } from "@/features/editor/components/remove-bg-sidebar";
// import { SettingsSidebar } from "@/features/editor/components/settings-sidebar";

// interface EditorProps {
//   initialData: ResponseType["data"];
// }

// export const Editor = ({ initialData }: EditorProps) => {
export const Editor = () => {
  //   const { mutate } = useUpdateProject(initialData.id);

  const [activeTool, setActiveTool] = useState<ActiveTool>("select");

  const onChangeActiveTool = useCallback(
    (tool: ActiveTool) => {
      if (tool === activeTool) {
        return setActiveTool("select");
      }

      if (tool === "draw") {
        // Enable draw
      }

      if (activeTool === "draw") {
        // Disable draw
      }

      setActiveTool(tool);
    },
    [activeTool]
  );

  const onClearSelection = useCallback(() => {
    if (selectionDependentTools.includes(activeTool)) {
      setActiveTool("select");
    }
  }, [activeTool]);

  const { init, editor } = useEditor({
    // defaultState: initialData.json,
    // defaultWidth: initialData.width,
    // defaultHeight: initialData.height,
    clearSelectionCallback: onClearSelection,
    // saveCallback: debouncedSave,
  });

  const canvasRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current!,
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <Navbar
        // id={initialData.id}
        // editor={editor}
        activeTool={activeTool}
        onChangeActiveTool={onChangeActiveTool}
      />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <ShapeSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <FillColorSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <StrokeColorSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <StrokeWidthSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <OpacitySidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <TextSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <FontSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <ImageSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <StickerSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <EmojiSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        {/* <TemplateSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <FilterSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <AiSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <RemoveBgSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <DrawSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <SettingsSidebar
          editor={editor}
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        /> */}
        <main className="bg-muted flex-1 overflow-auto relative flex flex-col">
          <Toolbar
            editor={editor}
            activeTool={activeTool}
            onChangeActiveTool={onChangeActiveTool}
            key={JSON.stringify(editor?.canvas.getActiveObject())}
          />
          <div
            className="flex-1 h-[calc(100%-124px)] bg-muted"
            ref={containerRef}
          >
            <canvas ref={canvasRef} />
          </div>
        </main>
      </div>
    </div>
  );
};
