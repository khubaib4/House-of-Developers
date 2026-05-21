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
  ArrowRight,
  ArrowRightLeft,
  Globe,
  CreditCard,
  BarChart,
  Mail,
  Database,
  Rocket,
  MessageSquare,
  Search,
  Layout,
  Lock,
  Settings,
  Calendar,
  CalendarDays,
  FileText,
  Video,
  UtensilsCrossed,
  Clock,
  Home,
  Activity,
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

const WIX_COLOR = "#0C6EFC";

const services = [
  {
    icon: Palette,
    title: "Custom Wix Design",
    description: "Pixel-perfect custom design tailored to your brand identity.",
    features: ["Pixel-perfect custom design", "Mobile-first responsive", "Brand-consistent styling", "Fast page speeds"],
  },
  {
    icon: ShoppingCart,
    title: "Wix E-Commerce",
    description: "Full-featured online stores powered by Wix Stores.",
    features: ["Custom online store", "Payment gateway setup", "Product management", "Shipping & tax config"],
  },
  {
    icon: Search,
    title: "Wix SEO Services",
    description: "Comprehensive SEO setup to get your site ranking on Google.",
    features: ["Full SEO audit & setup", "Google Search Console", "Schema markup", "Page speed optimization"],
  },
  {
    icon: ArrowRightLeft,
    title: "Wix Migration",
    description: "Seamless migration from any platform to Wix with zero downtime.",
    features: ["Zero downtime migration", "Content & media transfer", "SEO preservation (301s)", "Design improvements"],
  },
  {
    icon: Code2,
    title: "Wix Velo Development",
    description: "Custom code solutions using Wix's powerful development platform.",
    features: ["Custom Velo coding", "Database collections", "API integrations", "Dynamic pages"],
  },
  {
    icon: Shield,
    title: "Wix Maintenance",
    description: "Keep your Wix site running smoothly with ongoing support.",
    features: ["Monthly updates", "Performance monitoring", "Content updates", "Priority support"],
  },
];

const comparisonData = [
  { feature: "Ease of Use", wix: { text: "Drag & Drop", status: "excellent" }, wordpress: { text: "Learning Curve", status: "good" }, squarespace: { text: "Easy", status: "excellent" }, webflow: { text: "Complex", status: "good" }, shopify: { text: "Easy", status: "excellent" } },
  { feature: "Design Flexibility", wix: { text: "Full Control", status: "excellent" }, wordpress: { text: "Unlimited", status: "excellent" }, squarespace: { text: "Template-based", status: "good" }, webflow: { text: "High", status: "excellent" }, shopify: { text: "Limited", status: "good" } },
  { feature: "No Coding Needed", wix: { text: "Yes", status: "excellent" }, wordpress: { text: "Often Needed", status: "poor" }, squarespace: { text: "Yes", status: "excellent" }, webflow: { text: "Required", status: "poor" }, shopify: { text: "Yes", status: "excellent" } },
  { feature: "Built-in Hosting", wix: { text: "Included", status: "excellent" }, wordpress: { text: "Separate", status: "poor" }, squarespace: { text: "Included", status: "excellent" }, webflow: { text: "Included", status: "excellent" }, shopify: { text: "Included", status: "excellent" } },
  { feature: "E-Commerce", wix: { text: "Built-in", status: "excellent" }, wordpress: { text: "Plugin (WooCommerce)", status: "good" }, squarespace: { text: "Basic", status: "good" }, webflow: { text: "Basic", status: "good" }, shopify: { text: "Full", status: "excellent" } },
  { feature: "App Market", wix: { text: "500+ Apps", status: "excellent" }, wordpress: { text: "60,000+ Plugins", status: "excellent" }, squarespace: { text: "Limited", status: "good" }, webflow: { text: "Limited", status: "good" }, shopify: { text: "8,000+", status: "good" } },
  { feature: "Monthly Cost", wix: { text: "\u00a30-30/mo", status: "neutral" }, wordpress: { text: "\u00a310-50+ (hosting)", status: "neutral" }, squarespace: { text: "\u00a310-35/mo", status: "neutral" }, webflow: { text: "\u00a312-36/mo", status: "neutral" }, shopify: { text: "\u00a325-300/mo", status: "neutral" } },
  { feature: "SEO Tools", wix: { text: "Built-in Wizard", status: "excellent" }, wordpress: { text: "Full (Plugins)", status: "excellent" }, squarespace: { text: "Limited", status: "good" }, webflow: { text: "Good", status: "excellent" }, shopify: { text: "Good", status: "good" } },
];

