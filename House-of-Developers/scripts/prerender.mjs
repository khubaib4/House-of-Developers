/**
 * Pre-renders all static routes to HTML at build time.
 *
 * Run AFTER both vite builds complete:
 *   vite build                                  → dist/public/  (client bundle)
 *   vite build --ssr src/entry-server.tsx        → dist/server/  (SSR bundle)
 *   node scripts/prerender.mjs                  → writes per-route index.html files
 *
 * /blog/:slug stays CSR (dynamic — fetches WordPress at runtime).
 */

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distPublic = path.resolve(root, "dist/public");
const serverEntry = path.resolve(root, "dist/server/entry-server.js");

/** All static routes to pre-render. /blog/:slug excluded (CSR). */
const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/portfolio",
  "/blog",
  "/services",
  "/services/build-mvp",
  "/services/ai-services",
  "/services/ai-services/ai-chatbots",
  "/services/ai-services/ai-agents",
  "/services/mobile-development",
  "/services/mobile-development/hybrid",
  "/services/mobile-development/ios",
  "/services/mobile-development/android",
  "/services/seo-services",
  "/services/web-development",
  "/services/custom-development",
  "/services/web-apps",
  "/services/cms-development",
  "/services/web-development/cms/wordpress",
  "/services/web-development/cms/shopify",
  "/services/web-development/cms/wix",
  "/services/web-development/cms/woocommerce",
  "/services/web-development/cms/webflow",
  "/services/hire-developers",
  "/services/hire-developers/full-stack",
  "/services/hire-developers/frontend",
  "/services/hire-developers/backend",
  "/services/hire-developers/full-stack/mern",
  "/services/hire-developers/full-stack/mean",
  "/services/hire-developers/full-stack/mevn",
  "/services/hire-developers/full-stack/lamp",
  "/privacy",
  "/terms",
  "/cookies",
];

async function prerender() {
  console.log("\n[prerender] Starting static site generation...\n");

  if (!fs.existsSync(serverEntry)) {
    throw new Error(
      `SSR bundle not found at ${serverEntry}.\nRun "vite build --ssr src/entry-server.tsx" first.`
    );
  }

  const templatePath = path.resolve(distPublic, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client HTML template not found at ${templatePath}.`);
  }
  // Read the template ONCE from the vite-built index.html and keep a
  // pristine copy so that running this script multiple times never
  // "stacks" helmet tags from a previous run's rendered homepage.
  const template = fs.readFileSync(templatePath, "utf-8");
  // Detect if this file was already pre-rendered (has data-rh tags) and bail
  // early with a helpful message rather than double-injecting.
  if (template.includes('data-rh="true"')) {
    throw new Error(
      [
        "dist/public/index.html already contains pre-rendered content.",
        "Run 'npm run build:vercel' (full build) instead of the prerender",
        "script directly to avoid stacking SSR tags.",
      ].join(" ")
    );
  }

  const { render } = await import(serverEntry);

  let ok = 0;
  let fail = 0;

  for (const route of ROUTES) {
    try {
      process.stdout.write(`  Rendering ${route} ...`);
      const { html, head } = await render(route);

      // Strip the static homepage SEO block from the template so the
      // route-specific helmet tags don't duplicate title/description/canonical.
      // The block starts with "<!-- Static SEO" and ends before the CSS link.
      let routeTemplate = template.replace(
        /[ \t]*<!-- Static SEO[\s\S]*?(?=\n\s*<!--|\n\s*<link rel="stylesheet"|\n\s*<script)/,
        ""
      );

      // Inject route-specific <head> tags just before </head>
      let output = head
        ? routeTemplate.replace("</head>", `    ${head}\n  </head>`)
        : routeTemplate;

      // Inject rendered body HTML into the root div
      output = output.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Determine output path
      const routeSegment = route === "/" ? "" : route.slice(1);
      const outDir = path.resolve(distPublic, routeSegment);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.resolve(outDir, "index.html"), output, "utf-8");

      console.log(` ✓`);
      ok++;
    } catch (err) {
      console.log(` ✗`);
      console.error(`    Error: ${err.message}`);
      fail++;
    }
  }

  console.log(
    `\n[prerender] Done — ${ok} routes pre-rendered, ${fail} failed.\n`
  );

  if (fail > 0) {
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error("[prerender] Fatal error:", err);
  process.exit(1);
});
