import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
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
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import {
  Layers,
  Server,
  Database,
  Code2,
  Zap,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Cloud,
  Users,
  Package,
  FileCode,
  Smile,
  Feather,
  DollarSign,
  Workflow,
  Palette,
  MapPin,
  User,
  Search,
  Heart,
  Check,
  BookOpen,
  ShoppingBag,
  BarChart,
  LayoutDashboard,
  Sun,
  Moon,
  Tag,
  Clock,
  MessageSquare,
  Mail,
  FileCheck,
  UserCheck,
} from "lucide-react";

const MEVN_COLOR = "#42b883";

const mevnTechTabs = [
  {
    label: "Frontend",
    technologies: [
      { name: "Vue.js", slug: "vuedotjs" },
      { name: "Nuxt.js", slug: "nuxt" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Vite", slug: "vite" },
      { name: "GraphQL", slug: "graphql" },
    ],
  },
  {
    label: "Backend",
    technologies: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "NestJS", slug: "nestjs" },
      { name: "GraphQL", slug: "graphql" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Python", slug: "python" },
    ],
  },
  {
    label: "Database",
    technologies: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Redis", slug: "redis" },
      { name: "MySQL", slug: "mysql" },
      { name: "Supabase", slug: "supabase" },
      { name: "Firebase", slug: "firebase" },
    ],
  },
  {
    label: "DevOps",
    technologies: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Docker", slug: "docker" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Vercel", slug: "vercel" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "DigitalOcean", slug: "digitalocean" },
    ],
  },
  {
    label: "Tools",
    technologies: [
      { name: "GitHub", slug: "github" },
      { name: "Figma", slug: "figma" },
      { name: "Vitest", slug: "vitest" },
      { name: "Cypress", slug: "cypress" },
      { name: "Sentry", slug: "sentry" },
      { name: "Stripe", slug: "stripe" },
    ],
  },
];

const whyChooseValues = [
  { icon: Smile, title: "Easy to Learn", description: "Vue.js has the gentlest learning curve of all major frameworks" },
  { icon: TrendingUp, title: "Progressive Framework", description: "Start small, add features as needed\u2014truly progressive" },
  { icon: Feather, title: "Lightweight", description: "Vue is only 20KB gzipped\u2014faster load times than React or Angular" },
  { icon: Zap, title: "Fast Performance", description: "Virtual DOM + efficient reactivity = blazing fast apps" },
  { icon: FileCode, title: "Single File Components", description: "HTML, CSS, JS in one .vue file\u2014easy to understand" },
  { icon: Package, title: "Vue Ecosystem", description: "Vue Router, Vuex/Pinia, Nuxt.js\u2014official, well-documented tools" },
  { icon: Code2, title: "Template Syntax", description: "Familiar HTML-like templates easier than JSX" },
  { icon: Users, title: "Growing Community", description: "Used by Alibaba, GitLab, Nintendo\u2014rapidly growing" },
  { icon: DollarSign, title: "Rapid Development", description: "Build faster with Vue\u2019s simplicity\u2014lower costs" },
];

const deliverables = [
  { icon: Layers, title: "Vue.js Development", description: "Components, directives, Composition API, and reactive data" },
  { icon: FileCode, title: "Single File Components", description: "Clean .vue files with template, script, and styles together" },
  { icon: Workflow, title: "Vuex/Pinia State", description: "Centralized state management for complex applications" },
  { icon: MapPin, title: "Vue Router", description: "Client-side routing with nested routes and navigation guards" },
  { icon: Server, title: "Express APIs", description: "RESTful backends with Node.js and Express middleware" },
  { icon: Database, title: "MongoDB Integration", description: "Mongoose schemas, queries, and aggregations" },
  { icon: Zap, title: "Nuxt.js (SSR/SSG)", description: "Server-side rendering and static generation with Nuxt" },
  { icon: Palette, title: "Vuetify/PrimeVue", description: "Material Design or PrimeVue component libraries" },
  { icon: Cloud, title: "Deployment", description: "Vercel, Netlify, AWS\u2014optimized Vue build deployment" },
];

