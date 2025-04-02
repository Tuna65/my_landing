import Link from "next/link";
import React from "react";
import Text from "@/components/Text";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 my-6">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-500 mb-4">404</h1>
        <Text className="text-2xl font-semibold mb-4">Oops! Trang không tồn tại</Text>
        <Text className="text-gray-600 dark:text-gray-400 mb-8">
          Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
        </Text>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
} 