const wixApps = [
  { name: "Wix Bookings", icon: Calendar, category: "Appointments" },
  { name: "Wix Stores", icon: ShoppingCart, category: "E-commerce" },
  { name: "Wix Blog", icon: FileText, category: "Content" },
  { name: "Wix Forms", icon: Mail, category: "Lead Gen" },
  { name: "Wix Chat", icon: MessageSquare, category: "Support" },
  { name: "Wix Events", icon: CalendarDays, category: "Events" },
  { name: "Wix Members", icon: Users, category: "Membership" },
  { name: "Wix Payments", icon: CreditCard, category: "Payments" },
  { name: "Wix Video", icon: Video, category: "Media" },
  { name: "Wix Restaurants", icon: UtensilsCrossed, category: "Food" },
  { name: "Google Analytics", icon: BarChart, category: "Analytics" },
  { name: "Mailchimp", icon: Mail, category: "Marketing" },
];

const customIntegrations = [
  { icon: CreditCard, title: "Payment Processors", description: "Stripe, PayPal, Square, Klarna" },
  { icon: Mail, title: "Email Marketing", description: "Mailchimp, Constant Contact, ActiveCampaign" },
  { icon: Users, title: "CRM Systems", description: "HubSpot, Salesforce, Zoho sync" },
  { icon: Globe, title: "Social Media", description: "Instagram, Facebook, TikTok integration" },
  { icon: BarChart, title: "Analytics", description: "Google Analytics, Facebook Pixel, Hotjar" },
  { icon: Calendar, title: "Booking Systems", description: "Calendly, Acuity, custom booking" },
  { icon: MessageSquare, title: "Live Chat", description: "Intercom, Zendesk, Tawk.to" },
  { icon: Zap, title: "Automation", description: "Zapier, Make, custom webhooks" },
];

const veloFeatures = [
  { icon: Database, title: "Database Collections", description: "Create and manage custom databases" },
  { icon: Globe, title: "API Integrations", description: "Connect to any external API or service" },
  { icon: Layout, title: "Dynamic Pages", description: "Data-driven pages with custom routing" },
  { icon: Mail, title: "Custom Forms", description: "Advanced form logic and validation" },
  { icon: Lock, title: "User Authentication", description: "Member login, roles, and permissions" },
  { icon: Clock, title: "Scheduled Jobs", description: "Automated tasks and background processes" },
  { icon: Puzzle, title: "Custom Widgets", description: "Build reusable site components" },
  { icon: Code2, title: "HTTP Functions", description: "Backend endpoints and webhooks" },
];

const whyChooseValues = [
  { icon: Palette, title: "Custom Design, Not Templates", description: "We design from scratch\u2014no cookie-cutter templates. Every site unique to your brand." },
  { icon: Zap, title: "Fast & Optimized", description: "Sub-3 second load times. Optimized images, clean structure, best practices." },
  { icon: Search, title: "SEO Expert Setup", description: "Full Wix SEO Wizard setup, Google Search Console, schema markup, Core Web Vitals." },
  { icon: Settings, title: "Easy Self-Management", description: "We train you to update your own site. Wix is intuitive\u2014you'll love managing it." },
  { icon: TrendingUp, title: "Conversion Focused", description: "Every design decision aimed at turning visitors into customers." },
  { icon: ShoppingCart, title: "E-Commerce Ready", description: "Wix Stores setup with payments, shipping, and product management." },
  { icon: Code2, title: "Velo Development", description: "Need custom functionality? We code with Wix Velo for advanced features." },
  { icon: Headphones, title: "Ongoing Support", description: "60-day warranty, then optional maintenance. We don't disappear after launch." },
  { icon: Users, title: "Training Included", description: "Video tutorials, documentation, and 1-on-1 training sessions included." },
];

