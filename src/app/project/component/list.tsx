import { ProjectCard } from "./card";
import { Project } from "@/type/project";

export const ProjectList = ({ projectList }: { projectList: Project[] }) => {
  const hasProjects = projectList.length > 0 && projectList[0].id > 0;
  return (
    <>
      {hasProjects ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <ProjectCard key={project.id} projectList={project} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[300px] text-center py-8">
          <p className="text-lg text-gray-500">등록된 시공사례가 없습니다.</p>
        </div>
      )}
    </>
  );
};
