import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Layers,
  Zap,
  Code2,
  GitBranch,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Cloud,
  Workflow,
  Users,
  BarChart2,
  Store,
  Network,
  Lock,
  Plug,
  Search,
  Upload,
  CreditCard,
  Bell,
  ClipboardList,
  Building,
  Smartphone,
  WifiOff,
  Briefcase,
  Heart,
  Truck,
  TrendingUp,
  GraduationCap,
  ShoppingBag,
  Shield,
  Headphones,
  Award,
  Rocket,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageCTA } from "@/components/shared/PageCTA";
import WebAppHeroMockup from "@/components/mockups/WebAppHeroMockup";
import AppShowcase from "@/components/mockups/AppShowcase";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";

const WEB_APP_COLOR = "#7C3AED";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const appTypes = [
  {
    icon: Cloud,
    gradient: "from-violet-500 to-purple-500",
    name: "SaaS Platforms",
    description: "Multi-tenant software products with subscriptions, user management, and the infrastructure to serve thousands of paying customers.",
    examples: ["HR management platform for SMEs", "Restaurant booking SaaS for chains", "Compliance tracker for law firms"],
    tech: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
  },
  {
    icon: Workflow,
    gradient: "from-indigo-500 to-blue-500",
    name: "Business Process Tools",
    description: "Replace spreadsheets and manual workflows with custom tools built precisely around how your business operates.",
    examples: ["Quoting system for a roofing company", "Job scheduling tool for field engineers", "Resource planner for marketing agency"],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    name: "Client Portals",
    description: "Secure branded portals where clients access documents, track progress, raise requests, and communicate with your team.",
    examples: ["Legal document sharing portal", "Accountancy client self-service portal", "Creative agency project portal"],
    tech: ["Next.js", "Auth0", "PostgreSQL", "AWS S3"],
  },
  {
    icon: BarChart2,
    gradient: "from-blue-500 to-cyan-500",
    name: "Real-Time Dashboards",
    description: "Live data visualisation platforms pulling from multiple sources, updating in real time, and delivering insights at a glance.",
    examples: ["Operations dashboard for logistics company", "Live sales metrics for retail chain", "IoT sensor monitoring platform"],
    tech: ["React", "WebSockets", "PostgreSQL", "Redis"],
  },
  {
    icon: Store,
    gradient: "from-green-500 to-emerald-500",
    name: "Marketplace Platforms",
    description: "Two-sided marketplace applications connecting buyers and sellers, with listings, transactions, reviews, and dispute management.",
    examples: ["Freelance services marketplace", "B2B supplier procurement platform", "Local services booking marketplace"],
    tech: ["Next.js", "Node.js", "Stripe Connect", "PostgreSQL"],
  },
  {
    icon: Network,
    gradient: "from-orange-500 to-amber-500",
    name: "API-First Applications",
    description: "Headless backends and API layers powering mobile apps, third-party integrations, and complex multi-platform ecosystems.",
    examples: ["REST API powering iOS and Android apps", "Data aggregation service for BI tools", "Webhook integration hub for enterprise"],
    tech: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
  },
];

const coreFeatures = [
  { icon: Lock, title: "Authentication & Roles", description: "Secure login, SSO, and role-based access control" },
  { icon: Zap, title: "Real-Time Updates", description: "WebSockets and live data without page refreshes" },
  { icon: Plug, title: "API Integrations", description: "Connect any third-party service via REST or GraphQL" },
  { icon: BarChart2, title: "Data Visualisation", description: "Interactive charts, graphs, and custom dashboards" },
  { icon: Search, title: "Advanced Search", description: "Full-text search with filters, sorting and facets" },
  { icon: Upload, title: "File Management", description: "Upload, store, and manage files with AWS S3" },
  { icon: CreditCard, title: "Payment Processing", description: "Stripe subscriptions, one-time payments, invoicing" },
  { icon: Bell, title: "Notifications", description: "In-app, email, and push notification systems" },
  { icon: ClipboardList, title: "Audit Logs", description: "Full activity history for compliance and debugging" },
  { icon: Building, title: "Multi-Tenancy", description: "Separate data per organisation in one codebase" },
  { icon: Smartphone, title: "Fully Responsive", description: "Works perfectly on desktop, tablet, and mobile" },
  { icon: WifiOff, title: "Offline Support", description: "PWA capabilities for offline-first applications" },
];

