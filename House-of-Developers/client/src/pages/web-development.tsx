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
import { PageCTA } from "@/components/shared/PageCTA";
import { SplitFeatureShowcase } from "@/components/shared/SplitFeatureShowcase";
import { WebAppMockup } from "@/components/mockups/WebAppMockup";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Layout,
  Layers,
  FileText,
  Zap,
  Search,
  Smartphone,
  Shield,
  Code2,
  Database,
  Gauge,
  Lock,
  Palette,
  Plug,
  BarChart,
  Headphones,
  Quote,
} from "lucide-react";

const overviewCards = [
  {
    icon: Globe,
    title: "Corporate Websites",
    description: "Professional, responsive websites that represent your brand and drive conversions.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and boost campaigns.",
  },
  {
    icon: Layers,
    title: "SaaS Platforms",
    description: "Scalable web applications with authentication, billing, and real-time features.",
  },
  {
    icon: FileText,
    title: "Headless CMS",
    description: "Content-driven platforms with flexible APIs and seamless editorial workflows.",
  },
];

const keyFeatures = [
  { icon: Code2, title: "Modern Frameworks", description: "Built with React, Next.js, and TypeScript for maintainable, future-proof codebases." },
  { icon: Database, title: "Scalable Backend", description: "Node.js, PostgreSQL, and cloud-native architectures that grow with your business." },
  { icon: Gauge, title: "Performance Optimization", description: "Sub-3-second load times with lazy loading, code splitting, and CDN delivery." },
  { icon: Lock, title: "Enterprise Security", description: "OWASP best practices, SSL, CSRF protection, and regular security audits." },
  { icon: Smartphone, title: "Progressive Web Apps", description: "Offline-capable, installable web apps that work across all devices." },
  { icon: Palette, title: "Custom Design", description: "Bespoke UI/UX design tailored to your brand with pixel-perfect implementation." },
  { icon: Plug, title: "API Integrations", description: "Seamless connections with payment gateways, CRMs, analytics, and third-party services." },
  { icon: BarChart, title: "Analytics Built-In", description: "Google Analytics, custom dashboards, and conversion tracking from day one." },
  { icon: Headphones, title: "Ongoing Support", description: "Dedicated post-launch support, monitoring, and maintenance packages available." },
];

const timeline = [
  {
    week: "Week 1-2",
    title: "Discovery & Planning",
    tasks: [
      "Stakeholder interviews and requirements gathering",
      "Competitive analysis and market research",
      "Information architecture and sitemap creation",
      "Technical specification document",
      "Project timeline and milestone definition",
    ],
  },
  {
    week: "Week 2-3",
    title: "Design & Prototyping",
    tasks: [
      "Wireframing and user flow mapping",
      "Design system and component library creation",
      "High-fidelity mockups for all pages",
      "Interactive prototype for stakeholder review",
      "Design revisions and final approval",
    ],
  },
  {
    week: "Week 3-5",
    title: "Development",
    tasks: [
      "Frontend development with responsive design",
      "Backend API and database architecture",
      "CMS integration and content migration",
      "Third-party service integrations",
      "Performance optimization and caching",
    ],
  },
  {
    week: "Week 5-6",
    title: "Testing & QA",
    tasks: [
      "Cross-browser and cross-device testing",
      "Performance and load testing",
      "Security audit and vulnerability scanning",
      "Accessibility compliance review",
      "User acceptance testing",
    ],
  },
  {
    week: "Week 6-8",
    title: "Launch & Deployment",
    tasks: [
      "Production environment setup",
      "DNS configuration and SSL certificates",
      "Final deployment and go-live",
      "Post-launch monitoring and bug fixes",
      "Handover documentation and training",
    ],
  },
];

