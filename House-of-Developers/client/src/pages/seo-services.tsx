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
  Target,
  FileSearch,
  TrendingUp,
  BarChart2,
  Globe,
  Link2,
  ArrowRight,
  Settings,
  FileText,
  MapPin,
  CheckCircle2,
  Quote,
  ShoppingCart,
  Building2,
  Store,
  Zap,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageCTA } from "@/components/shared/PageCTA";
import { SplitFeatureShowcase } from "@/components/shared/SplitFeatureShowcase";
import { SEODashboardMockup } from "@/components/mockups/SEODashboardMockup";

const features = [
  {
    icon: Target,
    title: "Keyword Research",
    description: "Find high-intent keywords your competitors are missing",
  },
  {
    icon: FileSearch,
    title: "Technical SEO",
    description: "Site speed, mobile optimization, schema markup",
  },
  {
    icon: TrendingUp,
    title: "Content Strategy",
    description: "SEO-optimized content that ranks and converts",
  },
  {
    icon: BarChart2,
    title: "Performance Tracking",
    description: "Monthly reports with clear metrics and ROI",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description: "Dominate local search results across the UK",
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Quality backlinks from authoritative domains",
  },
];

const overviewCards = [
  {
    icon: Settings,
    title: "Technical SEO",
    description: "Site speed, mobile optimization, core web vitals",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    description: "Content optimization, meta tags, internal linking",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Google My Business, local citations, reviews",
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Quality backlinks, guest posts, outreach",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "£800",
    period: "/month",
    description: "Small sites, local SEO",
    highlighted: false,
    features: [
      "Monthly audit",
      "On-page optimization",
      "Local SEO",
      "Monthly report",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "£1,500",
    period: "/month",
    description: "Competitive keywords",
    highlighted: true,
    features: [
      "Everything in Basic",
      "Content strategy",
      "Link building",
      "Competitor analysis",
      "Weekly reports",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "£3,000+",
    period: "/month",
    description: "Large sites, aggressive growth",
    highlighted: false,
    features: [
      "Everything in Growth",
      "Dedicated SEO manager",
      "Custom content",
      "Technical SEO overhaul",
      "Daily monitoring",
      "Quarterly strategy",
    ],
  },
];

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Store",
    metric: "150% traffic increase",
    description:
      "Optimized product pages, category structure, and schema markup to drive organic sales growth for a mid-size online retailer.",
    badges: ["Product SEO", "Schema Markup", "Content Strategy"],
  },
  {
    icon: Building2,
    title: "SaaS Company",
    metric: "Top 3 rankings",
    description:
      "Achieved top 3 positions for high-volume competitive keywords through technical optimization and strategic content creation.",
    badges: ["Technical SEO", "Link Building", "Keyword Research"],
  },
  {
    icon: Store,
    title: "Local Business",
    metric: "200% local visibility",
    description:
      "Dominated local search results with Google My Business optimization, local citations, and review management strategy.",
    badges: ["Local SEO", "Google My Business", "Citations"],
  },
  {
    icon: Zap,
    title: "Tech Startup",
    metric: "10x organic leads",
    description:
      "Built a content-driven SEO engine that scaled organic lead generation from near-zero to thousands of monthly visitors.",
    badges: ["Content Marketing", "On-Page SEO", "Analytics"],
  },
];

