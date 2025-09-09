import { ContentLoading } from "@/component/content-loading";
import { Notice } from "@/type/notice";
import { NoticeTable } from "./table";

export const NoticeContent = ({
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
  return (
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
      <div className={`relative ${isLoading ? "opacity-50" : ""}`}>
        {isLoading && <ContentLoading />}
        <NoticeTable
          notices={notices}
          totalItems={totalItems}
          page={page}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};
