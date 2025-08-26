export const ConsultationGuide = () => {
  return (
    <div className="lg:col-span-2 p-8 lg:p-12">
      <div className="max-w-lg">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          상담신청
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          전문가와 함께 꿈꾸던 공간을 만들어보세요
        </p>
        <div className="w-24 h-1 bg-gray-800 rounded-full mb-8" />
        <div className="space-y-4 text-gray-600">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">무료 상담</h3>
              <p className="text-sm">전문가와의 1:1 맞춤 상담</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">현장 방문</h3>
              <p className="text-sm">정확한 견적을 위한 현장 측정</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">맞춤 제안</h3>
              <p className="text-sm">고객 니즈에 맞는 디자인 제안</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
