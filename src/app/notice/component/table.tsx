import { ContentLoading } from "@/component/content-loading";
import { EmptyState } from "@/component/empty-state";
import { Notice } from "@/type/notice";
import { calcDate, formatDate } from "@/utils/date";
import Link from "next/link";

export const NoticeTable = ({
  notices,
  totalItems,
  page,
  pageSize,
  isLoading,
}: {
  notices: Notice[];
  totalItems: number;
  page: number;
  pageSize: number;
  isLoading?: boolean;
}) => {
  const hasNotices = notices.length > 0 && notices[0].id > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* 테이블 헤더 */}
      <div className="bg-gray-50 border-b border-t px-4 py-3">
        <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
          <div className="col-span-2 text-center">번호</div>
          <div className="col-span-6">제목</div>
          <div className="col-span-2 text-center hidden lg:block">등록일</div>
          <div className="col-span-2 text-center">상태</div>
        </div>
      </div>

      {/* 공지사항 목록 */}
      <div className={`relative ${isLoading ? "opacity-50" : ""}`}>
        {isLoading && <ContentLoading />}
        {hasNotices ? (
          <div className="bg-white min-h-[800px]">
            {notices.map((notice, index) => (
              <div
                key={notice.id || index}
                className="border-b border-gray-200"
              >
                <Link
                  href={`/notice/detail?id=${notice.id}`}
                  className="block hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="grid grid-cols-12 gap-4 px-4 py-4 items-center">
                    {/* 번호 */}
                    <div className="col-span-2 text-center">
                      <span className="text-sm text-gray-600">
                        {totalItems - (page - 1) * pageSize - index}
                      </span>
                    </div>

                    {/* 제목 */}
                    <div className="col-span-6">
                      <div className="flex items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-1">
                              {notice.title}
                            </h2>
                            {/* 등록 1주일 이내만 NEW */}
                            {notice.createdAt &&
                              calcDate(notice.createdAt) < 7 && (
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
                    <div className="col-span-2 text-center hidden lg:block">
                      <span className="text-sm text-gray-600">
                        {formatDate(notice.createdAt)}
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
        ) : (
          <EmptyState message="등록된 공지사항이 없습니다." />
        )}
      </div>
    </div>
  );
};
