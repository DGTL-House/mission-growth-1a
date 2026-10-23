// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// DGTL House — Mission Growth landing (mission-growth-1a).
// Scaffolded from nonprofit-next: static output, Tailwind v4 via the Vite
// plugin, stylesheet inlined into the page.
//
// `site` drives canonical / OG absolute URLs, robots.txt and the sitemap.
// SITE_URL overrides it (e.g. for a preview domain); the default is the
// production domain. https, not http: Vercel serves the site over TLS, and an
// http canonical would point crawlers at a redirect.
const site = process.env.SITE_URL ?? "https://mission-growth.dgtl-house.com";

export default defineConfig({
  site,
  integrations: [
    sitemap({
      // The booking confirmation page is noindex and not for search.
      filter: (page) => !page.includes("/thank-you"),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  // Single landing page → inline the stylesheet so first paint needs no extra
  // render-blocking CSS round-trip.
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
