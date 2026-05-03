import React from "react";
// import "./globals.css"; // ⚠️重要提示：如果您的项目有 globals.css 全局样式文件（比如 Tailwind 的配置），请务必取消这一行的注释。

export const metadata = {
  title: "亿米生命 | Yimi Life",
  description: "临床级 PPG 监测技术权威，基于 PulseMatrix™ 算法提供 OEM/ODM 方案。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // 这里就是修复报错的关键点：明确告诉 TS children 是 ReactNode 类型
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
