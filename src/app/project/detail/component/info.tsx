import { Project } from "@/type/project";
import { lineupItems, typeItems } from "@/api/project/data";

export const DetailInfo = ({ project }: { project: Project }) => {
  const convertType = (type: string[]) => {
    // 카테고리 상관없이 타입 다 불러오기
    const types = Object.values(typeItems).flat();
    const labels = type.map(
      (t) => types?.find((item) => item.key === t)?.label || ""
    );
    return labels.join(", ");
  };
  const lineup = lineupItems.find((item) => item.key === project.lineup);

  return (
    <div className="px-2 sm:px-4 md:px-8 py-6 sm:py-8 mb-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 break-words">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base md:text-md text-gray-600 my-4 leading-relaxed">
            공간은 곧 라이프스타일을 담는 그릇입니다.
            <br />
            JJ Design이 디자인한 다양한 시공사례 속에서, 당신만의 인테리어
            영감을 찾아보세요.
          </p>
        </div>

        {/* 프로젝트 정보 카드 */}
        <div className="w-full max-w-full lg:min-w-[340px] lg:max-w-[420px] border-t border-b border-gray-300 p-4 sm:p-6 mt-6 lg:mt-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
            프로젝트 정보
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm sm:text-base">타입</span>
              <span className="font-medium text-gray-900 text-sm sm:text-base">
                {convertType(project.keywords || [])}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm sm:text-base">평형</span>
              <span className="font-medium text-blue-600 text-sm sm:text-base">
                {project.size}py
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm sm:text-base">라인업</span>
              <span className="font-medium text-gray-900 text-sm sm:text-base">
                {lineup?.label || ""}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm sm:text-base">
                시공기간
              </span>
              <span className="font-medium text-gray-900 text-sm sm:text-base">
                {project.duration}주
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
