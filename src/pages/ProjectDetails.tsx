import { Link, useParams } from "react-router-dom";
import { projects } from "../utils/constants/Projects";
import { IProject } from "../utils/types";
import SplitParagraphs from "../utils/functions/SplitParagraph";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProjectDetails() {
    let { name } = useParams();
    const project: IProject = projects.find(project => project.name === name)!;

    return (
        <div className="text-justify">
            <h1 className="mt-20 text-center font-semibold uppercase">Réalisation</h1>
            <h1 className="text-center font-bold uppercase text-4xl">{name}</h1>

            {project.illustrations &&
            <div className="flex xl:px-80 px-6 items-center mt-10">
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    className="w-full">
                    <CarouselContent>
                        {project.illustrations.map((illustration, index) => (
                            <CarouselItem key={index} className="flex items-center justify-center">
                                <div className="">
                                    <img
                                        className="h-full max-h-[700px]"
                                        src={import.meta.env.BASE_URL + illustration}
                                        alt=""
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
}


            <div className="flex flex-col gap-10 xl:gap-20 mt-20 xl:px-80">
                <div className="">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[0].element}</h1>

                    <div className="mt-4 md:text-justify">
                        {SplitParagraphs(project.explanation[0].content)}
                    </div>

                </div>

                <div className="">
                    <h1 className="font-bold text-xl uppercase">{project.explanation[1]?.element}</h1>

                    <div className="flex flex-col mt-4 gap-10">
                        <div className="md:text-justify">
                            {SplitParagraphs(project.explanation[1]?.content)}
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
                    <div className="md:text-justify flex space-x-2 mt-4 overflow-x-auto no-scrollbar">
                        {project.explanation[5]?.content.split(',').map((item, index) => (
                            <Link to={`/skills/${item.trim()}`} key={index} style={{ textDecoration: 'none' }}>
                                <Badge className="whitespace-nowrap" key={index}>{item}</Badge>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
