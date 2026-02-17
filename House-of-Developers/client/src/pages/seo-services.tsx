import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  TrendingUp,
  Search,
  MapPin,
  BarChart2,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Settings,
  FileText,
  Link2,
  Code2,
  Globe,
  Target,
  Wrench,
  Users,
  Headphones,
  Briefcase,
  Heart,
  Building2,
  GraduationCap,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PageCTA } from "@/components/shared/PageCTA";
import SEODashboardMockup from "@/components/mockups/SEODashboardMockup";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";

const SEO_COLOR = "#10B981";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const seoServices = [
  {
    accent: "from-emerald-500 to-green-500",
    iconGradient: "from-emerald-500 to-green-600",
    icon: Search,
    badge: "Start Here",
    badgeClass: "bg-emerald-500/10 text-emerald-600",
    name: "SEO Audits",
    description: "A comprehensive deep-dive into your website's SEO health. We uncover every issue holding you back from page 1 rankings and give you a prioritised action plan.",
    includes: [
      "Full technical SEO analysis (150+ checkpoints)",
      "Keyword gap analysis vs competitors",
      "On-page optimisation audit",
      "Backlink profile review",
      "Core Web Vitals assessment",
      "Prioritised action plan with quick wins",
    ],
    bestFor: "Any business wanting to know exactly why they're not ranking",
    link: "/contact",
  },
  {
    accent: "from-blue-500 to-cyan-500",
    iconGradient: "from-blue-500 to-cyan-600",
    icon: Settings,
    badge: "Most Impactful",
    badgeClass: "bg-blue-500/10 text-blue-600",
    name: "Technical SEO",
    description: "Fix the under-the-hood issues that prevent Google from properly crawling, indexing, and ranking your website. The foundation every SEO strategy needs.",
    includes: [
      "Core Web Vitals optimisation",
      "Site speed improvements",
      "Crawl error fixes and XML sitemaps",
      "Structured data / schema markup",
      "Mobile-first optimisation",
      "Internal linking architecture",
    ],
    bestFor: "Websites with good content that still aren't ranking",
    link: "/contact",
  },
  {
    accent: "from-purple-500 to-violet-500",
    iconGradient: "from-purple-500 to-violet-600",
    icon: MapPin,
    badge: "High ROI",
    badgeClass: "bg-purple-500/10 text-purple-600",
    name: "Local SEO",
    description: "Dominate Google's local search results and Google Maps in your area. Get found by customers searching for your services nearby.",
    includes: [
      "Google Business Profile optimisation",
      "Local keyword targeting",
      "Local citation building",
      "Review generation strategy",
      "Local landing page creation",
      "Google Maps ranking optimisation",
    ],
    bestFor: "Businesses serving customers in specific locations",
    link: "/contact",
  },
];

const comparisonData = [
  { feature: "Costs per click", seo: "Free", seoIcon: "check", paid: "£0.50-£15", paidIcon: "x" },
  { feature: "Stops when you pause", seo: "No", seoIcon: "check", paid: "Yes", paidIcon: "x" },
  { feature: "Builds over time", seo: "Yes", seoIcon: "check", paid: "No", paidIcon: "x" },
  { feature: "Trust from users", seo: "High", seoIcon: "check", paid: "Low", paidIcon: "x" },
  { feature: "Long-term ROI", seo: "Excellent", seoIcon: "check", paid: "Poor", paidIcon: "x" },
  { feature: "Results timeline", seo: "3-6 months", seoIcon: "clock", paid: "Instant", paidIcon: "check" },
  { feature: "Compounding value", seo: "Yes", seoIcon: "check", paid: "No", paidIcon: "x" },
  { feature: "Brand authority", seo: "Builds", seoIcon: "check", paid: "Minimal", paidIcon: "x" },
];

const googleStats = [
  {
    number: "200+",
    title: "Google's Algorithm",
    desc: "Google uses 200+ signals to rank pages",
    pills: ["⚡ Page speed", "📱 Mobile usability", "🔗 Backlink quality", "📝 Content relevance"],
  },
  {
    number: "3.5B",
    title: "Daily Searches",
    desc: "3.5 billion Google searches happen every day",
    pills: ["🎯 Search intent matching", "🔑 Keyword optimisation", "📊 Click-through rate", "⏱ Dwell time"],
  },
  {
    number: "75%",
    title: "Page 1 or Nothing",
    desc: "75% of users never scroll past page 1",
    pills: ["#1 Gets 31% of all clicks", "#2 Gets 14% of clicks", "#3 Gets 8% of clicks", "#10 Gets 2% of clicks"],
  },
];

