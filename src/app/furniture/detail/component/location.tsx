"use client";

import { Button } from "@/component/button";
import { Modal } from "@/component/modal";
import { Furniture } from "@/type/furniture";
import { useState } from "react";

export const FurnitureLocation = ({ furniture }: { furniture: Furniture }) => {
  const hours = furniture.hours?.split(" / ");
  const [isOpen, setIsOpen] = useState(false);

  const generateGoogleMapsEmbedUrl = () => {
    const query = furniture?.address || furniture?.name || "";
    return `https://maps.google.com/maps?q=${encodeURIComponent(
      query
    )}&output=embed`;
  };

  const handleNaverMap = () => {
    const query = furniture?.address || furniture?.name || "";
    if (query) {
      const url = `https://map.naver.com/v5/search/${encodeURIComponent(
        query
      )}`;
      window.open(url, "_blank");
    }
  };

  const handleKakaoMap = () => {
    const query = furniture?.address || furniture?.name || "";
    if (query) {
      const url = `https://map.kakao.com/link/search/${encodeURIComponent(
        query
      )}`;
      window.open(url, "_blank");
    }
  };

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
                {furniture?.name}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      주소
                    </h4>
                    <p className="text-gray-600">
                      {furniture?.address || "정보없음"}
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
                    <p className="text-gray-600">
                      {furniture?.phoneNumber || "정보없음"}
                    </p>
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
                    <p className="text-gray-600">
                      {furniture?.email || "정보없음"}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">운영시간</h4>
                  <div className="space-y-2 text-gray-600">
                    {hours?.map((hour, idx) => {
                      return (
                        <div key={idx} className="flex justify-between">
                          <span>
                            {hour.split(" ")[0]}
                            {idx > 0 && "요일"}
                          </span>
                          <span className="font-medium">
                            {hour.split(" ")[1]}
                          </span>
                        </div>
                      );
                    })}
                    <div className="flex justify-between text-md text-red-500">
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
              <div className="relative h-115 bg-gray-100">
                <iframe
                  src={generateGoogleMapsEmbedUrl()}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-0"
                />

                {/* 매장 위치 마커 - Google Maps가 자동으로 마커를 표시하므로 제거하거나 숨길 수 있음 */}
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium pointer-events-none">
                  {furniture?.name}
                </div> */}
              </div>

              {/* 길찾기 버튼들 */}
              <div className="p-4 bg-gray-50">
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    onClick={handleNaverMap}
                    className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>📍</span>
                    <span>네이버 길찾기</span>
                  </Button>
                  <Button
                    onClick={handleKakaoMap}
                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>🗺️</span>
                    <span>카카오 길찾기</span>
                  </Button>
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-900 transition-colors"
                  >
                    오시는 길 및 주차안내
                  </Button>
                  <Modal
                    customClass="w-[800px]"
                    title="오시는 길 및 주차안내"
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                  >
                    <div className="py-8">
                      <div className="text-gray-400 mb-4 text-center">
                        <svg
                          className="w-16 h-16 mx-auto mb-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 mb-6 text-center">
                        상세한 오시는 길 및 주차 안내는
                        <br />
                        매장으로 직접 문의해 주세요
                      </p>
                      <div className="bg-gray-50 p-6 rounded-lg text-center">
                        <p className="text-sm text-gray-500 mb-2">대표전화</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {furniture?.phoneNumber || "매장 정보를 확인해주세요"}
                        </p>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
