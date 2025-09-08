import { ProjectCondition } from "@/type/project";
import instance from "../setup";

/**
 * @descript 프로젝트 목록 조회
 */
export const getProjectList = async (query: ProjectCondition) => {
  const response = await instance.get("/projects", { params: query });
  return response.data;
};

/**
 * @descript 프로젝트 상세 조회
 */
export const getProjectById = async (id: number) => {
  const response = await instance.get(`/projects/${id}`);
  return response.data;
};
