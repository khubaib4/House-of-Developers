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
  Layout,
  Server,
  Database,
  Code2,
  Zap,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Lock,
  CreditCard,
  Cloud,
  TestTube,
  Users,
  Package,
  Smartphone,
  DollarSign,
  User,
  Briefcase,
  ShoppingBag,
  BarChart3,
  Home,
  Folder,
  Settings,
  Bell,
  Check,
  Code,
  Search,
  FileCheck,
  UserCheck,
} from "lucide-react";

const MERN_COLOR = "#00D8FF";

const mernTechTabs = [
  {
    label: "Frontend",
    technologies: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Redux", slug: "redux" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
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
      { name: "Jest", slug: "jest" },
      { name: "Cypress", slug: "cypress" },
      { name: "Sentry", slug: "sentry" },
      { name: "Stripe", slug: "stripe" },
    ],
  },
];

const whyChooseValues = [
  { icon: Code2, title: "Single Language", description: "JavaScript/TypeScript across frontend, backend, and database queries" },
  { icon: Zap, title: "Fast Development", description: "Reuse code, components, and knowledge between frontend and backend" },
  { icon: Users, title: "Huge Community", description: "Largest developer community, endless resources and libraries" },
  { icon: Package, title: "NPM Ecosystem", description: "2M+ packages available for any functionality you need" },
  { icon: TrendingUp, title: "Highly Scalable", description: "Node.js handles concurrent connections, MongoDB scales horizontally" },
  { icon: Smartphone, title: "React Native Ready", description: "Extend to mobile apps with React Native easily" },
  { icon: Database, title: "Flexible Schema", description: "MongoDB's document model adapts as your app evolves" },
  { icon: Sparkles, title: "Modern & Popular", description: "Most popular JavaScript stack, used by startups and enterprises" },
  { icon: DollarSign, title: "Cost Effective", description: "One team, one language\u2014lower development costs" },
];

const deliverables = [
  { icon: Layout, title: "React UI Development", description: "Component-based interfaces with hooks, context, and state management" },
  { icon: Server, title: "RESTful APIs", description: "Express routes, middleware, authentication, and business logic" },
  { icon: Database, title: "MongoDB Integration", description: "Schema design, Mongoose models, aggregations, and queries" },
  { icon: Lock, title: "Authentication", description: "JWT, sessions, OAuth, passport.js for secure user login" },
  { icon: Zap, title: "Real-Time Features", description: "Socket.io for chat, notifications, live updates" },
  { icon: CreditCard, title: "Payment Integration", description: "Stripe, PayPal webhooks and subscription handling" },
  { icon: Cloud, title: "Deployment & DevOps", description: "AWS, Heroku, DigitalOcean, Docker, CI/CD pipelines" },
  { icon: TestTube, title: "Testing", description: "Jest, React Testing Library, Mocha, Chai for quality" },
  { icon: TrendingUp, title: "Performance Optimization", description: "Code splitting, lazy loading, caching, database indexing" },
];

const pricingPlans = [
  {
    name: "Part-Time MERN Developer",
    price: "\u00a32,500",
    period: "/month",
    description: "80 hours/month",
    isPopular: false,
    features: [
      "React component development",
      "Express API endpoints",
      "MongoDB schema design",
      "Bug fixes & updates",
      "Code reviews",
      "Flexible 4 hours/day",
    ],
    cta: "Hire Part-Time",
  },
  {
    name: "Full-Time MERN Developer",
    price: "\u00a34,500",
    period: "/month",
    description: "160 hours/month",
    isPopular: true,
    features: [
      "Complete feature ownership",
      "Frontend + backend development",
      "Database optimization",
      "Real-time features",
      "Testing & documentation",
      "Daily standups & sprints",
    ],
    cta: "Hire Full-Time",
  },
  {
    name: "MERN Development Team",
    price: "Custom",
    period: " Quote",
    description: "2+ developers",
    isPopular: false,
    features: [
      "Frontend specialist",
      "Backend specialist",
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
    experience: "9+ years in JavaScript development",
    available: true,
    availableText: "Available Now",
    availability: "Can start within 1 week",
    skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Redux", "Socket.io", "AWS"],
    highlights: [
      "Built 15+ production MERN applications",
      "Expert in React hooks and performance",
      "MongoDB schema design and optimization",
      "Real-time features with Socket.io",
      "AWS deployment and scaling",
    ],
    projects: ["SaaS dashboard with 50K+ users", "Real-time collaboration tool", "E-commerce platform with payments"],
  },
  {
    experience: "8+ years full-stack JavaScript",
    available: false,
    availableText: "Available in 2 weeks",
    availability: "2 weeks notice period",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "GraphQL", "Jest", "Docker"],
    highlights: [
      "GraphQL API design specialist",
      "Next.js SSR/SSG expert",
      "Microservices architecture",
      "Jest/React Testing Library",
      "DevOps and CI/CD pipelines",
    ],
    projects: ["Multi-tenant SaaS platform", "Headless CMS with GraphQL", "Analytics dashboard"],
  },
];

