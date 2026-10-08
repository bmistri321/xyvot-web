export default function sitemap() {
  const baseUrl = "https://www.xyvot.com";
  const now = new Date();
  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
