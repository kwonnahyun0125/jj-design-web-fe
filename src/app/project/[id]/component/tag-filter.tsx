import { Button } from "@/component/button";
import { TagFilterProps } from "@/type/project";

export const DetailTagFilter = ({
  tagItems,
  selectedTag,
  setSelectedTag,
}: TagFilterProps) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-3">
        {tagItems.map((tag) => (
          <Button
            key={tag.key}
            className={`min-w-[100px] text-center px-4 py-3 rounded-md text-sm font-medium  ${
              selectedTag.key === tag.key
                ? "bg-gray-900 text-white "
                : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
