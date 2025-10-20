import Link from "next/link"
import { Button } from "@/components/ui/button"
export default async function About() {
    return (
        <div className="flex flex-col gap-4">
            <div className="self-center bg-gray-900 rounded-xl">
                <h1 className="p-2">About Me</h1>
            </div>
            <div className="flex gap-4">
                <div className="flex-col flex-1 bg-gray-900 rounded-xl p-4">
                    <h1>Who am I?</h1>
                    <p>I am Payton Anderson a recent Computer Science graduate from California Polytechnic State University.</p>
                </div>
                <div className="flex flex-col flex-1 bg-gray-800 rounded-xl p-4">
                    <h1>What I care about:</h1>
                    <p>I am passionate about web development and love creating beautiful and functional websites.</p>
                </div>
                <div className="flex flex-col flex-1 bg-gray-700 rounded-xl p-4">
                    <h1>Some of my hobbies:</h1>
                    <p>In my free time, I enjoy rock climbing, wrestling, and exploring new technologies.</p>
                </div>
                <div className="flex flex-col flex-1 bg-gray-600 rounded-xl p-4">
                    <h1>Talk to me!</h1>
                    <p>Feel free to reach out to me for any collaboration or just to say hi!</p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex flex-col flex-1 bg-gray-900 rounded-xl p-4 text-center justify-center">
                    <h1>Email:</h1>
                    <p>paytonoanderson03@gmail.com</p>
                </div>

                <a href="https://github.com/PaytonAnderson" target="_blank" rel="noopener noreferrer" className="flex flex-col flex-1 bg-gray-800 rounded-xl p-4 justify-center items-center hover:underline">
                    <h1>Check out my GitHub</h1>
                    {/* <img src="/github.webp" /> */}
                </a>
                <a href="https://www.linkedin.com/in/payton-anderson-50ab14293/" target="_blank" rel="noopener noreferrer" className="flex flex-col flex-1 bg-gray-700 rounded-xl p-4 justify-center items-center hover:underline">
                    <h1>Connect with me on LinkedIn</h1>

                    {/* <img src="/Linkedin-Logo.png" alt="LinkedIn Logo" /> */}
                </a>
            </div>
            <div className="flex gap-4">
                <div className="flex flex-col flex-1 bg-gray-900 rounded-xl p-4 text-center items-center justify-center">
                    <h1>Resume:</h1>
                </div>
                <div className="flex flex-col flex-1 bg-gray-800 rounded-xl p-4 items-center">
                    <Button asChild className="rounded-xl">
                        <Link href="/PaytonAnderson_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            View Resume
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="flex gap-4">
                <Link href={"/education"} className="flex-1 bg-gray-900 rounded-xl p-4 text-center hover:underline">
                    Education
                </Link>
            </div>
        </div >
    )
}