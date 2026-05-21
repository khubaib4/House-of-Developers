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
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import {
  Layers,
  Layout,
  Server,
  Database,
  Award,
  ArrowRight,
  CheckCircle2,
  Code2,
  Globe,
  Zap,
  DollarSign,
  Users,
  Lock,
  CreditCard,
  Cloud,
  Bug,
  GitBranch,
  User,
  Clock,
  ArrowDown,
  Search,
  FileCheck,
  UserCheck,
} from "lucide-react";

const FS_COLOR = "#6366F1";

const fullstackTechTabs = [
  {
    label: "Frontend",
    technologies: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Vue.js", slug: "vuedotjs" },
      { name: "Angular", slug: "angular" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Vite", slug: "vite" },
      { name: "Redux", slug: "redux" },
    ],
  },
  {
    label: "Backend",
    technologies: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Python", slug: "python" },
      { name: "PHP", slug: "php" },
      { name: "GraphQL", slug: "graphql" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Django", slug: "django" },
    ],
  },
  {
    label: "Database",
    technologies: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
      { name: "Supabase", slug: "supabase" },
      { name: "Firebase", slug: "firebase" },
      { name: "Prisma", slug: "prisma" },
      { name: "Elasticsearch", slug: "elasticsearch" },
    ],
  },
  {
    label: "DevOps",
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
      { name: "Cypress", slug: "cypress" },
      { name: "Sentry", slug: "sentry" },
      { name: "Stripe", slug: "stripe" },
      { name: "Datadog", slug: "datadog" },
      { name: "Grafana", slug: "grafana" },
    ],
  },
];

const stacks = [
  {
    icon: Layers,
    name: "MERN Stack",
    breakdown: "MongoDB, Express, React, Node.js",
    bestFor: "Modern SaaS & Startups",
    components: [
      { icon: Database, tech: "MongoDB (NoSQL database)" },
      { icon: Server, tech: "Express.js (Backend framework)" },
      { icon: Layout, tech: "React (Frontend library)" },
      { icon: Code2, tech: "Node.js (JavaScript runtime)" },
    ],
    strengths: [
      "Single language (JavaScript) throughout",
      "Fast development with React",
      "Scalable and flexible",
    ],
    available: "6+ Developers",
    link: "/services/hire-developers/full-stack/mern",
    cta: "Hire MERN Developer",
  },
  {
    icon: Layers,
    name: "MEAN Stack",
    breakdown: "MongoDB, Express, Angular, Node.js",
    bestFor: "Enterprise Applications",
    components: [
      { icon: Database, tech: "MongoDB (NoSQL database)" },
      { icon: Server, tech: "Express.js (Backend framework)" },
      { icon: Layout, tech: "Angular (Frontend framework)" },
      { icon: Code2, tech: "Node.js (JavaScript runtime)" },
    ],
    strengths: [
      "TypeScript by default",
      "Enterprise-ready Angular",
      "Robust and structured",
    ],
    available: "4+ Developers",
    link: "/services/hire-developers/full-stack/mean",
    cta: "Hire MEAN Developer",
  },
  {
    icon: Layers,
    name: "MEVN Stack",
    breakdown: "MongoDB, Express, Vue.js, Node.js",
    bestFor: "Lightweight SPAs",
    components: [
      { icon: Database, tech: "MongoDB (NoSQL database)" },
      { icon: Server, tech: "Express.js (Backend framework)" },
      { icon: Layout, tech: "Vue.js (Frontend framework)" },
      { icon: Code2, tech: "Node.js (JavaScript runtime)" },
    ],
    strengths: [
      "Easy to learn Vue.js",
      "Flexible and progressive",
      "Great performance",
    ],
    available: "3+ Developers",
    link: "/services/hire-developers/full-stack/mevn",
    cta: "Hire MEVN Developer",
  },
  {
    icon: Layers,
    name: "LAMP Stack",
    breakdown: "Linux, Apache, MySQL, PHP",
    bestFor: "Traditional Web Apps & CMS",
    components: [
      { icon: Server, tech: "Linux (Operating system)" },
      { icon: Globe, tech: "Apache (Web server)" },
      { icon: Database, tech: "MySQL (SQL database)" },
      { icon: Code2, tech: "PHP (Server language)" },
    ],
    strengths: [
      "Battle-tested and stable",
      "WordPress & Laravel compatible",
      "Wide hosting support",
    ],
    available: "5+ Developers",
    link: "/services/hire-developers/full-stack/lamp",
    cta: "Hire LAMP Developer",
  },
];

