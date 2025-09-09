'use client';

import ErrorBoundary from './error-boundary';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
};

export default ClientLayout;