const timelineMilestones = [
  { label: "Month 1", desc: "Audit & technical fixes", filled: true },
  { label: "Month 2-3", desc: "On-page optimisation", filled: false },
  { label: "Month 3-4", desc: "First rankings appear", filled: false },
  { label: "Month 4-6", desc: "Page 1 for targets", filled: false },
  { label: "Month 6+", desc: "Compounding growth", filled: true },
];

const industries = [
  { icon: ShoppingBag, name: "E-Commerce", keyword: "\"buy [product] uk\"" },
  { icon: Briefcase, name: "Professional Services", keyword: "\"[service] near me\"" },
  { icon: Heart, name: "Healthcare", keyword: "\"private [treatment] london\"" },
  { icon: Building2, name: "Real Estate", keyword: "\"estate agent [location]\"" },
  { icon: Utensils, name: "Hospitality", keyword: "\"best restaurant [city]\"" },
  { icon: GraduationCap, name: "Education", keyword: "\"online [course] uk\"" },
];

const caseStudies = [
  {
    gradient: "from-emerald-600 to-green-600",
    icon: Briefcase,
    badge: "Professional Services",
    title: "Law Firm SEO Campaign",
    location: "Manchester, UK",
    description: "Comprehensive SEO campaign for a 12-solicitor law firm with zero digital presence. Technical audit revealed 47 critical issues. Full technical remediation, local SEO setup, and content strategy targeting high-intent legal keywords.",
    approach: [
      "🔧 Fixed 47 technical SEO issues",
      "📍 Set up and optimised Google Business Profile",
      "📝 Created 24 location and practice area pages",
      "🔗 Built 60 high-quality local citations",
      "📊 Targeting 35 high-intent legal keywords",
    ],
    duration: "Campaign duration: 8 months ongoing",
    tech: ["WordPress", "Yoast SEO", "Ahrefs", "GSC"],
  },
  {
    gradient: "from-emerald-600 to-teal-600",
    icon: ShoppingBag,
    badge: "E-Commerce",
    title: "Online Garden Centre SEO",
    location: "Yorkshire, UK",
    description: "Full SEO overhaul for a family-run garden centre expanding online. Site had 800 products but virtually no organic traffic. Technical SEO, category page optimisation, and seasonal content strategy targeting garden and plant keywords.",
    approach: [
      "⚡ Improved page speed from 42 to 91 (PageSpeed)",
      "🏷️ Optimised 800 product and 45 category pages",
      "📝 Built seasonal blog content strategy",
      "🗺️ Added structured data to all product pages",
      "📱 Fixed mobile usability across entire site",
    ],
    duration: "Campaign duration: 10 months ongoing",
    tech: ["WooCommerce", "Semrush", "Screaming Frog", "GTmetrix"],
  },
  {
    gradient: "from-emerald-600 to-blue-600",
    icon: MapPin,
    badge: "Local SEO",
    title: "Multi-Location Dental SEO",
    location: "London & Surrey, UK",
    description: "Local SEO campaign for a private dental group with 4 clinic locations. Required individual location strategies, Google Business Profile management, and review generation across all clinics targeting high-value dental keywords.",
    approach: [
      "📍 Optimised 4 separate Google Business Profiles",
      "📝 Built individual location landing pages",
      "⭐ Implemented review generation system",
      "🔗 Built 120 local citations across 4 locations",
      "🎯 Targeting 28 keywords per location (112 total)",
    ],
    duration: "Campaign duration: 12 months ongoing",
    tech: ["WordPress", "BrightLocal", "Google Business", "Ahrefs"],
  },
];

