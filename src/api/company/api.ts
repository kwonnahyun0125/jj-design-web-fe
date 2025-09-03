import instance from "../setup";

/**
 * @descript 회사 정보 조회
 */
export const getCompanyInfo = async () => {
  const response = await instance.get("/company");

  return response.data;
};

