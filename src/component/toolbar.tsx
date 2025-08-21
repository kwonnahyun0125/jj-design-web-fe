"use client";
import Image from "next/image";
import { NavBar } from "./navbar";
import Link from "next/link";

export const Toolbar = () => {
  return (
    <div className="bg-white shadow">
      <div className="max-w-12xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex flex-1 items-center justify-between">
            {/* 왼쪽: 로고 */}
            <Link href="/" className="flex items-center">
              <Image
                className="inline-block mx-2 px-1"
                src="/image/jj-design.png"
                alt="JJ-DESIGN 로고"
                width={100}
                height={60}
                style={{ height: "auto" }}
                priority
              />
            </Link>
            {/* 가운데: 메뉴 */}
            <NavBar />
            {/* 오른쪽: 버튼 */}
            <div className="hidden sm:flex sm:items-end sm:space-x-4 group">
              <button
                className="text-gray-900 px-2 py-2 text-m font-medium hover:border-b-3 hover:border-gray-900 flex items-center justify-center"
                style={{ minWidth: "50px", cursor: "pointer" }}
              >
                <Image
                  className="inline-block"
                  src="/image/instagram.png"
                  alt="Instagram"
                  width={25}
                  height={25}
                  priority
                />
              </button>
              <button
                className="text-gray-900 px-2 py-2 text-m font-medium hover:border-b-3 hover:border-gray-900 flex items-center justify-center"
                style={{ minWidth: "50px", cursor: "pointer" }}
              >
                <Image
                  className="inline-block"
                  src="/image/blog.png"
                  alt="Naver Blog"
                  width={25}
                  height={25}
                  priority
                />
              </button>
              {/* 상담 요청 버튼 누르면 상담 요청 페이지로 이동 */}
              <Link
                href="/advice"
                className="text-gray-900 px-2 py-2 text-m font-medium hover:border-b-3 hover:border-gray-900"
                style={{ minWidth: "50px", cursor: "pointer" }}
              >
                상담요청
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
