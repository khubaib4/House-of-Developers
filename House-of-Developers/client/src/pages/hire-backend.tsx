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
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import {
  Server,
  Database,
  Shield,
  Cloud,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Code2,
  Layers,
  Lock,
  CreditCard,
  Zap,
  TrendingUp,
  User,
  Globe,
  Network,
  Code,
  Search,
  HardDrive,
  Users,
  FileCheck,
  UserCheck,
  Gem,
  Coffee,
  Leaf,
  Train,
  Box,
  Settings,
  Wrench,
  GitBranch,
} from "lucide-react";

const BE_COLOR = "#10B981";

const technologies = [
  {
    icon: Server,
    name: "Node.js Developers",
    description: "JavaScript runtime for fast, scalable backends",
    bestFor: "Real-Time Apps, APIs, Microservices",
    strengths: [
      "JavaScript full-stack capability",
      "Fast, non-blocking I/O",
      "Huge npm ecosystem",
    ],
    available: "6+ Developers",
    link: "/services/hire-developers/backend/nodejs",
    cta: "Hire Node.js Developer",
  },
  {
    icon: ArrowRight,
    name: "Next.js Developers",
    description: "Full-stack React framework with API routes",
    bestFor: "SSR, Full-Stack React, Serverless",
    strengths: [
      "React + backend in one framework",
      "API routes built-in",
      "Excellent SEO with SSR",
    ],
    available: "4+ Developers",
    link: "/services/hire-developers/backend/nextjs",
    cta: "Hire Next.js Developer",
  },
  {
    icon: Code2,
    name: ".NET Developers",
    description: "Microsoft's enterprise framework (C#)",
    bestFor: "Enterprise Apps, Windows Services",
    strengths: [
      "Enterprise-grade and stable",
      "Strong typing with C#",
      "Azure integration",
    ],
    available: "3+ Developers",
    link: "/services/hire-developers/backend/dotnet",
    cta: "Hire .NET Developer",
  },
  {
    icon: Database,
    name: "Python Django Developers",
    description: "Batteries-included Python web framework",
    bestFor: "Data-Heavy Apps, Admin Panels",
    strengths: [
      "Rapid development",
      "Built-in admin panel",
      "Great for AI/ML integration",
    ],
    available: "4+ Developers",
    link: "/services/hire-developers/backend/python-django",
    cta: "Hire Django Developer",
  },
  {
    icon: Zap,
    name: "Python Flask/FastAPI Developers",
    description: "Lightweight Python frameworks for APIs",
    bestFor: "Microservices, ML APIs, Lightweight Apps",
    strengths: [
      "Minimal and flexible",
      "Perfect for APIs",
      "Great for ML/AI backends",
    ],
    available: "3+ Developers",
    link: "/services/hire-developers/backend/python-flask",
    cta: "Hire Flask/FastAPI Developer",
  },
  {
    icon: Server,
    name: "PHP Laravel Developers",
    description: "Modern PHP framework with elegant syntax",
    bestFor: "Web Apps, CMS, WordPress Integration",
    strengths: [
      "Mature ecosystem",
      "Great documentation",
      "Wide hosting support",
    ],
    available: "5+ Developers",
    link: "/services/hire-developers/backend/php-laravel",
    cta: "Hire Laravel Developer",
  },
];

const pricingPlans = [
  {
    name: "Part-Time Backend Developer",
    price: "£2,500",
    period: "/month",
    description: "80 hours/month (4 hours/day)",
    isPopular: false,
    features: [
      "API development & maintenance",
      "Database optimization",
      "Bug fixes & updates",
      "Code reviews",
      "Integration work",
      "Flexible scheduling",
    ],
    cta: "Hire Part-Time",
  },
  {
    name: "Full-Time Backend Developer",
    price: "£4,500",
    period: "/month",
    description: "160 hours/month (8 hours/day)",
    isPopular: true,
    features: [
      "Dedicated backend resource",
      "Complete API ownership",
      "Database architecture",
      "Security implementation",
      "Performance optimization",
      "DevOps & deployment",
    ],
    cta: "Hire Full-Time",
  },
  {
    name: "Backend Team",
    price: "Custom",
    period: " Quote",
    description: "Multiple developers + architect",
    isPopular: false,
    features: [
      "2+ backend developers",
      "Solution architect (optional)",
      "Microservices architecture",
      "DevOps engineer (optional)",
      "Database administrator (optional)",
      "Complete backend delivery",
    ],
    cta: "Build Team",
  },
];

