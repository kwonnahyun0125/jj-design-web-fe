"use client";

import { useState } from "react";
import { FormHeader } from "./form-header";
import { FormDefaultInfo } from "./form-default";
import { FormSiteInfo } from "./form-site";
import { FormReferenceInfo } from "./form-reference";
import { FormPrivacyInfo } from "./form-privacy";
import { Button } from "@/component/button";
import { createConsulting } from "@/api/consult/api";
import { Modal } from "@/component/modal";

export const ConsultationForm = () => {
  const [name, setName] = useState(""); // 고객명
  const [phone, setPhone] = useState(""); // 고객 연락처
  const [address, setAddress] = useState(""); // 시공주소
  const [type, setType] = useState("RESIDENCE"); //공간유형
  const [size, setSize] = useState(""); // 면적
  const [budget, setBudget] = useState(""); // 예산
  const [preferredDate, setPreferredDate] = useState(
    new Date().toISOString().slice(0, 7)
  ); // 시작일자
  const [note, setNote] = useState(""); // 참고사항
  const [isChecked, setIsChecked] = useState(false); // 개인정보 동의 여부
  const [isOpen, setIsOpen] = useState(false); // 개인정보 동의 모달 열림 여부

  const handleClickSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 기본 form submit 동작 방지

    // 최신 formData 생성
    const updatedFormData = {
      name,
      phone,
      address,
      type,
      size,
      budget,
      preferredDate,
      note,
      isAgreeTerms: isChecked,
    };

    // 상담 신청 API 호출
    const response = await createConsulting(updatedFormData);
    if (response.status === 201) {
      // 성공 시 폼 리셋
      setName("");
      setPhone("");
      setAddress("");
      setType("");
      setSize("");
      setBudget("");
      setPreferredDate(new Date().toISOString().slice(0, 7));
      setNote("");
      setIsChecked(false);
      setIsOpen(true);
    }
  };

  const checkRequiredFields = () => {
    if (
      !name?.trim() ||
      !phone?.trim() ||
      !address?.trim() ||
      !type ||
      !size?.trim() ||
      !budget?.trim() ||
      !preferredDate ||
      !isChecked
    ) {
      return false;
    }
    return true;
  };

  return (
    <div className="lg:col-span-3 lg:sticky lg:top-8">
      <form
        className="bg-white shadow-lg rounded-xl overflow-hidden"
        onSubmit={handleClickSubmit}
      >
        {/* 진행 단계 표시 */}
        <FormHeader />

        <div className="p-8 space-y-8">
          {/* 섹션: 기본 정보 */}
          <FormDefaultInfo
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
          />
          {/* 섹션: 현장 정보 */}
          <FormSiteInfo
            address={address}
            setAddress={setAddress}
            type={type}
            setType={setType}
            size={size}
            setSize={setSize}
            budget={budget}
            setBudget={setBudget}
            preferredDate={preferredDate}
            setPreferredDate={setPreferredDate}
          />
          {/* 섹션: 참고 자료 */}
          <FormReferenceInfo note={note} setNote={setNote} />
          {/* 개인정보 동의 및 제출 */}
          <div className="bg-gray-50 -mx-8 -mb-8 p-8 rounded-b-xl">
            <div className="flex flex-col space-y-4">
              <FormPrivacyInfo
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              />
              <Button
                type="submit"
                className="w-full py-4 px-8 rounded-lg bg-[#FCE7F3] border border-gray-300 hover:bg-[#111827] hover:text-white font-semibold text-lg shadow-lg transition-colors duration-200"
                disabled={!checkRequiredFields()}
              >
                상담 신청하기
              </Button>
            </div>
          </div>
        </div>
      </form>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="신청 알림">
        <p className="text-gray-700 text-center  whitespace-pre-wrap w-[300px]">
          상담 신청이 완료되었습니다. <br />
          빠른 시일 내에 연락드리겠습니다.
        </p>
      </Modal>
    </div>
  );
};
