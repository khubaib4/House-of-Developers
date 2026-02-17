import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import {
  Terminal,
  Server,
  Database,
  Code,
  Shield,
  Globe,
  Award,
  FileText,
  Users,
  Book,
  Package,
  Wrench,
  DollarSign,
  Lock,
  Zap,
  Cloud,
  Layout,
  ShoppingBag,
  ArrowDown,
  CheckCircle2,
  Check,
  User,
  Briefcase,
  Calendar,
  BarChart3,
  ShoppingCart,
  Star,
  ArrowRight,
  Search,
  ChevronRight,
  Heart,
  Mail,
  CreditCard,
  Sparkles,
  FileCheck,
  UserCheck,
} from "lucide-react";

const LAMP_COLOR = "#8B5CF6";

const whyChooseValues = [
  { icon: Award, title: "Battle-Tested", description: "20+ years of production use, billions of websites" },
  { icon: Shield, title: "Stable & Mature", description: "Fewer breaking changes, long-term support" },
  { icon: Globe, title: "Universal Hosting", description: "Every web host supports LAMP—easy deployment" },
  { icon: DollarSign, title: "Cost Effective", description: "All components are open-source and free" },
  { icon: FileText, title: "WordPress Native", description: "Powers WordPress, Drupal, Joomla—60% of web" },
  { icon: Users, title: "Large Talent Pool", description: "Millions of PHP developers worldwide" },
  { icon: Book, title: "Extensive Resources", description: "20+ years of tutorials, docs, and solutions" },
  { icon: Package, title: "Rich Ecosystem", description: "Laravel, Symfony, Composer—modern PHP tools" },
  { icon: Wrench, title: "Easy Maintenance", description: "Simple, well-understood stack—easy to maintain" },
];

const deliverables = [
  { icon: Code, title: "PHP Development", description: "Modern PHP 8+, Laravel, Symfony frameworks" },
  { icon: FileText, title: "WordPress Development", description: "Custom themes, plugins, WooCommerce stores" },
  { icon: Database, title: "MySQL Databases", description: "Schema design, queries, optimization, indexing" },
  { icon: Server, title: "Apache Configuration", description: "Virtual hosts, .htaccess, SSL, rewrites" },
  { icon: ShoppingBag, title: "E-Commerce", description: "WooCommerce, Magento, custom shopping carts" },
  { icon: Layout, title: "CMS Platforms", description: "WordPress, Drupal, Joomla, custom CMS" },
  { icon: Lock, title: "Security", description: "SQL injection prevention, XSS protection, auth" },
  { icon: Zap, title: "Performance", description: "Caching (Redis, Memcached), query optimization" },
  { icon: Cloud, title: "Deployment", description: "cPanel, Plesk, AWS, DigitalOcean, traditional hosting" },
];

const pricingPlans = [
  {
    name: "Part-Time LAMP Developer",
    price: "£2,500",
    period: "/month",
    description: "80 hours/month",
    isPopular: false,
    features: [
      "PHP/Laravel development",
      "WordPress customization",
      "MySQL database work",
      "Bug fixes & updates",
      "Code reviews",
      "Flexible 4 hours/day",
    ],
    cta: "Hire Part-Time",
  },
  {
    name: "Full-Time LAMP Developer",
    price: "£4,500",
    period: "/month",
    description: "160 hours/month",
    isPopular: true,
    features: [
      "Complete feature ownership",
      "Full LAMP stack work",
      "WordPress/Laravel expertise",
      "Database optimization",
      "Server configuration",
      "Daily standups & sprints",
    ],
    cta: "Hire Full-Time",
  },
  {
    name: "LAMP Development Team",
    price: "Custom",
    period: " Quote",
    description: "2+ developers",
    isPopular: false,
    features: [
      "PHP backend developers",
      "WordPress specialists",
      "Database administrator",
      "Server/DevOps engineer",
      "QA tester (optional)",
      "Complete app delivery",
    ],
    cta: "Build Team",
  },
];

