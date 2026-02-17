import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Globe,
  Code2,
  Layout,
  Smartphone,
  Brain,
  FileText,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Database,
  Cloud,
  Shield,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageCTA } from "@/components/shared/PageCTA";
import { SplitFeatureShowcase } from "@/components/shared/SplitFeatureShowcase";
import { WebAppMockup } from "@/components/mockups/WebAppMockup";

const services = [
  {
    icon: Rocket,
    title: "30-Day MVP Program",
    description:
      "Launch your startup in 30 days. We handle discovery, design, development, cloud setup, and launch — everything you need to go from idea to market.",
    deliverables: [
      "Discovery workshop & strategy session",
      "UI/UX design & prototyping",
      "Core feature development (web or mobile)",
      "Cloud infrastructure & deployment",
      "Post-launch support & iterations",
    ],
    href: "/services/build-mvp",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "From corporate websites to high-performance web applications. We build fast, scalable, and conversion-optimized web platforms.",
    deliverables: [
      "Custom web applications & SaaS platforms",
      "Corporate websites & landing pages",
      "Headless CMS integration",
      "E-commerce solutions",
      "Performance optimization & SEO",
    ],
    href: "/services/web-development",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Bespoke solutions for unique business needs. Admin dashboards, internal tools, API integrations, and complex web applications.",
    deliverables: [
      "Custom web applications from scratch",
      "Admin dashboards & CMS systems",
      "Third-party API integrations",
      "Real-time systems & WebSocket apps",
      "Database design & optimization",
    ],
    href: "/services/custom-development",
  },
  {
    icon: Layout,
    title: "Web Applications",
    description:
      "Full-stack SaaS platforms and web apps built for scale. Real-time features, payment integration, and enterprise-grade architecture.",
    deliverables: [
      "Complete SaaS platform development",
      "User authentication & authorization",
      "Payment gateway integration (Stripe, PayPal)",
      "Real-time features & notifications",
      "Multi-tenant architecture",
    ],
    href: "/services/web-apps",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native iOS, Android, and cross-platform mobile apps. Beautiful interfaces, smooth performance, app store deployment.",
    deliverables: [
      "iOS & Android native development",
      "React Native cross-platform apps",
      "App Store & Play Store deployment",
      "Push notifications & analytics",
      "Backend API development",
    ],
    href: "/services/mobile-development",
  },
  {
    icon: Brain,
    title: "AI Integration & Automation",
    description:
      "AI-powered features that transform your business. Chatbots, automation systems, intelligent workflows, and AI agents.",
    deliverables: [
      "AI chatbots & virtual assistants",
      "Business process automation",
      "Workflow automation systems",
      "Custom AI agent development",
      "Integration with OpenAI, Claude, etc.",
    ],
    href: "/services/ai-services",
  },
  {
    icon: FileText,
    title: "CMS Development",
    description:
      "Content management systems for easy website updates. WordPress, Shopify, and headless CMS solutions.",
    deliverables: [
      "WordPress with modern page builders",
      "Shopify store development",
      "Headless CMS (Contentful, Sanity)",
      "Custom theme development",
      "Plugin customization & integration",
    ],
    href: "/services/cms-development",
  },
  {
    icon: Users,
    title: "Hire Dedicated Developers",
    description:
      "Scale your team with vetted developers. Full-time or part-time, integrated with your workflow, managed by us.",
    deliverables: [
      "Pre-vetted senior developers",
      "Full-time or part-time engagement",
      "Direct communication & collaboration",
      "Project management included",
      "Flexible hiring models",
    ],
    href: "/services/hire-developers",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth Marketing",
    description:
      "Technical SEO, content optimization, and growth strategies to drive organic traffic and conversions.",
    deliverables: [
      "Technical SEO audit & fixes",
      "On-page optimization",
      "Local SEO for UK businesses",
      "Content strategy & optimization",
      "Performance tracking & reporting",
    ],
    href: "/services/seo-services",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We understand your vision, goals, and technical requirements.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "UI/UX design and prototyping for validation before development.",
  },
  {
    number: 3,
    title: "Build",
    description: "Agile development with weekly updates and demos.",
  },
  {
    number: 4,
    title: "Launch",
    description: "Deployment, testing, and go-live support.",
  },
  {
    number: 5,
    title: "Support",
    description: "Post-launch monitoring, updates, and iterations.",
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

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />

      <section className="relative" data-testid="section-services-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-15 dark:opacity-10"
            style={{
              background:
                "radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-10 dark:opacity-5"
            style={{
              background:
                "radial-gradient(circle, hsl(152 100% 39% / 0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm"
              data-testid="badge-services"
            >
              What We Do
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
            data-testid="text-services-hero-title"
          >
            Services Built for Startups & Scale
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            From MVP to enterprise. We build digital products that startups need
            to launch, scale, and succeed.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-all-services">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card
                  className="h-full hover-elevate transition-all duration-200"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <p className="font-semibold mb-3">What's Included:</p>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={service.href}>
                      <Button
                        variant="ghost"
                        className="mt-6 -ml-4"
                        data-testid={`link-learn-more-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-process"
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
              data-testid="text-process-title"
            >
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From discovery to launch, we've got you covered.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center relative"
                data-testid={`process-step-${step.number}`}
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-border" />
                )}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0 relative z-10">
                  {step.number}
                </div>
                <h3 className="font-semibold mt-4">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SplitFeatureShowcase
        badge="Tech Stack"
        title="Enterprise-Grade Architecture"
        description="We use proven, scalable technologies that grow with your business."
        features={[
          { icon: Code2, title: "Modern Frameworks", description: "Next.js, React, Node.js - battle-tested and fast." },
          { icon: Database, title: "Scalable Databases", description: "PostgreSQL, MongoDB - designed for millions of users." },
          { icon: Cloud, title: "Cloud Infrastructure", description: "AWS, Vercel - 99.99% uptime guaranteed." },
          { icon: Shield, title: "Security First", description: "SSL, encryption, GDPR compliance built-in." },
        ]}
        mockupType="browser"
        mockupContent={<WebAppMockup />}
      />

      <PageCTA
        title="Ready to Start Your Project?"
        subtitle="Book a free consultation and let's discuss how we can help you build your next digital product."
      />
    </>
  );
}
