import instance from "../setup";
import { ConsultationFormData } from "@/type/consultation";

export const createConsulting = async (body: ConsultationFormData) => {
  const response = await instance.post("/consultings", body);
  return response;
};