"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./navbar";
import { useCompany } from "@/context/company-context";

export const Toolbar = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("home");
  const { companyData } = useCompany();

  const instagramUrl = companyData?.instagram;
  const blogUrl = companyData?.naver;

  return (
    <div className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-12xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-25">
          <div className="flex flex-1 items-center justify-between">
            {/* 왼쪽: 로고 */}
            <Link href="/home" className="flex items-center">
              <Image
                className="inline-block mx-2 px-1"
                src="/image/jj-design.png"
                alt="JJ-DESIGN 로고"
                width={125}
                height={80}
                style={{ height: "auto" }}
                priority
              />
            </Link>
            {/* 오른쪽: 메뉴와 버튼 */}
            <div className="flex items-center space-x-8">
              {/* 메뉴 */}
              <NavBar
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              />
              {/* 버튼들 */}
              <div className="hidden sm:flex sm:items-end sm:space-x-4 group">
                {/* 인스타그램 버튼 */}
                <Link
                  className="text-gray-900 px-2 py-2 text-m font-medium hover:border-b-3 hover:border-gray-900 flex items-center justify-center"
                  style={{ minWidth: "50px", cursor: "pointer" }}
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="inline-block"
                    src="/image/toolbar-instagram.png"
                    alt="Instagram"
                    width={28}
                    height={28}
                    priority
                  />
                </Link>
                {/* 블로그 버튼 */}
                <Link
                  className="text-gray-900 px-2 py-2 text-m font-medium hover:border-b-3 hover:border-gray-900 flex items-center justify-center"
                  style={{ minWidth: "50px", cursor: "pointer" }}
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="inline-block"
                    src="/image/toolbar-blog.png"
                    alt="Naver Blog"
                    width={28}
                    height={28}
                    priority
                  />
                </Link>
                {/* 상담 요청 버튼 누르면 상담 요청 페이지로 이동 */}
                <Link
                  href={"/consultation"}
                  onClick={() => setSelectedMenu("")}
                  className="text-gray-900 px-5 py-2 text-lg font-large hover:border-b-3 hover:border-gray-900"
                  style={{ minWidth: "50px", cursor: "pointer" }}
                >
                  상담신청
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
