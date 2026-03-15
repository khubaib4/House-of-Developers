import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  TrendingUp,
  Zap,
  Award,
  Smartphone,
  ArrowRight,
  Loader2,
  ImageOff,
  AlertTriangle,
  DollarSign,
  ShoppingBag,
  ShoppingCart,
  Calendar,
  Users,
  Repeat,
  Package,
  Truck,
  Settings,
  Store,
  Infinity,
  Home,
  Heart,
  Download,
  Code2,
  Headphones,
  Target,
  CreditCard,
  Wallet,
  Send,
  Mail,
  BarChart3,
  Cloud,
  Search,
  Palette,
  Rocket,
  Globe,
  Map,
  Plus,
  Star,
  Layers,
} from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TechStackIcons } from "@/components/ui/TechStackIcons";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";

const WOO_COLOR = "#96588A";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const featurePills = [
  { label: "No Limits", icon: Infinity },
  { label: "0% Fees", icon: DollarSign },
  { label: "Full Control", icon: Settings },
  { label: "5M+ Stores", icon: Store },
];

const solutions = [
  {
    icon: ShoppingBag,
    title: "Product Stores",
    description: "Physical and digital product catalogs with payment processing and shipping.",
    features: ["Unlimited products", "Inventory management", "Multiple payment gateways", "Shipping zones & rates"],
  },
  {
    icon: Repeat,
    title: "Subscription Stores",
    description: "Recurring revenue with subscription products and membership plans.",
    features: ["WooCommerce Subscriptions", "Recurring billing", "Free trials & signup fees", "Customer account management"],
  },
  {
    icon: Users,
    title: "Multi-Vendor Marketplaces",
    description: "Create platforms where multiple vendors can sell their products.",
    features: ["Vendor registration", "Commission management", "Vendor dashboards", "Split payments"],
  },
];

const woocommerceTechnologies = [
  { name: "WordPress", slug: "wordpress" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "PHP", slug: "php" },
  { name: "MySQL", slug: "mysql" },
  { name: "Stripe", slug: "stripe" },
  { name: "PayPal", slug: "paypal" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Redis", slug: "redis" },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "WordPress & WooCommerce Setup",
    points: [
      "WordPress installation, hosting, and WooCommerce plugin setup",
      "Theme selection, customization, and payment gateway configuration",
      "SSL certificate and security configuration",
    ],
  },
  {
    icon: Palette,
    title: "Store Build & Products",
    points: [
      "Custom store design with product catalog creation",
      "Product uploads with categories, attributes, and variants",
      "Shipping zones, methods, and delivery configuration",
    ],
  },
  {
    icon: Code2,
    title: "Features & Extensions",
    points: [
      "WooCommerce extensions for subscriptions, bookings, and more",
      "Email marketing integration and inventory management",
      "Tax configuration, coupon setup, and discount rules",
    ],
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    points: [
      "Checkout flow and payment gateway end-to-end testing",
      "Performance optimization and SEO setup",
      "Store launch, team training, and handover",
    ],
  },
];

const resultMetrics = [
  { icon: Target, label: "Conversion Rate", before: "1.5%", after: "3.8%", improvement: "+153%" },
  { icon: ShoppingCart, label: "Avg Order Value", before: "\u00a342", after: "\u00a389", improvement: "+112%" },
  { icon: ShoppingBag, label: "Cart Abandonment", before: "75%", after: "48%", improvement: "36% lower" },
  { icon: Smartphone, label: "Mobile Sales", before: "35%", after: "62%", improvement: "+77%" },
  { icon: Zap, label: "Page Load Time", before: "4.5s", after: "1.6s", improvement: "64% faster" },
  { icon: TrendingUp, label: "Monthly Revenue", before: "\u00a318K", after: "\u00a367K", improvement: "+272%" },
];

