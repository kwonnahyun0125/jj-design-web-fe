import { format } from "date-fns";

// 날짜 포맷팅 함수
export const formatDate = (date: string | Date) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return format(dateObj, "yyyy-MM-dd");
};

export const calcDate = (date: string | Date) => {
  const start = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const daysDiff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return daysDiff;
};
