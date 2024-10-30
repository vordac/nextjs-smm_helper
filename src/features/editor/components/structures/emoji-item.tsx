import React from 'react';
import { fabric } from 'fabric';

interface EmojiItemProps {
  url: string;
  addEmojiToCanvas: (image: fabric.Image) => void;
}

export const EmojiItem: React.FC<EmojiItemProps> = ({ url, addEmojiToCanvas }) => {
  const handleClick = () => {
    fabric.Image.fromURL(url, img => {
        addEmojiToCanvas(img);
    });
  };

  return <img src={url} alt="sticker" onClick={handleClick} className='w-full hover:cursor-pointer hover:scale-95 hover:opacity-80 transition'/>;
};