export const FormDefaultInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">기본 정보</h2>
      </div>

      <div className="space-y-4">
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors duration-200 bg-white"
          />
        </div>

        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="010-0000-0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-800 focus:ring-0 transition-colors duration-200 bg-white"
          />
        </div>
      </div>
    </div>
  );
};
