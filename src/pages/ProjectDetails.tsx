import { useParams } from "react-router-dom";
import TopBar from "../components/common/Topbar";
import { technicalProjects } from "../utils/constants/projects/TechnicalProjects";
import { IProject } from "../utils/types";
import SplitParagraphs from "../utils/functions/SplitParagraph";

export default function ProjectDetails() {
    let { name } = useParams();
    const project: IProject = technicalProjects.find(project => project.name === name)!;

    return (
        <div className="h-full w-full bg-primary font-montserrat">
            <div className="p-10">

                <TopBar />

                <h1 className="mt-20 text-center font-semibold">REALISATION</h1>
                <h1 className="text-center font-bold uppercase text-4xl">{name}</h1>

                <div className="w-full flex justify-center items-center">
                    <div className="h-44 w-full md:h-96 md:w-3/4 lg:w-1/2 shadow-2xl bg-neutral-400 mt-20" />
                </div>

                <div className="mt-10 p-10 border-b-[1px] border-black">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[0].element}</h1>

                    <div className="mt-4 text-justify">
                        {SplitParagraphs(project.explanation[0].content)}
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="h-96 w-full bg-neutral-400 shadow-xl" />
                        <div className="h-96 w-full bg-neutral-400 shadow-xl md:col-span-2" />
                    </div>
                </div>

                <div className="mt-10 p-10">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[1]?.element}</h1>

                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mt-4 gap-20">
                        <div className="xl:w-1/2 text-justify">
                            {SplitParagraphs(project.explanation[1]?.content)}
                        </div>

                        <div className="h-96 xl:w-1/2 bg-neutral-400 shadow-xl" />
                    </div>
                </div>

            </div>
        </div>
    );
}
