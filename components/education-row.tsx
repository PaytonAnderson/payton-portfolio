export default function EducationRow({ year, title, description }: { year: string, title: string, description: string }) {
    return (
        <>
            <div className="px-2 py-2 border-r border-white min-w-0 text-right">{year}</div>
                <div className="px-2 py-2 min-w-0 text-left">
                <div className="font-bold">{title}</div>
                <div className="text-sm">{description}</div>
            </div>
        </>
    )
}