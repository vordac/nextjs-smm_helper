import React from "react";
import { Editor } from "../types";

interface PostItemProps {
  url: string;
  editor: Editor | undefined;
  json: string | null;
}

export const PostItem: React.FC<PostItemProps> = ({
  url,
  editor,
  json,
}) => {
  const handleClick = () => {
    if (json) {
      editor?.loadJson(json)
    } else {
      console.log("json is undefined");
    }
  };

  return (
    <img
      src={url}
      alt="post"
      onClick={handleClick}
      className="w-full hover:cursor-pointer hover:bg-muted hover:opacity-80"
    />
  );
};