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
import {
  Rocket,
  ArrowRight,
  CheckCircle2,
  Search,
  Palette,
  Code2,
  Cloud,
  TestTube,
  Headphones,
  Clock,
  Layers,
  Shield,
  Calendar,
  Users,
  Activity,
  MessageSquare,
  FileText,
  Download,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageCTA } from "@/components/shared/PageCTA";
import { SplitFeatureShowcase } from "@/components/shared/SplitFeatureShowcase";
import { MVPTimelineMockup } from "@/components/mockups/MVPTimelineMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

const features = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "Full discovery workshop, competitive analysis, and feature prioritization.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Complete design system, wireframes, and high-fidelity prototypes.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Frontend, backend, database, authentication — everything.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS/Vercel setup, CI/CD pipelines, and production deployment.",
  },
  {
    icon: TestTube,
    title: "Testing & QA",
    description:
      "Comprehensive testing, bug fixes, and performance optimization.",
  },
  {
    icon: Headphones,
    title: "Launch Support",
    description:
      "Go-live support and 30 days of post-launch maintenance.",
  },
];

const timeline = [
  {
    week: "Week 1",
    title: "Discovery & Design",
    tasks: [
      "Kickoff meeting & requirements gathering",
      "User research & competitive analysis",
      "Wireframing & user flow mapping",
      "Design system creation",
      "High-fidelity mockups & prototypes",
    ],
  },
  {
    week: "Week 2",
    title: "Core Development",
    tasks: [
      "Frontend development setup",
      "Backend architecture & API design",
      "Database schema & models",
      "Authentication & user management",
      "Core feature implementation (50%)",
    ],
  },
  {
    week: "Week 3",
    title: "Feature Completion",
    tasks: [
      "Complete all core features",
      "Third-party integrations",
      "Payment gateway setup (if needed)",
      "Admin dashboard development",
      "Internal testing & bug fixes",
    ],
  },
  {
    week: "Week 4",
    title: "Testing & Launch",
    tasks: [
      "QA testing & bug fixing",
      "Performance optimization",
      "Security audit",
      "Production deployment",
      "Launch & handover",
    ],
  },
];

const pricingFeatures = [
  "Everything listed above",
  "30 days delivery guarantee",
  "Source code ownership",
  "Post-launch support included",
  "No monthly fees",
];

