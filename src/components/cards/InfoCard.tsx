interface IProps {
    title: string;
    description: string;
}

export default function InfoCard(props: IProps) {
    return (
        <div className="h-80 w-full shadow-lg hover:shadow-secondary select-none border-[1px] border-secondary rounded-md flex flex-col items-center justify-center text-center transition-shadow duration-300 ease-in-out uppercase">
            <h1 className="text-2xl font-bold">{props.title}</h1>
            <h1 className="text-[10px]">{props.description}</h1>
        </div>
    )
}