import { ConsultationGuide } from "./component/guide";
import { ConsultationForm } from "./component/form";

const ConsultationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* 왼쪽: 헤더 섹션 */}
          <ConsultationGuide />
          {/* 오른쪽: 폼 섹션 */}
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
