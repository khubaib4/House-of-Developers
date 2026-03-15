import { PricingCard } from "@/components/ui/PricingCard";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { TechStackGrid } from "@/components/ui/TechStackGrid";
import { FeatureShowcaseCard } from "@/components/ui/FeatureShowcaseCard";
import { TestimonialSlider } from "@/components/ui/TestimonialSlider";
import { BeforeAfterComparison } from "@/components/ui/BeforeAfterComparison";
import { PackageIncludes } from "@/components/ui/PackageIncludes";
import { CTASection } from "@/components/ui/CTASection";
import { ValueProposition } from "@/components/ui/ValueProposition";
import {
  Globe,
  Code2,
  Smartphone,
  Shield,
  Zap,
  Database,
  Lock,
  Layout,
  Rocket,
  Users,
  Clock,
  HeartHandshake,
  Timer,
  TrendingUp,
  Palette,
  Server,
} from "lucide-react";

const pricingData = [
  {
    packageName: "Starter",
    price: "From £3,000",
    description: "Perfect for small projects and MVPs",
    features: ["5-page responsive website", "Basic SEO setup", "Contact form integration", "1 month support"],
    billingCycle: "one-time",
  },
  {
    packageName: "Professional",
    price: "From £8,000",
    description: "Full-featured web application",
    features: ["Custom web application", "User authentication", "Database integration", "API development", "3 months support"],
    isPopular: true,
    billingCycle: "one-time",
  },
  {
    packageName: "Enterprise",
    price: "Custom Quote",
    description: "Large-scale enterprise solutions",
    features: ["Microservices architecture", "CI/CD pipeline", "Load balancing", "24/7 monitoring", "Dedicated team"],
  },
];

const comparisonColumns = [
  { name: "Starter" },
  { name: "Professional", highlight: true },
  { name: "Enterprise" },
];

const comparisonRows = [
  { feature: "Custom Design", values: [true, true, true] },
  { feature: "Responsive Layout", values: [true, true, true] },
  { feature: "CMS Integration", values: [false, true, true] },
  { feature: "API Development", description: "Custom REST or GraphQL APIs", values: [false, true, true] },
  { feature: "Dedicated Support", values: ["Email", "Priority", "24/7"] },
  { feature: "Revisions", values: ["2", "5", "Unlimited"] },
];

const timelineSteps = [
  {
    phase: "Week 1",
    title: "Discovery & Planning",
    description: "We analyse your requirements and create a detailed project plan.",
    deliverables: ["Requirements document", "Technical architecture", "Project timeline"],
    duration: "5 days",
  },
  {
    phase: "Week 2-3",
    title: "Design & Prototyping",
    description: "Creating wireframes and high-fidelity designs for your approval.",
    deliverables: ["Wireframes", "UI/UX design", "Interactive prototype"],
    duration: "10 days",
  },
  {
    phase: "Week 4-6",
    title: "Development & Testing",
    description: "Building and testing your application with regular progress updates.",
    deliverables: ["Frontend development", "Backend API", "QA testing"],
    duration: "15 days",
  },
];

const techItems = [
  { name: "React", icon: Globe, category: "Frontend" },
  { name: "Vue.js", icon: Layout, category: "Frontend" },
  { name: "Node.js", icon: Code2, category: "Backend" },
  { name: "Python", icon: Server, category: "Backend" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "TypeScript", icon: Layout, category: "Language" },
  { name: "AWS", icon: Shield, category: "Cloud" },
  { name: "Docker", icon: Zap, category: "DevOps" },
];

const testimonials = [
  {
    quote: "House of Developers transformed our idea into a fully functional MVP in just 4 weeks. The quality exceeded our expectations.",
    author: "James Mitchell",
    role: "CEO",
    company: "TechStart UK",
    rating: 5,
    project: "SaaS MVP Platform",
  },
  {
    quote: "Their team delivered a complex e-commerce platform on time and within budget. Highly recommended for any serious project.",
    author: "Sarah Chen",
    role: "Founder",
    company: "StyleHub",
    rating: 5,
    project: "E-commerce Platform",
  },
  {
    quote: "Working with HoD felt like having an in-house team. Communication was excellent throughout the entire project.",
    author: "David Thompson",
    role: "CTO",
    company: "FinanceFlow",
    rating: 4,
    project: "Fintech Dashboard",
  },
];

const metrics = [
  { label: "Page Load Time", before: "4.2s", after: "0.8s", improvement: "-81%", icon: Timer },
  { label: "Bounce Rate", before: "68%", after: "23%", improvement: "-66%", icon: TrendingUp },
  { label: "Conversion Rate", before: "1.2%", after: "4.8%", improvement: "+300%", icon: TrendingUp },
  { label: "Organic Traffic", before: "500/mo", after: "2,400/mo", improvement: "+380%", icon: Users },
];

