"use client";

import { Button } from "@/component/button";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ShowRoomPage = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-[calc(100vh-345px)] flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-200 px-4 py-10 sm:py-16">
      <div className="flex flex-col items-center space-y-6 max-w-xl w-full text-center">
        <svg
          className="w-20 h-20 sm:w-24 sm:h-24 text-gray-300 drop-shadow-lg"
          fill="none"
          viewBox="0 0 48 48"
        >
          <rect
            x="6"
            y="14"
            width="36"
            height="20"
            rx="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="#f3f4f6"
          />
          <circle
            cx="24"
            cy="24"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="#FCE7F3"
          />
          <path
            d="M12 34c2 2 8 4 12 4s10-2 12-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-800 leading-snug">
          쇼룸 오픈 준비 중입니다
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          저희의 새로운 쇼룸은 <strong className="text-gray-800">2026년</strong>
          에 오픈할 예정입니다.
          <br className="hidden sm:block" />
          멋진 공간에서 곧 만나요!
        </p>

        <Button
          className="mt-4 px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-[#FCE7F3] border border-gray-200 text-black font-medium shadow transition cursor-not-allowed text-base sm:text-lg"
          disabled
        >
          Coming Soon
        </Button>
      </div>
    </div>
  );
};

export default ShowRoomPage;
