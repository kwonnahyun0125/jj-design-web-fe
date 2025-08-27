"use client";

import Link from "next/link";
import React, { useState } from "react";
import { menuItems } from "@/api/data";
import { MenuItem } from "@/type/common";
import { Button } from "./button";

export const NavBar = ({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: (menu: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hidden lg:flex lg:items-center lg:space-x-4 group cursor-pointer">
      {menuItems.map((item) =>
        item.sub ? (
          <div className="relative" key={item.key}>
            <Button
              className={`peer text-gray-900 hover:border-b-3 hover:border-gray-900 px-3 py-2 text-lg font-large focus:outline-none flex items-center gap-1 cursor-pointer ${
                selectedMenu === item.key ? "border-b-3 border-gray-900" : ""
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
            className={`text-gray-900 hover:border-b-3 hover:border-gray-900 px-3 py-2 text-lg font-large ${
              selectedMenu === item.key ? "border-b-3 border-gray-900" : ""
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
          href={subItem.url}
          className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
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
