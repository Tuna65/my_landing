"use client";
import darkLogo from "@/assets/images/dark_logo.png";
import logo from "@/assets/images/logo.jpg";
import Input from "@/components/Input";
import Switch from "@/components/Switch";
import { changeTheme } from "@/lib/slides/theme";
import { themeSelector } from "@/lib/slides/theme/selector";
import { AppDispatch } from "@/lib/store";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListNav from "./ListNav";
import NavMobile from "./NavMobile";

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
            </div>
          </div>
        </section>
      </header>

      <NavMobile />
    </div>
  );
};

export default React.memo(Header);
