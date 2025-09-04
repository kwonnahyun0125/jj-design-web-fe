import { ProjectCard } from "./card";
import { Project } from "@/type/project";

export const ProjectList = ({ projectList }: { projectList: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectList.map((project) => (
        <ProjectCard key={project.id} projectList={project} />
      ))}
    </div>
  );
};