const techTabs = [
  {
    label: "Core Platform",
    technologies: [
      { name: "Wix", slug: "wix" },
      { name: "JavaScript", slug: "javascript" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
      { name: "Velo", slug: "velo" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "React", slug: "react" },
      { name: "MongoDB", slug: "mongodb" },
    ],
  },
  {
    label: "Design Tools",
    technologies: [
      { name: "Figma", slug: "figma" },
      { name: "Adobe XD", slug: "adobexd" },
      { name: "Canva", slug: "canva" },
      { name: "Adobe Photoshop", slug: "adobephotoshop" },
      { name: "Sketch", slug: "sketch" },
      { name: "InVision", slug: "invision" },
      { name: "Zeplin", slug: "zeplin" },
      { name: "Adobe Illustrator", slug: "adobeillustrator" },
    ],
  },
  {
    label: "Marketing",
    technologies: [
      { name: "Google Analytics", slug: "googleanalytics" },
      { name: "Mailchimp", slug: "mailchimp" },
      { name: "Facebook", slug: "facebook" },
      { name: "Google Ads", slug: "googleads" },
      { name: "Hotjar", slug: "hotjar" },
      { name: "HubSpot", slug: "hubspot" },
      { name: "ActiveCampaign", slug: "activecampaign" },
      { name: "Buffer", slug: "buffer" },
    ],
  },
  {
    label: "E-Commerce",
    technologies: [
      { name: "Stripe", slug: "stripe" },
      { name: "PayPal", slug: "paypal" },
      { name: "Square", slug: "square" },
      { name: "Klarna", slug: "klarna" },
      { name: "Apple Pay", slug: "applepay" },
      { name: "Google Pay", slug: "googlepay" },
      { name: "Wix Payments", slug: "wix" },
      { name: "ShipStation", slug: "shipstation" },
    ],
  },
  {
    label: "Integrations",
    technologies: [
      { name: "Zapier", slug: "zapier" },
      { name: "Make", slug: "make" },
      { name: "Google Workspace", slug: "google" },
      { name: "Slack", slug: "slack" },
      { name: "Zoom", slug: "zoom" },
      { name: "Calendly", slug: "calendly" },
      { name: "Intercom", slug: "intercom" },
      { name: "Zendesk", slug: "zendesk" },
    ],
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Planning",
    points: [
      "Understand your goals, content, and functionality needs",
      "Competitor analysis and site structure planning",
      "App and integration requirements mapping",
    ],
  },
  {
    icon: Palette,
    title: "Design & Approval",
    points: [
      "Custom designs matching your brand identity",
      "Mobile-first responsive mockups",
      "Revisions until you're 100% happy",
    ],
  },
  {
    icon: Code2,
    title: "Wix Development",
    points: [
      "Custom site build in Wix Editor or Velo",
      "App integration and custom functionality",
      "Content upload, SEO setup, and testing",
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Training",
    points: [
      "Thorough testing across devices and browsers",
      "Team training on Wix Editor and content management",
      "Launch with 60-day support and maintenance options",
    ],
  },
];

const caseStudies = [
  {
    icon: Activity,
    title: "Boutique Fitness Studio",
    gradient: "from-blue-600 to-cyan-500",
    badge: "Health & Fitness",
    client: "Fitness Studio, London",
    description: "Custom Wix website with class booking system, membership portal, trainer profiles, and automated email sequences. Integrated with Wix Bookings and Mailchimp.",
    features: ["\ud83c\udfcb\ufe0f Wix Bookings for class scheduling", "\ud83d\udc65 Membership portal with login", "\ud83d\udcaa Trainer profiles & specialties", "\ud83d\udce7 Mailchimp email automation", "\ud83d\udcf1 Mobile-optimized for on-the-go booking"],
    tech: ["Wix", "Wix Bookings", "Velo", "Mailchimp"],
    timeline: "5 weeks \u2022 Custom Wix design",
  },
  {
    icon: Home,
    title: "Interior Design Portfolio",
    gradient: "from-blue-600 to-indigo-600",
    badge: "Creative Portfolio",
    client: "Design Studio, Manchester",
    description: "Stunning portfolio website showcasing interior design projects with before/after galleries, client testimonials, and consultation booking.",
    features: ["\ud83c\udfe0 Project gallery with filtering", "\ud83d\udcf8 Before/after image sliders", "\u2b50 Client testimonial carousel", "\ud83d\udcc5 Consultation booking system", "\ud83c\udfa8 Brand-matched custom design"],
    tech: ["Wix", "Wix Bookings", "Wix Blog", "Custom CSS"],
    timeline: "4 weeks \u2022 Custom portfolio design",
  },
  {
    icon: UtensilsCrossed,
    title: "Local Restaurant & Ordering",
    gradient: "from-blue-600 to-violet-600",
    badge: "Food & Hospitality",
    client: "Restaurant, Birmingham",
    description: "Restaurant website with online menu, table reservations, online ordering system, and customer reviews. Full Wix Restaurants integration.",
    features: ["\ud83c\udf55 Online menu with photos", "\ud83d\udcf1 Online ordering system", "\ud83d\udcc5 Table reservation booking", "\u2b50 Customer review integration", "\ud83d\udccd Google Maps & local SEO"],
    tech: ["Wix", "Wix Restaurants", "Wix Bookings", "Google Maps"],
    timeline: "6 weeks \u2022 Custom restaurant design",
  },
];

const faqs = [
  { q: "How much does Wix development cost?", a: "Wix projects range from \u00a31,500 for a basic business site to \u00a38,000+ for complex e-commerce or membership sites. Cost depends on design complexity, number of pages, custom Velo development, and integrations. We provide detailed quotes after a free discovery call." },
  { q: "Is Wix good for business websites?", a: "Absolutely. Wix powers 250M+ websites including businesses of all sizes. It's reliable, secure, and easy to manage. We build professional Wix sites that look custom-built, not template-based." },
  { q: "Can I update my Wix website myself?", a: "Yes! That's one of Wix's biggest advantages. The drag-and-drop editor is intuitive and easy to use. We provide training, documentation, and video tutorials. Most clients manage their own content updates confidently." },
  { q: "How long does Wix development take?", a: "Simple business site: 3-4 weeks. Custom design with functionality: 5-8 weeks. E-commerce or complex site: 8-12 weeks. Timeline depends on scope, revisions, and content readiness." },
  { q: "Is Wix good for SEO?", a: "Yes. Wix has improved SEO significantly. Built-in SEO Wizard, customizable meta tags, structured data, sitemap, and fast hosting. We optimize every site with Google Search Console setup, schema markup, and Core Web Vitals optimization." },
  { q: "Can Wix handle e-commerce?", a: "Yes. Wix Stores supports physical and digital products, subscriptions, and bookings. Payment processing via Stripe, PayPal, and more. For basic to mid-level e-commerce, Wix is excellent. For very complex stores, we might recommend Shopify." },
  { q: "What is Wix Velo and do I need it?", a: "Wix Velo is Wix's development platform for custom code. It enables database collections, API integrations, dynamic pages, and custom functionality. Not every site needs it, but it's powerful for advanced features beyond drag-and-drop." },
  { q: "Can you migrate my site to Wix?", a: "Yes. We migrate from WordPress, Squarespace, GoDaddy, or any platform to Wix. Content, images, and SEO preserved. We often improve the design during migration. Typical migration: 2-3 weeks." },
  { q: "Is Wix reliable and secure?", a: "Yes. Wix handles hosting, SSL, security updates, and backups automatically. 99.9% uptime, enterprise-grade security, PCI DSS compliant for payments. You don't need to worry about server management." },
  { q: "Can Wix integrate with my tools?", a: "Yes. Wix integrates with hundreds of apps and services\u2014Google Analytics, Mailchimp, HubSpot, Zapier, social media, payment processors, booking systems, and more. Custom API integrations via Wix Velo." },
  { q: "What's the difference between Wix Editor and Editor X?", a: "Wix Editor is the classic drag-and-drop builder. Editor X (now Wix Studio) is for advanced designers with CSS-like precision, flexbox layouts, and responsive breakpoints. We use whichever best suits your project." },
  { q: "Do you offer Wix maintenance after launch?", a: "Yes. Every project includes 60 days post-launch support. After that, maintenance packages from \u00a3100/month covering content updates, performance monitoring, app updates, and priority support." },
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
    return <span className="inline-flex items-center gap-1 text-red-500 dark:text-red-400 font-medium text-sm">\u274c {text}</span>;
  }
  if (status === "good") {
    return <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 font-medium text-sm">\u26a0\ufe0f {text}</span>;
  }
  return <span className="text-sm text-muted-foreground">{text}</span>;
}

function WixHeroMockup() {
  return (
    <div className="relative h-[500px]">
      <div className="absolute inset-0 flex rounded-2xl overflow-hidden border shadow-2xl">
        <div className="w-1/2 flex flex-col bg-[#f0f3f5] dark:bg-[#1e1e1e]">
          <div className="bg-[#1b2631] px-3 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#0C6EFC] flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">Wix</span>
              </div>
              <span className="text-[10px] text-white/70">Wix Editor</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[8px] text-white/50 bg-white/10 px-1.5 py-0.5 rounded">Preview</span>
              <span className="text-[8px] text-white bg-[#0C6EFC] px-1.5 py-0.5 rounded">Publish</span>
            </div>
          </div>
          <div className="flex flex-1 overflow-hidden">
            <div className="w-[70px] bg-white dark:bg-[#232334] border-r border-gray-200 dark:border-gray-700 py-2 flex flex-col gap-0.5">
              <div className="text-[7px] font-semibold text-gray-500 px-2 mb-1">Add Elements</div>
              {[
                { label: "Text", icon: FileText },
                { label: "Image", icon: Layout },
                { label: "Button", icon: ArrowRight },
                { label: "Gallery", icon: Layout },
                { label: "Form", icon: Mail },
                { label: "Video", icon: Video },
                { label: "Menu", icon: Layout },
                { label: "Strip", icon: Layout },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-1.5 px-2 py-1 mx-1 rounded text-[7px] text-gray-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-default"
                >
                  <item.icon className="h-2.5 w-2.5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex-1 p-2 overflow-hidden">
              <div className="bg-white dark:bg-[#0d0d1a] rounded-lg shadow-sm overflow-hidden h-full flex flex-col">
                <div className="bg-[#0C6EFC] px-3 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Palette className="h-3 w-3 text-white" />
                    <span className="text-[9px] font-semibold text-white">My Business</span>
                  </div>
                  <div className="flex gap-2">
                    {["Home", "About", "Services"].map((n) => (
                      <span key={n} className="text-[7px] text-white/70">{n}</span>
                    ))}
                  </div>
                </div>
                <div className="p-2 flex-1">
                  <div className="border-2 border-dashed border-[#0C6EFC]/40 rounded p-2 mb-2 relative">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#0C6EFC] rounded-sm" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#0C6EFC] rounded-sm" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#0C6EFC] rounded-sm" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#0C6EFC] rounded-sm" />
                    <span className="text-[9px] font-bold text-gray-800 dark:text-white">Welcome to Our Studio</span>
                    <div className="w-3/4 h-1.5 bg-gray-200 dark:bg-gray-700 rounded mt-1" />
                    <div className="w-1/2 h-1.5 bg-gray-200 dark:bg-gray-700 rounded mt-1" />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {["Services", "Portfolio", "Contact"].map((title) => (
                      <div key={title} className="bg-gray-50 dark:bg-gray-800/50 rounded p-1.5 text-center border border-border/50">
                        <div className="w-4 h-4 rounded-full bg-[#0C6EFC]/10 mx-auto mb-0.5 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#0C6EFC]/30" />
                        </div>
                        <span className="text-[7px] font-medium text-gray-600 dark:text-gray-300">{title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60px] bg-white dark:bg-[#232334] border-l border-gray-200 dark:border-gray-700 p-1.5 flex flex-col gap-1.5">
              <div className="text-[6px] text-gray-500 font-semibold uppercase">Design</div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-full h-4 rounded bg-gray-100 dark:bg-[#2a2a3d]" />
              ))}
              <div className="text-[6px] text-gray-500 font-semibold uppercase mt-1">Colors</div>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-[#0C6EFC]" />
                <div className="w-3 h-3 rounded-full bg-gray-800" />
                <div className="w-3 h-3 rounded-full bg-white border border-gray-200" />
              </div>
              <div className="text-[6px] text-gray-500 font-semibold uppercase mt-1">Fonts</div>
              <div className="w-full h-3 rounded bg-gray-100 dark:bg-[#2a2a3d]" />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#0C6EFC] -translate-x-1/2 z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0C6EFC] flex items-center justify-center shadow-lg">
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
              https://yourbusiness.co.uk
            </div>
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
              <span className="text-[10px] font-bold text-gray-800 dark:text-white">YourBusiness</span>
              <div className="flex gap-2">
                {["Home", "About", "Services"].map((n) => (
                  <span key={n} className="text-[8px] text-gray-500">{n}</span>
                ))}
                <span className="text-[8px] bg-[#0C6EFC] text-white px-1.5 py-0.5 rounded">Contact</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0C6EFC]/10 to-cyan-500/10 px-3 py-4 text-center">
              <p className="text-[11px] font-bold text-gray-800 dark:text-white">Welcome to the Future</p>
              <p className="text-[8px] text-gray-500 mt-0.5">Building amazing digital experiences</p>
              <div className="mt-2 flex gap-1.5 justify-center">
                <span className="text-[7px] bg-[#0C6EFC] text-white px-2 py-0.5 rounded">Get Started</span>
                <span className="text-[7px] border border-gray-300 dark:border-gray-600 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">Learn More</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 px-3 py-2 flex-1">
              {[
                { title: "Services", color: "bg-blue-500/10" },
                { title: "Portfolio", color: "bg-cyan-500/10" },
                { title: "Contact", color: "bg-indigo-500/10" },
              ].map((card) => (
                <div key={card.title} className={`${card.color} rounded p-1.5 flex flex-col items-center justify-center`}>
                  <div className="w-4 h-4 rounded bg-[#0C6EFC]/20 mb-1" />
                  <span className="text-[7px] font-medium text-gray-700 dark:text-gray-300">{card.title}</span>
                  <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-700 rounded mt-1" />
                </div>
              ))}
            </div>
            <div className="px-3 py-2 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center justify-between">
                <span className="text-[7px] text-gray-500">Get in Touch</span>
                <span className="text-[7px] bg-[#0C6EFC] text-white px-2 py-0.5 rounded">Book Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -top-3 -right-3 bg-[#0C6EFC] text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        250M+ users
      </motion.div>
      <motion.div
        className="absolute -bottom-3 -left-3 bg-cyan-600 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        190 countries
      </motion.div>
      <motion.div
        className="absolute top-1/2 -right-3 bg-blue-700 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
      >
        500+ templates
      </motion.div>
      <motion.div
        className="absolute top-1/4 -left-3 bg-indigo-600 text-white text-[10px] px-3 py-1.5 rounded-full shadow-lg font-medium z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        99.9% uptime
      </motion.div>
    </div>
  );
}

function VeloCodeMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border shadow-xl">
      <div className="bg-[#1e1e1e] px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-[10px] text-gray-400 ml-2">backend/data.jsw</span>
        <div className="ml-auto flex gap-2">
          <span className="text-[8px] text-gray-500 bg-gray-700 px-1.5 py-0.5 rounded">Velo</span>
          <span className="text-[8px] text-[#0C6EFC] bg-[#0C6EFC]/10 px-1.5 py-0.5 rounded">Connected</span>
        </div>
      </div>
      <div className="bg-[#1e1e1e] p-4 font-mono text-[11px] leading-5">
        <div><span className="text-[#569CD6]">import</span> <span className="text-[#9CDCFE]">wixData</span> <span className="text-[#569CD6]">from</span> <span className="text-[#CE9178]">'wix-data'</span><span className="text-gray-400">;</span></div>
        <div className="mt-1"><span className="text-[#569CD6]">export async function</span> <span className="text-[#DCDCAA]">getProducts</span><span className="text-gray-400">(</span><span className="text-[#9CDCFE]">category</span><span className="text-gray-400">)</span> <span className="text-gray-400">{"{"}</span></div>
        <div className="pl-4"><span className="text-[#569CD6]">const</span> <span className="text-[#9CDCFE]">results</span> <span className="text-gray-400">=</span> <span className="text-[#569CD6]">await</span> <span className="text-[#9CDCFE]">wixData</span></div>
        <div className="pl-6"><span className="text-gray-400">.</span><span className="text-[#DCDCAA]">query</span><span className="text-gray-400">(</span><span className="text-[#CE9178]">"Products"</span><span className="text-gray-400">)</span></div>
        <div className="pl-6"><span className="text-gray-400">.</span><span className="text-[#DCDCAA]">eq</span><span className="text-gray-400">(</span><span className="text-[#CE9178]">"category"</span><span className="text-gray-400">,</span> <span className="text-[#9CDCFE]">category</span><span className="text-gray-400">)</span></div>
        <div className="pl-6"><span className="text-gray-400">.</span><span className="text-[#DCDCAA]">ascending</span><span className="text-gray-400">(</span><span className="text-[#CE9178]">"title"</span><span className="text-gray-400">)</span></div>
        <div className="pl-6"><span className="text-gray-400">.</span><span className="text-[#DCDCAA]">find</span><span className="text-gray-400">();</span></div>
        <div className="mt-1 pl-4"><span className="text-[#569CD6]">return</span> <span className="text-[#9CDCFE]">results</span><span className="text-gray-400">.</span><span className="text-[#9CDCFE]">items</span><span className="text-gray-400">;</span></div>
        <div><span className="text-gray-400">{"}"}</span></div>
        <div className="mt-2"><span className="text-[#6A9955]">{"// HTTP function endpoint"}</span></div>
        <div><span className="text-[#569CD6]">export function</span> <span className="text-[#DCDCAA]">get_products</span><span className="text-gray-400">(</span><span className="text-[#9CDCFE]">request</span><span className="text-gray-400">)</span> <span className="text-gray-400">{"{"}</span></div>
        <div className="pl-4"><span className="text-[#569CD6]">const</span> <span className="text-[#9CDCFE]">cat</span> <span className="text-gray-400">=</span> <span className="text-[#9CDCFE]">request</span><span className="text-gray-400">.</span><span className="text-[#9CDCFE]">query</span><span className="text-gray-400">.</span><span className="text-[#9CDCFE]">category</span><span className="text-gray-400">;</span></div>
        <div className="pl-4"><span className="text-[#569CD6]">return</span> <span className="text-[#DCDCAA]">getProducts</span><span className="text-gray-400">(</span><span className="text-[#9CDCFE]">cat</span><span className="text-gray-400">);</span></div>
        <div><span className="text-gray-400">{"}"}</span></div>
      </div>
    </div>
  );
}

export default function WixDevelopment() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <SEO
        title="Wix Developers London & Harrow"
        description="Wix developers in London & Harrow. Custom Wix websites, design, optimization. Serving London businesses. Free consultation."
        canonical="/services/web-development/cms/wix"
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs items={[
            { label: "Services", href: "/services" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "Wix" },
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full mb-4 border-0">
                Wix Development
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Wix Developers in London
              </h1>
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Beautiful Websites. Zero Coding. Maximum Impact.
              </p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We build stunning Wix websites that look professional, load fast, and convert visitors into customers. From business sites to online stores—Wix makes it simple.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                {[
                  { icon: Palette, label: "Custom Design" },
                  { icon: Layout, label: "Wix Editor" },
                  { icon: ShoppingCart, label: "E-Commerce" },
                  { icon: Search, label: "SEO Optimized" },
                ].map((pill) => (
                  <Badge key={pill.label} variant="outline" className="flex items-center gap-1.5 px-3 py-1.5">
                    <pill.icon className="h-3.5 w-3.5" style={{ color: WIX_COLOR }} />
                    {pill.label}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "250M+", label: "Users Worldwide" },
                  { value: "25+", label: "Wix Sites Built" },
                  { value: "100%", label: "Custom Design" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card border rounded-xl p-4 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold text-[20px]">
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4 flex-wrap">
                <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0">
                    Start Your Wix Project
                  </Button>
                </a>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    View Wix Examples
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
              <WixHeroMockup />
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
              Wix Services We Offer
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Professional Wix development for every need
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
                <Card className="p-8 h-full hover:border-blue-500/50 hover:shadow-xl transition-all">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${WIX_COLOR}15` }}
                  >
                    <service.icon className="h-6 w-6" style={{ color: WIX_COLOR }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: WIX_COLOR }} />
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
            title="Ready to Build Your Wix Website?"
            description="Free consultation, honest advice, and a clear quote. Let's discuss your project."
            primaryCTA={{ text: "Get Free Wix Quote", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
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
              Why Choose Wix?
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              How Wix compares for your project
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
                      <th className="text-center p-4 font-semibold text-[#0C6EFC]">Wix</th>
                      <th className="text-center p-4 font-semibold">WordPress</th>
                      <th className="text-center p-4 font-semibold">Squarespace</th>
                      <th className="text-center p-4 font-semibold">Webflow</th>
                      <th className="text-center p-4 font-semibold">Shopify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center"><StatusCell text={row.wix.text} status={row.wix.status} /></td>
                        <td className="p-4 text-center"><StatusCell text={row.wordpress.text} status={row.wordpress.status} /></td>
                        <td className="p-4 text-center"><StatusCell text={row.squarespace.text} status={row.squarespace.status} /></td>
                        <td className="p-4 text-center"><StatusCell text={row.webflow.text} status={row.webflow.status} /></td>
                        <td className="p-4 text-center"><StatusCell text={row.shopify.text} status={row.shopify.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 border-t bg-muted/30 flex gap-6 text-xs text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Excellent</span>
                <span>\u26a0\ufe0f Good/Limited</span>
                <span>\u274c Poor/None</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="See Wix in Action"
            description="View examples of Wix websites we've built or book a demo to see what's possible."
            primaryCTA={{ text: "View Wix Examples", link: "/portfolio" }}
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
              Powered by 500+ Wix Apps
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Extend your site with powerful apps and integrations
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Essential Wix Apps</h3>
                <div className="grid grid-cols-2 gap-4">
                  {wixApps.map((app) => (
                    <div key={app.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${WIX_COLOR}15` }}>
                        <app.icon className="h-4 w-4" style={{ color: WIX_COLOR }} />
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
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${WIX_COLOR}15` }}>
                        <integration.icon className="h-4 w-4" style={{ color: WIX_COLOR }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{integration.title}</p>
                        <p className="text-xs text-muted-foreground">{integration.description}</p>
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
              Wix Velo: Custom Code Power
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Go beyond drag-and-drop with Wix's development platform
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <VeloCodeMockup />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {veloFeatures.map((feature) => (
                  <Card key={feature.title} className="p-4 border-l-4 border-l-blue-500">
                    <div className="flex items-start gap-3">
                      <feature.icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: WIX_COLOR }} />
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
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose Us for Wix?"
            subtitle="What sets our Wix development apart from the rest"
            values={whyChooseValues}
            columns={3}
            accentColor={WIX_COLOR}
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
              Wix Technology Stack
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The tools and technologies we use to build Wix sites
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {techTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-[#0C6EFC] text-white shadow-lg"
                    : "bg-card border hover:border-blue-500/50"
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
            title="Our Wix Development Process"
            subtitle="A proven process for building Wix sites that work"
            steps={processSteps}
            accentColor="#0C6EFC"
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
              Wix Websites We've Built
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Real projects, real businesses
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
                    <p className="text-xs text-muted-foreground mb-1">{study.client}</p>
                    <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                    <div className="space-y-1.5 mb-4">
                      {study.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
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
                      <p className="text-xs text-muted-foreground">{study.timeline}</p>
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Everything you need to know about Wix development
            </motion.p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.q}
                </AccordionTrigger>
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
            title="Let's Build Your Wix Website"
            description="Free 30-minute consultation. We'll discuss your goals, answer questions, and give you an honest recommendation."
            primaryCTA={{ text: "Book Free Consultation", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
            secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
            size="large"
          />
        </div>
      </section>
    </>
  );
}