const pricingPlans = [
  {
    name: "Part-Time Full-Stack Developer",
    price: "£2,500",
    period: "/month",
    description: "80 hours/month (4 hours/day)",
    isPopular: false,
    features: [
      "Frontend + backend development",
      "Database management",
      "API development",
      "Code reviews",
      "Weekly updates",
      "Flexible hours",
    ],
    cta: "Hire Part-Time",
  },
  {
    name: "Full-Time Full-Stack Developer",
    price: "£4,500",
    period: "/month",
    description: "160 hours/month (8 hours/day)",
    isPopular: true,
    features: [
      "Dedicated full-stack resource",
      "Complete feature ownership",
      "Daily standups",
      "Sprint planning",
      "DevOps & deployment",
      "Priority support",
    ],
    cta: "Hire Full-Time",
  },
  {
    name: "Full-Stack Team",
    price: "Custom",
    period: " Quote",
    description: "Multiple developers + PM",
    isPopular: false,
    features: [
      "2+ full-stack developers",
      "Project manager included",
      "Frontend & backend specialists",
      "QA engineer (optional)",
      "DevOps engineer (optional)",
      "Complete project delivery",
    ],
    cta: "Build Team",
  },
];

const capabilities = [
  { icon: Layout, title: "Frontend Development", description: "React, Angular, Vue\u2014responsive UIs with modern frameworks" },
  { icon: Server, title: "Backend APIs", description: "RESTful APIs, GraphQL, authentication, business logic" },
  { icon: Database, title: "Database Design", description: "Schema design, queries, optimization, migrations" },
  { icon: Lock, title: "Authentication", description: "User auth, JWT, OAuth, role-based permissions" },
  { icon: CreditCard, title: "Payment Integration", description: "Stripe, PayPal, subscription billing" },
  { icon: Cloud, title: "Cloud Deployment", description: "AWS, DigitalOcean, Vercel\u2014full DevOps" },
  { icon: Zap, title: "Performance Optimization", description: "Caching, CDN, query optimization, load balancing" },
  { icon: Bug, title: "Testing & QA", description: "Unit tests, integration tests, debugging" },
  { icon: GitBranch, title: "Version Control", description: "Git workflows, code reviews, CI/CD" },
];

const profiles = [
  {
    specialty: "MERN Stack Expert",
    experience: "9+ years",
    available: true,
    availableText: "Available Now",
    skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "AWS"],
    highlights: [
      "Built 15+ SaaS applications",
      "Expert in microservices",
      "Strong in DevOps & CI/CD",
    ],
    projects: ["E-commerce platforms", "Real-time dashboards", "API-first applications"],
  },
  {
    specialty: "MEAN Stack Architect",
    experience: "10+ years",
    available: false,
    availableText: "Available in 2 weeks",
    skills: ["Angular", "Node.js", "MongoDB", "Express", "TypeScript", "Docker"],
    highlights: [
      "Enterprise application expert",
      "Scalable architecture design",
      "Team leadership experience",
    ],
    projects: ["Enterprise CRM systems", "Admin dashboards", "Internal tools"],
  },
  {
    specialty: "LAMP Stack & PHP Expert",
    experience: "12+ years",
    available: true,
    availableText: "Available Now",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "WordPress", "Linux"],
    highlights: [
      "WordPress & Laravel expert",
      "20+ production deployments",
      "Database optimization specialist",
    ],
    projects: ["WordPress enterprise sites", "Laravel web apps", "E-commerce platforms"],
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Tell Us Your Stack",
    points: [
      "Free consultation to discuss project requirements and choose technology stack",
      "Define senior vs mid-level needs and set engagement model",
      "Specify preferred stack: MERN, MEAN, MEVN, or LAMP",
    ],
  },
  {
    icon: Users,
    title: "Developer Matching",
    points: [
      "Receive 2-3 pre-vetted full-stack developer profiles with portfolios",
      "Review technical skills assessments and GitHub profiles",
      "Confirm availability and match based on your project needs",
    ],
  },
  {
    icon: FileCheck,
    title: "Technical Interview",
    points: [
      "Schedule video interviews covering frontend, backend, and DevOps",
      "Technical coding discussions and system design questions",
      "Culture fit assessment and final candidate selection",
    ],
  },
  {
    icon: UserCheck,
    title: "Onboarding & Start",
    points: [
      "Contract signing and access to your codebase and tools",
      "Developer sets up environment and begins first sprint planning",
      "Daily standups begin with immediate productivity",
    ],
  },
];

