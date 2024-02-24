import GridDisplay from "../components/parts/GridDisplay";
import { projects } from "../utils/constants/projects/Projects";

export default function Projects() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-20">MES REALISATIONS</h1>

            <div className="mt-10">
                <GridDisplay items={projects} itemType="projects" />
            </div>
        </div>
    )
}