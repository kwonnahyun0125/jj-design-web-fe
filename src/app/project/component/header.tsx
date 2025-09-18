"use client";

import { useEffect, useState } from "react";
import { Button } from "@/component/button";
import { SearchIcon } from "@/component/Icon";
import { ProjectListHeaderProps } from "@/type/project";
import { ListFilter } from "lucide-react";

export const ProjectHeader = ({
  totalItems,
  condition,
  setCondition,
  setMobileFilterOpen,
}: ProjectListHeaderProps) => {
  const [search, setSearch] = useState<string>(""); // 검색어 상태

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchBtnClick = () => {
    setCondition((prev) => ({ ...prev, search: search, page: 1 }));
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearchBtnClick();
  };

  useEffect(() => {
    setSearch("");
  }, [condition.category]);

  return (
    <>
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="text-sm text-gray-600 whitespace-nowrap">
          총 <span className="font-semibold text-black">{totalItems}</span>건
        </span>
        <div className="flex-1 flex items-center justify-end gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full border-b border-gray-300 px-2 py-2 pr-12 focus:outline-none focus:border-gray-500 text-base"
              value={search}
              onChange={handleSearchChange}
              onKeyDown={(e) => handleEnterPress(e)}
            />
            <Button
              onClick={handleSearchBtnClick}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <SearchIcon />
            </Button>
          </div>
          <div className="block lg:hidden mb-1">
            <Button
              className="px-3 pt-4 pb-0 rounded text-gray-900 font-semibold"
              onClick={() => setMobileFilterOpen?.(true)}
            >
              <ListFilter />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
