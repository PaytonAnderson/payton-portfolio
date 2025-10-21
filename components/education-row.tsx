type EducationRowProps = {
    year: string
    title: string
    description: string

}
function EducationRow({ year, title, description }: EducationRowProps) {
    return (
        <div className="flex divide-x divide-solid divide-white">
            <h2 className="flex-1 px-2 py-4">{year}</h2>
            <div className="flex-1 px-2 flex flex-col py-4">
                <h2>{title}:</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default EducationRow