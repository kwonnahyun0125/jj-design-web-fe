import Image from "next/image";

export const FurnitureIntro = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            JJ-Mobilia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            프리미엄 가구와 인테리어 솔루션을 만나보세요
            <br />
            직접 체험하고 선택할 수 있는 차별화된 쇼룸 공간
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative items-center justify-center flex">
            <Image
              src="/image/mock/가구점 이미지.png"
              alt="Furniture Introduction"
              width={600}
              height={450}
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                대구 수성구에 위치한 JJ-Mobilia는 2~3층, 약 160평 규모의
                프리미엄 가구 전문 매장입니다. 수성과 경산을 아우르는 거점
                매장으로 고객님들께 최고의 가구 쇼핑 경험을 제공하고 있습니다.
              </p>
              <p>
                다양한 가구와 인테리어 소품을 직접 보고 만지며 선택하실 수 있는
                것은 물론, 실제 공간에 배치된 가구들을 체험해보며 우리 집에
                어울리는 스타일을 미리 확인하실 수 있습니다.
              </p>
              <p>
                또한 전문 인테리어 컨설턴트와 함께하는 맞춤형 가구 상담을 통해
                고객님의 공간에 완벽하게 어울리는 가구를 현장에서 바로 선택하실
                수 있는 특별한 공간입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
