"use client";

import { Button } from "@/component/button";

export const ProjectHeader = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">
          총 <span className="font-semibold text-black">927</span>건
        </span>

        <div className="flex items-center gap-6">
          <Button
            className="text-sm font-semibold text-black border-b-2 border-black pb-1"
            onClick={() => {}}
          >
            추천순
          </Button>
          <Button
            className="text-sm text-gray-500 hover:text-black"
            onClick={() => {}}
          >
            최신순
          </Button>
          <Button
            className="text-sm text-gray-500 hover:text-black"
            onClick={() => {}}
          >
            인기순
          </Button>
        </div>
      </div>
    </div>
  );
};