const faqs = [
  { q: "How long does SEO take to work?", a: "SEO typically takes 3-6 months to show meaningful results. Month 1-2: technical fixes and on-page optimisation. Month 3-4: rankings start to appear. Month 4-6: page 1 rankings for target keywords. Month 6+: compounding growth as authority builds. The timeline depends on your starting position, competition level, and how aggressively we implement." },
  { q: "How much does SEO cost?", a: "SEO pricing varies by scope. A one-time SEO audit starts from £997. Monthly SEO retainers typically range from £800-£3,000/month depending on competition, number of keywords, and content requirements. We provide detailed proposals after understanding your goals. SEO is an investment—most clients see positive ROI within 9-12 months." },
  { q: "What's the difference between Technical SEO and regular SEO?", a: "Regular SEO covers on-page factors (keywords, meta tags, content). Technical SEO fixes the under-the-hood issues that prevent Google from properly crawling and indexing your site—page speed, Core Web Vitals, crawl errors, structured data, mobile issues. Technical SEO is the foundation; without it, everything else is less effective." },
  { q: "Do you guarantee page 1 rankings?", a: "No ethical SEO agency can guarantee specific rankings—Google's algorithm is outside anyone's control. What we do guarantee: transparent work, proven methodology, and monthly reporting on real progress. Our track record speaks for itself—94% of clients reach page 1 within 6 months for their target keywords." },
  { q: "What is Local SEO and do I need it?", a: "Local SEO optimises your visibility in location-based searches ('plumber near me', 'dentist London'). If you serve customers in specific geographic areas, Local SEO is essential. It includes Google Business Profile optimisation, local citations, location pages, and review management. Businesses with physical locations or service areas need Local SEO." },
  { q: "What is an SEO audit?", a: "An SEO audit is a comprehensive analysis of your website covering 150+ technical and on-page factors. It identifies exactly what's preventing you from ranking higher—technical errors, slow pages, thin content, missing meta tags, crawl issues, backlink problems. You receive a prioritised action plan with quick wins and long-term recommendations." },
  { q: "Will you write content for us?", a: "Yes. Content creation is part of our SEO retainers. We create SEO-optimised blog posts, landing pages, and service pages targeting keywords your customers are searching for. All content is researched, human-written, and aligned with search intent—no AI-generated fluff." },
  { q: "Do you do link building?", a: "Yes, ethical white-hat link building is part of our SEO process. We build links through digital PR, guest posting on relevant sites, local citations, and supplier/partner links. We never buy links or use private blog networks—tactics that risk Google penalties." },
  { q: "Can you do SEO on any website platform?", a: "Yes. We've done SEO on WordPress, Shopify, WooCommerce, Wix, Squarespace, Webflow, and custom-built sites. Some platforms are more SEO-friendly than others—we'll advise if your platform is limiting your potential and whether a migration would be beneficial." },
  { q: "How do you measure SEO success?", a: "We track keyword rankings (position for target keywords), organic traffic (visitors from Google), click-through rates from Search Console, conversions from organic traffic, and domain authority growth. Monthly reports cover all metrics transparently—we never hide behind vanity numbers." },
  { q: "Will my rankings drop if I stop SEO?", a: "Rankings can decline over time without ongoing optimisation, particularly in competitive markets where competitors continue their SEO. However, good SEO builds lasting foundations—a well-optimised site with strong backlinks will hold rankings better than one built on quick fixes. We build for long-term resilience." },
  { q: "Do you work with businesses outside London?", a: "Absolutely. We work with businesses across the entire UK—London, Manchester, Birmingham, Leeds, Edinburgh, and everywhere in between. Most of our work is done remotely with monthly calls. For Local SEO, your location matters (we optimise for it). For national SEO, location is irrelevant." },
];

