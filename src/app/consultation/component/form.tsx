import { SelectBox } from "@/component/selectbox";
import { FormHeader } from "./form-header";
import { FormDefaultInfo } from "./form-default";
import { FormSiteInfo } from "./form-site";
import { FormConstructInfo } from "./form-construct";
import { FormReferenceInfo } from "./form-reference";

export const ConsultationForm = () => {
  return (
    <div className="lg:col-span-3 lg:sticky lg:top-8">
      <form className="bg-white shadow-lg rounded-xl overflow-hidden">
        {/* 진행 단계 표시 */}
        <FormHeader />

        <div className="p-8 space-y-8">
          {/* 섹션: 기본 정보 */}
          <FormDefaultInfo />
          {/* 섹션: 현장 정보 */}
          <FormSiteInfo />
          {/* 섹션: 시공 요구사항 */}
          <FormConstructInfo />
          {/* 섹션: 참고 자료 */}
          <FormReferenceInfo />

          {/* 개인정보 동의 및 제출 */}
          <div className="bg-gray-50 -mx-8 -mb-8 p-8 rounded-b-xl">
            <div className="flex flex-col space-y-4">
              <label className="flex items-start space-x-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 text-gray-800 border-gray-300 rounded focus:ring-gray-800"
                />
                <span className="leading-relaxed">
                  개인정보 수집 및 이용에 동의합니다.
                  <a href="#" className="text-gray-800 underline ml-1">
                    개인정보처리방침 보기
                  </a>
                </span>
              </label>
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-lg bg-[#E5E7EB] hover:bg-[#111827] hover:text-white font-semibold text-lg shadow-lg transition-colors duration-200"
              >
                상담 신청하기
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
