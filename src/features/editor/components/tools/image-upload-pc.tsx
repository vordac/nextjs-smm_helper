import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, useRef } from "react";
import { AlertTriangle, Loader, Upload } from "lucide-react";
import { fabric } from "fabric";

interface ImageUploadProps {
  addImageToCanvas: (imageUrl: string) => void;
}

const ImageUploadPC: React.FC<ImageUploadProps> = ({ addImageToCanvas }) => {
  const [image, setImage] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isImageError, setIsImageError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result && typeof result === "string") {
          setImage(result);
          setIsImageLoaded(false);
          setIsImageError(false);
          addImageToCanvas(result); 
          if (inputRef.current) {
            inputRef.current.value = ""; 
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 p-2 ">
      <Label htmlFor="picture" className="p-2 text-muted">Зображення з пристрою</Label>
      <Input className="hover:cursor-pointer hover:bg-primary bg-primary"
        ref={inputRef}
        id="picture"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUploadPC;
