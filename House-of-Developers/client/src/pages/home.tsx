import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import {
  Globe,
  Smartphone,
  Bot,
  Search,
  Users,
  ArrowRight,
  CheckCircle2,
  Code2,
  Clock,
  Star,
  Quote,
  MessageSquare,
  Palette,
  Rocket,
  Phone,
} from "lucide-react";
import { TechStack } from "@/components/home/TechStack";
import { CodeToUIMockup } from "@/components/mockups/CodeToUIMockup";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";

const HOME_COLOR = "#10B981";

const services = [
  {
    icon: Globe,
    name: "Web Development",
    description: "Custom websites and web applications built with modern technology. Fast, secure, and scalable.",
    features: ["Custom design & development", "E-commerce & CMS platforms", "Web applications & SaaS"],
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    name: "Mobile Development",
    description: "Native iOS, Android, and cross-platform mobile apps. Beautiful interfaces, smooth performance.",
    features: ["iOS & Android apps", "React Native & Flutter", "App Store deployment"],
    href: "/services/mobile-development",
  },
  {
    icon: Bot,
    name: "AI Services",
    description: "Intelligent chatbots, automation, and AI-powered features. Built with GPT-4, Claude, and custom models.",
    features: ["AI chatbots & agents", "Workflow automation", "Custom ML models"],
    href: "/services/ai-services",
  },
  {
    icon: Search,
    name: "SEO Services",
    description: "Get found on Google. Technical SEO, local rankings, and content strategy that drives real traffic.",
    features: ["Technical SEO audits", "Local & e-commerce SEO", "Page 1 rankings"],
    href: "/services/seo-services",
  },
  {
    icon: Users,
    name: "Hire Developers",
    description: "Skilled developers who integrate with your team. Full-stack, frontend, backend specialists available.",
    features: ["Pre-vetted senior developers", "Full-time or part-time", "Start in 1 week"],
    href: "/services/hire-developers",
  },
];

const testimonials = [
  {
    quote: "House of Developers built our entire SaaS platform in 12 weeks. The quality of code and attention to detail exceeded our expectations. We've raised Series A and scaled to 5,000 users with zero issues.",
    name: "Sarah Mitchell",
    company: "CEO, TaskFlow",
    initials: "SM",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    quote: "We needed an e-commerce site that could handle high traffic during sales. They delivered a Shopify store that's done £200K in revenue in 6 months. Support has been excellent too.",
    name: "James Carter",
    company: "Founder, LuxeWear",
    initials: "JC",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    quote: "The AI chatbot they built handles 85% of our customer inquiries automatically. Our support team can finally focus on complex issues instead of answering the same questions all day.",
    name: "Emma Wilson",
    company: "Customer Success, GlowCosmetics",
    initials: "EW",
    gradient: "from-emerald-500 to-green-500",
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: "1. Discovery Call",
    points: [
      "Free 30-minute consultation to understand your needs",
      "Discuss goals, timeline, and budget expectations",
      "Get honest advice on the best approach",
    ],
  },
  {
    icon: Palette,
    title: "2. Design & Planning",
    points: [
      "Wireframes and mockups for your approval",
      "Technical architecture and project roadmap",
      "Fixed-price quote with clear deliverables",
    ],
  },
  {
    icon: Code2,
    title: "3. Build & Iterate",
    points: [
      "Weekly progress updates and live demos",
      "Your feedback shapes every sprint",
      "Transparent communication throughout",
    ],
  },
  {
    icon: Rocket,
    title: "4. Launch & Support",
    points: [
      "Smooth deployment with zero downtime",
      "Team training and full documentation",
      "Ongoing support available after launch",
    ],
  },
];

const stats = [
  { icon: Code2, number: "150+", label: "Projects Delivered" },
  { icon: Users, number: "40+", label: "Happy Clients" },
  { icon: Clock, number: "8 Years", label: "In Business" },
  { icon: Star, number: "98%", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Software Development London & Wembley"
        description="Custom software development in London, Wembley & Croydon. Web apps, mobile apps, AI solutions. 150+ projects delivered. Free consultation."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "House of Developers",
          "url": "https://houseofdevelopers.co.uk",
          "logo": "https://houseofdevelopers.co.uk/favicon.png",
          "image": "https://houseofdevelopers.co.uk/og-image.jpg",
          "description": "Custom software development agency in London. Web apps, mobile apps, AI solutions. Serving London, Wembley, Croydon, Harrow & Ealing.",
          "email": "khubaib@houseofdevelopers.co.uk",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressRegion": "England",
            "addressCountry": "GB"
          },
          "areaServed": [
            { "@type": "City", "name": "London" },
            { "@type": "City", "name": "Wembley" },
            { "@type": "City", "name": "Croydon" },
            { "@type": "City", "name": "Harrow" },
            { "@type": "City", "name": "Ealing" }
          ],
          "serviceType": [
            "Web Development",
            "Mobile App Development",
            "AI Development",
            "Custom Software Development",
            "SEO Services",
            "CMS Development"
          ],
          "sameAs": [
            "https://www.linkedin.com/company/houseofdevelopers",
            "https://github.com/khubaib4"
          ],
          "priceRange": "££",
          "openingHours": "Mo-Fr 09:00-18:00"
        }}
      />
      <section className="py-24 md:py-32 pl-[0px] pr-[0px] pt-[30px] pb-[30px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full mb-6 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Accepting new projects for Q2 2026
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Software Development Agency in London
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
                From MVP to scale. From idea to revenue.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Custom web and mobile development, AI integration, and dedicated developers. We build the software your business needs to compete and win.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                  <button className="h-14 px-8 bg-green-500 hover:bg-green-400 text-black rounded-xl font-semibold shadow-lg shadow-green-500/25 transition-all active:scale-[0.98]">
                    Book Free Consultation
                  </button>
                </a>
                <Link href="/services">
                  <button className="h-14 px-8 border rounded-xl font-semibold hover:bg-muted transition-all active:scale-[0.98]">
                    View Our Services
                  </button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span>✓ 150+ projects delivered</span>
                <span>✓ 8 years experience</span>
                <span>✓ 98% client satisfaction</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <CodeToUIMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What We Build
            </motion.h2>
            <motion.p
              className="text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Custom solutions for every business need
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={`group ${i === services.length - 1 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <Link href={service.href}>
                  <div className="bg-card border rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="space-y-1.5 mb-6">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-sm text-muted-foreground mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Real feedback from real businesses
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="bg-card border rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-sm text-foreground leading-relaxed mb-4">"{t.quote}"</p>
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ZigzagTimeline
            title="How We Work"
            subtitle="A proven process that delivers projects on time, every time"
            steps={processSteps}
            accentColor={HOME_COLOR}
          />
        </div>
      </section>

      <TechStack />

      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Build Your Project?
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Book a free consultation. We'll discuss your project, provide honest advice, and give you a clear roadmap forward. No obligation, no pressure.
          </motion.p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
              <button className="h-14 px-10 bg-green-500 hover:bg-green-400 text-black rounded-xl font-semibold text-lg shadow-lg shadow-green-500/25 transition-all active:scale-[0.98]">
                Book Free Consultation
              </button>
            </a>
            <a href="tel:+447429917368">
              <button className="h-14 px-8 border rounded-xl font-semibold inline-flex items-center gap-2 hover:bg-muted transition-all active:scale-[0.98]">
                <Phone size={18} />
                Call: +44 7429 917368
              </button>
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Free 30-minute consultation · No obligation · Honest advice
          </p>
        </div>
      </section>
    </>
  );
}
