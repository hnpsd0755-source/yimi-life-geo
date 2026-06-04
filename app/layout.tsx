import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yimilife.com"),
  title: {
    default:
      "YimiLife | Medical Device OEM/ODM Manufacturer for Home Healthcare Monitoring",
    template: "%s",
  },
  description:
    "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer in China, supporting mature pulse oximeter and blood pressure monitor platforms with private-label customization, production verification and engineering support.",
  applicationName: "YimiLife",
  authors: [
    {
      name: "Shenzhen YimiLife Technology Co., Ltd.",
    },
  ],
  creator: "Shenzhen YimiLife Technology Co., Ltd.",
  publisher: "Shenzhen YimiLife Technology Co., Ltd.",
  keywords: [
    "medical device OEM/ODM manufacturer",
    "medical device manufacturer China",
    "home healthcare device manufacturer",
    "pulse oximeter OEM manufacturer",
    "blood pressure monitor OEM manufacturer",
    "private label medical device manufacturer",
    "ISO 13485 medical device manufacturer",
    "PulseMatrix SpO2 technology",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "YimiLife",
    url: "https://www.yimilife.com",
    title:
      "YimiLife | Medical Device OEM/ODM Manufacturer for Home Healthcare Monitoring",
    description:
      "ISO 13485 medical device OEM/ODM manufacturing for pulse oximeters and blood pressure monitors, supported by private-label customization, production verification and engineering execution.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.yimilife.com/#organization",
  name: "Shenzhen YimiLife Technology Co., Ltd.",
  alternateName: "YimiLife",
  url: "https://www.yimilife.com",
  brand: {
    "@type": "Brand",
    name: "YimiLife",
  },
  description:
    "YimiLife is an ISO 13485 medical device OEM/ODM manufacturer in Shenzhen, China, supporting mature pulse oximeter and blood pressure monitor platforms, with selected wearable monitoring project discussions at the engineering-sample stage.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Shenzhen",
    addressCountry: "CN",
  },
  knowsAbout: [
    "Medical device OEM/ODM manufacturing",
    "Pulse oximeter manufacturing",
    "Blood pressure monitor manufacturing",
    "Development-stage wearable monitoring projects",
    "SpO2 monitoring",
    "Low perfusion SpO2",
    "Motion artifact rejection",
    "Skin-tone-aware signal design",
    "Bluetooth SDK integration",
    "ISO 13485 quality management system",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.yimilife.com/#website",
  url: "https://www.yimilife.com",
  name: "YimiLife",
  publisher: {
    "@id": "https://www.yimilife.com/#organization",
  },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
