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
import { ValueProposition } from "@/components/ui/ValueProposition";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TechTabsSection } from "@/components/ui/TechTabsSection";
import { CTASection } from "@/components/ui/CTASection";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Layers,
  FileText,
  Zap,
  Search,
  Smartphone,
  Shield,
  Code2,
  Database,
  Lock,
  Palette,
  Headphones,
  ShoppingBag,
  Target,
  RefreshCw,
  TrendingUp,
  Award,
  GitBranch,
  Home,
  Users,
  BarChart,
  Settings,
  Bell,
  Folder,
  ShoppingCart,
  Heart,
  CreditCard,
  DollarSign,
  Cloud,
  Package,
  Activity,
  Image,
  TestTube,
  CheckCircle,
  Paintbrush,
  FileCode,
  Server,
  Triangle,
  Stethoscope,
  Building,
  GraduationCap,
  Utensils,
  Rocket,
  Clock,
  Briefcase,
  Scale,
  UserCheck,
} from "lucide-react";

const WEB_DEV_COLOR = "#3B82F6";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function BrowserFrame({
  url,
  children,
  className = "",
  glowColor,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-border bg-card shadow-2xl ${className}`}
      style={glowColor ? { boxShadow: `0 25px 50px -12px ${glowColor}30` } : {}}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/80 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-1.5">
            <Lock className="w-3 h-3" />
            {url}
          </div>
        </div>
        <RefreshCw className="w-3 h-3 text-muted-foreground" />
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function HeroSaaSMockup() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-4 min-h-[220px]">
      <div className="bg-gray-900/40 rounded-lg px-3 py-2 mb-3 flex items-center justify-between">
        <span className="text-white text-xs font-semibold">SaaS Platform</span>
        <div className="flex gap-2">
          <div className="w-6 h-1.5 rounded bg-white/30" />
          <div className="w-6 h-1.5 rounded bg-white/30" />
        </div>
      </div>
      <div className="text-center mb-3">
        <p className="text-white font-bold text-sm">Grow Your Business</p>
        <p className="text-white/60 text-[10px] mt-1">Analytics & insights in real-time</p>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Revenue", value: "$48.2K" },
          { label: "Users", value: "12,847" },
          { label: "Growth", value: "+23%" },
        ].map((s) => (
          <div key={s.label} className="bg-white/10 backdrop-blur rounded-lg p-2 text-center">
            <p className="text-white font-bold text-xs">{s.value}</p>
            <p className="text-white/50 text-[9px]">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/10 backdrop-blur rounded-lg p-3">
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-blue-400 to-purple-400"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-3 justify-center">
        <div className="bg-white rounded-full px-3 py-1 text-[10px] font-semibold text-purple-700">Get Started</div>
        <div className="border border-white/40 rounded-full px-3 py-1 text-[10px] text-white">Learn More</div>
      </div>
    </div>
  );
}

function HeroEcommerceMockup() {
  return (
    <div className="bg-white dark:bg-gray-100 p-3 min-h-[200px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-800 text-xs font-semibold">FashionStore</span>
        <div className="flex gap-2">
          <div className="w-4 h-1 rounded bg-gray-300" />
          <div className="w-4 h-1 rounded bg-gray-300" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: "Summer Dress", price: "£89", color: "bg-pink-100" },
          { name: "Blazer", price: "£129", color: "bg-blue-100" },
          { name: "Sneakers", price: "£95", color: "bg-green-100" },
          { name: "Handbag", price: "£149", color: "bg-amber-100" },
        ].map((p) => (
          <div key={p.name} className="rounded-lg overflow-hidden">
            <div className={`${p.color} h-16 flex items-center justify-center`}>
              <ShoppingBag className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-1.5">
              <p className="text-gray-800 text-[9px] font-medium">{p.name}</p>
              <p className="text-gray-600 text-[9px] font-bold">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroCorporateMockup() {
  return (
    <div className="bg-slate-900 p-3 min-h-[200px]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white text-xs font-semibold">Law Firm</span>
        <div className="bg-amber-500 rounded px-2 py-0.5 text-[8px] text-white font-semibold">Consult</div>
      </div>
      <div className="bg-slate-800 rounded-lg p-3 mb-2 text-center">
        <p className="text-white text-xs font-bold">Experienced Legal Counsel</p>
        <p className="text-slate-400 text-[9px] mt-1">Protecting Your Rights Since 1994</p>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {["Corporate", "Employment", "Property", "Litigation"].map((s) => (
          <div key={s} className="bg-slate-800 rounded p-2 text-center">
            <Scale className="w-3 h-3 text-amber-500 mx-auto mb-1" />
            <p className="text-white text-[8px]">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaaSProjectMockup() {
  const projects = [
    { name: "Website Redesign", progress: 78, status: "On Track", statusColor: "text-green-500 bg-green-500/10" },
    { name: "Mobile App MVP", progress: 45, status: "At Risk", statusColor: "text-orange-500 bg-orange-500/10" },
    { name: "API Integration", progress: 100, status: "Complete", statusColor: "text-blue-500 bg-blue-500/10" },
    { name: "E-commerce Store", progress: 62, status: "On Track", statusColor: "text-green-500 bg-green-500/10" },
  ];

  return (
    <div className="flex min-h-[340px]">
      <div className="w-44 bg-gray-900 dark:bg-gray-950 p-3 flex flex-col">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center">
            <Layers className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-white text-xs font-bold">ProjectHub</span>
        </div>
        <nav className="space-y-1 flex-1">
          {[
            { icon: Home, label: "Dashboard", active: true },
            { icon: Folder, label: "Projects", active: false },
            { icon: Users, label: "Team", active: false },
            { icon: BarChart, label: "Analytics", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs ${
                item.active
                  ? "bg-blue-500/20 text-blue-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.label}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2 mt-4">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
          <span className="text-gray-400 text-[10px]">Sarah M.</span>
        </div>
      </div>

      <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-foreground text-sm font-semibold">Good morning, Sarah 👋</p>
            <p className="text-muted-foreground text-[10px]">Tuesday, Feb 17</p>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="w-3.5 h-3.5 text-muted-foreground" />
            <div className="bg-blue-500 text-white text-[9px] px-2 py-1 rounded-md font-semibold">+ New Project</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "Active Projects", value: "12", color: "border-blue-500/30 bg-blue-500/5" },
            { label: "Tasks Due", value: "8", color: "border-orange-500/30 bg-orange-500/5" },
            { label: "Team Members", value: "24", color: "border-green-500/30 bg-green-500/5" },
            { label: "On Track", value: "92%", color: "border-purple-500/30 bg-purple-500/5" },
          ].map((stat) => (
            <div key={stat.label} className={`border rounded-lg p-2 ${stat.color}`}>
              <p className="text-foreground text-sm font-bold">{stat.value}</p>
              <p className="text-muted-foreground text-[8px]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border rounded-lg overflow-hidden">
          <div className="grid grid-cols-[1fr_80px_60px_40px] gap-2 px-3 py-1.5 bg-muted/50 text-[9px] text-muted-foreground font-medium">
            <span>Project</span>
            <span>Progress</span>
            <span>Status</span>
            <span>Team</span>
          </div>
          {projects.map((p) => (
            <div key={p.name} className="grid grid-cols-[1fr_80px_60px_40px] gap-2 px-3 py-2 border-t border-border items-center">
              <span className="text-foreground text-[10px] font-medium">{p.name}</span>
              <div className="flex items-center gap-1.5">
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
                <span className="text-[8px] text-muted-foreground">{p.progress}%</span>
              </div>
              <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${p.statusColor}`}>
                {p.status}
              </span>
              <div className="flex -space-x-1">
                <div className="w-4 h-4 rounded-full bg-blue-400 border border-background" />
                <div className="w-4 h-4 rounded-full bg-purple-400 border border-background" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EcommerceProjectMockup() {
  return (
    <div className="bg-white dark:bg-gray-50 min-h-[340px]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200">
        <span className="text-gray-900 text-sm font-bold italic">LuxeWear</span>
        <div className="flex items-center gap-3 text-[10px] text-gray-600">
          <span>Women</span>
          <span>Men</span>
          <span className="text-red-500 font-semibold">Sale</span>
          <span>About</span>
        </div>
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-gray-500" />
          <div className="relative">
            <ShoppingBag className="w-3.5 h-3.5 text-gray-500" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-black text-white text-[7px] rounded-full flex items-center justify-center">3</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0">
        <div className="bg-gradient-to-br from-rose-100 to-pink-50 p-6 flex items-center justify-center min-h-[120px]">
          <div className="text-center">
            <Heart className="w-8 h-8 text-rose-300 mx-auto mb-2" />
            <p className="text-gray-400 text-[9px]">Featured Look</p>
          </div>
        </div>
        <div className="p-4 flex flex-col justify-center">
          <span className="text-[8px] text-gray-500 uppercase tracking-wider">New Collection</span>
          <p className="text-gray-900 text-sm font-bold mt-1">Spring / Summer 2025</p>
          <p className="text-gray-500 text-[9px] mt-1.5 leading-relaxed">Discover the latest trends in premium fashion</p>
          <div className="flex gap-2 mt-3">
            <div className="bg-gray-900 text-white text-[9px] px-3 py-1.5 rounded font-medium">Shop Now</div>
            <div className="text-gray-600 text-[9px] px-3 py-1.5 underline">View Lookbook</div>
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="grid grid-cols-4 gap-2">
          {[
            { brand: "LUXE", name: "Silk Dress", price: "£189", color: "bg-rose-50" },
            { brand: "MAISON", name: "Wool Blazer", price: "£249", color: "bg-blue-50" },
            { brand: "LUXE", name: "Leather Bag", price: "£129", color: "bg-amber-50" },
            { brand: "ATELIER", name: "Sneakers", price: "£89", color: "bg-green-50" },
          ].map((p) => (
            <div key={p.name} className="group">
              <div className={`${p.color} rounded-lg aspect-[3/4] flex items-center justify-center`}>
                <ShoppingBag className="w-5 h-5 text-gray-300" />
              </div>
              <p className="text-gray-400 text-[7px] mt-1.5 uppercase">{p.brand}</p>
              <p className="text-gray-900 text-[9px] font-semibold">{p.name}</p>
              <p className="text-gray-700 text-[9px] font-bold">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LawFirmProjectMockup() {
  return (
    <div className="min-h-[340px]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900">
        <span className="text-white text-xs font-bold">Hartley & Associates</span>
        <div className="flex items-center gap-3 text-[10px] text-slate-300">
          <span>Practice Areas</span>
          <span>Attorneys</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="bg-amber-500 text-white text-[9px] px-2.5 py-1 rounded font-semibold">Book Consultation</div>
      </div>

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center">
        <p className="text-white text-base font-bold">Experienced Legal Counsel</p>
        <p className="text-slate-400 text-[10px] mt-1">Protecting Your Rights Since 1994</p>
        <div className="flex gap-2 justify-center mt-3">
          <div className="bg-amber-500 text-white text-[9px] px-3 py-1.5 rounded font-medium">Free Consultation</div>
          <div className="border border-white/30 text-white text-[9px] px-3 py-1.5 rounded">Our Practice</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-0 bg-white dark:bg-gray-100 border-b border-gray-200">
        {["30+ Years", "500+ Cases", "Legal 500", "Free Consult"].map((t) => (
          <div key={t} className="text-center py-2 border-r border-gray-200 last:border-r-0">
            <p className="text-gray-800 text-[9px] font-bold">{t}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 p-3 bg-white dark:bg-gray-50">
        {[
          { icon: Briefcase, label: "Corporate" },
          { icon: UserCheck, label: "Employment" },
          { icon: Home, label: "Property" },
          { icon: Scale, label: "Litigation" },
          { icon: Users, label: "Family" },
          { icon: CreditCard, label: "Tax" },
        ].map((s) => (
          <div key={s.label} className="bg-slate-50 dark:bg-gray-100 rounded-lg p-2 text-center border border-slate-200">
            <s.icon className="w-3.5 h-3.5 text-amber-600 mx-auto mb-1" />
            <p className="text-gray-800 text-[8px] font-medium">{s.label} Law</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    icon: Globe,
    gradient: "from-[#3B82F6] to-[#6366F1]",
    name: "Custom Website Development",
    description: "Bespoke websites built from scratch, tailored to your brand and business goals. Every pixel crafted for maximum impact and conversion.",
    features: ["Pixel-perfect custom design", "Mobile-first responsive layout", "Lightning-fast performance", "SEO-optimised structure"],
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    link: "/services/custom-development",
  },
  {
    icon: ShoppingBag,
    gradient: "from-[#10B981] to-[#059669]",
    name: "E-Commerce Development",
    description: "High-converting online stores built with modern technology. From product pages to checkout flows optimised for maximum sales.",
    features: ["Conversion-optimised checkout", "Inventory management", "Payment gateway integration", "Mobile shopping experience"],
    tech: ["Shopify", "WooCommerce", "Stripe", "Next.js"],
    link: "/services/web-development/cms/shopify",
  },
  {
    icon: FileText,
    gradient: "from-[#8B5CF6] to-[#6366F1]",
    name: "CMS Development",
    description: "Powerful content management systems that put you in control. Update your website anytime without touching a single line of code.",
    features: ["Easy content management", "Custom admin panels", "Multi-user roles", "Media management"],
    tech: ["WordPress", "Sanity", "Contentful", "Strapi"],
    link: "/services/cms-development",
  },
  {
    icon: Layers,
    gradient: "from-[#F59E0B] to-[#EF4444]",
    name: "Web Application Development",
    description: "Complex, feature-rich web applications that solve real business problems. Built with scalable architecture for long-term success.",
    features: ["Custom business logic", "Real-time functionality", "Third-party integrations", "Scalable architecture"],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "/services/web-apps",
  },
  {
    icon: Target,
    gradient: "from-[#EC4899] to-[#8B5CF6]",
    name: "Landing Page Development",
    description: "High-converting landing pages designed to turn visitors into customers. A/B tested, optimised, and built for results.",
    features: ["Conversion rate optimised", "A/B testing ready", "Fast load times (<1s)", "Lead capture forms"],
    tech: ["Next.js", "React", "Framer Motion", "HubSpot"],
    link: "/services/build-mvp",
  },
  {
    icon: RefreshCw,
    gradient: "from-[#06B6D4] to-[#3B82F6]",
    name: "Website Redesign",
    description: "Transform your outdated website into a modern, high-performing digital asset. Keep your brand, lose the old design.",
    features: ["Modern design transformation", "Performance improvements", "SEO preservation & boost", "Content migration"],
    tech: ["React", "Next.js", "Figma", "Lighthouse"],
    link: "/services/web-development",
  },
];

const techTabs = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { icon: Code2, name: "React", description: "UI library" },
      { icon: ArrowRight, name: "Next.js", description: "Full-stack React" },
      { icon: Layers, name: "Vue.js", description: "Progressive framework" },
      { icon: Triangle, name: "Angular", description: "Enterprise framework" },
      { icon: FileCode, name: "TypeScript", description: "Type-safe JS" },
      { icon: Paintbrush, name: "Tailwind CSS", description: "Utility-first CSS" },
      { icon: Zap, name: "Vite", description: "Fast build tool" },
      { icon: Smartphone, name: "React Native", description: "Mobile apps" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { icon: Server, name: "Node.js", description: "JS runtime" },
      { icon: Zap, name: "Express.js", description: "Web framework" },
      { icon: Code2, name: "Python", description: "Versatile language" },
      { icon: Server, name: "PHP", description: "Server language" },
      { icon: Database, name: "PostgreSQL", description: "SQL database" },
      { icon: Database, name: "MongoDB", description: "NoSQL database" },
      { icon: Zap, name: "Redis", description: "Caching layer" },
      { icon: Layers, name: "GraphQL", description: "API query language" },
    ],
  },
  {
    id: "cms",
    label: "CMS & E-Commerce",
    items: [
      { icon: FileText, name: "WordPress", description: "Most popular CMS" },
      { icon: ShoppingBag, name: "Shopify", description: "E-commerce platform" },
      { icon: ShoppingCart, name: "WooCommerce", description: "WordPress store" },
      { icon: Database, name: "Sanity", description: "Headless CMS" },
      { icon: FileCode, name: "Contentful", description: "Content platform" },
      { icon: Package, name: "Strapi", description: "Open-source CMS" },
      { icon: CreditCard, name: "Stripe", description: "Payment processing" },
      { icon: DollarSign, name: "PayPal", description: "Payment gateway" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: [
      { icon: Cloud, name: "AWS", description: "Cloud platform" },
      { icon: Cloud, name: "Vercel", description: "Frontend hosting" },
      { icon: Globe, name: "Cloudflare", description: "CDN & security" },
      { icon: Package, name: "Docker", description: "Containerisation" },
      { icon: GitBranch, name: "GitHub", description: "Version control" },
      { icon: Zap, name: "CI/CD", description: "Auto deployment" },
      { icon: Activity, name: "Monitoring", description: "Uptime tracking" },
      { icon: Shield, name: "SSL/TLS", description: "Security certs" },
    ],
  },
  {
    id: "design",
    label: "Design & Tools",
    items: [
      { icon: Palette, name: "Figma", description: "UI/UX design" },
      { icon: Image, name: "Adobe XD", description: "Prototyping" },
      { icon: BarChart, name: "Analytics", description: "User insights" },
      { icon: Search, name: "SEO Tools", description: "Search optimisation" },
      { icon: TestTube, name: "Jest", description: "Unit testing" },
      { icon: CheckCircle, name: "Cypress", description: "E2E testing" },
      { icon: Zap, name: "Lighthouse", description: "Performance" },
      { icon: Activity, name: "Hotjar", description: "User behaviour" },
    ],
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    points: [
      "Deep-dive into your business goals and target audience",
      "Competitor analysis and market research",
      "Technical requirements and scope definition",
    ],
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    points: [
      "Wireframes and user experience mapping",
      "High-fidelity Figma designs for approval",
      "Interactive prototype before development begins",
    ],
  },
  {
    icon: Code2,
    title: "Development & Testing",
    points: [
      "Agile sprints with weekly progress updates",
      "Cross-browser and device testing throughout",
      "Performance and security audits before launch",
    ],
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    points: [
      "Smooth deployment with zero downtime",
      "SEO setup, analytics, and monitoring configured",
      "Ongoing support and continuous improvements",
    ],
  },
];

const industries = [
  { icon: ShoppingBag, name: "E-Commerce", count: "35+ projects" },
  { icon: Stethoscope, name: "Healthcare", count: "12+ projects" },
  { icon: Building, name: "Professional Services", count: "28+ projects" },
  { icon: GraduationCap, name: "Education", count: "15+ projects" },
  { icon: Utensils, name: "Hospitality", count: "20+ projects" },
  { icon: Home, name: "Real Estate", count: "18+ projects" },
];

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Timelines vary by project type. A landing page takes 1-2 weeks, a business website 4-6 weeks, an e-commerce store 6-10 weeks, and a complex web application 12-20 weeks. We provide a detailed project timeline after discovery. We always deliver on schedule.",
  },
  {
    q: "What's included in a website project?",
    a: "Every project includes: UX research and wireframes, custom design (Figma), responsive development, cross-browser testing, SEO setup (meta tags, sitemap, robots.txt), Google Analytics, performance optimisation, SSL certificate, and 30-day post-launch support.",
  },
  {
    q: "Do you work with existing brands or create new ones?",
    a: "Both! If you have a brand, we design within it. If you need branding, our design team can create logos, colour palettes, and brand guidelines as part of or alongside the web project.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Absolutely. We design mobile-first—starting with the smallest screen and scaling up. Every website is tested on iOS and Android phones, tablets, and desktops. We test on real devices, not just browser simulations.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes! We build on user-friendly CMS platforms (WordPress, Sanity) so you can update content, add blog posts, change images, and manage products without touching code. We provide training and documentation.",
  },
  {
    q: "Do you provide hosting?",
    a: "We can recommend and set up hosting, but you own it directly (no lock-in). We typically use AWS, Vercel, or DigitalOcean depending on your needs. We help you understand costs and manage the setup.",
  },
  {
    q: "What about SEO?",
    a: "Every website is built with SEO best practices: semantic HTML, fast load times, Core Web Vitals optimisation, meta tags, Open Graph, structured data, sitemaps, and clean URL structure. We don't do ongoing SEO campaigns but build the perfect foundation.",
  },
  {
    q: "How do you handle revisions?",
    a: "Our process includes structured feedback rounds: 2 design revision rounds and 1 development revision round. We use Figma for design feedback (comment directly on designs) and maintain clear communication throughout.",
  },
  {
    q: "Will my website be secure?",
    a: "Security is built in from day one: SSL certificates, input validation, SQL injection prevention, regular updates, secure authentication, GDPR-compliant cookie handling, and OWASP guidelines. We never cut corners on security.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of post-launch support (bug fixes, tweaks). After that, we offer maintenance packages covering updates, backups, monitoring, and ongoing development. We're a long-term partner, not a one-time vendor.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Web Development" },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                🌐 Web Development Services
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Web Development Services
              </h1>

              <p className="mt-4 text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Websites & Applications That Drive Real Business Growth
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                From stunning marketing websites to complex SaaS platforms, we build web solutions that combine beautiful design with powerful functionality. Every project delivered on time, on budget, and built to scale.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                {[
                  { icon: Palette, label: "Custom Design" },
                  { icon: Smartphone, label: "Mobile First" },
                  { icon: TrendingUp, label: "SEO Optimised" },
                  { icon: Zap, label: "Fast & Secure" },
                ].map((pill) => (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-foreground border border-border"
                  >
                    <pill.icon className="w-3.5 h-3.5 text-blue-500" />
                    {pill.label}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-4 gap-4">
                {[
                  { number: "150+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "8 Years", label: "Experience" },
                  { number: "50ms", label: "Avg Load Time" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-card border border-border rounded-xl">
                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 hover:from-blue-600 hover:to-purple-700"
                  asChild
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-xl font-semibold" asChild>
                  <a href="#portfolio">View Our Work</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  className="absolute -left-6 top-4 w-[85%] origin-center"
                  style={{ transform: "rotate(-6deg)" }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BrowserFrame url="fashion-store.com" className="opacity-60">
                    <HeroEcommerceMockup />
                  </BrowserFrame>
                </motion.div>

                <motion.div
                  className="absolute -right-6 top-4 w-[85%] origin-center"
                  style={{ transform: "rotate(6deg)" }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <BrowserFrame url="law-firm.co.uk" className="opacity-60">
                    <HeroCorporateMockup />
                  </BrowserFrame>
                </motion.div>

                <motion.div
                  className="relative z-10"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <BrowserFrame url="saas-platform.com" glowColor="#3B82F6">
                    <HeroSaaSMockup />
                  </BrowserFrame>
                </motion.div>

                <motion.div
                  className="absolute -top-2 -left-4 z-20 bg-card border border-border rounded-lg px-3 py-1.5 shadow-lg"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs font-semibold flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-blue-500" />
                    Next.js & React
                  </p>
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-4 z-20 bg-card border border-border rounded-lg px-3 py-1.5 shadow-lg"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <p className="text-xs font-semibold flex items-center gap-1">
                    <Shield className="w-3 h-3 text-green-500" />
                    99.9% Uptime
                  </p>
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-4 z-20 bg-card border border-border rounded-lg px-3 py-1.5 shadow-lg"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <p className="text-xs font-semibold flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-purple-500" />
                    Mobile Responsive
                  </p>
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -right-4 z-20 bg-card border border-border rounded-lg px-3 py-1.5 shadow-lg"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <p className="text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-orange-500" />
                    SEO Optimised
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our Web Development Services</h2>
            <p className="text-muted-foreground mt-3 text-lg">End-to-end solutions for every business need</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div key={service.name} variants={itemVariants}>
                <Card className="p-8 rounded-2xl h-full hover:shadow-2xl hover:-translate-y-2 hover:border-primary transition-all duration-300 group">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.name}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-2 flex-wrap">
                    {service.tech.map((t) => (
                      <span key={t} className="bg-muted rounded-full px-3 py-1 text-xs">{t}</span>
                    ))}
                  </div>
                  <Link
                    href={service.link}
                    className="mt-6 inline-flex items-center gap-1 text-blue-500 font-semibold text-sm hover:underline"
                  >
                    Explore {service.name.split(" ")[0]}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA 1 */}
      <CTASection
        variant="gradient"
        title="Not Sure Which Service You Need?"
        description="Book a free consultation and we'll recommend the right solution for your business"
        primaryCTA={{ text: "Get Free Advice", link: "/contact" }}
        size="medium"
      />

      {/* FEATURED WORK / PROJECT SHOWCASES */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Recent Web Development Projects</h2>
            <p className="text-muted-foreground mt-3 text-lg">See what we've built for businesses like yours</p>
          </motion.div>

          {/* PROJECT 1 - SaaS */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BrowserFrame url="app.projecthub.io" glowColor="#3B82F6">
              <SaaSProjectMockup />
            </BrowserFrame>

            <div>
              <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 mb-3">SaaS Web Application</Badge>
              <h3 className="text-2xl md:text-3xl font-bold">ProjectHub - Team Management Platform</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Complete project management SaaS built with Next.js and Node.js. Real-time updates, team collaboration, and advanced analytics.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { value: "40ms", label: "Average page load" },
                  { value: "99.9%", label: "Uptime SLA" },
                  { value: "5,000+", label: "Active users" },
                  { value: "2x", label: "Revenue after launch" },
                ].map((r) => (
                  <div key={r.label} className="bg-muted p-4 rounded-lg">
                    <p className="text-xl font-bold text-blue-500">{r.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-2 flex-wrap">
                {["Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Stripe"].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Delivered in 12 weeks
              </p>
            </div>
          </motion.div>

          {/* PROJECT 2 - E-Commerce (reversed) */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-2 lg:order-1">
              <Badge className="bg-green-500/10 text-green-500 border-green-500/20 mb-3">E-Commerce Platform</Badge>
              <h3 className="text-2xl md:text-3xl font-bold">LuxeWear - Premium Fashion Store</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Complete WooCommerce store with custom design, advanced filtering, and seamless Stripe checkout. Increased conversions by 156%.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { value: "+156%", label: "Conversion increase" },
                  { value: "£45K", label: "Revenue month 1" },
                  { value: "2,000+", label: "Products listed" },
                  { value: "1.2s", label: "Page load time" },
                ].map((r) => (
                  <div key={r.label} className="bg-muted p-4 rounded-lg">
                    <p className="text-xl font-bold text-green-500">{r.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-2 flex-wrap">
                {["WordPress", "WooCommerce", "Stripe", "AWS CloudFront"].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Delivered in 8 weeks
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <BrowserFrame url="luxewear.co.uk" glowColor="#10B981">
                <EcommerceProjectMockup />
              </BrowserFrame>
            </div>
          </motion.div>

          {/* PROJECT 3 - Law Firm */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BrowserFrame url="hartley-law.co.uk" glowColor="#F59E0B">
              <LawFirmProjectMockup />
            </BrowserFrame>

            <div>
              <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 mb-3">Corporate Website</Badge>
              <h3 className="text-2xl md:text-3xl font-bold">Hartley & Associates - Law Firm Website</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Professional WordPress website with custom design, case study system, attorney profiles, and integrated booking.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { value: "+340%", label: "Organic traffic" },
                  { value: "85", label: "Lighthouse score" },
                  { value: "300+", label: "Monthly leads" },
                  { value: "#1", label: "Google ranking" },
                ].map((r) => (
                  <div key={r.label} className="bg-muted p-4 rounded-lg">
                    <p className="text-xl font-bold text-amber-500">{r.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-2 flex-wrap">
                {["WordPress", "Custom Theme", "MySQL", "Cloudflare"].map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Delivered in 6 weeks
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA 2 */}
      <CTASection
        variant="bordered"
        title="Ready to Build Something Great?"
        description="Join 150+ businesses that trusted us to build their digital presence"
        primaryCTA={{ text: "Start Your Project", link: "/contact" }}
        secondaryCTA={{ text: "View All Services", link: "/services" }}
        size="large"
      />

      {/* VALUE PROPOSITION */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose House of Developers"
            subtitle="What sets our web development apart"
            columns={3}
            values={[
              { icon: Palette, title: "Design-First Approach", description: "Every project starts with UX research and wireframes before a single line of code is written" },
              { icon: Zap, title: "Performance Obsessed", description: "We target sub-2 second load times and 90+ Lighthouse scores on every project" },
              { icon: Smartphone, title: "Mobile-First Always", description: "Designed for mobile first, then scaled up—because 60% of traffic is mobile" },
              { icon: TrendingUp, title: "Built for SEO", description: "Clean code structure, semantic HTML, Core Web Vitals optimised from day one" },
              { icon: Lock, title: "Security Built-In", description: "SSL, input validation, OWASP compliance—security is never an afterthought" },
              { icon: Headphones, title: "Ongoing Support", description: "We don't disappear after launch—dedicated support and maintenance packages" },
              { icon: Code2, title: "Clean Code", description: "Documented, maintainable code your team can understand and extend" },
              { icon: GitBranch, title: "Agile Process", description: "Weekly updates, transparent progress, and flexibility throughout development" },
              { icon: Award, title: "UK-Based Team", description: "All development done in-house by our UK team—no outsourcing, no surprises" },
            ]}
            accentColor={WEB_DEV_COLOR}
          />
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <TechTabsSection
            title="Technologies We Build With"
            subtitle="Modern stack for modern web experiences"
            tabs={techTabs}
            accentColor={WEB_DEV_COLOR}
          />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
            <p className="text-muted-foreground mt-3 text-lg">Deep expertise across key sectors</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {industries.map((ind) => (
              <motion.div key={ind.name} variants={itemVariants}>
                <Card className="p-6 text-center hover:border-primary transition-colors duration-300 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <ind.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-semibold text-sm">{ind.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ind.count}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Web Development Process"
            subtitle="A proven process delivering projects on time and on budget"
            steps={processSteps}
            accentColor={WEB_DEV_COLOR}
          />
        </div>
      </section>

      {/* MINI CASE STUDIES */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Results We've Delivered</h2>
            <p className="text-muted-foreground mt-3 text-lg">Numbers that speak for themselves</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                gradientFrom: "from-blue-500",
                gradientTo: "to-purple-500",
                industry: "E-Commerce",
                title: "Fashion Retailer",
                challenge: "Outdated website with 0.8% conversion rate and 8-second load times",
                results: [
                  { label: "Conversion Rate", value: "0.8% → 2.9%" },
                  { label: "Load Time", value: "8s → 1.2s" },
                  { label: "Monthly Revenue", value: "+£28,000" },
                  { label: "Organic Traffic", value: "+189%" },
                ],
                tech: "WooCommerce, AWS CloudFront",
                duration: "8 weeks",
              },
              {
                gradientFrom: "from-green-500",
                gradientTo: "to-teal-500",
                industry: "SaaS",
                title: "Project Management Tool",
                challenge: "MVP needed in 12 weeks for Series A fundraising",
                results: [
                  { label: "Launch", value: "On time, all features" },
                  { label: "Load Time", value: "40ms average" },
                  { label: "Users (Month 1)", value: "500+" },
                  { label: "Series A", value: "Raised £2M" },
                ],
                tech: "Next.js, Node.js, PostgreSQL",
                duration: "12 weeks",
              },
              {
                gradientFrom: "from-purple-500",
                gradientTo: "to-pink-500",
                industry: "Professional Services",
                title: "Law Firm",
                challenge: "No digital presence, missing online leads",
                results: [
                  { label: "Google Rankings", value: "#1 for 12 terms" },
                  { label: "Monthly Leads", value: "0 → 180+" },
                  { label: "Lighthouse Score", value: "94/100" },
                  { label: "Traffic Growth", value: "+340%" },
                ],
                tech: "WordPress, Custom Theme",
                duration: "6 weeks",
              },
            ].map((cs) => (
              <motion.div key={cs.title} variants={itemVariants}>
                <Card className="overflow-hidden h-full">
                  <div className={`h-1 bg-gradient-to-r ${cs.gradientFrom} ${cs.gradientTo}`} />
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="text-xs mb-3">{cs.industry}</Badge>
                    <h3 className="text-xl font-bold">{cs.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{cs.challenge}</p>
                    <div className="mt-4 space-y-3">
                      {cs.results.map((r) => (
                        <div key={r.label} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">{r.label}</span>
                          <span className="font-bold text-green-500">{r.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">Tech:</span> {cs.tech}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {cs.duration}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Web Development FAQs</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA 3 */}
      <CTASection
        variant="gradient"
        title="Let's Build Your Dream Website"
        description="Free consultation, no obligation quote within 48 hours"
        primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
        secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
        showContactInfo={true}
        size="large"
      />
    </>
  );
}
