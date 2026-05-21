import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import {
  ArrowRight,
  ExternalLink,
  Monitor,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

interface Project {
  id: number;
  name: string;
  url: string | null;
  description: string;
  category: string;
  categories: string[];
  tags: string[];
  tech: string[];
  results: string;
  color: string;
  isDesktop?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Tournetix",
    url: "https://tournetix.com",
    description:
      "Multi-tenant SaaS platform for tour operators to manage bookings, customers, and operations",
    category: "Web Apps",
    categories: ["Web Apps"],
    tags: ["SaaS", "Web App"],
    tech: ["React", "Node.js", "Supabase", "PostgreSQL", "Vercel"],
    results:
      "Full rebrand from BookingHub; dashboard redesigns; VAT/tax module; auto-complete booking system; Supabase RLS; PDF exports",
    color: "#3B82F6",
  },
  {
    id: 2,
    name: "House of Halmar",
    url: "https://www.houseofhalmar.co.uk",
    description:
      "Wedding marketplace for buying, selling, and renting pre-loved wedding items",
    category: "E-commerce",
    categories: ["E-commerce"],
    tags: ["E-commerce", "Marketplace"],
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Stripe Connect"],
    results:
      "Stripe payout system across 4 purchase/rental paths; admin controls; Somali bridal community focus; Royal Mail shipping",
    color: "#EC4899",
  },
  {
    id: 3,
    name: "Daymaniyat Tours",
    url: "https://daymaniyat.com",
    description:
      "Adventure & eco-tourism booking website for snorkeling, diving, and island tours in Muscat, Oman",
    category: "WordPress",
    categories: ["WordPress"],
    tags: ["WordPress", "Tourism"],
    tech: ["WordPress", "WP Travel Engine Pro", "SEO", "Google Search Console"],
    results:
      "Strong Search Console rankings; full site redesign & migration; tour booking system with multiple trip types",
    color: "#10B981",
  },
  {
    id: 4,
    name: "Poultry Farm Management System",
    url: null,
    description:
      "Windows desktop app for poultry farm owners to manage flocks, feed, mortality, sales, and reporting",
    category: "Desktop",
    categories: ["Desktop"],
    tags: ["Desktop App", "SaaS"],
    tech: ["Electron", "React", "TypeScript", "SQLite"],
    results:
      "PDF/Excel reports; multi-farm dashboard; backup/restore; full invoicing & credit management; subscription licensing",
    color: "#F59E0B",
    isDesktop: true,
  },
  {
    id: 5,
    name: "Zoha Home Aesthetics",
    url: "https://zoha.com.pk",
    description:
      "Pakistan-based home lighting & crystal lamp e-commerce store",
    category: "E-commerce",
    categories: ["E-commerce"],
    tags: ["Shopify", "E-commerce"],
    tech: ["Shopify", "Facebook Pixel", "GA4", "Liquid"],
    results:
      "Full store setup; FB Pixel & GA4 via Customer Events; product content; PKR price localization; seasonal product research",
    color: "#8B5CF6",
  },
  {
    id: 6,
    name: "RemoteDev",
    url: "https://remotedev.uk",
    description:
      "UK-based remote development agency offering web apps, mobile apps, MVPs, SEO, and digital marketing",
    category: "WordPress",
    categories: ["WordPress"],
    tags: ["WordPress", "Agency"],
    tech: ["WordPress", "PHP", "Cloudflare CDN"],
    results:
      "Full agency website with service pages, testimonials, and lead generation for UK startups",
    color: "#6366F1",
  },
  {
    id: 7,
    name: "OMNO AI",
    url: "https://www.omno.ai",
    description:
      "B2B AI solutions company offering NLP, computer vision, machine learning, and data analytics",
    category: "AI",
    categories: ["WordPress", "AI"],
    tags: ["WordPress", "AI"],
    tech: ["Next.js", "Node.js", "JavaScript", "Cloudflare"],
    results:
      "Corporate website for Pakistani-Swedish AI startup; showcasing AI products including Adlytic and RetailWizz",
    color: "#14B8A6",
  },
  {
    id: 8,
    name: "Adlytic AI",
    url: "https://www.adlytic.ai",
    description:
      "AI-powered video analytics platform — Google Analytics for physical retail stores",
    category: "AI",
    categories: ["Web Apps", "AI"],
    tags: ["Web App", "AI"],
    tech: [
      "Next.js",
      "Node.js",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Cloudflare",
    ],
    results:
      "Real-time footfall tracking; demographic analysis; heat mapping; POS integration; Google for Startups alumni",
    color: "#EF4444",
  },
];

