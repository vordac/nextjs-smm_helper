import { fabric } from "fabric";
import { useCallback, useState, useMemo } from "react";

import {
  COLOR_1,
  COLOR_2,
  COLOR_3,
  COLOR_4,
  COLOR_5,
  COLOR_6,
  COLOR_7,
  COLOR_8,
  COLOR_9,
  JSON_KEYS,
} from "./types";

export const buildScheme = () => {
  return {
    // changeImageFilter: (value: string) => {
    //   const objects = canvas.getActiveObjects();
    //   objects.forEach((object) => {
    //     if (object.type === "image") {
    //       const imageObject = object as fabric.Image;
    //       const effect = createFilter(value);
    //       imageObject.filters = effect ? [effect] : [];
    //       imageObject.applyFilters();
    //       canvas.renderAll();
    //     }
    //   });
    // },
    // changeFillColor: (value: string) => {
    //   setFillColor(value);
    //   canvas.getActiveObjects().forEach((object) => {
    //     object.set({ fill: value });
    //   });
    //   canvas.renderAll();
    // },
    // changeImageUrl: (value: string) => {
    //   setImageUrl(value);
    //   const activeObject = canvas.getActiveObject();
    //   if (activeObject) {
    //     activeObject.set({ fill: value });
    //     canvas.renderAll();
    //   }
    // },
    // getImageUrl: () => {
    //   const selectedObject = imageUrl;
    //   if (!selectedObject) {
    //     return FONT_WEIGHT;
    //   }
    //   // @ts-ignore
    //   // Faulty TS library, fontWeight exists.
    //   const value = selectedObject.get("fontWeight") || FONT_WEIGHT;
    //   return value as string;
    // },
    // addImageFile: (value: string) => {
    //   fabric.Image.fromURL(
    //     value,
    //     (image) => {
    //       const workspace = getWorkspace();
    //       image.scaleToWidth(workspace?.width || 0);
    //       image.scaleToHeight(workspace?.height || 0);
    //       addToCanvas(image);
    //     },
    //     {
    //       crossOrigin: "anonymous",
    //     }
    //   );
    // },
    // addImageUrl: (value: fabric.Image) => {
    //   addToCanvas(value);
    // },
    // getActiveFillColor: () => {
    //   const selectedObject = selectedObjects[0];
    //   if (!selectedObject) {
    //     return fillColor;
    //   }
    //   const value = selectedObject.get("fill") || fillColor;
    //   return value as string;
    // },
  };
};

export const useScheme = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  const init = useCallback(
    ({
      initialCanvas,
      initialContainer,
    }: {
      initialCanvas: fabric.Canvas;
      initialContainer: HTMLDivElement;
    }) => {
      fabric.Object.prototype.set({
        cornerColor: "#FFF",
        cornerStyle: "circle",
        borderColor: "#3b82f6",
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: "#3b82f6",
      });

      const initialWorkspace = new fabric.Rect({
        width: 1200,
        height: 1200,
        name: "clip",
        fill: "white",
        selectable: false,
        hasControls: false,
        shadow: new fabric.Shadow({
          color: "rgba(0,0,0,0.8)",
          blur: 5,
        }),
      });

      initialCanvas.setWidth(initialContainer.offsetWidth);
      initialCanvas.setHeight(initialContainer.offsetHeight);

      initialCanvas.add(initialWorkspace);
      initialCanvas.centerObject(initialWorkspace);
      initialCanvas.clipPath = initialWorkspace;

      setCanvas(initialCanvas);
      setContainer(initialContainer);

      const currentState = JSON.stringify(initialCanvas.toJSON(JSON_KEYS));
    },
    []
  );

  return { init };
};
