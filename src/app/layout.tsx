import type { Metadata } from "next";
import { Toolbar } from "@/component/toolbar";
import { Footer } from "@/component/footer";
import { Error } from "@/component/error";
import { CompanyProvider } from "@/context/company-context";
import "../style/global.css";

export const metadata: Metadata = {
  title: "JJ-DESIGN",
  description: `인테리어 그 이상의 가치를 만드는 브랜드 공간은 사람을 담는 그릇입니다.\n JJ-DESIGN은 삶과 비즈니스의 가치를 높이는 맞춤형 인테리어·건축 솔루션을 제안합니다.`,
  keywords: ["인테리어", "건축", "디자인", "JJ-DESIGN"],
  icons: "/icon/favicon.ico",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <head>
        <style>{`
          @font-face {
            font-family: 'Pretendard';
            src: url('/font/PretendardVariable.woff2') format('woff2');
            font-weight: 100 900;
            font-display: swap;
          }
        `}</style>
      </head>
      <body style={{ fontFamily: "Pretendard, sans-serif" }}>
        <CompanyProvider>
          <Toolbar />
          {children ? children : <Error status="notfound" />}
          <Footer />
        </CompanyProvider>
      </body>
    </html>
  );
};
export default RootLayout;
