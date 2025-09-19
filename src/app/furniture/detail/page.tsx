"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getFurnitureById } from "@/api/furnuture/api";
import { defaultFurniture } from "@/api/furnuture/data";
import { ContentLoading } from "@/component/content-loading";
import { Furniture } from "@/type/furniture";
import { FurnitureLocation } from "./component/location";
import { FurnitureSpace } from "./component/space";
import { FurnitureIntro } from "./component/Introduction";
import { FurnitureMatelrials } from "./component/matelrials";
import { Button } from "@/component/button";

const FurnitureDetailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const id = searchParams.get("id");
  const [furniture, setFurniture] = useState<Furniture>(defaultFurniture);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const result = await getFurnitureById(parseInt(id));
        const hours =
          result.data.hours ||
          "평일 09:00~18:00 / 토 10:00~17:00 / 일 10:00~16:00";
        setFurniture({ ...(result.data || {}), hours });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div
      className={`w-full min-h-screen bg-gray-50 ${
        isLoading ? "opacity-50" : ""
      }`}
    >
      {isLoading && <ContentLoading />}
      {/* 직영가구 소개 페이지 */}
      <FurnitureIntro furniture={furniture} />

      {/* 직영가구 공간 안내 */}
      <FurnitureSpace furniture={furniture} />

      {/* 직영가구 제작 안내 */}
      <FurnitureMatelrials />

      {/* 직영가구 위치 안내 */}
      <FurnitureLocation furniture={furniture} />
      {/* 목록으로 돌아가기 버튼 */}
      <div className="mt-8 text-center bg-gray-50 pb-12">
        <Button
          onClick={() => router.push("/furniture")}
          className="inline-flex items-center px-4 py-2 bg-[#FCE7F3] border border-gray-300  text-black hover:bg-[#111827] hover:text-white rounded transition-colors"
        >
          목록으로 돌아가기
        </Button>
      </div>
    </div>
  );
};

export default FurnitureDetailPage;