const packageCategories = [
  {
    name: "Design & UX",
    icon: Palette,
    description: "Everything you need for a polished user experience",
    features: [
      { name: "Custom UI Design", description: "Tailored to your brand" },
      { name: "Mobile Responsive" },
      { name: "Dark Mode Support" },
      { name: "Design System", description: "Reusable component library" },
    ],
  },
  {
    name: "Development",
    icon: Code2,
    description: "Full-stack development with modern technologies",
    features: [
      { name: "Frontend Development" },
      { name: "Backend API", description: "REST or GraphQL" },
      { name: "Database Design" },
      { name: "Third-party Integrations" },
    ],
  },
  {
    name: "Security",
    icon: Lock,
    description: "Enterprise-grade security measures",
    features: [
      { name: "SSL Certificate" },
      { name: "Input Validation" },
      { name: "DDoS Protection" },
      { name: "Penetration Testing", description: "Annual security audit" },
    ],
  },
];

const valueItems = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "We deliver production-ready projects in weeks, not months. Our agile process ensures rapid iteration and quick time-to-market.",
    stat: "4 Weeks",
    statLabel: "Average MVP delivery",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Every project gets a senior developer, designer, and project manager working exclusively on your product.",
    stat: "98%",
    statLabel: "Client satisfaction rate",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "We provide post-launch support, monitoring, and maintenance to keep your application running smoothly.",
    stat: "99.9%",
    statLabel: "Uptime guaranteed",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Process",
    description: "Regular updates, clear communication, and full visibility into project progress from day one.",
    stat: "150+",
    statLabel: "Projects delivered",
  },
];

export default function ComponentDemo() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
      <section>
        <h2 className="text-3xl font-bold mb-8">CTA Sections</h2>
        <div className="space-y-8">
          <CTASection
            variant="default"
            title="Ready to Build Your Next Project?"
            description="Get a free consultation and project estimate from our expert team."
            primaryCTA={{ text: "Book a Consultation", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
            secondaryCTA={{ text: "View Our Work", link: "/services" }}
            icon={Rocket}
          />
          <CTASection
            variant="gradient"
            title="Let's Build Something Amazing"
            description="Join 150+ businesses who trust us to deliver world-class digital products."
            primaryCTA={{ text: "Start Your Project", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
            secondaryCTA={{ text: "Learn More", link: "/services" }}
            showContactInfo
            size="large"
          />
          <CTASection
            variant="bordered"
            title="Need a Quick Quote?"
            description="Tell us about your project and receive a detailed proposal within 24 hours."
            primaryCTA={{ text: "Get a Quote", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
            size="small"
          />
          <CTASection
            variant="minimal"
            title="Have Questions?"
            description="Our team is here to help. Reach out anytime."
            primaryCTA={{ text: "Contact Us", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
            showContactInfo
            size="small"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Value Proposition</h2>
        <ValueProposition
          title="Why Choose House of Developers"
          subtitle="We combine technical expertise with business acumen to deliver results that matter."
          values={valueItems}
          columns={4}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Pricing Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {pricingData.map((pkg) => (
            <PricingCard key={pkg.packageName} {...pkg} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Comparison Table</h2>
        <ComparisonTable columns={comparisonColumns} rows={comparisonRows} />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Process Timeline (Vertical)</h2>
        <ProcessTimeline
          title="Our Development Process"
          subtitle="A proven methodology that delivers results on time and within budget."
          steps={timelineSteps}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Process Timeline (Horizontal)</h2>
        <ProcessTimeline
          title="Quick Overview"
          steps={timelineSteps}
          layout="horizontal"
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Tech Stack (Flat)</h2>
        <TechStackGrid
          title="Our Technology Stack"
          description="We use the latest technologies to build performant and scalable applications."
          items={techItems}
          columns={4}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Tech Stack (Grouped)</h2>
        <TechStackGrid
          title="Technologies by Category"
          items={techItems}
          columns={4}
          showCategories
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Feature Showcase</h2>
        <div className="space-y-8">
          <FeatureShowcaseCard
            icon={Zap}
            title="Lightning Fast Performance"
            description="Our applications are built for speed. We use server-side rendering, edge caching, and optimised assets to ensure your users get the fastest experience possible."
            benefits={[
              "Average page load times under 1 second",
              "99.9% uptime guaranteed",
              "Global CDN distribution",
              "Optimised for Core Web Vitals",
            ]}
          />
          <FeatureShowcaseCard
            icon={Shield}
            title="Enterprise Security"
            description="We implement industry-standard security practices including encryption at rest, secure authentication flows, and regular vulnerability assessments."
            benefits={[
              "GDPR compliant data handling",
              "SOC 2 ready architecture",
              "End-to-end encryption",
              "Regular security audits",
            ]}
            reversed
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <TestimonialSlider
          title="What Our Clients Say"
          testimonials={testimonials}
          autoPlay={false}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Before / After</h2>
        <BeforeAfterComparison
          title="Measurable Impact"
          description="Real results from our recent website redesign project."
          metrics={metrics}
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Package Includes (Accordion)</h2>
        <PackageIncludes
          title="What's Included"
          subtitle="Every project comes with a comprehensive set of deliverables."
          categories={packageCategories}
          layout="accordion"
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Package Includes (Tabs)</h2>
        <PackageIncludes
          title="Browse by Category"
          categories={packageCategories}
          layout="tabs"
        />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Package Includes (Grid)</h2>
        <PackageIncludes
          title="Everything at a Glance"
          categories={packageCategories}
          layout="grid"
        />
      </section>
    </div>
  );
}
