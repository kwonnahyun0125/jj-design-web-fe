"use client";

import Link from "next/link";
import { ProjectList } from "@/app/project/component/list";
import { RightArrowIcon } from "@/component/Icon";
import { useRouter } from "next/navigation";
import { Button } from "@/component/button";
import { Project } from "@/type/project";

export const ProjectArea = ({ projectList }: { projectList: Project[] }) => {
  const router = useRouter();

  return (
    <div className="py-8 px-2 sm:px-4 md:px-8 lg:px-20 mb-10 grid grid-rows-[auto_1fr_auto] gap-6 min-h-[300px]">
      <div className="flex  flex-wrap sm:flex-row justify-between items-center mb-4 px-2 sm:px-4">
        <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-0">
          시공사례 프로젝트
        </h2>
        <Link
          href={"/project"}
          className="flex items-center gap-1 text-gray-700 hover:text-black"
        >
          <span className="hidden sm:inline">전체보기</span>
          <RightArrowIcon />
        </Link>
      </div>
      <ProjectList projectList={projectList} />
      <div className="flex justify-center mt-8">
        <Button
          onClick={() => router.push("/project")}
          className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded bg-[#FCE7F3] border border-gray-300 hover:bg-[#111827] hover:text-white text-black font-semibold"
        >
          더 많은 시공사례 보기
        </Button>
      </div>
    </div>
  );
};
