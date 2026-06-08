import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async ({ isSsrBuild }) => ({
  plugins: [
    react(),
    // Skip Replit-specific plugins during SSR build and production
    ...(!isSsrBuild
      ? [
          runtimeErrorOverlay(),
          ...(process.env.NODE_ENV !== "production" &&
          process.env.REPL_ID !== undefined
            ? [
                await import("@replit/vite-plugin-cartographer").then((m) =>
                  m.cartographer(),
                ),
                await import("@replit/vite-plugin-dev-banner").then((m) =>
                  m.devBanner(),
                ),
              ]
            : []),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // SSR build outputs to dist/server; client build outputs to dist/public
    outDir: isSsrBuild
      ? path.resolve(import.meta.dirname, "dist/server")
      : path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    // manualChunks only applies to the client bundle
    ...(!isSsrBuild && {
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
            "motion": ["framer-motion"],
            "ui": [
              "@radix-ui/react-dialog",
              "@radix-ui/react-dropdown-menu",
              "@radix-ui/react-accordion",
              "@radix-ui/react-tabs",
              "@radix-ui/react-tooltip",
            ],
            "router": ["wouter"],
            "query": ["@tanstack/react-query"],
            "forms": ["react-hook-form", "@hookform/resolvers", "@hookform/resolvers/zod"],
            "validation": ["zod"],
          },
        },
      },
    }),
  },
  // Bundle these CJS-only packages into the SSR output so Node.js
  // doesn't hit ESM named-import errors when loading the server bundle.
  ssr: {
    noExternal: ["react-helmet-async"],
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}));
