export const FormPrivacyInfo = () => {
  // TODO : 회사명, 개인정보 보호책임자, 연락처 등 실제 정보로 교체 필요
  return (
    <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
        개인정보 처리방침 (요약)
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        ㈜OOO디자인은 고객님의 개인정보를 안전하게 보호하며, 아래와 같은 목적과
        범위 내에서 정보를 수집·이용합니다.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            1. 수집 항목
          </h3>
          <p className="text-gray-700 text-sm">
            이름, 연락처, 이메일, 문의 내용, (선택) 주소, 예산, 건물 정보 등
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            2. 이용 목적
          </h3>
          <p className="text-gray-700 text-sm">
            고객 상담, 견적 제공, 시공 계약, A/S 등
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            3. 보유 기간
          </h3>
          <p className="text-gray-700 text-sm">
            상담 또는 계약 종료 후 1년 이내 파기 (법령에 따른 보관 예외 있음)
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            4. 제3자 제공 및 위탁
          </h3>
          <p className="text-gray-700 text-sm">
            고객 동의 없이 외부에 제공하지 않으며, 홈페이지 유지보수 외 별도
            위탁은 없습니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            5. 고객 권리
          </h3>
          <p className="text-gray-700 text-sm">
            개인정보 열람, 수정, 삭제 요청 가능 (이메일 또는 전화로 접수)
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">6. 문의처</h3>
          <p className="text-gray-700 text-sm">
            이메일: privacy@ooo-design.co.kr
            <br />
            전화: 02-1234-5678
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-300">
        <a
          href="/privacy"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
        >
          👉 전체 개인정보 처리방침 보기
        </a>
      </div>
    </section>
  );
};
