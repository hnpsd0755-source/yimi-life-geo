import type { Metadata } from "next";

import { OemOdmExperience } from "./oem-odm-experience";

export const metadata: Metadata = {
  title: "Medical Device OEM ODM Services | YimiLife",
  description:
    "Choose an OEM path for existing YimiLife medical device models or submit an ODM brief for appearance, structure, function, tooling and engineering prototype projects.",
  alternates: {
    canonical: "https://www.yimilife.com/oem-odm",
  },
  openGraph: {
    title: "Medical Device OEM ODM Services | YimiLife",
    description:
      "OEM model selection and brand preview for existing products, plus ODM project review for new appearance, structure and function requirements.",
    url: "https://www.yimilife.com/oem-odm",
    siteName: "YimiLife",
    type: "website",
  },
};

const faqs = [
  {
    question: "How do I choose between OEM and ODM?",
    answer:
      "Choose OEM when you want to start from an existing YimiLife model and use its available colors and configuration options. Choose ODM when the project requires a new appearance, structural modification, function development, tooling or an engineering prototype.",
  },
  {
    question: "Which models and colors are available for OEM?",
    answer:
      "The final selector will only show confirmed models and the existing colors available for each model. The model names, colors and illustrations in the current interactive demo are placeholders for layout and workflow review.",
  },
  {
    question: "What appears in the instant OEM preview?",
    answer:
      "The instant preview shows the selected product, an available product color and the uploaded logo in a preset position. It is an early communication preview rather than a final artwork, material or production confirmation.",
  },
  {
    question:
      "How are packaging, labels, IFU, accessories and product options handled?",
    answer:
      "These requirements can be selected and included in the inquiry summary, but they do not generate an instant visual result. YimiLife will confirm the required scope and inputs before preparing related artwork or samples.",
  },
  {
    question: "Which logo file formats are accepted?",
    answer:
      "The OEM preview accepts one PNG, JPG or JPEG file up to 2 MB. The file can be replaced or removed before submission. A transparent-background PNG is recommended when available.",
  },
  {
    question: "What information is needed before an ODM feasibility review?",
    answer:
      "Share the product category, target market, required appearance, structure or function changes, expected quantity and a concise project brief. YimiLife will review the project scope and the next feasibility discussion path.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.yimilife.com/oem-odm#service",
      name: "Medical Device OEM ODM Services",
      provider: {
        "@id": "https://www.yimilife.com/#organization",
      },
      serviceType: "Medical Device OEM ODM Manufacturing",
      areaServed: "Global",
      description:
        "YimiLife supports OEM projects based on existing medical device models and reviews ODM projects involving appearance, structure, function, tooling and engineering prototypes.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.yimilife.com/oem-odm#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function OemOdmPage() {
  return (
    <main className="min-h-screen bg-canvas text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OemOdmExperience faqs={faqs} />
    </main>
  );
}
