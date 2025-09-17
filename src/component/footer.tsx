"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useCompany } from "@/context/company-context";

export const Footer = () => {
  const { companyData } = useCompany();

  const instagramUrl = companyData?.instagram;
  const blogUrl = companyData?.naver;

  return (
    <footer className="bg-[#111827] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start items-center gap-8">
          {/* 로고 */}
          <div className="flex items-center justify-center w-[100px] h-[80px] rounded relative mb-2 md:mb-0">
            <Image
              src="/image/jj-design.png"
              alt="JJ-DESIGN 로고"
              width={100}
              height={80}
              className="object-contain"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          {/* 회사 정보 */}
          <div className="text-center md:text-left min-w-[180px] mb-2 md:mb-0">
            <h2 className="font-bold text-lg md:text-xl mb-1">
              {companyData.name}
            </h2>
            <p className="text-sm md:text-base">
              Your trusted partner in interior design and architecture.
            </p>
            <p className="text-sm md:text-base">
              사업자등록번호: {companyData.business}
            </p>
            <p className="text-sm md:text-base">대표: {companyData.owner}</p>
          </div>
          {/* 연락처 및 주소 */}
          <div className="text-center md:text-left min-w-[180px] mb-2 md:mb-0">
            <h3 className="font-semibold text-base md:text-lg mb-1">Contact</h3>
            <p className="text-sm md:text-base">전화: {companyData.phone}</p>
            <p className="text-sm md:text-base">이메일: {companyData.email}</p>
            <p className="text-sm md:text-base">주소: {companyData.address}</p>
          </div>
          {/* 빠른 링크 */}
          <div className="text-center md:text-left min-w-[120px] mb-2 md:mb-0">
            <h3 className="font-semibold text-base md:text-lg mb-1">
              Quick Links
            </h3>
            <ul className="text-sm md:text-base space-y-1">
              <li>
                <Link href="/company" className="hover:underline">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/project" className="hover:underline">
                  프로젝트
                </Link>
              </li>
              <li>
                <Link href="/notice" className="hover:underline">
                  공지사항
                </Link>
              </li>
            </ul>
          </div>
          {/* 소셜 미디어 */}
          <div className="text-center md:text-left min-w-[120px]">
            <h3 className="font-semibold text-base md:text-lg mb-1">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-2">
              <Button
                className="bg-transparent p-0"
                style={{ minWidth: "40px", cursor: "pointer" }}
                onClick={() => window.open(instagramUrl, "_blank")}
              >
                <Image
                  className="inline-block"
                  src="/svg/instagram-white.svg"
                  alt="Instagram"
                  width={25}
                  height={25}
                  priority
                />
              </Button>
              <Button
                className="bg-transparent p-0"
                style={{ minWidth: "40px", cursor: "pointer" }}
                onClick={() => window.open(blogUrl, "_blank")}
              >
                <Image
                  className="inline-block"
                  src="/svg/naver-blog-white.svg"
                  alt="Naver Blog"
                  width={25}
                  height={25}
                  priority
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs md:text-base">
          &copy; 2023 {companyData.name}. All rights reserved. |{" "}
          <Link href="/privacy" className="hover:underline">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
};
