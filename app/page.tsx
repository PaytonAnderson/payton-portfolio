import LinkButton from "@/components/link-button";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col items-center text-center gap-4 py-16">
        <h1 className="text-5xl font-bold">Payton Anderson</h1>
        <p className="text-xl text-gray-400">Full Stack Web Developer</p>
        <p className="text-gray-500 max-w-md">
          CS graduate from Cal Poly SLO. I build clean, functional web applications.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="/projects" className="bg-gray-700 rounded-xl hover:bg-gray-600 px-6 py-2 rounded-lg transition-colors">
            View Projects
          </a>
          <a href="/resume/PaytonAndersonResume.pdf" download className="bg-gray-800 rounded-xl hover:bg-gray-700 px-6 py-2 rounded-lg
  transition-colors">
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}
