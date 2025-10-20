import { Button } from "@/components/ui/button"
import Link from "next/link";
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
            <Card>
                <CardHeader>
                    <CardTitle>Sports league website</CardTitle>
                    <CardDescription>College football pool</CardDescription>
                </CardHeader>
                <CardContent>
                    <a
                        href="https://cfp2025.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Live Demo
                    </a>
                    <a
                        href="https://github.com/PaytonAnderson/cfp2025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-4"
                    >
                        Source Code
                    </a>
                </CardContent>
                <CardFooter>
                    <p>Built with Next.js Supabase and deployed with Vercel</p>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>NYT connections clone</CardTitle>
                    <CardDescription>Play the NYT Connections</CardDescription>
                </CardHeader>
                <CardContent>
                    <a
                        href="https://nytconnections.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Live Demo
                    </a>
                    <a
                        href="https://github.com/PaytonAnderson/connections"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-4"
                    >
                        Source Code
                    </a>
                </CardContent>
                <CardFooter>
                    <p>Built with Next.js and deployed with Vercel</p>
                </CardFooter>
            </Card>


        </div>
    )
}