const projects = [
  {
    gradient: "from-blue-500 to-purple-500",
    icon: Briefcase,
    badge: "SaaS Platform",
    title: "Project Management Dashboard",
    description: "Real-time collaboration tool with task management, team chat, and analytics",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    results: ["10,000+ active users", "Real-time updates", "99.9% uptime"],
  },
  {
    gradient: "from-green-500 to-teal-500",
    icon: ShoppingBag,
    badge: "E-Commerce",
    title: "Online Marketplace Platform",
    description: "Multi-vendor marketplace with product catalog, cart, and Stripe payments",
    tech: ["React", "Express", "MongoDB", "Stripe", "Redis"],
    results: ["\u00a3500K transactions/month", "5,000+ products", "Mobile responsive"],
  },
  {
    gradient: "from-purple-500 to-pink-500",
    icon: BarChart3,
    badge: "Analytics Platform",
    title: "Business Intelligence Dashboard",
    description: "Data visualization platform with custom charts and export features",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "D3.js"],
    results: ["Process 1M+ data points", "Real-time analytics", "Custom reporting"],
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Discuss Your MERN Project",
    points: [
      "Free 30-minute consultation to discuss React frontend and API requirements",
      "MongoDB schema planning and define project architecture",
      "Choose engagement model and set project timeline",
    ],
  },
  {
    icon: Users,
    title: "Meet MERN Developers",
    points: [
      "Interview 2-3 pre-vetted MERN specialists with project portfolios",
      "Review technical skills assessments and GitHub profiles",
      "See MERN stack project examples and confirm availability",
    ],
  },
  {
    icon: FileCheck,
    title: "Technical Assessment",
    points: [
      "Video interviews evaluating React, Node.js, and MongoDB skills",
      "React component discussions and API design questions",
      "MongoDB query review and final hiring decision",
    ],
  },
  {
    icon: UserCheck,
    title: "Onboard & Start Coding",
    points: [
      "Contract and NDA signing with access to codebase",
      "Setup development environment and first sprint planning",
      "Initial components and APIs delivered within the first week",
    ],
  },
];

const faqs = [
  {
    q: "Why choose MERN over other stacks?",
    a: "MERN uses JavaScript throughout (frontend, backend, database queries), meaning faster development, easier code reuse, and one team for everything. Perfect for startups and modern web apps. Choose MERN if you want speed, scalability, and JavaScript expertise.",
  },
  {
    q: "Is MERN stack good for large applications?",
    a: "Yes! MERN scales well. MongoDB handles millions of documents, Node.js handles thousands of concurrent connections, and React powers apps like Facebook and Instagram. We've built MERN apps serving 100K+ users.",
  },
  {
    q: "Can MERN developers also do mobile apps?",
    a: "Yes! With React Native, MERN developers can extend to iOS and Android apps, sharing code with the web version. Same React knowledge applies.",
  },
  {
    q: "How experienced are your MERN developers?",
    a: "Minimum 5 years JavaScript, average 8+ years. They've built multiple production MERN applications and understand React hooks, Node.js async patterns, and MongoDB aggregations deeply.",
  },
  {
    q: "Do they use TypeScript?",
    a: "Yes! Most of our MERN developers prefer TypeScript for type safety. They can work with JavaScript or TypeScript based on your preference.",
  },
  {
    q: "Can they handle real-time features?",
    a: "Absolutely! Socket.io integration for real-time chat, notifications, collaborative editing, live updates\u2014our developers have built real-time MERN apps.",
  },
  {
    q: "What about state management in React?",
    a: "They're experts in Redux, Context API, Zustand, and React Query. They'll recommend the best state management solution for your app's complexity.",
  },
  {
    q: "Do they write tests?",
    a: "Yes! Jest for backend, React Testing Library for frontend, and Cypress/Playwright for E2E tests. Code quality and testing are priorities.",
  },
  {
    q: "Can they deploy MERN apps?",
    a: "Yes! AWS, Heroku, DigitalOcean, Vercel (frontend), MongoDB Atlas (database). They handle Docker, CI/CD, and production deployments.",
  },
  {
    q: "What if I need GraphQL instead of REST?",
    a: "Our MERN developers build GraphQL APIs with Apollo Server. They'll design schemas, resolvers, and integrate Apollo Client in React.",
  },
];