const capabilities = [
  { icon: Server, title: "RESTful APIs", description: "Design and build scalable REST APIs with proper endpoints" },
  { icon: Network, title: "GraphQL APIs", description: "Flexible GraphQL schemas and resolvers for complex data" },
  { icon: Database, title: "Database Design", description: "Schema design, indexing, migrations, query optimization" },
  { icon: Lock, title: "Authentication & Authorization", description: "JWT, OAuth, SSO, role-based access control" },
  { icon: CreditCard, title: "Payment Integration", description: "Stripe, PayPal, subscription billing, webhooks" },
  { icon: Zap, title: "Real-Time Features", description: "WebSockets, Socket.io, Server-Sent Events" },
  { icon: Cloud, title: "Cloud & DevOps", description: "AWS, Azure, Docker, Kubernetes, CI/CD" },
  { icon: Shield, title: "Security", description: "Encryption, SQL injection prevention, rate limiting" },
  { icon: TrendingUp, title: "Performance & Scaling", description: "Caching (Redis), load balancing, database optimization" },
];

const profiles = [
  {
    specialty: "Node.js & Express Expert",
    experience: "10+ years",
    available: true,
    availableText: "Available Now",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS"],
    highlights: [
      "Built APIs serving 5M+ requests/day",
      "Microservices architecture expert",
      "Strong DevOps skills",
    ],
    projects: ["Real-time chat platforms", "Payment processing systems", "RESTful APIs at scale"],
  },
  {
    specialty: "Python Django & ML APIs",
    experience: "8+ years",
    available: false,
    availableText: "Available in 1 week",
    skills: ["Python", "Django", "FastAPI", "PostgreSQL", "Celery", "TensorFlow"],
    highlights: [
      "AI/ML integration specialist",
      "Data-heavy application expert",
      "API security expert",
    ],
    projects: ["ML model APIs", "Admin dashboards", "Data processing pipelines"],
  },
  {
    specialty: "PHP Laravel Architect",
    experience: "12+ years",
    available: true,
    availableText: "Available Now",
    skills: ["PHP", "Laravel", "MySQL", "Redis", "Vue.js", "Linux"],
    highlights: [
      "30+ Laravel applications deployed",
      "E-commerce platform expert",
      "Database optimization specialist",
    ],
    projects: ["E-commerce backends", "CMS platforms", "Booking systems"],
  },
];

const backendTechTabs = [
  {
    label: "Languages",
    technologies: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Python", slug: "python" },
      { name: "PHP", slug: "php" },
      { name: "Go", slug: "go" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Java", slug: "openjdk" },
      { name: "Kotlin", slug: "kotlin" },
      { name: "Rust", slug: "rust" },
    ],
  },
  {
    label: "Frameworks",
    technologies: [
      { name: "Express.js", slug: "express" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Django", slug: "django" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Laravel", slug: "laravel" },
      { name: "GraphQL", slug: "graphql" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Flask", slug: "flask" },
    ],
  },
  {
    label: "Databases",
    technologies: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
      { name: "Elasticsearch", slug: "elasticsearch" },
      { name: "Supabase", slug: "supabase" },
      { name: "Firebase", slug: "firebase" },
      { name: "SQLite", slug: "sqlite" },
    ],
  },
  {
    label: "Cloud",
    technologies: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Vercel", slug: "vercel" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "DigitalOcean", slug: "digitalocean" },
      { name: "Terraform", slug: "terraform" },
    ],
  },
  {
    label: "Tools",
    technologies: [
      { name: "GitHub", slug: "github" },
      { name: "Figma", slug: "figma" },
      { name: "Jest", slug: "jest" },
      { name: "Sentry", slug: "sentry" },
      { name: "Datadog", slug: "datadog" },
      { name: "Stripe", slug: "stripe" },
      { name: "Twilio", slug: "twilio" },
      { name: "Grafana", slug: "grafana" },
    ],
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Define Your Tech Stack",
    points: [
      "Free consultation to discuss API requirements and technology preference",
      "Choose technology (Node.js, Python, .NET, PHP) and define database needs",
      "Set engagement model and project timeline",
    ],
  },
  {
    icon: Users,
    title: "Developer Matching",
    points: [
      "Receive 2-3 backend developer profiles with previous API work samples",
      "Review system design experience and GitHub/GitLab profiles",
      "Confirm availability and match to your backend requirements",
    ],
  },
  {
    icon: FileCheck,
    title: "Technical Interview",
    points: [
      "Video interviews covering API design and database schema questions",
      "System architecture review and coding assessment",
      "Make final selection based on technical depth and fit",
    ],
  },
  {
    icon: UserCheck,
    title: "Onboarding & First API",
    points: [
      "Contract signing with access to repositories and database",
      "First API endpoints delivered within the first week",
      "Establish deployment process and development workflow",
    ],
  },
];

