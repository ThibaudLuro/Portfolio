import GridDisplay from "../components/parts/GridDisplay";
import { projects } from "../utils/constants/Projects";

export default function Projects() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-20 uppercase">Mes Réalisations</h1>

            <div className="">
                <GridDisplay items={projects} itemType="projects" />
            </div>
        </div>
    )
}