const faqs = [
  {
    q: "What's the difference between MERN, MEAN, and MEVN?",
    a: "All three use JavaScript throughout: MongoDB (database), Express (backend), Node.js (runtime). The difference is the frontend: React (MERN), Angular (MEAN), or Vue (MEVN). MERN is most popular for startups, MEAN for enterprise, MEVN for lightweight apps.",
  },
  {
    q: "Should I hire MERN or LAMP stack developer?",
    a: "MERN for modern SaaS, real-time apps, and single-page applications. LAMP for WordPress sites, traditional web apps, and if you need mature, battle-tested technology. We'll help you decide based on your project.",
  },
  {
    q: "Can a full-stack developer handle DevOps too?",
    a: "Yes! Our senior full-stack developers handle deployment, CI/CD, Docker, AWS/DigitalOcean, and basic DevOps. For complex infrastructure, we recommend adding a dedicated DevOps engineer.",
  },
  {
    q: "How experienced are your full-stack developers?",
    a: "Minimum 5 years, average 8+ years. They've built multiple production applications from scratch and understand both frontend and backend deeply.",
  },
  {
    q: "Can they work with my existing codebase?",
    a: "Absolutely! Our developers quickly onboard to existing codebases. They review your code, understand architecture, and start contributing within days.",
  },
  {
    q: "Do they write tests?",
    a: "Yes! Our developers write unit tests, integration tests, and follow TDD/BDD practices. Code quality is a priority.",
  },
  {
    q: "Can a full-stack developer handle mobile apps?",
    a: "If you need React Native (for MERN) or hybrid apps, yes. For native iOS/Android, we recommend hiring mobile specialists.",
  },
  {
    q: "What if my project uses a different stack?",
    a: "We also have developers for: Django (Python), Laravel (PHP), .NET, Ruby on Rails, and more. Tell us your stack and we'll match you.",
  },
  {
    q: "Do full-stack developers cost more than specialists?",
    a: "No! Same pricing (\u00a32,500-\u00a34,500/month). Full-stack developers are actually more cost-effective than hiring frontend + backend separately.",
  },
  {
    q: "Can I switch from one stack to another mid-project?",
    a: "It's possible but not ideal. We recommend committing to a stack. However, if business needs change, we can bring in developers for a new stack.",
  },
];

