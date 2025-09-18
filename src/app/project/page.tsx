"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Pagination } from "@/component/pagination";
import {
  Category,
  Keyword,
  Lineup,
  Project,
  ProjectCondition,
} from "@/type/project";
import { ProjectList } from "./component/list";
import { ProjectFilter } from "./component/filter";
import { ProjectHeader } from "./component/header";
import { getProjectList } from "@/api/project/api";
import { typeItems } from "@/api/project/data";
import { ContentLoading } from "@/component/content-loading";
import { ProjectMobileFilter } from "./component/mobile-filter";

const ProjectPage = () => {
  const params = useSearchParams();
  const pathname = usePathname();

  const [projectList, setProjectList] = useState<Project[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [typeFilter, setTypeFilter] = useState<
    { key: string; label: string }[]
  >([]);
  const [condition, setCondition] = useState<ProjectCondition>({
    page: 1,
    size: 12,
    search: "",
    category: Category.RESIDENCE,
    pyung: [],
    lineup: Lineup.ALL,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const category = params.get("category");
    const keyword = params.get("keyword");

    let newCategory = Category.RESIDENCE;
    let newTypeFilter = typeItems[Category.RESIDENCE];

    if (category === "mercantile") {
      newCategory = Category.MERCANTILE;
      newTypeFilter = typeItems[Category.MERCANTILE];
    } else if (category === "architecture") {
      newCategory = Category.ARCHITECTURE;
      newTypeFilter = typeItems[Category.ARCHITECTURE];
    }

    setTypeFilter([{ key: "ALL", label: "전체" }, ...newTypeFilter]);
    setCondition({
      page: 1,
      category: newCategory,
      keyword: keyword ? (keyword.toUpperCase() as Keyword) : undefined,
    });
  }, [params]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await getProjectList(condition);
        setProjectList(result.data.list || []);
        setTotalItems(result.data.totalCount || 0);
      };

      // category가 설정된 후에만 API 호출
      if (condition.category) {
        fetchData();
      }
    } finally {
      setIsLoading(false);
    }
  }, [condition]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div
        className={`relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isLoading ? "opacity-50" : ""
        }`}
      >
        {isLoading && <ContentLoading />}

        <div className="flex gap-8 min-h-screen">
          {/* 좌측 필터 영역 (데스크탑) */}
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="sticky top-20 h-[calc(100vh-5rem)] ">
              <ProjectFilter
                typeFilter={typeFilter}
                condition={condition}
                setCondition={setCondition}
              />
            </div>
          </div>
          {/* 우측 프로젝트 리스트 영역 */}
          <div className="flex-1 min-w-0 py-8 px-6 flex flex-col min-h-screen">
            <ProjectHeader
              totalItems={totalItems}
              condition={condition}
              setCondition={setCondition}
              setMobileFilterOpen={setMobileFilterOpen}
            />
            {/* 모바일 필터 */}
            <ProjectMobileFilter
              typeFilter={typeFilter}
              mobileFilterOpen={mobileFilterOpen}
              setCondition={setCondition}
              setMobileFilterOpen={setMobileFilterOpen}
            />
            {/* 프로젝트 리스트 및 페이지네이션 */}
            <div className="flex-1">
              <ProjectList projectList={projectList} />
            </div>
            <div className="mt-8 flex justify-center">
              <Pagination
                pageSize={condition.size}
                totalItems={totalItems || 0}
                onPageChange={(page) => {
                  setCondition({ ...condition, page });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
