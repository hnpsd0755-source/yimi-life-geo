import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Pulse Oximeter OEM/ODM Product Family | YimiLife Medical Device Manufacturer",
  description:
    "Review YimiLife pulse oximeter OEM/ODM product architecture, fingertip and handheld SpO2 configurations, certification capability, and manufacturing capacity.",
  alternates: {
    canonical: "https://www.yimilife.com/products/pulse-oximeter",
  },
  openGraph: {
    title:
      "Pulse Oximeter OEM/ODM Product Family | YimiLife Medical Device Manufacturer",
    description:
      "Review YimiLife pulse oximeter OEM/ODM product architecture, fingertip and handheld SpO2 configurations, certification capability, and manufacturing capacity.",
    url: "https://www.yimilife.com/products/pulse-oximeter",
    siteName: "YimiLife",
    type: "website",
  },
};

export default function PulseOximeterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
