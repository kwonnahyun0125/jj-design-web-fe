export const FurnitureLocation = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* 제목 섹션 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            매장 안내
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            직접 방문하여 경험하는 특별한 인테리어 여정
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                JJ Mobilia
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">주소</h4>
                    <p className="text-gray-600">
                      대구광역시 수성구 달빛시장로 31길 18
                      <br />
                      우영빌딩 2층-3층
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      대표전화
                    </h4>
                    <p className="text-gray-600">1670-2267</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      대표메일
                    </h4>
                    <p className="text-gray-600">contact@jj-design.kr</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">운영시간</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>평일 (월-금)</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>토요일</span>
                      <span className="font-medium">10:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>일요일</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between text-sm text-red-500">
                      <span>점심시간</span>
                      <span>12:00 - 13:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* 지도 영역 */}
              <div className="relative h-120 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.8!2d128.6!3d35.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ4JzAwLjAiTiAxMjjCsDM2JzAwLjAiRQ!5e0!3m2!1sko!2skr!4v1635000000000!5m2!1sko!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-0"
                />

                {/* 매장 위치 마커 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium">
                  JJ디자인하우스 시지·경산 본점
                </div>
              </div>

              {/* 길찾기 버튼들 */}
              <div className="p-4 bg-gray-50">
                <div className="grid grid-cols-3 gap-2">
                  <button className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-1">
                    <span>📍</span>
                    <span>네이버 길찾기</span>
                  </button>
                  <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-1">
                    <span>🗺️</span>
                    <span>카카오 길찾기</span>
                  </button>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-900 transition-colors">
                    오시는 길 및 주차안내
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
