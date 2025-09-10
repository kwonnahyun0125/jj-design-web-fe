"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getNoticeById } from "@/api/notice/api";
import { calcDate, formatDate } from "@/utils/date";
import { defaultNotice } from "@/api/notice/data";
import { Notice } from "@/type/notice";
import { ContentLoading } from "@/component/content-loading";

const NoticeDetailPage = () => {
  const searchParams = useSearchParams();
  console.log("searchParams:", searchParams);
  const id = searchParams.get("id");
  console.log("id:", id);
  const [notice, setNotice] = useState<Notice | null>(defaultNotice);
  const [isNew, setIsNew] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (!id) {
          console.log("ID가 없습니다");
          setNotice(null);
          return;
        }

        console.log("데이터 fetching 시작, ID:", id);
        const result = await getNoticeById(parseInt(id));
        console.log("API 결과:", result);

        const fetchedNotice = result.data || null;
        const newFlag =
          fetchedNotice?.createdAt && calcDate(fetchedNotice.createdAt) < 7;
        setIsNew(newFlag);
        setNotice(fetchedNotice);
      } catch (error) {
        console.error("데이터 fetch 실패:", error);
        setNotice(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
      <div
        className={`relative max-w-7xl mx-auto px-4 py-6 ${
          isLoading ? "opacity-50" : ""
        }`}
      >
        {isLoading && <ContentLoading />}
        {notice && notice.id > 0 ? (
          <>
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
            {notice && (
              <div className="bg-white border-b border-gray-200">
                <div className="grid grid-cols-12 gap-4 px-4 py-4 items-center">
                  <div className="col-span-1 text-center">
                    <span className="text-sm text-gray-600">{notice.id}</span>
                  </div>
                  <div className="col-span-7">
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-medium text-gray-900">
                        {notice.title}
                      </h2>
                      {isNew && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
                          NEW
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="text-sm text-gray-600">
                      {formatDate(notice.createdAt)}
                    </span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      공지
                    </span>
                  </div>
                </div>
              </div>
            )}
            {/* 게시글 내용 */}
            {notice && (
              <div className="bg-white min-h-[500px] border-b border-gray-200">
                <div className="px-8 py-8">
                  <div className="prose max-w-none text-gray-700 leading-relaxed">
                    {notice.content
                      .split("\n")
                      .map((line: string, idx: number) => {
                        if (line.trim() === "") {
                          return <div key={idx} className="h-4" />;
                        }
                        if (line.trim().startsWith("-")) {
                          return (
                            <div
                              key={idx}
                              className="flex items-start gap-3 mb-2"
                            >
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
            )}
            {/* 하단 액션 및 정보 영역 */}
            <div className="bg-gray-50 border-b px-7 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500">작성자: 관리자</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[600px] px-4 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              공지사항을 찾을 수 없습니다
            </h3>
            <p className="text-gray-500 mb-6">
              요청하신 공지사항이 존재하지 않거나 삭제되었을 수 있습니다.
            </p>
          </div>
        )}
        {/* 목록으로 돌아가기 버튼 */}
        <div className="mt-8 text-center">
          <Link
            href="/notice"
            className="inline-flex items-center px-4 py-2 bg-[#FCE7F3] border border-gray-300  text-black hover:bg-[#111827] hover:text-white rounded transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailPage;
