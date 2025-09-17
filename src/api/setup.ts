import axios, { AxiosInstance } from 'axios';
import { setupApiInterceptors } from '@/utils/api-error-handler';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://api.jj-design.co.kr';

const apiClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API 에러 인터셉터 설정
setupApiInterceptors(apiClient);

export default apiClient;
