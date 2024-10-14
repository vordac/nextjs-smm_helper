import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { StickerItem } from "./sticker-item";

// Import all images
import s1 from "../stickers/image1.png";
import s2 from "../stickers/2.png";
import s3 from "../stickers/3.png";

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
    const importedImages = [
      s1,
      s2,
      s3,
      s1,
      s2,
      s3,
      s1,
      s2,
      s3,
      s1,
      s2,
      s3,
      s1,
      s2,
      s3,
      s1,
      s2,
      s3,
      s1,
      s2,
      s3,
      s1,
      s2,
      s3 /*, add all your images here */,
    ];

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
