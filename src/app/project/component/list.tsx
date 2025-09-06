import { ProjectCard } from "./card";
import { Project } from "@/type/project";

export const ProjectList = ({ projectList }: { projectList: Project[] }) => {
  const hasProjects = projectList.length > 0 && projectList[0].id > 0;

  return (
    <div className="h-full flex flex-col">
      {hasProjects ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <ProjectCard key={project.id} projectList={project} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center flex-1 min-h-[400px]">
          <p className="text-gray-500 text-lg">등록된 시공사례가 없습니다.</p>
        </div>
      )}
    </div>
  );
};
