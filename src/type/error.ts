export enum ERROR_CODE {
  NOTFOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  SERVER = 500,
}

export enum ERROR_MESSAGES {
  NOTFOUND = "페이지를 찾을 수 없습니다.",
  UNAUTHORIZED = "이 페이지를 볼 수 있는 권한이 없습니다.",
  FORBIDDEN = "접근이 거부되었습니다.",
  SERVER = "서버 오류가 발생했습니다.",
}

export enum ERROR_DESCRIPTION {
  NOTFOUND = "요청한 페이지가 서버에 존재하지 않습니다.",
  UNAUTHORIZED = "이 페이지를 볼 수 있는 권한이 없습니다.",
  FORBIDDEN = "접근이 거부되었습니다.",
  SERVER = "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
}


export interface ErrorInfo {
  type: 'javascript' | 'promise' | 'react' | 'api';
  message: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  error?: Error;
  stack?: string;
  componentStack?: string;
  status?: number;
  statusText?: string;
  url?: string;
  method?: string;
  context?: string;
}

export interface StructuredError extends ErrorInfo {
  timestamp: string;
  userAgent: string;
  url: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export interface ApiError {
  message?: string;
  stack?: string;
  response?: {
    status?: number;
    statusText?: string;
  };
}


export interface AxiosInstance {
  interceptors: {
    response: {
      use: (
        success: (response: unknown) => unknown,
        error: (error: unknown) => Promise<never>
      ) => void;
    };
  };
}