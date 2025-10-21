import EducationRow from "@/components/education-row"
import Link from "next/link"
export default function Education() {
    return (
        <div className="flex flex-col text-center">
            <div>
                Education History
            </div>
            <div className="flex flex-col">
                <div className="flex divide-x divide-solid divide-white">
                    <h1 className="flex-1 px-2">Timeline</h1>
                    <h1 className="flex-1 px-2">Education</h1>

                </div>
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