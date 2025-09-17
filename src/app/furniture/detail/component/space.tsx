import Image from "next/image";
import { Furniture } from "@/type/furniture";

export const FurnitureSpace = ({ furniture }: { furniture: Furniture }) => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            공간 안내
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            다양한 라이프스타일에 맞는 공간을 직접 체험해보세요
            <br />
            실제 생활 환경과 동일한 조건에서 확인하는 프리미엄 경험
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-80">
                <Image
                  src={
                    (furniture?.images && furniture?.images[0]) ||
                    "/image/bang.png"
                  }
                  alt="베스트 아이템"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                  <span className="text-gray-800 font-medium text-sm">
                    베스트 아이템
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                맞춤 제작 가구 - 시그니처 라인
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {furniture?.name} 시그니처 가구와 직접 검증된 자재들을 한눈에
                확인하세요.
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-80">
                <Image
                  src={
                    (furniture?.images && furniture?.images[1]) ||
                    "/image/job.png"
                  }
                  alt="작업 공간 & 제작 현장 소개"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                  <span className="text-gray-800 font-medium text-sm">
                    작업 공간 & 제작 현장 소개
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                작업 공간 & 제작 현장 소개
              </h3>
              <p className="text-gray-600 leading-relaxed">
                넓고 깔끔한 작업 공간에서 자재를 직접 재단하고 조립하며
                고객님만을 위한 품질 높은 맞춤 제작 가구가 하나하나 완성되고
                있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