const pricingTiers = [
  {
    tier: "Starter",
    name: "Landing Page",
    price: "£3,000",
    highlighted: false,
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "2 rounds of revisions",
    ],
    cta: "Get Started",
  },
  {
    tier: "Professional",
    name: "Corporate Website",
    price: "£8,000",
    highlighted: true,
    features: [
      "Up to 15 pages",
      "Custom design system",
      "CMS integration",
      "Advanced SEO optimization",
      "Analytics dashboard",
      "3 months support",
    ],
    cta: "Get Started",
  },
  {
    tier: "Enterprise",
    name: "SaaS Platform",
    price: "Custom Quote",
    highlighted: false,
    features: [
      "Unlimited pages and features",
      "User authentication and roles",
      "Payment gateway integration",
      "Real-time features",
      "API development",
      "Dedicated support team",
    ],
    cta: "Contact Us",
  },
];

const useCases = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with inventory management, payment processing, and order tracking for a UK retail brand.",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "SaaS Dashboard",
    description: "An analytics dashboard for a fintech startup with real-time data visualisation, user roles, and automated reporting.",
    techStack: ["React", "Node.js", "WebSockets", "Chart.js"],
  },
  {
    title: "Marketing Agency Site",
    description: "A high-performance marketing website with headless CMS, blog, case studies, and lead generation tools.",
    techStack: ["Next.js", "Sanity CMS", "Vercel", "Framer Motion"],
  },
  {
    title: "Booking Platform",
    description: "An appointment scheduling platform with calendar integration, automated reminders, and payment processing.",
    techStack: ["React", "Node.js", "PostgreSQL", "Twilio"],
  },
];