const pricingPlans = [
  {
    name: "Part-Time MEVN Developer",
    price: "\u00a32,500",
    period: "/month",
    description: "80 hours/month",
    isPopular: false,
    features: [
      "Vue component development",
      "Express API endpoints",
      "MongoDB queries",
      "Bug fixes & features",
      "Code reviews",
      "Flexible 4 hours/day",
    ],
    cta: "Hire Part-Time",
  },
  {
    name: "Full-Time MEVN Developer",
    price: "\u00a34,500",
    period: "/month",
    description: "160 hours/month",
    isPopular: true,
    features: [
      "Complete feature ownership",
      "Frontend + backend work",
      "Vuex/Pinia state management",
      "Testing & documentation",
      "Performance optimization",
      "Daily standups & sprints",
    ],
    cta: "Hire Full-Time",
  },
  {
    name: "MEVN Development Team",
    price: "Custom",
    period: " Quote",
    description: "2+ developers",
    isPopular: false,
    features: [
      "Frontend Vue specialist",
      "Backend Node.js developer",
      "Full-stack generalists",
      "UI/UX designer (optional)",
      "Project manager",
      "Complete app delivery",
    ],
    cta: "Build Team",
  },
];

const profiles = [
  {
    title: "Senior MEVN Stack Developer",
    experience: "6+ years Vue.js & Node.js",
    available: true,
    availableText: "Available Now",
    availability: "Can start immediately",
    gradient: "from-green-500 to-emerald-500",
    skills: ["Vue 3", "Nuxt.js", "Node.js", "Express", "MongoDB", "Pinia", "TypeScript", "Tailwind"],
    highlights: [
      "Built 18+ Vue.js applications",
      "Vue 3 Composition API expert",
      "Nuxt.js SSR/SSG specialist",
      "Performance optimization pro",
      "Clean, maintainable code",
    ],
    projects: ["Content management platform with 20K users", "E-commerce storefront with Vue + Nuxt", "Admin dashboard with Vuetify"],
    specialties: ["Rapid prototyping", "SEO-optimized Vue apps with Nuxt", "State management (Vuex/Pinia)"],
  },
  {
    title: "Senior MEVN Stack Developer",
    experience: "7+ years full-stack JavaScript",
    available: false,
    availableText: "Available in 1 week",
    availability: "1 week notice",
    gradient: "from-teal-500 to-cyan-500",
    skills: ["Vue.js", "Nuxt", "Node.js", "Express", "MongoDB", "GraphQL", "Vite", "Docker"],
    highlights: [
      "Vue 2 to Vue 3 migration expert",
      "GraphQL API design",
      "MongoDB aggregation specialist",
      "Component library creation",
      "DevOps & CI/CD",
    ],
    projects: ["SaaS platform with multi-tenancy", "Real-time chat application", "Vue component library"],
    specialties: ["Mentored junior Vue developers", "Open source contributor"],
  },
];