const techTabs = [
  {
    label: "Research & Analysis",
    technologies: [
      { name: "Ahrefs", slug: "ahrefs" },
      { name: "Semrush", slug: "semrush" },
      { name: "Moz", slug: "moz" },
      { name: "Majestic", slug: "majestic" },
      { name: "Google Search Console", slug: "googlesearchconsole" },
      { name: "Google Analytics", slug: "googleanalytics" },
      { name: "Screaming Frog", slug: "screamingfrog" },
      { name: "Sitebulb", slug: "sitebulb" },
    ],
  },
  {
    label: "Technical SEO",
    technologies: [
      { name: "Google Search Console", slug: "googlesearchconsole" },
      { name: "PageSpeed Insights", slug: "google" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "WordPress", slug: "wordpress" },
      { name: "Yoast SEO", slug: "yoastseo" },
      { name: "Schema.org", slug: "schemaorg" },
      { name: "GTmetrix", slug: "gtmetrix" },
      { name: "Lighthouse", slug: "lighthouse" },
    ],
  },
  {
    label: "Content & Keywords",
    technologies: [
      { name: "Ahrefs", slug: "ahrefs" },
      { name: "Semrush", slug: "semrush" },
      { name: "Google Trends", slug: "google" },
      { name: "AnswerThePublic", slug: "answerthepublic" },
      { name: "Surfer SEO", slug: "surferseo" },
      { name: "Clearscope", slug: "clearscope" },
      { name: "Frase", slug: "frase" },
      { name: "MarketMuse", slug: "marketmuse" },
    ],
  },
  {
    label: "Local SEO",
    technologies: [
      { name: "Google Business", slug: "googlemybusiness" },
      { name: "BrightLocal", slug: "brightlocal" },
      { name: "Whitespark", slug: "whitespark" },
      { name: "Moz Local", slug: "moz" },
      { name: "Yext", slug: "yext" },
      { name: "Google Maps", slug: "googlemaps" },
      { name: "Semrush", slug: "semrush" },
      { name: "Ahrefs", slug: "ahrefs" },
    ],
  },
  {
    label: "Reporting",
    technologies: [
      { name: "Google Analytics", slug: "googleanalytics" },
      { name: "Google Search Console", slug: "googlesearchconsole" },
      { name: "Google Data Studio", slug: "looker" },
      { name: "Ahrefs", slug: "ahrefs" },
      { name: "Semrush", slug: "semrush" },
      { name: "Hotjar", slug: "hotjar" },
      { name: "Microsoft Clarity", slug: "microsoftclarity" },
      { name: "Databox", slug: "databox" },
    ],
  },
];

const processSteps = [
  {
    icon: Search,
    title: "SEO Audit & Discovery",
    points: [
      "Full technical audit covering 150+ SEO checkpoints",
      "Competitor keyword gap and backlink analysis",
      "Opportunity mapping and priority action plan",
    ],
  },
  {
    icon: Target,
    title: "Strategy & Keyword Mapping",
    points: [
      "Target keyword research based on intent and volume",
      "Content gap analysis vs top-ranking competitors",
      "12-month SEO roadmap with clear milestones",
    ],
  },
  {
    icon: Wrench,
    title: "Implementation & Optimisation",
    points: [
      "Technical fixes, on-page optimisation, schema markup",
      "Content creation and existing page improvements",
      "Link building and local citation management",
    ],
  },
  {
    icon: BarChart2,
    title: "Report & Refine",
    points: [
      "Monthly ranking and traffic report with full transparency",
      "Strategy refinement based on what's working",
      "Continuous improvements compounding over time",
    ],
  },
];

function ComparisonIcon({ type }: { type: string }) {
  if (type === "check") return <CheckCircle2 className="inline text-green-500" size={18} />;
  if (type === "x") return <XCircle className="inline text-red-400" size={18} />;
  return <Clock className="inline text-amber-500" size={18} />;
}

