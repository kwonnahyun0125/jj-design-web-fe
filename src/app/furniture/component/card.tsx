import { Furniture } from "@/type/furniture";
import Image from "next/image";
import Link from "next/link";

export const FurnitureCard = ({ furniture }: { furniture: Furniture }) => {
  const hours =
    furniture.hours || "평일 09:00~18:00 / 토 10:00~17:00 / 일 10:00~16:00";

  return (
    <Link
      key={furniture.id}
      href={`/furniture/${furniture.id}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* 이미지 */}
      <div className="h-100 bg-gray-200 overflow-hidden relative">
        <Image
          src={furniture.coverImageUrl || "/image/no-image.png"}
          alt={furniture.name}
          fill
          className="object-cover"
        />
      </div>

      {/* 컨텐츠 */}
      <div className="px-12 py-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {furniture.name}
        </h3>
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3">
            <p className="text-sm text-gray-500 min-w-[90px]">오시는 길</p>
            <p className="text-gray-700 flex-1">
              {furniture.address || "정보 없음"}
            </p>
          </div>

          <div className="flex items-start gap-3">
            <p className="text-sm text-gray-500 min-w-[90px]">운영시간</p>
            <p className="text-gray-700 flex-1 line-clamp-2">{hours}</p>
          </div>

          <div className="flex items-start gap-3">
            <p className="text-sm text-gray-500 min-w-[90px]">이용안내</p>
            <p className="text-gray-700 flex-1 line-clamp-2">
              {furniture.info || "정보 없음"}
            </p>
          </div>
        </div>

        {/* 버튼 그룹 */}
        <div className="grid grid-cols-1 gap-4">
          <button className="bg-[#E5E7EB] text-black hover:bg-[#111827] hover:text-white py-3 px-6 rounded transition-colors">
            자세히 보기 &gt;
          </button>
        </div>
      </div>
    </Link>
  );
};
