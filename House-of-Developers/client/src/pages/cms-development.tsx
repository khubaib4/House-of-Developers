import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle2,
  Zap,
  Clock,
  Edit3,
  Users,
  Palette,
  Plug,
  Lock,
  Award,
  Wrench,
  GraduationCap,
  Shield,
  Headphones,
  Star,
  TrendingUp,
  Globe,
  Search,
  Code2,
  Rocket,
  RefreshCw,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SplitFeatureShowcase } from "@/components/shared/SplitFeatureShowcase";
import { WebAppMockup } from "@/components/mockups/WebAppMockup";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { CTASection } from "@/components/ui/CTASection";

const platforms = [
  {
    logo: "https://cdn.simpleicons.org/wordpress/21759B",
    iconColor: "#21759B",
    name: "WordPress",
    tagline: "The world's most popular CMS",
    bestFor: "Blogs, Corporate Sites, E-commerce",
    features: [
      "60,000+ plugins available",
      "Full design control",
      "SEO-friendly architecture",
      "Scalable for any size site",
    ],
    delivery: "2-4 weeks",
    link: "/services/web-development/cms/wordpress",
  },
  {
    logo: "https://cdn.simpleicons.org/shopify/7AB55C",
    iconColor: "#7AB55C",
    name: "Shopify",
    tagline: "E-commerce made simple",
    bestFor: "Online Stores, Product Catalogs",
    features: [
      "Built-in payment processing",
      "Inventory management",
      "Mobile-optimized checkout",
      "App store for extensions",
    ],
    delivery: "2-3 weeks",
    link: "/services/web-development/cms/shopify",
  },
  {
    logo: "https://cdn.simpleicons.org/wix/0C6EFC",
    iconColor: "#0C6EFC",
    name: "Wix",
    tagline: "Drag-and-drop website builder",
    bestFor: "Small Businesses, Portfolios, Landing Pages",
    features: [
      "Visual drag-and-drop editor",
      "500+ templates",
      "Built-in hosting",
      "No coding required",
    ],
    delivery: "1-2 weeks",
    link: "/services/web-development/cms/wix",
  },
  {
    logo: "https://cdn.simpleicons.org/woocommerce/96588A",
    iconColor: "#96588A",
    name: "WooCommerce",
    tagline: "WordPress-powered e-commerce",
    bestFor: "WordPress E-commerce, Custom Stores",
    features: [
      "Full e-commerce functionality",
      "WordPress ecosystem",
      "Unlimited customization",
      "Payment gateway flexibility",
    ],
    delivery: "3-4 weeks",
    link: "/services/web-development/cms/woocommerce",
  },
  {
    logo: "https://cdn.simpleicons.org/webflow/4353FF",
    iconColor: "#4353FF",
    name: "Webflow",
    tagline: "Visual web design platform",
    bestFor: "Web Apps, Marketing Sites, Portfolios",
    features: [
      "Visual design & development",
      "CMS & hosting included",
      "Clean, production-ready code",
      "SEO & animation tools",
    ],
    delivery: "2-4 weeks",
    link: "/services/web-development/cms/webflow",
  },
];

const comparisonData = [
  { feature: "Best For", values: ["Blogs, Corporate", "E-commerce", "Small Business", "WP E-commerce", "Marketing Sites"] },
  { feature: "Ease of Use", values: [4, 5, 5, 3, 4] },
  { feature: "Customization", values: [5, 4, 3, 5, 5] },
  { feature: "E-commerce", values: [4, 5, 4, 5, 3] },
  { feature: "SEO Tools", values: [5, 4, 3, 5, 4] },
  { feature: "Monthly Cost", values: ["From £10", "From £25", "From £15", "From £10", "From £14"] },
  { feature: "Hosting", values: ["Self-hosted", "Included", "Included", "Self-hosted", "Included"] },
  { feature: "Plugins/Apps", values: ["60,000+", "8,000+", "500+", "Same as WP", "Integrations"] },
  { feature: "Mobile App", values: ["Via plugins", "Native apps", "Mobile editor", "Via plugins", "Responsive"] },
  { feature: "Support", values: ["Community", "24/7", "24/7", "Community", "Email & Chat"] },
  { feature: "Learning Curve", values: ["Medium", "Easy", "Easy", "Medium", "Medium"] },
  { feature: "Scalability", values: ["Excellent", "Excellent", "Good", "Excellent", "Excellent"] },
];

