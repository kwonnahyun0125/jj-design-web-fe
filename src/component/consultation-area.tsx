"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

export const ConsultationArea = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-[320px] bg-gray-900/30 backdrop-blur-sm">
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-gray-900/80"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex items-center justify-center min-h-[320px] px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl w-full">
          {/* 텍스트 콘텐츠 */}
          {/* TODO : 문구 수정 */}
          <div className="text-center lg:text-left text-white flex-1 max-w-2xl mt-6">
            <p className="text-lg md:text-xl mb-2 font-light">
              인테리어 그 이상의 가치를 만드는 브랜드
            </p>
            <p className="text-lg md:text-xl mb-8 font-light">
              공간은 사람을 담는 그릇입니다.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              JJ-DESIGN은 삶과 비즈니스의 가치를 높이는
              <br />
              맞춤형 인테리어·건축 솔루션을 제안합니다.
            </h2>
          </div>

          {/* 버튼 */}
          <div className="flex-shrink-0">
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
              onClick={() => {
                router.push("/consultation");
              }}
            >
              상담신청하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
