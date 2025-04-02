import "./globals.css";
import { Metadata } from "next";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "Tuna65",
  description: "Tổng hợp những tiện ích hay ho",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-transparent">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