const faqs = [
  {
    q: "Node.js vs Python vs PHP vs .NET\u2014which should I choose?",
    a: "Node.js for real-time apps and JavaScript full-stack. Python (Django/FastAPI) for data-heavy apps, ML/AI, or rapid development. PHP (Laravel) for web apps and CMS. .NET for enterprise Windows/Azure apps. We'll recommend based on your project.",
  },
  {
    q: "Do backend developers handle databases too?",
    a: "Yes! Database design, migrations, optimization, and queries are core backend skills. For very large databases, we can add a specialized DBA.",
  },
  {
    q: "Can they build GraphQL APIs?",
    a: "Absolutely! Our developers build both RESTful and GraphQL APIs. They'll recommend which is best for your use case.",
  },
  {
    q: "Do they handle authentication and security?",
    a: "Yes! JWT authentication, OAuth, SSO, role-based permissions, encryption, SQL injection prevention\u2014security is a core competency.",
  },
  {
    q: "Can they integrate payment gateways?",
    a: "Yes! Stripe, PayPal, and other payment integrations including webhooks, subscriptions, and refunds.",
  },
  {
    q: "Do backend developers do DevOps?",
    a: "Basic DevOps yes\u2014Docker, CI/CD, AWS/Azure deployment. For complex infrastructure, Kubernetes, or large-scale systems, we recommend adding a DevOps engineer.",
  },
  {
    q: "Can they work with my existing database?",
    a: "Absolutely! They can work with any existing schema, optimize queries, add new tables, and migrate data safely.",
  },
  {
    q: "What about real-time features like chat?",
    a: "Yes! WebSockets, Socket.io, Server-Sent Events for real-time chat, notifications, live updates, collaborative features.",
  },
  {
    q: "Can they build microservices architecture?",
    a: "Yes! Our senior developers design and build microservices with proper service boundaries, API gateways, and inter-service communication.",
  },
  {
    q: "How do they handle API versioning and documentation?",
    a: "Proper API versioning (v1, v2), Swagger/OpenAPI documentation, and clear endpoint documentation are standard practices.",
  },
];

