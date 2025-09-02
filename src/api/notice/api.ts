import instance from "../setup";

/**
 * @descript 공지사항 목록 조회
 */
export const getNoticeList = async () => {
  const response = await instance.get("/notices");
  return response.data;
};

/**
 * @descript 공지사항 상세 조회
 */
export const getNoticeById = async (id: number) => {
  const response = await instance.get(`/notices/${id}`);
  return response.data;
};
