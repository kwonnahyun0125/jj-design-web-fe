import { typeItems } from "@/api/project/data";
import { Project } from "@/type/project";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({ projectList }: { projectList: Project }) => {
  const convertType = (type: string[]) => {
    // 카테고리 상관없이 타입 다 불러오기
    const types = Object.values(typeItems).flat();
    const labels = type.map(
      (t) => types?.find((item) => item.key === t)?.label || ""
    );
    return labels.join(", ");
  };

  return (
    <Link
      href={`/project/detail?id=${projectList.id}`}
      className="bg-white rounded-lg shadow overflow-hidden flex flex-col min-h-[300px]"
    >
      <div className="relative">
        {projectList.keywords && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-0.5 areaSize-1 rounded z-10">
            {convertType(projectList.keywords)}
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
          {projectList.title}
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
