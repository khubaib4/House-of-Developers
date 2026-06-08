/**
 * Pre-renders all static routes to HTML at build time.
 *
 * Run after `vite build`:  tsx scripts/prerender.ts
 *
 * For each route:
 *   1. Calls the SSR render function (entry-server.tsx)
 *   2. Reads dist/public/index.html as the HTML template
 *   3. Injects rendered body HTML and route-specific <head> tags
 *   4. Writes dist/public/<route>/index.html
 *
 * /blog/:slug stays CSR (dynamic — fetches from WordPress at runtime).
 */

import { register } from "node:module";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

// Register the asset mock loader BEFORE entry-server is dynamically imported.
// This must come before `await import('../client/src/entry-server')` so that
// any .svg / .png / .jpg imports inside the React component tree are handled
// gracefully by Node.js instead of throwing ERR_UNKNOWN_FILE_EXTENSION.
register("./asset-loader.mjs", import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.resolve(root, "dist/public");

/** All static routes to pre-render. /blog/:slug is excluded (CSR). */
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

  const templatePath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(
      `dist/public/index.html not found. Run "vite build" first.`
    );
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  // Dynamically import the SSR render function — tsx handles TSX/JSX
  const { render } = await import("../client/src/entry-server");

  let ok = 0;
  let fail = 0;

  for (const route of ROUTES) {
    try {
      process.stdout.write(`  Rendering ${route} ...`);
      const { html, head } = await render(route);

      // Inject route-specific <head> tags just before </head>
      let output = head
        ? template.replace("</head>", `    ${head}\n  </head>`)
        : template;

      // Inject rendered HTML into the root div
      output = output.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      );

      // Determine output path
      const routeSegment = route === "/" ? "" : route.slice(1); // strip leading /
      const outDir = path.resolve(distDir, routeSegment);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.resolve(outDir, "index.html"), output, "utf-8");

      console.log(` ✓`);
      ok++;
    } catch (err) {
      console.log(` ✗`);
      console.error(`    Error: ${(err as Error).message}`);
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
