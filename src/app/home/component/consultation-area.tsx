"use client";

import { Button } from "@/component/button";
import { useRouter } from "next/navigation";

export const ConsultationArea = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-[220px] sm:min-h-[260px] md:min-h-[300px] bg-[#6B7280] backdrop-blur-sm flex items-center">
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16 max-w-6xl w-full mx-auto px-3 sm:px-6 py-8">
        {/* 텍스트 + 버튼(모바일) */}
        <div className="text-center lg:text-left text-white flex-1 max-w-2xl">
          <p className="text-sm sm:text-base md:text-lg mb-2 font-light">
            인테리어는 단순한 공간의 완성이 아니라, 삶의 가치를 담는 과정입니다.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4 font-light">
            JJ-DESIGN의 체계적인 시스템과 함께라면, 그 여정은 더욱 확실해집니다.
          </p>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-8 leading-relaxed">
            인테리어 그 이상의 가치를, 모든 순간 함께합니다.
          </h2>
          {/* 모바일/태블릿에서만 버튼 노출 */}
          <div className="block lg:hidden mt-3">
            <Button
              className="w-full bg-[#FCE7F3] border border-gray-300 hover:bg-[#111827] hover:text-white text-black font-semibold px-6 py-3 rounded-lg text-base sm:text-lg transition-colors duration-200"
              onClick={() => {
                router.push("/consultation");
              }}
            >
              상담신청하기
            </Button>
          </div>
        </div>
        {/* 데스크탑에서만 버튼 오른쪽에 노출 */}
        <div className="hidden lg:flex flex-shrink-0 items-start justify-end">
          <Button
            className="bg-[#FCE7F3] border border-gray-300 hover:bg-[#111827] hover:text-white text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
            onClick={() => {
              router.push("/consultation");
            }}
          >
            상담신청하기
          </Button>
        </div>
      </div>
    </section>
  );
};
