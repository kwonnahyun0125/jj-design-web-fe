import { Category } from "@/type/project";

export const Breadcrumb = ({ category }: { category: Category }) => {
  const categoryMap: { [key: string]: string } = {
    RESIDENCE: "주거공간",
    MERCANTILE: "상업공간",
    ARCHITECTURE: "친환경건축",
  };

  const displayCategory = categoryMap[category.toLocaleUpperCase()];

  return (
    <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
      <ol className="list-none flex items-center space-x-2">
        <li className="text-gray-600">홈</li>
        <li>/</li>
        <li className="text-gray-600">시공사례</li>
        {category && (
          <>
            <li>/</li>
            <li className="text-gray-800 font-medium">{displayCategory}</li>
          </>
        )}
      </ol>
    </nav>
  );
};