function MERNStackMockup() {
  const layers = [
    { name: "React", subtitle: "Frontend UI", color: "from-blue-500 to-blue-600", icon: Layout, snippet: "<Component />" },
    { name: "Express.js", subtitle: "Backend API", color: "from-purple-500 to-purple-600", icon: Server, snippet: "app.get('/api')" },
    { name: "Node.js", subtitle: "JavaScript Runtime", color: "from-green-500 to-green-600", icon: Code2, snippet: "V8 Engine" },
    { name: "MongoDB", subtitle: "NoSQL Database", color: "from-emerald-500 to-emerald-600", icon: Database, snippet: "{ user: {...} }" },
  ];

  return (
    <div className="relative" data-testid="mern-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-visible p-6">
        <div className="text-center mb-4">
          <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
            <Sparkles className="h-3 w-3 mr-1" /> MERN Stack
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
          <Code2 className="h-3 w-3 mr-1" /> Single Language
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        className="absolute top-1/3 -right-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${MERN_COLOR}15`, color: MERN_COLOR, borderColor: `${MERN_COLOR}30` }}>
          <Zap className="h-3 w-3 mr-1" /> Fast & Modern
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 -left-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate">
          <CheckCircle2 className="h-3 w-3 mr-1" /> Production Ready
        </Badge>
      </motion.div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div data-testid="dashboard-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">app.example.com</span>
          </div>
        </div>

        <div className="flex">
          <div className="w-12 border-r bg-muted/30 py-4 flex flex-col items-center gap-4">
            {[Home, Folder, Users, BarChart3, Settings].map((Icon, i) => (
              <Icon key={i} className={`h-4 w-4 ${i === 0 ? "text-foreground" : "text-muted-foreground"}`} />
            ))}
          </div>

          <div className="flex-1 p-4">
            <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
              <div>
                <p className="text-xs font-semibold">Dashboard</p>
                <p className="text-[10px] text-muted-foreground">Today, Feb 2026</p>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="h-3.5 w-3.5 text-muted-foreground" />
                <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-3 w-3 text-foreground" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { label: "Users", value: "1,234", trend: "+12%", color: "text-green-500" },
                { label: "Revenue", value: "\u00a345.8K", trend: "+8%", color: "text-green-500" },
                { label: "Projects", value: "28", trend: "", color: "" },
                { label: "Tasks", value: "156", trend: "-5%", color: "text-red-400" },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted/50 rounded-md p-2">
                  <p className="text-[9px] text-muted-foreground">{stat.label}</p>
                  <p className="text-xs font-bold">{stat.value}</p>
                  {stat.trend && <p className={`text-[8px] ${stat.color}`}>{stat.trend}</p>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-muted/30 rounded-md p-2">
                <p className="text-[9px] text-muted-foreground mb-1">Revenue</p>
                <div className="flex items-end gap-0.5 h-8">
                  {[40, 55, 45, 60, 50, 70, 65, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/30 to-blue-500/60 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="bg-muted/30 rounded-md p-2">
                <p className="text-[9px] text-muted-foreground mb-1">Projects</p>
                <div className="flex items-end gap-1 h-8">
                  {[
                    { h: 70, color: "bg-green-500/50" },
                    { h: 50, color: "bg-blue-500/50" },
                    { h: 30, color: "bg-yellow-500/50" },
                    { h: 20, color: "bg-red-400/50" },
                  ].map((bar, i) => (
                    <div key={i} className={`flex-1 ${bar.color} rounded-t-sm`} style={{ height: `${bar.h}%` }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-md p-2">
              <p className="text-[9px] text-muted-foreground mb-1">Recent Activity</p>
              {[
                { name: "Sarah", action: "Created project", time: "2m" },
                { name: "James", action: "Deployed API", time: "15m" },
                { name: "Emily", action: "Updated schema", time: "1h" },
              ].map((row) => (
                <div key={row.name} className="flex items-center justify-between gap-2 py-1 border-b border-border/30 last:border-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary/20" />
                    <span className="text-[9px]">{row.name}</span>
                  </div>
                  <span className="text-[8px] text-muted-foreground">{row.action}</span>
                  <span className="text-[8px] text-muted-foreground">{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
        {[
          { label: "React Components", icon: Layout, color: "text-blue-500" },
          { label: "Express API", icon: Server, color: "text-purple-500" },
          { label: "MongoDB Data", icon: Database, color: "text-green-500" },
          { label: "Node.js Server", icon: Code2, color: "text-emerald-500" },
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

export default function HireMERNPage() {
  return (
    <div>
      <SEO
        title="Hire MERN Stack Developers | MongoDB, React, Node"
        description="Hire expert MERN stack developers. MongoDB, Express, React, and Node.js specialists for full-stack web applications and SaaS platforms."
        canonical="/services/hire-developers/full-stack/mern"
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Hire Developers", href: "/services/hire-developers" },
          { label: "Full-Stack", href: "/services/hire-developers/full-stack" },
          { label: "MERN Stack" },
        ]}
      />

      {/* HERO */}
      <section className="py-16 md:py-24" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${MERN_COLOR}15`, color: MERN_COLOR, borderColor: `${MERN_COLOR}30` }}>
                <Code2 className="h-3 w-3 mr-1" /> MERN Stack Developers
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="hero-title">
                Hire MERN Stack Developers
              </h1>

              <p className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                MongoDB, Express, React, Node.js Experts
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                Hire senior MERN stack developers who build modern, scalable web applications using JavaScript throughout. From real-time dashboards to SaaS platforms&mdash;fast development with a single language across frontend and backend.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {[
                  { icon: Code2, label: "JavaScript Full-Stack" },
                  { icon: Zap, label: "Fast Development" },
                  { icon: TrendingUp, label: "Scalable" },
                  { icon: Sparkles, label: "Modern Stack" },
                ].map((pill) => {
                  const PillIcon = pill.icon;
                  return (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                      data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <PillIcon className="h-3.5 w-3.5" style={{ color: MERN_COLOR }} />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { value: "6+", label: "Developers" },
                  { value: "8+", label: "Years Avg" },
                  { value: "Now", label: "Available" },
                ].map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: MERN_COLOR }}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                  <Button data-testid="cta-hire-mern">
                    Hire MERN Developer <ArrowRight className="ml-2 h-4 w-4" />
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
              <MERNStackMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IS MERN */}
      <section className="py-20 bg-muted" data-testid="section-what-is">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">What is the MERN Stack?</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              MERN is a JavaScript-based technology stack for building full-stack web applications. MongoDB (database), Express (backend framework), React (frontend library), Node.js (runtime)&mdash;all using JavaScript/TypeScript throughout.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Database, letter: "M", name: "MongoDB", full: "NoSQL Database", purpose: "Flexible document storage, perfect for evolving schemas" },
              { icon: Server, letter: "E", name: "Express.js", full: "Backend Framework", purpose: "Fast, minimal web framework for Node.js APIs" },
              { icon: Layout, letter: "R", name: "React", full: "Frontend Library", purpose: "Component-based UI with virtual DOM for speed" },
              { icon: Code2, letter: "N", name: "Node.js", full: "JavaScript Runtime", purpose: "Run JavaScript on the server, non-blocking I/O" },
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
                  <Card className="p-6 h-full text-center" data-testid={`mern-card-${item.letter.toLowerCase()}`}>
                    <CardContent className="pt-2">
                      <Icon className="h-10 w-10 mx-auto mb-3" style={{ color: MERN_COLOR }} />
                      <p className="text-3xl font-bold mb-1" style={{ color: MERN_COLOR }}>{item.letter}</p>
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

      {/* CTA 1 */}
      <CTASection
        variant="bordered"
        title="Need a MERN Stack Expert?"
        description="Our developers build production-ready applications with MongoDB, Express, React, and Node.js"
        primaryCTA={{ text: "Hire MERN Developer", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
        size="medium"
      />

      {/* WHY CHOOSE MERN */}
      <section className="py-20" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose MERN Stack Development"
            subtitle="The benefits of using JavaScript everywhere"
            values={whyChooseValues}
            columns={3}
            accentColor={MERN_COLOR}
          />
        </div>
      </section>

      {/* DASHBOARD MOCKUP */}
      <section className="py-20 bg-muted" data-testid="section-dashboard">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">See What MERN Stack Developers Build</h2>
            <p className="text-muted-foreground mt-2">Complete web applications with beautiful frontend and robust backend</p>
          </div>
          <DashboardMockup />
        </div>
      </section>

      {/* WHAT MERN DEVELOPERS DELIVER */}
      <section className="py-20" data-testid="section-deliverables">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our MERN Stack Developers Deliver</h2>
            <p className="text-muted-foreground mt-2">Complete application development from database to UI</p>
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
                      <Icon className="h-7 w-7" style={{ color: MERN_COLOR }} />
                      <h3 className="font-semibold mt-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-muted" data-testid="section-pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MERN Stack Developer Pricing</h2>
            <p className="text-muted-foreground mt-2">Transparent pricing with no hidden costs</p>
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

      {/* DEVELOPER PROFILES */}
      <section className="py-20" data-testid="section-profiles">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our MERN Stack Developers</h2>
            <p className="text-muted-foreground mt-2">Senior JavaScript engineers with production experience</p>
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
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${MERN_COLOR}15` }}
                      >
                        <User className="h-7 w-7" style={{ color: MERN_COLOR }} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Senior MERN Stack Developer</h3>
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
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: MERN_COLOR }} />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground font-medium mb-1">Recent Projects:</p>
                      <p className="text-xs text-muted-foreground">{profile.projects.join(" \u2022 ")}</p>
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

      {/* PROJECTS SHOWCASE */}
      <section id="projects-showcase" className="py-20 bg-muted" data-testid="section-projects">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MERN Stack Applications We've Built</h2>
            <p className="text-muted-foreground mt-2">Real projects delivered by our developers</p>
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

                      <div className="space-y-1.5">
                        {project.results.map((result) => (
                          <div key={result} className="flex items-center gap-2">
                            <Check className="h-3.5 w-3.5 shrink-0" style={{ color: MERN_COLOR }} />
                            <span className="text-xs text-muted-foreground">{result}</span>
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

      {/* CTA 2 - After Projects */}
      <CTASection
        variant="gradient"
        title="Ready to Build Your MERN Application?"
        description="From SaaS platforms to real-time dashboards\u2014our MERN experts deliver fast"
        primaryCTA={{ text: "Schedule Interview", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
        secondaryCTA={{ text: "See Pricing", link: "#pricing" }}
        size="large"
      />

      {/* PROCESS */}
      <section className="py-20" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Hiring MERN Stack Developers"
            subtitle="From consultation to first feature delivery"
            steps={zigzagSteps}
            accentColor={MERN_COLOR}
          />
        </div>
      </section>

      <TabbedTechStack
        tabs={mernTechTabs}
        title="MERN Stack Technologies"
        subtitle="Our MERN developers are proficient across the full technology spectrum."
      />

      {/* FAQ */}
      <section className="py-20 bg-muted" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MERN Stack Developer FAQs</h2>
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

      {/* CTA 3 - Final */}
      <CTASection
        variant="gradient"
        title="Let's Build with the MERN Stack"
        description="Book a free consultation and meet our JavaScript full-stack developers"
        primaryCTA={{ text: "Book Consultation", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
        secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
        showContactInfo
        size="large"
      />
    </div>
  );
}
