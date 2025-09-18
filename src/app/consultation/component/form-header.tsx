export const FormHeader = () => {
  return (
    <div className="bg-gray-800 p-6">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-500">1</span>
          </div>
          <span className="font-medium">기본정보</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-500">2</span>
          </div>
          <span className="font-medium">현장정보</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-500">3</span>
          </div>
          <span className="font-medium">완료</span>
        </div>
      </div>
    </div>
  );
};
