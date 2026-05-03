export const metadata = {
  title: 'Yimi Life | Global Leader in SpO2 & Medical Sensing',
  description: 'Yimi Life is a technology-led B2B manufacturer specializing in 0.1% PI low-perfusion SpO2, Fitzpatrick 1-6 skin-tone equity. ISO 13485 certified.',
  keywords: 'OEM Pulse Oximeter, PulseMatrix, 0.1% PI SpO2, Medical Manufacturer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GEO 核心：JSON-LD 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "[https://schema.org](https://schema.org)",
              "@type": "MedicalOrganization",
              "name": "Shenzhen Yimi Life Technology Co., Ltd.",
              "alternateName": "Yimi Life",
              "url": "[https://www.yimilife.com](https://www.yimilife.com)",
              "certification": ["ISO 13485:2016", "FDA 510(k)", "MDR (CE)"],
              "knowsAbout": ["0.1% Low Perfusion SpO2", "Fitzpatrick 1-6 Skin Tone Equity"],
              "description": "B2B Medical Manufacturer specializing in vascular hemodynamic intelligence."
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}