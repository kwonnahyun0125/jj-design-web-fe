import Link from "next/link";
import React, { useState } from "react";
import { menuItems } from "@/data";
import { MenuItem } from "@/type/common";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="hidden sm:flex sm:items-center sm:space-x-4 group cursor-pointer">
      {menuItems.map((item) =>
        item.sub ? (
          <div className="relative" key={item.key}>
            <button
              className={`peer text-gray-900 hover:border-b-3 hover:border-gray-900 px-3 py-2 text-m font-medium focus:outline-none flex items-center gap-1 cursor-pointer ${
                isOpen ? "border-b-3 border-gray-900" : ""
              }`}
              onClick={() => {
                setIsOpen(!isOpen);
                item.fncClick();
              }}
            >
              {item.title}
            </button>
            {isOpen && <MenuLayer subItems={item.sub} setIsOpen={setIsOpen} />}
          </div>
        ) : (
          <Link
            key={item.key}
            href={item.url}
            className="text-gray-900 hover:border-b-3 hover:border-gray-900 px-3 py-2 text-m font-medium"
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
