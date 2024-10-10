import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center">
        <div className="size-8 relative shrink-0">
          <Image
            alt=""
            src="/logo.svg"
            fill
            className="shrink-0 hover:opacity-75 transition"
          />
        </div>
      </div>
    </Link>
  );
};
