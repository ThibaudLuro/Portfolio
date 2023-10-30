import { timelineItems } from "../../utils/constants/TimeLineItems";

interface IProps {
    index: number;
    date: string;
    title: string;
    description: string;
}

function TimelineItem(props: IProps) {
    return (
        <div className="flex flex-col w-full md:flex-row items-start justify-center">
            <div className="flex flex-col w-full items-center justify-center pt-4 text-center md:items-end md:text-right md:pt-10">
                {props.index % 2 !== 0 && (
                    <>
                        <p className="text-gray-600">{props.date}</p>
                        <h3 className="font-bold mb-1">{props.title}</h3>
                        <p className="text-gray-600">{props.description}</p>
                    </>
                )}
            </div>

            <div className="hidden md:flex flex-col justify-center items-center mx-10 relative self-stretch">
                <div className="w-[0.5px] bg-black flex-grow" />
                <div className="h-3 w-3 bg-black rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>

            <div className="flex flex-col w-full items-center justify-center text-center pb-4 md:items-start md:text-left md:pb-10">
                {props.index % 2 === 0 && (
                    <>
                        <p className="text-gray-600">{props.date}</p>
                        <h3 className="font-bold mb-1">{props.title}</h3>
                        <p className="text-gray-600">{props.description}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default function VerticalTimeline() {
    return (
        <div className="grid items-start justify-center">
            {timelineItems.map((item, index) => (
                <TimelineItem key={index} index={index} date={item.date} title={item.title} description={item.description} />
            ))}
        </div>
    );
};