export default function SEOServicesPage() {
  return (
    <>
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
                  { label: "SEO Services" },
                ]}
              />

              <span className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 py-2 rounded-full text-sm inline-block pt-[8px] pb-[8px] pl-[14px] pr-[14px] mt-[15px] mb-[15px]">
                🔍 SEO Services
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                SEO Services That Get You Found on Google
              </h1>

              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                Rank Higher. Get More Traffic. Grow Revenue.
              </p>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We help businesses rank on page 1 of Google through technical excellence, strategic content, and proven optimisation. Real rankings, real traffic, real revenue growth—not vanity metrics.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                {[
                  { icon: TrendingUp, text: "Page 1 Rankings" },
                  { icon: Search, text: "Technical Audits" },
                  { icon: MapPin, text: "Local SEO" },
                  { icon: BarChart2, text: "Monthly Reports" },
                ].map((pill) => (
                  <div key={pill.text} className="bg-muted border rounded-full px-4 py-2 text-sm flex items-center gap-2">
                    <pill.icon className="h-4 w-4" />
                    {pill.text}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "94%", label: "Clients on Page 1" },
                  { value: "2,400+", label: "Keywords Ranked" },
                  { value: "6 Months", label: "Avg to Page 1" },
                  { value: "180%", label: "Avg Traffic Growth" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card border rounded-xl p-4 text-center">
                    <div className="font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent text-[20px]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white h-14 px-8 rounded-xl">
                    Get Free SEO Audit
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className="h-14 px-8 rounded-xl">
                  See Our Results
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                ⭐ Trusted by 40+ UK businesses for SEO growth
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SEODashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">What Is SEO & Why Does It Matter?</h2>
            <p className="text-muted-foreground mt-2">The long-term strategy that compounds over time</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                SEO (Search Engine Optimisation) is the process of improving your website so it appears higher in Google search results. When someone searches for your service, you want to be the first result they see—not your competitor.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                Unlike paid ads that stop the moment you stop paying, SEO builds compounding value. A page that ranks today keeps driving traffic for months and years. It's the highest-ROI marketing channel for most businesses.
              </p>

              <h3 className="mt-8 font-semibold mb-4">The 3 Pillars of SEO</h3>
              <div className="space-y-4">
                {[
                  { icon: Settings, title: "Technical SEO", desc: "Site speed, crawlability, structured data, Core Web Vitals, mobile-friendliness" },
                  { icon: FileText, title: "On-Page SEO", desc: "Keywords, meta tags, content quality, internal linking, user experience" },
                  { icon: Link2, title: "Off-Page SEO", desc: "Backlinks, domain authority, brand mentions, digital PR, local citations" },
                ].map((pillar) => (
                  <div key={pillar.title} className="flex gap-4 p-4 bg-card border rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{pillar.title}</div>
                      <div className="text-xs text-muted-foreground">{pillar.desc}</div>
                    </div>
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
                <h3 className="text-center font-semibold mb-6">SEO vs Paid Ads</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted rounded-t-lg">
                        <th className="text-left px-4 py-3 font-semibold">Feature</th>
                        <th className="text-center px-4 py-3 font-semibold">SEO</th>
                        <th className="text-center px-4 py-3 font-semibold">Paid Ads</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr key={row.feature} className={i % 2 === 1 ? "bg-muted/50" : ""}>
                          <td className="px-4 py-3">{row.feature}</td>
                          <td className="text-center px-4 py-3">
                            <span className="mr-1">{row.seo}</span>
                            <ComparisonIcon type={row.seoIcon} />
                          </td>
                          <td className="text-center px-4 py-3">
                            <span className="mr-1">{row.paid}</span>
                            <ComparisonIcon type={row.paidIcon} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border-l-4 border-emerald-500 pl-3 text-xs text-muted-foreground mt-4">
                  SEO takes 3-6 months to show results but then works for free indefinitely. Most clients see positive ROI within 9 months.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Our SEO Services</h2>
            <p className="text-muted-foreground mt-2">Focused, proven SEO that delivers real rankings</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  className="bg-card border rounded-2xl p-8 relative overflow-hidden hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.accent}`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconGradient} flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <span className={`absolute top-6 right-6 text-xs px-3 py-1 rounded-full ${service.badgeClass}`}>
                    {service.badge}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mt-3">{service.description}</p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-2">What's Included</p>
                    <div className="space-y-2">
                      {service.includes.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 bg-muted p-3 rounded-lg">
                    <span className="text-xs font-semibold">Best for:</span>
                    <span className="text-xs text-muted-foreground ml-1">{service.bestFor}</span>
                  </div>
                  <Link href={service.link}>
                    <span className="mt-6 inline-block text-emerald-600 font-semibold text-sm cursor-pointer">
                      Explore {service.name} →
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        title="Not Sure Which SEO Service You Need?"
        subtitle="Start with a free SEO audit—we'll show you exactly where you stand and what to fix first"
      />

      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">How Google Rankings Work</h2>
            <p className="text-muted-foreground mt-2">Understanding what actually moves the needle</p>
          </motion.div>

          <motion.div
            className="bg-card border rounded-2xl p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {googleStats.map((stat) => (
                <div key={stat.title}>
                  <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xl font-bold mt-2">{stat.title}</div>
                  <p className="text-sm text-muted-foreground mt-3">{stat.desc}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    {stat.pills.map((pill) => (
                      <div key={pill} className="bg-muted rounded-lg px-3 py-2 text-xs text-left">
                        {pill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t mt-8 pt-8">
              <h3 className="font-semibold mb-6 text-center">Realistic SEO Timeline</h3>
              <div className="flex items-start justify-between overflow-x-auto pb-4">
                {timelineMilestones.map((milestone, i) => (
                  <div key={milestone.label} className="flex flex-col items-center flex-1 relative">
                    <div className="flex items-center w-full">
                      {i > 0 && <div className="flex-1 h-0.5 bg-border" />}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                          milestone.filled
                            ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white"
                            : "border-2 border-emerald-500 bg-background text-emerald-600"
                        }`}
                      >
                        {i + 1}
                      </div>
                      {i < timelineMilestones.length - 1 && <div className="flex-1 h-0.5 bg-border" />}
                    </div>
                    <div className="text-xs font-semibold mt-2 text-center w-24">{milestone.label}</div>
                    <div className="text-xs text-muted-foreground mt-1 text-center w-24">{milestone.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose House of Developers for SEO"
            subtitle="What makes our SEO approach different"
            columns={3}
            accentColor={SEO_COLOR}
            values={[
              { icon: Code2, title: "Technical-First Approach", description: "We're developers who do SEO—we fix technical issues others can't touch" },
              { icon: BarChart2, title: "Data-Driven Decisions", description: "Every recommendation backed by data from Ahrefs, Semrush, and Search Console" },
              { icon: FileText, title: "No Vanity Metrics", description: "We report on rankings, traffic, and revenue—not impressions or reach" },
              { icon: TrendingUp, title: "Long-Term Strategy", description: "We build sustainable rankings that last, not quick tricks that get penalised" },
              { icon: Users, title: "Dedicated SEO Manager", description: "One point of contact who knows your business and reports monthly" },
              { icon: Search, title: "Competitor Analysis", description: "We reverse-engineer what your top competitors are doing and do it better" },
              { icon: Globe, title: "UK-Focused SEO", description: "Specialists in UK search behaviour, local results, and British audiences" },
              { icon: Link2, title: "White-Hat Only", description: "Zero black-hat tactics. Everything we do follows Google's guidelines permanently" },
              { icon: Headphones, title: "Monthly Reporting", description: "Transparent monthly reports showing exactly what we did and what moved" },
            ]}
          />
        </div>
      </section>

      <section className="py-20 bg-muted">
        <TabbedTechStack
          title="SEO Tools & Technologies We Use"
          subtitle="Industry-leading tools for data-driven decisions"
          tabs={techTabs}
        />
      </section>

      <section className="py-20">
        <ZigzagTimeline
          title="Our SEO Process"
          subtitle="A structured approach that delivers consistent, lasting results"
          steps={processSteps}
          accentColor={SEO_COLOR}
        />
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Industries We Rank</h2>
            <p className="text-muted-foreground mt-2">Deep SEO expertise across competitive sectors</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.name}
                  className="p-6 bg-card border rounded-xl text-center hover:border-emerald-500/50 transition-all"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="font-semibold text-sm mt-3">{industry.name}</div>
                  <div className="text-xs text-muted-foreground mt-1 italic">{industry.keyword}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">SEO Results We've Delivered</h2>
            <p className="text-muted-foreground mt-2">Real campaigns, real rankings</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.title}
                  className="overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={`h-48 bg-gradient-to-br ${study.gradient} rounded-t-2xl relative flex items-center justify-center`}>
                    <Icon className="text-white" size={48} />
                    <span className="absolute top-4 left-4 bg-white/20 text-white px-3 py-1 text-xs rounded-full">
                      {study.badge}
                    </span>
                  </div>
                  <div className="bg-card border border-t-0 rounded-b-2xl p-6">
                    <h3 className="text-lg font-bold">{study.title}</h3>
                    <p className="text-xs text-muted-foreground">{study.location}</p>
                    <p className="text-sm text-muted-foreground mt-2">{study.description}</p>
                    <div className="mt-4">
                      <p className="text-xs uppercase font-semibold text-muted-foreground mb-2">Approach</p>
                      <div className="space-y-1.5">
                        {study.approach.map((item) => (
                          <p key={item} className="text-xs text-muted-foreground">{item}</p>
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground">{study.duration}</p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {study.tech.map((t) => (
                        <span key={t} className="bg-muted text-xs px-2 py-1 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Start Ranking on Google?"
        subtitle="Free consultation, honest assessment, and a clear SEO roadmap for your business"
      />

      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">SEO Services FAQs</h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`q${i + 1}`} className="bg-card border rounded-xl px-6">
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <PageCTA
        title="Let's Get You on Page 1"
        subtitle="Book a free SEO consultation. We'll audit your site live, show you the opportunities, and give you a no-obligation proposal."
      />
    </>
  );
}
