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
  Puzzle,
  Wrench,
  TrendingUp,
  Zap,
  Palette,
  Code2,
  Shield,
  Globe,
  Package,
  Users,
  Award,
  BookOpen,
  FileText,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Smartphone,
  BarChart,
  Target,
  Headphones,
  Laptop,
  Camera,
  Heart,
  ArrowRight,
  Loader2,
  ImageOff,
  AlertTriangle,
  Layers,
  LayoutGrid,
  ShoppingCart,
  CreditCard,
  Search,
  BarChart3,
  Rocket,
  Cloud,
  MapPin,
  Mail,
  RefreshCw,
  Lock,
  Gauge,
  Image,
  Box,
  Settings,
  Database,
} from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SplitFeatureShowcase } from "@/components/shared/SplitFeatureShowcase";
import { WordPressDashboardMockup } from "@/components/mockups/WordPressDashboardMockup";
import { GutenbergEditorMockup } from "@/components/mockups/GutenbergEditorMockup";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TechStackIcons } from "@/components/ui/TechStackIcons";
import { PackageIncludes } from "@/components/ui/PackageIncludes";

import { ValueProposition } from "@/components/ui/ValueProposition";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { CTASection } from "@/components/ui/CTASection";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const featurePills = [
  { icon: Puzzle, label: "60K+ Plugins" },
  { icon: Wrench, label: "Full Customization" },
  { icon: TrendingUp, label: "SEO-Ready" },
  { icon: Zap, label: "Scalable" },
];

const platformStats = [
  { icon: Globe, value: "43%", label: "Of All Websites" },
  { icon: Package, value: "60,000+", label: "Plugins Available" },
  { icon: Users, value: "500M+", label: "Websites Worldwide" },
  { icon: Award, value: "15+ Years", label: "Industry Leader" },
];

const solutions = [
  {
    icon: BookOpen,
    title: "Corporate Websites",
    description: "Professional sites for businesses, with custom designs and CMS control.",
    features: ["Custom theme design", "Team & services pages", "Contact forms & maps", "Blog integration"],
  },
  {
    icon: FileText,
    title: "Blog Platforms",
    description: "SEO-optimized blogs with easy publishing and content management.",
    features: ["Category & tag management", "Author profiles", "Newsletter integration", "Social sharing"],
  },
  {
    icon: ShoppingBag,
    title: "WooCommerce Stores",
    description: "Full e-commerce functionality with WordPress flexibility.",
    features: ["Product catalogs", "Payment gateways", "Inventory management", "Order tracking"],
  },
  {
    icon: Users,
    title: "Membership Sites",
    description: "Member-only content with subscription management.",
    features: ["Member registration", "Content restrictions", "Subscription billing", "Member dashboards"],
  },
  {
    icon: Briefcase,
    title: "Portfolio Sites",
    description: "Showcase your work with stunning galleries and case studies.",
    features: ["Project showcases", "Gallery layouts", "Client testimonials", "Contact forms"],
  },
  {
    icon: GraduationCap,
    title: "Learning Platforms",
    description: "Online courses with video hosting and student management.",
    features: ["Course builder", "Video hosting", "Quizzes & certificates", "Student progress tracking"],
  },
];

