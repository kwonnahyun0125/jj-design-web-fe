"use client";

import Link from "next/link";

const dummyNotice = {
  id: 1,
  title: "새로운 기능 업데이트 안내",
  date: "2025-08-25",
  content: `
    안녕하세요. 이번 업데이트에서는 다음과 같은 기능이 추가되었습니다.
    
    - 기능 A 개선
    - 버그 B 수정
    - UI 디자인 개선

    자세한 내용은 추후 별도 공지를 통해 안내드리겠습니다. 감사합니다.
  `,
};

const NoticeDetailPage = () => {
  // 실제 프로젝트에선 fetch로 해당 id에 맞는 데이터 받아오면 됨

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 영역 */}
      <div className="bg-white pt-4">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">공지사항</h1>
              <p className="text-gray-600 mt-1 text-sm">
                최신 소식과 중요한 공지사항을 확인하세요
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 게시글 정보 헤더 */}
        <div className="bg-gray-50 border-b border-t px-4 py-3">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
            <div className="col-span-1 text-center">번호</div>
            <div className="col-span-7">제목</div>
            <div className="col-span-2 text-center">등록일</div>
            <div className="col-span-2 text-center">상태</div>
          </div>
        </div>

        {/* 게시글 제목 정보 */}
        <div className="bg-white border-b border-gray-200">
          <div className="grid grid-cols-12 gap-4 px-4 py-4 items-center">
            <div className="col-span-1 text-center">
              <span className="text-sm text-gray-600">{dummyNotice.id}</span>
            </div>
            <div className="col-span-7">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-medium text-gray-900">
                  {dummyNotice.title}
                </h2>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
                  NEW
                </span>
              </div>
            </div>
            <div className="col-span-2 text-center">
              <span className="text-sm text-gray-600">{dummyNotice.date}</span>
            </div>
            <div className="col-span-2 text-center">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                공지
              </span>
            </div>
          </div>
        </div>

        {/* 게시글 내용 */}
        <div className="bg-white min-h-[500px] border-b border-gray-200">
          <div className="px-8 py-8">
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {dummyNotice.content.split("\n").map((line, idx) => {
                if (line.trim() === "") {
                  return <div key={idx} className="h-4" />;
                }
                if (line.trim().startsWith("-")) {
                  return (
                    <div key={idx} className="flex items-start gap-3 mb-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                      <span>{line.trim().substring(1).trim()}</span>
                    </div>
                  );
                }
                return (
                  <p key={idx} className="mb-4 text-base">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        {/* 하단 액션 및 정보 영역 */}
        <div className="bg-gray-50 border-b px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                공유하기
              </button>
              <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                인쇄하기
              </button>
            </div>
            <span className="text-sm text-gray-500">조회수: 1,234</span>
          </div>
        </div>

        {/* 목록으로 돌아가기 버튼 */}
        <div className="mt-8 text-center">
          <Link
            href="/notice"
            className="inline-flex items-center px-4 py-2 bg-[#E5E7EB]  text-black hover:bg-[#111827] hover:text-white rounded transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailPage;
