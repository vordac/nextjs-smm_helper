import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center">
          <p className="text-primary font-bold text-sm w-[32px] text-center">SMM HELPER</p>
      </div>
    </Link>
  );
};
