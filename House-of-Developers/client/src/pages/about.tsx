import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import {
  Code2,
  Rocket,
  MessageSquare,
  TrendingUp,
  Heart,
  Users,
  Calendar,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const values = [
  {
    icon: MessageSquare,
    name: "Honest Communication",
    description:
      "No jargon, no runaround. We tell you what's possible, what's not, and what it'll cost. If we don't know something, we say so. If something goes wrong, we own it.",
  },
  {
    icon: TrendingUp,
    name: "Long-Term Thinking",
    description:
      "We don't build quick fixes that break in 6 months. Every line of code is written with the assumption you'll still be using it in 5 years. We build for scale, even if you're starting small.",
  },
  {
    icon: Heart,
    name: "Your Success Is Our Success",
    description:
      "We don't disappear after launch. Your software is your business—if it fails, we failed. That's why we stick around, answer questions, and genuinely care about the outcome.",
  },
];

const timeline = [
  {
    year: "2018",
    heading: "The Beginning",
    description:
      "Started as a solo developer taking freelance projects while studying computer science. Built first 5 client websites from a university dorm room.",
  },
  {
    year: "2019",
    heading: "Going Full-Time",
    description:
      "Quit part-time jobs to focus entirely on client work. Delivered 20+ projects for UK small businesses. Learned React, Node.js, and what clients actually need (spoiler: not what they ask for).",
  },
  {
    year: "2020",
    heading: "House of Developers Founded",
    description:
      "Officially registered the business. Hired first developer. Shifted from 'cheap websites' to 'custom software solutions.' Worked through lockdowns building e-commerce platforms for businesses going digital.",
  },
  {
    year: "2021",
    heading: "First SaaS Platform",
    description:
      "Built first full-scale SaaS application for a client. 12-week project turned into 50,000 users. Realized we could build serious software, not just websites.",
  },
  {
    year: "2022",
    heading: "Expanded Services",
    description:
      "Added mobile app development and AI services. Built first AI chatbot (before it was trendy). Grew to a team of 5 developers. Hit 100 projects milestone.",
  },
  {
    year: "2023",
    heading: "Focus on Quality",
    description:
      "Stopped chasing volume, started focusing on excellence. Turned down projects that weren't a good fit. Invested in better processes, documentation, and client communication.",
  },
  {
    year: "2024",
    heading: "Client Success Stories",
    description:
      "Helped 3 clients raise funding using software we built. One client scaled from 500 to 50,000 users. Another hit £1M revenue using our e-commerce platform. This is why we do this.",
  },
  {
    year: "2026",
    heading: "Still Building",
    description:
      "150+ projects delivered. 40+ happy clients. 8 years of learning what works and what doesn't. Still small enough to care, experienced enough to deliver.",
    isPresent: true,
  },
];

const differences = [
  {
    heading: "No Sales Teams",
    description:
      "You talk directly to the person building your software. No middlemen translating requirements badly.",
  },
  {
    heading: "Fixed Prices, Not Hourly",
    description:
      "We quote the project upfront. No surprise invoices, no scope creep charges. You know exactly what you're paying.",
  },
  {
    heading: "You Own The Code",
    description:
      "100% of the source code is yours. No licensing fees, no vendor lock-in. Take it anywhere.",
  },
  {
    heading: "We Don't Disappear",
    description:
      "Every project includes 60 days post-launch support. After that, we're still one email away. We build relationships, not transactions.",
  },
  {
    heading: "Small Team, Senior Developers",
    description:
      "No junior developers learning on your project. Every developer has 5+ years experience. Quality over quantity.",
  },
  {
    heading: "Honest About Limits",
    description:
      "If we can't do it, we tell you. If there's a better solution, we recommend it. We optimize for your success, not our invoice.",
  },
];

const stats = [
  { icon: Code2, number: "150+", label: "Projects Delivered" },
  { icon: Users, number: "40+", label: "Happy Clients" },
  { icon: Calendar, number: "8 Years", label: "In Business" },
  { icon: Star, number: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <div>
      <SEO
        title="About Us | UK Digital Product Agency"
        description="Learn about House of Developers. Building custom software since 2018, 150+ projects delivered, 40+ happy clients. Our story, mission, and values."
        canonical="/about"
      />
      {/* Hero Section */}
      <section className="py-20 md:py-24">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block bg-muted text-foreground px-3 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            About Us
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Building Software That Matters
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            We started House of Developers because we believe every business
            deserves software that works for them—not against them.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Since 2018, we've built custom software for over 150 businesses.
            From solo founders with an idea to established companies scaling
            fast—we've been there for the journey. This is our story.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <Rocket className="w-16 h-16 text-primary mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted">
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Started</h2>
            <p className="text-muted-foreground">
              The story behind House of Developers
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed mb-6"
          >
            House of Developers started in 2018 when I (Muhammad Khubaib) was
            frustrated with how most agencies treated clients. Cookie-cutter
            templates. Inflated quotes. Disappearing after launch. I knew there
            had to be a better way.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed mb-6"
          >
            I started taking on freelance projects while studying computer
            science. Every client had the same story: they'd been burned before
            by developers who overpromised and underdelivered. I made a simple
            promise—build exactly what they needed, communicate honestly, and
            stick around after launch.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed mb-6"
          >
            Word spread. What started as weekend projects became a full-time
            business. Today, we're a team of developers who genuinely care about
            our clients' success. We've built everything from simple websites to
            complex SaaS platforms—but the mission hasn't changed: build software
            that actually helps businesses grow.
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="mt-8 border-l-4 border-primary pl-6"
          >
            <p className="italic text-xl text-muted-foreground">
              "We don't build software to win awards. We build it to solve real
              problems for real businesses."
            </p>
            <p className="mt-2 text-sm font-semibold">
              — Muhammad Khubaib, Founder
            </p>
          </motion.blockquote>
        </motion.div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold"
            >
              What Drives Us
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mt-3"
            >
              The principles that guide everything we build
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="bg-card border rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To build custom software that gives businesses a competitive
                advantage—without the enterprise price tag or corporate nonsense.
                Every project we take on is treated like it's our own business on
                the line.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {values.map((value) => (
              <motion.div
                key={value.name}
                variants={fadeUp}
                className="bg-card border rounded-2xl p-8 text-center"
              >
                <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-bold">
              Our Journey
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mt-3"
            >
              8 years of building, learning, and growing
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px bg-border" />
            <motion.div
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {timeline.map((milestone) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeUp}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-card border rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-primary">
                        {milestone.year}
                      </span>
                      {milestone.isPresent && (
                        <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mt-1 mb-2">
                      {milestone.heading}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold"
            >
              Why We're Not Like Other Agencies
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground mt-3"
            >
              What makes House of Developers different
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {differences.map((diff) => (
              <motion.div
                key={diff.heading}
                variants={fadeUp}
                className="p-6 border-l-4 border-primary bg-card rounded-r-lg"
              >
                <h3 className="font-semibold mb-2">{diff.heading}</h3>
                <p className="text-sm text-muted-foreground">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-4">
            Work With Us
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground mb-8"
          >
            We take on a limited number of projects each quarter to maintain
            quality. If you're looking for a development partner who actually
            cares about your success, let's talk.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base">
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm text-muted-foreground"
          >
            Free 30-minute consultation · No pressure, no obligation
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
