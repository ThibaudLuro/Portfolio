import { timelineItems } from "../../utils/constants/TimeLineItems";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { CalendarIcon } from "@radix-ui/react-icons";

interface IProps {
    index: number;
    date: string;
    title: string;
    description: string;
}

function TimelineItem(props: IProps) {

    const displayedItem =
        <HoverCard>
            <HoverCardTrigger className="cursor-pointer">
                <p className="text-stone-400">{props.date}</p>
                <h3 className="font-bold mb-1">{props.title}</h3>
                <p className="text-stone-400">{props.description}</p>
            </HoverCardTrigger>
            <HoverCardContent className="w-96 text-start items-start">
                <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{props.title}</h4>
                        <p className="text-sm text-stone-400">
                            {props.description}
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                {props.date}
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>

    return (
        <div className="flex flex-col w-full md:flex-row items-start justify-center">
            <div className="flex flex-col w-full items-center justify-center pt-4 text-center md:items-end md:text-right md:pt-10">
                {props.index % 2 !== 0 && (
                    displayedItem
                )}
            </div>

            <div className="hidden md:flex flex-col justify-center items-center mx-10 relative self-stretch">
                <div className="w-[0.5px] bg-stone-400 flex-grow" />
                <div className="h-3 w-3 bg-stone-400 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>

            <div className="flex flex-col w-full items-center justify-center text-center pb-4 md:items-start md:text-left md:pb-10">
                {props.index % 2 === 0 && (
                    displayedItem
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