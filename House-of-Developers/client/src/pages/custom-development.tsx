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
  Code2,
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  Wrench,
  Plug,
  RefreshCw,
  Settings,
  Server,
  Link2,
  Zap,
  Activity,
  Shield,
  BarChart,
  Database,
  Globe,
  FileText,
  Quote,
  Package,
  GitBranch,
  Workflow,
  HardDrive,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageCTA } from "@/components/shared/PageCTA";
import { SplitFeatureShowcase } from "@/components/shared/SplitFeatureShowcase";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

const overviewCards = [
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description: "Custom control panels tailored to your operational needs with real-time data and intuitive interfaces.",
  },
  {
    icon: Wrench,
    title: "Internal Tools",
    description: "Workflow automation and internal productivity tools that streamline your team's daily operations.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Connect disparate systems and third-party services into a unified, seamless workflow.",
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    description: "Update outdated systems with modern architecture while preserving your business logic and data.",
  },
];

const keyFeatures = [
  {
    icon: Code2,
    title: "Custom Business Logic",
    description: "Tailored algorithms and processes that match your exact business requirements.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline complex multi-step processes.",
  },
  {
    icon: Plug,
    title: "Third-Party Integrations",
    description: "Seamless connections with CRMs, ERPs, payment gateways, and more.",
  },
  {
    icon: Activity,
    title: "Real-Time Features",
    description: "Live dashboards, notifications, and data syncing across your platform.",
  },
  {
    icon: Shield,
    title: "Role-Based Permissions",
    description: "Granular access control to protect sensitive data and operations.",
  },
  {
    icon: BarChart,
    title: "Advanced Reporting",
    description: "Custom analytics dashboards with exportable reports and visualizations.",
  },
  {
    icon: Database,
    title: "Data Migration",
    description: "Safe, structured migration from legacy systems with zero data loss.",
  },
  {
    icon: Globe,
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for performance and scalability.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Comprehensive technical documentation and user guides for your team.",
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Discovery & Requirements",
    tasks: [
      "Stakeholder interviews and workshops",
      "Business process mapping",
      "Technical requirements gathering",
      "Scope definition and prioritization",
      "Project roadmap creation",
    ],
  },
  {
    step: "Step 2",
    title: "Solution Architecture",
    tasks: [
      "System design and data modelling",
      "Technology stack selection",
      "Integration architecture planning",
      "Security and compliance review",
      "Development environment setup",
    ],
  },
  {
    step: "Step 3",
    title: "Iterative Development",
    tasks: [
      "Agile sprint-based development",
      "Regular demos and feedback sessions",
      "Continuous integration and delivery",
      "Code reviews and quality checks",
      "Progress tracking and reporting",
    ],
  },
  {
    step: "Step 4",
    title: "Testing & Integration",
    tasks: [
      "Unit and integration testing",
      "User acceptance testing (UAT)",
      "Performance and load testing",
      "Security penetration testing",
      "Third-party system integration testing",
    ],
  },
  {
    step: "Step 5",
    title: "Deployment & Handover",
    tasks: [
      "Production environment setup",
      "Data migration and validation",
      "Team training and onboarding",
      "Documentation delivery",
      "Post-launch support and monitoring",
    ],
  },
];

const pricingTiers = [
  {
    name: "Small Project",
    price: "5,000",
    description: "Simple tools and basic features for straightforward requirements.",
    highlighted: false,
    features: [
      "Single-purpose tool or dashboard",
      "Basic CRUD functionality",
      "Up to 3 third-party integrations",
      "Responsive design",
      "30 days post-launch support",
    ],
  },
  {
    name: "Medium Project",
    price: "15,000",
    description: "Complex workflows and multi-feature platforms for growing businesses.",
    highlighted: true,
    features: [
      "Multi-module application",
      "Complex business logic and workflows",
      "Role-based access control",
      "Advanced reporting and analytics",
      "Up to 8 third-party integrations",
      "60 days post-launch support",
    ],
  },
  {
    name: "Large Project",
    price: null,
    description: "Enterprise solutions with advanced architecture and scale requirements.",
    highlighted: false,
    features: [
      "Enterprise-grade architecture",
      "Microservices and event-driven design",
      "Custom API development",
      "Full data migration strategy",
      "Unlimited integrations",
      "Dedicated ongoing support",
    ],
  },
];

const useCases = [
  {
    icon: Package,
    title: "Inventory Management System",
    description: "Real-time stock tracking, automated reordering, supplier management, and warehouse optimization with barcode scanning integration.",
  },
  {
    icon: GitBranch,
    title: "Custom CRM Platform",
    description: "Tailored customer relationship management with pipeline tracking, automated follow-ups, and deep analytics for your sales team.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation Tool",
    description: "Automate complex business processes with conditional logic, approval chains, notifications, and integration with existing systems.",
  },
  {
    icon: HardDrive,
    title: "Data Processing Pipeline",
    description: "High-performance data ingestion, transformation, and analysis pipelines with real-time monitoring and error handling.",
  },
];

