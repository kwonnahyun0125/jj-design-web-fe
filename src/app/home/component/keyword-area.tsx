"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NextArrowIcon, PrevArrowIcon } from "@/component/Icon";
import { Button } from "@/component/button";
import { Keyword, Project } from "@/type/project";
import { defaultProject, keywordItems } from "@/api/project/data";
import { getProjectList } from "@/api/project/api";

export const KeywordArea = () => {
  const router = useRouter();
  const totalSlidesRef = useRef(0);
  const maxIndexRef = useRef(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKeyword, setSelectedKeyword] = useState(keywordItems[0].value);
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
        projectList.length - getItemsPerSlide()
      );
      setKeywordProjectList(projectList);
      setCurrentIndex(0);
    };
    FetchData();
  }, [selectedKeyword]);

  // 반응형: 슬라이드에 보여줄 카드 수 계산
  function getItemsPerSlide() {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  // 반응형 슬라이드 개수 재계산
  useEffect(() => {
    const handleResize = () => {
      maxIndexRef.current = Math.max(
        0,
        keywordProjectList.length - getItemsPerSlide()
      );
      setCurrentIndex((prev) => Math.min(prev, maxIndexRef.current));
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [keywordProjectList.length]);

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

  return (
    <div className="px-2 sm:px-4 md:px-8 lg:px-15 py-8 sm:py-10 mx-auto mb-10">
      <KeywordHeader
        filteredItems={keywordItems}
        selectedKeyword={selectedKeyword}
        onKeywordChange={setSelectedKeyword}
      />
      <KeywordSlider
        keywordProjectList={keywordProjectList}
        currentIndex={currentIndex}
        getItemsPerSlide={getItemsPerSlide}
      />
      <div className="container mx-auto px-0 sm:px-4">
        <KeywordControls
          keywordProjectList={keywordProjectList}
          currentIndex={currentIndex}
          maxIndex={maxIndexRef.current}
          onNext={nextSlide}
          onPrev={prevSlide}
          getItemsPerSlide={getItemsPerSlide}
        />
        <div className="flex justify-center mt-8">
          <Button
            className="text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded font-semibold bg-[#FCE7F3] border border-gray-300 hover:bg-[#111827] hover:text-white"
            onClick={() => {
              // 현재 보고 있는 키워드에 맞는 카테고리로 이동
              const category =
                selectedKeyword === "COMMERCIAL"
                  ? "MERCANTILE"
                  : selectedKeyword === "NEW"
                  ? "ARCHITECTURE"
                  : "RESIDENCE";
              router.push(`/project?category=${category.toLocaleLowerCase()}`);
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
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 px-2 sm:px-7">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <h2 className="text-xl sm:text-3xl font-bold">
          키워드로 보는 프로젝트
        </h2>
        <div className="flex gap-2 flex-wrap">
          {filteredItems.map((item) => (
            <Button
              key={item.value}
              onClick={() => onKeywordChange(item.value)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base ${
                selectedKeyword === item.value
                  ? "bg-[#111827] text-white "
                  : "bg-[#FCE7F3] border border-gray-300 text-gray-800"
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
  getItemsPerSlide,
  currentIndex,
}: {
  keywordProjectList: Project[];
  getItemsPerSlide: () => number;
  currentIndex: number;
}) => {
  const hasProjects =
    keywordProjectList.length > 0 && keywordProjectList[0].id > 0;
  const itemsPerSlide = getItemsPerSlide();

  return (
    <>
      {hasProjects ? (
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out rounded-lg shadow pt-3 pb-5"
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
                <div className="px-2 sm:px-5">
                  <KeywordCard project={project} idx={idx} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[200px] sm:min-h-[300px] text-center py-8">
          <p className="text-base sm:text-lg text-gray-500">
            등록된 시공사례가 없습니다.
          </p>
        </div>
      )}
    </>
  );
};

const KeywordCard = ({ idx, project }: { idx: number; project: Project }) => {
  return (
    <Link
      href={`/project/detail?id=${project.id}`}
      className="bg-white overflow-hidden shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow h-full"
    >
      <Image
        src={project.imageUrl || "/image/default-image.png"}
        alt={project.title}
        width={500}
        height={250}
        style={{ width: "100%", height: 180, objectFit: "cover" }}
        priority={idx < 4}
      />
      <div className="p-3 sm:p-4">
        <h3 className="font-bold text-base sm:text-lg mb-1">{project.title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-1">
          {project.duration}주 소요
        </p>
        <p className="text-gray-600 text-xs sm:text-sm mb-2 text-ellipsis overflow-hidden whitespace-nowrap h-5">
          {project.description}
        </p>
      </div>
    </Link>
  );
};

const KeywordControls = ({
  keywordProjectList,
  currentIndex,
  maxIndex,
  onNext,
  onPrev,
  getItemsPerSlide,
}: {
  keywordProjectList: Project[];
  currentIndex: number;
  maxIndex: number;
  onNext: () => void;
  onPrev: () => void;
  getItemsPerSlide: () => number;
}) => {
  const itemsPerSlide = getItemsPerSlide();
  const baseProgress = (itemsPerSlide / keywordProjectList.length) * 100;
  const indexProgress = (currentIndex / keywordProjectList.length) * 100;
  const progressPercentage = Math.min(baseProgress + indexProgress, 100);

  return (
    <div className="flex items-center justify-between mt-6 mb-2 sm:mt-8 sm:mb-4">
      {/* 진행바 */}
      <div className="flex-1 mr-4 sm:mr-8">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      {/* 컨트롤 버튼들 */}
      <div className="flex gap-2 sm:gap-3 ml-4 sm:ml-8">
        <Button
          onClick={onPrev}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
            currentIndex === 0
              ? "text-black cursor-not-allowed"
              : "hover:bg-gray-200 hover:text-black"
          }`}
          disabled={
            currentIndex === 0 || keywordProjectList.length <= itemsPerSlide
          }
        >
          <PrevArrowIcon />
        </Button>
        <Button
          onClick={onNext}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
            currentIndex > maxIndex
              ? "text-black cursor-not-allowed"
              : "hover:bg-gray-200 hover:text-black"
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
