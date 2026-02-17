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
import { TechTabsSection } from "@/components/ui/TechTabsSection";
import { CTASection } from "@/components/ui/CTASection";
import { PricingCard } from "@/components/ui/PricingCard";
import {
  Layout,
  Smartphone,
  Zap,
  Eye,
  Palette,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Code2,
  Layers,
  Star,
  Building,
  TrendingUp,
  User,
  Paintbrush,
  TestTube,
  Workflow,
  Code,
  FileText,
  FileCode,
  Database,
  Box,
  Package,
  Play,
  Droplet,
  CheckCircle,
  Users,
  Search,
  FileCheck,
  UserCheck,
  RefreshCw,
  Globe,
  GitBranch,
  Rocket,
  LayoutGrid,
  Book,
  Shield,
} from "lucide-react";

const FE_COLOR = "#3B82F6";

const frameworks = [
  {
    icon: Layout,
    name: "React Developers",
    tagline: "The most popular JavaScript library",
    bestFor: "SaaS, Dashboards, SPAs",
    features: [
      "Component-based architecture",
      "Virtual DOM for performance",
      "Huge ecosystem & community",
      "React Hooks for state management",
    ],
    popularityLabel: "Most Popular",
    popularityIcon: Star,
    usedBy: "Facebook, Netflix, Airbnb, Instagram",
    available: "6+ Developers",
    link: "/services/hire-developers/frontend/react",
    cta: "Hire React Developer",
  },
  {
    icon: Code2,
    name: "Angular Developers",
    tagline: "Enterprise-grade TypeScript framework",
    bestFor: "Enterprise Apps, Complex Systems",
    features: [
      "TypeScript by default",
      "Complete framework (routing, forms, HTTP)",
      "Strong typing & structure",
      "Perfect for large teams",
    ],
    popularityLabel: "Enterprise Standard",
    popularityIcon: Building,
    usedBy: "Google, Microsoft, Forbes, IBM",
    available: "4+ Developers",
    link: "/services/hire-developers/frontend/angular",
    cta: "Hire Angular Developer",
  },
  {
    icon: Layers,
    name: "Vue.js Developers",
    tagline: "Progressive and easy-to-learn framework",
    bestFor: "Lightweight Apps, Rapid Development",
    features: [
      "Easy learning curve",
      "Flexible & progressive",
      "Great documentation",
      "Fast and lightweight",
    ],
    popularityLabel: "Growing Fast",
    popularityIcon: TrendingUp,
    usedBy: "Alibaba, GitLab, Nintendo, Adobe",
    available: "3+ Developers",
    link: "/services/hire-developers/frontend/vue",
    cta: "Hire Vue Developer",
  },
];

const pricingPlans = [
  {
    name: "Part-Time Frontend Developer",
    price: "£2,500",
    period: "/month",
    description: "80 hours/month (4 hours/day)",
    isPopular: false,
    features: [
      "UI component development",
      "Responsive design implementation",
      "Bug fixes & updates",
      "Code reviews",
      "Design system maintenance",
      "Flexible scheduling",
    ],
    cta: "Hire Part-Time",
  },
  {
    name: "Full-Time Frontend Developer",
    price: "£4,500",
    period: "/month",
    description: "160 hours/month (8 hours/day)",
    isPopular: true,
    features: [
      "Dedicated frontend resource",
      "Complete feature ownership",
      "Daily standups",
      "Sprint planning",
      "Performance optimization",
      "Cross-browser testing",
    ],
    cta: "Hire Full-Time",
  },
  {
    name: "Frontend Team",
    price: "Custom",
    period: " Quote",
    description: "Multiple developers + designer",
    isPopular: false,
    features: [
      "2+ frontend developers",
      "UI/UX designer (optional)",
      "Design system creation",
      "Component library",
      "Figma to code conversion",
      "Complete UI delivery",
    ],
    cta: "Build Team",
  },
];

const capabilities = [
  { icon: Palette, title: "UI Implementation", description: "Convert Figma/Sketch designs into pixel-perfect code" },
  { icon: Smartphone, title: "Responsive Design", description: "Mobile-first, works on all screen sizes" },
  { icon: Box, title: "Component Development", description: "Reusable, maintainable component libraries" },
  { icon: Zap, title: "Performance Optimization", description: "Fast load times, lazy loading, code splitting" },
  { icon: Eye, title: "Accessibility (A11y)", description: "WCAG compliant, screen reader friendly" },
  { icon: TestTube, title: "Testing", description: "Unit tests, integration tests, E2E tests" },
  { icon: Paintbrush, title: "Animations", description: "Smooth CSS/JS animations and transitions" },
  { icon: Workflow, title: "State Management", description: "Redux, Context API, Vuex, NgRx" },
  { icon: Code2, title: "API Integration", description: "REST APIs, GraphQL, real-time WebSockets" },
];

