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
                저희 JJ-Mobilia는 단순한 제작을 넘어, 재료의 본질과 제작 과정의
                투명성을 가장 중요하게 생각합니다.{" "}
              </p>{" "}
              <p>
                원목·친환경 자재 등 직접 선택하신 소재로 설계부터 제작·설치까지
                모든 과정을 투명하게 공유합니다.{" "}
              </p>{" "}
              <p>고객님과 함께 공간에 꼭 맞는 가구를 완성해 갑니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
