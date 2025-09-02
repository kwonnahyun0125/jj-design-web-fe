import { Button } from "@/component/button";
import { Modal } from "@/component/modal";
import { useState } from "react";

export const FormPrivacyInfo = ({
  isChecked,
  setIsChecked,
}: {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <label className="flex items-start space-x-3 px-1 text-sm text-gray-700">
      <input
        type="checkbox"
        className="mt-0.5 h-5 w-5 text-gray-800 border-gray-300 rounded focus:ring-gray-800"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <span className="leading-relaxed">
        개인정보 수집 및 이용에 동의합니다.
        <Button
          className="text-gray-800 underline ml-1"
          onClick={() => setIsModalOpen(true)}
        >
          개인정보처리방침 보기
        </Button>
        <Modal
          title="개인정보 처리방침 (요약)"
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <FormPrivacyModal />
        </Modal>
      </span>
    </label>
  );
};

const FormPrivacyModal = () => {
  return (
    <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
      <p className="text-gray-700 mb-6 leading-relaxed">
        ㈜JJ-Design은 고객님의 개인정보를 안전하게 보호하며, 아래와 같은 목적과
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
