import { BiRightArrowAlt } from "react-icons/bi";

interface IProps {
    skillName: string;
    skillIcon: string;
}

export default function SkillCard(props: IProps) {
    return (
        <div className="group relative h-96 w-80 bg-neutral-900 hover:bg-black hover:shadow-xl transition duration-300 ease-in-out">
            <div className="h-full flex flex-col justify-center items-center cursor-pointer">
                <img
                    className="h-16 rounded-md"
                    src={props.skillIcon}
                    alt=""
                />
            </div>
            <div className="w-full px-4 text-white absolute flex justify-between items-center bg-black h-10 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-xs uppercase font-bold">{props.skillName}</h1>
                <BiRightArrowAlt size={20} />
            </div>
        </div>
    )
}