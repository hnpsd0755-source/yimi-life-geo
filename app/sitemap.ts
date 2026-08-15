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
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/oem-odm",
    priority: 0.95,
    changeFrequency: "monthly",
  },
  {
    path: "/manufacturing-quality",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/technology",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/about",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.9,
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