const faqs = [
  {
    q: "What if my MVP needs more than 30 days?",
    a: "We scope projects to fit 30 days. If you need additional features, we can extend or add them post-launch.",
  },
  {
    q: "Do I own the source code?",
    a: "Yes, 100%. All code, designs, and assets are yours.",
  },
  {
    q: "What tech stack do you use?",
    a: "We recommend Next.js, Node.js, and PostgreSQL — but we adapt based on your needs.",
  },
  {
    q: "Can you work with my existing design?",
    a: "Absolutely. We can start from your designs or create new ones.",
  },
  {
    q: "What happens after 30 days?",
    a: "You get 30 days of free support. After that, we offer maintenance packages or dedicated developers.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, we're happy to sign NDAs before any discussion.",
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

export default function BuildMVPPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO
        title="MVP Development London & Croydon"
        description="MVP development in London & Croydon. Launch in 30 days. Perfect for London startups. 150+ MVPs delivered. Free consultation."
        canonical="/services/build-mvp"
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Build MVP" },
        ]}
      />

      <section className="relative" data-testid="section-mvp-hero">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-15 dark:opacity-10"
            style={{
              background:
                "radial-gradient(circle, hsl(152 100% 39% / 0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge
                variant="outline"
                className="mb-6 px-4 py-1.5 text-sm bg-accent/10 border-accent/30"
                data-testid="badge-mvp-program"
              >
                <Rocket className="h-3.5 w-3.5 mr-1.5" />
                30-Day MVP Program
              </Badge>
              <h1
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
                data-testid="text-mvp-title"
              >
                MVP Development Agency in London
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Stop waiting. Stop overthinking. We build launch-ready MVPs in
                30 days — from discovery to deployment. No shortcuts, just smart
                execution.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground border-accent-border"
                  onClick={() => handleScrollTo("contact")}
                  data-testid="button-mvp-cta-primary"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleScrollTo("pricing")}
                  data-testid="button-mvp-see-pricing"
                >
                  See Pricing
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="rounded-md bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 dark:from-primary/5 dark:to-accent/5 border border-border p-10 flex flex-col items-center justify-center min-h-[320px]">
                  <Rocket className="h-16 w-16 text-muted-foreground/40 mb-6" />
                  <div className="grid grid-cols-3 gap-6 w-full">
                    {[
                      { icon: Clock, label: "30 Days to Launch" },
                      { icon: Layers, label: "Full Stack Included" },
                      { icon: Shield, label: "Post-Launch Support" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-2">
                          <stat.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-mvp-features">
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
              data-testid="text-mvp-features-title"
            >
              Everything You Need to Launch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No hidden costs. No surprises. Everything included.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
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
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-mvp-timeline"
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
              data-testid="text-timeline-title"
            >
              The 30-Day Breakdown
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Week by week, here's what happens.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {timeline.map((week, i) => (
              <motion.div
                key={week.week}
                variants={itemVariants}
                className="relative"
                data-testid={`timeline-${week.week.toLowerCase().replace(/\s+/g, "-")}`}
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
                          {week.week}
                        </Badge>
                        <h3 className="text-xl font-bold">{week.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {week.tasks.map((task) => (
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

      <SplitFeatureShowcase
        badge="30-Day Timeline"
        title="Track Every Milestone, Every Day"
        description="Our project management system keeps you updated on every stage of development."
        features={[
          { icon: Calendar, title: "Week-by-Week Breakdown", description: "Clear milestones for each of the 4 weeks." },
          { icon: Users, title: "Daily Stand-ups", description: "Quick updates and demos throughout the build." },
          { icon: CheckCircle2, title: "Automated Testing", description: "QA and testing at every stage." },
          { icon: Rocket, title: "Launch Checklist", description: "Pre-launch verification and go-live support." },
        ]}
        mockupType="calendar"
        mockupContent={<MVPTimelineMockup />}
        reversed
      />

      <SplitFeatureShowcase
        title="Built-In Project Management"
        description="Get access to our client portal where you can track development, communicate with the team, and see live progress."
        features={[
          { icon: Activity, title: "Live Updates", description: "See what's being built in real-time." },
          { icon: MessageSquare, title: "Direct Communication", description: "Chat directly with your dev team." },
          { icon: FileText, title: "Documentation Hub", description: "All specs, designs, and docs in one place." },
          { icon: Download, title: "Instant Deploys", description: "Preview your MVP at any stage." },
        ]}
        mockupType="dashboard"
        mockupContent={<DashboardMockup />}
      />

      <section
        id="pricing"
        className="py-16 md:py-20"
        data-testid="section-mvp-pricing"
      >
        <div className="max-w-4xl mx-auto px-6">
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
              Simple, Transparent Pricing
            </h2>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card
              className="border-2 border-primary"
              data-testid="card-pricing"
            >
              <CardContent className="p-8 md:p-10 text-center">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  30-Day MVP Program
                </p>
                <p className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
                  Starting from{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    £15,000
                  </span>
                </p>
                <p className="mt-2 text-muted-foreground">
                  All-inclusive. No hidden fees.
                </p>
                <ul className="mt-8 space-y-3 text-left">
                  {pricingFeatures.map((feature) => (
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
                  className="w-full mt-8 bg-accent text-accent-foreground border-accent-border"
                  onClick={() => handleScrollTo("contact")}
                  data-testid="button-get-quote"
                >
                  Get Custom Quote
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Final pricing depends on complexity. Book a call for accurate
              estimate.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-mvp-faq"
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

      <PageCTA
        title="Ready to Launch Your MVP?"
        subtitle="Book your free consultation now and let's turn your idea into a launched product in 30 days."
      />
    </>
  );
}
