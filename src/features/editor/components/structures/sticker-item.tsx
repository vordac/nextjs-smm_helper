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

  return <img src={url} alt="sticker" onClick={handleClick} className='w-full hover:cursor-pointer hover:scale-95 hover:opacity-80 transition'/>;
};