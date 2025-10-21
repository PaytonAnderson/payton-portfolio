import Link from "next/link"
type LinkButton = {
    text: string
    href: string | undefined
    className: string | undefined
}
export default function LinkButton({ text, className, href }: LinkButton) {
    return (
        <Link href={`${href ? href : "/"}`} className={`flex flex-1 rounded-xl p-4 items-center underline-offset-4 hover:underline justify-center w-full ${className ?? ""}`}
        >
            {text}
        </Link>

    )
}