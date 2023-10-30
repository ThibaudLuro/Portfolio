import ProjectCard from "../cards/ProjectCard";

interface IProps {

}

export default function MainPageProjects(props: IProps) {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-2">
            <ProjectCard projectName="Project 1" projectDescription="This is a project description" />
            <ProjectCard projectName="Project 1" projectDescription="This is a project description" />
            <ProjectCard projectName="Project 1" projectDescription="This is a project description" />
            <ProjectCard projectName="Project 1" projectDescription="This is a project description" />
            <ProjectCard projectName="Project 1" projectDescription="This is a project description" colSpan={2} />
        </div>
    )
}