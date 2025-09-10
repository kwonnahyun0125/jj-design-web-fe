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
                    "/image/no-image.png"
                  }
                  alt="베스트 아이템 전시공간"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                  <span className="text-gray-800 font-medium text-sm">
                    베스트 아이템 전시공간
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                베스트 아이템 - 자재체험존
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {`${
                  furniture?.name || ""
                } 시그니처 가구와 직접 검증된 자재들을 한눈에
                확인하세요. 10,000여 점 이상의 엄선된 디자인 제품들로 고객과
                시장의 트렌드를 분석하여 베스트 아이템만을 선별했습니다.`}
              </p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-80">
                <Image
                  src={
                    (furniture?.images && furniture?.images[1]) ||
                    "/image/no-image.png"
                  }
                  alt="공간별 구성 전시"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg">
                  <span className="text-gray-800 font-medium text-sm">
                    공간별 구성 전시
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                공간별 맞춤 구성
              </h3>
              <p className="text-gray-600 leading-relaxed">
                인테리어 시공 시 가장 중요한 욕실과 주방 공간을 포함하여, 각
                공간의 특성에 맞는 최적의 솔루션을 직접 체험하고 실제 시공
                품질을 미리 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
