"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { menuItems } from "@/api/data";
import { Menu, X } from "lucide-react";

export const MobileNavBar = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}) => {
  const params = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const category = params.get("category");
    if (category) setSelectedMenu(category);
  }, [open, params, setSelectedMenu]);

  return (
    <div className="flex lg:hidden">
      {/* 햄버거 버튼 */}
      <button
        className="p-2 rounded focus:outline-none"
        aria-label="메뉴 열기"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-7 h-7 text-gray-900" />
      </button>
      {/* 오버레이 메뉴 */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex">
          {/* 메뉴 패널: 화면에 가득 차게 */}
          <nav className="bg-white w-full h-full shadow-lg flex flex-col p-6 animate-slide-in  overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">메뉴</span>
              <button
                className="p-2"
                aria-label="메뉴 닫기"
                onClick={() => setOpen(false)}
              >
                <X className="w-7 h-7 text-gray-900" />
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.url}
                    className={`block px-3 py-3 rounded text-lg font-medium ${
                      selectedMenu === item.key
                        ? "bg-gray-900 text-white"
                        : "text-gray-900 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setSelectedMenu(item.key);
                      setOpen(false);
                      item.fncClick?.();
                    }}
                  >
                    {item.title}
                  </Link>
                  {item.sub && (
                    <ul className="flex flex-col gap-1 ml-4 border-l border-gray-200 pl-3">
                      {item.sub.map((subItem) => (
                        <li key={subItem.key}>
                          <Link
                            href={subItem.url}
                            className={`block px-3 py-2 rounded text-base font-normal ${
                              selectedMenu === subItem.key
                                ? "bg-gray-200 text-gray-900"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                            onClick={() => {
                              setSelectedMenu(subItem.key);
                              setOpen(false);
                              subItem.fncClick?.();
                            }}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/consultation"
                  className={`block px-3 py-3 rounded text-lg font-medium ${
                    selectedMenu === "consultation"
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setSelectedMenu("consultation");
                    setOpen(false);
                  }}
                >
                  상담신청
                </Link>
              </li>
            </ul>
          </nav>
          {/* 오버레이 클릭 시 닫기 */}
          <div
            className="hidden"
            onClick={() => setOpen(false)}
            aria-label="오버레이 닫기"
          />
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.2s ease;
        }
      `}</style>
    </div>
  );
};
