import GridDisplay from "../components/parts/GridDisplay";
import { projects } from "../utils/constants/Projects";

export default function Projects() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-20 uppercase">Mes Réalisations</h1>

            <div className="mt-10">
                <GridDisplay items={projects} itemType="projects" />
            </div>
        </div>
    )
}