const faqs = [
  {
    q: "What does your custom development process look like?",
    a: "We follow a structured five-phase approach: Discovery, Architecture, Iterative Development, Testing, and Deployment. Each phase includes regular check-ins and demos so you always know exactly where your project stands.",
  },
  {
    q: "How long does a typical custom project take?",
    a: "Timelines vary based on complexity. Small projects typically take 4-6 weeks, medium projects 8-12 weeks, and large enterprise solutions 3-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Absolutely. We specialise in connecting new solutions with existing tools, databases, APIs, and third-party services. We assess all integration points during the architecture phase.",
  },
  {
    q: "What happens after the project is delivered?",
    a: "Every project includes a post-launch support period. After that, we offer ongoing maintenance packages, dedicated developer arrangements, or ad-hoc support as needed.",
  },
  {
    q: "Who owns the intellectual property?",
    a: "You do. All source code, designs, documentation, and assets are yours from day one. We provide full repository access and transfer all rights upon project completion.",
  },
  {
    q: "How do you communicate during development?",
    a: "We use Slack or Teams for daily communication, weekly video calls for demos and reviews, and a shared project board for tracking progress. You always have direct access to your development team.",
  },
  {
    q: "How do you choose the right technology stack?",
    a: "We recommend technologies based on your specific requirements, scalability needs, team expertise, and long-term maintenance considerations. We are stack-agnostic and choose what works best for your project.",
  },
  {
    q: "Can the solution scale as our business grows?",
    a: "Yes. We design with scalability in mind from the start, using cloud-native architectures, efficient database design, and modular code that can be extended as your needs evolve.",
  },
];

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

export default function CustomDevelopmentPage() {
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
          { label: "Custom Development" },
        ]}
      />

      <section className="relative" data-testid="section-custom-dev-hero">
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
              data-testid="badge-custom-development"
            >
              <Code2 className="h-3.5 w-3.5 mr-1.5" />
              Custom Development
            </Badge>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
              data-testid="text-custom-dev-title"
            >
              Custom Software Development for Unique Business Needs
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Bespoke solutions tailored to your specific requirements. From internal tools to complex integrations, we build what off-the-shelf can't.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {[
                { value: "100+ Projects", label: "Delivered" },
                { value: "98% Satisfaction", label: "Client Rating" },
                { value: "UK Based", label: "Development Team" },
              ].map((stat) => (
                <div key={stat.value} data-testid={`stat-${stat.value.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="text-lg font-bold">{stat.value}</span>
                  <span className="text-sm text-muted-foreground ml-1.5">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground border-accent-border"
                asChild
              >
                <Link href="/contact" data-testid="button-custom-dev-start-project">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo("use-cases")}
                data-testid="button-custom-dev-view-examples"
              >
                View Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-custom-dev-overview">
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
              data-testid="text-what-we-build-title"
            >
              What We Build
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From dashboards to data pipelines, we deliver solutions that fit your business perfectly.
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
        badge="Custom Solutions"
        title="Built Exactly How You Need It"
        description="Every project is architected from the ground up to match your workflows, integrations, and scaling requirements."
        features={[
          { icon: Settings, title: "Custom Workflows", description: "Business processes mapped and automated to your exact specifications." },
          { icon: Server, title: "Scalable Architecture", description: "Cloud-native infrastructure that grows with your business demands." },
          { icon: Plug, title: "API-First Design", description: "Clean, documented APIs that make integration and extension effortless." },
          { icon: Link2, title: "Integration Ready", description: "Built to connect seamlessly with your existing tools and services." },
        ]}
        mockupType="dashboard"
        mockupContent={<DashboardMockup />}
        reversed
      />

      <section
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-custom-dev-features"
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
              data-testid="text-key-features-title"
            >
              Key Features We Deliver
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every custom solution includes the capabilities your business needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {keyFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="flex flex-col"
                data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold mt-4">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        data-testid="section-custom-dev-process"
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
              Our Development Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A proven methodology that delivers results on time and on budget.
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
                      {i + 1}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge
                          variant="outline"
                          className="text-xs no-default-active-elevate"
                        >
                          {step.step}
                        </Badge>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {step.tasks.map((task) => (
                          <li
                            key={task}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
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
        data-testid="section-custom-dev-pricing"
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
              Project Pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transparent pricing based on project scope and complexity.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingTiers.map((tier) => (
              <motion.div key={tier.name} variants={itemVariants}>
                <Card
                  className={`h-full ${tier.highlighted ? "border-2 border-primary" : ""}`}
                  data-testid={`card-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {tier.name}
                    </p>
                    <p className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                      {tier.price ? (
                        <>
                          From{" "}
                          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {"\u00A3"}{tier.price}
                          </span>
                        </>
                      ) : (
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          Custom Quote
                        </span>
                      )}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {tier.description}
                    </p>
                    <ul className="mt-6 space-y-3 flex-1">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className={`w-full mt-8 ${tier.highlighted ? "bg-accent text-accent-foreground border-accent-border" : ""}`}
                      variant={tier.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link
                        href="/contact"
                        data-testid={`button-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {tier.price ? "Get Started" : "Request Quote"}
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
        data-testid="section-custom-dev-use-cases"
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
              Examples of custom solutions we have delivered for businesses like yours.
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
                  data-testid={`card-use-case-${useCase.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <useCase.icon className="h-5 w-5 text-primary" />
                    </div>
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
        data-testid="section-custom-dev-faq"
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

      <section className="py-16 md:py-20" data-testid="section-custom-dev-testimonial">
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
                <blockquote className="text-lg md:text-xl leading-relaxed">
                  House of Developers delivered exactly what we needed — a custom platform that replaced three separate tools and cut our processing time in half. Their team understood our requirements from day one and the final product exceeded expectations.
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">JT</span>
                  </div>
                  <div>
                    <p className="font-semibold" data-testid="text-testimonial-author">
                      James Thompson
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CTO at LogiTech
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <PageCTA
        title="Ready to Build Your Custom Solution?"
        subtitle="Let's discuss your project. Book a free consultation and we'll show you how we can bring your vision to life."
      />
    </>
  );
}
