import React from "react";
import { Editor } from "../types";

interface StoryItemProps {
  url: string;
  editor: Editor | undefined;
  json: string | null;
}

export const StoryItem: React.FC<StoryItemProps> = ({
  url,
  editor,
  json,
}) => {
  const handleClick = () => {
    if (json) {
      if (editor?.loadJson) {
        editor?.loadJson(json)
      } else {
        console.log("changeStories is undefined");
      }
    } else {
      console.log("json is undefined");
    }
  };

  return (
    <img
      src={url}
      alt="story"
      onClick={handleClick}
      className="w-full hover:cursor-pointer hover:bg-muted hover:opacity-80"
    />
  );
};