import ProjectsGrid from "../components/parts/ProjectsGrid";
import { projects } from "../utils/constants/projects/Projects";

export default function Projects() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-20">MES REALISATIONS</h1>

            <div className="xl:px-40">
                <ProjectsGrid projects={projects} />
            </div>

        </div>
    )
}