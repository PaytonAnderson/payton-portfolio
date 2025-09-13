import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <Link href={"/projects"}>
          <Button>Projects</Button>
        </Link>
        <Link href={"/about"}>
          <Button>About Me</Button>
        </Link>
      </main>
    </>
  );
}
