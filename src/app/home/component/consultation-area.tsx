"use client";

import { Button } from "@/component/button";
import { useRouter } from "next/navigation";

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
              인테리어는 단순한 공간의 완성이 아니라, 삶의 가치를 담는
              과정입니다.
            </p>
            <p className="text-lg md:text-xl mb-8 font-light">
              JJ-DESIGN의 체계적인 시스템과 함께라면, 그 여정은 더욱
              확실해집니다.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              인테리어 그 이상의 가치를, 모든 순간 함께합니다.
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
