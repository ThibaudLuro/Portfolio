interface IProps {
    number: string;
    description: string;
}

export default function StatiscticCard(props: IProps) {
    return (
        <div className="h-32 w-80 shadow-lg hover:shadow-secondary select-none border-[1px] border-secondary rounded-md flex flex-row items-center justify-center gap-4 text-center transition-shadow duration-300 ease-in-out">
            <h1 className="text-2xl font-bold">{props.number}</h1>
            <h1 className="text-sm uppercase">{props.description}</h1>
        </div>
    )
}