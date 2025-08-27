"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projectsItems } from "@/api/data";
import { NextArrowIcon, PrevArrowIcon } from "@/component/Icon";
import { Button } from "@/component/button";
import { project } from "@/type/project";

export const KeywordArea = () => {
  const router = useRouter();
  const totalSlides = projectsItems.length;
  const itemsPerSlide = 4; // 한 번에 보여줄 카드 수
  const maxIndex = Math.max(0, totalSlides - itemsPerSlide);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("30");

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? maxIndex : prevIndex;
    });
  };

  const handleCardClick = (id: number) => {
    router.push(`/project/${id}`);
  };

  return (
    <div className="px-15 py-10 mx-auto mb-10">
      <KeywordHeader
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <KeywordSlider
        currentIndex={currentIndex}
        itemsPerSlide={itemsPerSlide}
        handleCardClick={handleCardClick}
      />
      <div className="container mx-auto px-4">
        <KeywordControls
          currentIndex={currentIndex}
          maxIndex={maxIndex}
          onNext={nextSlide}
          onPrev={prevSlide}
          itemsPerSlide={itemsPerSlide}
        />
        <div className="flex justify-center mt-10">
          <Button
            className="text-lg px-8 py-3 rounded font-semibold bg-[#E5E7EB] hover:bg-[#111827] hover:text-white"
            onClick={() => {
              router.push("/project");
            }}
          >
            더 많은 시공사례 보기
          </Button>
        </div>
      </div>
    </div>
  );
};

const KeywordHeader = ({
  selectedCategory,
  onCategoryChange,
}: {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}) => {
  const filteredItems = [
    { value: "30", label: "30평형 아파트" },
    { value: "50", label: "50평형 이상 아파트" },
    { value: "old", label: "구축 아파트" },
    { value: "new", label: "신축 아파트" },
    { value: "2", label: "주택" },
  ];

  return (
    <div className="flex justify-between items-center mb-8 px-7">
      <div className="flex items-center gap-6">
        <h2 className="text-3xl font-bold">키워드로 보는 프로젝트</h2>
        <div className="flex gap-2">
          {filteredItems.map((item) => (
            <Button
              key={item.value}
              onClick={() => onCategoryChange(item.value)}
              className={`px-4 py-2 rounded ${
                selectedCategory === item.value
                  ? "bg-[#111827] text-white "
                  : "bg-[#E5E7EB] text-gray-800"
              } transition-colors cursor-pointer`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const KeywordSlider = ({
  handleCardClick,
  currentIndex,
  itemsPerSlide,
}: {
  handleCardClick?: (id: number) => void;
  currentIndex: number;
  itemsPerSlide: number;
}) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out rounded-lg shadow pt-5 pb-7"
        style={{
          transform: `translateX(-${
            (currentIndex / projectsItems.length) * 100
          }%)`,
          width: `${(projectsItems.length / itemsPerSlide) * 100}%`,
        }}
      >
        {projectsItems.map((project, idx) => (
          <div
            key={`project_${idx}`}
            className="flex-shrink-0 cursor-pointer"
            style={{ width: `${100 / projectsItems.length}%` }}
          >
            <div className="px-5">
              <KeywordCard
                project={project}
                idx={idx}
                handleCardClick={handleCardClick}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const KeywordCard = ({
  idx,
  project,
  handleCardClick,
}: {
  idx: number;
  project: project;
  handleCardClick?: (id: number) => void;
}) => {
  return (
    <div
      className="bg-white overflow-hidden shadow-lg rounded-lg  cursor-pointer hover:shadow-xl transition-shadow h-full"
      onClick={() => handleCardClick?.(project.id)}
    >
      <Image
        src={project.img}
        alt={project.title}
        width={500}
        height={250}
        style={{ width: "100%", height: 250, objectFit: "cover" }}
        priority={idx < 4}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {project.year} 준공 | {project.desc}
        </p>
        <p className="font-bold text-xl">
          {project.price}
          <span className="font-normal text-base">원</span>
        </p>
      </div>
    </div>
  );
};

const KeywordControls = ({
  currentIndex,
  maxIndex,
  onNext,
  onPrev,
  itemsPerSlide,
}: {
  currentIndex: number;
  maxIndex: number;
  onNext: () => void;
  onPrev: () => void;
  itemsPerSlide: number;
}) => {
  // 기본 4에서 시작해서 인덱스마다 증가
  const baseProgress = (itemsPerSlide / projectsItems.length) * 100; // 기본 4개 항목에 대한 진행률
  const indexProgress = (currentIndex / projectsItems.length) * 100; // 현재 인덱스에 따른 추가 진행률
  const progressPercentage = Math.min(baseProgress + indexProgress, 100);

  return (
    <div className="flex items-center justify-between mt-8 mb-4">
      {/* 진행바 */}
      <div className="flex-1 mr-8">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* 컨트롤 버튼들 */}
      <div className="flex gap-3 ml-8">
        {/* 이전 버튼 */}
        <Button
          onClick={onPrev}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            currentIndex === 0
              ? "bg-[#E5E7EB]  text-black cursor-not-allowed"
              : "hover:bg-[#111827] hover:text-white "
          }`}
          disabled={currentIndex === 0}
        >
          <PrevArrowIcon />
        </Button>

        {/* 다음 버튼 */}
        <Button
          onClick={onNext}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            currentIndex > maxIndex
              ? "bg-[#E5E7EB]  text-black cursor-not-allowed"
              : "hover:bg-[#111827] hover:text-white "
          }`}
          disabled={currentIndex > maxIndex}
        >
          <NextArrowIcon />
        </Button>
      </div>
    </div>
  );
};
