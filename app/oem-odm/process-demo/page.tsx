import type { Metadata } from "next";
import { OemOdmProcessFlow } from "../oem-odm-process-flow";

export const metadata: Metadata = {
  title: "OEM/ODM Project Flow Demo | YimiLife",
  description: "Standalone review demo for the YimiLife OEM and ODM project flow section.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OemOdmProcessDemoPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <OemOdmProcessFlow headingLevel="h1" />
    </main>
  );
}
