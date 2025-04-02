"use client";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import "./globals.css";
import MainLayout from "./layout/MainLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-transparent">
        <Provider store={store}>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
