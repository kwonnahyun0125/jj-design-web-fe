import { ProjectList } from "./component/list";
import { ProjectFilter } from "./component/filter";
import { ProjectHeader } from "./component/header";
import { Pagination } from "@/component/pagination";
import { projectsItems } from "@/api/data";

const ProjectPage = () => {
  const itemsPerPage = 15;
  const totalItems = projectsItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 메인 컨텐츠 영역 */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* 좌측 필터 영역 */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-20 h-[calc(100vh-5rem)]">
              <ProjectFilter />
            </div>
          </div>
          {/* 우측 프로젝트 리스트 영역 */}
          <div className="flex-1 min-w-0 py-8 px-6 ">
            {/* 프로젝트 헤더 */}
            <ProjectHeader />
            {/* 프로젝트 리스트 */}
            <ProjectList />
            {/* 페이지네이션 */}
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