const useCases = [
  {
    industry: "Home & Garden",
    title: "Furniture E-Commerce",
    description: "WooCommerce store with 2,000+ products, custom shipping calculator",
    results: ["\u00a3150K/month", "4.2% conversion"],
    icon: Home,
  },
  {
    industry: "Supplements",
    title: "Subscription Supplement Store",
    description: "WooCommerce Subscriptions with auto-replenishment",
    results: ["3,000 subscribers", "\u00a380K MRR"],
    icon: Heart,
  },
  {
    industry: "Digital Products",
    title: "Course & Template Marketplace",
    description: "Digital downloads with automatic delivery and licensing",
    results: ["\u00a345K first quarter", "No inventory costs"],
    icon: Download,
  },
];

const whyChooseValues = [
  { icon: Award, title: "WooCommerce Experts", description: "Official WooCommerce partner with 40+ successful stores", stat: "40+ Stores" },
  { icon: Code2, title: "Custom Development", description: "We build custom features beyond standard plugins" },
  { icon: Zap, title: "Performance First", description: "Optimized for speed and high traffic", stat: "<2s Load Time" },
  { icon: DollarSign, title: "No Transaction Fees", description: "Keep 100% of your revenue (unlike Shopify's 2%)" },
  { icon: Infinity, title: "Unlimited Scale", description: "Handle thousands of products and orders" },
  { icon: Headphones, title: "Ongoing Support", description: "Monthly maintenance and feature updates" },
];

const faqs = [
  { q: "What's the difference between WooCommerce and Shopify?", a: "WooCommerce is a WordPress plugin (open-source, self-hosted) with no transaction fees and unlimited customization. Shopify is a hosted platform (easier setup) with monthly fees and transaction fees. WooCommerce gives you more control; Shopify is simpler." },
  { q: "Do I need to pay monthly fees for WooCommerce?", a: "WooCommerce itself is free. You pay for hosting (\u00a310-50/month), domain, SSL certificate, and any premium extensions you need. No transaction fees on sales." },
  { q: "Can WooCommerce handle thousands of products?", a: "Yes! With proper hosting and optimization, WooCommerce can handle 10,000+ products and high traffic volumes. We've built stores with 50,000+ products." },
  { q: "What payment gateways does WooCommerce support?", a: "All major gateways: Stripe, PayPal, Square, Authorize.net, and 100+ others. We'll integrate whichever you prefer." },
  { q: "Can I sell subscriptions with WooCommerce?", a: "Yes! The WooCommerce Subscriptions extension enables recurring billing, subscription products, free trials, and automatic renewals." },
  { q: "Is WooCommerce secure?", a: "Yes, when properly configured. We implement SSL, PCI compliance, regular updates, security plugins, and follow WooCommerce security best practices." },
  { q: "Can you migrate my Shopify store to WooCommerce?", a: "Yes! We migrate products, customers, orders, and maintain your SEO. Common reasons to switch: lower costs, more customization, no transaction fees." },
  { q: "Do you provide training on managing the store?", a: "Yes! We train you on adding products, managing orders, processing refunds, creating coupons, and all day-to-day store management tasks." },
  { q: "What hosting do you recommend for WooCommerce?", a: "We recommend managed WordPress hosting like WP Engine, Kinsta, or SiteGround for WooCommerce. We can set this up for you or work with your existing host." },
  { q: "Can you build custom features not available in plugins?", a: "Absolutely! We develop custom WooCommerce extensions for unique requirements\u2014custom checkout flows, wholesale pricing, marketplace features, API integrations, etc." },
];

