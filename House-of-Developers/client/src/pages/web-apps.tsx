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
import {
  Layout,
  Layers,
  ShoppingCart,
  Users,
  Building,
  Lock,
  CreditCard,
  Activity,
  Repeat,
  Mail,
  Upload,
  MessageSquare,
  BarChart,
  LayoutDashboard,
  FileText,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageCTA } from "@/components/shared/PageCTA";
import { SplitFeatureShowcase } from "@/components/shared/SplitFeatureShowcase";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

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

const overviewCards = [
  {
    icon: Layers,
    title: "SaaS Platforms",
    description:
      "Multi-tenant applications with subscription billing, user management, and scalable infrastructure.",
  },
  {
    icon: ShoppingCart,
    title: "Marketplaces",
    description:
      "Two-sided platforms connecting buyers and sellers with integrated payment processing.",
  },
  {
    icon: Users,
    title: "Social Platforms",
    description:
      "User-generated content platforms with feeds, messaging, and community features.",
  },
  {
    icon: Building,
    title: "Enterprise Tools",
    description:
      "Internal applications built for scale with role-based access and advanced workflows.",
  },
];

const keyFeatures = [
  { icon: Lock, title: "User Auth & Authorization" },
  { icon: CreditCard, title: "Payment Integration" },
  { icon: Repeat, title: "Subscription Management" },
  { icon: Mail, title: "Email Notifications" },
  { icon: Upload, title: "File Uploads & Storage" },
  { icon: MessageSquare, title: "Real-Time Messaging" },
  { icon: BarChart, title: "Analytics & Reporting" },
  { icon: LayoutDashboard, title: "Admin Panel" },
  { icon: FileText, title: "API Documentation" },
];

const processSteps = [
  {
    step: "01",
    title: "Product Strategy",
    description:
      "We define your product vision, user personas, and feature roadmap to ensure we build the right thing.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "System architecture, database design, UI/UX wireframes, and a complete technical blueprint.",
  },
  {
    step: "03",
    title: "Feature Development",
    description:
      "Agile sprints with weekly demos. Core features first, then iterative enhancements.",
  },
  {
    step: "04",
    title: "QA & Performance",
    description:
      "Comprehensive testing, load testing, security audits, and performance optimization.",
  },
  {
    step: "05",
    title: "Launch & Scale",
    description:
      "Production deployment, monitoring setup, and ongoing support to scale with your growth.",
  },
];