const useCases = [
  {
    platform: "WordPress",
    title: "Corporate Blog for Tech Startup",
    description: "Custom WordPress site with 50+ blog posts, team management, and newsletter integration.",
    results: ["+200% organic traffic", "1.2s load time"],
    tech: ["WordPress", "Elementor", "Yoast SEO"],
  },
  {
    platform: "Shopify",
    title: "Fashion E-commerce Store",
    description: "Complete Shopify store with 500+ products, custom checkout, and subscription model.",
    results: ["£50K first month", "4.8% conversion"],
    tech: ["Shopify", "Klaviyo", "ReCharge"],
  },
  {
    platform: "Wix",
    title: "Portfolio for Creative Agency",
    description: "Stunning portfolio site with client login area and project showcases.",
    results: ["10 new clients", "98% mobile score"],
    tech: ["Wix", "Velo", "Wix Bookings"],
  },
  {
    platform: "WooCommerce",
    title: "B2B Wholesale Platform",
    description: "WordPress + WooCommerce for wholesale orders with custom pricing and bulk ordering.",
    results: ["1000+ SKUs", "Automated invoicing"],
    tech: ["WooCommerce", "WP All Import", "Stripe"],
  },
  {
    platform: "Bubble",
    title: "SaaS Marketplace MVP",
    description: "No-code marketplace connecting freelancers with clients, built in 30 days.",
    results: ["500 users", "30-day MVP"],
    tech: ["Bubble", "Stripe", "SendGrid"],
  },
  {
    platform: "WordPress",
    title: "Membership Site with Courses",
    description: "Learning platform with video courses, member areas, and payment integration.",
    results: ["200 members", "Recurring revenue"],
    tech: ["WordPress", "LearnDash", "MemberPress"],
  },
];

const whyChooseValues = [
  {
    icon: Award,
    title: "Platform Certified",
    description: "Official certifications and partnerships with leading CMS platforms",
    stat: "5 Platforms Mastered",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Most CMS projects delivered in 2-4 weeks, not months",
    stat: "2-4 Week Average",
  },
  {
    icon: Wrench,
    title: "Custom Development",
    description: "We build custom plugins, themes, and integrations unique to your needs",
  },
  {
    icon: GraduationCap,
    title: "Team Training Included",
    description: "Comprehensive training so your team can manage content confidently",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Regular updates, backups, SSL, and proactive security monitoring",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Post-launch support packages to keep your CMS running smoothly",
  },
];

const testimonials = [
  {
    quote: "House of Developers migrated our entire blog to WordPress and improved our page speed by 300%. The custom theme they built is exactly what we needed.",
    author: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechVision Ltd",
    rating: 5,
    project: "WordPress Blog Migration",
  },
  {
    quote: "Our Shopify store went live in 3 weeks. Sales increased 80% in the first month thanks to their optimized checkout flow and mobile design.",
    author: "James Peterson",
    role: "Founder",
    company: "Urban Threads",
    rating: 5,
    project: "Shopify E-commerce Store",
  },
  {
    quote: "We needed a no-code solution fast. Bubble was the perfect choice and House of Developers built our MVP in 30 days. Now we have paying customers!",
    author: "Amanda Chen",
    role: "CEO",
    company: "ConnectHub",
    rating: 5,
    project: "Bubble Marketplace MVP",
  },
];

