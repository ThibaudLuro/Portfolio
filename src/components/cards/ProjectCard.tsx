interface IProps {
    projectName: string;
    projectDescription: string;
    colSpan?: number;
}

export default function ProjectCard(props: IProps) {
    return (
        <div className={`group h-80 flex flex-col justify-center items-center cursor-pointer bg-zinc-300 hover:bg-zinc-400 hover:shadow-xl transition duration-300 ease-in-out ${props.colSpan && `md:col-span-${props.colSpan}`}`}>
            <h1 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-3xl font-bold uppercase">{props.projectName}</h1>
            <h1 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 italic">{props.projectDescription}</h1>
        </div>
    )
}