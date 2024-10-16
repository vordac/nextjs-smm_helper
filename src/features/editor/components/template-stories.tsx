import { Editor } from "@/features/editor/types";
import { Label } from "@/components/ui/label";

interface TemplateStoriesProps {
  editor: Editor | undefined;
}

export const TemplateStories = ({
  editor
}: TemplateStoriesProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <Label>Сторіс</Label>
      </div>
      <div className="grid grid-cols-2">

      </div>
    </div>
  );
};