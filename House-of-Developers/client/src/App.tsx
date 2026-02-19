import { Switch, Route } from "wouter";
import { Helmet } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import BuildMVPPage from "@/pages/build-mvp";
import ContactPage from "@/pages/contact";
import AIServicesPage from "@/pages/ai-services";
import MobileDevelopmentPage from "@/pages/mobile-development";
import SEOServicesPage from "@/pages/seo-services";
import WebDevelopmentPage from "@/pages/web-development";
import CustomDevelopmentPage from "@/pages/custom-development";
import WebAppsPage from "@/pages/web-apps";
import CMSDevelopmentPage from "@/pages/cms-development";
import HireDevelopersPage from "@/pages/hire-developers";
import WordPressDevelopmentPage from "@/pages/wordpress-development";
import ShopifyDevelopmentPage from "@/pages/shopify-development";
import WixDevelopmentPage from "@/pages/wix-development";
import WooCommerceDevelopmentPage from "@/pages/woocommerce-development";
import WebflowDevelopmentPage from "@/pages/webflow-development";
import HybridDevelopmentPage from "@/pages/hybrid-development";
import IOSDevelopmentPage from "@/pages/ios-development";
import AndroidDevelopmentPage from "@/pages/android-development";
import HireFullStackPage from "@/pages/hire-fullstack";
import HireFrontendPage from "@/pages/hire-frontend";
import HireBackendPage from "@/pages/hire-backend";
import HireMERNPage from "@/pages/hire-mern";
import HireMEANPage from "@/pages/hire-mean";
import HireMEVNPage from "@/pages/hire-mevn";
import HireLAMPPage from "@/pages/hire-lamp";
import AIChatbotsPage from "@/pages/ai-chatbots";
import AIAgentsPage from "@/pages/ai-agents";
import AboutPage from "@/pages/about";
import CaseStudiesPage from "@/pages/case-studies";
import BlogPage from "@/pages/blog";
import BlogPostPage from "@/pages/blog-post";
import ComponentDemo from "@/pages/component-demo";
import { StickyCallButton } from "@/components/ui/StickyCallButton";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/build-mvp" component={BuildMVPPage} />
      <Route path="/services/ai-services" component={AIServicesPage} />
      <Route path="/services/ai-services/ai-chatbots" component={AIChatbotsPage} />
      <Route path="/services/ai-services/ai-agents" component={AIAgentsPage} />
      <Route path="/services/mobile-development" component={MobileDevelopmentPage} />
      <Route path="/services/mobile-development/hybrid" component={HybridDevelopmentPage} />
      <Route path="/services/mobile-development/ios" component={IOSDevelopmentPage} />
      <Route path="/services/mobile-development/kotlin" component={AndroidDevelopmentPage} />
      <Route path="/services/seo-services" component={SEOServicesPage} />
      <Route path="/services/web-development" component={WebDevelopmentPage} />
      <Route path="/services/custom-development" component={CustomDevelopmentPage} />
      <Route path="/services/web-apps" component={WebAppsPage} />
      <Route path="/services/cms-development" component={CMSDevelopmentPage} />
      <Route path="/services/web-development/cms/wordpress" component={WordPressDevelopmentPage} />
      <Route path="/services/web-development/cms/shopify" component={ShopifyDevelopmentPage} />
      <Route path="/services/web-development/cms/wix" component={WixDevelopmentPage} />
      <Route path="/services/web-development/cms/woocommerce" component={WooCommerceDevelopmentPage} />
      <Route path="/services/web-development/cms/webflow" component={WebflowDevelopmentPage} />
      <Route path="/services/hire-developers" component={HireDevelopersPage} />
      <Route path="/services/hire-developers/full-stack" component={HireFullStackPage} />
      <Route path="/services/hire-developers/frontend" component={HireFrontendPage} />
      <Route path="/services/hire-developers/backend" component={HireBackendPage} />
      <Route path="/services/hire-developers/full-stack/mern" component={HireMERNPage} />
      <Route path="/services/hire-developers/full-stack/mean" component={HireMEANPage} />
      <Route path="/services/hire-developers/full-stack/mevn" component={HireMEVNPage} />
      <Route path="/services/hire-developers/full-stack/lamp" component={HireLAMPPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />
      <Route path="/demo" component={ComponentDemo} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Helmet>
            <meta name="google-site-verification" content="cHAe-qCXTsqbOR8m8e2TLq78-eEIbnGh3LQmVkPuwg4" />
          </Helmet>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <StickyCallButton />
          <Toaster />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