const faqs = [
  {
    q: "What technologies do you use for web development?",
    a: "We primarily use React, Next.js, and TypeScript for the frontend, paired with Node.js and PostgreSQL on the backend. We also work with Vue.js, Angular, and other frameworks based on project requirements.",
  },
  {
    q: "How long does a typical web development project take?",
    a: "Landing pages typically take 2-3 weeks, corporate websites 4-6 weeks, and complex SaaS platforms 8-12 weeks. We provide a detailed timeline during the discovery phase.",
  },
  {
    q: "Do you provide hosting and domain setup?",
    a: "Yes, we handle all hosting setup including cloud infrastructure on AWS, Vercel, or your preferred provider. We also assist with domain registration and DNS configuration.",
  },
  {
    q: "Can you work with our existing designs?",
    a: "Absolutely. We can develop from your existing Figma, Sketch, or Adobe XD files. We can also refine or create designs from scratch if needed.",
  },
  {
    q: "Do you offer ongoing maintenance after launch?",
    a: "Yes, we offer flexible maintenance packages including security updates, performance monitoring, bug fixes, and feature additions. Our Professional tier includes 3 months of support.",
  },
  {
    q: "Will our website be mobile-friendly?",
    a: "Every website we build is fully responsive and optimised for all screen sizes. We follow a mobile-first development approach to ensure the best experience across devices.",
  },
  {
    q: "Can you integrate with our existing tools and services?",
    a: "Yes, we regularly integrate with CRMs, payment gateways, email marketing platforms, analytics tools, and custom APIs. We have experience with most major third-party services.",
  },
  {
    q: "Do we own the source code?",
    a: "Yes, 100%. All source code, designs, and assets are fully transferred to you upon project completion. You have complete ownership and control.",
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

export default function WebDevelopmentPage() {
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
          { label: "Web Development" },
        ]}
      />

      <section className="relative" data-testid="section-web-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-15 dark:opacity-10"
            style={{
              background:
                "radial-gradient(circle, hsl(210 100% 50% / 0.3) 0%, transparent 70%)",
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
              data-testid="badge-web-development"
            >
              <Globe className="h-3.5 w-3.5 mr-1.5" />
              Web Development
            </Badge>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
              data-testid="text-web-title"
            >
              High-Performance Web Applications That Scale
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              From corporate websites to complex SaaS platforms, we build fast,
              secure, and scalable web applications that deliver results. Our UK-based
              team combines modern frameworks with proven engineering practices.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {[
                { label: "<3s Load Time", icon: Zap },
                { label: "99.9% Uptime", icon: Shield },
                { label: "SEO Optimized", icon: Search },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  data-testid={`stat-${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                >
                  <stat.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground border-accent-border"
                asChild
              >
                <Link href="/contact" data-testid="button-web-start-project">
                  Start Your Project
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo("use-cases")}
                data-testid="button-web-view-examples"
              >
                View Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-web-overview">
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
              data-testid="text-web-overview-title"
            >
              What We Build
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
        badge="Enterprise Architecture"
        title="Built for Performance and Scale"
        description="Every web application we build is engineered for speed, accessibility, and long-term maintainability."
        features={[
          { icon: Zap, title: "Lightning Fast", description: "Optimised builds, lazy loading, and edge caching for sub-3-second load times." },
          { icon: Search, title: "SEO Ready", description: "Server-side rendering, structured data, and semantic HTML for maximum visibility." },
          { icon: Smartphone, title: "Mobile First", description: "Responsive design that delivers a flawless experience on every device." },
          { icon: Shield, title: "Security Hardened", description: "HTTPS, CSRF protection, input validation, and regular security audits." },
        ]}
        mockupType="browser"
        mockupContent={<WebAppMockup />}
      />

      <section
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-web-features"
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
              data-testid="text-web-features-title"
            >
              Why Choose Our Web Development
            </h2>
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

      <section className="py-16 md:py-20" data-testid="section-web-process">
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
              data-testid="text-web-process-title"
            >
              Our Web Development Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From concept to launch in 6-8 weeks.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {timeline.map((step, i) => (
              <motion.div
                key={step.week}
                variants={itemVariants}
                className="relative"
                data-testid={`timeline-step-${i + 1}`}
              >
                {i < timeline.length - 1 && (
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
                          {step.week}
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
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-web-pricing"
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
              data-testid="text-web-pricing-title"
            >
              Transparent Pricing
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingTiers.map((tier) => (
              <motion.div key={tier.tier} variants={itemVariants}>
                <Card
                  className={tier.highlighted ? "border-2 border-primary h-full" : "h-full"}
                  data-testid={`card-pricing-${tier.tier.toLowerCase()}`}
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {tier.tier}
                    </p>
                    <h3 className="text-xl font-bold mt-2">{tier.name}</h3>
                    <p className="mt-4 text-3xl font-bold tracking-tight">
                      {tier.price === "Custom Quote" ? (
                        tier.price
                      ) : (
                        <>
                          From{" "}
                          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {tier.price}
                          </span>
                        </>
                      )}
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
                      className={
                        tier.highlighted
                          ? "w-full mt-8 bg-accent text-accent-foreground border-accent-border"
                          : "w-full mt-8"
                      }
                      variant={tier.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link
                        href="/contact"
                        data-testid={`button-pricing-${tier.tier.toLowerCase()}`}
                      >
                        {tier.cta}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            All packages include source code ownership and hosting setup.
          </p>
        </div>
      </section>

      <section
        id="use-cases"
        className="py-16 md:py-20"
        data-testid="section-web-use-cases"
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
              data-testid="text-web-use-cases-title"
            >
              What We've Built
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {useCases.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card
                  className="hover-elevate h-full"
                  data-testid={`card-usecase-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs no-default-active-elevate"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-web-faq"
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
              data-testid="text-web-faq-title"
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
              data-testid="web-faq-accordion"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-testid={`web-faq-item-${i}`}
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

      <section className="py-16 md:py-20" data-testid="section-web-testimonial">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card data-testid="card-testimonial">
              <CardContent className="p-8 md:p-12 text-center">
                <Quote className="h-8 w-8 text-primary/30 mx-auto mb-6" />
                <blockquote className="text-lg md:text-xl leading-relaxed italic">
                  House of Developers delivered our SaaS platform on time and
                  under budget. Their technical expertise and communication were
                  outstanding.
                </blockquote>
                <p className="mt-6 font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">
                  CEO at TechStart
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <PageCTA
        title="Ready to Start Your Web Project?"
        subtitle="Book a free consultation to discuss your requirements."
      />
    </>
  );
}