const industries = [
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Law, accounting, consulting—complex client management and workflow automation",
    useCases: ["Matter management for law firms", "Client portal for accountancy firms", "Time tracking and billing tool", "Compliance monitoring dashboard"],
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "GDPR-compliant patient management, scheduling, and clinical workflow systems",
    useCases: ["Patient booking and records system", "Clinical staff scheduling tool", "Referral management platform", "Medical reporting dashboard"],
  },
  {
    icon: Truck,
    name: "Logistics & Operations",
    description: "Fleet management, route optimisation, and operational workflow automation",
    useCases: ["Real-time fleet tracking dashboard", "Driver and route management system", "Warehouse inventory platform", "Delivery scheduling tool"],
  },
  {
    icon: TrendingUp,
    name: "Finance & Fintech",
    description: "Secure financial platforms for data management, reporting, and client services",
    useCases: ["Investment portfolio tracker", "Financial reporting dashboard", "Client wealth management portal", "Expense management system"],
  },
  {
    icon: GraduationCap,
    name: "Education & Training",
    description: "Learning platforms, assessment tools, and student management systems",
    useCases: ["Custom LMS with progress tracking", "Online assessment platform", "Corporate training portal", "Student engagement dashboard"],
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce & Retail",
    description: "Beyond Shopify—custom platforms for unique products and complex operations",
    useCases: ["Custom product configurator", "Multi-warehouse inventory system", "B2B wholesale ordering portal", "Subscription management platform"],
  },
];

