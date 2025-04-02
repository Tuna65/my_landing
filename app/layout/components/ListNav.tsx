"use client";
import Text from "@/components/Text";
import Link from "next/link";
import { navItems } from "../useLayoutServices";
import React from "react";
import Dropdown from "@/components/Dropdown";

const ListNav = () => {
  return (
    <ul className="md:flex md:gap-8 md:items-center space-y-4 md:space-y-0">
      {navItems.map((item) => (
        <li key={item.href}>
          {item.subItems ? (
            <Dropdown label={item.label} items={item.subItems} />
          ) : (
            <Link
              href={item.href}
              className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-pointer"
            >
              <Text>{item.label}</Text>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(ListNav);
