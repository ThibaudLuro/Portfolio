import GridDisplay from "../components/parts/GridDisplay";
import { skills } from "../utils/constants/Skills";

export default function Skills() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-20 uppercase">Mes Compétences</h1>
            <h1 className="text-center font-light text-xs uppercase">Triées par niveau de maîtrise</h1>

            <div className="mt-10">
                <GridDisplay items={
                    skills.sort((a, b) => b.percentageOfMastery - a.percentageOfMastery)
                } itemType="skills" />
            </div>
        </div>
    )
}