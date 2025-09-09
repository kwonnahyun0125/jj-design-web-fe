import { AxiosInstance, AxiosError } from 'axios';
import GlobalErrorHandler from './error-handler';
import { ApiError } from '@/type/error';

export const handleApiError = (error: AxiosError | ApiError | Error | unknown): void => {
  // 서버 환경에서는 로깅만
  if (typeof window === 'undefined') {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('API Error:', errorMessage);
    return;
  }

  // 에러 정보 추출
  let message = 'API 요청 중 오류가 발생했습니다';
  let stack: string | undefined;
  let status: number | undefined;

  if (error instanceof Error) {
    message = error.message;
    stack = error.stack;
  }

  // Axios 에러인 경우
  if (error && typeof error === 'object' && 'response' in error) {
    const axiosError = error as AxiosError;
    status = axiosError.response?.status;
  }

  // API 에러 객체인 경우
  if (error && typeof error === 'object' && 'response' in error) {
    const apiError = error as ApiError;
    message = apiError.message || message;
    stack = apiError.stack;
    status = apiError.response?.status;
  }

  GlobalErrorHandler.handleError({
    type: 'api',
    message,
    stack,
    status
  });
};

export const setupApiInterceptors = (axiosInstance: AxiosInstance): void => {
  if (typeof window === 'undefined') return;

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      handleApiError(error);
      return Promise.reject(error);
    }
  );
};