const wordpressTechnologies = [
  { name: "WordPress", slug: "wordpress" },
  { name: "PHP", slug: "php" },
  { name: "MySQL", slug: "mysql" },
  { name: "JavaScript", slug: "javascript" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "Docker", slug: "docker" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
  { name: "Stripe", slug: "stripe" },
  { name: "WooCommerce", slug: "woocommerce" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Setup & Foundation",
    points: [
      "Domain, hosting setup, WordPress installation, and SSL security",
      "Theme selection or custom theme framework configuration",
      "Essential plugin installation and initial configuration",
    ],
  },
  {
    icon: Palette,
    title: "Design & Customization",
    points: [
      "Custom design implementation with brand colors, fonts, and logo",
      "Responsive page layouts, templates, and header/footer design",
      "Mobile-first approach ensuring pixel-perfect display on all devices",
    ],
  },
  {
    icon: Code2,
    title: "Content & Features",
    points: [
      "Content migration, page creation with visual builder",
      "Blog setup, contact forms, and third-party integrations",
      "WooCommerce e-commerce setup if applicable",
    ],
  },
  {
    icon: Rocket,
    title: "Optimization & Launch",
    points: [
      "Speed optimization with caching, CDN, and minification",
      "SEO setup with Yoast/Rank Math, sitemaps, and schema markup",
      "Cross-browser testing, team training, and go-live deployment",
    ],
  },
  {
    icon: RefreshCw,
    title: "Support & Maintenance",
    points: [
      "Weekly backups with plugin and core updates",
      "Security and performance monitoring around the clock",
      "Ongoing content assistance and feature enhancements",
    ],
  },
];

const packageCategories = [
  {
    name: "Design & Development",
    icon: Palette,
    description: "Complete design and build of your WordPress site",
    features: [
      { name: "Custom Theme Development or Premium Theme Customization", description: "We build from scratch or heavily customize premium themes" },
      { name: "Mobile-First Responsive Design", description: "Perfect on all devices from phone to desktop" },
      { name: "Brand Integration (Colors, Fonts, Logo)" },
      { name: "Page Builder Setup (Elementor, Divi, or WPBakery)" },
      { name: "Unlimited Pages & Posts" },
      { name: "Custom Post Types (if needed)" },
    ],
  },
  {
    name: "Features & Functionality",
    icon: Zap,
    features: [
      { name: "Contact Forms with Spam Protection" },
      { name: "Google Maps Integration" },
      { name: "Social Media Integration" },
      { name: "Newsletter Signup Forms" },
      { name: "Image Galleries & Sliders" },
      { name: "Video Embedding" },
      { name: "Blog with Categories & Tags" },
      { name: "Search Functionality" },
    ],
  },
  {
    name: "E-Commerce (WooCommerce)",
    icon: ShoppingBag,
    description: "Full online store functionality",
    features: [
      { name: "WooCommerce Setup & Configuration" },
      { name: "Product Catalog (Unlimited Products)" },
      { name: "Payment Gateway Integration (Stripe, PayPal)" },
      { name: "Shipping Configuration" },
      { name: "Inventory Management" },
      { name: "Order Management System" },
      { name: "Customer Accounts" },
      { name: "Coupon & Discount Codes" },
    ],
  },
  {
    name: "SEO & Performance",
    icon: TrendingUp,
    features: [
      { name: "Yoast SEO or Rank Math Setup" },
      { name: "XML Sitemap Generation" },
      { name: "Schema Markup Implementation" },
      { name: "Meta Tags Optimization" },
      { name: "Image Optimization" },
      { name: "Caching Setup (WP Rocket or similar)" },
      { name: "CDN Integration (Cloudflare)" },
      { name: "Code Minification" },
      { name: "Target: <2s Load Time" },
    ],
  },
  {
    name: "Security & Maintenance",
    icon: Shield,
    features: [
      { name: "SSL Certificate Installation" },
      { name: "Security Plugin Setup (Wordfence/Sucuri)" },
      { name: "Malware Scanning" },
      { name: "Firewall Configuration" },
      { name: "Automated Daily Backups" },
      { name: "Spam Protection" },
      { name: "Regular WordPress Updates (30 days)" },
    ],
  },
  {
    name: "Training & Support",
    icon: GraduationCap,
    features: [
      { name: "Comprehensive Admin Training (2 sessions)", description: "We teach you how to manage content, add pages, upload images, etc." },
      { name: "Video Tutorials" },
      { name: "Written Documentation" },
      { name: "30 Days Post-Launch Support", description: "Bug fixes, content assistance, questions answered" },
      { name: "Email & Phone Support" },
    ],
  },
];

const useCases = [
  {
    industry: "Technology",
    title: "SaaS Company Blog",
    description: "Corporate blog with 100+ articles, author profiles, and newsletter integration.",
    features: ["Elementor", "Yoast SEO", "Mailchimp"],
    results: ["+250% traffic", "5,000 subscribers"],
    icon: Laptop,
  },
  {
    industry: "E-commerce",
    title: "Fashion Store",
    description: "WooCommerce store with 500+ products, size guides, and wishlist functionality.",
    features: ["WooCommerce", "Stripe", "Klaviyo"],
    results: ["\u00a380K first month", "4.2% conversion"],
    icon: ShoppingBag,
  },
  {
    industry: "Education",
    title: "Online Learning Platform",
    description: "Membership site with video courses, quizzes, and student progress tracking.",
    features: ["LearnDash", "MemberPress"],
    results: ["1,000 students", "\u00a325K MRR"],
    icon: GraduationCap,
  },
  {
    industry: "Professional Services",
    title: "Law Firm Website",
    description: "Professional site with attorney profiles, case studies, and contact forms.",
    features: ["Custom Theme", "Gravity Forms"],
    results: ["+180% leads", "Top 3 Google"],
    icon: Briefcase,
  },
  {
    industry: "Creative",
    title: "Photography Portfolio",
    description: "Stunning portfolio with full-screen galleries and client booking system.",
    features: ["Custom Theme", "Gallery Plugin"],
    results: ["20+ bookings/month", "98 PageSpeed"],
    icon: Camera,
  },
  {
    industry: "Non-Profit",
    title: "Charity Website",
    description: "Donation platform with campaign tracking and volunteer registration.",
    features: ["GiveWP", "Event Calendar"],
    results: ["\u00a3150K raised", "500 volunteers"],
    icon: Heart,
  },
];

const whyChooseValues = [
  { icon: Award, title: "WordPress Certified", description: "Official WordPress developers with 100+ successful projects", stat: "100+ Projects" },
  { icon: Zap, title: "Performance Obsessed", description: "Every site we build scores 90+ on Google PageSpeed", stat: "< 2s Load Time" },
  { icon: Code2, title: "Custom Development", description: "We build custom themes and plugins, not just install templates" },
  { icon: Shield, title: "Security First", description: "SSL, firewalls, malware protection, and daily backups included" },
  { icon: GraduationCap, title: "Comprehensive Training", description: "We train your team so you can manage content independently" },
  { icon: Headphones, title: "Ongoing Support", description: "30 days included, then affordable monthly packages" },
];

const testimonials = [
  {
    quote: "House of Developers transformed our slow, outdated site into a lightning-fast WordPress powerhouse. Our traffic increased 300% in 3 months and we can finally manage content ourselves.",
    author: "David Richardson",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    rating: 5,
    project: "Corporate WordPress Site",
  },
  {
    quote: "They built our WooCommerce store in 3 weeks. The custom checkout flow they designed increased our conversion rate by 40%. Best investment we made.",
    author: "Emma Watson",
    role: "Founder",
    company: "Artisan Goods Co.",
    rating: 5,
    project: "WooCommerce E-commerce Store",
  },
  {
    quote: "We needed a membership site with online courses. House of Developers delivered exactly what we needed with LearnDash. Now we have 1,000+ paying students.",
    author: "Michael Chen",
    role: "CEO",
    company: "Digital Marketing Academy",
    rating: 5,
    project: "WordPress Learning Platform",
  },
  {
    quote: "The training they provided was exceptional. Our team can now update the site, add blog posts, and manage content without bothering developers. Worth every penny.",
    author: "Sarah Johnson",
    role: "Content Manager",
    company: "Green Energy Ltd",
    rating: 5,
    project: "WordPress Blog Platform",
  },
];

const faqs = [
  { q: "Do you use custom themes or premium themes?", a: "Both! For simple projects, we customize premium themes like Astra or GeneratePress. For complex projects or unique designs, we build custom themes from scratch. We'll recommend the best approach based on your budget and requirements." },
  { q: "Can I update the content myself after launch?", a: "Absolutely! That's the beauty of WordPress. We provide comprehensive training (2 sessions + video tutorials) so you can easily add pages, update content, upload images, and manage your site without any coding knowledge." },
  { q: "What page builder do you use?", a: "We primarily use Elementor Pro for its flexibility and ease of use. We also work with Divi, WPBakery, and Gutenberg (WordPress default editor) based on your preference." },
  { q: "How long does a WordPress project take?", a: "Simple sites (5-10 pages): 2 weeks. Standard sites (10-20 pages): 3-4 weeks. Complex sites (WooCommerce, membership, custom features): 4-8 weeks. We'll give you an accurate timeline after our consultation." },
  { q: "Do you provide hosting or do I need my own?", a: "We can help with both options. We recommend managed WordPress hosts like WP Engine, Kinsta, or SiteGround. We'll set everything up for you or migrate to your existing host." },
  { q: "Can you migrate my existing site to WordPress?", a: "Yes! We migrate from any platform (Wix, Squarespace, custom HTML, old WordPress) to a new WordPress site. We preserve your content, URLs (for SEO), and improve the design and performance." },
  { q: "Is WordPress secure?", a: "When properly configured, yes! We implement security best practices: SSL, security plugins (Wordfence/Sucuri), regular updates, strong passwords, firewall, malware scanning, and daily backups. Your site will be protected." },
  { q: "What if I need e-commerce functionality?", a: "We integrate WooCommerce for full e-commerce capabilities. This includes product catalogs, shopping cart, payment gateways (Stripe, PayPal), inventory management, and order tracking." },
  { q: "Can you build custom features not available in plugins?", a: "Yes! If your needs are unique, we build custom plugins tailored to your requirements. Examples: custom calculators, booking systems, API integrations, workflow automation." },
  { q: "What's included in the 30 days of support?", a: "Bug fixes, content assistance, minor tweaks, answering questions, and helping you get comfortable with WordPress. After 30 days, we offer affordable monthly support packages." },
  { q: "Will my site be mobile-friendly?", a: "100%. All our WordPress sites are built mobile-first and tested on all devices and screen sizes. We ensure perfect responsiveness and fast mobile load times." },
  { q: "Do you offer ongoing maintenance?", a: "Yes! We offer monthly maintenance packages starting at \u00a3200/month including: WordPress core updates, plugin updates, security monitoring, backups, uptime monitoring, and priority support." },
];

const resultMetrics = [
  { icon: Zap, label: "Page Load Time", before: "8.5s", after: "1.4s", improvement: "83% faster" },
  { icon: Smartphone, label: "Mobile Performance Score", before: "42/100", after: "96/100", improvement: "+54 points" },
  { icon: TrendingUp, label: "SEO Score", before: "58/100", after: "94/100", improvement: "+36 points" },
  { icon: BarChart, label: "Organic Traffic", before: "1,200/month", after: "4,800/month", improvement: "+300%" },
  { icon: Target, label: "Bounce Rate", before: "72%", after: "38%", improvement: "47% lower" },
  { icon: TrendingUp, label: "Conversion Rate", before: "1.2%", after: "3.8%", improvement: "+217%" },
];

function OldWebsiteMockup() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-red-200 dark:border-red-900 aspect-video p-4 md:p-6 flex flex-col text-left overflow-hidden">
      <div className="border-b-4 border-gray-400 dark:border-gray-600 pb-2 mb-3">
        <span className="text-lg md:text-2xl text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive" }}>COMPANY NAME</span>
      </div>
      <div className="flex gap-2 md:gap-4 mb-4 flex-wrap">
        {["Home", "About", "Services", "Products", "Contact"].map((item) => (
          <span key={item} className="text-[10px] md:text-xs text-blue-600 underline cursor-default">{item}</span>
        ))}
      </div>
      <div className="flex gap-2 flex-1 min-h-0">
        <div className="w-1/4 bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-sm" />
        <div className="w-2/4 bg-gray-200 dark:bg-gray-750 border border-gray-400 dark:border-gray-600 rounded-sm flex flex-col items-center justify-center gap-2 p-2">
          <ImageOff className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
          <span className="text-[8px] md:text-[10px] text-gray-400">Image not found</span>
        </div>
        <div className="w-1/4 bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-sm" />
      </div>
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-300 dark:border-gray-600">
        <span className="text-[8px] md:text-[10px] text-gray-400 text-center w-full">Copyright 1999</span>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-full">
          <Loader2 className="h-2 w-2 md:h-2.5 md:w-2.5 animate-spin" />Loading...
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-1.5 py-0.5 rounded-full">
          <AlertTriangle className="h-2 w-2 md:h-2.5 md:w-2.5" />Not mobile friendly
        </span>
      </div>
    </div>
  );
}

