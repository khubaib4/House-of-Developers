import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCallButton } from "@/components/ui/StickyCallButton";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "wouter";

const Home = lazy(() => import("@/pages/home"));
const ServicesPage = lazy(() => import("@/pages/services"));
const BuildMVPPage = lazy(() => import("@/pages/build-mvp"));
const ContactPage = lazy(() => import("@/pages/contact"));
const AIServicesPage = lazy(() => import("@/pages/ai-services"));
const MobileDevelopmentPage = lazy(() => import("@/pages/mobile-development"));
const SEOServicesPage = lazy(() => import("@/pages/seo-services"));
const WebDevelopmentPage = lazy(() => import("@/pages/web-development"));
const CustomDevelopmentPage = lazy(() => import("@/pages/custom-development"));
const WebAppsPage = lazy(() => import("@/pages/web-apps"));
const CMSDevelopmentPage = lazy(() => import("@/pages/cms-development"));
const HireDevelopersPage = lazy(() => import("@/pages/hire-developers"));
const WordPressDevelopmentPage = lazy(() => import("@/pages/wordpress-development"));
const ShopifyDevelopmentPage = lazy(() => import("@/pages/shopify-development"));
const WixDevelopmentPage = lazy(() => import("@/pages/wix-development"));
const WooCommerceDevelopmentPage = lazy(() => import("@/pages/woocommerce-development"));
const WebflowDevelopmentPage = lazy(() => import("@/pages/webflow-development"));
const HybridDevelopmentPage = lazy(() => import("@/pages/hybrid-development"));
const IOSDevelopmentPage = lazy(() => import("@/pages/ios-development"));
const AndroidDevelopmentPage = lazy(() => import("@/pages/android-development"));
const HireFullStackPage = lazy(() => import("@/pages/hire-fullstack"));
const HireFrontendPage = lazy(() => import("@/pages/hire-frontend"));
const HireBackendPage = lazy(() => import("@/pages/hire-backend"));
const HireMERNPage = lazy(() => import("@/pages/hire-mern"));
const HireMEANPage = lazy(() => import("@/pages/hire-mean"));
const HireMEVNPage = lazy(() => import("@/pages/hire-mevn"));
const HireLAMPPage = lazy(() => import("@/pages/hire-lamp"));
const AIChatbotsPage = lazy(() => import("@/pages/ai-chatbots"));
const AIAgentsPage = lazy(() => import("@/pages/ai-agents"));
const AboutPage = lazy(() => import("@/pages/about"));
const CaseStudiesPage = lazy(() => import("@/pages/case-studies"));
const ComponentDemo = lazy(() => import("@/pages/component-demo"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-[3px] border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
        <Route path="/demo" component={ComponentDemo} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
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
