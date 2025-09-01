"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex items-center justify-center w-[120px] h-[100px] rounded relative">
            <Image
              src="/image/jj-design.png"
              alt="JJ-DESIGN 로고"
              width={120}
              height={100}
              className="object-contain"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          {/* 회사 정보 */}
          <div>
            <h2 className="font-bold text-xl mb-2">JJ-DESIGN</h2>
            <p className="text-base">
              Your trusted partner in interior design and architecture.
            </p>
            <p className="text-base mt-2">사업자등록번호: 698-86-02793</p>
            <p className="text-base">대표: 최병준</p>
          </div>
          {/* 연락처 및 주소 */}
          <div>
            <h3 className="font-semibold text-lg mb-1">Contact</h3>
            <p className="text-base">전화: 070-4017-1252</p>
            <p className="text-base">이메일: llbeforell@naver.com</p>
            <p className="text-base">
              주소 : 경북 구미시 산동읍 첨단기업7로 122-53, B동(본점)
            </p>
            <p className="text-base">주소 : 경북 구미시 임수동(분점)</p>
          </div>
          {/* 빠른 링크 */}
          <div>
            <h3 className="font-semibold text-lg mb-1">Quick Links</h3>
            <ul className="text-base space-y-1">
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
          <div>
            <h3 className="font-semibold text-lg mb-1">Follow Us</h3>
            <div className="flex space-x-2">
              {/* 인스타그램 버튼 */}
              <Button
                className="text-gray-900 py-2 text-m font-medium hover:border-b-3 hover:border-gray-900 flex items-start justify-start"
                style={{ minWidth: "50px", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    " https://www.instagram.com/jj_design0301",
                    "_blank"
                  )
                }
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
              {/* 블로그 버튼 */}
              <Button
                className="text-gray-900 py-2 text-m font-medium hover:border-b-3 hover:border-gray-900 flex items-start justify-start"
                style={{ minWidth: "50px", cursor: "pointer" }}
                onClick={() =>
                  window.open(" https://blog.naver.com/jj-design_", "_blank")
                }
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
              {/* 필요시 다른 소셜 아이콘 추가 */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-base">
          &copy; 2023 JJ-DESIGN. All rights reserved. |{" "}
          <Link href="/privacy" className="hover:underline">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
};
