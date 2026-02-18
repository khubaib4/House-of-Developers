import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import {
  CheckCircle2,
  Palette,
  ShoppingCart,
  Shield,
  Settings,
  Puzzle,
  Zap,
  Code2,
  TrendingUp,
  Users,
  Headphones,
  Package,
  ArrowRight,
  ArrowRightLeft,
  Lock,
  Search,
  Globe,
  CreditCard,
  Truck,
  BarChart,
  Percent,
  Tag,
  Smartphone,
  Paintbrush,
  HardDrive,
  Mail,
  Database,
  Rocket,
  MessageSquare,
  Building2,
  GraduationCap,
  ShoppingBag,
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

const WP_COLOR = "#9333EA";

const services = [
  {
    icon: Palette,
    title: "Custom WordPress Themes",
    description: "Bespoke themes designed and coded from scratch to match your brand perfectly.",
    features: ["100% custom design", "Mobile-first responsive", "Fast page load speeds", "Easy content editing"],
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce E-Commerce",
    description: "Full-featured online stores with WooCommerce, the world's most popular e-commerce platform.",
    features: ["Custom store design", "Payment gateway integration", "Product variations & stock", "Shipping & tax automation"],
  },
  {
    icon: Puzzle,
    title: "Custom Plugin Development",
    description: "Custom plugins built to add unique functionality your business needs.",
    features: ["Custom functionality", "Third-party integrations", "WordPress coding standards", "Full documentation"],
  },
  {
    icon: ArrowRightLeft,
    title: "WordPress Migration",
    description: "Seamless migration from any platform to WordPress with zero downtime.",
    features: ["Zero downtime migration", "SEO preservation (301s)", "Content & media transfer", "Design improvements"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing WordPress site for better user experience and SEO.",
    features: ["Sub-2 second load times", "Image & code optimization", "CDN integration", "Database cleanup"],
  },
  {
    icon: Shield,
    title: "WordPress Maintenance",
    description: "Keep your WordPress site secure, updated, and running smoothly.",
    features: ["Security updates & monitoring", "Daily backups", "Uptime monitoring", "Plugin & theme updates"],
  },
];

const comparisonData = [
  { feature: "Ownership", wordpress: { text: "Full", status: "excellent" }, shopify: { text: "Limited", status: "good" }, wix: { text: "No", status: "poor" }, webflow: { text: "Limited", status: "good" }, squarespace: { text: "No", status: "poor" } },
  { feature: "Customization", wordpress: { text: "Unlimited", status: "excellent" }, shopify: { text: "Limited", status: "good" }, wix: { text: "Template-based", status: "good" }, webflow: { text: "High", status: "excellent" }, squarespace: { text: "Limited", status: "good" } },
  { feature: "E-Commerce", wordpress: { text: "WooCommerce", status: "excellent" }, shopify: { text: "Built-in", status: "excellent" }, wix: { text: "Basic", status: "good" }, webflow: { text: "Basic", status: "good" }, squarespace: { text: "Basic", status: "good" } },
  { feature: "Monthly Cost", wordpress: { text: "£10-50", status: "neutral" }, shopify: { text: "£25-300", status: "neutral" }, wix: { text: "£10-30", status: "neutral" }, webflow: { text: "£12-36", status: "neutral" }, squarespace: { text: "£10-35", status: "neutral" } },
  { feature: "SEO Control", wordpress: { text: "Full", status: "excellent" }, shopify: { text: "Good", status: "good" }, wix: { text: "Limited", status: "good" }, webflow: { text: "Good", status: "excellent" }, squarespace: { text: "Limited", status: "good" } },
  { feature: "Plugin Ecosystem", wordpress: { text: "60,000+", status: "excellent" }, shopify: { text: "8,000+", status: "good" }, wix: { text: "300+", status: "good" }, webflow: { text: "Limited", status: "good" }, squarespace: { text: "Limited", status: "good" } },
  { feature: "Code Access", wordpress: { text: "Full", status: "excellent" }, shopify: { text: "Liquid only", status: "good" }, wix: { text: "No", status: "poor" }, webflow: { text: "Custom code", status: "good" }, squarespace: { text: "Limited", status: "good" } },
  { feature: "Scalability", wordpress: { text: "Unlimited", status: "excellent" }, shopify: { text: "High", status: "excellent" }, wix: { text: "Limited", status: "good" }, webflow: { text: "Medium", status: "good" }, squarespace: { text: "Limited", status: "good" } },
];

const plugins = [
  { name: "Yoast SEO", icon: Search, category: "SEO" },
  { name: "WooCommerce", icon: ShoppingCart, category: "E-commerce" },
  { name: "Contact Form 7", icon: Mail, category: "Forms" },
  { name: "Elementor", icon: Palette, category: "Page Builder" },
  { name: "WP Rocket", icon: Rocket, category: "Performance" },
  { name: "Wordfence", icon: Shield, category: "Security" },
  { name: "Gravity Forms", icon: Mail, category: "Forms" },
  { name: "ACF", icon: Database, category: "Development" },
  { name: "WP Super Cache", icon: Zap, category: "Performance" },
  { name: "UpdraftPlus", icon: HardDrive, category: "Backup" },
  { name: "Redirection", icon: ArrowRight, category: "SEO" },
  { name: "WPML", icon: Globe, category: "Multilingual" },
];

const themeFeatures = [
  { icon: Paintbrush, title: "Pixel-Perfect Design", description: "Every element crafted to your exact specifications" },
  { icon: Smartphone, title: "Mobile-First Responsive", description: "Looks great on every screen size" },
  { icon: Zap, title: "Optimized Performance", description: "Clean code for fast load times" },
  { icon: Settings, title: "Easy Customization", description: "Theme options panel for easy changes" },
  { icon: Lock, title: "Security Hardened", description: "Built with security best practices" },
  { icon: Search, title: "SEO Optimized", description: "Schema markup and clean HTML structure" },
  { icon: Palette, title: "Gutenberg Compatible", description: "Full support for the block editor" },
  { icon: Code2, title: "Developer Friendly", description: "Well-documented, maintainable code" },
];

const wooFeatures = [
  { icon: Package, title: "Unlimited Products", description: "No limits on product listings" },
  { icon: CreditCard, title: "Payment Gateways", description: "Stripe, PayPal, and 100+ options" },
  { icon: Truck, title: "Shipping Integration", description: "Real-time rates and tracking" },
  { icon: BarChart, title: "Sales Analytics", description: "Detailed revenue and order reports" },
  { icon: Users, title: "Customer Accounts", description: "Order history and wishlists" },
  { icon: Tag, title: "Product Variations", description: "Size, color, and custom attributes" },
  { icon: Globe, title: "Multi-Currency", description: "Sell in any currency worldwide" },
  { icon: Percent, title: "Coupons & Discounts", description: "Flexible promotional tools" },
];

const whyChooseValues = [
  { icon: Code2, title: "Custom Code Not Templates", description: "We write custom themes and plugins, not just install templates and call it done." },
  { icon: Zap, title: "Performance Optimized", description: "Every site we build scores 90+ on PageSpeed with sub-2 second load times." },
  { icon: Shield, title: "Security First", description: "SSL, firewalls, malware scanning, and daily backups included on every project." },
  { icon: Settings, title: "Easy to Manage", description: "We build sites you can actually manage yourself with full training included." },
  { icon: TrendingUp, title: "SEO Ready", description: "Proper heading structure, schema markup, and Yoast SEO configuration included." },
  { icon: Palette, title: "Beautiful Design", description: "Pixel-perfect, mobile-first designs that match your brand perfectly." },
  { icon: Users, title: "WooCommerce Experts", description: "Specialists in e-commerce with 20+ WooCommerce stores built and launched." },
  { icon: Headphones, title: "Ongoing Support", description: "30 days included post-launch, then affordable monthly maintenance packages." },
  { icon: Package, title: "Plugin Integration", description: "Expert integration of plugins for forms, SEO, caching, security, and more." },
];

const techTabs = [
  {
    label: "Core Technologies",
    technologies: [
      { name: "WordPress", slug: "wordpress" },
      { name: "PHP", slug: "php" },
      { name: "MySQL", slug: "mysql" },
      { name: "JavaScript", slug: "javascript" },
      { name: "React", slug: "react" },
      { name: "Sass", slug: "sass" },
      { name: "Webpack", slug: "webpack" },
      { name: "Composer", slug: "composer" },
    ],
  },
  {
    label: "Essential Plugins",
    technologies: [
      { name: "WooCommerce", slug: "woocommerce" },
      { name: "Yoast SEO", slug: "yoast" },
      { name: "Elementor", slug: "elementor" },
      { name: "Contact Form 7", slug: "wordpress" },
      { name: "ACF", slug: "wordpress" },
      { name: "Gravity Forms", slug: "wordpress" },
      { name: "WPML", slug: "wordpress" },
      { name: "Wordfence", slug: "wordpress" },
    ],
  },
  {
    label: "Performance & Security",
    technologies: [
      { name: "WP Rocket", slug: "wordpress" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "Wordfence", slug: "wordpress" },
      { name: "UpdraftPlus", slug: "wordpress" },
      { name: "Redis", slug: "redis" },
      { name: "Nginx", slug: "nginx" },
      { name: "Let's Encrypt", slug: "letsencrypt" },
      { name: "Sentry", slug: "sentry" },
    ],
  },
  {
    label: "Development Tools",
    technologies: [
      { name: "GitHub", slug: "github" },
      { name: "Figma", slug: "figma" },
      { name: "Docker", slug: "docker" },
      { name: "Composer", slug: "composer" },
      { name: "Gulp", slug: "gulp" },
      { name: "Webpack", slug: "webpack" },
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "Local by Flywheel", slug: "wordpress" },
    ],
  },
  {
    label: "Hosting & Deployment",
    technologies: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "DigitalOcean", slug: "digitalocean" },
      { name: "WP Engine", slug: "wpengine" },
      { name: "Kinsta", slug: "wordpress" },
      { name: "SiteGround", slug: "wordpress" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Docker", slug: "docker" },
    ],
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Planning",
    points: [
      "Free consultation to understand your business goals and requirements",
      "Competitor analysis and sitemap planning",
      "Technical specification and project timeline",
    ],
  },
  {
    icon: Palette,
    title: "Design & Approval",
    points: [
      "Wireframes and mockups for your review",
      "Brand integration with your colors, fonts, and logo",
      "Revision rounds until you're 100% happy",
    ],
  },
  {
    icon: Code2,
    title: "WordPress Development",
    points: [
      "Custom theme development with clean, optimized code",
      "Plugin integration and custom functionality",
      "Content migration and SEO setup",
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Training",
    points: [
      "Thorough testing across devices and browsers",
      "Comprehensive training so you can manage your site",
      "Go-live deployment with 30 days of support",
    ],
  },
];

const caseStudies = [
  {
    icon: ShoppingBag,
    title: "LuxeWear Fashion Store",
    gradient: "from-purple-600 to-violet-600",
    badge: "E-Commerce",
    description: "Full WooCommerce store with 800+ products, custom filtering, size guides, and integrated Stripe payments.",
    features: ["Custom product pages", "Advanced filtering", "Stripe & PayPal", "Inventory management"],
    tech: ["WordPress", "WooCommerce", "PHP", "Stripe"],
    timeline: "8 weeks",
  },
  {
    icon: Building2,
    title: "Law Firm Corporate Site",
    gradient: "from-purple-600 to-blue-600",
    badge: "Business Website",
    description: "Professional corporate site with practice areas, attorney bios, case results, and client intake forms.",
    features: ["Practice area pages", "Attorney profiles", "Contact forms", "Blog & resources"],
    tech: ["WordPress", "ACF", "Yoast SEO", "CF7"],
    timeline: "6 weeks",
  },
  {
    icon: GraduationCap,
    title: "Online Course Platform",
    gradient: "from-purple-600 to-pink-600",
    badge: "Membership Site",
    description: "Online learning platform with video courses, quizzes, student dashboards, and subscription billing.",
    features: ["Course management", "Student dashboards", "Video hosting", "Subscription billing"],
    tech: ["WordPress", "LearnDash", "Stripe", "Vimeo"],
    timeline: "10 weeks",
  },
];

const faqs = [
  { q: "How much does a WordPress website cost?", a: "Simple brochure sites start from £1,500-£3,000. Standard business sites with blog and forms are £3,000-£6,000. WooCommerce stores range from £5,000-£15,000+. We provide a fixed-price quote after our free consultation so there are no surprises." },
  { q: "Can WordPress handle e-commerce?", a: "Absolutely! WooCommerce powers 30% of all online stores worldwide. It handles unlimited products, multiple payment gateways, shipping calculators, tax automation, and integrates with virtually any business tool you need." },
  { q: "Can I update the site myself after launch?", a: "Yes! That's one of WordPress's biggest strengths. We provide comprehensive training (video tutorials + live sessions) so you can add pages, update content, upload images, and manage products without any coding knowledge." },
  { q: "How long does it take to build a WordPress site?", a: "Simple sites: 2-3 weeks. Standard business sites: 3-5 weeks. E-commerce stores: 5-8 weeks. Complex sites with custom features: 8-12 weeks. We'll give you an accurate timeline during our consultation." },
  { q: "What's the difference between WordPress.com and WordPress.org?", a: "WordPress.org is the self-hosted version that gives you full control — this is what we use. WordPress.com is a hosted service with limitations. We always recommend .org for businesses because you own everything and have unlimited customization." },
  { q: "Do I need to arrange my own hosting?", a: "We can handle everything. We recommend managed WordPress hosts like WP Engine, Kinsta, or SiteGround for the best performance and security. We'll set up hosting, domain, SSL, and email for you." },
  { q: "Can you migrate my existing site to WordPress?", a: "Yes! We regularly migrate sites from Wix, Squarespace, Shopify, custom HTML, and older WordPress installations. We preserve all content, set up 301 redirects for SEO, and usually improve the design in the process." },
  { q: "Is WordPress secure?", a: "When properly configured, WordPress is very secure. We implement SSL certificates, security plugins (Wordfence), firewalls, malware scanning, regular updates, strong passwords, and daily backups. We follow WordPress security best practices on every project." },
  { q: "Can WordPress handle high traffic?", a: "Yes! With proper hosting and optimization, WordPress can handle millions of visitors. We implement caching, CDN integration, database optimization, and image compression to ensure your site stays fast under load." },
  { q: "What is a child theme and do I need one?", a: "A child theme inherits the functionality of a parent theme while allowing customizations that won't be lost during updates. If we're customizing an existing theme, we always use a child theme. For fully custom builds, it's not necessary." },
  { q: "Can WordPress integrate with my CRM?", a: "Yes! WordPress integrates with virtually every CRM including HubSpot, Salesforce, Zoho, Mailchimp, and more. We can connect contact forms, WooCommerce orders, and user registrations directly to your CRM." },
  { q: "Do you offer ongoing maintenance?", a: "Yes! We offer monthly maintenance packages starting at £150/month including WordPress core updates, plugin updates, security monitoring, daily backups, uptime monitoring, and priority support." },
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

function StatusCell({ text, status }: { text: string; status: string }) {
  if (status === "excellent") {
    return <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-medium text-sm"><CheckCircle2 className="h-4 w-4" />{text}</span>;
  }
  if (status === "poor") {
    return <span className="inline-flex items-center gap-1 text-red-500 dark:text-red-400 font-medium text-sm">❌ {text}</span>;
  }
  if (status === "good") {
    return <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium text-sm">⚠️ {text}</span>;
  }
  return <span className="text-sm text-muted-foreground">{text}</span>;
}

function WordPressHeroMockup() {
  return (
    <div className="relative h-[500px]">
      <div className="absolute inset-0 flex rounded-2xl overflow-hidden border shadow-2xl">
        <div className="w-1/2 flex">
          <div className="w-14 bg-[#1d2327] flex flex-col items-center py-3 gap-3">
            <div className="w-7 h-7 rounded bg-[#0073aa] flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">W</span>
            </div>
            {[Settings, Palette, Mail, Users, ShoppingCart, Puzzle].map((Icon, i) => (
              <Icon key={i} className="h-3.5 w-3.5 text-gray-400" />
            ))}
          </div>
          <div className="flex-1 bg-[#f1f1f1] dark:bg-[#1e1e1e]">
            <div className="bg-[#23282d] px-3 py-1.5 flex items-center justify-between">
              <span className="text-[10px] text-white/70">Dashboard</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-gray-600" />
                <span className="text-[9px] text-white/50">Admin</span>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-[11px] font-bold text-gray-800 dark:text-gray-200 mb-2">Posts</h3>
              <div className="space-y-1">
                {["Getting Started with WordPress", "Our Latest Updates", "Welcome to Our Blog"].map((title, i) => (
                  <div key={i} className="flex items-center justify-between bg-white dark:bg-[#2a2a2a] rounded px-2 py-1.5 text-[9px]">
                    <span className="text-blue-600 dark:text-blue-400 font-medium truncate">{title}</span>
                    <Badge variant="outline" className="text-[7px] px-1 py-0 h-3.5">Published</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-1.5">
                <div className="bg-white dark:bg-[#2a2a2a] rounded p-2 text-center">
                  <span className="text-[14px] font-bold text-purple-600">1,247</span>
                  <p className="text-[7px] text-gray-500">Page Views</p>
                </div>
                <div className="bg-white dark:bg-[#2a2a2a] rounded p-2 text-center">
                  <span className="text-[14px] font-bold text-purple-600">89</span>
                  <p className="text-[7px] text-gray-500">Comments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-500 -translate-x-1/2 z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shadow-lg">
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
              https://yourwebsite.com
            </div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
              <span className="text-[10px] font-bold text-gray-800 dark:text-white">YourBrand</span>
              <div className="flex gap-2">
                {["Home", "About", "Blog"].map((n) => (
                  <span key={n} className="text-[8px] text-gray-500">{n}</span>
                ))}
                <span className="text-[8px] bg-purple-600 text-white px-1.5 py-0.5 rounded">Contact</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/10 to-violet-600/10 px-3 py-4 text-center">
              <p className="text-[11px] font-bold text-gray-800 dark:text-white">Welcome to the Future</p>
              <p className="text-[8px] text-gray-500 mt-0.5">Building amazing digital experiences</p>
              <div className="mt-2 flex gap-1.5 justify-center">
                <span className="text-[7px] bg-purple-600 text-white px-2 py-0.5 rounded">Get Started</span>
                <span className="text-[7px] border border-gray-300 dark:border-gray-600 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">Learn More</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 px-3 py-2 flex-1">
              {[
                { title: "Services", color: "bg-purple-500/10" },
                { title: "Portfolio", color: "bg-blue-500/10" },
                { title: "Blog", color: "bg-green-500/10" },
              ].map((card) => (
                <div key={card.title} className={`${card.color} rounded p-1.5 flex flex-col items-center justify-center`}>
                  <div className="w-4 h-4 rounded bg-purple-500/20 mb-1" />
                  <span className="text-[7px] font-medium text-gray-700 dark:text-gray-300">{card.title}</span>
                  <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-700 rounded mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -top-3 -right-3 bg-purple-600 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        43% of websites
      </motion.div>
      <motion.div
        className="absolute -bottom-3 -left-3 bg-violet-600 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        60K+ plugins
      </motion.div>
      <motion.div
        className="absolute top-1/2 -right-3 bg-purple-700 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
      >
        100% custom
      </motion.div>
    </div>
  );
}

function WooCommerceMockup() {
  const products = [
    { name: "Classic T-Shirt", price: "£29.99" },
    { name: "Denim Jacket", price: "£89.99" },
    { name: "Running Shoes", price: "£119.99" },
    { name: "Leather Bag", price: "£149.99" },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border shadow-xl">
      <div className="bg-gray-100 dark:bg-[#1a1a1a] px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white dark:bg-[#2a2a2a] rounded text-[10px] px-3 py-1 text-gray-400">
          https://store.example.com
        </div>
      </div>
      <div className="bg-white dark:bg-[#0f0f0f]">
        <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
          <span className="text-xs font-bold text-gray-800 dark:text-white flex items-center gap-1">
            <ShoppingCart className="h-3 w-3 text-purple-600" /> LuxeStore
          </span>
          <div className="flex items-center gap-3">
            <Search className="h-3 w-3 text-gray-400" />
            <div className="relative">
              <ShoppingBag className="h-3 w-3 text-gray-400" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-600 rounded-full text-[6px] text-white flex items-center justify-center">3</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-4 text-center">
          <p className="text-white font-bold text-sm">Summer Sale - 30% Off</p>
          <p className="text-white/80 text-[10px] mt-0.5">Use code SUMMER30 at checkout</p>
          <span className="inline-block mt-1.5 bg-white text-purple-600 text-[9px] font-semibold px-3 py-1 rounded-full">Shop Now</span>
        </div>
        <div className="grid grid-cols-2 gap-3 p-4">
          {products.map((product) => (
            <div key={product.name} className="border rounded-lg p-2 dark:border-gray-800">
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded mb-2 flex items-center justify-center">
                <Package className="h-6 w-6 text-gray-300 dark:text-gray-600" />
              </div>
              <p className="text-[10px] font-medium text-gray-800 dark:text-white">{product.name}</p>
              <p className="text-[10px] font-bold text-purple-600 mt-0.5">{product.price}</p>
              <button className="w-full mt-1.5 bg-purple-600 text-white text-[8px] py-1 rounded font-medium">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WordPressDevelopment() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "WordPress" },
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-2 rounded-full mb-4 border-0">
                WordPress Development
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                WordPress Development Services
              </h1>
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                The World's Most Powerful CMS. Built Your Way.
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We build custom WordPress websites that are fast, secure, and easy to manage. From business sites to WooCommerce stores, we create WordPress solutions tailored to your needs.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                {[
                  { icon: Palette, label: "Custom Themes" },
                  { icon: ShoppingCart, label: "WooCommerce" },
                  { icon: Shield, label: "Fast & Secure" },
                  { icon: Settings, label: "Easy to Manage" },
                ].map((pill) => (
                  <Badge key={pill.label} variant="outline" className="flex items-center gap-1.5 px-3 py-1.5">
                    <pill.icon className="h-3.5 w-3.5" style={{ color: WP_COLOR }} />
                    {pill.label}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "43%", label: "Of All Websites" },
                  { value: "40+", label: "WP Sites Built" },
                  { value: "100%", label: "Custom Code" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card border rounded-xl p-4 text-center">
                    <div className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent text-3xl font-bold">
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 text-white border-0">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline">
                    View Our Work
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
              <WordPressHeroMockup />
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
              WordPress Services We Offer
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              From custom themes to WooCommerce stores, we cover every aspect of WordPress development.
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
                <Card className="p-8 h-full hover:border-purple-500/50 hover:shadow-xl transition-all">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${WP_COLOR}15` }}
                  >
                    <service.icon className="h-6 w-6" style={{ color: WP_COLOR }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: WP_COLOR }} />
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
            title="Ready to Build Your WordPress Site?"
            description="Free consultation, honest advice, and a clear quote. Let's discuss your project."
            primaryCTA={{ text: "Get Free WordPress Quote", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why WordPress?
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              How WordPress compares to other platforms
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold text-purple-600">WordPress</th>
                      <th className="text-center p-4 font-semibold">Shopify</th>
                      <th className="text-center p-4 font-semibold">Wix</th>
                      <th className="text-center p-4 font-semibold">Webflow</th>
                      <th className="text-center p-4 font-semibold">Squarespace</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center"><StatusCell text={row.wordpress.text} status={row.wordpress.status} /></td>
                        <td className="p-4 text-center"><StatusCell text={row.shopify.text} status={row.shopify.status} /></td>
                        <td className="p-4 text-center"><StatusCell text={row.wix.text} status={row.wix.status} /></td>
                        <td className="p-4 text-center"><StatusCell text={row.webflow.text} status={row.webflow.status} /></td>
                        <td className="p-4 text-center"><StatusCell text={row.squarespace.text} status={row.squarespace.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 border-t bg-muted/30 flex gap-6 text-xs text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Excellent</span>
                <span>⚠️ Good/Limited</span>
                <span>❌ Poor/None</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="See WordPress in Action"
            description="View examples of WordPress sites we've built or book a demo to see what's possible."
            primaryCTA={{ text: "View WordPress Examples", link: "/case-studies" }}
            secondaryCTA={{ text: "Book Demo Call", link: "/contact" }}
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
              Powered by 60,000+ Plugins
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              WordPress's vast ecosystem means there's a solution for virtually everything. Here are some of our favourites.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Essential Plugins</h3>
                <div className="grid grid-cols-2 gap-4">
                  {plugins.map((plugin) => (
                    <div key={plugin.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${WP_COLOR}15` }}>
                        <plugin.icon className="h-4 w-4" style={{ color: WP_COLOR }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{plugin.name}</p>
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4 mt-0.5">{plugin.category}</Badge>
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
                <h3 className="text-xl font-bold mb-6">Custom Theme Features</h3>
                <div className="space-y-4">
                  {themeFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${WP_COLOR}15` }}>
                        <feature.icon className="h-4 w-4" style={{ color: WP_COLOR }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{feature.title}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
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
              WooCommerce E-Commerce
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Build a powerful online store with WooCommerce — the world's most popular e-commerce platform.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <WooCommerceMockup />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {wooFeatures.map((feature) => (
                  <Card key={feature.title} className="p-4 border-l-4 border-l-purple-500">
                    <div className="flex items-start gap-3">
                      <feature.icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: WP_COLOR }} />
                      <div>
                        <p className="text-sm font-semibold">{feature.title}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            {[
              { value: "30%", label: "Of All E-Commerce" },
              { value: "5M+", label: "Active Stores" },
              { value: "£0", label: "Transaction Fees" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="bg-card border rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent text-3xl font-bold">
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
            title="Why Choose Us for WordPress?"
            subtitle="What sets our WordPress development apart from the rest"
            values={whyChooseValues}
            columns={3}
            accentColor={WP_COLOR}
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
              WordPress Technology Stack
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The tools and technologies we use to build WordPress sites
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {techTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-card border hover:border-purple-500/50"
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
            title="Our WordPress Development Process"
            subtitle="A proven process for building WordPress sites that work"
            steps={processSteps}
            accentColor="#9333EA"
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
              WordPress Sites We've Built
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Real projects delivered for real businesses
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
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className={`bg-gradient-to-r ${study.gradient} p-6 flex items-center justify-center`}>
                    <study.icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold">{study.title}</h3>
                      <Badge variant="outline" className="text-[10px] flex-shrink-0">{study.badge}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                    <div className="space-y-1.5 mb-4">
                      {study.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: WP_COLOR }} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 border-t">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {study.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-[10px] px-1.5">{t}</Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">Timeline: <span className="font-semibold">{study.timeline}</span></p>
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
              WordPress FAQ
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Common questions about WordPress development
            </motion.p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Let's Build Your WordPress Site"
            description="Free 30-minute consultation. We'll discuss your goals, answer questions, and give you an honest recommendation."
            primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
            secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
            size="large"
          />
        </div>
      </section>
    </>
  );
}
