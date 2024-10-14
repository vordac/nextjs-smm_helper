import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { StickerItem } from "./sticker-item";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StickerListProps {
  addStickerToCanvas: ((image: fabric.Image) => void) | undefined;
}

type ImageModule = {
  default: {
    src: string;
    height: number;
    width: number;
    blurDataURL: string;
    blurWidth: number;
    blurHeight: number;
  };
};

export const StickerList: React.FC<StickerListProps> = ({
  addStickerToCanvas,
}) => {
  const [stickers, setStickers] = useState<string[]>([]);

  useEffect(() => {
    // Create a context for images in the stickers folder
    const imagesContext = require.context('@/features/editor/stickers', true, /\.(png|jpe?g|svg)$/);

    // Create an array of all imported images
    const importedImages = imagesContext.keys().map(imagesContext) as ImageModule[];

    // Extract the src property of each image and set the stickers state
    setStickers(importedImages.map((image) => image.default.src));
  }, []);

  const handleAddStickerToCanvas = (image: fabric.Image) => {
    if (addStickerToCanvas) {
      addStickerToCanvas(image);
    }
  };

  return (
    <ScrollArea className="w-full">
      <div className="grid grid-cols-3 gap-4 w-full p-4">
        {stickers.map((sticker, index) => (
          <StickerItem
            key={index}
            url={sticker}
            addStickerToCanvas={handleAddStickerToCanvas}
          />
        ))}
      </div>
    </ScrollArea>
  );
};


