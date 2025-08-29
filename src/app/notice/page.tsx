"use client";
import Link from "next/link";
import { Pagination } from "@/component/pagination";
import { notices } from "@/api/data";

const NoticePage = () => {
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

      {/* 메인 컨텐츠 - 게시판 스타일 */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 테이블 헤더 */}
        <div className="bg-gray-50 border-b border-t px-4 py-3">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
            <div className="col-span-1 text-center">번호</div>
            <div className="col-span-7">제목</div>
            <div className="col-span-2 text-center">등록일</div>
            <div className="col-span-2 text-center">상태</div>
          </div>
        </div>

        {/* 공지사항 목록 */}
        <div className="bg-white min-h-[800px]">
          {notices.map((notice, index) => (
            <div key={notice.id} className="border-b border-gray-200">
              <Link
                href={`/notice/${notice.id}`}
                className="block hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="grid grid-cols-12 gap-4 px-4 py-4 items-center">
                  {/* 번호 */}
                  <div className="col-span-1 text-center">
                    <span className="text-sm text-gray-600">
                      {notices.length - index}
                    </span>
                  </div>

                  {/* 제목 */}
                  <div className="col-span-7">
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-1">
                            {notice.title}
                          </h2>
                          {index < 2 && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
                              NEW
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-1 ellipsis max-w-[calc(70%)]">
                          {notice.content}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 등록일 */}
                  <div className="col-span-2 text-center">
                    <span className="text-sm text-gray-600">
                      {notice.createdAt}
                    </span>
                  </div>

                  {/* 상태 */}
                  <div className="col-span-2 text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      공지
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="my-4 flex justify-center">
          <Pagination
            totalPages={5}
            onPageChange={(page) => console.log("Page changed to:", page)}
          />
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
