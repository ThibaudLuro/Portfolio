import { useParams } from "react-router-dom";
import TopBar from "../components/common/Topbar";
import { skills } from "../utils/constants/skills/Skills";
import { ISkill } from "../utils/types";
import SplitParagraphs from "../utils/functions/SplitParagraph";

export default function SkillDetails() {
    let { name } = useParams();
    const skill: ISkill = skills.find(skill => skill.name === name)!;

    return (
        <div className="h-full w-full bg-primary font-montserrat">
            <div className="p-10">

                <TopBar />

                <h1 className="mt-20 text-center font-semibold">COMPETENCE</h1>
                <h1 className="text-center font-bold uppercase text-4xl">{name}</h1>

                <div className="w-full flex justify-center items-center">
                    <div className="h-44 w-full flex justify-center items-center md:h-96 md:w-3/4 lg:w-1/2 shadow-2xl bg-neutral-900 mt-20">
                        <img
                            className="h-16"
                            src={import.meta.env.BASE_URL + skill.icon}
                            alt=""
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-10 xl:gap-20 mt-10 xl:p-40">
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

                            <div className="h-96 bg-neutral-900 shadow-xl" />
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
                            <div className="md:text-justify">
                                {SplitParagraphs(skill.explanation[4]?.content)}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
