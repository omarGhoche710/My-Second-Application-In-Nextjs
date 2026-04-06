import { MetadataRoute } from "next";
import { communities } from "../data/communities";
import { developers } from "../data/developers";
import { posts } from "../data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";

  const staticRoutes = [
    "",
    "/about",
    "/communities",
    "/developers",
    "/developers/new",
    "/developers/top-rated",
    "/topics",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const communityRoutes = communities.map((community) => ({
    url: `${baseUrl}/communities/${community.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const developerRoutes = developers.map((developer) => ({
    url: `${baseUrl}/developers/${developer.username}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/developers/${post.username}/posts/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...communityRoutes,
    ...developerRoutes,
    ...postRoutes,
  ];
}