const categories = [
  { id: "all", label: "All", count: 8 },
  { id: "Web Apps", label: "Web Apps", count: 2 },
  { id: "E-commerce", label: "E-commerce", count: 2 },
  { id: "WordPress", label: "WordPress", count: 3 },
  { id: "AI", label: "AI", count: 2 },
  { id: "Desktop", label: "Desktop", count: 1 },
];

const categoryBadgeColors: Record<string, string> = {
  "Web Apps":
    "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  "E-commerce":
    "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300",
  WordPress:
    "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
  AI: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300",
  Desktop:
    "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
};

function DesktopAppCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-background shadow-lg">
      <div className="bg-muted/50 border-b border-border px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-background border border-border rounded-md px-3 py-1.5 text-sm text-muted-foreground truncate">
          Poultry Farm Management System.exe
        </div>
      </div>

      <div className="relative h-[350px] md:h-[450px] lg:h-[500px] bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 flex items-center justify-center">
        <div className="text-center p-8 max-w-lg">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Monitor className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <span className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium">
            <Monitor className="w-4 h-4" />
            Windows Desktop Application
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <div>
      <SEO
        title="Our Portfolio | Projects We've Built"
        description="Explore our portfolio of 8 live projects. SaaS platforms, e-commerce stores, AI solutions, and WordPress sites built by House of Developers."
        canonical="/portfolio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Portfolio - House of Developers",
          description:
            "Portfolio of projects built by House of Developers",
          url: "https://houseofdevelopers.co.uk/portfolio",
          publisher: {
            "@type": "Organization",
            name: "House of Developers",
          },
        }}
      />

      {/* Hero */}
      <section className="py-20 md:py-24">
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block bg-muted text-foreground px-3 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            Our Work
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Real projects. Real results. See our work in action.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
          >
            From SaaS platforms and e-commerce stores to AI solutions and
            WordPress sites—browse the live projects we've built for businesses
            across the UK and beyond.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-8 justify-center"
          >
            {[
              { number: "8", label: "Projects" },
              { number: "5+", label: "Industries" },
              { number: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col text-center">
                <span className="text-3xl font-bold text-foreground">
                  {stat.number}
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="py-4 bg-muted sticky top-[72px] z-40 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                  activeFilter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeFilter === cat.id
                      ? "bg-primary-foreground/20"
                      : "bg-muted"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="space-y-12 md:space-y-16"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="space-y-5">
                    {/* Browser mockup / Desktop card */}
                    {project.isDesktop ? (
                      <DesktopAppCard project={project} />
                    ) : (
                      <BrowserMockup
                        url={project.url!}
                        title={project.name}
                      />
                    )}

                    {/* Project info */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold">
                            {project.name}
                          </h2>
                          <p className="text-muted-foreground mt-1">
                            {project.description}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-medium px-3 py-1.5 rounded-full flex-shrink-0 ${
                            categoryBadgeColors[project.category] ??
                            "bg-muted text-muted-foreground"
                          }`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Results */}
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Trophy className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{project.results}</span>
                      </div>

                      {/* CTA */}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                        >
                          Visit Live Site
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Divider between cards */}
                  {index < filteredProjects.length - 1 && (
                    <div className="border-b mt-12 md:mt-16" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground mb-8"
          >
            We'd love to add your project to this portfolio. Let's talk about
            what we can build together.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="h-14 px-8 text-base">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base"
              >
                View Our Services
              </Button>
            </Link>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm text-muted-foreground"
          >
            Free consultation · See if we're a good fit
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