function WooCommerceStoreMockup() {
  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <div className="bg-muted h-8 flex items-center gap-2 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-xs text-muted-foreground ml-2">mystore.com</span>
        </div>

        <div className="bg-white dark:bg-[#0d0d1a]">
          <div className="bg-[#96588A] px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-white" />
              <span className="text-xs font-semibold text-white">My Store</span>
            </div>
            <div className="flex items-center gap-3">
              {["Shop", "Categories", "Sale"].map((n) => (
                <span key={n} className="text-[9px] text-white/70">{n}</span>
              ))}
              <div className="relative">
                <ShoppingCart className="h-3.5 w-3.5 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white text-[7px] text-[#96588A] flex items-center justify-center font-bold">3</div>
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: "Leather Bag", price: "\u00a389.99", color: "bg-amber-100 dark:bg-amber-900/30" },
                { name: "Sneakers", price: "\u00a3124.99", color: "bg-blue-100 dark:bg-blue-900/30" },
                { name: "Watch", price: "\u00a3249.99", color: "bg-gray-100 dark:bg-gray-800/50" },
              ].map((product) => (
                <div key={product.name} className="rounded-md overflow-hidden border border-border/50">
                  <div className={`${product.color} h-14 flex items-center justify-center`}>
                    <ShoppingBag className="h-5 w-5 text-muted-foreground/50" />
                  </div>
                  <div className="p-1.5 bg-white dark:bg-[#0d0d1a]">
                    <span className="text-[8px] font-medium text-gray-700 dark:text-gray-300 block">{product.name}</span>
                    <span className="text-[9px] font-bold text-[#96588A]">{product.price}</span>
                    <div className="mt-1 bg-[#96588A] text-white text-[6px] text-center py-0.5 rounded-sm cursor-default">Add to Cart</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2">
              {[
                { name: "Headphones", price: "\u00a359.99", color: "bg-indigo-100 dark:bg-indigo-900/30" },
                { name: "Sunglasses", price: "\u00a345.99", color: "bg-rose-100 dark:bg-rose-900/30" },
              ].map((product) => (
                <div key={product.name} className="rounded-md overflow-hidden border border-border/50 flex">
                  <div className={`${product.color} w-10 flex items-center justify-center flex-shrink-0`}>
                    <ShoppingBag className="h-3 w-3 text-muted-foreground/50" />
                  </div>
                  <div className="p-1.5 flex-1 bg-white dark:bg-[#0d0d1a]">
                    <span className="text-[8px] font-medium text-gray-700 dark:text-gray-300 block">{product.name}</span>
                    <span className="text-[9px] font-bold text-[#96588A]">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border px-3 py-2 flex items-center justify-between bg-gray-50 dark:bg-[#111]">
            <div className="flex items-center gap-1.5">
              <CreditCard className="h-3 w-3 text-[#96588A]" />
              <span className="text-[8px] text-muted-foreground">Secure Checkout</span>
            </div>
            <div className="flex gap-1">
              <CreditCard className="h-3 w-3" />
              <Wallet className="h-3 w-3" />
            </div>
          </div>
        </div>
      </Card>

      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Badge className="bg-[#96588A] text-white border-0 shadow-lg text-xs">WordPress Powered</Badge>
      </motion.div>
      <motion.div
        className="absolute -bottom-3 -left-3 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Badge className="bg-[#96588A] text-white border-0 shadow-lg text-xs">Unlimited Products</Badge>
      </motion.div>
    </div>
  );
}

function OldStoreMockup() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-red-200 dark:border-red-900 aspect-video p-4 md:p-6 flex flex-col text-left overflow-hidden">
      <div className="border-b-2 border-gray-400 dark:border-gray-600 pb-2 mb-3">
        <span className="text-lg md:text-2xl text-gray-500 dark:text-gray-400" style={{ fontFamily: "Georgia, serif" }}>Default WooCommerce</span>
      </div>
      <div className="flex gap-3 mb-3 flex-wrap">
        {["Shop", "Cart", "Checkout", "Account"].map((item) => (
          <span key={item} className="text-[10px] md:text-xs text-gray-500 cursor-default">{item}</span>
        ))}
      </div>
      <div className="flex-1 min-h-0 flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2 flex-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-300 dark:bg-gray-700 rounded-sm flex items-center justify-center">
              <ImageOff className="h-4 w-4 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-full">
          <Loader2 className="h-2 w-2 md:h-2.5 md:w-2.5 animate-spin" />Slow checkout
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-1.5 py-0.5 rounded-full">
          <AlertTriangle className="h-2 w-2 md:h-2.5 md:w-2.5" />Default theme
        </span>
      </div>
    </div>
  );
}

function ModernStoreMockup() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] aspect-video flex flex-col text-left overflow-hidden">
      <div className="bg-[#96588A] h-5 md:h-6 flex items-center gap-2 px-2 md:px-3">
        <ShoppingCart className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
        <span className="text-[8px] md:text-[10px] text-white/70">My Store</span>
      </div>
      <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-gray-200 dark:border-gray-800">
        <span className="text-[10px] md:text-xs font-semibold text-gray-900 dark:text-white">Premium Collection</span>
        <div className="hidden sm:flex items-center gap-3">
          {["New", "Sale", "Collections"].map((n) => (
            <span key={n} className="text-[8px] md:text-[10px] text-gray-500">{n}</span>
          ))}
          <div className="relative">
            <ShoppingCart className="h-3 w-3 text-[#96588A]" />
            <div className="absolute -top-1 -right-1.5 w-2.5 h-2.5 rounded-full bg-[#96588A] text-[6px] text-white flex items-center justify-center">2</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 md:gap-2 px-3 md:px-4 py-2 flex-1 min-h-0">
        {[
          { color: "bg-amber-50 dark:bg-amber-900/20", name: "Leather Bag", price: "\u00a389" },
          { color: "bg-blue-50 dark:bg-blue-900/20", name: "Sneakers", price: "\u00a3124" },
          { color: "bg-gray-50 dark:bg-gray-800/30", name: "Watch", price: "\u00a3249" },
        ].map((p) => (
          <div key={p.name} className={`${p.color} rounded-md p-1.5 md:p-2 flex flex-col items-center justify-center border border-border/30`}>
            <ShoppingBag className="h-3 w-3 md:h-4 md:w-4 text-[#96588A]/60 mb-0.5" />
            <span className="text-[7px] md:text-[9px] font-medium text-gray-700 dark:text-gray-300">{p.name}</span>
            <span className="text-[8px] md:text-[10px] font-bold text-[#96588A]">{p.price}</span>
            <div className="bg-[#96588A] text-white text-[5px] md:text-[6px] px-1.5 py-0.5 rounded-sm mt-0.5">Add to Cart</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 px-3 md:px-4 py-1.5 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 flex-wrap">
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">
          <Zap className="h-2 w-2 md:h-2.5 md:w-2.5" />1.6s load
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-1.5 py-0.5 rounded-full">
          <TrendingUp className="h-2 w-2 md:h-2.5 md:w-2.5" />3.8% conversion
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1.5 py-0.5 rounded-full">
          <Smartphone className="h-2 w-2 md:h-2.5 md:w-2.5" />Mobile-first
        </span>
      </div>
    </div>
  );
}

function WooResultsShowcase() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    const onMove = (e: MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
    const onUp = () => { isDragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [handleMove]);

  const handleTouchStart = useCallback(() => {
    isDragging.current = true;
    const onMove = (e: TouchEvent) => { if (isDragging.current && e.touches[0]) handleMove(e.touches[0].clientX); };
    const onEnd = () => { isDragging.current = false; window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  }, [handleMove]);

  return (
    <section className="py-20" data-testid="section-results-showcase">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold">Real WooCommerce Results We've Delivered</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">See the transformation from a default store to a custom WooCommerce experience</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div className="space-y-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div
              ref={containerRef}
              className="relative rounded-xl shadow-lg overflow-hidden border border-border select-none"
              style={{ cursor: "ew-resize" }}
              data-testid="before-after-slider"
            >
              <div className="bg-muted h-8 flex items-center gap-2 px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground ml-2">mystore.com</span>
              </div>

              <div className="relative">
                <div className="w-full"><ModernStoreMockup /></div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                  <OldStoreMockup />
                </div>
                <div className="absolute top-0 h-full w-0.5 z-20" style={{ left: `${sliderPos}%`, transform: "translateX(-50%)", backgroundColor: WOO_COLOR }}>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-white flex items-center justify-center shadow-lg cursor-ew-resize"
                    style={{ backgroundColor: WOO_COLOR }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    data-testid="slider-handle"
                  >
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-3 bg-white rounded-full" />
                      <div className="w-0.5 h-3 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-10 left-3 z-30">
                <span className="bg-red-500/10 text-red-700 dark:text-red-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Default Theme</span>
              </div>
              <div className="absolute top-10 right-3 z-30">
                <span className="bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Custom Store</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center">Drag the slider to compare before and after</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-8">The Results</h3>
            <div className="space-y-4">
              {resultMetrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <motion.div key={metric.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}>
                    <Card className="p-4" data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" style={{ color: WOO_COLOR }} />
                        <span className="text-sm font-semibold text-muted-foreground">{metric.label}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-lg text-muted-foreground line-through">{metric.before}</span>
                        <ArrowRight className="h-5 w-5 flex-shrink-0" style={{ color: WOO_COLOR }} />
                        <span className="text-2xl md:text-3xl font-bold" style={{ color: WOO_COLOR }}>{metric.after}</span>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center gap-1 bg-purple-500/10 text-purple-700 dark:text-purple-400 px-2.5 py-1 rounded-full text-xs font-semibold">
                          <TrendingUp className="h-3 w-3" />
                          {metric.improvement}
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function WooCommerceDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" data-testid="woocommerce-development-page">
      <SEO
        title="WooCommerce Development UK | Custom Online Stores"
        description="Custom WooCommerce development. Online stores, payment integrations, custom plugins, and performance optimization. Sell more with WooCommerce."
        canonical="/services/web-development/cms/woocommerce"
      />
      {/* Hero */}
      <section className="py-16 md:py-24" data-testid="section-woo-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Web Development", href: "/services/web-development" },
                { label: "CMS", href: "/services/cms-development" },
                { label: "WooCommerce" },
              ]} />

              <div className="w-16 h-16 rounded-md flex items-center justify-center mt-6 mb-4" style={{ backgroundColor: '#96588A' + '15' }}><img src="https://cdn.simpleicons.org/woocommerce/96588A" alt="WooCommerce" className="h-8 w-8" /></div>

              <Badge variant="secondary" className="mb-4" data-testid="badge-woo">
                <ShoppingCart className="h-3 w-3 mr-1" /> WooCommerce Development
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold" data-testid="heading-woo-hero">
                WooCommerce E-Commerce Development
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 bg-gradient-to-r to-pink-400 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${WOO_COLOR}, #f472b6)` }}>
                WordPress-Powered E-Commerce at Its Best
              </p>

              <p className="text-xl text-muted-foreground mt-6">
                Combine WordPress flexibility with powerful e-commerce. Sell physical products, digital downloads, or subscriptions with unlimited customization and no transaction fees.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {featurePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <span key={pill.label} className="flex items-center gap-1.5 text-sm dark:text-purple-400 px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: `${WOO_COLOR}15`, color: WOO_COLOR }} data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                  <Button data-testid="cta-start-store">Start Your Store</Button>
                </a>
                <Button variant="outline" onClick={() => handleScrollTo("use-cases")} data-testid="cta-view-examples">
                  View Examples
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6" data-testid="trust-signal">
                Powers 28% of all online stores
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <WooCommerceStoreMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why WooCommerce */}
      <section className="py-20 bg-muted" data-testid="section-why-woo">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose WooCommerce</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">The world's most customizable e-commerce platform</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Store, stat: "5M+", label: "Active Stores" },
              { icon: Package, stat: "28%", label: "Of All Online Stores" },
              { icon: DollarSign, stat: "$0", label: "Transaction Fees" },
              { icon: Infinity, stat: "Unlimited", label: "Products & Sales" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col items-center"
                  data-testid={`stat-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${WOO_COLOR}15` }}>
                    <Icon className="h-7 w-7" style={{ color: WOO_COLOR }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{item.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20" data-testid="section-solutions">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">WooCommerce Solutions We Build</h2>
            <p className="text-muted-foreground mt-4">From simple stores to complex marketplaces</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`solution-${s.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${WOO_COLOR}15` }}>
                      <Icon className="h-7 w-7" style={{ color: WOO_COLOR }} />
                    </div>
                    <h3 className="text-xl font-bold mt-6">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                    <ul className="mt-6 space-y-2 flex-1">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: WOO_COLOR }} />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WooCommerce vs Shopify */}
      <section className="py-20 bg-muted" data-testid="section-comparison">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">WooCommerce vs Shopify: Which is Right?</h2>
            <p className="text-muted-foreground mt-4">Both are excellent\u2014here's how to choose</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full border-2" style={{ borderColor: WOO_COLOR }} data-testid="comparison-woo">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingCart className="h-8 w-8" style={{ color: '#96588A' }} />
                  <h3 className="text-xl font-bold">Choose WooCommerce If...</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "You want unlimited customization",
                    "No transaction fees (0%)",
                    "You need specific plugins/features",
                    "You want full control & ownership",
                    "Growing or established business",
                    "Technical flexibility is important",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: WOO_COLOR }} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full" data-testid="comparison-shopify">
                <div className="flex items-center gap-3 mb-6">
                  <ShoppingBag className="h-8 w-8" style={{ color: '#7AB55C' }} />
                  <h3 className="text-xl font-bold">Choose Shopify If...</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "You want all-in-one simplicity",
                    "Hosted solution (no server management)",
                    "24/7 official support",
                    "Quick setup (2-3 weeks)",
                    "Startup or small business",
                    "Ease of use over customization",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" data-testid="cta-help-decide">
                Not sure? Book a consultation and we'll help you decide
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Extensions */}
      <section className="py-20" data-testid="section-extensions">
        <div className="max-w-7xl mx-auto px-6">
          <TechStackIcons
            title="Technologies We Use"
            subtitle="We use industry-leading technologies to build products that are fast, reliable, and maintainable."
            technologies={woocommerceTechnologies}
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our WooCommerce Development Process"
            subtitle="From setup to launch in 3-5 weeks"
            steps={zigzagSteps}
            accentColor={WOO_COLOR}
          />
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-20" data-testid="section-cta-1">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Ready to Build Your WooCommerce Store?"
            description="Let's create a powerful e-commerce solution with WordPress flexibility"
            primaryCTA={{ text: "Start Your Project", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
            size="medium"
          />
        </div>
      </section>

      {/* Results Showcase */}
      <WooResultsShowcase />

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-muted" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">WooCommerce Stores We've Built</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`usecase-${uc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Badge variant="secondary" className="w-fit mb-4">{uc.industry}</Badge>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${WOO_COLOR}15` }}>
                      <Icon className="h-6 w-6" style={{ color: WOO_COLOR }} />
                    </div>
                    <h3 className="text-xl font-bold mt-4">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{uc.description}</p>
                    <div className="flex gap-2 flex-wrap mt-4">
                      {uc.results.map((r) => (
                        <Badge key={r} variant="outline">{r}</Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose Us for WooCommerce"
            values={whyChooseValues}
            columns={3}
            accentColor={WOO_COLOR}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">WooCommerce Development FAQs</h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" data-testid="section-cta-final">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Let's Build Your WooCommerce Store"
            description="Book a free consultation and discover why WooCommerce might be the perfect platform for your business"
            primaryCTA={{ text: "Book Free Consultation", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
            secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
            showContactInfo
            size="large"
          />
        </div>
      </section>
    </div>
  );
}
