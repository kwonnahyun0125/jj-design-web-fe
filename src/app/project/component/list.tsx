import { projectsItems } from "@/api/data";
import { ProjectCard } from "./card";

export const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsItems.map((p) => (
        <ProjectCard
          key={p.id}
          {...p}
          py={p.py}
          label={p.label}
          price={Number(p.price) || 0}
        />
      ))}
    </div>
  );
};
