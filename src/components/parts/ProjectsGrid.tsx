import { Link } from "react-router-dom";
import { IProject } from "../../utils/types";
import ProjectCard from "../cards/ProjectCard";

interface IProps {
    projects: IProject[]
}

export default function ProjectsGrid(props: IProps) {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2">
            {props.projects.map((project, index) => {
                const isLastItem = index === props.projects.length - 1;
                const totalItemsNotDivisibleByThree = props.projects.length % 3 !== 0;

                return (
                    <Link to={`/projects/${project.name}`} key={index} style={{ textDecoration: 'none' }}>
                        <ProjectCard
                            projectName={project.name}
                            projectDescription={project.description}
                            colSpan={isLastItem && totalItemsNotDivisibleByThree ? 2 : 1}
                        />
                    </Link>
                )
            })}
        </div>
    )
}