const profiles = [
  {
    specialty: "React & Next.js Expert",
    experience: "7+ years",
    available: true,
    availableText: "Available Now",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Jest"],
    highlights: [
      "Built 25+ React applications",
      "Expert in performance optimization",
      "Strong UI/UX design skills",
    ],
    projects: ["SaaS dashboards", "E-commerce frontends", "Admin panels"],
  },
  {
    specialty: "Angular & TypeScript Architect",
    experience: "9+ years",
    available: false,
    availableText: "Available in 1 week",
    skills: ["Angular", "TypeScript", "RxJS", "Material Design", "NgRx", "Jasmine"],
    highlights: [
      "Enterprise application specialist",
      "Scalable architecture design",
      "Team mentoring experience",
    ],
    projects: ["Enterprise CRM interfaces", "Financial dashboards", "Admin systems"],
  },
  {
    specialty: "Vue.js & Nuxt Expert",
    experience: "6+ years",
    available: true,
    availableText: "Available Now",
    skills: ["Vue.js", "Nuxt", "JavaScript", "Vuex", "SCSS", "Vitest"],
    highlights: [
      "Rapid prototyping specialist",
      "Design system creation",
      "Performance optimization expert",
    ],
    projects: ["Marketing websites", "Content platforms", "User portals"],
  },
];

const techTabs = [
  {
    id: "frameworks",
    label: "Frameworks",
    items: [
      { icon: Code2, name: "React", description: "Component-based UI library by Meta" },
      { icon: Code2, name: "Angular", description: "Enterprise TypeScript framework by Google" },
      { icon: Layers, name: "Vue.js", description: "Progressive and approachable framework" },
      { icon: ArrowRight, name: "Next.js", description: "Full-stack React framework with SSR" },
      { icon: ArrowRight, name: "Nuxt", description: "Vue meta-framework with SSR support" },
      { icon: Zap, name: "Svelte", description: "Compile-time reactive UI framework" },
      { icon: RefreshCw, name: "Remix", description: "Full-stack web framework with nested routes" },
      { icon: Globe, name: "Gatsby", description: "Static site generator for fast websites" },
    ],
  },
  {
    id: "languages",
    label: "Languages & Styling",
    items: [
      { icon: FileCode, name: "TypeScript", description: "Typed superset of JavaScript" },
      { icon: Code, name: "JavaScript", description: "Core language of the web platform" },
      { icon: FileText, name: "HTML5", description: "Semantic markup and modern APIs" },
      { icon: Palette, name: "CSS3", description: "Styling with grid, flexbox, and animations" },
      { icon: Paintbrush, name: "Tailwind CSS", description: "Utility-first CSS framework" },
      { icon: Droplet, name: "SCSS/SASS", description: "CSS preprocessor with variables and mixins" },
      { icon: Box, name: "Styled Components", description: "CSS-in-JS with tagged template literals" },
      { icon: LayoutGrid, name: "CSS Modules", description: "Scoped CSS with local class names" },
    ],
  },
  {
    id: "state-tools",
    label: "State & Build Tools",
    items: [
      { icon: Database, name: "Redux", description: "Predictable state container for JS apps" },
      { icon: Box, name: "Zustand", description: "Lightweight state management library" },
      { icon: RefreshCw, name: "React Query", description: "Server-state management and caching" },
      { icon: GitBranch, name: "MobX", description: "Reactive state with observable patterns" },
      { icon: Package, name: "Webpack", description: "Powerful module bundler and asset pipeline" },
      { icon: Zap, name: "Vite", description: "Next-generation fast build tool" },
      { icon: Rocket, name: "Turbopack", description: "Rust-powered incremental bundler" },
      { icon: Package, name: "pnpm", description: "Fast, disk-efficient package manager" },
    ],
  },
  {
    id: "testing",
    label: "Testing",
    items: [
      { icon: TestTube, name: "Jest", description: "Delightful JavaScript testing framework" },
      { icon: CheckCircle, name: "Cypress", description: "End-to-end testing for web apps" },
      { icon: Play, name: "Playwright", description: "Cross-browser automation and testing" },
      { icon: Zap, name: "Vitest", description: "Blazing fast Vite-native unit testing" },
      { icon: Code2, name: "React Testing Library", description: "Test React components by behavior" },
      { icon: Book, name: "Storybook", description: "UI component explorer and documentation" },
      { icon: Eye, name: "Chromatic", description: "Visual regression testing for UI" },
      { icon: Shield, name: "MSW", description: "API mocking for browser and Node.js" },
    ],
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Share Your Designs",
    points: [
      "Free consultation to discuss Figma/Sketch designs and framework preference",
      "Choose framework (React/Angular/Vue) and define design system needs",
      "Set engagement model and project timeline",
    ],
  },
  {
    icon: Users,
    title: "Developer Matching",
    points: [
      "Receive 2-3 frontend developer profiles with UI portfolios",
      "Review framework expertise, GitHub profiles, and previous UI work",
      "Confirm availability and match to your project requirements",
    ],
  },
  {
    icon: FileCheck,
    title: "Design & Code Review",
    points: [
      "Video interviews with optional UI coding challenge",
      "Discuss component architecture and review design eye for detail",
      "Make final selection based on technical and creative fit",
    ],
  },
  {
    icon: UserCheck,
    title: "Onboarding & First Components",
    points: [
      "Contract signing with access to design files and codebase",
      "Setup component library and deliver first components",
      "Establish code review process and development workflow",
    ],
  },
];

