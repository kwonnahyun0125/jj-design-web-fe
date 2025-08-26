import { SelectBox } from "@/component/selectbox";

export const FormConstructInfo = () => {
  const constructionOptions = [
    { key: "apartment", value: "아파트" },
    { key: "villa", value: "빌라/주택" },
    { key: "office", value: "사무실" },
  ];
  const styleOptions = [
    { key: "modern", value: "모던 스타일" },
    { key: "natural", value: "내추럴 스타일" },
    { key: "vintage", value: "빈티지 스타일" },
    { key: "nordic", value: "북유럽 스타일" },
    { key: "minimal", value: "미니멀 스타일" },
  ];
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">시공 요구사항</h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <SelectBox label="시공 범위" options={constructionOptions} />
          <SelectBox label="희망 스타일" options={styleOptions} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              예상 예산
            </label>
            <input
              type="text"
              placeholder="예: 2천만 원"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors duration-200 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              희망 시작 시기
            </label>
            <input
              type="month"
              defaultValue={new Date().toISOString().slice(0, 7)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors duration-200 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
