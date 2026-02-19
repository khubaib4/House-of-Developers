import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import {
  CheckCircle2,
  Palette,
  ShoppingCart,
  Shield,
  Puzzle,
  Zap,
  Code2,
  TrendingUp,
  Users,
  Headphones,
  Package,
  ArrowRight,
  ArrowRightLeft,
  Globe,
  CreditCard,
  Truck,
  BarChart,
  Percent,
  Smartphone,
  Mail,
  Rocket,
  MessageSquare,
  Crown,
  Award,
  Star,
  ThumbsUp,
  RefreshCw,
  Camera,
  DollarSign,
  Target,
  Home,
  Heart,
  ShoppingBag,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";

const SHOPIFY_COLOR = "#5E8E3E";

const services = [
  {
    icon: Palette,
    title: "Custom Shopify Themes",
    description: "Bespoke Shopify themes designed to convert visitors into customers.",
    features: ["100% custom design", "Conversion-optimized", "Mobile-first", "Fast (<2s)"],
  },
  {
    icon: Crown,
    title: "Shopify Plus Development",
    description: "Enterprise-grade Shopify Plus solutions for high-volume merchants.",
    features: ["Custom checkout", "Automation & scripts", "B2B & wholesale", "Dedicated account manager"],
  },
  {
    icon: Puzzle,
    title: "Shopify App Development",
    description: "Custom Shopify apps to extend your store's functionality.",
    features: ["Custom functionality", "Shopify API integration", "Private or public apps", "App Store submission"],
  },
  {
    icon: ArrowRightLeft,
    title: "Shopify Migration",
    description: "Seamless migration from any platform to Shopify with zero downtime.",
    features: ["Zero downtime", "SEO preservation", "Product & customer data", "Design improvements"],
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description: "Data-driven optimization to increase sales and average order value.",
    features: ["Checkout flow optimization", "A/B testing", "Analytics & tracking", "Speed optimization"],
  },
  {
    icon: Shield,
    title: "Shopify Maintenance & Support",
    description: "Ongoing support to keep your Shopify store running at peak performance.",
    features: ["Monthly theme updates", "App management", "Performance monitoring", "Priority support"],
  },
];

const shopifyApps = [
  { name: "Klaviyo", icon: Mail, category: "Email Marketing" },
  { name: "Yotpo", icon: Star, category: "Reviews" },
  { name: "Gorgias", icon: MessageSquare, category: "Support" },
  { name: "Judge.me", icon: ThumbsUp, category: "Reviews" },
  { name: "ReCharge", icon: RefreshCw, category: "Subscriptions" },
  { name: "Shopify Flow", icon: Zap, category: "Automation" },
  { name: "Loox", icon: Camera, category: "Photo Reviews" },
  { name: "Bold", icon: DollarSign, category: "Pricing" },
  { name: "Oberlo", icon: Package, category: "Dropshipping" },
  { name: "ShipStation", icon: Truck, category: "Shipping" },
  { name: "Google Analytics", icon: BarChart, category: "Analytics" },
  { name: "Privy", icon: Target, category: "Popups" },
];

const customIntegrations = [
  { icon: CreditCard, title: "Payment Gateways" },
  { icon: Truck, title: "Shipping & Fulfillment" },
  { icon: Mail, title: "Email Marketing" },
  { icon: Users, title: "CRM Integration" },
  { icon: BarChart, title: "Analytics & Tracking" },
  { icon: Package, title: "Inventory Management" },
  { icon: MessageSquare, title: "Customer Support" },
  { icon: Globe, title: "Multi-Channel Selling" },
];

const shopifyPlusBenefits = [
  { icon: Crown, title: "Custom Checkout" },
  { icon: Zap, title: "Unlimited API Calls" },
  { icon: Code2, title: "Shopify Scripts" },
  { icon: Users, title: "B2B & Wholesale" },
  { icon: Zap, title: "Shopify Flow" },
  { icon: Globe, title: "Multi-Store Management" },
  { icon: Headphones, title: "Dedicated Support" },
  { icon: TrendingUp, title: "No Revenue Limits" },
];

const checkoutFeatures = [
  { icon: CreditCard, title: "Express Checkout", metric: "↑ 35% conversion" },
  { icon: Shield, title: "Trust Badges", metric: "↓ 22% cart abandonment" },
  { icon: Smartphone, title: "Mobile Optimized", metric: "↑ 40% mobile conversions" },
  { icon: Percent, title: "Dynamic Discounts", metric: "↑ 28% AOV" },
  { icon: Truck, title: "Shipping Calculator", metric: "↓ 18% drop-off" },
  { icon: Mail, title: "Cart Recovery", metric: "↑ 15% recovered" },
  { icon: Globe, title: "Multi-Currency", metric: "↑ 45% international" },
  { icon: Zap, title: "One-Page Checkout", metric: "↓ 30% checkout time" },
];

const whyChooseValues = [
  { icon: Award, title: "Shopify Certified Partners", description: "Official Shopify Partner agency with proven expertise across Shopify and Shopify Plus." },
  { icon: TrendingUp, title: "Conversion-Focused Design", description: "Every design decision backed by data to maximize your store's conversion rate." },
  { icon: Zap, title: "Fast Loading Stores", description: "Optimized themes that load in under 2 seconds for the best shopping experience." },
  { icon: Crown, title: "Shopify Plus Experience", description: "Enterprise-level experience building high-volume stores on Shopify Plus." },
  { icon: Code2, title: "Custom App Development", description: "Bespoke Shopify apps built to extend your store's functionality beyond the app store." },
  { icon: ShoppingCart, title: "E-Commerce Expertise", description: "Deep understanding of e-commerce best practices, checkout flows, and conversion optimization." },
  { icon: Users, title: "Post-Launch Support", description: "Ongoing maintenance, optimization, and support to keep your store growing." },
  { icon: BarChart, title: "Analytics & Tracking", description: "Full analytics setup with Google Analytics, Facebook Pixel, and custom dashboards." },
  { icon: Globe, title: "International Setup", description: "Multi-currency, multi-language, and global shipping configuration for worldwide sales." },
];

const techTabs = [
  {
    label: "Core Technologies",
    technologies: [
      { name: "Shopify", slug: "shopify" },
      { name: "Liquid", slug: "shopify" },
      { name: "JavaScript", slug: "javascript" },
      { name: "React", slug: "react" },
      { name: "GraphQL", slug: "graphql" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Webpack", slug: "webpack" },
    ],
  },
  {
    label: "Essential Apps",
    technologies: [
      { name: "Klaviyo", slug: "klaviyo" },
      { name: "Yotpo", slug: "yotpo" },
      { name: "Gorgias", slug: "gorgias" },
      { name: "ReCharge", slug: "recharge" },
      { name: "Judge.me", slug: "judgeme" },
      { name: "Loox", slug: "loox" },
      { name: "Privy", slug: "privy" },
      { name: "Bold", slug: "bold" },
    ],
  },
  {
    label: "Payments & Checkout",
    technologies: [
      { name: "Shopify Payments", slug: "shopify" },
      { name: "Stripe", slug: "stripe" },
      { name: "PayPal", slug: "paypal" },
      { name: "Klarna", slug: "klarna" },
      { name: "Shop Pay", slug: "shopify" },
      { name: "Apple Pay", slug: "apple" },
      { name: "Google Pay", slug: "googlepay" },
      { name: "Afterpay", slug: "afterpay" },
    ],
  },
  {
    label: "Marketing & Analytics",
    technologies: [
      { name: "Google Analytics", slug: "googleanalytics" },
      { name: "Facebook Pixel", slug: "facebook" },
      { name: "Klaviyo", slug: "klaviyo" },
      { name: "Mailchimp", slug: "mailchimp" },
      { name: "Google Ads", slug: "googleads" },
      { name: "TikTok Pixel", slug: "tiktok" },
      { name: "Hotjar", slug: "hotjar" },
      { name: "Omnisend", slug: "omnisend" },
    ],
  },
  {
    label: "Development Tools",
    technologies: [
      { name: "GitHub", slug: "github" },
      { name: "Figma", slug: "figma" },
      { name: "Shopify CLI", slug: "shopify" },
      { name: "Theme Kit", slug: "shopify" },
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "Postman", slug: "postman" },
      { name: "Git", slug: "git" },
      { name: "Docker", slug: "docker" },
    ],
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Strategy",
    points: [
      "Free consultation to understand your products, audience, and goals",
      "Competitor analysis and store architecture planning",
      "Technical specification and project roadmap",
    ],
  },
  {
    icon: Palette,
    title: "Design & UX",
    points: [
      "Custom theme design with conversion-focused layouts",
      "Brand integration with your identity and visual language",
      "Mobile-first responsive design with user testing",
    ],
  },
  {
    icon: Code2,
    title: "Shopify Development",
    points: [
      "Custom Liquid theme development with clean code",
      "App integration and custom functionality build",
      "Product migration, payment setup, and shipping configuration",
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Optimize",
    points: [
      "Thorough testing across devices and checkout flows",
      "SEO setup, analytics configuration, and speed optimization",
      "Go-live with ongoing monitoring and support",
    ],
  },
];

const caseStudies = [
  {
    icon: ShoppingBag,
    title: "Premium Apparel Store",
    gradient: "from-green-600 to-emerald-600",
    badge: "Fashion",
    description: "D2C fashion brand in London on Shopify Plus with size quiz, subscriptions, multi-currency, and Klaviyo integration.",
    features: ["Shopify Plus", "Size quiz", "Subscriptions", "Multi-currency"],
    tech: ["Shopify Plus", "Klaviyo", "ReCharge", "Custom App"],
    timeline: "10 weeks",
  },
  {
    icon: Home,
    title: "Home Decor E-Commerce",
    gradient: "from-green-600 to-teal-600",
    badge: "Home & Living",
    description: "Manchester-based home decor store with 2,000+ products, AR preview, visual search, and WMS integration.",
    features: ["2,000+ products", "AR preview", "Visual search", "WMS integration"],
    tech: ["Shopify", "Custom App", "AR.js", "REST API"],
    timeline: "12 weeks",
  },
  {
    icon: Heart,
    title: "Beauty Subscription Box",
    gradient: "from-green-600 to-blue-600",
    badge: "Beauty & Wellness",
    description: "Birmingham beauty brand with build-your-box subscriptions, loyalty program, and influencer affiliate system.",
    features: ["Build-your-box", "ReCharge", "Loyalty program", "Influencer affiliate"],
    tech: ["Shopify", "ReCharge", "LoyaltyLion", "Custom App"],
    timeline: "14 weeks",
  },
];

const faqs = [
  { q: "How much does a Shopify store cost?", a: "Basic Shopify stores start from £3,000-£5,000. Custom theme stores with advanced features are £5,000-£15,000. Shopify Plus stores range from £15,000-£50,000+. We provide a fixed-price quote after our free consultation." },
  { q: "Shopify vs WooCommerce — which is better?", a: "Shopify is easier to manage with built-in hosting and security. WooCommerce offers more flexibility with full code access. For most e-commerce businesses, Shopify is the better choice due to its reliability, app ecosystem, and zero maintenance hosting." },
  { q: "What's the difference between Shopify and Shopify Plus?", a: "Shopify is for most businesses (£29-£299/month). Shopify Plus is for high-volume stores (£2,000+/month) with custom checkout, Shopify Scripts, unlimited API calls, dedicated support, and automation tools like Shopify Flow." },
  { q: "Can you migrate my existing store to Shopify?", a: "Yes! We migrate from WooCommerce, Magento, BigCommerce, Squarespace, or any platform. We preserve your products, customers, orders, SEO rankings, and usually improve the design in the process." },
  { q: "How long does it take to build a Shopify store?", a: "Simple stores: 2-3 weeks. Standard custom stores: 4-6 weeks. Complex Shopify Plus stores: 8-12 weeks. We'll give you an accurate timeline during our free consultation." },
  { q: "Can you build custom Shopify apps?", a: "Yes! We build custom public and private Shopify apps using the Shopify API, Polaris, and App Bridge. Whether you need custom functionality for your store or want to publish on the Shopify App Store." },
  { q: "Can Shopify handle high traffic and large catalogs?", a: "Absolutely! Shopify handles 10,000+ orders per minute during peak events like Black Friday. With Shopify Plus, you get 99.99% uptime SLA and unlimited bandwidth. Stores with 100,000+ products run smoothly." },
  { q: "What payment methods does Shopify support?", a: "Shopify supports 100+ payment gateways including Shopify Payments, Stripe, PayPal, Apple Pay, Google Pay, Shop Pay, Klarna, Afterpay, and many more. With Shopify Payments, you pay 0% transaction fees." },
  { q: "Can I sell internationally on Shopify?", a: "Yes! Shopify supports multi-currency (130+ currencies), multi-language, international shipping with real-time rates, customs & duties calculation, and local payment methods. Shopify Markets makes global selling easy." },
  { q: "Can I sell subscriptions on Shopify?", a: "Yes! Using apps like ReCharge, Bold Subscriptions, or Shopify's native subscription tools, you can sell recurring products, subscription boxes, and membership plans with full customer portal management." },
  { q: "What Shopify apps do you recommend?", a: "It depends on your needs, but our top picks include Klaviyo (email), Yotpo/Judge.me (reviews), Gorgias (support), ReCharge (subscriptions), Loox (photo reviews), and Shopify Flow (automation). We'll recommend the right stack for your business." },
  { q: "Do you offer ongoing Shopify maintenance?", a: "Yes! We offer monthly maintenance packages starting at £300/month including theme updates, app management, performance monitoring, new feature development, and priority support." },
];

function TechTabIcon({ slug, name }: { slug: string; name: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
        {name.charAt(0)}
      </div>
    );
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/9CA3AF`}
      alt={name}
      className="w-10 h-10"
      onError={() => setError(true)}
    />
  );
}

function ShopifyHeroMockup() {
  return (
    <div className="relative h-[500px]">
      <div className="absolute inset-0 flex rounded-2xl overflow-hidden border shadow-2xl">
        <div className="w-1/2 flex flex-col bg-[#f6f6f7] dark:bg-[#1e1e1e]">
          <div className="bg-[#1a1a1a] px-3 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#5E8E3E] flex items-center justify-center">
                <ShoppingBag className="h-3 w-3 text-white" />
              </div>
              <span className="text-[10px] text-white/70">Shopify Admin</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-gray-600" />
              <span className="text-[9px] text-white/50">Admin</span>
            </div>
          </div>
          <div className="flex flex-1 overflow-hidden">
            <div className="w-[70px] bg-[#1a1a1a] py-2 flex flex-col gap-0.5">
              {[
                { label: "Home", icon: Home, active: false, badge: null },
                { label: "Orders", icon: Package, active: false, badge: "3" },
                { label: "Products", icon: ShoppingBag, active: true, badge: null },
                { label: "Customers", icon: Users, active: false, badge: null },
                { label: "Analytics", icon: BarChart, active: false, badge: null },
                { label: "Marketing", icon: Target, active: false, badge: null },
                { label: "Discounts", icon: Percent, active: false, badge: null },
                { label: "Apps", icon: Puzzle, active: false, badge: null },
                { label: "Settings", icon: Settings, active: false, badge: null },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-1.5 px-2 py-1 mx-1 rounded text-[8px] ${
                    item.active
                      ? "bg-[#5E8E3E]/20 text-[#5E8E3E]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <item.icon className="h-2.5 w-2.5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto w-3 h-3 bg-red-500 rounded-full text-[6px] text-white flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex-1 p-2 overflow-hidden">
              <h3 className="text-[10px] font-bold text-gray-800 dark:text-gray-200 mb-1.5">Products</h3>
              <div className="space-y-1">
                {[
                  { name: "Premium Leather Bag", status: "Active", inventory: "24" },
                  { name: "Canvas Tote", status: "Active", inventory: "56" },
                  { name: "Crossbody Mini", status: "Draft", inventory: "12" },
                  { name: "Weekender Duffle", status: "Active", inventory: "8" },
                ].map((product) => (
                  <div key={product.name} className="flex items-center justify-between bg-white dark:bg-[#2a2a2a] rounded px-2 py-1 text-[8px]">
                    <span className="text-gray-800 dark:text-gray-200 font-medium truncate">{product.name}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[6px] px-1 py-0 h-3">
                        {product.status}
                      </Badge>
                      <span className="text-gray-400 text-[7px]">{product.inventory}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 bg-white dark:bg-[#2a2a2a] rounded p-2 text-center">
                <span className="text-[14px] font-bold text-[#5E8E3E]">£1,247</span>
                <p className="text-[7px] text-gray-500">Today's sales</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#5E8E3E] -translate-x-1/2 z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#5E8E3E] flex items-center justify-center shadow-lg">
            <ArrowRight className="h-4 w-4 text-white" />
          </div>
        </div>

        <div className="w-1/2 flex flex-col bg-white dark:bg-[#0f0f0f]">
          <div className="bg-gray-100 dark:bg-[#1a1a1a] px-3 py-1.5 flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 bg-white dark:bg-[#2a2a2a] rounded text-[8px] px-2 py-0.5 text-gray-400 truncate">
              yourstore.myshopify.com
            </div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
              <span className="text-[10px] font-bold text-gray-800 dark:text-white">YourStore</span>
              <div className="flex gap-2 items-center">
                {["Shop", "Collections", "About"].map((n) => (
                  <span key={n} className="text-[8px] text-gray-500">{n}</span>
                ))}
                <div className="relative">
                  <ShoppingCart className="h-3 w-3 text-gray-400" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#5E8E3E] rounded-full text-[6px] text-white flex items-center justify-center">2</span>
                </div>
              </div>
            </div>
            <div className="px-3 py-3 flex gap-2">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="h-6 w-6 text-gray-300 dark:text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold text-gray-800 dark:text-white">Premium Leather Bag</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[10px] font-bold text-[#5E8E3E]">£89.99</span>
                  <span className="text-[8px] text-gray-400 line-through">£129.99</span>
                </div>
                <div className="flex gap-0.5 mt-0.5">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-2 w-2 text-yellow-400 fill-yellow-400" />
                  ))}
                  <Star className="h-2 w-2 text-yellow-400" />
                  <span className="text-[7px] text-gray-400 ml-0.5">(128)</span>
                </div>
                <button className="mt-1.5 bg-[#5E8E3E] text-white text-[7px] font-semibold px-3 py-1 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 px-3 py-2 flex-1">
              {[
                { title: "Tote Bag", price: "£49.99" },
                { title: "Crossbody", price: "£69.99" },
                { title: "Wallet", price: "£29.99" },
              ].map((card) => (
                <div key={card.title} className="bg-gray-50 dark:bg-gray-900 rounded p-1.5 flex flex-col items-center justify-center">
                  <div className="w-6 h-6 rounded bg-gray-200 dark:bg-gray-700 mb-1 flex items-center justify-center">
                    <ShoppingBag className="h-3 w-3 text-gray-400" />
                  </div>
                  <span className="text-[7px] text-gray-600 dark:text-gray-300">{card.title}</span>
                  <span className="text-[7px] font-bold text-[#5E8E3E]">{card.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -top-3 -right-3 bg-[#5E8E3E] text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        4.6M+ stores
      </motion.div>
      <motion.div
        className="absolute -bottom-3 -left-3 bg-emerald-600 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        £444B+ GMV
      </motion.div>
      <motion.div
        className="absolute top-1/2 -right-3 bg-green-700 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
      >
        0% transaction fees
      </motion.div>
      <motion.div
        className="absolute top-1/4 -left-3 bg-teal-600 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        99.99% uptime
      </motion.div>
    </div>
  );
}

function CheckoutMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border shadow-xl">
      <div className="bg-gray-100 dark:bg-[#1a1a1a] px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white dark:bg-[#2a2a2a] rounded text-[10px] px-3 py-1 text-gray-400">
          checkout.yourstore.com
        </div>
      </div>
      <div className="bg-white dark:bg-[#0f0f0f] p-4">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="h-3 w-3 text-[#5E8E3E]" />
          <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">Secure Checkout</span>
        </div>
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-[9px] bg-gray-50 dark:bg-gray-900 rounded p-2">
            <span className="text-gray-600 dark:text-gray-300">Premium Leather Bag × 1</span>
            <span className="font-semibold">£89.99</span>
          </div>
          <div className="flex items-center justify-between text-[9px] bg-gray-50 dark:bg-gray-900 rounded p-2">
            <span className="text-gray-600 dark:text-gray-300">Canvas Tote × 1</span>
            <span className="font-semibold">£35.00</span>
          </div>
          <div className="flex items-center justify-between text-[10px] font-bold pt-1 border-t border-gray-200 dark:border-gray-700">
            <span>Total</span>
            <span className="text-[#5E8E3E]">£124.99</span>
          </div>
        </div>
        <div className="bg-[#5A31F4] text-white text-[9px] font-semibold py-2 rounded text-center mb-2">
          Shop Pay
        </div>
        <div className="text-center text-[8px] text-gray-400 mb-2">or pay with card</div>
        <div className="flex gap-2 justify-center mb-3">
          {["Visa", "MC", "Amex", "PayPal"].map((m) => (
            <div key={m} className="w-8 h-5 bg-gray-100 dark:bg-gray-800 rounded text-[6px] flex items-center justify-center text-gray-500 font-medium">
              {m}
            </div>
          ))}
        </div>
        <div className="bg-[#5E8E3E] text-white text-[10px] font-semibold py-2.5 rounded text-center">
          Complete Order
        </div>
        <div className="flex gap-3 justify-center mt-3">
          {["SSL Secure", "Free Returns", "24/7 Support"].map((badge) => (
            <span key={badge} className="flex items-center gap-0.5 text-[7px] text-gray-400">
              <Shield className="h-2 w-2" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShopifyDevelopment() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEO
        title="Shopify Development UK | Custom Stores & Themes"
        description="Shopify development services. Custom themes, Shopify Plus, app development. 30+ Shopify stores built. Conversion-focused design. Free quote."
        canonical="/services/web-development/cms/shopify"
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "Shopify" },
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full mb-4 border-0">
                Shopify Development
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Shopify Development Services
              </h1>
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Build, Grow, and Scale Your Online Store
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We build high-converting Shopify stores that look stunning, load fast, and turn visitors into customers. From custom themes to Shopify Plus, we create e-commerce experiences that drive revenue.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                {[
                  { icon: Palette, label: "Custom Themes" },
                  { icon: Crown, label: "Shopify Plus" },
                  { icon: Puzzle, label: "App Development" },
                  { icon: TrendingUp, label: "Conversion Focused" },
                ].map((pill) => (
                  <Badge key={pill.label} variant="outline" className="flex items-center gap-1.5 px-3 py-1.5">
                    <pill.icon className="h-3.5 w-3.5" style={{ color: SHOPIFY_COLOR }} />
                    {pill.label}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "£12B+", label: "GMV on Shopify" },
                  { value: "30+", label: "Stores Built" },
                  { value: "99.9%", label: "Uptime SLA" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card border rounded-xl p-4 text-center">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold text-[20px]">
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0">
                    Start Your Shopify Store
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline">
                    View Shopify Examples
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <ShopifyHeroMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Shopify Services We Offer
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              From custom themes to Shopify Plus enterprise solutions, we cover every aspect of Shopify development.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Card className="p-8 h-full hover:border-green-500/50 hover:shadow-xl transition-all">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${SHOPIFY_COLOR}15` }}
                  >
                    <service.icon className="h-6 w-6" style={{ color: SHOPIFY_COLOR }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: SHOPIFY_COLOR }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Ready to Launch Your Shopify Store?"
            description="Free consultation to discuss your products, audience, and goals."
            primaryCTA={{ text: "Get Free Shopify Quote", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Shopify App Ecosystem
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Leverage the best Shopify apps and custom integrations to power your store.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Must-Have Shopify Apps</h3>
                <div className="grid grid-cols-2 gap-4">
                  {shopifyApps.map((app) => (
                    <div key={app.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${SHOPIFY_COLOR}15` }}>
                        <app.icon className="h-4 w-4" style={{ color: SHOPIFY_COLOR }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{app.name}</p>
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4 mt-0.5">{app.category}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Custom Integrations</h3>
                <div className="space-y-4">
                  {customIntegrations.map((integration) => (
                    <div key={integration.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${SHOPIFY_COLOR}15` }}>
                        <integration.icon className="h-4 w-4" style={{ color: SHOPIFY_COLOR }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{integration.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Shopify Plus Features
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Enterprise-grade features for high-volume merchants who need more power and flexibility.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Why Shopify Plus?</h3>
                <div className="space-y-3">
                  {shopifyPlusBenefits.map((benefit) => (
                    <Card key={benefit.title} className="p-4 border-l-4 border-l-green-500">
                      <div className="flex items-center gap-3">
                        <benefit.icon className="h-5 w-5 flex-shrink-0" style={{ color: SHOPIFY_COLOR }} />
                        <p className="text-sm font-semibold">{benefit.title}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "25K+", label: "Plus Merchants" },
                  { value: "$444B", label: "GMV" },
                  { value: "99.99%", label: "Uptime SLA" },
                  { value: "10K+", label: "Orders/Minute Peak" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="bg-card border rounded-xl p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-3xl font-bold">
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              <Card className="p-4 mt-4">
                <p className="text-sm text-muted-foreground text-center">
                  Shopify Plus starts at <span className="font-semibold text-foreground">$2,300/month</span> with custom pricing based on GMV. Contact us to evaluate if Plus is right for your business.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Is Shopify Plus Right For You?"
            description="Book a call to evaluate if Shopify Plus makes sense for your business."
            primaryCTA={{ text: "Discuss Shopify Plus", link: "/contact" }}
            secondaryCTA={{ text: "View Store Examples", link: "/case-studies" }}
            size="large"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Checkout & Payment Optimization
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Optimize every step of the checkout to maximize conversions and revenue.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <CheckoutMockup />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {checkoutFeatures.map((feature) => (
                  <Card key={feature.title} className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${SHOPIFY_COLOR}15` }}>
                        <feature.icon className="h-4 w-4" style={{ color: SHOPIFY_COLOR }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{feature.title}</p>
                        <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full text-xs font-semibold mt-1">
                          {feature.metric}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Sell Globally with Shopify
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Reach customers worldwide with multi-currency, multi-language, and global shipping support.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Multi-Currency",
                features: ["Auto-detect customer currency", "130+ currencies supported", "Real-time exchange rates", "Shopify Payments integration"],
              },
              {
                icon: Globe,
                title: "Multi-Language",
                features: ["Unlimited languages", "Auto language detection", "SEO optimized per language", "Translation app integration"],
              },
              {
                icon: Truck,
                title: "Global Shipping",
                features: ["Real-time shipping rates", "Customs & duties calculation", "Local fulfillment centers", "Order tracking worldwide"],
              },
            ].map((column, i) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-8 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${SHOPIFY_COLOR}15` }}
                  >
                    <column.icon className="h-6 w-6" style={{ color: SHOPIFY_COLOR }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{column.title}</h3>
                  <div className="space-y-2">
                    {column.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: SHOPIFY_COLOR }} />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            {[
              { value: "175", label: "Countries" },
              { value: "20+", label: "Languages" },
              { value: "130+", label: "Currencies" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-card border rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-3xl font-bold">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose Us for Shopify?"
            subtitle="What sets our Shopify development apart from the rest"
            values={whyChooseValues}
            columns={3}
            accentColor={SHOPIFY_COLOR}
          />
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Shopify Technology Stack
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The tools and technologies we use to build Shopify stores
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {techTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-[#5E8E3E] text-white shadow-lg"
                    : "bg-card border hover:border-green-500/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {techTabs[activeTab].technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                      <TechTabIcon slug={tech.slug} name={tech.name} />
                      <span className="text-sm font-medium text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Shopify Development Process"
            subtitle="A proven process for building Shopify stores that convert"
            steps={processSteps}
            accentColor="#5E8E3E"
          />
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Shopify Stores We've Built
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Real projects delivered for real e-commerce businesses
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-all">
                  <div className={`bg-gradient-to-r ${study.gradient} p-8 flex flex-col items-center`}>
                    <study.icon className="h-12 w-12 text-white mb-3" />
                    <Badge className="bg-white/20 text-white border-0">{study.badge}</Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{study.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                    <div className="space-y-2 mb-4">
                      {study.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: SHOPIFY_COLOR }} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {study.tech.map((t) => (
                        <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground border-t pt-4">
                      <Rocket className="h-4 w-4" style={{ color: SHOPIFY_COLOR }} />
                      <span>Delivered in <span className="font-semibold text-foreground">{study.timeline}</span></span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Shopify FAQs
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Common questions about Shopify development
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-xl px-6">
                  <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Let's Build Your Shopify Store"
            description="Free 30-minute consultation to discuss your products, audience, and goals. No obligation, just honest advice."
            primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
            secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
            size="large"
          />
        </div>
      </section>
    </>
  );
}
