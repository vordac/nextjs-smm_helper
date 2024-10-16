import { Editor } from "@/features/editor/types";
import { Label } from "@/components/ui/label";

interface TemplatePostProps {
  editor: Editor | undefined;
}

export const TemplatePost = ({
  editor
}: TemplatePostProps) => {
  return (
    <div className="flex flex-col">
      <div>
        <Label >Пост</Label>
      </div>
      <div className="grid grid-cols-2">

      </div>
    </div>
  );
};
