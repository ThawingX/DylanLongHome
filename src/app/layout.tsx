import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 产品经理 | 个人网站",
  description: "AI产品经理个人网站，展示AI产品规划、设计和管理经验与案例。专注于以用户为中心的AI产品开发、数据驱动决策和创新设计思维。",
  keywords: "AI产品经理, 人工智能, 产品管理, 用户体验, UX, 产品设计, 数据分析",
  authors: [{ name: "AI产品经理" }],
  creator: "AI产品经理",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FCD40B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
