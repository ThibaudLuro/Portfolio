import { Link, useParams } from "react-router-dom";
import { projects } from "../utils/constants/Projects";
import { IProject } from "../utils/types";
import SplitParagraphs from "../utils/functions/SplitParagraph";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetails() {
    let { name } = useParams();
    const project: IProject = projects.find(project => project.name === name)!;

    return (
        <div className="text-justify">
            <h1 className="mt-20 text-center font-semibold">REALISATION</h1>
            <h1 className="text-center font-bold uppercase text-4xl">{name}</h1>

            <div className="w-full flex justify-center items-center">
                <div className="h-44 w-full flex justify-center items-center md:h-96 md:w-3/4 lg:w-1/2 shadow-2xl bg-stone-900 mt-10">
                    <img
                        className="h-16"
                        src={import.meta.env.BASE_URL + project.icon}
                        alt=""
                    />
                </div>
            </div>

            <div className="flex flex-col gap-10 xl:gap-20 mt-20 xl:px-80">

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[0].element}</h1>

                    <div className="mt-4 md:text-justify">
                        {SplitParagraphs(project.explanation[0].content)}
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="h-96 w-full bg-stone-900 shadow-xl">
                            <img
                                className="h-full w-full object-cover object-center"
                                src={import.meta.env.BASE_URL + project.explanation[0].illustration}
                                alt=""
                            />
                        </div>
                        <div className="h-96 w-full bg-stone-900 shadow-xl md:col-span-2" />
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[1]?.element}</h1>

                    <div className="flex flex-col mt-4 gap-10">
                        <div className="md:text-justify">
                            {SplitParagraphs(project.explanation[1]?.content)}
                        </div>

                        <div className="h-96 bg-stone-900 shadow-xl">
                            <img
                                className="h-full w-full object-cover object-center"
                                src={import.meta.env.BASE_URL + project.explanation[1].illustration}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[2]?.element}</h1>

                    <div className="md:text-justify">
                        {SplitParagraphs(project.explanation[2]?.content)}
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[3]?.element}</h1>

                    <div className="md:text-justify">
                        {SplitParagraphs(project.explanation[3]?.content)}
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[4]?.element}</h1>

                    <div className="md:text-justify">
                        {SplitParagraphs(project.explanation[4]?.content)}
                    </div>
                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[5]?.element}</h1>
                    <div className="md:text-justify flex space-x-2 mt-4 overflow-x-auto">
                        {project.explanation[5]?.content.split(',').map((item, index) => (
                            <Link to={`/Portfolio/skills/${item.trim()}`} key={index} style={{ textDecoration: 'none' }}>
                                <Badge className="whitespace-nowrap" key={index}>{item}</Badge>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
