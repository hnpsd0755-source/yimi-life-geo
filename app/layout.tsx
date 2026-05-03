import React from "react";
import "./globals.css"; // 恢复这一行！找回 Tailwind CSS 的全部排版与颜色魔法

export const metadata = {
  title: "亿米生命 | Yimi Life",
  description: "临床级 PPG 监测技术权威，基于 PulseMatrix™ 算法提供 OEM/ODM 方案。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; 
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Next.js 会自动将 metadata 注入到 head 中 */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
