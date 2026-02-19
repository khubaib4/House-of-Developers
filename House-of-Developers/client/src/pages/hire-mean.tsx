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
  Triangle,
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
  Cloud,
  TestTube,
  Users,
  Package,
  FileCode,
  Building,
  Box,
  Award,
  Shield,
  Layers,
  Workflow,
  Palette,
  User,
  Briefcase,
  BarChart3,
  Home,
  Settings,
  Bell,
  Search,
  Check,
  Heart,
  Download,
  Calendar,
  Filter,
  ChevronDown,
  FileCheck,
  UserCheck,
} from "lucide-react";

const MEAN_COLOR = "#DD0031";

const meanTechTabs = [
  {
    label: "Frontend",
    technologies: [
      { name: "Angular", slug: "angular" },
      { name: "TypeScript", slug: "typescript" },
      { name: "RxJS", slug: "reactivex" },
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
      { name: "Azure", slug: "microsoftazure" },
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
  { icon: FileCode, title: "TypeScript Native", description: "Angular uses TypeScript by default\u2014type safety and fewer bugs" },
  { icon: Building, title: "Enterprise Ready", description: "Angular's opinionated structure perfect for large teams" },
  { icon: Box, title: "Complete Framework", description: "Angular includes routing, forms, HTTP\u2014everything built-in" },
  { icon: Users, title: "Google Backed", description: "Maintained by Google with long-term support and updates" },
  { icon: Shield, title: "Strong Typing", description: "TypeScript throughout catches errors at compile time" },
  { icon: Layers, title: "Modular Architecture", description: "Angular modules keep code organized and maintainable" },
  { icon: TrendingUp, title: "Highly Scalable", description: "Node.js async + MongoDB scale to enterprise levels" },
  { icon: TestTube, title: "Testing Built-In", description: "Angular includes Jasmine/Karma for comprehensive testing" },
  { icon: Package, title: "RxJS Reactive", description: "Powerful reactive programming with RxJS observables" },
];

const deliverables = [
  { icon: Triangle, title: "Angular Development", description: "Components, modules, services, routing, and Angular CLI" },
  { icon: FileCode, title: "TypeScript Expertise", description: "Strong typing, interfaces, generics, and decorators" },
  { icon: Workflow, title: "RxJS Observables", description: "Reactive programming, operators, async data streams" },
  { icon: Server, title: "Express APIs", description: "RESTful endpoints, middleware, authentication" },
  { icon: Database, title: "MongoDB Integration", description: "Mongoose models, aggregations, schema design" },
  { icon: TestTube, title: "Angular Testing", description: "Jasmine, Karma, unit tests, E2E with Protractor" },
  { icon: Palette, title: "Angular Material", description: "Material Design components and theming" },
  { icon: Lock, title: "Authentication", description: "JWT, Guards, role-based access control" },
  { icon: Cloud, title: "Deployment", description: "Docker, AWS, Azure, CI/CD with Angular build optimization" },
];

const pricingPlans = [
  {
    name: "Part-Time MEAN Developer",
    price: "\u00a32,500",
    period: "/month",
    description: "80 hours/month",
    isPopular: false,
    features: [
      "Angular component development",
      "TypeScript code reviews",
      "Express API endpoints",
      "MongoDB queries",
      "Bug fixes & maintenance",
      "Flexible 4 hours/day",
    ],
    cta: "Hire Part-Time",
  },
  {
    name: "Full-Time MEAN Developer",
    price: "\u00a34,500",
    period: "/month",
    description: "160 hours/month",
    isPopular: true,
    features: [
      "Complete module ownership",
      "Angular + Node.js full-stack",
      "RxJS reactive patterns",
      "Testing & documentation",
      "Code architecture",
      "Daily standups & sprints",
    ],
    cta: "Hire Full-Time",
  },
  {
    name: "MEAN Development Team",
    price: "Custom",
    period: " Quote",
    description: "Enterprise teams",
    isPopular: false,
    features: [
      "2+ MEAN stack developers",
      "Angular architect",
      "Backend specialist",
      "QA engineer",
      "DevOps engineer (optional)",
      "Enterprise app delivery",
    ],
    cta: "Build Team",
  },
];

const profiles = [
  {
    title: "Senior MEAN Stack Developer",
    experience: "10+ years in enterprise JavaScript",
    available: true,
    availableText: "Available Now",
    availability: "Can start immediately",
    gradient: "from-red-500 to-pink-500",
    skills: ["Angular", "TypeScript", "RxJS", "Node.js", "Express", "MongoDB", "Jasmine", "Azure"],
    highlights: [
      "Built 12+ enterprise Angular applications",
      "Expert in Angular Material and custom components",
      "RxJS reactive patterns specialist",
      "TypeScript advanced patterns",
      "Microservices with Node.js",
    ],
    projects: ["Enterprise CRM with 500+ users", "Financial dashboard for banking", "Healthcare management system"],
    certifications: ["Google Cloud Certified", "Microsoft Azure Developer"],
  },
  {
    title: "Senior MEAN Stack Architect",
    experience: "12+ years full-stack TypeScript",
    available: false,
    availableText: "Available in 1 week",
    availability: "1 week notice",
    gradient: "from-blue-500 to-purple-500",
    skills: ["Angular", "TypeScript", "NestJS", "Node.js", "MongoDB", "GraphQL", "Jest", "Docker"],
    highlights: [
      "Angular architecture for large teams",
      "NestJS for structured backends",
      "MongoDB optimization expert",
      "Led teams of 5+ developers",
      "CI/CD and DevOps expertise",
    ],
    projects: ["Multi-tenant SaaS platform", "Supply chain management system", "Real-time analytics dashboard"],
    certifications: ["Technical team lead experience", "Code review & mentoring"],
  },
];

const projects = [
  {
    gradient: "from-red-500 to-orange-500",
    icon: Building,
    badge: "Enterprise CRM",
    title: "Customer Relationship Management",
    description: "Complete CRM with sales pipeline, contact management, and reporting for 500+ sales team",
    tech: ["Angular 16", "Node.js", "MongoDB", "RxJS", "Azure"],
    results: ["500+ Users", "50K Contacts", "Real-time Sync"],
    features: ["Role-based access control", "Advanced filtering & search", "Custom reporting engine", "Email integration"],
  },
  {
    gradient: "from-blue-500 to-cyan-500",
    icon: BarChart3,
    badge: "Financial Platform",
    title: "Trading Analytics Dashboard",
    description: "Real-time financial data visualization with complex calculations and charts",
    tech: ["Angular", "TypeScript", "Express", "MongoDB", "WebSockets"],
    results: ["Real-time Data", "1M+ Records", "Sub-second Response"],
    features: ["Live market data", "Complex calculations", "Interactive charts", "Export to Excel"],
  },
  {
    gradient: "from-purple-500 to-pink-500",
    icon: Heart,
    badge: "Healthcare System",
    title: "Patient Management Portal",
    description: "HIPAA-compliant healthcare platform with patient records and appointment scheduling",
    tech: ["Angular Material", "NestJS", "MongoDB", "FHIR API"],
    results: ["HIPAA Compliant", "10K Patients", "99.9% Uptime"],
    features: ["Electronic health records", "Appointment booking", "Secure messaging", "Prescription management"],
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Enterprise Requirements",
    points: [
      "Free consultation to discuss Angular application needs and version (16+)",
      "Define TypeScript requirements and MongoDB schema planning",
      "Determine team size, structure, and engagement model",
    ],
  },
  {
    icon: Users,
    title: "Meet MEAN Experts",
    points: [
      "Interview enterprise Angular developers with portfolios and project examples",
      "Review TypeScript code samples and RxJS expertise",
      "Schedule interviews and confirm developer availability",
    ],
  },
  {
    icon: FileCheck,
    title: "Technical Assessment",
    points: [
      "Video interviews evaluating Angular component architecture and RxJS patterns",
      "Assess TypeScript advanced concepts and system design skills",
      "Make final hiring decision with full technical confidence",
    ],
  },
  {
    icon: UserCheck,
    title: "Onboard & Start Building",
    points: [
      "Contract and NDA signing with access to Angular project",
      "Setup development environment and deliver first Angular modules",
      "Sprint planning to begin productive development immediately",
    ],
  },
];

const faqs = [
  {
    q: "Why choose MEAN over MERN for my project?",
    a: "Choose MEAN if you need Angular's opinionated structure, TypeScript by default, or building enterprise applications with large teams. MEAN is more structured; MERN (React) is more flexible. For complex business apps with many developers, MEAN's structure helps maintain consistency.",
  },
  {
    q: "Is Angular harder to learn than React?",
    a: "Angular has a steeper learning curve but includes everything (routing, forms, HTTP). React is simpler to start but requires choosing libraries. Our developers are Angular experts, so learning curve doesn't affect delivery time.",
  },
  {
    q: "Do MEAN developers use the latest Angular versions?",
    a: "Yes! Our developers stay current with Angular 16+ and leverage the latest features: standalone components, signals, improved performance, and modern TypeScript.",
  },
  {
    q: "Can MEAN stack handle mobile apps?",
    a: "For hybrid mobile, use Ionic with Angular. For native, Angular developers can learn React Native. We typically recommend separate mobile developers for native apps, but Ionic works well for business apps.",
  },
  {
    q: "What's RxJS and why is it important in MEAN?",
    a: "RxJS is Angular's reactive programming library using observables for async data. It's crucial for handling HTTP requests, forms, real-time updates. Our developers are RxJS experts for complex data flows.",
  },
  {
    q: "Do MEAN developers use NestJS?",
    a: "Many do! NestJS is a TypeScript Node.js framework inspired by Angular. It provides structure on the backend similar to Angular on frontend. Great for enterprise MEAN apps.",
  },
  {
    q: "Is Angular Material included?",
    a: "Yes! Our developers use Angular Material for enterprise UI components\u2014tables, forms, dialogs, menus. Saves development time and provides consistent Google Material Design.",
  },
  {
    q: "Can MEAN scale to large user bases?",
    a: "Absolutely! Node.js handles concurrent connections well, MongoDB scales horizontally, and Angular is used by Google apps serving billions. We've built MEAN apps for 100K+ users.",
  },
  {
    q: "What about testing in Angular?",
    a: "Angular includes Jasmine (testing framework) and Karma (test runner). Our developers write unit tests for components, services, and E2E tests with Protractor or Cypress.",
  },
  {
    q: "Can you migrate from AngularJS to modern Angular?",
    a: "Yes! Our developers can migrate legacy AngularJS (1.x) applications to modern Angular (16+). It requires rewriting components but maintains business logic.",
  },
];

function MEANStackMockup() {
  const layers = [
    { name: "Angular", subtitle: "Frontend Framework", color: "from-red-500 to-pink-500", icon: Triangle, snippet: "@Component" },
    { name: "Express.js", subtitle: "Backend API", color: "from-purple-500 to-blue-500", icon: Server, snippet: "app.get('/api')" },
    { name: "Node.js", subtitle: "JavaScript Runtime", color: "from-green-500 to-teal-500", icon: Zap, snippet: "TypeScript Support" },
    { name: "MongoDB", subtitle: "NoSQL Database", color: "from-emerald-500 to-green-500", icon: Database, snippet: "{ data: {...} }" },
  ];

  return (
    <div className="relative" data-testid="mean-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-visible p-6">
        <div className="text-center mb-4">
          <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
            <Triangle className="h-3 w-3 mr-1" /> MEAN Stack
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
          <FileCode className="h-3 w-3 mr-1" /> TypeScript Everywhere
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
        className="absolute top-1/3 -right-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${MEAN_COLOR}15`, color: MEAN_COLOR, borderColor: `${MEAN_COLOR}30` }}>
          <Building className="h-3 w-3 mr-1" /> Enterprise Grade
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 -left-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate">
          <Sparkles className="h-3 w-3 mr-1" /> Google Angular
        </Badge>
      </motion.div>
    </div>
  );
}

function EnterpriseDashboardMockup() {
  return (
    <div data-testid="enterprise-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">enterprise.app.com</span>
          </div>
        </div>

        <div className="border-b bg-muted/20 px-4 py-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Triangle className="h-4 w-4" style={{ color: MEAN_COLOR }} />
                <span className="text-xs font-bold">EnterpriseCRM</span>
              </div>
              <div className="hidden md:flex items-center gap-3 flex-wrap">
                {["Dashboard", "Customers", "Sales", "Reports", "Admin"].map((nav, i) => (
                  <span key={nav} className={`text-[10px] ${i === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>{nav}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="hidden sm:flex items-center gap-1.5 bg-muted/50 rounded-md px-2 py-1">
                <Search className="h-3 w-3 text-muted-foreground" />
                <span className="text-[9px] text-muted-foreground">Search...</span>
              </div>
              <Bell className="h-3.5 w-3.5 text-muted-foreground" />
              <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                <User className="h-3 w-3 text-foreground" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-36 border-r bg-muted/30 py-3 px-3 hidden sm:block">
            <div className="space-y-1">
              {[
                { icon: Home, label: "Dashboard", active: true },
                { icon: Users, label: "Customers", active: false },
                { icon: Briefcase, label: "Sales Pipeline", active: false },
                { icon: BarChart3, label: "Reporting", active: false },
                { icon: Settings, label: "Settings", active: false },
              ].map((item) => {
                const NavIcon = item.icon;
                return (
                  <div key={item.label} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[9px] ${item.active ? "bg-muted font-medium text-foreground" : "text-muted-foreground"}`}>
                    <NavIcon className="h-3 w-3" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 p-4">
            <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
              <div>
                <p className="text-xs font-semibold">Sales Dashboard</p>
                <p className="text-[10px] text-muted-foreground">Q1 2026 Overview</p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1 bg-muted/50 rounded-md px-2 py-1">
                  <Calendar className="h-2.5 w-2.5 text-muted-foreground" />
                  <span className="text-[8px] text-muted-foreground">Jan - Mar 2026</span>
                </div>
                <div className="flex items-center gap-1 bg-muted/50 rounded-md px-2 py-1">
                  <Download className="h-2.5 w-2.5 text-muted-foreground" />
                  <span className="text-[8px] text-muted-foreground">Export</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { label: "Total Revenue", value: "\u00a3234,560", trend: "+15%", color: "text-green-500" },
                { label: "Active Deals", value: "48", trend: "+6 new", color: "text-green-500" },
                { label: "Conversion", value: "32%", trend: "+3%", color: "text-green-500" },
                { label: "Avg Deal", value: "\u00a312,340", trend: "+8%", color: "text-green-500" },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted/50 rounded-md p-2">
                  <p className="text-[8px] text-muted-foreground">{stat.label}</p>
                  <p className="text-xs font-bold">{stat.value}</p>
                  <p className={`text-[8px] ${stat.color}`}>{stat.trend}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-muted/30 rounded-md p-2">
                <div className="flex items-center justify-between gap-1 flex-wrap mb-1">
                  <p className="text-[9px] text-muted-foreground">Revenue Trend</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[7px] text-blue-500 flex items-center gap-0.5"><span className="w-2 h-0.5 bg-blue-500 rounded" /> Actual</span>
                    <span className="text-[7px] text-muted-foreground flex items-center gap-0.5"><span className="w-2 h-0.5 bg-muted-foreground/50 rounded" /> Target</span>
                  </div>
                </div>
                <div className="flex items-end gap-0.5 h-10">
                  {[35, 45, 40, 55, 50, 65, 60, 75, 70, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/30 to-blue-500/60 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="bg-muted/30 rounded-md p-2">
                <p className="text-[9px] text-muted-foreground mb-1">Deals by Stage</p>
                <div className="flex items-center justify-center h-10">
                  <div className="relative w-10 h-10">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" className="text-blue-500/60" strokeWidth="4" strokeDasharray="35 88" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" className="text-green-500/60" strokeWidth="4" strokeDasharray="25 88" strokeDashoffset="-35" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" className="text-yellow-500/60" strokeWidth="4" strokeDasharray="15 88" strokeDashoffset="-60" />
                      <circle cx="18" cy="18" r="14" fill="none" stroke="currentColor" className="text-red-400/60" strokeWidth="4" strokeDasharray="13 88" strokeDashoffset="-75" />
                    </svg>
                  </div>
                  <div className="ml-2 space-y-0.5">
                    <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" /><span className="text-[7px] text-muted-foreground">Qualified</span></div>
                    <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500/60" /><span className="text-[7px] text-muted-foreground">Proposal</span></div>
                    <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" /><span className="text-[7px] text-muted-foreground">Negotiation</span></div>
                    <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-400/60" /><span className="text-[7px] text-muted-foreground">Won</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-md p-2">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                <p className="text-[9px] text-muted-foreground">Recent Deals</p>
                <div className="flex items-center gap-1">
                  <Filter className="h-2.5 w-2.5 text-muted-foreground" />
                  <span className="text-[7px] text-muted-foreground">Filter</span>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-1 mb-1">
                {["Company", "Contact", "Value", "Stage", "Owner", "Date"].map((col) => (
                  <div key={col} className="flex items-center gap-0.5">
                    <span className="text-[7px] font-medium text-muted-foreground">{col}</span>
                    <ChevronDown className="h-2 w-2 text-muted-foreground" />
                  </div>
                ))}
              </div>
              {[
                { company: "TechCorp", contact: "J. Smith", value: "\u00a318,500", stage: "Proposal", owner: "Sarah", date: "Feb 15" },
                { company: "FinServe", contact: "M. Jones", value: "\u00a324,000", stage: "Qualified", owner: "James", date: "Feb 14" },
                { company: "MedGroup", contact: "A. Chen", value: "\u00a315,200", stage: "Won", owner: "Emily", date: "Feb 13" },
                { company: "RetailPro", contact: "K. White", value: "\u00a312,800", stage: "Negotiation", owner: "David", date: "Feb 12" },
                { company: "DataSoft", contact: "R. Brown", value: "\u00a321,600", stage: "Proposal", owner: "Sarah", date: "Feb 11" },
              ].map((row) => (
                <div key={row.company} className="grid grid-cols-6 gap-1 py-0.5 border-b border-border/20 last:border-0">
                  <span className="text-[8px]">{row.company}</span>
                  <span className="text-[8px] text-muted-foreground">{row.contact}</span>
                  <span className="text-[8px] font-medium">{row.value}</span>
                  <span className="text-[7px] text-muted-foreground">{row.stage}</span>
                  <span className="text-[8px] text-muted-foreground">{row.owner}</span>
                  <span className="text-[8px] text-muted-foreground">{row.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
        {[
          { label: "Angular Components", icon: Triangle, color: "text-red-500" },
          { label: "TypeScript Models", icon: FileCode, color: "text-blue-500" },
          { label: "RxJS Observables", icon: Workflow, color: "text-purple-500" },
          { label: "Express API", icon: Server, color: "text-green-500" },
          { label: "MongoDB Aggregations", icon: Database, color: "text-emerald-500" },
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

export default function HireMEANPage() {
  return (
    <div>
      <SEO
        title="Hire MEAN Stack Developers | Angular & Node.js UK"
        description="Hire expert MEAN stack developers. MongoDB, Express, Angular, and Node.js specialists for enterprise web applications and dashboards."
        canonical="/services/hire-developers/full-stack/mean"
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Hire Developers", href: "/services/hire-developers" },
          { label: "Full-Stack", href: "/services/hire-developers/full-stack" },
          { label: "MEAN Stack" },
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
              <Badge className="mb-4 no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${MEAN_COLOR}15`, color: MEAN_COLOR, borderColor: `${MEAN_COLOR}30` }}>
                <Triangle className="h-3 w-3 mr-1" /> MEAN Stack Developers
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="hero-title">
                Hire MEAN Stack Developers
              </h1>

              <p className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
                MongoDB, Express, Angular, Node.js Experts
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                Hire senior MEAN stack developers who build enterprise-grade applications with TypeScript throughout. Angular&apos;s structured framework combined with Node.js backend&mdash;perfect for complex, scalable business applications.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {[
                  { icon: FileCode, label: "TypeScript Native" },
                  { icon: Building, label: "Enterprise Ready" },
                  { icon: Box, label: "Structured" },
                  { icon: Award, label: "Google Backed" },
                ].map((pill) => {
                  const PillIcon = pill.icon;
                  return (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                      data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <PillIcon className="h-3.5 w-3.5" style={{ color: MEAN_COLOR }} />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { value: "4+", label: "Developers" },
                  { value: "10+", label: "Years Avg" },
                  { value: "Now", label: "Available" },
                ].map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: MEAN_COLOR }}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <Link href="/contact">
                  <Button data-testid="cta-hire-mean">
                    Hire MEAN Developer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
              <MEANStackMockup />
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
            <h2 className="text-3xl font-bold">What is the MEAN Stack?</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              MEAN is an enterprise-focused JavaScript stack using TypeScript. MongoDB (database), Express (backend), Angular (frontend framework by Google), Node.js (runtime)&mdash;structured, opinionated, and perfect for large teams and complex applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Database, letter: "M", name: "MongoDB", full: "NoSQL Database", purpose: "Flexible document storage for evolving enterprise data", gradient: "text-green-500" },
              { icon: Server, letter: "E", name: "Express.js", full: "Backend Framework", purpose: "Minimal framework for building robust Node.js APIs", gradient: "text-purple-500" },
              { icon: Triangle, letter: "A", name: "Angular", full: "Frontend Framework", purpose: "Complete TypeScript framework for large-scale apps", gradient: "text-red-500" },
              { icon: Zap, letter: "N", name: "Node.js", full: "JavaScript Runtime", purpose: "Scalable server-side JavaScript execution", gradient: "text-green-500" },
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
                  <Card className="p-6 h-full text-center" data-testid={`mean-card-${item.letter.toLowerCase()}`}>
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
        title="Need an Enterprise Angular Developer?"
        description="Our MEAN stack experts build scalable TypeScript applications"
        primaryCTA={{ text: "Hire MEAN Developer", link: "/contact" }}
        size="medium"
      />

      <section className="py-20" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose MEAN Stack Development"
            subtitle="Enterprise-grade architecture with TypeScript"
            values={whyChooseValues}
            columns={3}
            accentColor={MEAN_COLOR}
          />
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-dashboard">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Enterprise Applications Built with MEAN</h2>
            <p className="text-muted-foreground mt-2">Complex business systems with Angular&apos;s powerful framework</p>
          </div>
          <EnterpriseDashboardMockup />
        </div>
      </section>

      <section className="py-20" data-testid="section-deliverables">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Our MEAN Stack Developers Deliver</h2>
            <p className="text-muted-foreground mt-2">Enterprise application development with Angular expertise</p>
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
                      <Icon className="h-7 w-7" style={{ color: MEAN_COLOR }} />
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

      <section className="py-20 bg-muted" data-testid="section-pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MEAN Stack Developer Pricing</h2>
            <p className="text-muted-foreground mt-2">Enterprise-grade developers at competitive rates</p>
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
            <h2 className="text-3xl font-bold">Meet Our MEAN Stack Developers</h2>
            <p className="text-muted-foreground mt-2">TypeScript and Angular specialists with enterprise experience</p>
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
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: MEAN_COLOR }} />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-medium mb-1">Recent Projects:</p>
                      <p className="text-xs text-muted-foreground">{profile.projects.join(" \u2022 ")}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground font-medium mb-1">{i === 0 ? "Certifications:" : "Leadership:"}</p>
                      <p className="text-xs text-muted-foreground">{profile.certifications.join(" \u2022 ")}</p>
                    </div>

                    <Link href="/contact">
                      <Button variant="outline" className="w-full" data-testid={`cta-interview-${i}`}>
                        Schedule Interview <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
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
            <h2 className="text-3xl font-bold">Enterprise MEAN Applications We&apos;ve Built</h2>
            <p className="text-muted-foreground mt-2">Complex business systems delivered with Angular</p>
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
                            <Check className="h-3 w-3 shrink-0" style={{ color: MEAN_COLOR }} />
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
        title="Ready to Build Your Enterprise Application?"
        description="From CRMs to financial platforms\u2014our MEAN developers deliver robust solutions"
        primaryCTA={{ text: "Schedule Interview", link: "/contact" }}
        secondaryCTA={{ text: "See Pricing", link: "#pricing" }}
        size="large"
      />

      <section className="py-20" data-testid="section-comparison">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MEAN Stack vs MERN Stack</h2>
            <p className="text-muted-foreground mt-2">When to choose Angular over React</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 h-full border-2" style={{ borderColor: `${MEAN_COLOR}40` }} data-testid="comparison-mean">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${MEAN_COLOR}15` }}>
                    <Triangle className="h-5 w-5" style={{ color: MEAN_COLOR }} />
                  </div>
                  <h3 className="text-lg font-bold">Choose MEAN Stack If...</h3>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "Enterprise application (large teams)",
                    "Need opinionated structure",
                    "TypeScript-first development",
                    "Complex forms and validation",
                    "Prefer complete framework",
                    "Google ecosystem preference",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: MEAN_COLOR }} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-2">Best for:</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {["Enterprise CRMs", "Financial Dashboards", "Healthcare Systems", "Government Platforms", "Large Team Projects"].map((use) => (
                      <Badge key={use} variant="outline" className="text-xs no-default-hover-elevate no-default-active-elevate">{use}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 h-full" data-testid="comparison-mern">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold">Choose MERN Stack If...</h3>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "Startup/SaaS application",
                    "Need flexibility",
                    "Prefer library over framework",
                    "Want React ecosystem",
                    "Rapid prototyping",
                    "Mobile app extension (React Native)",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-blue-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-2">Best for:</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {["SaaS Dashboards", "Social Platforms", "E-commerce", "Rapid MVPs", "Startups"].map((use) => (
                      <Badge key={use} variant="outline" className="text-xs no-default-hover-elevate no-default-active-elevate">{use}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Both are excellent JavaScript stacks. We&apos;ll recommend the best option based on your specific project needs.{" "}
            <Link href="/contact" className="underline hover:text-foreground">Talk to us</Link>
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Hiring MEAN Stack Developers"
            subtitle="From consultation to Angular components delivery"
            steps={zigzagSteps}
            accentColor={MEAN_COLOR}
          />
        </div>
      </section>

      <TabbedTechStack
        tabs={meanTechTabs}
        title="MEAN Stack Technologies"
        subtitle="Our MEAN developers are proficient across the full technology spectrum."
      />

      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">MEAN Stack Developer FAQs</h2>
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
        title="Let's Build with Angular & TypeScript"
        description="Book a free consultation and meet our enterprise MEAN stack developers"
        primaryCTA={{ text: "Book Consultation", link: "/contact" }}
        secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
        showContactInfo
        size="large"
      />
    </div>
  );
}
