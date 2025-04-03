"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { getIconForLabel, navItems } from "../useLayoutServices";

const NavMobile = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 z-50">
      <div className="flex justify-around items-center p-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center transition-all duration-200 ${
                isActive
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              }`}
            >
              <div className={`p-2 rounded-full transition-colors ${
                isActive 
                  ? "bg-blue-100 dark:bg-blue-900/50 scale-125" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}>
                {getIconForLabel(item.label)}
              </div>
              <span className={`text-xs mt-1 font-medium ${
                isActive ? "font-semibold" : ""
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default React.memo(NavMobile);
