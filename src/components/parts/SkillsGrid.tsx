import { Link } from "react-router-dom";
import { ISkill } from "../../utils/types";
import SkillCard from "../cards/SkillCard";

interface IProps {
    skills: ISkill[]
}

export default function SkillsGrid(props: IProps) {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-fit grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-4">
                {props.skills.map((skill, index) => {
                    return (
                        <Link to={`/skills/${skill.name}`} key={index} style={{ textDecoration: 'none' }}>
                            <SkillCard
                                skillName={skill.name}
                                skillIcon={skill.icon}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}