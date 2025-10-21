export default function ProjectCard({
    title,
    description,
    liveDemoLink,
    sourceCodeLink,
    footerText,
}: {
    title: string;
    description: string;
    liveDemoLink: string;
    sourceCodeLink: string;
    footerText: string;
}) {
    return (
        <div className="bg-gray-900 rounded-xl p-4">
            <div className="mb-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="mb-4">
                <a
                    href={liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Live Demo
                </a>
                <a
                    href={sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-4"
                >
                    Source Code
                </a>
            </div>
            <div className="text-gray-500 text-sm">
                <p>{footerText}</p>
            </div>
        </div>
    );
}