function ModernWebsiteMockup() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] aspect-video flex flex-col text-left overflow-hidden">
      <div className="bg-[#23282d] h-5 md:h-6 flex items-center gap-2 px-2 md:px-3">
        <FileText className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
        <span className="text-[8px] md:text-[10px] text-white/70">Edit Page</span>
      </div>
      <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Globe className="h-2.5 w-2.5 md:h-3 md:w-3 text-primary" />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-gray-900 dark:text-white">Company Name</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          {["Home", "About", "Services"].map((n) => (
            <span key={n} className="text-[8px] md:text-[10px] text-gray-500">{n}</span>
          ))}
          <div className="bg-primary text-primary-foreground text-[7px] md:text-[8px] px-2 py-0.5 rounded-md">Contact</div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-3 md:px-4 py-3 md:py-4 flex flex-col items-center justify-center">
        <span className="text-[10px] md:text-sm font-bold text-gray-900 dark:text-white">Welcome to the Future</span>
        <span className="text-[7px] md:text-[9px] text-gray-500 mt-0.5">Building digital experiences that matter</span>
        <div className="flex gap-2 mt-2">
          <div className="bg-primary text-primary-foreground text-[6px] md:text-[8px] px-2 py-0.5 rounded-md">Get Started</div>
          <div className="border border-border text-[6px] md:text-[8px] px-2 py-0.5 rounded-md text-gray-600 dark:text-gray-300">Learn More</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-3 flex-1 min-h-0">
        {[
          { color: "bg-blue-500/10", title: "Web Dev", icon: Code2 },
          { color: "bg-green-500/10", title: "SEO", icon: TrendingUp },
          { color: "bg-purple-500/10", title: "Design", icon: Palette },
        ].map((card) => (
          <div key={card.title} className={`${card.color} rounded-md p-1.5 md:p-2 flex flex-col items-center justify-center shadow-sm border border-border/30`}>
            <card.icon className="h-3 w-3 md:h-4 md:w-4 text-primary mb-0.5" />
            <span className="text-[7px] md:text-[9px] font-medium text-gray-700 dark:text-gray-300">{card.title}</span>
            <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-700 rounded mt-1" />
            <div className="w-3/4 h-[2px] bg-gray-200 dark:bg-gray-700 rounded mt-0.5" />
          </div>
        ))}
      </div>
      <div className="bg-gray-900 dark:bg-gray-950 px-3 md:px-4 py-1.5 flex items-center justify-between">
        <div className="flex gap-1.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gray-700" />
          ))}
        </div>
        <span className="text-[6px] md:text-[8px] text-gray-500">2025 Company Name</span>
      </div>
      <div className="flex gap-2 px-3 md:px-4 py-1.5 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 flex-wrap">
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">
          <Zap className="h-2 w-2 md:h-2.5 md:w-2.5" />1.4s load
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1.5 py-0.5 rounded-full">
          <Smartphone className="h-2 w-2 md:h-2.5 md:w-2.5" />Mobile optimized
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-1.5 py-0.5 rounded-full">
          <TrendingUp className="h-2 w-2 md:h-2.5 md:w-2.5" />SEO ready
        </span>
      </div>
    </div>
  );
}

