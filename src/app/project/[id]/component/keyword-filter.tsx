import { KeywordFilterProps } from "@/type/project";

export const DetailKeywordFilter = ({
  keywordItems,
  selectedKeyword,
  setSelectedKeyword,
}: KeywordFilterProps) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3">
        {keywordItems.map((keyword) => (
          <span
            key={keyword}
            className={`min-w-[100px] text-center px-4 py-3 rounded-md text-sm font-medium  ${
              selectedKeyword === keyword
                ? "bg-gray-900 text-white "
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setSelectedKeyword(keyword)}
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};
