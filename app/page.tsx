import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="flex flex-col sm:flex-row gap-2 flex-1 items-stretch ">
        <Link href={"/projects"}>
          <Button className="w-full">Projects</Button>
        </Link>
        <Link href={"/about"}>
          <Button className="w-full">About Me</Button>
        </Link>
        <Link href={"/education"}>
          <Button className="w-full">Education</Button>
        </Link>
        <Link href={"/contact"}>
          <Button className="w-full">Contact Me</Button>
        </Link>
      </main>
    </>
  );
}
