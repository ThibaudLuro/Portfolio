import Topbar from "../components/common/Topbar";
import MainInfos from "../components/parts/MainInfos";
import Contact from "../components/parts/Contact";
import ProjectsGrid from "../components/parts/ProjectsGrid";
import VerticalTimeline from "../components/common/VerticalTimeline";
import Footer from "../components/common/Footer";

import { FiChevronsDown } from "react-icons/fi";

import { technicalProjects } from "../utils/constants/projects/TechnicalProjects";


export default function Main() {

    return (
        <div className="h-full w-full bg-primary font-montserrat">
            <div className="p-10">

                <Topbar />

                <div className=" h-[90vh] w-full flex flex-col items-center justify-center">
                    <MainInfos />
                </div>

                <div className="flex w-full items-center justify-center bg-primary">
                    <div className="animate-bounce">
                        <FiChevronsDown size={22} className="text-neutral-600" />
                    </div>
                </div>

                <div className="flex flex-col mt-20 gap-20 md:gap-40">
                    <div>
                        <h2 className="text-2xl font-bold mb-5">MES REALISATIONS</h2>
                        <ProjectsGrid projects={technicalProjects} />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold mb-5">A PROPOS</h1>
                        <VerticalTimeline />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-5">CONTACT</h2>
                        <Contact />
                    </div>
                </div>

            </div>

            <div className="pt-20">
                <Footer />
            </div>

        </div>
    )
}