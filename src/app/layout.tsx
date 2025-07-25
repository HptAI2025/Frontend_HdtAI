import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HDT AI - Giải pháp Trí tuệ Nhân tạo Tiên phong",
  description: "Tăng tốc hiệu suất – tiết kiệm chi phí – đột phá sáng tạo với đội ngũ AI của bạn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}