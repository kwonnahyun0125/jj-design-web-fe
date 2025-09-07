"use client";

import { useState } from "react";
import { Button } from "@/component/button";
import { SearchIcon } from "@/component/Icon";
import { ProjectListHeaderProps } from "@/type/project";

export const ProjectHeader = ({
  totalItems,
  setCondition,
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

  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <span className="text-sm text-gray-600 whitespace-nowrap">
        총 <span className="font-semibold text-black">{totalItems}</span>건
      </span>
      <div className="relative ">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="w-full border-b border-gray-300 px-4 py-2 pr-12 focus:outline-none focus:border-gray-500 text-base"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={(e) => handleEnterPress(e)}
        />
        <Button
          onClick={handleSearchBtnClick}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};
