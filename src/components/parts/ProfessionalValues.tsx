import { VscDebugBreakpointData } from "react-icons/vsc";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { professionalValues } from "@/utils/constants/ProfessionnalValues";

export default function ProfessionnalValues() {
    return (
        <div className="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-40">
            <div className="flex flex-col flex-1">
                <h1 className="uppercase text-3xl font-bold">Mes valeurs professionnelles</h1>
                <h1 className="text-sm font-light mt-2">
                    Il est important pour moi de travailler dans un environnement où je peux m'épanouir et où je peux apprendre de nouvelles choses. J'aime travailler en équipe et partager mes connaissances avec les autres. Je suis passionné par le développement web et mobile et je suis toujours à la recherche de nouveaux défis.
                </h1>
                <Button
                    onClick={() => window.location.href = "/Portfolio/about/"}
                    className="w-fit text-xs mt-4 gap-2">
                    <MdArrowOutward />
                    En Savoir plus
                </Button>
            </div>
            <div className="flex flex-col flex-1">
                {
                    professionalValues.map((value, index) => (
                        <>
                            <div key={index} className="flex items-center gap-2 uppercase">
                                <VscDebugBreakpointData />
                                <h1>
                                    {value}
                                </h1>
                            </div>
                            {index !== professionalValues.length - 1 && <Separator className="my-4" />}
                        </>
                    ))
                }
            </div>
        </div>
    )
}