import TopBar from "../components/common/Topbar";
import ProjectsGrid from "../components/parts/ProjectsGrid";
import { humanProjects } from "../utils/constants/projects/HumanProjects";
import { technicalProjects } from "../utils/constants/projects/TechnicalProjects";

export default function Projects() {
    return (
        <div className="h-full w-full bg-primary font-montserrat p-10">
            <TopBar />

            <h1 className="text-3xl font-bold text-center mt-20">MES REALISATIONS</h1>

            <h1 className="mt-10 font-bold text-xl">TECHNIQUES</h1>
            <ProjectsGrid projects={technicalProjects} />

            <h1 className="mt-10 font-bold text-xl">HUMAINES</h1>
            <ProjectsGrid projects={humanProjects} />
        </div>
    )
}