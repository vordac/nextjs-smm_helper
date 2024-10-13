import React from 'react';
import { fabric } from 'fabric';

interface StickerItemProps {
  url: string;
  addStickerToCanvas: (image: fabric.Image) => void;
}

export const StickerItem: React.FC<StickerItemProps> = ({ url, addStickerToCanvas }) => {
  const handleClick = () => {
    fabric.Image.fromURL(url, img => {
      addStickerToCanvas(img);
    });
  };

  return <img src={url} alt="sticker" onClick={handleClick} className='w-[96px] hover:cursor-pointer hover:bg-muted'/>;
};
