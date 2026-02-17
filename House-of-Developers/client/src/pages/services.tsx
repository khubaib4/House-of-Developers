import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Bot,
  Search,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const serviceCards = [
  {
    icon: Globe,
    name: "Web Development",
    description: "Custom websites, web applications, and e-commerce platforms built exactly to your requirements.",
    count: "6 services",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    name: "Mobile Development",
    description: "Native iOS, Android, and cross-platform mobile apps that work seamlessly on every device.",
    count: "3 services",
    href: "/services/mobile-development",
  },
  {
    icon: Bot,
    name: "AI Services",
    description: "Intelligent chatbots, automation, and machine learning solutions powered by GPT-4 and Claude.",
    count: "2 services",
    href: "/services/ai-services",
  },
  {
    icon: Search,
    name: "SEO Services",
    description: "Technical SEO, local rankings, and content strategy to get you on page 1 of Google.",
    count: "1 service",
    href: "/services/seo-services",
  },
  {
    icon: Users,
    name: "Hire Developers",
    description: "Skilled full-stack, frontend, and backend developers ready to join your team.",
    count: "3 categories",
    href: "/services/hire-developers",
  },
];

const industries = [
  {
    name: "E-Commerce & Retail",
    services: ["Shopify Development", "SEO Services", "Web Applications"],
    example: "E.g., online store with custom features",
  },
  {
    name: "Professional Services",
    services: ["Custom Development", "WordPress", "Local SEO"],
    example: "E.g., law firm website with client portal",
  },
  {
    name: "SaaS & Tech Startups",
    services: ["Web Applications", "AI Services", "Hire Developers"],
    example: "E.g., subscription platform with AI features",
  },
  {
    name: "Healthcare & Medical",
    services: ["Custom Development", "Mobile Apps", "HIPAA Compliance"],
    example: "E.g., patient booking system",
  },
  {
    name: "Hospitality & Tourism",
    services: ["WordPress", "Mobile Apps", "Local SEO"],
    example: "E.g., hotel website with booking",
  },
  {
    name: "Education & Training",
    services: ["Web Applications", "Mobile Apps", "AI Chatbots"],
    example: "E.g., online learning platform",
  },
];

const quizQuestions = [
  {
    key: "goal",
    label: "What's your main goal?",
    options: [
      { text: "Build a new website or web application", value: "web" },
      { text: "Create a mobile app (iOS/Android)", value: "mobile" },
      { text: "Add AI features (chatbots, automation)", value: "ai" },
      { text: "Improve Google rankings (SEO)", value: "seo" },
      { text: "Hire developers for my team", value: "hire" },
    ],
  },
  {
    key: "platform",
    label: "Where will it be used?",
    options: [
      { text: "Website/Web browser", value: "web" },
      { text: "Mobile devices (phone/tablet)", value: "mobile" },
      { text: "Both web and mobile", value: "both" },
      { text: "Internal systems/tools", value: "internal" },
    ],
  },
  {
    key: "timeline",
    label: "When do you need it?",
    options: [
      { text: "ASAP (4-6 weeks)", value: "urgent" },
      { text: "Normal timeline (8-16 weeks)", value: "normal" },
      { text: "Flexible (ongoing project)", value: "flexible" },
    ],
  },
];

const recommendations: Record<string, { name: string; href: string; icon: typeof Globe; description: string }> = {
  web: {
    name: "Custom Web Development",
    href: "/services/custom-development",
    icon: Globe,
    description: "Build a tailored web application designed around your exact business needs, with modern frameworks and scalable architecture.",
  },
  mobile: {
    name: "Mobile App Development",
    href: "/services/mobile-development",
    icon: Smartphone,
    description: "Create native or cross-platform mobile apps for iOS and Android that your users will love.",
  },
  ai: {
    name: "AI Services",
    href: "/services/ai-services",
    icon: Bot,
    description: "Add intelligent automation, chatbots, and AI-powered features to streamline your business operations.",
  },
  seo: {
    name: "SEO Services",
    href: "/services/seo-services",
    icon: Search,
    description: "Rank higher on Google with technical SEO, content strategy, and data-driven optimisation.",
  },
  hire: {
    name: "Hire Developers",
    href: "/services/hire-developers",
    icon: Users,
    description: "Expand your team with pre-vetted senior developers who integrate seamlessly with your workflow.",
  },
};

export default function ServicesPage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ goal: "", platform: "", timeline: "" });

  const handleAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({ goal: "", platform: "", timeline: "" });
  };

  const recommendation = recommendations[answers.goal] || recommendations.web;
  const currentQuestion = quizQuestions[step - 1];

  return (
    <>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Breadcrumbs items={[{ label: "Services" }]} />

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-muted text-foreground px-3 py-1.5 rounded-full text-sm mb-4 mt-4">
              Our Services
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What We Build
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            From websites to AI—tailored solutions for your business
          </motion.p>

          <motion.p
            className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We build custom software, websites, and AI solutions. Every project is tailored to your exact needs—no templates, no shortcuts, just results.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { number: "5", label: "Core Services" },
              { number: "150+", label: "Projects Delivered" },
              { number: "40+", label: "Technologies" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Not sure what you need?</h2>
            <p className="text-sm text-muted-foreground mt-2">Answer a few quick questions</p>
          </div>

          <div className="bg-card border rounded-2xl p-8">
            {step <= 3 && currentQuestion ? (
              <>
                <p className="text-sm font-semibold mb-4">{currentQuestion.label}</p>
                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(currentQuestion.key, option.value)}
                      className="w-full border rounded-xl p-4 text-left hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium active:scale-[0.98]"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <recommendation.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We recommend: {recommendation.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{recommendation.description}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href={recommendation.href}>
                    <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all">
                      Explore {recommendation.name}
                      <ArrowRight size={14} />
                    </button>
                  </Link>
                  <button
                    onClick={resetQuiz}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Start over
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${
                    step >= i ? "w-2 h-2 bg-primary" : "w-1.5 h-1.5 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground text-sm mt-2">Choose what you need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={i === serviceCards.length - 1 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
              >
                <Link href={service.href}>
                  <div className="bg-card border rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    <service.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">{service.count}</p>
                    <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                      View Services <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Solutions by Industry</h2>
            <p className="text-sm text-muted-foreground mt-2">See what businesses like yours typically need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-card border rounded-xl p-6 hover:border-primary transition-all"
              >
                <h3 className="text-base font-semibold mb-3">{industry.name}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {industry.services.map((s) => (
                    <span key={s} className="text-xs bg-muted rounded-full px-3 py-1">
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{industry.example}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Book a free consultation and we'll recommend the right solution for your business.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link href="/contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all">
                Book Free Consultation
              </button>
            </Link>
            <button className="px-8 py-3 border rounded-xl font-semibold hover:bg-muted transition-all">
              View Our Work
            </button>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            No obligation. Free 30-minute consultation to discuss your project.
          </p>
        </div>
      </section>
    </>
  );
}
