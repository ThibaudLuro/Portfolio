import { VscDebugBreakpointData } from "react-icons/vsc";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";
import { professionalValues } from "@/utils/constants/ProfessionnalValues";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import SplitParagraphs from "@/utils/functions/SplitParagraph";
import { personnalPresentation } from "@/utils/constants/PersonnalPresentation";

export default function ProfessionnalValues() {
    return (
        <div className="flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-40">
            <div className="flex flex-col flex-1 items-start">
                <h1 className="uppercase text-3xl font-bold">Présentation Personnelle</h1>
                <h1 className="text-sm font-light mt-4">
                    Mes valeurs professionnelles sont les piliers sur lesquels je bâtis ma carrière dans le développement web, me permettant d'aborder avec assurance et efficacité les projets variés qui me sont confiés. Grâce à une rigueur professionnelle et une capacité à envisager des solutions créatives, je suis capable de transformer les défis techniques en réussites concrètes, contribuant ainsi à la réalisation de solutions innovantes et performantes.
                </h1>

                <Dialog>
                    <DialogTrigger>
                        <Button
                            className="w-fit text-xs mt-6 gap-2">
                            <MdArrowOutward />
                            En Savoir plus
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="h-3/4 w-3/4 xl:w-2/4 overflow-y-auto text-stone-800 dark:text-stone-200">
                        <div className="flex flex-col gap-8 justify-center text-justify font-montserrat pt-10">
                            <h1 className="uppercase text-2xl font-bold text-center mb-10">Présentation Personnelle</h1>
                            {personnalPresentation.explanation.map((element, index) => (
                                <div key={index} className="">
                                    <h1 className="text-lg font-bold uppercase">{element.title}</h1>
                                    {SplitParagraphs(element.content)}
                                </div>
                            ))}
                        </div>
                    </DialogContent>
                </Dialog>


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