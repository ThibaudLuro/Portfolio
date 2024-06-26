import { BiRightArrowAlt } from "react-icons/bi";

interface IProps {
    name: string;
    description?: string;
    icon?: string;
}

export default function Card(props: IProps) {
    console.log(props.icon)
    return (
        <div className={`group relative h-80 w-full flex flex-col border-[1px] border-secondary justify-center items-center cursor-pointer transition duration-300 ease-in-out`}>
            <div className="h-full flex flex-col justify-center items-center cursor-pointer">
                <img
                    className="h-16"
                    src={props.icon}
                    alt=""
                />
            </div>
            <div className="w-full px-4 py-6 absolute flex justify-between items-center h-10 bottom-0">
                <div className="flex flex-col">
                    <h1 className="text-xs uppercase font-bold">{props.name}</h1>
                    <h1 className="text-[10px] uppercase">{props.description}</h1>
                </div>
                <BiRightArrowAlt className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
            </div>
        </div>
    )
}