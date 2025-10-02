import axios, { AxiosInstance } from 'axios';
import { setupApiInterceptors } from '@/utils/api-error-handler';

// 운영에서는 무조건 이 주소를 쓰도록 가드
const PROD_BASE = 'https://api.jj-design.co.kr';

const baseURL: string =
  process.env.NODE_ENV === 'production'
    ? PROD_BASE
    : (process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3001');

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