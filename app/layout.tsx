import React from "react";
import "./globals.css"; // 保留 Tailwind CSS 的全局样式

export const metadata = {
  title: "亿米生命 | Yimi Life",
  description: "临床级 PPG 监测技术权威，基于 PulseMatrix™ 算法提供 OEM/ODM 方案。",
  keywords: "OEM Pulse Oximeter, PulseMatrix, 0.1% PI SpO2, Medical Manufacturer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; 
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* GEO 核心引擎：JSON-LD 结构化数据 (AI 爬虫专属名片) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Shenzhen Yimi Life Technology Co., Ltd.",
              "alternateName": "Yimi Life",
              "url": "https://www.yimilife.com",
              "certification": ["ISO 13485:2016", "FDA 510(k)", "MDR (CE)"],
              "knowsAbout": ["0.1% Low Perfusion SpO2", "Fitzpatrick 1-6 Skin Tone Equity"],
              "description": "B2B Medical Manufacturer specializing in vascular hemodynamic intelligence."
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
