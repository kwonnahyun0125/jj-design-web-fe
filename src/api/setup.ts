import axios from 'axios';
import { setupApiInterceptors } from '@/utils/api-error-handler';

const apiClient = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API 에러 인터셉터 설정
setupApiInterceptors(apiClient);

export default apiClient;
