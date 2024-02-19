import TopBar from "../components/common/Topbar";
import ProjectsGrid from "../components/parts/ProjectsGrid";
import { technicalProjects } from "../utils/constants/projects/TechnicalProjects";

export default function Projects() {
    return (
        <div className="h-full w-full bg-primary text-accent font-montserrat p-10">
            <TopBar />

            <h1 className="text-3xl font-bold text-center mt-20">MES REALISATIONS</h1>

            <div className="xl:px-40">
                <ProjectsGrid projects={technicalProjects} />
            </div>

        </div>
    )
}