"use client";

import React, { useState } from "react";
import { NextArrowIcon, PrevArrowIcon } from "./Icon";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  initialPage = 1,
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
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <PrevArrowIcon />
        </button>
        <span className="relative inline-flex items-center px-8 py-2 text-sm font-semibold text-gray-700 focus:outline-offset-0">{`${currentPage} / ${totalPages}`}</span>
        {/* {getPageNumbers().map((page, idx) =>
          page === "..." ? (
            <span
              key={idx}
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 focus:outline-offset-0"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => handlePageChange(Number(page))}
              aria-current={currentPage === page ? "page" : undefined}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold border border-gray-300 focus:z-20 focus:outline-offset-0 ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          )
        )} */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <NextArrowIcon />
        </button>
      </nav>
    </div>
  );
};
