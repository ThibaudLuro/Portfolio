import { Link } from "react-router-dom";
import { ISkill } from "../../utils/types";
import SkillCard from "../cards/SkillCard";

interface IProps {
    skills: ISkill[]
}

export default function SkillsGrid(props: IProps) {
    return (
        <div className="w-full flex gap-10 flex-col justify-center items-center">
            <h1 className="">TECHNIQUES</h1>
            <div className="w-fit grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-4">
                {props.skills.filter(skill => skill.category === 'technical').map((skill, index) => {
                    return (
                        <Link to={`/Portfolio/skills/${skill.name}`} key={index} style={{ textDecoration: 'none' }}>
                            <SkillCard
                                skillName={skill.name}
                                skillIcon={skill.icon}
                            />
                        </Link>
                    )
                })}
            </div>

            <h1 className="">HUMAINES</h1>
            <div className="w-fit grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-4">
                {props.skills.filter(skill => skill.category === 'soft').map((skill, index) => {
                    return (
                        <Link to={`/Portfolio/skills/${skill.name}`} key={index} style={{ textDecoration: 'none' }}>
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