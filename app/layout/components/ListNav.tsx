"use client";
import Text from "@/components/Text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../useLayoutServices";
import React from "react";
import Dropdown from "@/components/Dropdown";

const ListNav = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex md:gap-8 md:items-center space-y-4 md:space-y-0">
      {navItems.map((item) => {
        return (
          <li key={item.href}>
            {item.subItems ? (
              <Dropdown
                label={item.label}
                items={item.subItems}
                isActive={pathname.startsWith(item.href)}
              />
            ) : (
              <Link
                href={item.href}
                className={`block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-pointer ${
                  pathname === item.href
                    ? "!text-blue-600 dark:text-blue-500 font-semibold"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(ListNav);
