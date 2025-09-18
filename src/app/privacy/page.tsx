"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PrivacyPage = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          개인정보 처리방침
        </h2>
        <p
          className="text-lg text-gray-700 leading-relaxed mb-10 bg-gray-50 p-6 rounded-lg border-l-4 border-[#6B7280] "
          style={{ whiteSpace: "pre-line" }}
        >
          {`JJ-Design(이하 "회사")은 고객님의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본 방침은 회사가 수집하는 개인정보 항목, 이용 목적, 보관 기간 및 관리 방침을 안내합니다.`}
        </p>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              1. 수집하는 개인정보 항목 및 방법
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                수집 항목: 이름, 연락처(휴대전화), 이메일, 주소(선택), 공간
                유형, 면적, 예산, 상담 요청사항
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                수집 방법: 홈페이지 상담 신청, 온라인 문의, 전화, 이메일, 현장
                상담
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              2. 개인정보의 수집 및 이용 목적
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                상담 및 견적 산출, 고객 문의 응대
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                계약 체결 및 시공 진행 관리
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                협력 시공업체와의 시공 일정 및 현장 공유
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                사후 고객 관리(A/S, 하자 보수 안내 등)
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                서비스 품질 개선 및 통계 분석
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              3. 개인정보의 보유 및 이용 기간
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                상담 완료 또는 계약 종료 후 1년간 보관 후 파기
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                단, 계약 및 세금 관련 법령에 따라 일정 기간 보관이 필요한 경우
                해당 기간 동안 보관
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              4. 개인정보의 제3자 제공
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              회사는 원칙적으로 고객의 개인정보를 외부에 제공하지 않습니다.
              다만, 다음과 같은 경우에는 예외적으로 제공될 수 있습니다.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                고객의 동의가 있는 경우
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                법령에 따라 제공이 요구되는 경우
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                원활한 시공 진행을 위해 협력업체(도장, 목공, 전기, 설비 등)와
                일정·주소 정보를 공유해야 하는 경우
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              5. 개인정보 처리 위탁
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              회사는 안정적인 서비스 제공을 위해 일부 업무를 외부에 위탁할 수
              있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                      수탁업체
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                      위탁업무
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-300">
                      보유기간
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      JJ-Mobilia
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      가구제작, 배송 및 일정관리
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                      위탁 계약 종료 시까지
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              6. 이용자의 권리
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                개인정보 열람, 정정, 삭제, 처리정지 요구 가능
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                해당 권리는 이메일 또는 전화로 요청할 수 있으며, 회사는 지체
                없이 처리합니다.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              7. 개인정보 자동 수집 및 쿠키 사용
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                회사는 홈페이지 운영 과정에서 쿠키를 사용하여 방문자 통계, 접속
                이력 등을 수집할 수 있습니다.
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                고객은 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              8. 개인정보 파기 절차 및 방법
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                보유 기간 경과 시 즉시 파기
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                종이 문서는 분쇄, 전자 파일은 복구 불가능한 방법으로 영구 삭제
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              9. 개인정보 보호책임자
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                성명: 최병준
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                연락처: 070-4017-1252
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
                이메일: llbeforell@naver.com
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              10. 고지의 의무
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              본 개인정보 처리방침은 법령 또는 회사 정책에 따라 변경될 수
              있으며, 변경 시 홈페이지에 공지합니다.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#6B7280] ">
              <p className="text-gray-700">
                <strong className="text-gray-900">공고일자:</strong> 2025년 9월
                12일
                <br />
                <strong className="text-gray-900">시행일자:</strong> 2025년 9월
                14일
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
