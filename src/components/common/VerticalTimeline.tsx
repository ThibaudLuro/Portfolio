import { timelineItems } from "../../utils/constants/TimeLineItems";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import SplitParagraphs from "@/utils/functions/SplitParagraph";
import { ITimeLineItem } from "@/utils/types";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface IProps {
    index: number
    item: ITimeLineItem
}

function TimelineItem({ index, item }: IProps) {

    const displayedItem =
        <HoverCard openDelay={1} closeDelay={1}>
            <HoverCardTrigger className={`cursor-pointer flex flex-col items-center justify-center text-center ${index % 2 !== 0 ? "md:justify-end md:items-end md:text-right" : "md:justify-start md:items-start md:text-left"}`}>
                <p className="text-stone-400">{item.date}</p>
                <img onClick={
                    () => {
                        if (item.link) {
                            window.open(item.link, "_blank");
                        }
                    }}
                    src={timelineItems[index].logo} alt={item.title} className="h-8 my-1" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-stone-400 text-sm">{item.shortDescription}</p>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto max-w-[500px] text-start items-start">
                <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-sm text-stone-400">
                        {SplitParagraphs(item.longDescription)}
                    </p>
                    {
                        item.projectsLinked && item.skillsLinked &&
                        <div className="md:text-justify flex space-x-2 my-2 overflow-x-auto no-scrollbar h-full w-full">
                            {item.projectsLinked.map((item, index) => (
                                <Link to={`/projects/${item.trim()}`} key={index} style={{ textDecoration: 'none' }}>
                                    <Badge className="whitespace-nowrap" key={index}>{item}</Badge>
                                </Link>
                            ))}

                            <Separator orientation="vertical" className="w-[0.8px] h-7" />

                            {item.skillsLinked.map((item, index) => (
                                <Link to={`/skills/${item.trim()}`} key={index} style={{ textDecoration: 'none' }}>
                                    <Badge className="whitespace-nowrap" key={index}>{item}</Badge>
                                </Link>
                            ))}
                        </div>
                    }
                    <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                            {item.date}
                        </span>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>

    return (
        <div className="flex flex-col w-full md:flex-row items-start justify-center">
            <div className="w-full pt-4 md:pt-10">
                {index % 2 !== 0 && (
                    displayedItem
                )}
            </div>

            <div className="hidden md:flex flex-col justify-center items-center mx-10 relative self-stretch">
                <div className="w-[0.5px] bg-stone-400 flex-grow" />
                <div className="h-3 w-3 bg-stone-400 rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
            </div>

            <div className="w-full md:pb-10">
                {index % 2 === 0 && (
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
                <TimelineItem key={index} index={index} item={item} />
            ))}
        </div>
    );
};