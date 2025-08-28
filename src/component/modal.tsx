"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  customClass?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title = "",
  children,
  size = "md",
  customClass,
}: ModalProps) => {
  // ESC 키로 모달 닫기 및 스크롤 위치 유지
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);

      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;

      // 배경 스크롤 방지하면서 위치 유지
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);

      if (isOpen) {
        // 이전 스크롤 위치로 복원
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    };
  }, [isOpen, onClose]);

  // 모달이 열려있지 않으면 렌더링하지 않음
  if (!isOpen) return null;

  // 크기별 클래스
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-[95vw]",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 - 블러 효과 */}
      <div
        className="fixed inset-0 backdrop-blur-sm bg-black/30 transition-all duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 모달 컨텐츠 */}
      <div
        className={`relative bg-white rounded-lg shadow-xl max-w-[80vw] mx-4 ${
          sizeClasses[size]
        } max-h-[90vh] flex flex-col transform transition-all duration-300 scale-100 opacity-100 ${
          customClass || ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="닫기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 본문 */}
        <div className="p-4 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};