const faqs = [
  {
    q: "React vs Angular vs Vue\u2014which should I choose?",
    a: "React for flexibility and ecosystem (most popular). Angular for enterprise apps with TypeScript (structured). Vue for quick development and gentle learning curve. We'll recommend based on your team and project.",
  },
  {
    q: "Do frontend developers handle design too?",
    a: "Our developers implement designs (Figma to code). They have a good design eye and can suggest improvements, but they're not UI/UX designers. We can provide designers separately if needed.",
  },
  {
    q: "Can frontend developers work with our backend team?",
    a: "Absolutely! They integrate with any backend (REST APIs, GraphQL). They collaborate closely with your backend developers or our full-stack developers.",
  },
  {
    q: "Do they write tests?",
    a: "Yes! Our frontend developers write unit tests (Jest, Vitest), integration tests, and can setup E2E tests (Cypress, Playwright).",
  },
  {
    q: "What's included in responsive design?",
    a: "Mobile-first approach, works perfectly on phones, tablets, desktops, and large screens. Tested on real devices and browsers.",
  },
  {
    q: "Can they convert Figma designs to code?",
    a: "Yes! Pixel-perfect Figma/Sketch to React/Angular/Vue conversion is a core skill. They match spacing, colors, fonts, and interactions exactly.",
  },
  {
    q: "Do they handle accessibility?",
    a: "Yes! WCAG 2.1 AA compliance, screen reader support, keyboard navigation, proper ARIA labels\u2014accessibility is standard practice.",
  },
  {
    q: "Can they optimize performance?",
    a: "Absolutely! Code splitting, lazy loading, image optimization, bundle size reduction, lighthouse scoring\u2014performance is a priority.",
  },
  {
    q: "What if we need custom animations?",
    a: "Our developers create smooth CSS animations, JavaScript interactions, and can use libraries like Framer Motion, GSAP, or Anime.js.",
  },
  {
    q: "Can frontend developers handle DevOps/deployment?",
    a: "Basic deployment to Vercel, Netlify, or similar platforms\u2014yes. For complex CI/CD and infrastructure, we recommend adding a DevOps engineer.",
  },
];

