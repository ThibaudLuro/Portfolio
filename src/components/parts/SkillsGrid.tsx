import { Link } from "react-router-dom";
import { ISkill } from "../../utils/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Card from "../cards/Card";


interface IProps {
    skills: ISkill[]
}

export default function SkillsGrid(props: IProps) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Tabs defaultValue="technical" className="w-fit flex flex-col justify-center items-center">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="technical">Techniques</TabsTrigger>
                    <TabsTrigger value="soft">Humaines</TabsTrigger>
                </TabsList>
                <TabsContent value="technical">
                    <div className="w-fit grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-4">
                        {props.skills.filter(skill => skill.category === "technical").map((skill, index) => (
                            <Link to={`/Portfolio/skills/${skill.name}`} key={index} style={{ textDecoration: 'none' }}>
                                <Card
                                    name={skill.name}
                                    icon={skill.icon}
                                />
                            </Link>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="soft">
                    <div className="w-fit grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-4">
                        {props.skills.filter(skill => skill.category === "soft").map((skill, index) => (
                            <Link to={`/Portfolio/skills/${skill.name}`} key={index} style={{ textDecoration: 'none' }}>
                                <Card
                                    name={skill.name}
                                    icon={skill.icon}
                                />
                            </Link>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}