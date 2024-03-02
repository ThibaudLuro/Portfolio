import { personnalPresentation } from "@/utils/constants/PersonnalPresentation";
import VerticalTimeline from "../components/common/VerticalTimeline";
import SplitParagraphs from "@/utils/functions/SplitParagraph";

export default function About() {
    return (
        <div className="h-full w-full">
            <h1 className="text-2xl font-bold mt-20 md:mt-40 text-center uppercase">Présentation Personnelle</h1>

            <div className="xl:px-80 text-justify py-10 md:py-20">
                {personnalPresentation.explanation.map((element, index) => (
                    <div key={index} className="mb-10">
                        <h1 className="text-xl font-bold mb-5 uppercase">{element.title}</h1>
                        {SplitParagraphs(element.content)}
                    </div>
                ))}
            </div>

            <div className="xl:px-80 pb-10 xl:pb-20">
                <h1 className="text-2xl font-bold uppercase text-center xl:text-left mb-10 md:mb-20">Mon Parcours</h1>
                <VerticalTimeline />
            </div>
        </div>
    )
}