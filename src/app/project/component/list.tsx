import { EmptyState } from "@/component/empty-state";
import { ProjectCard } from "./card";
import { Project } from "@/type/project";

export const ProjectList = ({ projectList }: { projectList: Project[] }) => {
  const hasProjects = projectList?.length > 0 && projectList[0]?.id > 0;

  return (
    <div className="h-full flex flex-col">
      {hasProjects ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <ProjectCard key={project.id} projectList={project} />
          ))}
        </div>
      ) : (
        <EmptyState height={300} message="등록된 프로젝트가 없습니다." />
      )}
    </div>
  );
};
