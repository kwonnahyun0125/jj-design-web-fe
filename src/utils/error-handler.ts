import { ErrorInfo } from "@/type/error";


class GlobalErrorHandler {
  private static instance: GlobalErrorHandler | null = null;

  constructor() {
    if (GlobalErrorHandler.instance) {
      return GlobalErrorHandler.instance;
    }

    this.setupGlobalHandlers();
    GlobalErrorHandler.instance = this;
  }

  private setupGlobalHandlers(): void {
    if (typeof window === 'undefined') return;

    // JavaScript 에러
    window.addEventListener('error', (event) => {
      this.handleError({
        type: 'javascript',
        message: event.message,
        stack: event.error?.stack,
        url: event.filename
      });
    });

    // Promise rejection 에러
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        type: 'promise',
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack
      });
    });
  }

  public handleError(errorInfo: ErrorInfo): void {
    console.error('Global Error:', errorInfo);

    // 개발 환경에서만 상세 로그
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Details:', {
        type: errorInfo.type,
        message: errorInfo.message,
        stack: errorInfo.stack,
        timestamp: new Date().toISOString()
      });
    }
  }

  // React 에러 경계용
  public reactErrorHandler = (error: Error, errorInfo: React.ErrorInfo): void => {
    this.handleError({
      type: 'react',
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack ?? undefined
    });
  };
}

const globalErrorHandler = new GlobalErrorHandler();

export default globalErrorHandler;