const projects = [
  {
    gradient: "from-green-500 to-teal-500",
    icon: BookOpen,
    badge: "Content Platform",
    title: "Tech Blog & Learning Platform",
    description: "Vue.js-powered blog with markdown support, search, and user authentication",
    tech: ["Vue 3", "Nuxt.js", "MongoDB", "Express", "Algolia"],
    results: ["15K Articles", "50K Users", "SEO Optimized"],
    features: ["Server-side rendering (Nuxt)", "Full-text search", "Markdown editor", "User comments"],
  },
  {
    gradient: "from-emerald-500 to-green-500",
    icon: ShoppingBag,
    badge: "E-Commerce",
    title: "Fashion E-Commerce Store",
    description: "Lightning-fast Vue storefront with product catalog and cart",
    tech: ["Vue 3", "Nuxt", "Stripe", "MongoDB", "Express"],
    results: ["\u00a3200K Sales", "1.2s Load Time", "4.5% Conversion"],
    features: ["Product filtering", "Stripe checkout", "Wishlist & reviews", "Mobile optimized"],
  },
  {
    gradient: "from-cyan-500 to-blue-500",
    icon: BarChart,
    badge: "Admin Panel",
    title: "Analytics Dashboard",
    description: "Real-time admin dashboard with charts and data visualization",
    tech: ["Vue 3", "Vuetify", "Chart.js", "Node.js", "MongoDB"],
    results: ["Real-time Data", "500K Records", "Custom Reports"],
    features: ["Interactive charts", "Data export (CSV/PDF)", "Role-based access", "Dark mode"],
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Discuss Your Vue.js Project",
    points: [
      "Free consultation to discuss Vue 3 vs Vue 2 and Nuxt.js SSR/SSG needs",
      "MongoDB schema design and define project architecture",
      "Choose engagement model and set project timeline",
    ],
  },
  {
    icon: Users,
    title: "Meet Vue.js Experts",
    points: [
      "Interview 2-3 MEVN stack developers with Vue.js project portfolios",
      "Review component library samples and GitHub profiles",
      "Schedule interviews and confirm developer availability",
    ],
  },
  {
    icon: FileCheck,
    title: "Technical Assessment",
    points: [
      "Video interviews evaluating Vue, Node.js, and MongoDB skills",
      "Assess Composition API knowledge and state management patterns",
      "Make final hiring decision with full technical confidence",
    ],
  },
  {
    icon: UserCheck,
    title: "Onboard & Start Building",
    points: [
      "Contract and NDA signing with access to Vue project",
      "Setup Vite/Nuxt environment and deliver first components",
      "Sprint planning to begin productive development immediately",
    ],
  },
];

const faqs = [
  {
    q: "Why choose MEVN over MERN or MEAN?",
    a: "Choose MEVN if you want Vue.js\u2019s simplicity and performance. Vue is easier to learn than React or Angular, has cleaner syntax than React (no JSX), and is more lightweight than Angular. Perfect for content platforms, marketing sites, and rapid development.",
  },
  {
    q: "Is Vue.js as popular as React or Angular?",
    a: "Vue has a smaller but passionate community. It\u2019s used by Alibaba, GitLab, Nintendo, Adobe. While React is more popular in the US, Vue is huge in Asia and growing rapidly worldwide. Quality over quantity\u2014Vue developers love it.",
  },
  {
    q: "What\u2019s Vue 3 Composition API?",
    a: "Vue 3\u2019s Composition API is a new way to organize component logic (similar to React Hooks). It\u2019s more flexible than Options API, better for TypeScript, and helps with code reuse. Our developers are Vue 3 experts.",
  },
  {
    q: "Do MEVN developers use Nuxt.js?",
    a: "Yes! Nuxt.js is Vue\u2019s equivalent to Next.js for React. It adds server-side rendering (SSR), static site generation (SSG), and automatic routing. Perfect for SEO and performance.",
  },
  {
    q: "Can Vue.js handle large applications?",
    a: "Absolutely! GitLab\u2019s entire frontend is Vue.js. With Vuex/Pinia for state management and proper architecture, Vue scales to large, complex apps. Our developers have built apps with 50K+ users.",
  },
  {
    q: "What\u2019s the difference between Vuex and Pinia?",
    a: "Vuex is Vue\u2019s traditional state management (like Redux). Pinia is the new, official recommendation\u2014simpler, better TypeScript support, less boilerplate. Our developers use both based on project needs.",
  },
  {
    q: "Does Vue.js have component libraries?",
    a: "Yes! Vuetify (Material Design), PrimeVue (comprehensive UI), Element Plus (enterprise), Quasar (full framework). Vue has excellent UI libraries for rapid development.",
  },
  {
    q: "Can MEVN developers do TypeScript?",
    a: "Yes! Vue 3 has excellent TypeScript support. Our developers write Vue with TypeScript for type safety, especially in larger projects.",
  },
  {
    q: "Is Vue good for SEO?",
    a: "With Nuxt.js (SSR/SSG), yes! Nuxt pre-renders pages on the server for perfect SEO. Without Nuxt, Vue is a SPA like React\u2014SEO requires extra work.",
  },
  {
    q: "Can you migrate from Vue 2 to Vue 3?",
    a: "Yes! Our developers can migrate Vue 2 applications to Vue 3, updating to Composition API, Vite build tool, and Vue 3 ecosystem. Gradual migration is possible too.",
  },
];

