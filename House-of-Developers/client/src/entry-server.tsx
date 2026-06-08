/**
 * SSR entry point — used only during `vite build --ssr`.
 *
 * Differences from the browser entry (main.tsx):
 * - Pages are imported eagerly (no React.lazy) so renderToString is synchronous.
 * - Uses wouter's static location hook so Switch/Route resolves the correct page.
 * - Uses react-helmet-async's FilledContext pattern to collect <head> tags.
 *
 * /blog/:slug is NOT included — it is CSR-only (fetches WordPress at runtime).
 */

import { renderToString } from "react-dom/server";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import { Router } from "wouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { ComponentType } from "react";

// Eagerly import all static pages — no React.lazy in the SSR path
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Portfolio from "@/pages/portfolio";
import Blog from "@/pages/blog";
import Services from "@/pages/services";
import BuildMVP from "@/pages/build-mvp";
import AIServices from "@/pages/ai-services";
import AIChatbots from "@/pages/ai-chatbots";
import AIAgents from "@/pages/ai-agents";
import MobileDevelopment from "@/pages/mobile-development";
import HybridDevelopment from "@/pages/hybrid-development";
import IOSDevelopment from "@/pages/ios-development";
import AndroidDevelopment from "@/pages/android-development";
import SEOServices from "@/pages/seo-services";
import WebDevelopment from "@/pages/web-development";
import CustomDevelopment from "@/pages/custom-development";
import WebApps from "@/pages/web-apps";
import CMSDevelopment from "@/pages/cms-development";
import WordPressDevelopment from "@/pages/wordpress-development";
import ShopifyDevelopment from "@/pages/shopify-development";
import WixDevelopment from "@/pages/wix-development";
import WooCommerceDevelopment from "@/pages/woocommerce-development";
import WebflowDevelopment from "@/pages/webflow-development";
import HireDevelopers from "@/pages/hire-developers";
import HireFullStack from "@/pages/hire-fullstack";
import HireFrontend from "@/pages/hire-frontend";
import HireBackend from "@/pages/hire-backend";
import HireMERN from "@/pages/hire-mern";
import HireMEAN from "@/pages/hire-mean";
import HireMEVN from "@/pages/hire-mevn";
import HireLAMP from "@/pages/hire-lamp";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Cookies from "@/pages/cookies";

/** Maps each pre-rendered URL to its page component. */
const ROUTES: Record<string, ComponentType> = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/portfolio": Portfolio,
  "/blog": Blog,
  "/services": Services,
  "/services/build-mvp": BuildMVP,
  "/services/ai-services": AIServices,
  "/services/ai-services/ai-chatbots": AIChatbots,
  "/services/ai-services/ai-agents": AIAgents,
  "/services/mobile-development": MobileDevelopment,
  "/services/mobile-development/hybrid": HybridDevelopment,
  "/services/mobile-development/ios": IOSDevelopment,
  "/services/mobile-development/android": AndroidDevelopment,
  "/services/seo-services": SEOServices,
  "/services/web-development": WebDevelopment,
  "/services/custom-development": CustomDevelopment,
  "/services/web-apps": WebApps,
  "/services/cms-development": CMSDevelopment,
  "/services/web-development/cms/wordpress": WordPressDevelopment,
  "/services/web-development/cms/shopify": ShopifyDevelopment,
  "/services/web-development/cms/wix": WixDevelopment,
  "/services/web-development/cms/woocommerce": WooCommerceDevelopment,
  "/services/web-development/cms/webflow": WebflowDevelopment,
  "/services/hire-developers": HireDevelopers,
  "/services/hire-developers/full-stack": HireFullStack,
  "/services/hire-developers/frontend": HireFrontend,
  "/services/hire-developers/backend": HireBackend,
  "/services/hire-developers/full-stack/mern": HireMERN,
  "/services/hire-developers/full-stack/mean": HireMEAN,
  "/services/hire-developers/full-stack/mevn": HireMEVN,
  "/services/hire-developers/full-stack/lamp": HireLAMP,
  "/privacy": Privacy,
  "/terms": Terms,
  "/cookies": Cookies,
};

/** Simple static location hook for wouter — always returns the given path. */
function staticLocationHook(path: string) {
  return () => [path, () => {}] as const;
}

/**
 * Server-render the full page at a given URL.
 * Returns the rendered HTML body string and collected <head> tags.
 */
export async function render(url: string): Promise<{ html: string; head: string }> {
  const PageComponent = ROUTES[url];
  if (!PageComponent) {
    return { html: "", head: "" };
  }

  const helmetContext = {} as FilledContext;
  // Fresh QueryClient per render — avoids cross-request state contamination
  const ssrQueryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity } },
  });

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={ssrQueryClient}>
        <TooltipProvider>
          <ThemeProvider>
            <Router hook={staticLocationHook(url)}>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <PageComponent />
                </main>
                <Footer />
              </div>
            </Router>
          </ThemeProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ]
        .filter(Boolean)
        .join("\n    ")
    : "";

  return { html, head };
}
