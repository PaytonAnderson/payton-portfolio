import Link from "next/link";

export default function contact() {
    return (
        <div className="grid grid-rows-4 gap-4 w-full">
            <div className="flex flex-col bg-gray-900 rounded-xl p-4 text-center">
                <h1 className="text-base">Email:</h1>
                <p className="whitespace-normal break-words">paytonoanderson03@gmail.com</p>
            </div>
            <a
                href="https://github.com/PaytonAnderson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-gray-800 rounded-xl p-4 items-center justify-center hover:underline"
            >
                <h1>Check out my GitHub</h1>
            </a>
            <a
                href="https://www.linkedin.com/in/payton-anderson-50ab14293/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-gray-700 rounded-xl p-4 items-center justify-center hover:underline"
            >
                <h1>Connect with me on LinkedIn</h1>
            </a>
            <Link href={"/"} className="flex bg-gray-600 rounded-xl p-4 items-center justify-center hover:underline">
                <h1>
                    Home -&gt;
                </h1>

            </Link>
        </div>

    )
}