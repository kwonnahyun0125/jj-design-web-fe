"use client";

import { useEffect, useState } from "react";
import { getFurnitureById } from "@/api/furnuture/api";
import { Furniture } from "@/type/furniture";
import { FurnitureLocation } from "./component/location";
import { FurnitureSpace } from "./component/space";
import { FurnitureIntro } from "./component/Introduction";
import { FurnitureMatelrials } from "./component/matelrials";
import { usePathname } from "next/navigation";
import { defaultFurniture } from "@/api/furnuture/data";
import { ContentLoading } from "@/component/content-loading";

const FurnitureDetailPage = () => {
  const id = usePathname().split("/").pop();
  const [furniture, setFurniture] = useState<Furniture>(defaultFurniture);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    try {
      const fetchData = async () => {
        const result = await getFurnitureById(parseInt(id));
        const hours =
          result.data.hours ||
          "평일 09:00~18:00 / 토 10:00~17:00 / 일 10:00~16:00";
        setFurniture({ ...(result.data || {}), hours });
      };
      fetchData();
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  return (
    <div
      className={`relative min-h-screen bg-white ${
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
    </div>
  );
};

export default FurnitureDetailPage;
