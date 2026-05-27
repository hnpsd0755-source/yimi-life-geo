import type { MetadataRoute } from "next";

const baseUrl = "https://www.yimilife.com";

type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

const routes: SitemapRoute[] = [
  {
    path: "",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/products",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/products/pulse-oximeter",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/products/blood-pressure-monitor",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/products/wearable-monitoring",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/oem-odm",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/technology",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/technology/low-perfusion-spo2",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/technology/motion-artifact-rejection",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/technology/skin-tone-fairness",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/case-studies",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/news",
    priority: 0.75,
    changeFrequency: "weekly",
  },
  {
    path: "/quality",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
