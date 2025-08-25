import { ConsultationArea } from "@/app/home/component/consultation-area";
import { KeywordArea } from "@/app/home/component/keyword-area";
import { SlideArea } from "@/app/home/component/slide-area";
import { ProjectArea } from "./component/project-area";

const Home = () => {
  return (
    <div className="w-full h-[calc(100vh - 82px)] overflow-x-hidden overflow-y-auto">
      {/* 슬라이드 영역 */}
      <SlideArea />
      {/* 시공사례 목록 영역 */}
      <ProjectArea />
      {/* 키워드 프로젝트 목록 영역 */}
      <KeywordArea />
      {/* 상담신청 영역 */}
      <ConsultationArea />
    </div>
  );
};

export default Home;
