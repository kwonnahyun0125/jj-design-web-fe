import instance from "../setup";

/**
 * @descript 직영가구 목록 조회
 */
export const getFurnitureList = async (query: { page: number }) => {
  const response = await instance.get("/furnitures", { params: query });
  return response.data;
};

/**
 * @descript 직영가구 상세 조회
 */
export const getFurnitureById = async (id: number) => {
  const response = await instance.get(`/furnitures/${id}`);
  return response.data;
};

