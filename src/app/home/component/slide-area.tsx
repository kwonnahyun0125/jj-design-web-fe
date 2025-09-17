"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NextArrowIcon, PrevArrowIcon } from "@/component/Icon";
import { Button } from "@/component/button";
import { Project } from "@/type/project";

export const SlideArea = ({ projectList }: { projectList: Project[] }) => {
  const router = useRouter();
  const images = projectList.map(
    (item) => item.imageUrl || "/image/default-image.png"
  );
  const DURATION = 10000; // 10초
  const slideImages = [images[projectList.length - 1], ...images, images[0]];
  const hasProjects = projectList.length > 0 && projectList[0].id > 0;

  const [current, setCurrent] = useState(1);
  const [isTransition, setIsTransition] = useState(true);
  const [progress, setProgress] = useState(0);

  const goToNext = useCallback(() => {
    setProgress(0);
    setCurrent((prev) => {
      if (prev === slideImages.length - 2) {
        setIsTransition(true);
        return prev + 1;
      } else if (prev === slideImages.length - 1) {
        setIsTransition(false);
        setTimeout(() => {
          setCurrent(1);
          setTimeout(() => setIsTransition(true), 50);
        }, 50);
        return prev;
      } else {
        setIsTransition(true);
        return prev + 1;
      }
    });
  }, [slideImages.length]);

  const goToPrev = useCallback(() => {
    setProgress(0);
    setCurrent((prev) => {
      if (prev === 1) {
        setIsTransition(true);
        return prev - 1;
      } else if (prev === 0) {
        setIsTransition(false);
        setTimeout(() => {
          setCurrent(slideImages.length - 2);
          setTimeout(() => setIsTransition(true), 50);
        }, 50);
        return prev;
      } else {
        setIsTransition(true);
        return prev - 1;
      }
    });
  }, [slideImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, DURATION);

    return () => clearTimeout(timer);
  }, [current, goToNext]);

  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let frame: number;
    startRef.current = performance.now();
    const animate = (now: number) => {
      if (startRef.current === null) return;
      const elapsed = now - startRef.current;
      const newProgress = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(newProgress);
      if (elapsed < DURATION) {
        frame = requestAnimationFrame(animate);
      }
    };

    if (current > 0 && current < slideImages.length - 1) {
      frame = requestAnimationFrame(animate);
    } else {
      setProgress(0);
    }
    return () => {
      if (frame) cancelAnimationFrame(frame);
      startRef.current = null;
    };
  }, [current, slideImages.length]);

  const handleTransitionEnd = () => {
    if (current === slideImages.length - 1) {
      setIsTransition(false);
      setProgress(0);
      setTimeout(() => {
        setCurrent(1);
        setTimeout(() => setIsTransition(true), 50);
      }, 50);
    } else if (current === 0) {
      setIsTransition(false);
      setProgress(0);
      setTimeout(() => {
        setCurrent(slideImages.length - 2);
        setTimeout(() => setIsTransition(true), 50);
      }, 50);
    }
  };

  const getRealIndex = (slideIndex: number) => {
    if (slideIndex === 0) return images.length - 1;
    if (slideIndex === slideImages.length - 1) return 0;
    return slideIndex - 1;
  };

  return (
    <>
      {hasProjects ? (
        <div className="relative w-full h-[60vw] max-h-[600px] min-h-[320px] sm:h-[400px] md:h-[500px] lg:h-screen lg:max-h-none overflow-hidden flex mb-6">
          {/* 이전/다음 버튼 */}
          <Button
            onClick={goToPrev}
            className="!absolute left-2 sm:left-6 top-1/2 z-30 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black border-none rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center font-bold transition-colors"
            aria-label="이전"
          >
            <PrevArrowIcon width={32} height={32} />
          </Button>
          <Button
            onClick={goToNext}
            className="!absolute right-2 sm:right-6 top-1/2 z-30 -translate-y-1/2 bg-white/40 hover:bg-white/70 text-black border-none rounded-full w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center font-bold transition-colors"
            aria-label="다음"
          >
            <NextArrowIcon width={32} height={32} />
          </Button>

          {/* 슬라이드 컨테이너 */}
          <div
            className="flex"
            style={{
              width: `${slideImages.length * 100}vw`,
              height: "100%",
              transform: `translateX(-${current * 100}vw)`,
              transition: isTransition
                ? "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slideImages.map((img, idx) => {
              const realIdx = getRealIndex(idx);
              const isActive = current === idx;
              const currentImage = projectList[realIdx];

              return (
                <div
                  key={idx}
                  className="relative flex-shrink-0 w-screen lg:max-h-none h-[60vw] max-h-[600px] min-h-[320px] sm:h-[400px] md:h-[500px] lg:h-[calc(100vh-80px)]"
                >
                  <Image
                    src={img}
                    alt={`사례 이미지 ${realIdx + 1}`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority={idx === 1}
                  />
                  {isActive &&
                    current > 0 &&
                    current < slideImages.length - 1 && (
                      <>
                        {/* 모바일: 왼쪽 하단 오버레이 */}
                        <div className="block sm:hidden absolute left-3 bottom-12 z-10 max-w-[85vw]">
                          <div className="bg-blue-50/80 rounded-xl px-4 py-3 text-left shadow-md">
                            <p className="text-xs font-medium mb-1 text-gray-800 truncate">
                              {currentImage.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <h2 className="text-base font-bold text-gray-900 truncate">
                                {currentImage.title}
                              </h2>
                              <button
                                onClick={() => {
                                  router.push(
                                    `/project/detail?id=${currentImage.id}`
                                  );
                                }}
                                className="inline-flex items-center justify-center h-7 px-3 rounded-full bg-[#FCE7F3] hover:bg-[#111827] hover:text-white text-black text-xs font-semibold transition-colors"
                                aria-label="더보기"
                              >
                                더보기
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* 데스크탑: 기존 스타일 유지 */}
                        <div className="hidden sm:block absolute left-32 bottom-32 z-10 text-white">
                          <p className="text-xl font-medium mb-2 text-shadow">
                            {currentImage.description}
                          </p>
                          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
                            {currentImage.title}
                          </h2>
                          <Button
                            onClick={() => {
                              router.push(
                                `/project/detail?id=${currentImage.id}`
                              );
                            }}
                            className="text-lg px-6 py-2 rounded bg-[#FCE7F3] border border-gray-300 hover:bg-[#111827] hover:text-white text-black font-semibold"
                          >
                            자세히 보기
                          </Button>
                        </div>
                        {/* 진행 바는 기존 위치 유지 */}
                        <div className="absolute left-1/2 bottom-8 sm:bottom-12 transform -translate-x-1/2 w-[80vw] max-w-[90%] h-2 bg-white/30 rounded z-10 overflow-hidden">
                          <div
                            className="h-full bg-white transition-all duration-100"
                            style={{
                              width: `${Math.max(0, Math.min(progress, 100))}%`,
                            }}
                          />
                        </div>
                      </>
                    )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[60vw] max-h-[600px] min-h-[320px] sm:h-[400px] md:h-[500px] lg:h-screen lg:max-h-none overflow-hidden mb-6">
          <Image
            src="/image/default-image.png"
            alt="대문 이미지"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
      )}
    </>
  );
};
