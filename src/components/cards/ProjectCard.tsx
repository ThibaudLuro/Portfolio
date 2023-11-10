import { BiRightArrowAlt } from "react-icons/bi";

interface IProps {
    projectName: string;
    projectDescription: string;
    projectLogo?: string;
    colSpan?: number;
}

export default function ProjectCard(props: IProps) {
    return (
        <div className={`group relative h-80 flex flex-col justify-center items-center cursor-pointer bg-neutral-900 hover:bg-black hover:shadow-xl transition duration-300 ease-in-out ${props.colSpan && `md:col-span-${props.colSpan.toString()}`}`}>
            <div className="h-full flex flex-col justify-center items-center cursor-pointer">
                <img
                    className="h-16 rounded-md"
                    src={props.projectLogo}
                    alt=""
                />
            </div>
            <div className="w-full px-4 text-white absolute flex justify-between items-center bg-black h-10 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col">
                    <h1 className="text-xs uppercase font-bold">{props.projectName}</h1>
                    <h1 className="text-[10px] uppercase">{props.projectDescription}</h1>
                </div>
                <BiRightArrowAlt size={20} />
            </div>
        </div>
    )
}