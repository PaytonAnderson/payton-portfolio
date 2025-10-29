import EducationRow from "@/components/education-row"
import Link from "next/link"

export default function Education() {
    return (
        <div className="flex flex-col text-center">
            <div className="mb-4">
                Education History
            </div>
            <div className="grid grid-cols-2">
                <h1 className="px-2 border-r border-white  text-right">Timeline</h1>
                <h1 className="px-2  text-left">Education</h1>
                
                <EducationRow year="2017" title="Highschool" description="Stadium High School Tacoma Washington" />
                <EducationRow year="2021" title="College" description="California Polytechnic State University San Luis Obispo California" />
            </div>
            <div className="flex gap-4 justify-center py-4">
                <Link href={"/contact"} className="bg-gray-900 rounded-xl p-4 hover:underline">
                    Contact -&gt;
                </Link>
            </div>
        </div>
    )
}