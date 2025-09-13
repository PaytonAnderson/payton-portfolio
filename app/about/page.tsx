import Link from "next/link"
import { Button } from "@/components/ui/button"
export default async function About() {
    return (
        <div>
            <h1>About Me</h1>
            <p>I am Payton Anderson a recent Computer Science graduate from California Polytechnic State University.</p>
            <p>I am passionate about web development and love creating beautiful and functional websites.</p>
            <p>In my free time, I enjoy rock climbing, wrestling, and exploring new technologies.</p>
            <p>Feel free to reach out to me for any collaboration or just to say hi!</p>
            <p>Contact me at: paytonoanderson03@gmail.com</p>
            <p>Check out my GitHub: <a href="https://github.com/PaytonAnderson" target="_blank" rel="noopener noreferrer"><Button>Github</Button></a></p>
            <p>Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/payton-anderson-50ab14293/" target="_blank" rel="noopener noreferrer"><Button>Linkedin</Button></a></p>
        </div>
    )
}