const caseStudies = [
  {
    gradient: "bg-gradient-to-br from-violet-600 to-indigo-600",
    icon: Truck,
    badge: "Logistics & Operations",
    title: "Fleet Operations Platform",
    subtitle: "Transport & Logistics, Birmingham",
    description: "Built a real-time fleet and dispatch platform for a UK logistics company managing 45 vehicles. Route optimisation, driver scheduling, delivery confirmation, and live customer notifications—all in one application.",
    features: ["📍 Live GPS tracking for all 45 vehicles", "📋 Automated dispatch and route assignment", "📱 Driver app for delivery confirmation", "📊 Operations dashboard with live analytics", "📧 Automated customer delivery notifications"],
    tech: ["React", "Node.js", "PostgreSQL", "Google Maps", "AWS"],
    footer: "14 weeks • Full-stack web application",
  },
  {
    gradient: "bg-gradient-to-br from-violet-600 to-pink-600",
    icon: Heart,
    badge: "Healthcare",
    title: "Patient Management System",
    subtitle: "Private Dental Group, London",
    description: "Replaced a legacy system causing double bookings and lost records across 6 clinic locations. Custom patient management with online booking, digital records, and integrated payments.",
    features: ["🦷 Online booking with real-time availability", "📋 Digital patient records and treatment history", "💳 Integrated payments and insurance processing", "📱 Patient SMS and email reminder system", "📊 Multi-location management dashboard"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Twilio", "Stripe"],
    footer: "16 weeks • Multi-location web application",
  },
  {
    gradient: "bg-gradient-to-br from-violet-600 to-cyan-600",
    icon: TrendingUp,
    badge: "Finance",
    title: "Investment Portfolio Platform",
    subtitle: "Independent Financial Adviser, Manchester",
    description: "White-label investment portal replacing manual PDF reports. Clients log in to view holdings, performance charts, and statements in real time. Fully branded per adviser.",
    features: ["📈 Real-time portfolio performance tracking", "📄 Automated monthly statement generation", "🔒 Two-factor authentication and bank-grade security", "📊 Interactive charts for holdings and returns", "👤 White-label portal with custom client branding"],
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
    footer: "12 weeks • SaaS web application",
  },
];

const faqs = [
  { q: "How much does a web application cost?", a: "Web application costs vary significantly based on complexity. A simple internal tool starts around £15,000-£25,000. A mid-complexity application with multiple user roles and integrations ranges from £25,000-£60,000. A full SaaS platform with multi-tenancy and payments runs £60,000-£150,000+. We provide detailed, itemised quotes after a free discovery session—you always know exactly what you're paying for." },
  { q: "How long does it take to build a web application?", a: "Simple internal tool: 8-12 weeks. Mid-complexity platform: 12-20 weeks. Full SaaS product: 16-28 weeks. We work in 2-week Agile sprints with demos every Friday, so you see real progress throughout. All timelines are agreed and committed to upfront." },
  { q: "What's the difference between a web app and a website?", a: "A website presents information—brochure sites, blogs, portfolios. A web application does work—users log in, create data, automate processes, collaborate. If your users need accounts, if data needs storing, or if you're automating a workflow, you need a web application." },
  { q: "Do we own the source code?", a: "100% yes. Full source code, intellectual property, and all assets are yours from day one. No licensing fees, no vendor lock-in. The code is transferred to your repository at project end and you can take it anywhere." },
  { q: "Can you build a web application that works on mobile?", a: "Every web application we build is fully responsive—designed mobile-first and tested on real iOS and Android devices. We can also add Progressive Web App (PWA) capabilities so users can install it on their home screen and use it offline." },
  { q: "How do you handle complex integrations?", a: "Integration is core to what we do. We connect with any system that exposes an API: Stripe, HubSpot, Salesforce, ERPs, accounting software, government APIs. If it doesn't have an API, we can often build a connector or scrape data from it." },
  { q: "What if requirements change during development?", a: "Requirements always evolve—that's why we use Agile. Minor scope changes within the sprint are absorbed at no extra cost. Significant additions are scoped, quoted transparently, and added to the roadmap. We never surprise you with extra costs." },
  { q: "How do you approach security for sensitive data?", a: "Security is architected in from the start: encrypted data at rest and in transit, OWASP-compliant code, penetration testing, audit logs, GDPR-compliant data handling, and Auth0 or custom authentication. For healthcare or finance, we apply sector-specific compliance standards." },
  { q: "Can we start with an MVP and build later?", a: "Absolutely—this is the recommended approach for new products. We design scalable architecture but build only what you need now. Launch an MVP, validate with real users, then iterate and add features. Reduces risk and gets you to market faster." },
  { q: "What are ongoing costs after launch?", a: "Infrastructure costs depend on usage (AWS typically £50-500/month for most apps). After 60-day warranty, we offer monthly maintenance retainers covering updates, bug fixes, security patches, and new features. Retainers start from £1,500/month." },
  { q: "Will the application scale as we grow?", a: "Yes—we design for scale from the start. Horizontal scaling on AWS, database connection pooling, Redis caching, CDN delivery, and async job queues. We've built apps that started with 50 users and now serve 50,000." },
  { q: "Can you take over a project from another developer?", a: "Yes—we've rescued multiple projects. We audit the existing codebase honestly, assess what's salvageable, and recommend fix, refactor, or rebuild. We never push for a full rebuild unless it's genuinely the right answer. We can provide a codebase audit as a standalone service." },
];

const comparisonRows = [
  { feature: "User authentication", website: false, webapp: true },
  { feature: "Stores user data", website: false, webapp: true },
  { feature: "Processes information", website: false, webapp: true },
  { feature: "Real-time updates", website: false, webapp: true },
  { feature: "Role-based access", website: false, webapp: true },
  { feature: "Automates workflows", website: false, webapp: true },
  { feature: "Multi-user collaboration", website: false, webapp: true },
  { feature: "Displays information", website: true, webapp: true },
];

export default function WebAppsPage() {
  return (
    <>
      <SEO
        title="Web App Developers London & Ealing"
        description="Web application developers in London & Ealing. SaaS platforms, portals, dashboards. Built for London businesses. Free consultation."
        canonical="/services/web-apps"
      />
      {/* HERO SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
            >
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/services" },
                  { label: "Web Development", href: "/services/web-development" },
                  { label: "Web Applications" },
                ]}
              />

              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm inline-block pt-[8px] pb-[8px] pl-[14px] pr-[14px] mt-[15px] mb-[15px]">
                ⚡ Web Application Development
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Web Application Developers in London
              </h1>

              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                Complex Problems. Elegant Applications. Real Results.
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We build powerful, scalable web applications that automate your workflows, delight your users, and grow with your business. From SaaS platforms to internal tools—we turn complex requirements into elegant software.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                {[
                  { icon: Layers, text: "Scalable Architecture" },
                  { icon: Zap, text: "Real-Time Ready" },
                  { icon: Code2, text: "You Own The Code" },
                  { icon: GitBranch, text: "Agile Delivery" },
                ].map((pill) => (
                  <div key={pill.text} className="bg-muted border rounded-full px-4 py-2 text-sm flex items-center gap-2">
                    <pill.icon className="h-4 w-4" />
                    {pill.text}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "80+", label: "Apps Delivered" },
                  { value: "99.9%", label: "Avg Uptime" },
                  { value: "12 Weeks", label: "Avg Delivery" },
                  { value: "5★", label: "Client Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card border rounded-xl p-4 text-center">
                    <div className="font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent text-[20px]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white h-14 px-8 rounded-xl">
                    Start Your Project
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <Button variant="outline" className="h-14 px-8 rounded-xl">
                  See Our Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <WebAppHeroMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WEB APPS VS WEBSITES */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Web Apps vs Websites</h2>
            <p className="text-muted-foreground mt-2">Understanding what you actually need</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                A website presents information. A web application does work. If users log in, create data, interact with a system, or automate a process—you need a web application, not just a website.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                Modern web applications run entirely in the browser, work across every device, and can rival desktop software in power and speed. They're faster to build than native apps, easier to update, and accessible from anywhere.
              </p>

              <h3 className="mt-8 font-semibold mb-4">You Need a Web App When...</h3>
              <div className="space-y-3">
                {[
                  "Users need to log in and have personal data",
                  "You want to automate a business process",
                  "Multiple people collaborate on shared data",
                  "You need real-time updates or notifications",
                  "You're building a product to sell to customers",
                  "Data needs to be stored, processed, or analysed",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-violet-600 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-card border rounded-2xl p-6">
                <h3 className="text-center font-semibold mb-6">Website vs Web Application</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted rounded-t-lg">
                        <th className="text-left px-4 py-3 font-semibold">Feature</th>
                        <th className="text-center px-4 py-3 font-semibold">Website</th>
                        <th className="text-center px-4 py-3 font-semibold">Web App</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr key={row.feature} className={i % 2 === 1 ? "bg-muted/50" : ""}>
                          <td className="px-4 py-3">{row.feature}</td>
                          <td className="text-center px-4 py-3">
                            {row.website ? (
                              <CheckCircle2 className="inline text-green-500" size={18} />
                            ) : (
                              <XCircle className="inline text-red-400/60" size={18} />
                            )}
                          </td>
                          <td className="text-center px-4 py-3">
                            <CheckCircle2 className="inline text-green-500" size={18} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Not sure which you need? Book a free consultation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TYPES OF WEB APPLICATIONS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Web Applications We Build</h2>
            <p className="text-muted-foreground mt-2">Custom solutions for every business challenge</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.name}
                  className="bg-card border rounded-2xl p-8 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-violet-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-purple-600" />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{type.name}</h3>
                  <p className="text-sm text-muted-foreground mt-3">{type.description}</p>
                  <p className="mt-6 text-xs font-semibold uppercase text-muted-foreground mb-2">Real-World Examples</p>
                  <div className="text-xs space-y-1">
                    {type.examples.map((ex) => (
                      <div key={ex}>→ {ex}</div>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-2 flex-wrap">
                    {type.tech.map((t) => (
                      <span key={t} className="bg-muted text-xs px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <PageCTA
        title="Not Sure What Type of App You Need?"
        subtitle="Book a free consultation—we'll map out the right solution for your exact requirements"
      />

      {/* APP SHOWCASE */}
      <AppShowcase />

      {/* CORE FEATURES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Built-In From Day One</h2>
            <p className="text-muted-foreground mt-2">Enterprise features in every application we build</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-card border rounded-xl p-5 hover:border-violet-500/50 hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Icon className="text-violet-600 mb-3" size={28} />
                  <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Industries We Build For</h2>
            <p className="text-muted-foreground mt-2">Deep domain knowledge across key sectors</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  className="bg-card border rounded-2xl p-6 hover:border-violet-500/50 transition-all"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{industry.description}</p>
                  <div className="space-y-2">
                    {industry.useCases.map((uc) => (
                      <div key={uc} className="flex items-center gap-2">
                        <ArrowRight className="text-violet-600 flex-shrink-0" size={14} />
                        <span className="text-xs text-muted-foreground">{uc}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose Us For Your Web Application"
            subtitle="What makes our builds different"
            columns={3}
            accentColor={WEB_APP_COLOR}
            values={[
              { icon: Code2, title: "You Own The Code", description: "Full source code ownership from day one. No lock-in, no licensing fees, forever yours." },
              { icon: TrendingUp, title: "Built to Scale", description: "Architecture designed for growth—start with 10 users, scale to 100,000 without rebuilding." },
              { icon: Layers, title: "Clean Architecture", description: "Documented, tested, maintainable code your team can understand and extend for years." },
              { icon: Shield, title: "Security First", description: "OWASP compliant, pen-tested, encrypted, and GDPR-ready from architecture to deployment." },
              { icon: Zap, title: "Performance Obsessed", description: "Sub-100ms load times, optimised queries, and 99.9% uptime SLAs on every project." },
              { icon: GitBranch, title: "Agile Delivery", description: "2-week sprints, weekly demos, transparent progress. You're involved every step." },
              { icon: Users, title: "UX-Driven Design", description: "Every interface tested with real users before launch. Beautiful and functional." },
              { icon: Headphones, title: "Long-Term Partner", description: "We don't disappear after launch. Ongoing development and support packages available." },
              { icon: Award, title: "UK-Based Team", description: "All development in-house by our UK team. Same timezone, direct communication, no outsourcing." },
            ]}
          />
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20 bg-muted">
        <TabbedTechStack
          title="Technologies We Use"
          subtitle="Battle-tested tools powering every application we build"
          tabs={[
            {
              label: "Frontend",
              technologies: [
                { name: "React", slug: "react" },
                { name: "Next.js", slug: "nextdotjs" },
                { name: "TypeScript", slug: "typescript" },
                { name: "Tailwind CSS", slug: "tailwindcss" },
                { name: "Framer Motion", slug: "framer" },
                { name: "Redux", slug: "redux" },
                { name: "GraphQL", slug: "graphql" },
                { name: "Vite", slug: "vite" },
              ],
            },
            {
              label: "Backend",
              technologies: [
                { name: "Node.js", slug: "nodedotjs" },
                { name: "Express.js", slug: "express" },
                { name: "NestJS", slug: "nestjs" },
                { name: "Python", slug: "python" },
                { name: "FastAPI", slug: "fastapi" },
                { name: "GraphQL", slug: "graphql" },
                { name: "WebSockets", slug: "socketdotio" },
                { name: "REST APIs", slug: "postman" },
              ],
            },
            {
              label: "Database",
              technologies: [
                { name: "PostgreSQL", slug: "postgresql" },
                { name: "MongoDB", slug: "mongodb" },
                { name: "Redis", slug: "redis" },
                { name: "MySQL", slug: "mysql" },
                { name: "Supabase", slug: "supabase" },
                { name: "Elasticsearch", slug: "elasticsearch" },
                { name: "Prisma", slug: "prisma" },
                { name: "Firebase", slug: "firebase" },
              ],
            },
            {
              label: "Cloud & DevOps",
              technologies: [
                { name: "AWS", slug: "amazonaws" },
                { name: "Docker", slug: "docker" },
                { name: "Kubernetes", slug: "kubernetes" },
                { name: "GitHub Actions", slug: "githubactions" },
                { name: "Vercel", slug: "vercel" },
                { name: "Cloudflare", slug: "cloudflare" },
                { name: "Terraform", slug: "terraform" },
                { name: "DigitalOcean", slug: "digitalocean" },
              ],
            },
            {
              label: "Security",
              technologies: [
                { name: "Auth0", slug: "auth0" },
                { name: "Cloudflare", slug: "cloudflare" },
                { name: "Let's Encrypt", slug: "letsencrypt" },
                { name: "Sentry", slug: "sentry" },
                { name: "Datadog", slug: "datadog" },
                { name: "Grafana", slug: "grafana" },
                { name: "GitHub", slug: "github" },
                { name: "Stripe", slug: "stripe" },
              ],
            },
          ]}
        />
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Web Application Development Process"
            subtitle="A proven process that delivers on time, every time"
            steps={[
              { icon: Search, title: "Discovery & Architecture", points: ["Deep-dive into your workflows, users, and goals", "Technical architecture and database schema design", "Sprint roadmap with milestones and delivery dates"] },
              { icon: Layers, title: "Design & Prototyping", points: ["UX wireframes mapping every user journey and flow", "High-fidelity Figma designs reviewed and approved", "Clickable prototype tested before development starts"] },
              { icon: Code2, title: "Agile Development", points: ["2-week sprints with a live demo every Friday", "Continuous testing, code review, and refinement", "Weekly progress updates—no surprises at launch"] },
              { icon: Rocket, title: "Launch & Scale", points: ["Zero-downtime deployment to production environment", "Team onboarding, documentation, and full handover", "Ongoing support and feature development available"] },
            ]}
            accentColor={WEB_APP_COLOR}
          />
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Applications We've Built</h2>
            <p className="text-muted-foreground mt-2">Real software solving real business problems</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={`h-48 rounded-t-2xl flex flex-col items-center justify-center relative ${study.gradient}`}>
                    <Icon className="text-white" size={64} />
                    <span className="absolute top-4 left-4 bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                      {study.badge}
                    </span>
                  </div>
                  <div className="bg-card border border-t-0 rounded-b-2xl p-6">
                    <h3 className="text-lg font-bold">{study.title}</h3>
                    <p className="text-sm text-muted-foreground">{study.subtitle}</p>
                    <p className="text-sm text-muted-foreground mt-2">{study.description}</p>
                    <p className="mt-4 text-xs uppercase font-semibold text-muted-foreground mb-2">Key Features</p>
                    <div className="text-xs space-y-1.5">
                      {study.features.map((f) => (
                        <div key={f}>{f}</div>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {study.tech.map((t) => (
                        <span key={t} className="text-xs bg-muted px-2 py-1 rounded">{t}</span>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground border-t pt-3">
                      {study.footer}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA 2 */}
      <PageCTA
        title="Ready to Build Your Web Application?"
        subtitle="Let's discuss your project. Free consultation, detailed quote within 48 hours."
      />

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Web Application FAQs</h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={`q${i + 1}`} value={`q${i + 1}`} className="bg-card border rounded-xl px-6">
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA 3 */}
      <PageCTA
        title="Let's Build Something Powerful"
        subtitle="Every great application started with a conversation. Let's have ours—free, no obligation."
      />
    </>
  );
}
