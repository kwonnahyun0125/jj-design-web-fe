export interface Notice {
  id: number;
  title: string;
  content: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  isDeleted?: boolean;
}

export interface NoticeListResponse {
  notices: Notice[];
  total: number;
  page: number;
  limit: number;
}
