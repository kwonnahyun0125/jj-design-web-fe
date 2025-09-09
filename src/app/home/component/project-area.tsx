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
    <div className="py-10 px-20 mb-10 grid grid-rows-[auto_1fr_auto] gap-8 min-h-[300px]">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-3xl font-bold">시공사례 프로젝트</h2>
        <Link href={"/project"}>
          <RightArrowIcon />
        </Link>
      </div>
      <ProjectList projectList={projectList} />
      <div className="flex justify-center mt-10">
        <Button
          onClick={() => router.push("/project")}
          className="text-lg px-8 py-3 rounded bg-[#FCE7F3] border border-gray-300 hover:bg-[#111827] hover:text-white text-black font-semibold "
        >
          더 많은 시공사례 보기
        </Button>
      </div>
    </div>
  );
};
