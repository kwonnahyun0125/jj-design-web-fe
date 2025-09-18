"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Pagination } from "@/component/pagination";
import { FurnitureCard } from "./component/card";
import { FurnitureHeader } from "./component/header";
import { getFurnitureList } from "@/api/furnuture/api";
import { Furniture } from "@/type/furniture";
import { EmptyState } from "@/component/empty-state";
import { ContentLoading } from "@/component/content-loading";

const FurniturePage = () => {
  const [furnitureList, setFurnitureList] = useState<Furniture[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [condition, setCondition] = useState<{
    page: number;
    pageSize: number;
  }>({ page: 1, pageSize: 10 });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await getFurnitureList(condition);
        setFurnitureList(result.data.items || []);
        setTotalCount(result.data.total || 0);
      };
      fetchData();
    } finally {
      setIsLoading(false);
    }
  }, [condition]);

  const hasFurniture = furnitureList?.length > 0 && furnitureList[0]?.id > 0;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* 헤더 섹션 */}
      <FurnitureHeader />

      {/* 직영가구 목록 */}
      <div
        className={`relative max-w-full mx-auto px-8 py-12 ${
          isLoading ? "opacity-50" : ""
        }`}
      >
        {isLoading && <ContentLoading />}
        {hasFurniture ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {furnitureList.map((furniture) => (
              <FurnitureCard key={furniture.id} furniture={furniture} />
            ))}
          </div>
        ) : (
          <EmptyState message="등록된 가구점이 없습니다." />
        )}
      </div>
      <div className="flex justify-center mb-8">
        <Pagination
          totalItems={totalCount}
          onPageChange={(page) => setCondition({ ...condition, page })}
        />
      </div>
    </div>
  );
};

export default FurniturePage;
