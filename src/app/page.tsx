import { Button } from "@/components/ui/button";
import { Unbounded } from "next/font/google";
import Link from "next/link";

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="flex justify-center bg-primary h-lvh">
      <div className={unbounded.className}>
        <header>
          <div className="bg-third w-[164px] p-2 rounded-sm m-4 text-primary flex items-center">
            <p>
              <b>SMM-HELPER</b>
            </p>
          </div>
        </header>
        <main>
          {/* Текст */}
          <div className="p-2 text-muted mt-24">
            <p className="text-5xl">
              <b>
                Інструменти для <br />
                SMM-спеціалістів
              </b>
            </p>
          </div>
          <div className="p-2 text-third">
            <p className="text-3xl">
              <b>Обери свій улюблений</b>
            </p>
          </div>

          {/* Кнопки */}
          <div className="flex flex-col p-2 text-muted mt-24 items-center">
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="bg-secondary text-primary p-6 hover:bg-third"
            >
              <Link href="/editor">Редактор графіки</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="bg-muted text-primary p-6 my-4 hover:bg-third"
            >
              <Link href="/scheme">Кольорова схема</Link>
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