function ResultsShowcase() {
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
          <h2 className="text-3xl md:text-4xl font-bold">Real WordPress Results We've Delivered</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">See the transformation from outdated website to modern WordPress powerhouse</p>
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
                <span className="text-xs text-muted-foreground ml-2">yourwebsite.com</span>
              </div>

              <div className="relative">
                <div className="w-full">
                  <ModernWebsiteMockup />
                </div>

                <div
                  className="absolute top-0 left-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <OldWebsiteMockup />
                </div>

                <div
                  className="absolute top-0 h-full w-0.5 bg-primary z-20"
                  style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg cursor-ew-resize"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    data-testid="slider-handle"
                  >
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-3 bg-primary-foreground rounded-full" />
                      <div className="w-0.5 h-3 bg-primary-foreground rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-10 left-3 z-30">
                <span className="bg-red-500/10 text-red-700 dark:text-red-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Old Site</span>
              </div>
              <div className="absolute top-10 right-3 z-30">
                <span className="bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">New WordPress Site</span>
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
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-muted-foreground">{metric.label}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-lg text-muted-foreground line-through">{metric.before}</span>
                        <ArrowRight className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-2xl md:text-3xl font-bold text-primary">{metric.after}</span>
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

export default function WordPressDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "CMS", href: "/services/cms-development" },
          { label: "WordPress" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24" data-testid="section-wp-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-lg bg-[#21759B]/10 flex items-center justify-center">
                  <img src="https://cdn.simpleicons.org/wordpress/21759B" alt="WordPress" className="w-8 h-8" />
                </div>
                <Badge variant="secondary" data-testid="badge-wordpress">
                  WordPress Development
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                WordPress Development Services
              </h1>

              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#21759B] to-accent bg-clip-text text-transparent mt-4">
                The World's Most Popular CMS
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                From corporate websites to WooCommerce stores, we build custom
                WordPress solutions that are fast, secure, and easy to manage.
                With 60,000+ plugins and unlimited customization, WordPress
                powers your vision.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {featurePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <Badge
                      key={pill.label}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm"
                      data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Icon className="h-3.5 w-3.5 mr-1.5" />
                      {pill.label}
                    </Badge>
                  );
                })}
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <Link href="/contact">
                  <Button size="lg" data-testid="cta-start-project">
                    Start Your WordPress Project
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleScrollTo("use-cases")}
                  data-testid="cta-view-examples"
                >
                  View WordPress Examples
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6" data-testid="trust-badge">
                Rated 4.9/5 by WordPress clients
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="rounded-xl border border-border shadow-2xl overflow-hidden">
                <WordPressDashboardMockup />
              </div>
              <div className="absolute -top-3 -right-3 bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium">Live Preview</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
                <span className="text-xs font-medium text-accent">&lt; 2s load time</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 bg-muted" data-testid="section-why-wordpress">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Why WordPress</Badge>
            <h2 className="text-3xl font-bold">The Most Flexible CMS Platform</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              WordPress powers 43% of all websites on the internet. From simple
              blogs to complex enterprise sites, it's trusted by millions for
              good reason.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platformStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Icon className="h-8 w-8 text-accent mx-auto" />
                  <div className="text-4xl font-bold text-accent mt-3">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Split Feature Showcase */}
      <section className="py-20" data-testid="section-expertise">
        <SplitFeatureShowcase
          badge="Our WordPress Expertise"
          title="Custom WordPress Development, Not Just Themes"
          description="We don't just install themes. We build custom WordPress solutions tailored to your exact requirements, with pixel-perfect design and blazing-fast performance."
          features={[
            { icon: Palette, title: "Custom Theme Development", description: "Bespoke themes built from scratch or heavily customized premium themes. Your brand, perfectly represented." },
            { icon: Code2, title: "Custom Plugin Development", description: "Need unique functionality? We build custom plugins that extend WordPress exactly how you need." },
            { icon: Zap, title: "Performance Optimization", description: "Sub-2-second load times with caching, CDN, image optimization, and code minification." },
            { icon: Shield, title: "Security Hardening", description: "SSL, firewalls, malware scanning, regular updates, and automated backups. Your site is protected 24/7." },
          ]}
          mockupType="browser"
          mockupContent={<GutenbergEditorMockup />}
          reversed={false}
        />
      </section>

      {/* What We Build */}
      <section className="py-20 bg-muted" data-testid="section-solutions">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">WordPress Solutions We Build</h2>
            <p className="text-muted-foreground mt-2">From blogs to enterprise platforms</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <motion.div key={solution.title} variants={staggerItem}>
                  <Card
                    className="p-8 h-full flex flex-col hover-elevate"
                    data-testid={`solution-${solution.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mt-4">{solution.title}</h3>
                    <p className="text-muted-foreground mt-2">{solution.description}</p>
                    <ul className="mt-4 space-y-2 flex-1">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
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

      {/* WordPress Ecosystem */}
      <section className="py-20" data-testid="section-ecosystem">
        <div className="max-w-7xl mx-auto px-6">
          <TechStackIcons
            title="Technologies We Use"
            subtitle="We use industry-leading technologies to build products that are fast, reliable, and maintainable."
            technologies={wordpressTechnologies}
          />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our WordPress Development Process"
            subtitle="From setup to launch in 2-4 weeks"
            steps={zigzagSteps}
            accentColor="#21759B"
          />
        </div>
      </section>

      {/* CTA 1 - After Process */}
      <section className="py-20" data-testid="section-cta-1">
        <div className="max-w-7xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Ready to Start Your WordPress Project?"
            description="Let's discuss your requirements and build a WordPress site that grows your business."
            primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
            secondaryCTA={{ text: "View WordPress Examples", link: "#use-cases" }}
            size="medium"
          />
        </div>
      </section>

      {/* Package Includes */}
      <section className="py-20 bg-muted" data-testid="section-package">
        <div className="max-w-4xl mx-auto px-6">
          <PackageIncludes
            title="What's Included in WordPress Development"
            subtitle="Everything you need for a professional WordPress site"
            categories={packageCategories}
            layout="accordion"
          />
        </div>
      </section>

      {/* Results Showcase */}
      <ResultsShowcase />

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-muted" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">WordPress Sites We've Built</h2>
            <p className="text-muted-foreground mt-2">Real projects across different industries</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div key={i} variants={staggerItem}>
                  <Card
                    className="overflow-visible h-full flex flex-col hover-elevate"
                    data-testid={`use-case-${i}`}
                  >
                    <div className="aspect-video rounded-t-md bg-gradient-to-br from-[#21759B]/10 to-accent/10 flex items-center justify-center relative">
                      <Icon className="h-12 w-12 text-[#21759B]/30" />
                      <Badge
                        variant="secondary"
                        className="absolute top-3 right-3 text-xs"
                      >
                        {uc.industry}
                      </Badge>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold">{uc.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 flex-1">{uc.description}</p>

                      <div className="flex gap-2 flex-wrap mt-4">
                        {uc.features.map((f) => (
                          <Badge key={f} variant="outline" className="text-xs">
                            {f}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4 flex-wrap mt-4">
                        {uc.results.map((r) => (
                          <Badge
                            key={r}
                            variant="secondary"
                            className="text-xs bg-accent/10 text-accent"
                          >
                            {r}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA 2 - After Use Cases */}
      <section className="py-20" data-testid="section-cta-2">
        <div className="max-w-7xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Need a WooCommerce Store?"
            description="We specialize in WordPress e-commerce. Let's build your online store."
            primaryCTA={{ text: "Discuss E-commerce Project", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose Us for WordPress Development"
            subtitle="We're WordPress experts with proven results"
            values={whyChooseValues}
            columns={3}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <TestimonialSlider
            title="What Our WordPress Clients Say"
            testimonials={testimonials}
            autoPlay
            interval={6000}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">WordPress Development FAQs</h2>
            <p className="text-muted-foreground mt-2">Common questions about our WordPress services</p>
          </div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-4 bg-card"
                data-testid={`faq-item-${i}`}
              >
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

      {/* Final CTA */}
      <section className="py-20" data-testid="section-final-cta">
        <div className="max-w-7xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Let's Build Your WordPress Site"
            description="Book a free consultation and get a custom proposal for your WordPress project. No obligations, just expert advice."
            primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
            secondaryCTA={{ text: "Call Us: +44 7429 917368", link: "tel:+447429917368" }}
            showContactInfo
            size="large"
          />
        </div>
      </section>
    </>
  );
}
