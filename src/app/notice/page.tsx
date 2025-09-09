"use client";

import { useEffect, useState } from "react";
import { Pagination } from "@/component/pagination";
import { getNoticeList } from "@/api/notice/api";
import { Notice } from "@/type/notice";
import { defaultNotice } from "@/api/notice/data";
import { NoticeHeader } from "./component/header";
import { NoticeContent } from "./component/content";

const NoticePage = () => {
  const [notices, setNotices] = useState<Notice[]>([defaultNotice]);
  const [condition, setCondition] = useState<{
    page: number;
    pageSize: number;
  }>({ page: 1, pageSize: 10 });

  const [totalItems, setTotalItems] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const result = await getNoticeList(condition);
        setNotices(result.data.list || []);
        setTotalItems(result.data.totalCount || 1);
      };
      fetchData();
    } finally {
      setIsLoading(false);
    }
  }, [condition]);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* 헤더 영역 */}
        <NoticeHeader />
        {/* 메인 컨텐츠 */}
        <NoticeContent
          notices={notices}
          totalItems={totalItems}
          page={condition.page}
          pageSize={condition.pageSize}
          isLoading={isLoading}
        />
        {/* 페이지네이션 */}
        <div className="flex justify-center mb-8">
          <Pagination
            totalItems={totalItems}
            onPageChange={(page) => setCondition({ ...condition, page })}
          />
        </div>
      </div>
    </>
  );
};

export default NoticePage;
