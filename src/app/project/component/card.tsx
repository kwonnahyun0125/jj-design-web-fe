import { Project } from "@/type/project";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ projectList }: { projectList: Project }) => {
  return (
    <Link
      href={`/project/${projectList.id}`}
      className="bg-white rounded-lg shadow overflow-hidden flex flex-col min-h-[300px]"
    >
      <div className="relative">
        {projectList.type && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-0.5 areaSize-1 rounded z-10">
            {projectList.type}
          </span>
        )}
        <Image
          width={400}
          height={300}
          src={projectList.imageUrl || "/image/default-image.png"}
          alt={projectList.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <h4 className="font-semibold text-lg">
          {projectList.title}{" "}
          <span className="text-xs align-top">{projectList.size}py</span>
        </h4>
        <div className="text-sm text-gray-500">
          {projectList.duration}주 소요
        </div>
        <div className="text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap h-5">
          {projectList.description}
        </div>
      </div>
    </Link>
  );
};
