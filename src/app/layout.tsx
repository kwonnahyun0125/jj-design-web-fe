import type { Metadata } from "next";
import { Toolbar } from "@/component/toolbar";
import { Footer } from "@/component/footer";
import { Error } from "@/component/error";
import "../style/globals.css";

export const metadata: Metadata = {
  title: "JJ-DESIGN",
  description: `인테리어 그 이상의 가치를 만드는 브랜드 공간은 사람을 담는 그릇입니다.\n JJ-DESIGN은 삶과 비즈니스의 가치를 높이는 맞춤형 인테리어·건축 솔루션을 제안합니다.`,
  keywords: ["인테리어", "건축", "디자인", "JJ-DESIGN"],
  icons: "/icon/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Toolbar />
        {children ? children : <Error status="notfound" />}
        <Footer />
      </body>
    </html>
  );
}