function MEVNStackMockup() {
  const layers = [
    { name: "Vue.js", subtitle: "Progressive Framework", color: "from-green-500 to-emerald-500", icon: Layers, snippet: "<template>" },
    { name: "Express.js", subtitle: "Backend API", color: "from-teal-500 to-cyan-500", icon: Server, snippet: "app.get('/api')" },
    { name: "Node.js", subtitle: "JavaScript Runtime", color: "from-blue-500 to-indigo-500", icon: Code2, snippet: "Async/Await" },
    { name: "MongoDB", subtitle: "NoSQL Database", color: "from-purple-500 to-pink-500", icon: Database, snippet: "{ data: {...} }" },
  ];

  return (
    <div className="relative" data-testid="mevn-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-visible p-6">
        <div className="text-center mb-4">
          <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
            <Layers className="h-3 w-3 mr-1" /> MEVN Stack
          </Badge>
        </div>

        <div className="space-y-3">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
              >
                <div className={`bg-gradient-to-r ${layer.color} rounded-lg p-4 text-white`}>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-3">
                      <Icon className="h-7 w-7" />
                      <div>
                        <p className="font-bold text-sm">{layer.name}</p>
                        <p className="text-xs text-white/80">{layer.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded">{layer.snippet}</span>
                  </div>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center">
                    <ArrowDown className="h-4 w-4 text-muted-foreground my-0.5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -top-3 -left-3"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate">
          <Sparkles className="h-3 w-3 mr-1" /> Progressive & Flexible
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        className="absolute top-1/3 -right-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${MEVN_COLOR}15`, color: MEVN_COLOR, borderColor: `${MEVN_COLOR}30` }}>
          <Feather className="h-3 w-3 mr-1" /> Lightweight
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 -left-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate">
          <Zap className="h-3 w-3 mr-1" /> 120 FPS Animations
        </Badge>
      </motion.div>
    </div>
  );
}

function ContentPlatformMockup() {
  const articles = [
    { category: "Vue.js", title: "Mastering Composition API", author: "Sarah Chen", date: "Feb 10", color: "bg-green-500/10 text-green-700 dark:text-green-400" },
    { category: "JavaScript", title: "Async Patterns in Node.js", author: "James Miller", date: "Feb 8", color: "bg-blue-500/10 text-blue-700 dark:text-blue-400" },
    { category: "Web Design", title: "Modern CSS Grid Layouts", author: "Emma Wilson", date: "Feb 6", color: "bg-purple-500/10 text-purple-700 dark:text-purple-400" },
    { category: "Vue.js", title: "Pinia vs Vuex Deep Dive", author: "Alex Park", date: "Feb 4", color: "bg-green-500/10 text-green-700 dark:text-green-400" },
    { category: "TypeScript", title: "Type-Safe Vue Components", author: "David Brown", date: "Feb 2", color: "bg-orange-500/10 text-orange-700 dark:text-orange-400" },
    { category: "Nuxt.js", title: "SSR Best Practices", author: "Lisa Zhang", date: "Jan 30", color: "bg-teal-500/10 text-teal-700 dark:text-teal-400" },
  ];

  return (
    <div data-testid="content-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">blog.platform.com</span>
          </div>
        </div>

        <div className="border-b bg-muted/20 px-4 py-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Layers className="h-4 w-4" style={{ color: MEVN_COLOR }} />
                <span className="text-xs font-bold">VueBlog</span>
              </div>
              <div className="hidden md:flex items-center gap-3 flex-wrap">
                {["Home", "Articles", "Categories", "Authors", "About"].map((nav, i) => (
                  <span key={nav} className={`text-[10px] ${i === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>{nav}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                <User className="h-3 w-3 text-foreground" />
              </div>
              <Sun className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-gradient-to-r from-green-600/90 to-teal-600/90 rounded-lg p-4 mb-4 text-white">
            <Badge className="mb-2 bg-white/20 text-white text-[8px] no-default-hover-elevate no-default-active-elevate border-0">Web Development</Badge>
            <p className="text-sm font-bold mb-1">Getting Started with Vue 3</p>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center">
                  <User className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-[9px] text-white/80">Sarah Chen</span>
              </div>
              <span className="text-[9px] text-white/60">Feb 14, 2026</span>
              <span className="text-[9px] text-white/60 flex items-center gap-0.5"><Clock className="h-2 w-2" /> 5 min read</span>
            </div>
            <div className="mt-2">
              <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded cursor-pointer">Read More</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-[9px] font-semibold mb-2">Latest Articles</p>
              <div className="grid grid-cols-3 gap-2">
                {articles.map((article) => (
                  <div key={article.title} className="bg-muted/30 rounded-md p-2">
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded mb-1.5 flex items-center justify-center">
                      <BookOpen className="h-3 w-3 text-muted-foreground/50" />
                    </div>
                    <span className={`text-[7px] px-1 py-0.5 rounded ${article.color}`}>{article.category}</span>
                    <p className="text-[8px] font-medium mt-1 leading-tight">{article.title}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-[7px] text-muted-foreground">{article.author}</span>
                      <span className="text-[7px] text-muted-foreground">{article.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-28 hidden sm:block">
              <div className="bg-muted/30 rounded-md p-2 mb-2">
                <p className="text-[8px] font-semibold mb-1.5">Popular Categories</p>
                {[
                  { name: "Vue.js", count: 32 },
                  { name: "JavaScript", count: 28 },
                  { name: "Web Design", count: 15 },
                  { name: "TypeScript", count: 12 },
                ].map((cat) => (
                  <div key={cat.name} className="flex items-center justify-between gap-1 py-0.5">
                    <span className="text-[7px] text-muted-foreground">{cat.name}</span>
                    <span className="text-[7px] text-muted-foreground">{cat.count}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 rounded-md p-2">
                <p className="text-[8px] font-semibold mb-1">Newsletter</p>
                <div className="flex items-center gap-1 bg-muted/50 rounded px-1.5 py-1 mb-1">
                  <Mail className="h-2 w-2 text-muted-foreground" />
                  <span className="text-[7px] text-muted-foreground">email@example.com</span>
                </div>
                <div className="text-center py-0.5 rounded text-[7px] text-white font-medium" style={{ backgroundColor: MEVN_COLOR }}>Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
        {[
          { label: "Vue Components", icon: Layers, color: "text-green-500" },
          { label: "Vuex Store", icon: Package, color: "text-emerald-500" },
          { label: "Vue Router", icon: MapPin, color: "text-teal-500" },
          { label: "Express API", icon: Server, color: "text-blue-500" },
          { label: "MongoDB", icon: Database, color: "text-purple-500" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-1.5">
              <Icon className={`h-3.5 w-3.5 ${item.color}`} />
              <span className="text-xs text-muted-foreground">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function HireMEVNPage() {
  return (
    <div>
      <SEO
        title="Hire MEVN Stack Developers | Vue.js & Node.js UK"
        description="Hire expert MEVN stack developers. MongoDB, Express, Vue.js, and Node.js specialists for modern web applications and interactive platforms."
        canonical="/services/hire-developers/full-stack/mevn"
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Hire Developers", href: "/services/hire-developers" },
          { label: "Full-Stack", href: "/services/hire-developers/full-stack" },
          { label: "MEVN Stack" },
        ]}
      />

      <section className="py-16 md:py-24" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${MEVN_COLOR}15`, color: MEVN_COLOR, borderColor: `${MEVN_COLOR}30` }}>
                <Layers className="h-3 w-3 mr-1" /> MEVN Stack Developers
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="hero-title">
                Hire MEVN Stack Developers
              </h1>

              <p className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-teal-500">
                MongoDB, Express, Vue.js, Node.js Experts
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                Hire senior MEVN stack developers who build fast, lightweight web applications with Vue.js. Approachable, progressive, and performant&mdash;perfect for modern SPAs, content platforms, and rapid development.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {[
                  { icon: Smile, label: "Easy to Learn" },
                  { icon: TrendingUp, label: "Progressive" },
                  { icon: Feather, label: "Lightweight" },
                  { icon: Zap, label: "Fast Performance" },
                ].map((pill) => {
                  const PillIcon = pill.icon;
                  return (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                      data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <PillIcon className="h-3.5 w-3.5" style={{ color: MEVN_COLOR }} />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { value: "3+", label: "Developers" },
                  { value: "6+", label: "Years Avg" },
                  { value: "Now", label: "Available" },
                ].map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: MEVN_COLOR }}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                  <Button data-testid="cta-hire-mevn">
                    Hire MEVN Developer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Button
                  variant="outline"
                  data-testid="cta-see-examples"
                  onClick={() => document.getElementById("projects-showcase")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See Examples <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <MEVNStackMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-what-is">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">What is the MEVN Stack?</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              MEVN is a JavaScript stack using Vue.js as the frontend framework. MongoDB (database), Express (backend), Vue.js (progressive framework), Node.js (runtime)&mdash;approachable, flexible, and perfect for developers who want simplicity without sacrificing power.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Database, letter: "M", name: "MongoDB", full: "NoSQL Database", purpose: "Flexible document storage for dynamic data", gradient: "text-emerald-500" },
              { icon: Server, letter: "E", name: "Express.js", full: "Backend Framework", purpose: "Fast, unopinionated Node.js web framework", gradient: "text-cyan-500" },
              { icon: Layers, letter: "V", name: "Vue.js", full: "Progressive Framework", purpose: "Approachable, performant, and versatile UI framework", gradient: "text-green-500" },
              { icon: Zap, letter: "N", name: "Node.js", full: "JavaScript Runtime", purpose: "Efficient server-side JavaScript execution", gradient: "text-blue-500" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full text-center" data-testid={`mevn-card-${item.letter.toLowerCase()}`}>
                    <CardContent className="pt-2">
                      <Icon className={`h-10 w-10 mx-auto mb-3 ${item.gradient}`} />
                      <p className={`text-3xl font-bold mb-1 ${item.gradient}`}>{item.letter}</p>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">{item.full}</p>
                      <p className="text-sm text-muted-foreground mt-3">{item.purpose}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        variant="bordered"
        title="Need a Vue.js Expert?"
        description="Our MEVN developers build fast, beautiful applications with Vue.js"
        primaryCTA={{ text: "Hire MEVN Developer", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
        size="medium"
      />

      <section className="py-20" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose MEVN Stack Development"
            subtitle="Vue.js simplicity with JavaScript full-stack power"
            values={whyChooseValues}
            columns={3}
            accentColor={MEVN_COLOR}
          />
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-dashboard">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Beautiful Content Platforms Built with MEVN</h2>
            <p className="text-muted-foreground mt-2">Vue.js creates stunning, performant user interfaces</p>
          </div>
          <ContentPlatformMockup />
        </div>
      </section>

      <section className="py-20" data-testid="section-deliverables">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our MEVN Stack Developers Deliver</h2>
            <p className="text-muted-foreground mt-2">Full-stack applications with Vue.js simplicity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full" data-testid={`deliverable-card-${i}`}>
                    <CardContent className="p-0">
                      <Icon className="h-7 w-7 mb-3" style={{ color: MEVN_COLOR }} />
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MEVN Stack Developer Pricing</h2>
            <p className="text-muted-foreground mt-2">Fast development at competitive rates</p>
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
            <h2 className="text-3xl font-bold">Meet Our MEVN Stack Developers</h2>
            <p className="text-muted-foreground mt-2">Vue.js specialists with modern JavaScript expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profiles.map((profile, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full" data-testid={`profile-card-${i}`}>
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${profile.gradient} flex items-center justify-center`}>
                        <User className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{profile.title}</h3>
                        <p className="text-sm text-muted-foreground">{profile.experience}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                      <span className="flex items-center gap-1.5 text-sm">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: profile.available ? "#22C55E" : "#F59E0B" }}
                        />
                        {profile.availableText}
                      </span>
                      <Badge variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">
                        {profile.availability}
                      </Badge>
                    </div>

                    <div className="flex gap-1.5 flex-wrap mb-6">
                      {profile.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs no-default-hover-elevate no-default-active-elevate"
                          data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      {profile.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: MEVN_COLOR }} />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-medium mb-1">Recent Projects:</p>
                      <p className="text-xs text-muted-foreground">{profile.projects.join(" \u2022 ")}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground font-medium mb-1">{i === 0 ? "Specialties:" : "Leadership:"}</p>
                      <p className="text-xs text-muted-foreground">{profile.specialties.join(" \u2022 ")}</p>
                    </div>

                    <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full" data-testid={`cta-interview-${i}`}>
                        Schedule Interview <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects-showcase" className="py-20 bg-muted" data-testid="section-projects">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Modern Applications Built with MEVN</h2>
            <p className="text-muted-foreground mt-2">Fast, beautiful, and performant Vue.js apps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden hover-elevate" data-testid={`project-card-${i}`}>
                    <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <ProjectIcon className="h-12 w-12 text-white/80" />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3 no-default-hover-elevate no-default-active-elevate">
                        {project.badge}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                      <div className="flex gap-1.5 flex-wrap mb-4">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="outline" className="text-xs no-default-hover-elevate no-default-active-elevate">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {project.results.map((result) => (
                          <div key={result} className="text-center bg-muted/50 rounded-md py-1.5 px-1">
                            <span className="text-[10px] font-medium">{result}</span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <Check className="h-3 w-3 shrink-0" style={{ color: MEVN_COLOR }} />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        variant="gradient"
        title="Ready to Build with Vue.js?"
        description="From content platforms to e-commerce\u2014our MEVN experts deliver fast"
        primaryCTA={{ text: "Schedule Interview", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
        secondaryCTA={{ text: "See Pricing", link: "#pricing" }}
        size="large"
      />

      <section className="py-20" data-testid="section-vue-advantages">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Developers Love Vue.js</h2>
            <p className="text-muted-foreground mt-2">The progressive JavaScript framework</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Smile, title: "Easy to Learn", description: "Gentlest learning curve. HTML templates, not JSX." },
              { icon: Zap, title: "Fast Performance", description: "20KB gzipped. 120 FPS animations. Lightning fast." },
              { icon: TrendingUp, title: "Progressive", description: "Start small, scale up. Add features incrementally." },
              { icon: Heart, title: "Great DX", description: "Developer experience matters. Vue is a joy to use." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full text-center" data-testid={`vue-advantage-${i}`}>
                    <CardContent className="p-0">
                      <Icon className="h-10 w-10 mx-auto mb-4" style={{ color: MEVN_COLOR }} />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Hiring MEVN Stack Developers"
            subtitle="From consultation to Vue.js app deployment"
            steps={zigzagSteps}
            accentColor={MEVN_COLOR}
          />
        </div>
      </section>

      <TabbedTechStack
        tabs={mevnTechTabs}
        title="MEVN Stack Technologies"
        subtitle="Our MEVN developers are proficient across the full technology spectrum."
      />

      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MEVN Stack Developer FAQs</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border rounded-lg px-6"
                data-testid={`faq-${i}`}
              >
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
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
        title="Let's Build with Vue.js & MEVN Stack"
        description="Book a free consultation and meet our progressive JavaScript developers"
        primaryCTA={{ text: "Book Consultation", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
        secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
        showContactInfo
        size="large"
      />
    </div>
  );
}
