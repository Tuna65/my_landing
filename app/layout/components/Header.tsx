"use client";
import darkLogo from "@/assets/images/dark_logo.png";
import logo from "@/assets/images/logo.jpg";
import Input from "@/components/Input";
import Switch from "@/components/Switch";
import { changeTheme } from "@/lib/slides/theme";
import { themeSelector } from "@/lib/slides/theme/selector";
import { AppDispatch } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIconForLabel, navItems } from "../useLayoutServices";
import ListNav from "./ListNav";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector(themeSelector);

  return (
    <div className="sticky top-0 z-50">
      <header className="border-b border-gray-300 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-50 shadow-md">
        <section>
          <div className="flex justify-between p-4 md:py-6 items-center 2xl:w-[1366px] w-full m-auto relative">
            <div className="cursor-pointer">
              <Image
                src={theme === "light" ? logo : darkLogo}
                alt="Logo"
                className="h-8 md:h-auto w-auto"
                width={100}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ListNav />
            </div>

            {/* Desktop Search and Theme */}

            <div className="hidden md:flex gap-3 items-center">
              <div className="flex gap-3 items-center">
                <Input />
                <Switch
                  value={theme !== "dark" ? false : true}
                  onChange={(v) => dispatch(changeTheme(!v ? "light" : "dark"))}
                />
              </div>

              {/* <Login /> */}
            </div>
          </div>
        </section>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 z-50">
        <div className="flex justify-around items-center p-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
            >
              {getIconForLabel(item.label)}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Header);
