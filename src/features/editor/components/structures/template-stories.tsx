import { Editor } from "@/features/editor/types";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { StoryItem } from "./story-item";

interface TemplateStoriesProps {
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

export const TemplateStories = ({ editor }: TemplateStoriesProps) => {
  const [storiesJson, setStoriesJson] = useState<{ [key: string]: string }>({});
  const [storiesPng, setStoriesPng] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const jsonContext = require.context(
        "@/features/templates/stories/json",
        true,
        /\.(json)$/
      );
      const pngContext = require.context(
        "@/features/templates/stories/png",
        true,
        /\.(png|jpe?g|svg)$/
      );

      const importedPngs = pngContext.keys().map(pngContext) as ImageModule[];

      const jsonMap: { [key: string]: string } = {};
      const jsonPromises = jsonContext.keys().map(async (key) => {
        try {
          const json = await import(
            `@/features/templates/stories/json/${key.replace("./", "")}`
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


      setStoriesJson(jsonMap);
      setStoriesPng(importedPngs.map((png) => png.default.src));
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="pb-4">
        <Label className="text-muted">Сторіси</Label>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {storiesPng.map((story, index) => {
          const filename = story
            .split("/")
            .pop()
            ?.split(".")
            .slice(0, -2)
            .join("");
          const json = filename ? storiesJson[filename] : "";
          return (
            <StoryItem key={index} url={story} editor={editor} json={json} />
          );
        })}
      </div>
    </div>
  );
};