const faqs = [
  {
    q: "How long before I see SEO results?",
    a: "Most clients see measurable improvements within 3-6 months, with significant growth at 6-12 months.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "We don't guarantee specific rankings as that depends on many factors, but we guarantee improved visibility and traffic growth.",
  },
  {
    q: "What's included in an SEO audit?",
    a: "A comprehensive analysis of technical SEO, on-page optimization, content gaps, backlink profile, and competitor analysis.",
  },
  {
    q: "Do you work with e-commerce sites?",
    a: "Yes, we specialize in e-commerce SEO including product page optimization, category pages, and structured data.",
  },
  {
    q: "How do you report on progress?",
    a: "Monthly detailed reports with keyword rankings, traffic data, conversion metrics, and recommendations.",
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

export default function SEOServicesPage() {
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
          { label: "SEO Services" },
        ]}
      />

      <section className="relative" data-testid="section-seo-hero">
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
                data-testid="badge-seo-services"
              >
                <TrendingUp className="h-3.5 w-3.5 mr-1.5" />
                SEO & Growth
              </Badge>
              <h1
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
                data-testid="text-seo-title"
              >
                Data-Driven SEO That Delivers
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Our SEO strategies are backed by real data and proven to increase
                organic traffic by 150% on average.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground border-accent-border"
                  asChild
                >
                  <Link href="/contact" data-testid="button-seo-cta-primary">
                    Get Free SEO Audit
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleScrollTo("features")}
                  data-testid="button-seo-see-results"
                >
                  See Results
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
                  <TrendingUp className="h-16 w-16 text-muted-foreground/40 mb-6" />
                  <div className="grid grid-cols-3 gap-6 w-full">
                    {[
                      { icon: Target, label: "Keyword Research" },
                      { icon: BarChart2, label: "Analytics & ROI" },
                      { icon: Globe, label: "Local & National" },
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

      <section
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-seo-overview"
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
              data-testid="text-seo-overview-title"
            >
              What We Do
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A full-spectrum approach to search engine optimization.
            </p>
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
                  className="hover-elevate"
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

      <section
        id="features"
        className="py-16 md:py-20"
        data-testid="section-seo-features"
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
              data-testid="text-seo-features-title"
            >
              What's Included
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive SEO services to grow your organic presence.
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

      <SplitFeatureShowcase
        badge="Growth"
        title="See Your Rankings Climb"
        description="Our SEO strategies are backed by real data and proven to increase organic traffic by 150% on average."
        features={[
          {
            icon: Target,
            title: "Keyword Research",
            description:
              "Find high-intent keywords your competitors are missing.",
          },
          {
            icon: FileSearch,
            title: "Technical SEO",
            description:
              "Site speed, mobile optimization, schema markup.",
          },
          {
            icon: TrendingUp,
            title: "Content Strategy",
            description:
              "SEO-optimized content that ranks and converts.",
          },
          {
            icon: BarChart2,
            title: "Performance Tracking",
            description:
              "Monthly reports with clear metrics and ROI.",
          },
        ]}
        mockupType="browser"
        mockupContent={<SEODashboardMockup />}
        reversed
      />

      <section
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-seo-faq"
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
              data-testid="text-seo-faq-title"
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
              data-testid="seo-faq-accordion"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-testid={`seo-faq-item-${i}`}
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
        id="pricing"
        className="py-16 md:py-20 bg-muted/50"
        data-testid="section-seo-pricing"
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
              data-testid="text-seo-pricing-title"
            >
              SEO Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Flexible plans to match your goals and budget.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan) => (
              <motion.div key={plan.name} variants={itemVariants}>
                <Card
                  className={`hover-elevate ${plan.highlighted ? "border-2 border-primary" : ""}`}
                  data-testid={`card-pricing-${plan.name.toLowerCase()}`}
                >
                  <CardContent className="p-6 md:p-8">
                    {plan.highlighted && (
                      <Badge
                        variant="default"
                        className="mb-4 no-default-active-elevate"
                        data-testid="badge-popular"
                      >
                        Most Popular
                      </Badge>
                    )}
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {plan.name}
                    </p>
                    <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                      {plan.price}
                      <span className="text-base font-normal text-muted-foreground">
                        {plan.period}
                      </span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
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
                      className={`w-full mt-8 ${plan.highlighted ? "bg-accent text-accent-foreground border-accent-border" : ""}`}
                      variant={plan.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link
                        href="/contact"
                        data-testid={`button-pricing-${plan.name.toLowerCase()}`}
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
        data-testid="section-seo-use-cases"
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
              data-testid="text-seo-use-cases-title"
            >
              SEO Success Stories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real results from real clients across different industries.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {useCases.map((useCase) => (
              <motion.div key={useCase.title} variants={itemVariants}>
                <Card
                  className="hover-elevate"
                  data-testid={`card-use-case-${useCase.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <useCase.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{useCase.title}</h3>
                    <p className="text-sm font-semibold text-accent mt-1">
                      {useCase.metric}
                    </p>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {useCase.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="secondary"
                          className="text-xs no-default-active-elevate"
                        >
                          {badge}
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
        data-testid="section-seo-testimonial"
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Quote className="h-10 w-10 text-primary/30 mx-auto mb-6" />
            <blockquote
              className="text-xl md:text-2xl font-medium leading-relaxed"
              data-testid="text-seo-testimonial-quote"
            >
              House of Developers transformed our organic presence. Within six
              months, our traffic tripled and we started ranking for keywords we
              never thought possible. Their data-driven approach and transparent
              reporting made all the difference.
            </blockquote>
            <div className="mt-8">
              <p
                className="font-semibold"
                data-testid="text-seo-testimonial-author"
              >
                Mark Williams
              </p>
              <p className="text-sm text-muted-foreground">
                CMO at GrowthCo
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <PageCTA
        title="Ready to Grow Your Organic Traffic?"
        subtitle="Get a free SEO audit and discover untapped opportunities to rank higher and drive more traffic."
      />
    </>
  );
}
