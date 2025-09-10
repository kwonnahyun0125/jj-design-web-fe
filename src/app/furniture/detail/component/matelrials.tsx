export const FurnitureMatelrials = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            제작 과정
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            철저한 제작 과정을 거쳐 완성됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 고급 원목 */}
          <div className="text-center group hover:transform transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 animate-pulse"></div>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center relative">
                {/* 나무 나이테 표현 */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-amber-700 rounded-full opacity-60"
                    style={{
                      width: `${(i + 1) * 10}px`,
                      height: `${(i + 1) * 10}px`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
                <div className="w-3 h-3 bg-amber-800 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">고급 원목</h3>
            <p className="text-gray-600 leading-relaxed text-ellipsis whitespace-break-spaces">
              고급원목 가구는 자연의 아름다움을 담아내며, 뛰어난 내구성과 품질을
              자랑합니다.
            </p>
          </div>

          {/* 친환경 자재 */}
          <div className="text-center group hover:transform transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 bg-white opacity-80 transform origin-bottom"
                    style={{
                      height: "50%",
                      left: "50%",
                      bottom: "50%",
                      transform: `rotate(${i * 15}deg) translateX(-50%)`,
                    }}
                  />
                ))}
              </div>
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              친환경 자재
            </h3>
            <p className="text-gray-600 leading-relaxed text-ellipsis whitespace-break-spaces">
              친환경 자재는 지속 가능한 미래를 위한 선택입니다.
              <br />
              자연과 조화를 이루는 디자인을 제공합니다.
            </p>
          </div>

          {/* 맞춤 소재 */}
          <div className="text-center group hover:transform transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                {/* 다양한 소재 패턴 */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-6 h-6 bg-white rounded-sm opacity-70"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${20 + i * 15}%`,
                      transform: `rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={`circle-${i}`}
                    className="absolute w-4 h-4 bg-white rounded-full opacity-60"
                    style={{
                      top: `${30 + i * 20}%`,
                      right: `${25 + i * 10}%`,
                    }}
                  />
                ))}
              </div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-sm"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">맞춤소재</h3>
            <p className="text-gray-600 leading-relaxed text-ellipsis whitespace-break-spaces">
              고객의 요구에 맞춘 다양한 소재 선택이 가능합니다.
              <br />
              개성 있는 디자인을 완성할 수 있습니다.
            </p>
          </div>

          {/* 투명한 제작 과정 */}
          <div className="text-center group hover:transform transition-all duration-300">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                {/* 프로세스 단계 표현 */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      top: "50%",
                      left: `${25 + i * 15}%`,
                      transform: "translateY(-50%)",
                    }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                    {i < 3 && (
                      <div className="absolute top-1/2 left-3 w-4 h-0.5 bg-white opacity-60 transform -translate-y-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              투명한 제작 과정
            </h3>
            <p className="text-gray-600 leading-relaxed text-ellipsis whitespace-break-spaces">
              투명한 제작 과정은 고객에게 신뢰를 제공합니다.
              <br />
              모든 제작 과정을 공개하여 안심하고 선택할 수 있도록 합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
