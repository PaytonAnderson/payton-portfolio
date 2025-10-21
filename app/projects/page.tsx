import { Button } from "@/components/ui/button"
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Projects() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <ProjectCard
                liveDemoLink="https://cfp2025.vercel.app/"
                sourceCodeLink="https://github.com/PaytonAnderson/cfp2025"
                title="Sports league website"
                description="College football pool"
                footerText="Built with Next.js Supabase and deployed with Vercel"
            />
            <ProjectCard
                liveDemoLink="https://nytconnections.vercel.app/"
                sourceCodeLink="https://github.com/PaytonAnderson/connections"
                title="NYT connections clone"
                description="Play the NYT Connections"
                footerText="Built with Next.js and deployed with Vercel"
            />
            <div className="flex gap-4 justify-center py-4">
                <Link href={"/about"} className="bg-gray-900 rounded-xl p-4 hover:underline">
                    More about me -&gt;
                </Link>
            </div>


        </div>
    )
}
