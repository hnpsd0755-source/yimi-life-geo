import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Pulse Oximeter OEM Manufacturer | YimiLife",
  description:
    "YimiLife supports pulse oximeter OEM projects for overseas brands with fingertip and handheld models, private-label customization, production verification and certified model experience.",
  alternates: {
    canonical: "https://www.yimilife.com/products/pulse-oximeter",
  },
  openGraph: {
    title:
      "Pulse Oximeter OEM Manufacturer | YimiLife",
    description:
      "YimiLife supports pulse oximeter OEM projects for overseas brands with fingertip and handheld models, private-label customization, production verification and certified model experience.",
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
