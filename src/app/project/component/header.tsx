"use client";

export const ProjectHeader = ({ totalItems }: { totalItems: number }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">
          총 <span className="font-semibold text-black">{totalItems}</span>건
        </span>
      </div>
    </div>
  );
};
