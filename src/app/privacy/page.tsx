const PrivacyPage = () => {
  // TODO : 회사명, 개인정보 보호책임자, 연락처 등 실제 정보로 교체 필요
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        개인정보 처리방침
      </h2>
      <p
        className="text-lg text-gray-700 leading-relaxed mb-10 bg-gray-50 p-6 rounded-lg border-l-4 border-[#6B7280] "
        style={{ whiteSpace: "pre-line" }}
      >
        {`㈜JJ Design(이하 '회사')은 고객님의 개인정보를 중요시하며, 『개인정보 보호법』을 준수하고 있습니다. \n본 개인정보 처리방침은 회사가 어떤 정보를 수집하며, 어떻게 사용하고 보호하는지 안내합니다.`}
      </p>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            1. 수집하는 개인정보 항목 및 수집 방법
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              수집 항목: 이름, 연락처, 이메일, 주소(선택), 건물 유형, 예산, 사진
              등
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              수집 방법: 홈페이지 상담 신청, 문의하기, 전화, 이메일, 현장 상담
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
              고객 문의 및 상담 응대
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              견적 제공 및 계약 진행
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              사후 고객 관리 및 A/S
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              서비스 개선을 위한 통계 분석
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
              상담 또는 계약 종료 후 1년간 보관 후 파기
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              전자상거래법 등 관련 법령에 따라 보존이 필요한 경우 해당 기간 보관
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            4. 개인정보의 제3자 제공
          </h3>
          <p className="text-gray-700 leading-relaxed">
            회사는 원칙적으로 고객의 개인정보를 외부에 제공하지 않습니다. 단,
            법령에 의하거나 고객 동의 시 예외로 합니다.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            5. 개인정보 처리 위탁
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            회사는 홈페이지 유지보수 등 일부 업무를 외부에 위탁할 수 있습니다.
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
                    OOO시스템
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
                    홈페이지 운영 및 관리
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
              개인정보 열람, 정정, 삭제, 처리정지 요청 가능
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              요청은 이메일 또는 전화로 접수
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            7. 개인정보 자동 수집 및 쿠키 사용
          </h3>
          <p className="text-gray-700 leading-relaxed">
            회사는 쿠키를 통해 방문자 통계, 접속 이력 등을 수집할 수 있습니다.
            브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
          </p>
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
              종이 문서는 파쇄, 전자 파일은 복구 불가능한 방식으로 삭제
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
              성명: 홍길동
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              연락처: 02-1234-5678
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-[#6B7280]  rounded-full mt-2 mr-3 flex-shrink-0"></span>
              이메일: privacy@ooo-design.co.kr
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            10. 고지의 의무
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            개인정보 처리방침은 변경될 수 있으며, 변경 시 홈페이지에 공지합니다.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#6B7280] ">
            <p className="text-gray-700">
              <strong className="text-gray-900">공고일자:</strong> 2025년 8월
              28일
              <br />
              <strong className="text-gray-900">시행일자:</strong> 2025년 9월
              1일
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
