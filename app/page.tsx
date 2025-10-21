import LinkButton from "@/components/link-button";

export default async function Home() {
  return (
    <main className="flex flex-col sm:flex-row gap-2 flex-1 items-stretch link-rounded">
      <LinkButton href={"/projects"} text="Projects" className="bg-gray-900" />
      <LinkButton href={"/about"} className="bg-gray-800" text="About Me" />
      <LinkButton href={"/education"} className="bg-gray-700" text="Education" />
      <LinkButton href={"/contact"} className="bg-gray-600" text="Contact" />
    </main>
  );
}
