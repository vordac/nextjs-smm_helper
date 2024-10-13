import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { StickerItem } from "./sticker-item";

// Import all images
import image1 from "../stickers/image1.png";
import { ScrollArea } from "@/components/ui/scroll-area";
// Import all your images here

interface StickerListProps {
  addStickerToCanvas: ((image: fabric.Image) => void) | undefined;
}

export const StickerList: React.FC<StickerListProps> = ({
  addStickerToCanvas,
}) => {
  const [stickers, setStickers] = useState<string[]>([]);

  useEffect(() => {
    // Create an array of all imported images
    const importedImages = [image1, image1, image1/*, add all your images here */];

    // Extract the src property of each image and set the stickers state
    setStickers(importedImages.map((image) => image.src));
  }, []);

  const handleAddStickerToCanvas = (image: fabric.Image) => {
    if (addStickerToCanvas) {
      addStickerToCanvas(image);
    }
  };

  return (
    <ScrollArea className="w-full">
      <div className="grid-cols-2 w-full">
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
