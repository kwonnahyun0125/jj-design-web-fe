"use client";

import { ConsultationArea } from "@/app/home/component/consultation-area";
import { KeywordArea } from "@/app/home/component/keyword-area";
import { SlideArea } from "@/app/home/component/slide-area";
import { ProjectArea } from "./component/project-area";
import { getProjectList } from "@/api/project/api";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [mounted, setMounted] = useState(false);
  const [projectList, setProjectList] = useState([]);

  // 컴포넌트 마운트 체크
  useEffect(() => {
    setMounted(true);
  }, []);

  // API 호출은 마운트 후에만
  useEffect(() => {
    if (mounted) {
      fetchData();
    }
  }, [mounted]);

  const fetchData = async () => {
    try {
      const fetchData = await getProjectList({ page: 1, size: 12 });
      const projectData = fetchData.data;
      setProjectList(projectData.list || []);
    } catch (error) {
      console.error("API 호출 실패:", error);
    }
  };

  // 마운트 전에는 로딩 표시
  if (!mounted) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh - 82px)] overflow-x-hidden overflow-y-auto">
      {/* 슬라이드 영역 */}
      <SlideArea projectList={projectList} />
      {/* 시공사례 목록 영역 */}
      <ProjectArea projectList={projectList} />
      {/* 키워드 프로젝트 목록 영역 */}
      <KeywordArea />
      {/* 상담신청 영역 */}
      <ConsultationArea />
    </div>
  );
};

export default HomePage;
