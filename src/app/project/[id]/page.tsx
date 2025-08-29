"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { projectsItems } from "@/api/data";
import { Button } from "@/component/button";
import { RightArrowIcon } from "@/component/Icon";
import { ConsultationArea } from "@/app/home/component/consultation-area";
import { DetailInfo } from "./component/info";
import { DetailKeywordFilter } from "./component/keyword-filter";
import { DetailGalery } from "./component/galery";
import { ViewGroupButton } from "./component/view-button";
import { ReviewSection } from "./component/review";
import { project } from "@/type/project";

const ProjectDetailPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  // TODO: API 연동 필요
  const project: project = projectsItems.find((p) => p.id === Number(id)) || {
    id: 0,
    title: "",
    imageUrl: "",
    description: "",
    areaSize: 0,
    type: "",
    durationWeeks: null,
    reviews: null,
  };
  const imageList = projectsItems.filter(
    (p) => p.id === Number(id) || "/image/default-image.png"
  );
  const keywordItems =
    // project?.keyword ?
    //   ["전체", ...project.keyword.split(",")]:
    ["전체(100)", "시공 전(27)", "공용 욕실(15)", "3D 스케치업(13)"];

  // 이미지 뷰 상태 / 이미지 필터 상태
  const [selectedView, setSelectedView] = useState<"card" | "list">("card");
  const [selectedKeyword, setSelectedKeyword] = useState<string>(
    keywordItems[0] || "전체"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-9xl mx-auto px-25 py-8">
        {/* 프로젝트 정보 */}
        <DetailInfo project={project} />
        <div className="flex items-center justify-between mb-3 px-8">
          {/* 키워드 */}
          <DetailKeywordFilter
            keywordItems={keywordItems}
            selectedKeyword={selectedKeyword}
            setSelectedKeyword={setSelectedKeyword}
          />
          {/* view type 버튼 */}
          <ViewGroupButton
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
        </div>
        {/* 이미지 갤러리 */}
        <DetailGalery selectedView={selectedView} imageList={imageList} />

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
        <ReviewSection projectId={project.id} />
      </div>

      {/* 상담 영역 - 브라우저 너비 전체 */}
      <div className="bg-white w-full">
        <ConsultationArea />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
