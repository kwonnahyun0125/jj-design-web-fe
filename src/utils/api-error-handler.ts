import { ApiError, AxiosInstance } from '@/type/error';
import GlobalErrorHandler from './error-handler';

export const handleApiError = (error: ApiError): void => {
  // 서버 환경에서는 로깅만
  if (typeof window === 'undefined') {
    console.error('API Error:', error?.message || 'Unknown error');
    return;
  }

  GlobalErrorHandler.handleError({
    type: 'api',
    message: error?.message || 'API 요청 중 오류가 발생했습니다',
    stack: error?.stack,
    status: error?.response?.status
  });
};


export const setupApiInterceptors = (axiosInstance: AxiosInstance): void => {
  if (typeof window === 'undefined') return;

  axiosInstance.interceptors.response.use(
    (response: unknown) => response,
    (error: unknown) => {
      handleApiError(error as ApiError);
      return Promise.reject(error);
    }
  );
};