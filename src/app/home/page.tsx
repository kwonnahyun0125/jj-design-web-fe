"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ConsultationArea } from "@/app/home/component/consultation-area";
import { KeywordArea } from "@/app/home/component/keyword-area";
import { SlideArea } from "@/app/home/component/slide-area";
import { getProjectList } from "@/api/project/api";
import { ProjectArea } from "./component/project-area";

const HomePage = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [projectList, setProjectList] = useState([]);

  // 컴포넌트 마운트 체크
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    <div className="w-full min-h-screen bg-gray-50">
      {/* 슬라이드 영역 */}
      <div className="w-full">
        <SlideArea projectList={projectList} />
      </div>
      {/* 시공사례 목록 영역 */}
      <div className="w-full">
        <ProjectArea projectList={projectList} />
      </div>
      {/* 키워드 프로젝트 목록 영역 */}
      <div className="w-full">
        <KeywordArea />
      </div>
      {/* 상담신청 영역 */}
      <div className="w-full">
        <ConsultationArea />
      </div>
    </div>
  );
};

export default HomePage;
