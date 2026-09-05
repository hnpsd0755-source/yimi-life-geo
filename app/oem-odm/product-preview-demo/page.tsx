import type { Metadata } from "next";

import { ProductPreviewDemo } from "./product-preview-demo";

export const metadata: Metadata = {
  title: "Product Color & Logo Preview Demo | YimiLife",
  description:
    "Standalone review demo for product color selection and local logo placement.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProductPreviewDemoPage() {
  return (
    <main className="min-h-screen bg-canvas text-slate-900">
      <ProductPreviewDemo />
    </main>
  );
}
