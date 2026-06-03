import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const base = "https://beastcreativeagency.com";

// Auto-discover blog posts: every subdirectory of app/blog is a published post.
// Generated at build time so the sitemap never drifts as posts are added/removed.
function blogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "app", "blog");
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/cpg`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    // Local SEO landing pages — the local San Antonio positioning hinges on these
    { url: `${base}/services/seo-san-antonio`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/web-design-san-antonio`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/logo-design-san-antonio`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/seo-aeo`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/cpg-marketing`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/paid-media`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/content-production`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/branding`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/web-design`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/sun-bird`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/williams-bts`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/williams-allstars`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/sweet-sensi`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/work/pioneer`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/coinline`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work/williams-bowl`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly", priority: 0.75 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const blogPosts: MetadataRoute.Sitemap = blogSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...corePages, ...blogPosts];
}
