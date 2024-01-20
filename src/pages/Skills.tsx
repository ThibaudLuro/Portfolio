import TopBar from "../components/common/Topbar";
import SkillsGrid from "../components/parts/SkillsGrid";
import { skills } from "../utils/constants/skills/Skills";

export default function Skills() {
    return (
        <div className="h-full w-full bg-primary text-accent font-montserrat p-10">
            <TopBar />

            <h1 className="text-3xl font-bold text-center mt-20">MES COMPETENCES</h1>

            <div className="mt-20">
                <SkillsGrid skills={skills} />
            </div>
        </div>
    )
}