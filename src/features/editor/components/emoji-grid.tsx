import React, { useEffect, useState } from "react";
import { fabric } from "fabric";
import { EmojiItem } from "./emoji-item";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EmojiGridProps {
  addEmojiToCanvas: ((image: fabric.Image) => void) | undefined;
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

export const EmojiGrid: React.FC<EmojiGridProps> = ({
  addEmojiToCanvas,
}) => {
  const [emojis, setEmojis] = useState<string[]>([]);

  useEffect(() => {
    // Create a context for images in the emojis folder
    const imagesContext = require.context('@/features/editor/emojis', true, /\.(png|jpe?g|svg)$/);

    // Create an array of all imported images
    const importedImages = imagesContext.keys().map(imagesContext) as ImageModule[];

    // Extract the src property of each image and set the emojis state
    setEmojis(importedImages.map((image) => image.default.src));
  }, []);

  const handleAddEmojiToCanvas = (image: fabric.Image) => {
    if (addEmojiToCanvas) {
      addEmojiToCanvas(image);
    }
  };

  return (
    <ScrollArea className="w-full">
      <div className="grid grid-cols-8 gap-4 w-full p-4">
        {emojis.map((emoji, index) => (
          <EmojiItem
            key={index}
            url={emoji}
            addEmojiToCanvas={handleAddEmojiToCanvas}
          />
        ))}
      </div>
    </ScrollArea>
  );
};


