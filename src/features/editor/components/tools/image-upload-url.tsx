import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent } from "react";
import { AlertTriangle, Loader, Upload } from "lucide-react";
import { fabric } from "fabric";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  addImageToCanvas: (imageUrl: fabric.Image) => void;
}

const ImageUploadURL: React.FC<ImageUploadProps> = ({ addImageToCanvas }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isImageError, setIsImageError] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const handleButtonClick = () => {
    if (imageUrl) {
      setIsImageLoaded(false);
      setIsImageError(false);
      fabric.Image.fromURL(imageUrl, (img) => {
        addImageToCanvas(img);
        setIsImageLoaded(true);
      }, {
        crossOrigin: 'anonymous'
      });
    }
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 p-2 ">
      <Label htmlFor="picture" className="p-2 text-muted">URL зображення</Label>
      <div className="flex w-full max-w-sm items-center gap-1.5">
        <Input
          id="picture"
          type="text"
          value={imageUrl}
          onChange={handleInputChange}
          className="hover:bg-primary bg-primary"
        />
        <Button type="button" variant="ghost" onClick={handleButtonClick}>Завантажити</Button>
      </div>
    </div>
  );
};

export default ImageUploadURL;