const profiles = [
  {
    experience: "12+ years PHP & MySQL",
    available: true,
    availableText: "Available Now",
    availability: "Can start immediately",
    skills: ["PHP 8", "Laravel", "MySQL", "WordPress", "Apache", "Linux", "Redis", "Git"],
    highlights: [
      "Built 30+ WordPress sites",
      "Laravel framework expert",
      "MySQL optimization specialist",
      "E-commerce platform veteran",
      "Security best practices",
    ],
    projects: ["WordPress e-commerce with 10K products", "Laravel SaaS platform", "Custom CMS for enterprise"],
    specialties: ["WooCommerce customization", "Laravel API development", "Database performance tuning"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    experience: "15+ years full-stack PHP",
    available: false,
    availableText: "Available in 1 week",
    availability: "1 week notice",
    skills: ["PHP", "Symfony", "MySQL", "WordPress", "Drupal", "jQuery", "Bootstrap", "Composer"],
    highlights: [
      "WordPress plugin development",
      "Drupal 9/10 expert",
      "MySQL stored procedures",
      "Apache/Nginx configuration",
      "Legacy PHP modernization",
    ],
    projects: ["Multi-site WordPress network", "Drupal content platform", "PHP 5.6 to 8.0 migration"],
    specialties: ["Led teams of 4+ developers", "WordPress agency experience"],
    gradient: "from-orange-500 to-red-500",
  },
];

const projects = [
  {
    gradient: "from-blue-500 to-purple-500",
    icon: ShoppingCart,
    badge: "WordPress E-Commerce",
    title: "Fashion WooCommerce Store",
    description: "Complete WordPress/WooCommerce shop with 2,000+ products and custom checkout",
    tech: ["WordPress", "WooCommerce", "MySQL", "Apache", "PHP"],
    results: ["£150K/month", "2,000 Products", "30K Orders"],
    features: ["Custom WooCommerce theme", "Payment gateway integration", "Inventory management", "Email automation"],
  },
  {
    gradient: "from-orange-500 to-yellow-500",
    icon: Briefcase,
    badge: "Corporate Website",
    title: "Law Firm WordPress Site",
    description: "Professional WordPress site with case studies, attorney profiles, and contact forms",
    tech: ["WordPress", "Custom Theme", "MySQL", "Gravity Forms"],
    results: ["50K Visitors", "300 Leads/month", "Top 3 SEO"],
    features: ["Custom WordPress theme", "Attorney directory", "Case study system", "Multi-location support"],
  },
  {
    gradient: "from-red-500 to-pink-500",
    icon: Calendar,
    badge: "Laravel Platform",
    title: "Booking Management System",
    description: "Laravel-based booking platform with calendar, payments, and automated reminders",
    tech: ["Laravel", "MySQL", "Apache", "Stripe", "Twilio"],
    results: ["500 Businesses", "10K Bookings/mo", "Automated SMS"],
    features: ["Calendar synchronization", "Payment processing", "SMS reminders", "Multi-user accounts"],
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Discuss Your PHP Project",
    points: [
      "Free consultation to discuss WordPress vs Laravel vs custom PHP needs",
      "MySQL schema planning and hosting requirements review",
      "Choose engagement model and set project timeline",
    ],
  },
  {
    icon: Users,
    title: "Meet PHP Experts",
    points: [
      "Interview 2-3 LAMP stack developers with WordPress/Laravel portfolios",
      "Review PHP code samples and MySQL expertise",
      "Schedule interviews and confirm developer availability",
    ],
  },
  {
    icon: FileCheck,
    title: "Technical Assessment",
    points: [
      "Video interviews covering PHP coding and MySQL query optimization",
      "Assess WordPress theme/plugin knowledge and Laravel skills",
      "Make final hiring decision with full technical confidence",
    ],
  },
  {
    icon: UserCheck,
    title: "Onboard & Start Coding",
    points: [
      "Contract and NDA signing with access to codebase",
      "Setup local LAMP environment and deliver first features",
      "Sprint planning to begin productive development immediately",
    ],
  },
];

const faqs = [
  {
    q: "Is LAMP stack still relevant in 2024?",
    a: "Absolutely! LAMP powers 60%+ of websites including WordPress (43% of all sites). It's battle-tested, stable, and supported everywhere. Perfect for WordPress, e-commerce, CMS, and traditional web apps. Modern PHP (Laravel, Symfony) is excellent.",
  },
  {
    q: "What's the difference between LAMP and LEMP?",
    a: "LEMP replaces Apache (A) with Nginx (E). Both work with PHP and MySQL. Apache is easier to configure (.htaccess), Nginx is faster for static files. Our developers work with both.",
  },
  {
    q: "Do LAMP developers use modern PHP?",
    a: "Yes! Our developers use PHP 8+ with Laravel or Symfony frameworks. Modern PHP has type safety, async features, and is much faster than old PHP 5.x.",
  },
  {
    q: "Can LAMP handle high traffic?",
    a: "Yes! With proper caching (Redis, Varnish), CDN, and database optimization, LAMP scales well. Facebook started on LAMP. Proper architecture matters more than the stack.",
  },
  {
    q: "Is WordPress development part of LAMP?",
    a: "Yes! WordPress runs on LAMP (Linux, Apache, MySQL, PHP). Our LAMP developers are WordPress experts\u2014custom themes, plugins, WooCommerce, and optimization.",
  },
  {
    q: "What about Laravel vs raw PHP?",
    a: "Laravel is a modern PHP framework (like Rails for Ruby). It provides structure, security, and speed. We use Laravel for custom web apps and raw PHP for WordPress/simple projects.",
  },
  {
    q: "Do LAMP developers work with cPanel/Plesk?",
    a: "Yes! Most LAMP developers are familiar with cPanel, Plesk, and traditional hosting. They can also work with AWS, DigitalOcean, and cloud servers.",
  },
  {
    q: "Can you migrate from WordPress to something else?",
    a: "Yes, but often not recommended. WordPress is excellent for content sites. We can migrate to Laravel or Node.js if needed, but WordPress is usually the right choice for CMS needs.",
  },
  {
    q: "What databases besides MySQL?",
    a: "PostgreSQL, MariaDB (MySQL fork), SQLite. Most LAMP developers know MySQL/MariaDB deeply and can learn PostgreSQL. For NoSQL, we'd recommend MERN/MEAN instead.",
  },
  {
    q: "Is LAMP cheaper to host than MERN/MEAN?",
    a: "Often yes! Shared hosting for LAMP starts at £3/month. Node.js apps usually need VPS (£10+/month). For WordPress sites, LAMP hosting is abundant and cheap.",
  },
];

function LAMPStackMockup() {
  const layers = [
    { name: "PHP", subtitle: "Server Language", color: "from-purple-500 to-indigo-600", icon: Code, snippet: "<?php", badge: "Laravel/Symfony" },
    { name: "MySQL", subtitle: "Relational Database", color: "from-blue-500 to-cyan-600", icon: Database, snippet: "SELECT * FROM", badge: "SQL" },
    { name: "Apache", subtitle: "Web Server", color: "from-red-500 to-orange-500", icon: Server, snippet: ".htaccess", badge: "HTTP Server" },
    { name: "Linux", subtitle: "Operating System", color: "from-slate-600 to-gray-700", icon: Terminal, snippet: "$ sudo systemctl", badge: "Ubuntu/CentOS" },
  ];

  return (
    <div className="relative" data-testid="lamp-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-visible p-6">
        <div className="text-center mb-4">
          <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
            <Server className="h-3 w-3 mr-1" /> LAMP Stack
          </Badge>
        </div>

        <div className="space-y-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className={`bg-gradient-to-r ${layer.color} rounded-lg p-4 text-white`}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <layer.icon className="h-7 w-7" />
                    <div>
                      <div className="font-bold text-sm">{layer.name}</div>
                      <div className="text-xs opacity-80">{layer.subtitle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <code className="text-xs bg-white/20 px-2 py-0.5 rounded font-mono">{layer.snippet}</code>
                    <span className="text-xs bg-white/15 px-2 py-0.5 rounded">{layer.badge}</span>
                  </div>
                </div>
              </div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -top-3 -right-3 bg-card border rounded-lg px-3 py-1.5 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <FileText className="h-3 w-3" style={{ color: LAMP_COLOR }} />
          <span>WordPress Compatible</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-3 -left-3 bg-card border rounded-lg px-3 py-1.5 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Award className="h-3 w-3" style={{ color: LAMP_COLOR }} />
          <span>Industry Standard</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-4 bg-card border rounded-lg px-3 py-1.5 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Globe className="h-3 w-3" style={{ color: LAMP_COLOR }} />
          <span>Widely Hosted</span>
        </div>
      </motion.div>
    </div>
  );
}

function EcommerceMockup() {
  const categories = [
    { name: "Electronics", count: 45 },
    { name: "Clothing", count: 128 },
    { name: "Home & Garden", count: 89 },
    { name: "Books", count: 234 },
  ];

  const productData = [
    { name: "Wireless Earbuds Pro", price: "£29.99", was: "£49.99", rating: 4.5, sale: true },
    { name: "Cotton T-Shirt", price: "£12.99", was: "£19.99", rating: 4.0, sale: true },
    { name: "Garden Tool Set", price: "£34.99", was: null, rating: 4.8, sale: false },
    { name: "Bestseller Novel", price: "£8.99", was: "£14.99", rating: 4.7, sale: true },
    { name: "Smart Watch Band", price: "£15.99", was: null, rating: 4.2, sale: false },
    { name: "Yoga Mat Premium", price: "£24.99", was: "£39.99", rating: 4.6, sale: true },
    { name: "LED Desk Lamp", price: "£19.99", was: null, rating: 4.3, sale: false },
    { name: "Travel Backpack", price: "£44.99", was: "£59.99", rating: 4.9, sale: true },
  ];

  return (
    <div data-testid="ecommerce-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-muted border-b px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background rounded px-3 py-1 text-xs text-muted-foreground flex items-center gap-1">
              <Lock className="h-3 w-3" />
              shop.example.com
            </div>
          </div>
        </div>

        <div className="bg-card">
          <div className="border-b px-4 py-2 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-bold text-sm" style={{ color: LAMP_COLOR }}>ShopLAMP</span>
              <div className="hidden md:flex items-center gap-3 flex-wrap text-xs text-muted-foreground">
                <span>Home</span>
                <span className="font-medium text-foreground">Shop</span>
                <span>Categories</span>
                <span>About</span>
                <span>Contact</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <div className="relative">
                <ShoppingCart className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center">3</span>
              </div>
              <User className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-6 text-white text-center">
            <div className="text-xs opacity-80 mb-1">Home &gt; Shop</div>
            <div className="text-lg font-bold mb-1">Summer Sale - Up to 50% Off</div>
            <div className="text-xs opacity-80 mb-2">Limited time offer on selected items</div>
            <div className="inline-block bg-white text-purple-600 text-xs font-semibold px-3 py-1 rounded">Shop Now</div>
          </div>

          <div className="flex">
            <div className="hidden md:block w-1/4 border-r p-3 space-y-3">
              <div>
                <div className="text-xs font-semibold mb-2">Categories</div>
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center justify-between text-[10px] py-1 text-muted-foreground">
                    <span>{cat.name}</span>
                    <span className="text-muted-foreground/60">({cat.count})</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-semibold mb-1">Price Range</div>
                <div className="h-1 bg-muted rounded-full relative">
                  <div className="absolute h-1 bg-purple-500 rounded-full left-[10%] right-[30%]" />
                </div>
                <div className="flex justify-between text-[9px] text-muted-foreground mt-1">
                  <span>£0</span>
                  <span>£100</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold mb-1">Rating</div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-3 w-3 text-muted-foreground" />
                  <span className="text-[9px] text-muted-foreground ml-1">& up</span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-3">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <div className="text-xs font-semibold">Shop</div>
                <div className="text-[10px] text-muted-foreground">Showing 1-8 of 248 results</div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {productData.map((product, i) => (
                  <div key={i} className="border rounded p-2 relative">
                    {product.sale && (
                      <span className="absolute top-1 right-1 bg-red-500 text-white text-[7px] px-1 rounded">SALE</span>
                    )}
                    <div className="aspect-square bg-muted rounded mb-1.5 flex items-center justify-center">
                      <ShoppingBag className="h-5 w-5 text-muted-foreground/40" />
                    </div>
                    <div className="text-[9px] font-medium leading-tight mb-0.5 truncate">{product.name}</div>
                    <div className="flex items-center gap-0.5 mb-0.5">
                      {[1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-2 w-2 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className={`h-2 w-2 ${product.rating >= 4.5 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="text-[10px] font-bold" style={{ color: LAMP_COLOR }}>{product.price}</span>
                      {product.was && (
                        <span className="text-[8px] text-muted-foreground line-through">{product.was}</span>
                      )}
                    </div>
                    <div className="mt-1 bg-muted text-[8px] text-center py-0.5 rounded text-muted-foreground">Add to Cart</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((p) => (
                  <div
                    key={p}
                    className={`w-5 h-5 rounded text-[9px] flex items-center justify-center ${p === 1 ? "text-white" : "bg-muted text-muted-foreground"}`}
                    style={p === 1 ? { backgroundColor: LAMP_COLOR } : undefined}
                  >
                    {p}
                  </div>
                ))}
                <div className="text-[9px] text-muted-foreground ml-1">Next</div>
              </div>
            </div>
          </div>

          <div className="border-t p-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[9px] text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground text-[10px] mb-1">About Us</div>
                <div>Our Story</div>
                <div>Careers</div>
              </div>
              <div>
                <div className="font-semibold text-foreground text-[10px] mb-1">Customer Service</div>
                <div>Returns</div>
                <div>FAQ</div>
              </div>
              <div>
                <div className="font-semibold text-foreground text-[10px] mb-1">My Account</div>
                <div>Orders</div>
                <div>Wishlist</div>
              </div>
              <div>
                <div className="font-semibold text-foreground text-[10px] mb-1">Newsletter</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="bg-muted rounded px-1.5 py-0.5 text-[8px] flex-1">Email</div>
                  <div className="text-[7px] px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: LAMP_COLOR }}>Subscribe</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap mt-2 pt-2 border-t text-[8px] text-muted-foreground">
              <span>© 2024 ShopLAMP</span>
              <div className="flex items-center gap-2">
                <CreditCard className="h-3 w-3" />
                <span>Visa</span>
                <span>Mastercard</span>
                <span>PayPal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
        {[
          { label: "WordPress/WooCommerce", desc: "CMS" },
          { label: "PHP Templates", desc: "Dynamic Pages" },
          { label: "MySQL Database", desc: "Products & Orders" },
          { label: "Apache Rewrites", desc: "Clean URLs" },
          { label: ".htaccess Rules", desc: "URL Routing" },
        ].map((ann) => (
          <div key={ann.label} className="text-center">
            <Badge variant="outline" className="text-[10px] no-default-hover-elevate no-default-active-elevate">
              {ann.label}
            </Badge>
            <div className="text-[9px] text-muted-foreground mt-0.5">{ann.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-card border rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <Code className="h-3.5 w-3.5" style={{ color: LAMP_COLOR }} />
          <span className="text-[10px] font-semibold">Classic PHP</span>
        </div>
        <pre className="text-[9px] font-mono text-muted-foreground leading-relaxed overflow-x-auto">
{`<?php
// WordPress/Laravel PHP
$products = Product::where('active', 1)
    ->orderBy('created_at', 'desc')
    ->get();

foreach ($products as $product) {
    echo $product->name;
}
?>`}
        </pre>
      </div>
    </div>
  );
}

export default function HireLAMPPage() {
  useEffect(() => {
    document.title = "Hire LAMP Full-Stack Developers | Linux, Apache, MySQL, PHP | House of Developers";
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { label: "Services", href: "/services" },
                    { label: "Hire Developers", href: "/services/hire-developers" },
                    { label: "Full-Stack", href: "/services/hire-developers/full-stack" },
                    { label: "LAMP Stack" },
                  ]}
                />
              </div>

              <Badge variant="secondary" className="mb-4 no-default-hover-elevate no-default-active-elevate">
                <Terminal className="h-3 w-3 mr-1" /> LAMP Stack Developers
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="hero-title">
                Hire LAMP Stack Developers
              </h1>

              <p className="text-xl md:text-2xl font-semibold mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Linux, Apache, MySQL, PHP Experts
                </span>
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Hire senior LAMP stack developers who build battle-tested web applications with PHP. The proven, stable stack powering WordPress, Drupal, and millions of websites—perfect for traditional web apps, CMS platforms, and e-commerce.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                {[
                  { label: "Battle-Tested", icon: Shield },
                  { label: "Wide Hosting", icon: Globe },
                  { label: "WordPress Ready", icon: FileText },
                  { label: "Stable & Mature", icon: Award },
                ].map((pill) => (
                  <Badge
                    key={pill.label}
                    variant="outline"
                    className="no-default-hover-elevate no-default-active-elevate"
                    data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <pill.icon className="h-3 w-3 mr-1" /> {pill.label}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { value: "5+", label: "Developers", id: "stat-developers" },
                  { value: "12+", label: "Years Avg", id: "stat-years-avg" },
                  { value: "Available", label: "Now", id: "stat-available" },
                ].map((stat) => (
                  <div key={stat.id} data-testid={stat.id}>
                    <div className="text-2xl font-bold" style={{ color: LAMP_COLOR }}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Link href="/contact">
                  <Button data-testid="cta-hire-lamp">
                    Hire LAMP Developer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  data-testid="cta-see-examples"
                  onClick={() => document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See Examples
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <LAMPStackMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-what-is">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What is the LAMP Stack?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            LAMP is the classic web development stack that's powered the internet for 20+ years. Linux (operating system), Apache (web server), MySQL (database), PHP (programming language)—proven, stable, and widely supported by every hosting provider.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Terminal, letter: "L", name: "Linux", full: "Operating System", purpose: "Stable, secure, and free Unix-like OS for servers", gradient: "from-slate-500 to-slate-700" },
              { icon: Server, letter: "A", name: "Apache", full: "Web Server", purpose: "Most popular HTTP server, powers 30%+ of websites", gradient: "from-red-500 to-red-600" },
              { icon: Database, letter: "M", name: "MySQL", full: "SQL Database", purpose: "Reliable relational database with ACID compliance", gradient: "from-blue-500 to-blue-600" },
              { icon: Code, letter: "P", name: "PHP", full: "Server Language", purpose: "Popular server-side language, powers WordPress & more", gradient: "from-purple-500 to-purple-600" },
            ].map((comp) => (
              <motion.div
                key={comp.letter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                data-testid={`lamp-card-${comp.letter.toLowerCase()}`}
              >
                <Card className="hover-elevate h-full">
                  <CardContent className="p-6 text-center">
                    <comp.icon className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                    <span className={`text-4xl font-bold bg-gradient-to-r ${comp.gradient} bg-clip-text text-transparent`}>
                      {comp.letter}
                    </span>
                    <div className="font-semibold mt-2">{comp.name}</div>
                    <div className="text-xs text-muted-foreground">{comp.full}</div>
                    <p className="text-sm text-muted-foreground mt-2">{comp.purpose}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-why-choose">
        <ValueProposition
          title="Why Choose LAMP Stack Development"
          subtitle="The proven, battle-tested web stack"
          columns={3}
          values={whyChooseValues}
        />
      </section>

      <CTASection
        variant="bordered"
        title="Need a WordPress or PHP Expert?"
        description="Our LAMP developers build proven web applications with PHP and MySQL"
        primaryCTA={{ text: "Hire LAMP Developer", link: "/contact" }}
        size="medium"
      />

      <section className="py-20 bg-muted" data-testid="section-dashboard">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Traditional Web Applications Built with LAMP</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              WordPress, e-commerce, and CMS platforms on proven technology
            </p>
          </div>
          <EcommerceMockup />
        </div>
      </section>

      <section className="py-20" data-testid="section-deliverables">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What Our LAMP Stack Developers Deliver</h2>
            <p className="mt-4 text-lg text-muted-foreground">Traditional web development with modern PHP practices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                data-testid={`deliverable-card-${i}`}
              >
                <Card className="hover-elevate h-full">
                  <CardContent className="p-6">
                    <item.icon className="h-7 w-7" style={{ color: LAMP_COLOR }} />
                    <h3 className="font-semibold mt-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">LAMP Stack Developer Pricing</h2>
            <p className="mt-4 text-lg text-muted-foreground">Traditional stack, modern rates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                packageName={plan.name}
                price={`${plan.price}${plan.period}`}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                ctaText={plan.cta}
                ctaLink="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-profiles">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our LAMP Stack Developers</h2>
            <p className="mt-4 text-lg text-muted-foreground">PHP and WordPress veterans with deep expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profiles.map((profile, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`profile-card-${i}`}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 flex-wrap">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${profile.gradient} flex items-center justify-center flex-shrink-0`}>
                        <User className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg">Senior LAMP Stack Developer</h3>
                        <p className="text-sm text-muted-foreground">{profile.experience}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-2 h-2 rounded-full ${profile.available ? "bg-green-500" : "bg-yellow-500"}`} />
                          <span className="text-xs text-muted-foreground">{profile.availableText}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex gap-2 flex-wrap">
                      {profile.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-4 space-y-1.5">
                      {profile.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: LAMP_COLOR }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <div className="text-xs font-semibold text-muted-foreground mb-1">Recent Projects</div>
                      {profile.projects.map((proj) => (
                        <div key={proj} className="text-sm text-muted-foreground flex items-start gap-1.5">
                          <ChevronRight className="h-3 w-3 mt-1 flex-shrink-0" />
                          <span>{proj}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <div className="text-xs font-semibold text-muted-foreground mb-1">Specialties</div>
                      {profile.specialties.map((s) => (
                        <div key={s} className="text-sm text-muted-foreground flex items-start gap-1.5">
                          <Sparkles className="h-3 w-3 mt-1 flex-shrink-0" style={{ color: LAMP_COLOR }} />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t flex items-center justify-between flex-wrap gap-2">
                      <span className="text-xs text-muted-foreground">{profile.availability}</span>
                      <Link href="/contact">
                        <Button size="sm" data-testid={`cta-interview-${i}`}>
                          Schedule Interview
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-projects" id="projects-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Proven LAMP Applications We've Built</h2>
            <p className="mt-4 text-lg text-muted-foreground">Traditional web platforms that work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`project-card-${i}`}
              >
                <Card className="hover-elevate h-full overflow-visible">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${project.gradient} p-8 flex items-center justify-center rounded-t-xl`}>
                      <project.icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-2 no-default-hover-elevate no-default-active-elevate text-xs">
                        {project.badge}
                      </Badge>
                      <h3 className="font-bold text-lg">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.description}</p>

                      <div className="mt-3 flex gap-1.5 flex-wrap">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-[10px] no-default-hover-elevate no-default-active-elevate">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {project.results.map((r) => (
                          <div key={r} className="text-center">
                            <div className="text-xs font-bold" style={{ color: LAMP_COLOR }}>{r}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 space-y-1">
                        {project.features.map((f) => (
                          <div key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Check className="h-3 w-3" style={{ color: LAMP_COLOR }} />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="gradient"
        title="Ready to Build with LAMP Stack?"
        description="From WordPress sites to Laravel apps—our PHP experts deliver reliable solutions"
        primaryCTA={{ text: "Schedule Interview", link: "/contact" }}
        secondaryCTA={{ text: "See Pricing", link: "#pricing-section" }}
        size="large"
      />

      <section className="py-20" data-testid="section-comparison">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">LAMP Stack vs Modern JavaScript Stacks</h2>
            <p className="mt-4 text-lg text-muted-foreground">When to choose the proven classic</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2" style={{ borderColor: LAMP_COLOR }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="h-8 w-8" style={{ color: LAMP_COLOR }} />
                  <h3 className="text-xl font-bold">Choose LAMP Stack If...</h3>
                </div>
                <div className="space-y-2 mb-6">
                  {[
                    "Building with WordPress/Drupal",
                    "Need universal hosting support",
                    "Traditional web application",
                    "Proven, stable technology",
                    "Lower hosting costs",
                    "PHP/MySQL expertise in-house",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: LAMP_COLOR }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Best for:</div>
                  <div className="flex gap-2 flex-wrap">
                    {["WordPress sites", "E-commerce (WooCommerce)", "Content management", "Traditional web apps", "PHP-first projects"].map((b) => (
                      <Badge key={b} variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">{b}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="h-8 w-8 text-muted-foreground" />
                  <h3 className="text-xl font-bold">Choose MERN/MEAN/MEVN If...</h3>
                </div>
                <div className="space-y-2 mb-6">
                  {[
                    "Modern SPA/PWA application",
                    "Real-time features needed",
                    "Want JavaScript full-stack",
                    "React/Angular/Vue preference",
                    "API-first architecture",
                    "Microservices approach",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Best for:</div>
                  <div className="flex gap-2 flex-wrap">
                    {["SaaS dashboards", "Real-time apps", "SPAs (Single Page Apps)", "Modern startups", "JavaScript-first teams"].map((b) => (
                      <Badge key={b} variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">{b}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Both are excellent choices. We'll recommend based on your needs{" "}
              <Link href="/contact" className="underline font-medium text-foreground">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Hiring LAMP Stack Developers"
            subtitle="From consultation to WordPress/Laravel deployment"
            steps={zigzagSteps}
            accentColor={LAMP_COLOR}
          />
        </div>
      </section>

      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">LAMP Stack Developer FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4" data-testid={`faq-${i}`}>
                <AccordionTrigger className="text-left font-medium" data-testid={`faq-trigger-${i}`}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        variant="gradient"
        title="Let's Build with PHP & MySQL"
        description="Book a free consultation and meet our battle-tested LAMP stack developers"
        primaryCTA={{ text: "Book Consultation", link: "/contact" }}
        secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
        showContactInfo
        size="large"
      />
    </div>
  );
}