function FrontendMockup() {
  return (
    <div className="relative" data-testid="frontend-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-visible">
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/50 rounded-t-2xl">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">yourapp.com</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-1.5 rounded-full bg-foreground/20" />
            <div className="flex gap-3 flex-wrap">
              {["Home", "Features", "Pricing"].map((item) => (
                <span key={item} className="text-xs text-muted-foreground">{item}</span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl p-6 mb-4">
            <div className="w-24 h-2 bg-foreground/15 rounded mb-2" />
            <div className="w-40 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded mb-3" />
            <div className="w-32 h-1.5 bg-foreground/10 rounded mb-4" />
            <div className="flex gap-2 flex-wrap">
              <div className="w-16 h-6 rounded-md bg-blue-500/30" />
              <div className="w-16 h-6 rounded-md border border-foreground/10" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { color: "from-blue-400/30 to-blue-500/10" },
              { color: "from-purple-400/30 to-purple-500/10" },
              { color: "from-pink-400/30 to-pink-500/10" },
            ].map((card, i) => (
              <div key={i} className={`bg-gradient-to-b ${card.color} rounded-lg p-3 border border-foreground/5`}>
                <div className="w-6 h-6 rounded-md bg-foreground/10 mb-2" />
                <div className="w-full h-1.5 bg-foreground/10 rounded mb-1" />
                <div className="w-3/4 h-1 bg-foreground/5 rounded" />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-3 -right-3 bg-card border rounded-lg p-3 shadow-lg max-w-[160px]">
          <div className="text-[10px] font-mono text-muted-foreground leading-relaxed">
            <span className="text-blue-400">{"<"}</span>
            <span className="text-green-400">Component</span>
            <span className="text-blue-400">{" />"}</span>
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
          <Smartphone className="h-3 w-3 mr-1" /> Responsive Design
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute top-1/3 -right-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${FE_COLOR}15`, color: FE_COLOR, borderColor: `${FE_COLOR}30` }}>
          React / Vue / Angular
        </Badge>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-1/4 -left-4"
      >
        <Badge variant="secondary" className="text-xs shadow-md no-default-hover-elevate no-default-active-elevate">
          <Zap className="h-3 w-3 mr-1" /> 60 FPS Animations
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

export default function HireFrontendPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Hire Developers", href: "/services/hire-developers" },
          { label: "Frontend" },
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
              <Badge className="mb-4 no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${FE_COLOR}15`, color: FE_COLOR, borderColor: `${FE_COLOR}30` }}>
                <Palette className="h-3 w-3 mr-1" /> Frontend Developers
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="hero-title">
                Hire Frontend Developers
              </h1>

              <p className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
                UI/UX Specialists Who Build Beautiful Interfaces
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                Hire senior frontend developers who create pixel-perfect, responsive user interfaces. Expert in React, Angular, Vue, TypeScript, and modern CSS frameworks&mdash;delivering exceptional user experiences.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {[
                  { icon: Palette, label: "Pixel Perfect" },
                  { icon: Smartphone, label: "Mobile First" },
                  { icon: Zap, label: "Performance" },
                  { icon: Eye, label: "Accessibility" },
                ].map((pill) => {
                  const PillIcon = pill.icon;
                  return (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                      data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <PillIcon className="h-3.5 w-3.5" style={{ color: FE_COLOR }} />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { value: "12+", label: "Developers" },
                  { value: "3", label: "Frameworks" },
                  { value: "Now", label: "Available" },
                ].map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase()}`}>
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: FE_COLOR }}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap mt-8">
                <Link href="/contact">
                  <Button data-testid="cta-hire-frontend">
                    Hire Frontend Developer <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  data-testid="cta-compare-frameworks"
                  onClick={() => document.getElementById("framework-comparison")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Compare Frameworks <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <FrontendMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IS FRONTEND */}
      <section className="py-20 bg-muted" data-testid="section-what-is">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">What is a Frontend Developer?</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Frontend developers build everything users see and interact with&mdash;the visual interface, animations, forms, navigation. They turn designs into beautiful, functional web applications using HTML, CSS, JavaScript, and modern frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Layout, title: "User Interfaces", desc: "Beautiful, intuitive UIs" },
              { icon: Smartphone, title: "Responsive Design", desc: "Perfect on all devices" },
              { icon: Zap, title: "Animations", desc: "Smooth interactions" },
              { icon: Palette, title: "Design Systems", desc: "Consistent components" },
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
                        style={{ backgroundColor: `${FE_COLOR}15` }}
                      >
                        <Icon className="h-7 w-7" style={{ color: FE_COLOR }} />
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

      {/* FRAMEWORK COMPARISON */}
      <section id="framework-comparison" className="py-20" data-testid="section-frameworks">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Choose Your Frontend Framework</h2>
            <p className="text-muted-foreground mt-2">We have experts in React, Angular, and Vue</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameworks.map((fw, i) => {
              const FrameworkIcon = fw.icon;
              const PopIcon = fw.popularityIcon;
              return (
                <motion.div
                  key={fw.name}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card
                    className="p-8 h-full hover-elevate transition-all duration-300"
                    data-testid={`framework-card-${fw.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <CardContent className="p-0">
                      <div
                        className="w-16 h-16 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${FE_COLOR}10` }}
                      >
                        <FrameworkIcon className="h-8 w-8" style={{ color: FE_COLOR }} />
                      </div>

                      <h3 className="text-2xl font-bold mt-6">{fw.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{fw.tagline}</p>

                      <div className="mt-4">
                        <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
                          Best for: {fw.bestFor}
                        </Badge>
                      </div>

                      <div className="mt-6 space-y-2">
                        {fw.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: FE_COLOR }} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6">
                        <Badge className="no-default-hover-elevate no-default-active-elevate" style={{ backgroundColor: `${FE_COLOR}15`, color: FE_COLOR, borderColor: `${FE_COLOR}30` }}>
                          <PopIcon className="h-3 w-3 mr-1" /> {fw.popularityLabel}
                        </Badge>
                      </div>

                      <p className="text-xs text-muted-foreground italic mt-4">
                        Used by: {fw.usedBy}
                      </p>

                      <div className="mt-6">
                        <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
                          {fw.available} Available
                        </Badge>
                      </div>

                      <div className="mt-8">
                        <Link href={fw.link}>
                          <Button variant="outline" className="w-full" data-testid={`cta-${fw.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            {fw.cta} <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* CTA 1 - After Framework Comparison */}
      <CTASection
        variant="bordered"
        title="Not Sure Which Framework to Choose?"
        description="Book a free consultation and we'll recommend React, Angular, or Vue based on your needs"
        primaryCTA={{ text: "Get Framework Recommendation", link: "/contact" }}
        size="medium"
      />

      {/* PRICING */}
      <section className="py-20 bg-muted" data-testid="section-pricing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frontend Developer Pricing</h2>
            <p className="text-muted-foreground mt-2">Same pricing across all frameworks</p>
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
            title="What Our Frontend Developers Handle"
            subtitle="Complete UI development from design to deployment"
            values={capabilities}
            columns={3}
            accentColor={FE_COLOR}
          />
        </div>
      </section>

      {/* DEVELOPER PROFILES */}
      <section className="py-20 bg-muted" data-testid="section-profiles">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Frontend Developers</h2>
            <p className="text-muted-foreground mt-2">UI/UX specialists with design and code expertise</p>
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
                        style={{ backgroundColor: `${FE_COLOR}15` }}
                      >
                        <User className="h-7 w-7" style={{ color: FE_COLOR }} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Senior Frontend Developer</h3>
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
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: FE_COLOR }} />
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
        title="Ready to Hire a Frontend Developer?"
        description="Tell us your framework and we'll match you with senior UI specialists in 48 hours"
        primaryCTA={{ text: "Hire Frontend Developer", link: "/contact" }}
        secondaryCTA={{ text: "View Pricing", link: "#pricing" }}
        size="large"
      />

      {/* TECH STACK */}
      <section className="py-20" data-testid="section-tech">
        <div className="max-w-7xl mx-auto px-6">
          <TechTabsSection
            title="Frontend Technologies Our Developers Master"
            subtitle="Modern tools and frameworks for world-class UIs"
            tabs={techTabs}
            accentColor={FE_COLOR}
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Hiring Process for Frontend Developers"
            subtitle="From design to deployment-ready developers"
            steps={zigzagSteps}
            accentColor={FE_COLOR}
          />
        </div>
      </section>

      {/* FRONTEND VS FULL-STACK */}
      <section className="py-20" data-testid="section-comparison">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frontend Specialist vs Full-Stack Developer</h2>
            <p className="text-muted-foreground mt-2">When to hire a dedicated frontend expert</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-primary border-2" data-testid="card-frontend-specialist">
                <CardContent className="p-0">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${FE_COLOR}15` }}
                  >
                    <Layout className="h-7 w-7" style={{ color: FE_COLOR }} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Hire Frontend Specialist If...</h3>
                  <div className="space-y-2 mb-6">
                    {[
                      "Complex UI/UX requirements",
                      "Design-heavy application",
                      "Animation & interaction focus",
                      "Need pixel-perfect implementation",
                      "Performance-critical frontend",
                      "Design system creation",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: FE_COLOR }} />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Example projects:</span> SaaS dashboards, E-commerce storefronts, Admin panels, Marketing websites
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
                      "Simple UI requirements",
                      "Backend-heavy application",
                      "Need end-to-end ownership",
                      "Small team/budget",
                      "Basic CRUD interfaces",
                      "Standard component usage",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">Example projects:</span> Internal tools, Simple MVPs, API-first apps, Backend-focused systems
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Need both?{" "}
              <Link href="/services/hire-developers" className="text-primary underline underline-offset-4">
                Hire a frontend + backend developer
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frontend Developer FAQs</h2>
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
        title="Let's Build Beautiful User Interfaces"
        description="Book a free consultation to discuss your designs and meet our frontend developers"
        primaryCTA={{ text: "Book Consultation", link: "/contact" }}
        secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
        showContactInfo
        size="large"
      />
    </div>
  );
}