const pricingTiers = [
  {
    name: "MVP",
    price: "20,000",
    label: "from",
    highlighted: false,
    features: [
      "Core feature development",
      "Single-tenant architecture",
      "User authentication",
      "Basic admin panel",
      "3 months post-launch support",
    ],
  },
  {
    name: "Growth",
    price: "40,000",
    label: "from",
    highlighted: true,
    features: [
      "Multi-tenant architecture",
      "Payment & subscription integration",
      "Advanced user roles & permissions",
      "Real-time features",
      "Analytics dashboard",
      "6 months post-launch support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    label: "",
    highlighted: false,
    features: [
      "Custom integrations & APIs",
      "White-label solution",
      "Advanced security & compliance",
      "Dedicated infrastructure",
      "Priority support & SLA",
      "Ongoing maintenance & scaling",
    ],
  },
];

const useCases = [
  {
    title: "Project Management SaaS",
    description:
      "Task boards, team collaboration, time tracking, and client portals with subscription billing.",
  },
  {
    title: "Freelance Marketplace",
    description:
      "Connect freelancers with clients, manage proposals, escrow payments, and reviews.",
  },
  {
    title: "Learning Management System",
    description:
      "Course creation, student enrollment, progress tracking, certificates, and video hosting.",
  },
  {
    title: "Team Collaboration Tool",
    description:
      "Real-time messaging, file sharing, video calls, and project workspaces for distributed teams.",
  },
];

const faqs = [
  {
    q: "What is the difference between a SaaS product and a regular website?",
    a: "A SaaS (Software as a Service) product is a cloud-based application that users access via subscription. Unlike a static website, SaaS platforms have user accounts, data storage, complex business logic, and recurring billing. They require robust backend architecture and scalable infrastructure.",
  },
  {
    q: "How do you handle scaling as our user base grows?",
    a: "We design applications with scalability from day one. This includes horizontal scaling strategies, database optimization, caching layers, CDN integration, and auto-scaling infrastructure. We also implement monitoring to proactively identify bottlenecks.",
  },
  {
    q: "What security measures do you implement?",
    a: "We follow OWASP security guidelines and implement encryption at rest and in transit, secure authentication with MFA support, role-based access control, input validation, SQL injection prevention, CSRF protection, and regular security audits.",
  },
  {
    q: "Can you integrate payment processing into our web app?",
    a: "Yes, we integrate payment gateways like Stripe and PayPal for one-time payments, subscriptions, invoicing, and marketplace split payments. We handle PCI compliance and secure payment flows.",
  },
  {
    q: "Where will our application be hosted?",
    a: "We deploy to cloud platforms like AWS, Google Cloud, or Vercel depending on your requirements. We set up CI/CD pipelines, staging environments, and production monitoring for reliable deployments.",
  },
  {
    q: "How long does it take to build a web application?",
    a: "An MVP typically takes 8-12 weeks. A full-featured application can take 4-6 months depending on complexity. We provide detailed timelines during the planning phase and deliver in iterative sprints.",
  },
  {
    q: "Do you provide ongoing maintenance and support?",
    a: "Yes, all our packages include post-launch support. We offer maintenance packages that cover bug fixes, security updates, performance monitoring, and feature enhancements on an ongoing basis.",
  },
  {
    q: "Can you migrate our existing application to a modern stack?",
    a: "Absolutely. We handle full application migrations including database migration, API redesign, frontend modernization, and data transfer. We ensure zero downtime during the transition.",
  },
];

const stats = [
  { value: "50+", label: "Apps Built" },
  { value: "1M+", label: "Users Served" },
  { value: "99.9%", label: "Uptime" },
];

export default function WebAppsPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Web Applications" },
        ]}
      />

      <section className="relative" data-testid="section-webapps-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-15 dark:opacity-10"
            style={{
              background:
                "radial-gradient(circle, hsl(220 100% 50% / 0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl"
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm bg-accent/10 border-accent/30"
              data-testid="badge-web-applications"
            >
              <Layout className="h-3.5 w-3.5 mr-1.5" />
              Web Applications
            </Badge>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
              data-testid="text-webapps-title"
            >
              Full-Stack Web Applications Built for Scale
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From SaaS platforms and marketplaces to enterprise tools and social
              networks — we build production-ready web applications that handle
              millions of users.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              {stats.map((stat) => (
                <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground border-accent-border"
                asChild
              >
                <Link
                  href="/contact"
                  data-testid="button-webapps-start-app"
                >
                  Start Your App
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo("use-cases")}
                data-testid="button-webapps-view-examples"
              >
                View Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-webapps-overview">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              data-testid="text-overview-title"
            >
              What We Build
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tailored web applications for every industry and use case.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {overviewCards.map((card) => (
              <motion.div key={card.title} variants={itemVariants}>
                <Card
                  className="hover-elevate h-full"
                  data-testid={`card-overview-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <card.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{card.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SplitFeatureShowcase
        badge="Full-Stack"
        title="Enterprise-Grade Features Out of the Box"
        description="Every web application we build comes with a robust set of features designed for production use from day one."
        features={[
          {
            icon: Lock,
            title: "User Authentication",
            description:
              "Secure login, registration, MFA, and session management built in.",
          },
          {
            icon: CreditCard,
            title: "Payment Processing",
            description:
              "Stripe, PayPal, and custom payment flows with subscription support.",
          },
          {
            icon: Activity,
            title: "Real-Time Updates",
            description:
              "WebSocket-powered live data, notifications, and collaborative features.",
          },
          {
            icon: Users,
            title: "Multi-Tenancy",
            description:
              "Isolated data, custom branding, and tenant-specific configurations.",
          },
        ]}
        mockupType="dashboard"
        mockupContent={<DashboardMockup />}
      />

      <section
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-webapps-features"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              data-testid="text-features-title"
            >
              Key Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything your web application needs to succeed.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {keyFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="flex items-center gap-4"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{feature.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        data-testid="section-webapps-process"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              data-testid="text-process-title"
            >
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven methodology for delivering successful web applications.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative"
                data-testid={`process-step-${i + 1}`}
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute left-5 top-14 bottom-0 w-px bg-border hidden md:block" />
                )}
                <div className="flex gap-6">
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold relative z-10">
                      {step.step}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          variant="outline"
                          className="text-xs no-default-active-elevate md:hidden"
                        >
                          Step {step.step}
                        </Badge>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-webapps-pricing"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              data-testid="text-pricing-title"
            >
              Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transparent pricing for every stage of your product.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingTiers.map((tier) => (
              <motion.div key={tier.name} variants={itemVariants}>
                <Card
                  className={`h-full ${tier.highlighted ? "border-2 border-primary" : ""}`}
                  data-testid={`card-pricing-${tier.name.toLowerCase()}`}
                >
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {tier.name}
                    </p>
                    <p className="mt-3 text-3xl font-bold tracking-tight">
                      {tier.label && (
                        <span className="text-base font-normal text-muted-foreground mr-1">
                          {tier.label}
                        </span>
                      )}
                      {tier.price.startsWith("Custom") ? (
                        tier.price
                      ) : (
                        <>
                          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {"\u00A3"}{tier.price}
                          </span>
                        </>
                      )}
                    </p>
                    {tier.highlighted && (
                      <Badge
                        variant="outline"
                        className="mt-3 w-fit text-xs no-default-active-elevate"
                      >
                        Most Popular
                      </Badge>
                    )}
                    <ul className="mt-6 space-y-3 flex-1">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className={`w-full mt-6 ${tier.highlighted ? "bg-accent text-accent-foreground border-accent-border" : ""}`}
                      variant={tier.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link
                        href="/contact"
                        data-testid={`button-pricing-${tier.name.toLowerCase()}`}
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="use-cases"
        className="py-16 md:py-20"
        data-testid="section-webapps-use-cases"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              data-testid="text-use-cases-title"
            >
              Use Cases
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real-world applications we have built and can build for you.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {useCases.map((useCase) => (
              <motion.div key={useCase.title} variants={itemVariants}>
                <Card
                  className="hover-elevate h-full"
                  data-testid={`card-usecase-${useCase.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-webapps-faq"
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              data-testid="text-faq-title"
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              data-testid="faq-accordion"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-testid={`faq-item-${i}`}
                >
                  <AccordionTrigger className="text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        data-testid="section-webapps-testimonial"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-8 md:p-12">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <blockquote
                  className="text-lg md:text-xl leading-relaxed"
                  data-testid="text-testimonial-quote"
                >
                  House of Developers transformed our idea into a fully
                  functional SaaS platform in record time. The attention to
                  scalability and code quality was exceptional — our app handles
                  thousands of concurrent users without breaking a sweat.
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary"
                    aria-hidden="true"
                  >
                    AC
                  </div>
                  <div>
                    <div
                      className="font-semibold"
                      data-testid="text-testimonial-name"
                    >
                      Alex Chen
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Founder at TaskFlow
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <PageCTA title="Ready to Build Your Web Application?" />
    </>
  );
}
