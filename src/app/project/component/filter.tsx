import { pyFilter, typeFilter } from "@/api/data";
import { Button } from "@/component/button";

export const ProjectFilter = () => {
  return (
    <aside className="bg-white h-full border-r border-gray-300 py-8 px-6 overflow-y-auto">
      <div className="space-y-6">
        {/* 검색 영역 */}
        <div className="relative">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:border-gray-500 text-base"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* 평형 필터 */}
        <section>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">평형</h3>
          <div className="space-y-3">
            {pyFilter.map((item) => (
              <label
                key={item.key}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                />
                <span className="text-base text-gray-700">{item.label}</span>
              </label>
            ))}
          </div>
        </section>

        {/* 타입 필터 */}
        <section>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">타입</h3>
          <div className="space-y-3">
            {typeFilter.map((item) => {
              return (
                <label
                  key={item.key}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                  />
                  <span className="text-base text-gray-700">{item.label}</span>
                </label>
              );
            })}
          </div>
        </section>

        {/* 라인업 필터 */}
        <section>
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">라인업</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                id="lineup-all"
                name="lineup"
                type="radio"
                className="w-5 h-5 border-gray-300 text-teal-500 focus:ring-teal-500"
              />
              <span className="text-base text-gray-700">전체</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                id="lineup-partial"
                name="lineup"
                type="radio"
                className="w-5 h-5 border-gray-300 text-teal-500 focus:ring-teal-500"
              />
              <span className="text-base text-gray-700">부분</span>
            </label>
          </div>
        </section>

        {/* 버튼 영역 */}
        <div className="flex gap-2 pt-4 items-end">
          <Button className="flex-1 px-4 py-2 text-base border border-gray-300 rounded-md hover:bg-gray-50">
            초기화
          </Button>
          <Button className="flex-1 px-4 py-2 text-base bg-gray-800/60 text-white rounded-md hover:bg-gray-600">
            확인
          </Button>
        </div>
      </div>
    </aside>
  );
};