const faqs = [
  {
    q: "Which CMS platform is best for my business?",
    a: "It depends on your needs. WordPress is great for blogs and corporate sites. Shopify is best for e-commerce. Wix is perfect for small businesses who want simplicity. WooCommerce is ideal if you want e-commerce on WordPress. Bubble is best for web apps and SaaS MVPs. We'll recommend the right platform during our consultation.",
  },
  {
    q: "Can I manage the content myself after launch?",
    a: "Absolutely! That's the whole point of a CMS. We provide comprehensive training so you and your team can easily update content, add pages, upload images, and manage your site without any coding knowledge.",
  },
  {
    q: "What if I want to switch platforms later?",
    a: "We can migrate your content to a different CMS if needed. While it requires some work, it's definitely possible. We'll help you choose the right platform from the start to avoid this.",
  },
  {
    q: "Do you provide ongoing support after launch?",
    a: "Yes! We offer monthly support packages that include updates, backups, security monitoring, and content assistance. Packages start at £200/month.",
  },
  {
    q: "Can you integrate my CMS with other tools?",
    a: "Yes, we integrate with email marketing (Mailchimp, Klaviyo), CRM (HubSpot, Salesforce), payment gateways (Stripe, PayPal), analytics (Google Analytics), and more.",
  },
  {
    q: "How long does a CMS project take?",
    a: "Simple sites: 1-2 weeks. Standard sites: 2-4 weeks. Complex sites: 4-8 weeks. We'll give you an accurate timeline after understanding your requirements.",
  },
  {
    q: "What's included in the cost?",
    a: "CMS setup, custom design/theme, content migration, plugin/app setup, training, and 30 days of post-launch support. Hosting and domain costs are separate.",
  },
  {
    q: "Can you redesign my existing CMS site?",
    a: "Yes! We can redesign your existing WordPress, Shopify, or other CMS site with a fresh look, improved performance, and new features.",
  },
  {
    q: "Do you build custom plugins or themes?",
    a: "Yes, if your project requires custom functionality beyond existing plugins, we build custom solutions tailored to your needs.",
  },
  {
    q: "What if I have an existing website?",
    a: "We can migrate your existing content to the new CMS, preserving URLs for SEO and ensuring a smooth transition with minimal downtime.",
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Discovery & Setup",
    points: [
      "Requirements analysis, platform selection, and recommendation",
      "Domain, hosting setup, CMS installation and configuration",
      "Initial theme or template selection to match your goals",
    ],
  },
  {
    icon: Palette,
    title: "Design & Customization",
    points: [
      "Custom theme development or extensive template customization",
      "Brand integration with your colors, fonts, and logo",
      "Responsive page templates and layouts for all devices",
    ],
  },
  {
    icon: Code2,
    title: "Content & Integrations",
    points: [
      "Content migration from your existing site or fresh creation",
      "Plugin and app installation, payment gateway setup",
      "Analytics, SEO tools, and third-party integrations",
    ],
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    points: [
      "Cross-browser and device testing with performance optimization",
      "Comprehensive team training on CMS content management",
      "Go-live deployment and post-launch support",
    ],
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CMSDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="CMS Development UK | WordPress, Shopify & More"
        description="Expert CMS development services. WordPress, Shopify, Wix, WooCommerce, and Webflow. Custom themes, plugins, and integrations. Free consultation."
        canonical="/services/cms-development"
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Web Development", href: "/services/web-development" },
          { label: "CMS Development" },
        ]}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24" data-testid="section-cms-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge
                variant="secondary"
                className="mb-4"
                data-testid="badge-cms"
              >
                Content Management Systems
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Content Management Systems That{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Empower Your Team
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                From WordPress to Shopify, we build CMS solutions that let you
                manage content without touching code. Choose the right platform
                for your needs, or let us recommend one.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { value: "50+", label: "CMS Projects" },
                  { value: "5", label: "Platforms" },
                  { value: "2-4", label: "Week Delivery" },
                ].map((stat) => (
                  <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  onClick={() => handleScrollTo("platforms")}
                  data-testid="cta-compare-platforms"
                >
                  Compare Platforms
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" data-testid="cta-book-consultation">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {platforms.slice(0, 4).map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    >
                      <Card
                        className="p-6 text-center hover-elevate"
                        data-testid={`hero-platform-${p.name.toLowerCase()}`}
                      >
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                          <img src={p.logo} alt={p.name} className="h-7 w-7" />
                        </div>
                        <div className="font-semibold mt-3">{p.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {p.tagline}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is CMS Section */}
      <section className="py-20 bg-muted" data-testid="section-what-is-cms">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge variant="secondary" className="mb-4">
            The Basics
          </Badge>
          <h2 className="text-3xl font-bold">
            What is a Content Management System?
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto leading-relaxed">
            A CMS lets you create, manage, and publish content on your website
            without writing code. Perfect for teams who need to update content
            frequently -- blog posts, products, pages, images -- all through an
            intuitive interface.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Edit3,
                title: "Easy Editing",
                description:
                  "Drag-and-drop page builders, visual editors, and WYSIWYG interfaces",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Multiple users, role-based permissions, workflow management",
              },
              {
                icon: Zap,
                title: "No Code Required",
                description:
                  "Your team can make changes instantly without developer help",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="p-8 text-center h-full" data-testid={`cms-feature-${i}`}>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Cards Section */}
      <section
        id="platforms"
        className="py-20"
        data-testid="section-platforms"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Choose Your Platform</h2>
            <p className="text-muted-foreground mt-2">
              We specialize in 5 leading CMS platforms. Each has unique
              strengths.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {platforms.map((platform) => (
                <motion.div key={platform.name} variants={staggerItem}>
                  <Card
                    className="p-8 h-full flex flex-col hover-elevate"
                    data-testid={`platform-card-${platform.name.toLowerCase()}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <img src={platform.logo} alt={platform.name} className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mt-6">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {platform.tagline}
                    </p>

                    <Badge variant="secondary" className="mt-4 w-fit">
                      Best for: {platform.bestFor}
                    </Badge>

                    <ul className="mt-6 space-y-2 flex-1">
                      {platform.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Typical: {platform.delivery}</span>
                    </div>

                    <Link href={platform.link} className="mt-8">
                      <Button
                        variant="outline"
                        className="w-full"
                        data-testid={`explore-${platform.name.toLowerCase()}`}
                      >
                        Explore {platform.name}
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section
        className="py-20 bg-muted"
        data-testid="section-comparison-table"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Platform Comparison</h2>
            <p className="text-muted-foreground mt-2">
              Compare features side-by-side
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm" data-testid="comparison-table">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-semibold sticky left-0 bg-primary z-10 min-w-[140px]">
                    Feature
                  </th>
                  {platforms.map(
                    (p) => (
                      <th
                        key={p.name}
                        className="text-center p-4 font-semibold min-w-[110px]"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <img src={p.logo} alt={p.name} className="h-5 w-5 brightness-0 invert" />
                          <span>{p.name}</span>
                        </div>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, rowIdx) => (
                  <tr
                    key={row.feature}
                    className={rowIdx % 2 === 0 ? "bg-card" : "bg-muted/50"}
                    data-testid={`comparison-row-${row.feature.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <td className="p-4 font-medium sticky left-0 z-10 bg-inherit">
                      {row.feature}
                    </td>
                    {row.values.map((value, colIdx) => (
                      <td key={colIdx} className="p-4 text-center">
                        {typeof value === "number" ? (
                          <StarRating rating={value} />
                        ) : (
                          <span className="text-muted-foreground">
                            {value}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Split Feature Showcase */}
      <section className="py-20" data-testid="section-approach">
        <SplitFeatureShowcase
          badge="Our Approach"
          title="We Don't Just Install -- We Build Custom Solutions"
          description="Off-the-shelf themes aren't enough. We customize every CMS to match your brand, optimize performance, and integrate with your existing tools."
          features={[
            {
              icon: Palette,
              title: "Custom Design",
              description:
                "Bespoke themes and layouts tailored to your brand identity",
            },
            {
              icon: Zap,
              title: "Performance Optimization",
              description:
                "Fast loading times, caching, CDN integration, and image optimization",
            },
            {
              icon: Plug,
              title: "Third-Party Integrations",
              description:
                "CRM, email marketing, analytics, payment gateways -- all connected",
            },
            {
              icon: Lock,
              title: "Security & Maintenance",
              description:
                "Regular updates, backups, SSL certificates, and monitoring",
            },
          ]}
          mockupType="browser"
          mockupContent={<WebAppMockup />}
          reversed={false}
        />
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="How We Build Your CMS"
            subtitle="Our proven process for CMS projects"
            steps={zigzagSteps}
            accentColor="#3B82F6"
          />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">CMS Solutions We've Built</h2>
            <p className="text-muted-foreground mt-2">
              Real projects, real results
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {useCases.map((uc, i) => (
              <motion.div key={i} variants={staggerItem}>
                <Card
                  className="p-6 h-full flex flex-col hover-elevate"
                  data-testid={`use-case-${i}`}
                >
                  <Badge variant="secondary" className="w-fit">
                    {uc.platform}
                  </Badge>

                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center mt-4">
                    <Globe className="h-12 w-12 text-primary/20" />
                  </div>

                  <h3 className="text-xl font-semibold mt-4">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">
                    {uc.description}
                  </p>

                  <div className="flex items-center gap-4 mt-4 flex-wrap">
                    {uc.results.map((result) => (
                      <div
                        key={result}
                        className="flex items-center gap-1 text-xs"
                      >
                        <TrendingUp className="h-3 w-3 text-accent" />
                        <span className="font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-4 flex-wrap">
                    {uc.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose House of Developers for CMS"
            subtitle="We're not just installers -- we're CMS experts"
            values={whyChooseValues}
            columns={3}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <TestimonialSlider
            title="What Our CMS Clients Say"
            testimonials={testimonials}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions About CMS Development
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-4 bg-card"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="text-left font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" data-testid="section-final-cta">
        <div className="max-w-7xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Ready to Build Your CMS?"
            description="Book a free consultation and we'll help you choose the right platform and build a content management system that empowers your team."
            primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
            secondaryCTA={{ text: "Compare Platforms", link: "#platforms" }}
            showContactInfo
            size="large"
          />
        </div>
      </section>
    </>
  );
}
