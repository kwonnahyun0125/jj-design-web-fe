"use client";

import React, { useState } from "react";
import { NextArrowIcon, PrevArrowIcon } from "./Icon";
import { Button } from "./button";

interface PaginationProps {
  initialPage?: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  initialPage = 1,
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <div className="mt-6 flex justify-center items-center">
      <nav
        aria-label="Pagination"
        className="isolate inline-flex -space-x-px rounded-md"
      >
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <PrevArrowIcon />
        </Button>
        <span className="relative inline-flex items-center px-8 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0">{`${currentPage} / ${totalPages}`}</span>

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <NextArrowIcon />
        </Button>
      </nav>
    </div>
  );
};
