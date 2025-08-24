import { ProjectList } from "@/app/project/component/list";
import { Button } from "@/component/button";
import { RightArrowIcon } from "@/component/Icon";
import Link from "next/link";

export const ProjectArea = () => {
  return (
    <div className="py-10 px-20 mb-10 flex flex-col gap-8">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-3xl font-bold">시공사례 프로젝트</h2>
        <Button>
          <RightArrowIcon />
        </Button>
      </div>
      <ProjectList />
      <div className="flex justify-center mt-10">
        <Link
          href={"/project"}
          className="text-lg px-8 py-3 rounded bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors"
        >
          더 많은 시공사례 보기
        </Link>
      </div>
    </div>
  );
};