function BackendArchitectureMockup() {
  return (
    <div className="relative" data-testid="backend-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-visible p-6 space-y-4">
        <div className="border rounded-xl p-4" style={{ borderColor: `${BE_COLOR}30` }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BE_COLOR}15` }}>
              <Globe className="h-5 w-5" style={{ color: BE_COLOR }} />
            </div>
            <div>
              <p className="text-sm font-semibold">REST API / GraphQL</p>
              <p className="text-xs text-muted-foreground">API Gateway</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="text-[10px] px-2 py-0.5 rounded bg-muted font-mono">/api/users</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-muted font-mono">/api/products</span>
          </div>
          <div className="flex gap-1.5 mt-2 flex-wrap">
            {["GET", "POST", "PUT"].map((method) => (
              <Badge key={method} variant="secondary" className="text-[10px] px-1.5 py-0 no-default-hover-elevate no-default-active-elevate">
                {method}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-px h-6 bg-border relative">
            <ArrowDown className="h-3 w-3 text-muted-foreground absolute -bottom-1 -left-[5px]" />
          </div>
        </div>

        <div className="border rounded-xl p-4" style={{ borderColor: `${BE_COLOR}30` }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BE_COLOR}15` }}>
              <Code2 className="h-5 w-5" style={{ color: BE_COLOR }} />
            </div>
            <div>
              <p className="text-sm font-semibold">Backend Server</p>
              <p className="text-xs text-muted-foreground">Business Logic</p>
            </div>
          </div>
          <div className="flex gap-1.5 flex-wrap mb-2">
            {["Node.js", "Python", ".NET", "PHP"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-[10px] no-default-hover-elevate no-default-active-elevate">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            {["Authentication", "Validation", "Processing"].map((fn) => (
              <span key={fn} className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">{fn}</span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-px h-6 bg-border relative">
            <ArrowDown className="h-3 w-3 text-muted-foreground absolute -bottom-1 -left-[5px]" />
          </div>
        </div>

        <div className="border rounded-xl p-4" style={{ borderColor: `${BE_COLOR}30` }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${BE_COLOR}15` }}>
              <Database className="h-5 w-5" style={{ color: BE_COLOR }} />
            </div>
            <div>
              <p className="text-sm font-semibold">Database Layer</p>
              <p className="text-xs text-muted-foreground">Data Storage</p>
            </div>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {["PostgreSQL", "MongoDB", "MySQL", "Redis"].map((db) => (
              <Badge key={db} variant="outline" className="text-[10px] no-default-hover-elevate no-default-active-elevate">
                {db}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -top-3 -left-3"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate">
          <TrendingUp className="h-3 w-3 mr-1" /> Scalable to 1M+ users
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute top-1/3 -right-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${BE_COLOR}15`, color: BE_COLOR, borderColor: `${BE_COLOR}30` }}>
          <Shield className="h-3 w-3 mr-1" /> Secure & Tested
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-1/4 -left-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate">
          <Cloud className="h-3 w-3 mr-1" /> Cloud Deployed
        </Badge>
      </motion.div>
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

export default function HireBackendPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Hire Developers", href: "/services/hire-developers" },
          { label: "Backend" },
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
              <Badge className="mb-4 no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${BE_COLOR}15`, color: BE_COLOR, borderColor: `${BE_COLOR}30` }}>
                <Server className="h-3 w-3 mr-1" /> Backend Developers
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="hero-title">
                Hire Backend Developers
              </h1>

              <p className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                API & Database Experts Who Build Scalable Systems
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                Hire senior backend developers who build robust APIs, databases, and server-side logic. Expert in Node.js, Python, .NET, PHP&mdash;handling authentication, payments, real-time features, and scaling to millions of users.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {[
                  { icon: Server, label: "Scalable APIs" },
                  { icon: Database, label: "Database Expert" },
                  { icon: Shield, label: "Security First" },
                  { icon: Cloud, label: "Cloud Ready" },
                ].map((pill) => {
                  const PillIcon = pill.icon;
                  return (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                      data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <PillIcon className="h-3.5 w-3.5" style={{ color: BE_COLOR }} />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { value: "18+", label: "Developers" },
                  { value: "6", label: "Technologies" },
                  { value: "Now", label: "Available" },
                ].map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase()}`}>
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: BE_COLOR }}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <Link href="/contact">
                  <Button data-testid="cta-hire-backend">
                    Hire Backend Developer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  data-testid="cta-compare-technologies"
                  onClick={() => document.getElementById("technology-comparison")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Compare Technologies <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <BackendArchitectureMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IS BACKEND */}
      <section className="py-20 bg-muted" data-testid="section-what-is">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">What is a Backend Developer?</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Backend developers build the server-side logic that powers applications&mdash;databases, APIs, authentication, business logic, integrations. They handle everything users don't see but rely on for apps to work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Server, title: "REST APIs", desc: "Server endpoints & routes" },
              { icon: Database, title: "Databases", desc: "Data storage & queries" },
              { icon: Lock, title: "Authentication", desc: "User login & security" },
              { icon: Zap, title: "Integrations", desc: "Third-party services" },
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
                  <Card className="text-center p-6 h-full" data-testid={`what-card-${i}`}>
                    <CardContent className="pt-2">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: `${BE_COLOR}15` }}
                      >
                        <Icon className="h-7 w-7" style={{ color: BE_COLOR }} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY COMPARISON */}
      <section id="technology-comparison" className="py-20" data-testid="section-technologies">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Choose Your Backend Technology</h2>
            <p className="text-muted-foreground mt-2">We have experts across all major backend languages and frameworks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, i) => {
              const TechIcon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card
                    className="p-6 h-full hover-elevate transition-all duration-300"
                    data-testid={`tech-card-${tech.name.toLowerCase().replace(/[\s/.]+/g, "-")}`}
                  >
                    <CardContent className="p-0">
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${BE_COLOR}10` }}
                      >
                        <TechIcon className="h-7 w-7" style={{ color: BE_COLOR }} />
                      </div>

                      <h3 className="text-xl font-bold mt-4">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{tech.description}</p>

                      <div className="mt-4">
                        <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
                          Best for: {tech.bestFor}
                        </Badge>
                      </div>

                      <div className="mt-4 space-y-1.5">
                        {tech.strengths.map((strength) => (
                          <div key={strength} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: BE_COLOR }} />
                            <span className="text-xs">{strength}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4">
                        <Badge variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">
                          {tech.available}
                        </Badge>
                      </div>

                      <div className="mt-4">
                        <Link href={tech.link}>
                          <Button variant="outline" className="w-full text-sm" data-testid={`cta-${tech.name.toLowerCase().replace(/[\s/.]+/g, "-")}`}>
                            {tech.cta} <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA 1 - After Technology Comparison */}
      <CTASection
        variant="bordered"
        title="Not Sure Which Backend Technology to Choose?"
        description="Book a free consultation and we'll recommend the best technology for your project"
        primaryCTA={{ text: "Get Tech Recommendation", link: "/contact" }}
        size="medium"
      />

      {/* PRICING */}
      <section className="py-20 bg-muted" data-testid="section-pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Backend Developer Pricing</h2>
            <p className="text-muted-foreground mt-2">Same pricing across all technologies</p>
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

      {/* CAPABILITIES */}
      <section className="py-20" data-testid="section-capabilities">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="What Our Backend Developers Handle"
            subtitle="Complete server-side development and infrastructure"
            values={capabilities}
            columns={3}
            accentColor={BE_COLOR}
          />
        </div>
      </section>

      {/* DEVELOPER PROFILES */}
      <section className="py-20 bg-muted" data-testid="section-profiles">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Backend Developers</h2>
            <p className="text-muted-foreground mt-2">API and database specialists with production experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profiles.map((profile, i) => (
              <motion.div
                key={profile.specialty}
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
                        style={{ backgroundColor: `${BE_COLOR}15` }}
                      >
                        <User className="h-7 w-7" style={{ color: BE_COLOR }} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Senior Backend Developer</h3>
                        <p className="text-sm text-muted-foreground">{profile.specialty}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                      <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
                        {profile.experience}
                      </Badge>
                      <span className="flex items-center gap-1.5 text-sm">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: profile.available ? "#22C55E" : "#F59E0B" }}
                        />
                        {profile.availableText}
                      </span>
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
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: BE_COLOR }} />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground font-medium mb-1">Projects:</p>
                      <p className="text-xs text-muted-foreground">{profile.projects.join(" \u2022 ")}</p>
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

      {/* CTA 2 - After Profiles */}
      <CTASection
        variant="gradient"
        title="Ready to Hire a Backend Developer?"
        description="Tell us your stack and we'll match you with API and database experts in 48 hours"
        primaryCTA={{ text: "Hire Backend Developer", link: "/contact" }}
        secondaryCTA={{ text: "View Pricing", link: "#pricing" }}
        size="large"
      />

      {/* TECH STACK */}
      <TabbedTechStack
        tabs={backendTechTabs}
        title="Backend Technologies"
        subtitle="Our backend developers are proficient across the full technology spectrum."
      />

      {/* PROCESS */}
      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Hiring Process for Backend Developers"
            subtitle="From API design to production deployment"
            steps={zigzagSteps}
            accentColor={BE_COLOR}
          />
        </div>
      </section>

      {/* BACKEND VS FULL-STACK */}
      <section className="py-20" data-testid="section-comparison">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Backend Specialist vs Full-Stack Developer</h2>
            <p className="text-muted-foreground mt-2">When to hire a dedicated backend expert</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-primary border-2" data-testid="card-backend-specialist">
                <CardContent className="p-0">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${BE_COLOR}15` }}
                  >
                    <Server className="h-7 w-7" style={{ color: BE_COLOR }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Hire Backend Specialist If...</h3>
                  <div className="space-y-2 mb-6">
                    {[
                      "Complex database requirements",
                      "High-traffic APIs (100K+ requests/day)",
                      "Microservices architecture",
                      "Real-time features (WebSockets)",
                      "ML/AI integration",
                      "DevOps & infrastructure needs",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: BE_COLOR }} />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Example projects:</span> Payment processing systems, Real-time chat platforms, API-first applications, Data processing pipelines
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full" data-testid="card-fullstack-comparison">
                <CardContent className="p-0">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#8B5CF615" }}
                  >
                    <Layers className="h-7 w-7" style={{ color: "#8B5CF6" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Hire Full-Stack Developer If...</h3>
                  <div className="space-y-2 mb-6">
                    {[
                      "Simple CRUD APIs",
                      "Low to medium traffic",
                      "Need frontend + backend",
                      "Small team/budget",
                      "Standard integrations",
                      "Monolithic architecture",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Example projects:</span> Internal tools, Simple MVPs, Business websites, CRUD applications
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Need both?{" "}
              <Link href="/services/hire-developers" className="text-primary underline underline-offset-4">
                Hire backend + frontend specialists
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Backend Developer FAQs</h2>
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
        title="Let's Build Your Backend Infrastructure"
        description="Book a free consultation to discuss your API requirements and meet our developers"
        primaryCTA={{ text: "Book Consultation", link: "/contact" }}
        secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
        showContactInfo
        size="large"
      />
    </div>
  );
}
