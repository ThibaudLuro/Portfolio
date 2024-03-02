import GridDisplay from "../components/parts/GridDisplay";
import { skills } from "../utils/constants/Skills";

export default function Skills() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-20">MES COMPETENCES</h1>

            <div className="mt-10">
                <GridDisplay items={skills} itemType="skills" />
            </div>
        </div>
    )
}