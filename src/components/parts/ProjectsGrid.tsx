import { Link } from "react-router-dom";
import { IProject } from "../../utils/types";
import Card from "../cards/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";


interface IProps {
    projects: IProject[]
}

export default function ProjectsGrid(props: IProps) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Tabs defaultValue="technical" className="w-fit mt-10">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="technical">Techniques</TabsTrigger>
                    <TabsTrigger value="soft">Humaines</TabsTrigger>
                </TabsList>
                <TabsContent value="technical">
                    <div className="w-fit grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-4">
                        {props.projects.filter(project => project.category === "technical").map((project, index) => (
                            <Link to={`/Portfolio/projects/${project.name}`} key={index} style={{ textDecoration: 'none' }}>
                                <Card
                                    name={project.name}
                                    description={project.description}
                                    icon={project.icon}
                                />
                            </Link>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="soft">
                    <div className="w-fit grid justify-items-center grid-cols-1 lg:grid-cols-3 gap-4">
                        {props.projects.filter(project => project.category === "soft").map((project, index) => (
                            <Link to={`/Portfolio/projects/${project.name}`} key={index} style={{ textDecoration: 'none' }}>
                                <Card
                                    name={project.name}
                                    description={project.description}
                                    icon={project.icon}
                                />
                            </Link>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}