function FullStackLayersMockup() {
  const layers = [
    { label: "Frontend", icon: Layout, techs: ["React", "Vue", "Angular"], color: "#3B82F6" },
    { label: "Backend", icon: Server, techs: ["Node.js", "Express", "APIs"], color: "#8B5CF6" },
    { label: "Database", icon: Database, techs: ["MongoDB", "MySQL", "PostgreSQL"], color: "#10B981" },
  ];

  return (
    <div className="relative" data-testid="fullstack-layers-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl p-8 space-y-4">
        <div className="text-center mb-2">
          <Badge className="no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${FS_COLOR}20`, color: FS_COLOR, borderColor: `${FS_COLOR}40` }}>
            <Layers className="h-3 w-3 mr-1" /> Full-Stack Developer
          </Badge>
        </div>

        {layers.map((layer, i) => {
          const Icon = layer.icon;
          return (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="relative"
            >
              <div
                className="bg-card border rounded-xl p-4 flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${layer.color}15` }}
                >
                  <Icon className="h-5 w-5" style={{ color: layer.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{layer.label}</p>
                  <div className="flex gap-1.5 flex-wrap mt-1">
                    {layer.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {i < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-3 bg-border" />
                </div>
              )}
            </motion.div>
          );
        })}

        <div className="flex items-center justify-center gap-2 pt-2 text-xs text-muted-foreground">
          <ArrowDown className="h-3 w-3" />
          <span>One developer covers all layers</span>
          <ArrowDown className="h-3 w-3" />
        </div>
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

export default function HireFullStackPage() {
  return (
    <div>
      <SEO
        title="Hire Full-Stack Developers London"
        description="Hire full-stack developers in London. MERN, MEAN, MEVN, LAMP stacks. Dedicated teams for London businesses. Free consultation."
        canonical="/services/hire-developers/full-stack"
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Hire Developers", href: "/services/hire-developers" },
          { label: "Full-Stack" },
        ]}
      />

      {/* HERO */}
      <section className="py-16 md:py-24" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${FS_COLOR}15`, color: FS_COLOR, borderColor: `${FS_COLOR}30` }}>
                <Zap className="h-3 w-3 mr-1" /> Full-Stack Developers
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="hero-title">
                Hire Full-Stack Developers in London
              </h1>

              <p
                className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
              >
                End-to-End Developers for Complete Solutions
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                Hire senior full-stack developers who handle everything from database design to frontend UI. Expert in modern JavaScript stacks (MERN, MEAN, MEVN) and traditional LAMP stack.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {[
                  { icon: Layers, label: "Frontend + Backend" },
                  { icon: Database, label: "Database to UI" },
                  { icon: Server, label: "DevOps Ready" },
                  { icon: Award, label: "8+ Years Exp" },
                ].map((pill) => {
                  const PillIcon = pill.icon;
                  return (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                      data-testid={`pill-${pill.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    >
                      <PillIcon className="h-3.5 w-3.5" style={{ color: FS_COLOR }} />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { value: "18+", label: "Developers" },
                  { value: "4", label: "Tech Stacks" },
                  { value: "Now", label: "Available" },
                ].map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase()}`}>
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: FS_COLOR }}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                  <Button data-testid="cta-hire-fullstack">
                    Hire Full-Stack Developer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Button
                  variant="outline"
                  data-testid="cta-compare-stacks"
                  onClick={() => document.getElementById("stack-comparison")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Compare Stacks <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <FullStackLayersMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IS FULL-STACK */}
      <section className="py-20 bg-muted" data-testid="what-is-section">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">What is a Full-Stack Developer?</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              A full-stack developer handles both frontend (user interface) and backend (server, database, APIs). They build complete web applications from start to finish&mdash;saving you from coordinating multiple specialists.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Zap, title: "Faster Development", desc: "One developer handles everything\u2014no handoffs, no delays" },
              { icon: DollarSign, title: "Cost Effective", desc: "Hire one senior full-stack vs frontend + backend separately" },
              { icon: Users, title: "Better Coordination", desc: "Single point of contact who understands the entire system" },
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
                  <Card className="text-center p-6 h-full" data-testid={`benefit-card-${i}`}>
                    <CardContent className="pt-2">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: `${FS_COLOR}15` }}
                      >
                        <Icon className="h-7 w-7" style={{ color: FS_COLOR }} />
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

      {/* STACK COMPARISON */}
      <section id="stack-comparison" className="py-20" data-testid="stack-comparison-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Choose Your Full-Stack Technology</h2>
            <p className="text-muted-foreground mt-2">We have experts in all major JavaScript and PHP stacks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stacks.map((stack, i) => {
              const StackIcon = stack.icon;
              return (
                <motion.div
                  key={stack.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card
                    className="p-8 h-full hover-elevate transition-all duration-300"
                    data-testid={`stack-card-${stack.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <CardContent className="p-0">
                      <div
                        className="w-16 h-16 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${FS_COLOR}10` }}
                      >
                        <StackIcon className="h-8 w-8" style={{ color: FS_COLOR }} />
                      </div>

                      <h3 className="text-2xl font-bold mt-6">{stack.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{stack.breakdown}</p>

                      <div className="mt-4">
                        <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
                          Best for: {stack.bestFor}
                        </Badge>
                      </div>

                      <div className="mt-6 space-y-3">
                        {stack.components.map((comp) => {
                          const CompIcon = comp.icon;
                          return (
                            <div key={comp.tech} className="flex items-center gap-2">
                              <CompIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                              <span className="text-sm">{comp.tech}</span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-6 space-y-2">
                        {stack.strengths.map((s) => (
                          <div key={s} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: FS_COLOR }} />
                            <span className="text-sm">{s}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Badge variant="outline" className="no-default-hover-elevate no-default-active-elevate text-xs">
                          {stack.available}
                        </Badge>
                      </div>

                      <Link href={stack.link}>
                        <Button variant="outline" className="w-full mt-8" data-testid={`cta-${stack.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          {stack.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className="max-w-5xl mx-auto px-6">
        <CTASection
          variant="bordered"
          title="Not Sure Which Stack to Choose?"
          description="Book a free tech consultation and we'll recommend the best stack for your project"
          primaryCTA={{ text: "Get Stack Recommendation", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
          size="medium"
        />
      </section>

      {/* PRICING */}
      <section className="py-20 bg-muted" data-testid="pricing-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Full-Stack Developer Pricing</h2>
            <p className="text-muted-foreground mt-2">Same pricing across all stacks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card
                  className={`p-8 h-full relative ${plan.isPopular ? "border-2" : ""}`}
                  style={plan.isPopular ? { borderColor: FS_COLOR } : {}}
                  data-testid={`pricing-card-${i}`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge style={{ backgroundColor: FS_COLOR, color: "white", borderColor: FS_COLOR }} className="no-default-hover-elevate no-default-active-elevate">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>

                    <div className="mt-6 space-y-3">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: FS_COLOR }} />
                          <span className="text-sm">{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button
                        className="w-full mt-8"
                        variant={plan.isPopular ? "default" : "outline"}
                        data-testid={`pricing-cta-${i}`}
                      >
                        {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 max-w-7xl mx-auto px-6" data-testid="capabilities-section">
        <ValueProposition
          title="What Our Full-Stack Developers Handle"
          subtitle="Complete application development from database to deployment"
          values={capabilities}
          columns={3}
          accentColor={FS_COLOR}
        />
      </section>

      {/* DEVELOPER PROFILES */}
      <section className="py-20 bg-muted" data-testid="profiles-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Full-Stack Developers</h2>
            <p className="text-muted-foreground mt-2">Senior developers with 8+ years experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profiles.map((dev, i) => (
              <motion.div
                key={dev.specialty}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full" data-testid={`profile-card-${i}`}>
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${FS_COLOR}15` }}
                      >
                        <User className="h-7 w-7" style={{ color: FS_COLOR }} />
                      </div>
                      <div>
                        <p className="font-semibold">Senior Full-Stack Developer</p>
                        <p className="text-sm text-muted-foreground">{dev.specialty}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
                      <span className="text-sm text-muted-foreground">{dev.experience}</span>
                      <span className="flex items-center gap-1.5 text-xs">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: dev.available ? "#22C55E" : "#F59E0B" }}
                        />
                        {dev.availableText}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dev.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate" data-testid={`skill-badge-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      {dev.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: FS_COLOR }} />
                          <span className="text-sm">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground font-medium mb-1.5">Key Projects:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {dev.projects.map((p) => (
                          <span key={p} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full" data-testid={`profile-cta-${i}`}>
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

      {/* CTA 2 */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <CTASection
          variant="gradient"
          title="Ready to Hire a Full-Stack Developer?"
          description="Tell us your stack and we'll match you with senior developers in 48 hours"
          primaryCTA={{ text: "Hire Full-Stack Developer", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
          secondaryCTA={{ text: "View Pricing", link: "#pricing-section" }}
          size="large"
        />
      </section>

      {/* PROCESS */}
      <section className="py-20 max-w-7xl mx-auto px-6" data-testid="process-section">
        <ZigzagTimeline
          title="Hiring Process for Full-Stack Developers"
          subtitle="From requirement to developer starting work"
          steps={zigzagSteps}
          accentColor={FS_COLOR}
        />
      </section>

      {/* FULL-STACK VS SPECIALIZED */}
      <section className="py-20 bg-muted" data-testid="comparison-section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Full-Stack vs Frontend/Backend Specialists</h2>
            <p className="text-muted-foreground mt-2">When to hire full-stack vs separate developers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2" style={{ borderColor: FS_COLOR }} data-testid="card-fullstack-when">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${FS_COLOR}15` }}
                    >
                      <Layers className="h-6 w-6" style={{ color: FS_COLOR }} />
                    </div>
                    <h3 className="text-xl font-semibold">Hire Full-Stack Developer If...</h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Small to medium project",
                      "Need quick MVP or prototype",
                      "Budget-conscious",
                      "Simple to moderate complexity",
                      "One person can handle scope",
                      "Faster coordination",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: FS_COLOR }} />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <p className="text-xs text-muted-foreground font-medium mb-2">Example projects:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["SaaS MVPs", "Internal tools", "CRUD applications", "Small e-commerce"].map((p) => (
                        <span key={p} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{p}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full" data-testid="card-specialized-when">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-muted">
                      <Users className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">Hire Separate Frontend + Backend If...</h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Large, complex application",
                      "Need deep expertise in each area",
                      "High-traffic application",
                      "Complex UI/UX requirements",
                      "Advanced backend logic",
                      "Dedicated specialists needed",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <p className="text-xs text-muted-foreground font-medium mb-2">Example projects:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Enterprise platforms", "Social networks", "Complex marketplaces", "Real-time systems"].map((p) => (
                        <span key={p} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{p}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" data-testid="cta-consultation-comparison">
                Not sure? Book a consultation and we'll recommend <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <TabbedTechStack
        title="Technologies We Use"
        subtitle="Our full-stack developers are proficient across the full technology spectrum."
        tabs={fullstackTechTabs}
      />

      {/* FAQ */}
      <section className="py-20" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Full-Stack Developer FAQs</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border rounded-lg px-6"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-left font-medium">
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

      {/* CTA 3 */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <CTASection
          variant="gradient"
          title="Let's Find Your Perfect Full-Stack Developer"
          description="Book a free consultation to discuss your project and meet our developers"
          primaryCTA={{ text: "Book Consultation", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
          secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
          showContactInfo={true}
          size="large"
        />
      </section>
    </div>
  );
}
