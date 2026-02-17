import { motion } from "framer-motion";
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
  Globe,
  Package,
  Award,
  ShoppingBag,
  Smartphone,
  BarChart,
  Target,
  Headphones,
  ArrowRight,
  Loader2,
  ImageOff,
  AlertTriangle,
  CreditCard,
  Server,
  Store,
  Repeat,
  DollarSign,
  Sparkles,
  Coffee,
  ShoppingCart,
  Wallet,
  Send,
  BarChart3,
  Mail,
  Users,
  Pin,
  Video,
  Flame,
  Star,
  Search,
  Palette,
  Code2,
  Rocket,
  Truck,
  ThumbsUp,
  MessageSquare,
  Camera,
  Clock,
} from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TechTabsSection } from "@/components/ui/TechTabsSection";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";

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
  { label: "Built-in Payments", icon: CreditCard },
  { label: "8,000+ Apps", icon: Package },
  { label: "Mobile Optimized", icon: Smartphone },
  { label: "24/7 Hosting", icon: Server },
];

const solutions = [
  {
    icon: Store,
    title: "Standard Stores",
    description: "Perfect for product-based businesses launching their first online store.",
    features: ["Product catalog setup", "Payment gateway integration", "Mobile-optimized design", "Order management"],
  },
  {
    icon: Repeat,
    title: "Subscription Stores",
    description: "Recurring revenue models with subscription products and memberships.",
    features: ["Subscription management", "Recurring billing", "Customer portals", "ReCharge integration"],
  },
  {
    icon: TrendingUp,
    title: "Headless Shopify",
    description: "Custom frontend with Shopify backend for ultimate flexibility.",
    features: ["Next.js frontend", "Shopify Storefront API", "Custom checkout", "Blazing fast performance"],
  },
];

