"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectsItems } from "@/api/data";
import { NextArrowIcon, PrevArrowIcon } from "@/component/Icon";
import { Button } from "@/component/button";

export const SlideArea = () => {
  // api 호출해서 목록으로 가져오기
  const images = projectsItems.map(
    (item) => item.imageUrl || "/image/default-image.png"
  );
  // 무한 슬라이드를 위해 앞뒤에 더미 이미지 추가
  const slideImages = [images[projectsItems.length - 1], ...images, images[0]];
  const duration = 10000; // 20초
  const router = useRouter();

  const [current, setCurrent] = useState(1); // 실제 첫 이미지 인덱스는 1
  const [isTransition, setIsTransition] = useState(true);
  const [progress, setProgress] = useState(0);

  // 자동 슬라이드 타이머
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, duration);

    return () => clearTimeout(timer);
  }, [current]);

  // 진행 바 애니메이션
  const startRef = useRef<number | null>(null);
  useEffect(() => {
    let frame: number;
    startRef.current = performance.now();
    const animate = (now: number) => {
      if (startRef.current === null) return;
      const elapsed = now - startRef.current;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      if (elapsed < duration) {
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
  }, [current]);

  // 트랜지션 종료 후 무한 루프 처리
  const handleTransitionEnd = () => {
    if (current === slideImages.length - 1) {
      // 마지막 더미 -> 진짜 첫 이미지로 점프 (트랜지션 없이)
      setIsTransition(false);
      setProgress(0);
      setTimeout(() => {
        setCurrent(1);
        // 다음 프레임에서 트랜지션 복구
        setTimeout(() => setIsTransition(true), 50);
      }, 50);
    } else if (current === 0) {
      // 첫 더미 -> 진짜 마지막 이미지로 점프 (트랜지션 없이)
      setIsTransition(false);
      setProgress(0);
      setTimeout(() => {
        setCurrent(slideImages.length - 2);
        // 다음 프레임에서 트랜지션 복구
        setTimeout(() => setIsTransition(true), 50);
      }, 50);
    }
  };

  // 다음/이전 버튼
  const goToNext = () => {
    setProgress(0);
    setCurrent((prev) => {
      if (prev === slideImages.length - 2) {
        // 마지막 진짜 이미지에서 더미로 이동(트랜지션 적용), 이후 handleTransitionEnd에서 점프
        setIsTransition(true);
        return prev + 1;
      } else if (prev === slideImages.length - 1) {
        // 이미 더미에 있으면 바로 점프
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
  };

  const goToPrev = () => {
    setProgress(0);
    setCurrent((prev) => {
      if (prev === 1) {
        // 첫 진짜 이미지에서 더미로 이동(트랜지션 적용), 이후 handleTransitionEnd에서 점프
        setIsTransition(true);
        return prev - 1;
      } else if (prev === 0) {
        // 이미 더미에 있으면 바로 점프
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
  };

  // 현재 실제 이미지 인덱스 계산 (진행 바 표시용)
  const getRealIndex = (slideIndex: number) => {
    if (slideIndex === 0) return images.length - 1;
    if (slideIndex === slideImages.length - 1) return 0;
    return slideIndex - 1;
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "calc(100vh - 64px)",
        overflow: "hidden",
        display: "flex",
        marginBottom: 22,
      }}
    >
      {/* 이전/다음 버튼 */}
      <Button
        onClick={goToPrev}
        style={{
          position: "absolute",
          left: 40,
          top: "50%",
          zIndex: 30,
          transform: "translateY(-50%)",
          background: "none",
          color: "#fff",
          border: "none",
          borderRadius: 0,
          width: 56,
          height: 56,
          fontSize: 96,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        aria-label="이전"
      >
        <PrevArrowIcon width={56} height={56} />
      </Button>
      <Button
        onClick={goToNext}
        style={{
          position: "absolute",
          right: 40,
          top: "50%",
          zIndex: 30,
          transform: "translateY(-50%)",
          background: "none",
          color: "#fff",
          border: "none",
          borderRadius: 0,
          width: 56,
          height: 56,
          fontSize: 96,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          cursor: "pointer",
          transition: "color 0.2s",
        }}
        aria-label="다음"
      >
        <NextArrowIcon width={56} height={56} />
      </Button>

      {/* 슬라이드 컨테이너 */}
      <div
        className="flex"
        style={{
          width: `${slideImages.length * 100}vw`,
          height: "calc(100vh - 64px)",
          transform: `translateX(-${current * 100}vw)`,
          transition: isTransition
            ? "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slideImages.map((img, idx) => {
          // 실제 이미지 인덱스 계산 (더미 제외)
          const realIdx = getRealIndex(idx);
          const isActive = current === idx;
          const currentImage = projectsItems[realIdx];

          return (
            <div
              key={idx}
              style={{
                width: "100vw",
                height: "calc(100vh - 64px)",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={img}
                alt={`사례 이미지 ${realIdx + 1}`}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority={idx === 1}
              />
              {isActive && current > 0 && current < slideImages.length - 1 && (
                <>
                  {/* 이미지 제목과 설명 */}
                  <div
                    style={{
                      position: "absolute",
                      left: 200,
                      bottom: 200,
                      color: "#fff",
                      zIndex: 10,
                    }}
                  >
                    <p
                      style={{
                        fontSize: "28px",
                        fontWeight: 500,
                        lineHeight: 1.5,
                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        opacity: 0.9,
                      }}
                    >
                      {currentImage.description}
                    </p>
                    <h2
                      style={{
                        fontSize: "56px",
                        fontWeight: 700,
                        marginBottom: "8px",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                      }}
                    >
                      {currentImage.title}
                    </h2>
                    <Button
                      onClick={() => {
                        router.push(`/project/${currentImage.id}`);
                      }}
                      style={{ fontSize: "22px", fontWeight: 500 }}
                    >
                      자세히 보기
                    </Button>
                  </div>
                  {/* 진행 바 (실제 이미지에서만 표시) */}
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      bottom: 70,
                      transform: "translateX(-50%)",
                      width: "85vw",
                      maxWidth: "90%",
                      height: 8,
                      background: "rgba(255,255,255,0.25)",
                      borderRadius: 4,
                      zIndex: 10,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${Math.max(0, Math.min(progress, 100))}%`,
                        background: progress > 0 ? "#F9F9F9" : "transparent",
                        borderRadius: 4,
                        transition: "width 0.1s linear",
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
  );
};
