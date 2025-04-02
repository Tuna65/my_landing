"use client";

import { store } from "@/lib/store";
import { Provider } from "react-redux";
import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainLayout>{children}</MainLayout>
    </Provider>
  );
} 