const techTabs = [
  {
    id: "payments",
    label: "Payments & Shipping",
    items: [
      { icon: CreditCard, name: "Stripe", description: "Payment processing for online stores" },
      { icon: Wallet, name: "PayPal", description: "Global payment gateway integration" },
      { icon: DollarSign, name: "Shopify Payments", description: "Native Shopify payment solution" },
      { icon: Clock, name: "AfterPay", description: "Buy now, pay later checkout option" },
      { icon: Truck, name: "ShipStation", description: "Multi-carrier shipping automation" },
      { icon: Package, name: "Royal Mail", description: "UK postal service integration" },
      { icon: Globe, name: "DHL Express", description: "International shipping and tracking" },
      { icon: Send, name: "Shopify Shipping", description: "Built-in shipping label generation" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing & SEO",
    items: [
      { icon: BarChart3, name: "Google Analytics", description: "Traffic and conversion tracking" },
      { icon: Mail, name: "Mailchimp", description: "Email marketing automation" },
      { icon: Users, name: "HubSpot", description: "CRM and inbound marketing suite" },
      { icon: Target, name: "Meta Ads", description: "Facebook and Instagram advertising" },
      { icon: Pin, name: "Pinterest", description: "Product pins and shopping ads" },
      { icon: Video, name: "TikTok", description: "Short-form video marketing channel" },
      { icon: Send, name: "Klaviyo", description: "Advanced email and SMS marketing" },
      { icon: TrendingUp, name: "Google Ads", description: "Search and display advertising" },
    ],
  },
  {
    id: "support",
    label: "Support & Reviews",
    items: [
      { icon: Headphones, name: "Zendesk", description: "Customer support ticketing system" },
      { icon: Flame, name: "Hotjar", description: "Heatmaps and session recordings" },
      { icon: Star, name: "Trustpilot", description: "Customer review collection platform" },
      { icon: MessageSquare, name: "Tidio Chat", description: "Live chat and chatbot support" },
      { icon: Star, name: "Judge.me", description: "Product reviews with photo uploads" },
      { icon: Headphones, name: "Gorgias", description: "E-commerce helpdesk automation" },
      { icon: ThumbsUp, name: "Yotpo", description: "Reviews, loyalty, and referral programs" },
      { icon: Camera, name: "Loox", description: "Visual reviews with customer photos" },
    ],
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Setup & Design",
    points: [
      "Shopify account setup, theme selection, and purchase",
      "Brand customization with logo, colors, and fonts",
      "Homepage and product page design and layout",
    ],
  },
  {
    icon: Palette,
    title: "Product Setup",
    points: [
      "Product uploads with images, descriptions, and pricing",
      "Collection creation, variant setup (sizes, colors)",
      "Inventory management and catalog organization",
    ],
  },
  {
    icon: Code2,
    title: "Integrations & Apps",
    points: [
      "Payment gateway setup with Stripe and PayPal",
      "Shipping zones, rates, and essential app installations",
      "Email marketing integration and automation",
    ],
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    points: [
      "Checkout flow and payment testing end-to-end",
      "Mobile responsiveness and SEO optimization",
      "Store launch, team training, and handover",
    ],
  },
];

const resultMetrics = [
  { icon: TrendingUp, label: "Conversion Rate", before: "1.8%", after: "4.2%", improvement: "+133%" },
  { icon: ShoppingCart, label: "Cart Abandonment", before: "78%", after: "42%", improvement: "46% lower" },
  { icon: Smartphone, label: "Mobile Sales", before: "30%", after: "68%", improvement: "+127%" },
  { icon: DollarSign, label: "Avg Order Value", before: "\u00a345", after: "\u00a378", improvement: "+73%" },
  { icon: Zap, label: "Load Time", before: "4.2s", after: "1.1s", improvement: "74% faster" },
  { icon: BarChart, label: "Monthly Revenue", before: "\u00a312K", after: "\u00a345K", improvement: "+275%" },
];

const useCases = [
  {
    industry: "Fashion",
    title: "Sustainable Clothing Brand",
    description: "Shopify Plus store with 1,000+ products and subscription boxes",
    results: ["\u00a3200K/month", "5.2% conversion"],
    icon: ShoppingBag,
  },
  {
    industry: "Beauty",
    title: "Skincare Subscription",
    description: "ReCharge-powered subscription model with custom portal",
    results: ["2,000 subscribers", "\u00a350K MRR"],
    icon: Sparkles,
  },
  {
    industry: "Food",
    title: "Specialty Coffee Shop",
    description: "Multi-location store with local pickup and shipping",
    results: ["\u00a380K first quarter", "4.8/5 rating"],
    icon: Coffee,
  },
];

const whyChooseValues = [
  { icon: Award, title: "Shopify Partners", description: "Official Shopify Partner with 50+ successful stores", stat: "50+ Stores" },
  { icon: Zap, title: "Fast Delivery", description: "Most stores launched in 2-4 weeks", stat: "2-4 Weeks" },
  { icon: TrendingUp, title: "Conversion Focused", description: "Optimized checkout flows that convert", stat: "4%+ Avg CVR" },
  { icon: Smartphone, title: "Mobile First", description: "60%+ of sales happen on mobile", stat: "Mobile Optimized" },
  { icon: DollarSign, title: "ROI Driven", description: "Our stores generate 3x more revenue on average" },
  { icon: Headphones, title: "Ongoing Support", description: "Post-launch support and optimization" },
];

const faqs = [
  { q: "How long does it take to launch a Shopify store?", a: "Standard stores: 2-3 weeks. Complex stores with custom features: 4-6 weeks. We'll give you an exact timeline after understanding your requirements." },
  { q: "What's the difference between Shopify and Shopify Plus?", a: "Shopify is for most businesses (\u00a329-\u00a3299/month). Shopify Plus is for high-volume stores (\u00a32,000+/month) with advanced features, dedicated support, and custom checkout. We'll recommend the right plan for you." },
  { q: "Can you migrate my existing store to Shopify?", a: "Yes! We migrate from WooCommerce, Magento, BigCommerce, or any platform. We preserve your products, customers, orders, and SEO." },
  { q: "Do you use custom themes or Shopify themes?", a: "We use premium Shopify themes (Dawn, Impulse, Brooklyn) and customize them heavily to match your brand. For unique designs, we build custom themes." },
  { q: "What payment gateways do you support?", a: "Shopify Payments (recommended), Stripe, PayPal, Apple Pay, Google Pay, and 100+ other gateways supported by Shopify." },
  { q: "Can you integrate with my existing tools?", a: "Yes! We integrate with email marketing (Klaviyo, Mailchimp), CRM, inventory systems, shipping providers, and more via Shopify apps or custom APIs." },
  { q: "Do you provide ongoing support after launch?", a: "Yes! We offer monthly support packages (from \u00a3300/month) including app updates, theme updates, new product uploads, and technical assistance." },
  { q: "What if I need custom functionality?", a: "We build custom Shopify apps or use Shopify's API to add any functionality you need\u2014subscriptions, custom checkout, wholesale portals, etc." },
];

function ShopifyStoreMockup() {
  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <div className="bg-muted h-8 flex items-center gap-2 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-xs text-muted-foreground ml-2">mystore.myshopify.com</span>
        </div>

        <div className="bg-[#1a1a2e] dark:bg-[#0d0d1a] p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-[#7AB55C]" />
              <span className="text-sm font-semibold text-white">My Store</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-gray-400">Shop</span>
              <span className="text-[10px] text-gray-400">Collections</span>
              <span className="text-[10px] text-gray-400">About</span>
              <div className="relative">
                <ShoppingCart className="h-4 w-4 text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#7AB55C] text-[7px] text-white flex items-center justify-center font-bold">2</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Classic Tee", price: "\u00a329.99", color: "bg-blue-900/30" },
              { name: "Hoodie", price: "\u00a359.99", color: "bg-purple-900/30" },
              { name: "Cap", price: "\u00a319.99", color: "bg-green-900/30" },
              { name: "Joggers", price: "\u00a349.99", color: "bg-orange-900/30" },
            ].map((product) => (
              <div key={product.name} className={`${product.color} rounded-lg p-3 border border-white/5`}>
                <div className="aspect-square rounded-md bg-white/5 mb-2 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-white/20" />
                </div>
                <div className="text-[11px] font-medium text-white">{product.name}</div>
                <div className="text-[10px] text-[#7AB55C] font-semibold">{product.price}</div>
                <div className="mt-1.5 bg-[#7AB55C] text-white text-[8px] font-semibold py-1 rounded text-center" data-testid={`add-to-cart-${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  Add to Cart
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Badge className="bg-[#7AB55C] text-white border-0 shadow-lg text-xs">Fast Checkout</Badge>
      </motion.div>
      <motion.div
        className="absolute -bottom-3 -left-3 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Badge className="bg-[#7AB55C] text-white border-0 shadow-lg text-xs">Mobile First</Badge>
      </motion.div>
    </div>
  );
}

function OldStoreMockup() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-red-200 dark:border-red-900 aspect-video p-4 md:p-6 flex flex-col text-left overflow-hidden">
      <div className="border-b-4 border-gray-400 dark:border-gray-600 pb-2 mb-3">
        <span className="text-lg md:text-2xl text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>MY ONLINE SHOP</span>
      </div>
      <div className="flex gap-2 md:gap-4 mb-3 flex-wrap">
        {["Home", "Products", "Cart", "Checkout", "Contact"].map((item) => (
          <span key={item} className="text-[10px] md:text-xs text-blue-600 underline cursor-default">{item}</span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-sm flex flex-col items-center justify-center gap-1 p-1">
            <ImageOff className="h-4 w-4 text-gray-400" />
            <span className="text-[7px] md:text-[8px] text-gray-500">Product {i}</span>
            <span className="text-[7px] md:text-[8px] text-gray-600 font-bold">\u00a3??.??</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-full">
          <Loader2 className="h-2 w-2 md:h-2.5 md:w-2.5 animate-spin" />Slow checkout
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-1.5 py-0.5 rounded-full">
          <AlertTriangle className="h-2 w-2 md:h-2.5 md:w-2.5" />No mobile view
        </span>
      </div>
    </div>
  );
}

function ModernStoreMockup() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] aspect-video flex flex-col text-left overflow-hidden">
      <div className="bg-[#1a1a2e] h-5 md:h-6 flex items-center gap-2 px-2 md:px-3">
        <ShoppingBag className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#7AB55C]" />
        <span className="text-[8px] md:text-[10px] text-white/70">Shopify Admin</span>
      </div>
      <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#7AB55C]/20 flex items-center justify-center">
            <Store className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#7AB55C]" />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-gray-900 dark:text-white">My Store</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          {["Shop", "Collections", "About"].map((n) => (
            <span key={n} className="text-[8px] md:text-[10px] text-gray-500">{n}</span>
          ))}
          <div className="bg-[#7AB55C] text-white text-[7px] md:text-[8px] px-2 py-0.5 rounded-md">Cart (2)</div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#7AB55C]/10 to-emerald-500/10 px-3 md:px-4 py-3 flex flex-col items-center justify-center">
        <span className="text-[10px] md:text-sm font-bold text-gray-900 dark:text-white">Summer Collection</span>
        <span className="text-[7px] md:text-[9px] text-gray-500 mt-0.5">Free shipping on orders over \u00a350</span>
        <div className="flex gap-2 mt-2">
          <div className="bg-[#7AB55C] text-white text-[6px] md:text-[8px] px-2 py-0.5 rounded-md">Shop Now</div>
          <div className="border border-border text-[6px] md:text-[8px] px-2 py-0.5 rounded-md text-gray-600 dark:text-gray-300">View All</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 md:gap-2 px-3 md:px-4 py-2 flex-1 min-h-0">
        {[
          { color: "bg-blue-500/10", title: "\u00a329.99" },
          { color: "bg-purple-500/10", title: "\u00a359.99" },
          { color: "bg-green-500/10", title: "\u00a319.99" },
        ].map((card, i) => (
          <div key={i} className={`${card.color} rounded-md p-1.5 md:p-2 flex flex-col items-center justify-center shadow-sm border border-border/30`}>
            <ShoppingBag className="h-3 w-3 md:h-4 md:w-4 text-[#7AB55C] mb-0.5" />
            <span className="text-[7px] md:text-[9px] font-semibold text-[#7AB55C]">{card.title}</span>
            <div className="w-full bg-[#7AB55C] text-white text-[5px] md:text-[7px] py-0.5 rounded mt-1 text-center">Add to Cart</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 px-3 md:px-4 py-1.5 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 flex-wrap">
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">
          <Zap className="h-2 w-2 md:h-2.5 md:w-2.5" />1.1s load
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1.5 py-0.5 rounded-full">
          <Smartphone className="h-2 w-2 md:h-2.5 md:w-2.5" />Mobile optimized
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-1.5 py-0.5 rounded-full">
          <CreditCard className="h-2 w-2 md:h-2.5 md:w-2.5" />Fast checkout
        </span>
      </div>
    </div>
  );
}

function ShopifyResultsShowcase() {
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
    <section className="py-20 bg-muted" data-testid="section-results-showcase">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold">Real Shopify Results We've Delivered</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">See the transformation from a basic online store to a high-converting Shopify powerhouse</p>
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
                <span className="text-xs text-muted-foreground ml-2">mystore.myshopify.com</span>
              </div>

              <div className="relative">
                <div className="w-full">
                  <ModernStoreMockup />
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <OldStoreMockup />
                </div>
                <div
                  className="absolute top-0 h-full w-0.5 bg-[#7AB55C] z-20"
                  style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#7AB55C] text-white flex items-center justify-center shadow-lg cursor-ew-resize"
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
                <span className="bg-red-500/10 text-red-700 dark:text-red-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Old Store</span>
              </div>
              <div className="absolute top-10 right-3 z-30">
                <span className="bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">New Shopify Store</span>
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
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <Card className="p-4" data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#7AB55C]" />
                        <span className="text-sm font-semibold text-muted-foreground">{metric.label}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-lg text-muted-foreground line-through">{metric.before}</span>
                        <ArrowRight className="h-5 w-5 text-[#7AB55C] flex-shrink-0" />
                        <span className="text-2xl md:text-3xl font-bold text-[#7AB55C]">{metric.after}</span>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full text-xs font-semibold">
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

export default function ShopifyDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" data-testid="shopify-development-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24" data-testid="section-shopify-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Web Development", href: "/services/web-development" },
                { label: "CMS", href: "/services/cms-development" },
                { label: "Shopify" },
              ]} />

              <div className="w-16 h-16 mt-6 mb-4 rounded-xl bg-[#7AB55C]/10 flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/shopify/7AB55C" alt="Shopify" className="w-8 h-8" />
              </div>

              <Badge variant="secondary" className="mb-4" data-testid="badge-shopify">
                <ShoppingBag className="h-3 w-3 mr-1" /> Shopify Development
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold" data-testid="heading-shopify-hero">
                Shopify E-Commerce Development
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 bg-gradient-to-r from-[#7AB55C] to-emerald-400 bg-clip-text text-transparent">
                E-Commerce Made Simple
              </p>

              <p className="text-xl text-muted-foreground mt-6">
                Launch your online store in weeks, not months. We build custom Shopify stores with optimized checkout, mobile-first design, and seamless payment processing.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {featurePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <span key={pill.label} className="flex items-center gap-1.5 text-sm bg-[#7AB55C]/10 text-[#7AB55C] dark:text-emerald-400 px-3 py-1.5 rounded-full font-medium" data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link href="/contact">
                  <Button data-testid="cta-start-store">Start Your Store</Button>
                </Link>
                <Button variant="outline" onClick={() => handleScrollTo("use-cases")} data-testid="cta-view-examples">
                  View Examples
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6" data-testid="trust-signal">
                Trusted by 100+ e-commerce brands
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <ShopifyStoreMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Shopify Section */}
      <section className="py-20 bg-muted" data-testid="section-why-shopify">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Shopify for Your Store</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">The world's leading e-commerce platform trusted by millions</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: ShoppingBag, stat: "1M+", label: "Active Stores" },
              { icon: DollarSign, stat: "$400B+", label: "Sales Powered" },
              { icon: Globe, stat: "175+", label: "Countries" },
              { icon: Zap, stat: "99.99%", label: "Uptime" },
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
                  <div className="w-14 h-14 rounded-full bg-[#7AB55C]/10 flex items-center justify-center mb-3">
                    <Icon className="h-7 w-7 text-[#7AB55C]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{item.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20" data-testid="section-solutions">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Shopify Solutions We Build</h2>
            <p className="text-muted-foreground mt-4">From startups to scaling brands</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <motion.div key={solution.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`solution-${solution.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-14 h-14 rounded-full bg-[#7AB55C]/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-[#7AB55C]" />
                    </div>
                    <h3 className="text-xl font-bold mt-6">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{solution.description}</p>
                    <ul className="mt-6 space-y-2 flex-1">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#7AB55C] flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
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

      {/* Apps & Integrations */}
      <section className="py-20 bg-muted" data-testid="section-integrations">
        <div className="max-w-7xl mx-auto px-6">
          <TechTabsSection
            title="Shopify Apps We Integrate"
            subtitle="Essential apps to power your store"
            tabs={techTabs}
            accentColor="#7AB55C"
          />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="How We Build Your Shopify Store"
            subtitle="Launch in 2-4 weeks"
            steps={zigzagSteps}
            accentColor="#7AB55C"
          />
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-20 bg-muted" data-testid="section-cta-1">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Ready to Launch Your Shopify Store?"
            description="Let's build an e-commerce store that converts visitors into customers"
            primaryCTA={{ text: "Start Your Project", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      {/* Results Showcase */}
      <ShopifyResultsShowcase />

      {/* Use Cases */}
      <section id="use-cases" className="py-20" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Shopify Stores We've Built</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`usecase-${uc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Badge variant="secondary" className="w-fit mb-4">{uc.industry}</Badge>
                    <div className="w-12 h-12 rounded-full bg-[#7AB55C]/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#7AB55C]" />
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
      <section className="py-20 bg-muted" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose Us for Shopify"
            values={whyChooseValues}
            columns={3}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Shopify Development FAQs</h2>
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
      <section className="py-20 bg-muted" data-testid="section-cta-final">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Let's Build Your Online Store"
            description="Book a free consultation and get a custom proposal for your Shopify project"
            primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
            secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
            showContactInfo
            size="large"
          />
        </div>
      </section>
    </div>
  );
}
