import { SelectBox } from "@/component/selectbox";

export const FormSiteInfo = () => {
  // 공간 유형 options
  const options = [
    { key: "residence", value: "주거 공간" },
    { key: "mercantile", value: "상업 공간" },
    { key: "architecture", value: "건축물" }, 
  ];
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">현장 정보</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            시공 주소 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="시/군/구 + 상세 주소"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors duration-200 bg-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectBox label="공간 유형" options={options} />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              면적
            </label>
            <input
              type="text"
              placeholder="예: 25평"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors duration-200 bg-white"
            />
          </div>
        </div>
        {/* 예상 예산 및 희망 시작 시기 */}
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
