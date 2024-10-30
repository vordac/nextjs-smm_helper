import { Editor } from "@/features/editor/types";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { PostItem } from "./post-item";

interface TemplatePostProps {
  editor: Editor | undefined;
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

export const TemplatePost = ({ editor }: TemplatePostProps) => {
  const [postJson, setPostsJson] = useState<{ [key: string]: string }>({});
  const [postPng, setPostsPng] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const jsonContext = require.context(
        "@/features/templates/post/json",
        true,
        /\.(json)$/
      );
      const pngContext = require.context(
        "@/features/templates/post/png",
        true,
        /\.(png|jpe?g|svg)$/
      );

      const importedPngs = pngContext.keys().map(pngContext) as ImageModule[];

      const jsonMap: { [key: string]: string } = {};
      const jsonPromises = jsonContext.keys().map(async (key) => {
        try {
          const json = await import(
            `@/features/templates/post/json/${key.replace("./", "")}`
          );
          return { key, json: json.default };
        } catch (error) {
          console.error(error);
          return null;
        }
      });

      const importedJsons = await Promise.all(jsonPromises);

      importedJsons.forEach((jsonData) => {
        if (jsonData) {
          const { key, json } = jsonData;
          const filename = key
            .split("/")
            .pop()
            ?.split(".")
            .slice(0, -1)
            .join(".");
          if (filename) {
            jsonMap[filename] = JSON.stringify(json);
          }
        }
      });


      setPostsJson(jsonMap);
      setPostsPng(importedPngs.map((png) => png.default.src));
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="py-4">
        <Label className="text-muted">Пости</Label>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {postPng.map((post, index) => {
          const filename = post
            .split("/")
            .pop()
            ?.split(".")
            .slice(0, -2)
            .join("");
          const json = filename ? postJson[filename] : "";
          return (
            <PostItem key={index} url={post} editor={editor} json={json} />
          );
        })}
      </div>
    </div>
  );
};
