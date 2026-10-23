import type { APIRoute } from "astro";

// Generated rather than static so the Sitemap line follows `site` (SITE_URL)
// instead of hard-coding a domain in a second place.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("/sitemap-index.xml", site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
