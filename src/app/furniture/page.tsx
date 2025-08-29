import { furnitures } from "@/api/data";
import { FurnitureCard } from "./component/card";
import { FurnitureHeader } from "./component/header";

const FurniturePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* 헤더 섹션 */}
      <FurnitureHeader />

      {/* 쇼룸 목록 */}
      <div className="max-w-full mx-auto px-8 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {furnitures.map((furniture) => (
            <FurnitureCard key={furniture.id} furniture={furniture} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurniturePage;
