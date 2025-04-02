import Text from "@/components/Text";
import React from "react";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { categoryItems, footerItems } from "../useLayoutServices";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-12 xl:px-4 2xl:px-0 px-2">
      <section>
        <div className="2xl:w-[1366px] w-full m-auto grid grid-cols-1 md:grid-cols-12 gap-8 dark:border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="md:col-span-4">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-gray-200">
              About
            </h3>
            <Text className="text-gray-600 dark:text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Text>
            <div className="space-y-2">
              <div className="text-gray-600 dark:text-gray-400">
                <Text className="font-semibold">Email: </Text>
                <Text>patuan657@gmail.com</Text>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                <Text className="font-semibold">Phone: </Text>
                <Text>---.---.---.---</Text>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-gray-200">
              Quick Link
            </h3>
            <ul className="space-y-2">
              {footerItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                  >
                    <Text>{item.label}</Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-gray-200">
              Category
            </h3>
            <ul className="space-y-2">
              {categoryItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600"
                  >
                    <Text>{item.label}</Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Weekly Newsletter Section */}
          <div className="md:col-span-4 p-6 rounded-md bg-white dark:bg-gray-700">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 dark:text-gray-200">
              Weekly Newsletter
            </h3>
            <Text className="text-gray-600 dark:text-gray-400 mb-4">
              Get blog articles and offers via email
            </Text>
            <div className="space-y-4">
              <Input placeholder="Your Email" />
              <Button type="primary">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="2xl:w-[1366px] w-full m-auto mt-8 px-4">
          <div className="border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <Text className="text-gray-600 dark:text-gray-400 text-[13px] mb-4 md:mb-0">
              © JS Template 2023. All Rights Reserved.
            </Text>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600"
              >
                <Text>Terms of Use</Text>
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600"
              >
                <Text>Privacy Policy</Text>
              </Link>
              <Link
                href="/cookie"
                className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600"
              >
                <Text>Cookie Policy</Text>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default React.memo(Footer);
