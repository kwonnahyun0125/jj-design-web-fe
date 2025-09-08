"use client";

import { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/component/button";
import { RightArrowIcon } from "@/component/Icon";
import { ConsultationArea } from "@/app/home/component/consultation-area";
import { DetailInfo } from "./component/info";
import { DetailGalery } from "./component/galery";
import { ViewGroupButton } from "./component/view-button";
import { ReviewSection } from "./component/review";
import { Project, ProjectImage } from "@/type/project";
import { getProjectById } from "@/api/project/api";
import { defaultProject, imageTagItems } from "@/api/project/data";
import { DetailTagFilter } from "./component/tag-filter";

const ProjectDetailPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const [projectItems, setProjectItems] = useState<Project>(defaultProject);
  const [imageList, setImageList] = useState<ProjectImage[]>([]);
  const [tagItems, setTagItems] = useState<
    { key: number; label: string }[]
  >([]);
  // 이미지 뷰 상태 / 이미지 필터 상태
  const [selectedView, setSelectedView] = useState<"card" | "list">("card");
  const [selectedTag, setSelectedTag] = useState<{
    key: number;
    label: string;
  }>({ key: 0, label: " 전체" });

  useEffect(() => {
    if (!id) return;
    const FetchData = async () => {
      const result = await getProjectById(parseInt(id));
      setProjectItems(result.data);
      const category = result.data.category;
      setTagItems([
        { key: 0, label: " 전체" },
        ...imageTagItems[category]
      ]);
    };
    FetchData();
  }, [id]);

  useEffect(() => {
    if (selectedTag.key === 0) return setImageList(projectItems?.images || []);
    const filteredImages = projectItems?.images?.filter(
      (image) => image.tagId === selectedTag.key
    );
    setImageList(filteredImages || []);
  }, [projectItems, selectedTag]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-9xl mx-auto px-25 py-8">
        {/* 프로젝트 정보 */}
        <DetailInfo project={projectItems} />
        <div className="flex items-center justify-between mb-3 px-8">
          {/* 태그 */}
          <DetailTagFilter
            tagItems={tagItems}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
          {/* view type 버튼 */}
          <ViewGroupButton
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
        </div>
        {/* 이미지 갤러리 */}
        <DetailGalery
          selectedView={selectedView}
          imageItems={imageList}
        />

        <div className="flex justify-center py-8">
          <Button
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-md bg-[#E5E7EB]  text-black hover:bg-[#111827] hover:text-white"
            onClick={() => {
              router.push(`/project`);
            }}
          >
            목록 더보기
            <RightArrowIcon />
          </Button>
        </div>

        {/* 리뷰 섹션 */}
        <ReviewSection review={projectItems?.review || ""} />
      </div>

      {/* 상담 영역 - 브라우저 너비 전체 */}
      <div className="bg-white w-full">
        <ConsultationArea />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
