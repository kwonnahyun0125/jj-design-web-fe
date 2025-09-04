"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NextArrowIcon, PrevArrowIcon } from "@/component/Icon";
import { Button } from "@/component/button";
import { Keyword, Project } from "@/type/project";
import { defaultProject, keywordFilters } from "@/api/project/data";
import { getProjectList } from "@/api/project/api";

export const KeywordArea = () => {
  const ITEMS_PER_SLIDE = 4; // 한 번에 보여줄 카드 수
  const router = useRouter();
  const totalSlidesRef = useRef(0);
  const maxIndexRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKeyword, setSelectedKeyword] = useState(
    keywordFilters[0].value
  );
  const [keywordProjectList, setKeywordProjectList] = useState([
    defaultProject,
  ]);

  useEffect(() => {
    const FetchData = async () => {
      const fetchData = await getProjectList({
        page: 1,
        size: 12,
        keyword: selectedKeyword.toUpperCase() as Keyword,
      });
      const projectData = fetchData.data;
      const projectList = projectData.list || [];
      totalSlidesRef.current = projectData.totalCount;
      maxIndexRef.current = Math.max(
        0,
        totalSlidesRef.current - ITEMS_PER_SLIDE
      );
      setKeywordProjectList(projectList);
    };
    FetchData();
  }, [selectedKeyword]);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? maxIndexRef.current : prevIndex;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex > maxIndexRef.current ? 0 : nextIndex;
    });
  };

  const handleCardClick = (id: number) => {
    router.push(`/project/${id}`);
  };

  return (
    <div className="px-15 py-10 mx-auto mb-10">
      <KeywordHeader
        filteredItems={keywordFilters}
        selectedKeyword={selectedKeyword}
        onKeywordChange={setSelectedKeyword}
      />
      <KeywordSlider
        keywordProjectList={keywordProjectList}
        currentIndex={currentIndex}
        itemsPerSlide={ITEMS_PER_SLIDE}
        handleCardClick={handleCardClick}
      />
      <div className="container mx-auto px-4">
        <KeywordControls
          keywordProjectList={keywordProjectList}
          currentIndex={currentIndex}
          maxIndex={maxIndexRef.current}
          onNext={nextSlide}
          onPrev={prevSlide}
          itemsPerSlide={ITEMS_PER_SLIDE}
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
  filteredItems,
  selectedKeyword,
  onKeywordChange,
}: {
  filteredItems: { value: string; label: string }[];
  selectedKeyword: string;
  onKeywordChange: (value: string) => void;
}) => {
  return (
    <div className="flex justify-between items-center mb-8 px-7">
      <div className="flex items-center gap-6">
        <h2 className="text-3xl font-bold">키워드로 보는 프로젝트</h2>
        <div className="flex gap-2">
          {filteredItems.map((item) => (
            <Button
              key={item.value}
              onClick={() => onKeywordChange(item.value)}
              className={`px-4 py-2 rounded ${
                selectedKeyword === item.value
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
  keywordProjectList,
  itemsPerSlide,
  currentIndex,
  handleCardClick,
}: {
  keywordProjectList: Project[];
  itemsPerSlide: number;
  currentIndex: number;
  handleCardClick?: (id: number) => void;
}) => {
  const hasProjects =
    keywordProjectList.length > 0 && keywordProjectList[0].id > 0;

  return (
    <>
      {hasProjects ? (
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out rounded-lg shadow pt-5 pb-7"
            style={{
              transform: `translateX(-${
                (currentIndex / keywordProjectList.length) * 100
              }%)`,
              width: `${(keywordProjectList.length / itemsPerSlide) * 100}%`,
            }}
          >
            {keywordProjectList.map((project, idx) => (
              <div
                key={`project_${idx}`}
                className="flex-shrink-0 cursor-pointer"
                style={{ width: `${100 / keywordProjectList.length}%` }}
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
      ) : (
        <div className="flex items-center justify-center min-h-[300px] text-center py-8">
          <p className="text-lg text-gray-500">등록된 시공사례가 없습니다.</p>
        </div>
      )}
    </>
  );
};

const KeywordCard = ({
  idx,
  project,
  handleCardClick,
}: {
  idx: number;
  project: Project;
  handleCardClick?: (id: number) => void;
}) => {
  return (
    <div
      className="bg-white overflow-hidden shadow-lg rounded-lg  cursor-pointer hover:shadow-xl transition-shadow h-full"
      onClick={() => handleCardClick?.(project.id)}
    >
      <Image
        src={project.imageUrl || "/image/default-image.png"}
        alt={project.title}
        width={500}
        height={250}
        style={{ width: "100%", height: 250, objectFit: "cover" }}
        priority={idx < 4}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{project.duration}주 소요</p>
        <p className="text-gray-600 text-sm mb-2 text-ellipsis overflow-hidden whitespace-nowrap h-5">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const KeywordControls = ({
  keywordProjectList,
  currentIndex,
  maxIndex,
  onNext,
  onPrev,
  itemsPerSlide,
}: {
  keywordProjectList: Project[];
  currentIndex: number;
  maxIndex: number;
  onNext: () => void;
  onPrev: () => void;
  itemsPerSlide: number;
}) => {
  // 기본 4에서 시작해서 인덱스마다 증가
  const baseProgress = (itemsPerSlide / keywordProjectList.length) * 100; // 기본 4개 항목에 대한 진행률
  const indexProgress = (currentIndex / keywordProjectList.length) * 100; // 현재 인덱스에 따른 추가 진행률
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
          disabled={
            currentIndex === 0 || keywordProjectList.length <= itemsPerSlide
          }
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
          disabled={
            currentIndex > maxIndex ||
            keywordProjectList.length <= itemsPerSlide
          }
        >
          <NextArrowIcon />
        </Button>
      </div>
    </div>
  );
};
