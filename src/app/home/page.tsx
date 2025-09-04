import { ConsultationArea } from "@/app/home/component/consultation-area";
import { KeywordArea } from "@/app/home/component/keyword-area";
import { SlideArea } from "@/app/home/component/slide-area";
import { ProjectArea } from "./component/project-area";
import { getProjectList } from "@/api/project/api";

const Home = async () => {
  const fetchData = await getProjectList({ page: 1, size: 10 });
  const projectData = fetchData.data;
  const projectList = projectData.list || [];

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

export default Home;
