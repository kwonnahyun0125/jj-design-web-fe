import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // 정적 사이트 생성
  reactStrictMode: true,
  experimental: {},
  images: {
    unoptimized: true, // 이미지 최적화 기능 비활성화
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;