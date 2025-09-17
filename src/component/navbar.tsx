"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { menuItems } from "@/api/data";
import { MenuItem } from "@/type/common";
import { Button } from "./button";
import { usePathname } from "next/navigation";

export const NavBar = ({
  selectedMenu = "home",
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}) => {
  const path = usePathname();
  const divRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleBlur = (e: React.FocusEvent) => {
    const target = divRef.current;
    const relatedTarget = e.relatedTarget as Node;
    if (target && relatedTarget && !target.contains(relatedTarget)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const currentItem = menuItems.find((item) => path.startsWith(item.url));
    if (currentItem) {
      setSelectedMenu(currentItem.key);
    } else {
      setSelectedMenu("");
    }
  }, [path, setSelectedMenu]);

  return (
    <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
      {menuItems.map((item) =>
        item.sub ? (
          <div
            className="relative"
            key={item.key}
            ref={divRef}
            onBlur={handleBlur}
          >
            <Button
              className={`peer text-gray-900 font-medium px-4 py-2 transition-colors text-base xl:text-lg flex items-center gap-1 cursor-pointer ${
                selectedMenu === item.key
                  ? "border-b-2 border-gray-900 "
                  : "hover:border-b-2 hover:border-gray-900 "
              }`}
              onClick={() => {
                setIsOpen(!isOpen);
                setSelectedMenu(item.key);
                item.fncClick();
              }}
            >
              {item.title}
            </Button>
            {isOpen && <MenuLayer subItems={item.sub} setIsOpen={setIsOpen} />}
          </div>
        ) : (
          <Link
            key={item.key}
            href={item.url}
            onClick={() => {
              setSelectedMenu(item.key);
              setIsOpen(false);
              item.fncClick();
            }}
            className={`text-gray-900 font-medium px-4 py-2 transition-colors text-base xl:text-lg ${
              selectedMenu === item.key
                ? "border-b-2 border-gray-900 "
                : "hover:border-b-2 hover:border-gray-900 "
            }`}
          >
            {item.title}
          </Link>
        )
      )}
    </nav>
  );
};

const MenuLayer = ({
  subItems,
  setIsOpen,
}: {
  subItems: MenuItem[];
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <div className="absolute left-0 top-full mt-2 min-w-[160px] bg-white rounded shadow-lg opacity-100 pointer-events-auto transition-opacity z-20">
      {subItems.map((subItem: MenuItem) => (
        <Link
          key={subItem.key}
          tabIndex={0}
          href={subItem.url}
          className="block px-4 py-2 text-gray-900 hover:bg-gray-100 text-base"
          onClick={() => {
            setIsOpen(false);
            subItem?.fncClick?.();
          }}
        >
          {subItem.title}
        </Link>
      ))}
    </div>
  );
};
