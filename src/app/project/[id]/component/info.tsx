import { project } from "@/type/project";

export const DetailInfo = ({ project }: { project: project }) => {
  return (
    <div className="p-8 mb-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            {project.title}
          </h1>
          <p className="text-md text-gray-600 my-4 leading-relaxed">
            공간은 곧 라이프스타일을 담는 그릇입니다.
            <br />
            JJ Design이 디자인한 다양한 시공사례 속에서, 당신만의 인테리어
            영감을 찾아보세요.
          </p>
        </div>

        {/* 프로젝트 정보 카드 */}
        <div className="border-y border-b-2 border-gray-200 p-6 min-w-[450px]">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            프로젝트 정보
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">타입</span>
              <span className="font-medium text-gray-900">아파트</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">평형</span>
              <span className="font-medium text-blue-600">{project.py}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">라인업</span>
              <span className="font-medium text-gray-900">전체</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">완공년도</span>
              <span className="font-medium text-gray-900">1999년</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">시공기간</span>
              <span className="font-medium text-gray-900">7주</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
