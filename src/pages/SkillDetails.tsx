import { Link, useParams } from "react-router-dom";
import { skills } from "../utils/constants/skills/Skills";
import { ISkill } from "../utils/types";
import SplitParagraphs from "../utils/functions/SplitParagraph";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function SkillDetails() {
    let { name } = useParams();
    const skill: ISkill = skills.find(skill => skill.name === name)!;

    const [progress, setProgress] = useState(5);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(skill.percentageOfMastery), 100)
        return () => clearTimeout(timer)
    }, [skill]);

    return (
        <div className="text-justify">
            <h1 className="mt-20 text-center font-semibold">COMPETENCE</h1>
            <h1 className="text-center font-bold uppercase text-4xl">{name}</h1>

            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger className="flex flex-col w-full justify-center items-center mt-10">
                        <Progress value={progress} className="w-[30%] md:w-[20%] xl:w-[10%] cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p className="font-medium">Maitrisé à {progress} %</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <div className="w-full flex justify-center items-center">
                <div className="h-44 w-full flex justify-center items-center md:h-96 md:w-3/4 lg:w-1/2 shadow-2xl bg-stone-900 mt-10">
                    <img
                        className="h-16"
                        src={import.meta.env.BASE_URL + skill.icon}
                        alt=""
                    />
                </div>
            </div>

            <div className="flex flex-col gap-10 xl:gap-20 mt-10 xl:px-80 xl:pt-20">
                <div className="">
                    <h1 className="font-bold text-xl uppercase">{skill.explanation[0].element}</h1>

                    <div className="mt-4 md:text-justify">
                        {SplitParagraphs(skill.explanation[0].content)}
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{skill.explanation[1]?.element}</h1>

                    <div className="flex flex-col mt-4 gap-20">
                        <div className="md:text-justify">
                            {SplitParagraphs(skill.explanation[1]?.content)}
                        </div>

                        <div className="h-96 bg-stone-900 shadow-xl" />
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{skill.explanation[2]?.element}</h1>
                    <div className="md:text-justify">
                        {SplitParagraphs(skill.explanation[2]?.content)}
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{skill.explanation[3]?.element}</h1>
                    <div className="md:text-justify">
                        {SplitParagraphs(skill.explanation[3]?.content)}
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{skill.explanation[4]?.element}</h1>
                    <div className="md:text-justify flex space-x-2 mt-4 overflow-x-auto">
                        {skill.explanation[4]?.content.split(',').map((item, index) => (
                            <Link to={`/Portfolio/projects/${item.trim()}`} key={index} style={{ textDecoration: 'none' }}>
                                <Badge className="whitespace-nowrap" key={index}>{item}</Badge>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
