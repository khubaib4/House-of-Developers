import { motion } from "framer-motion";
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
  X,
  Smartphone,
  Users,
  Bell,
  CreditCard,
  Zap,
  ArrowRight,
  Layers,
  Clock,
  Award,
  Star,
  Headphones,
  ShoppingBag,
  Calendar,
  DollarSign,
  Heart,
  GraduationCap,
  Camera,
  MapPin,
  Wifi,
  Share2,
  BarChart,
  User,
  Search,
  Palette,
  Code2,
  TestTube2,
  Rocket,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";

const MOBILE_COLOR = "#6366F1";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const platforms = [
  {
    icon: Layers,
    name: "Hybrid Apps",
    tagline: "One codebase, iOS & Android",
    bestFor: "Startups, MVPs, Budget-Conscious",
    features: [
      "Single codebase for both platforms",
      "React Native or Flutter",
      "40% faster development",
      "Native-like performance",
    ],
    time: "6-12 weeks",
    link: "/services/mobile-development/hybrid",
    cta: "Explore Hybrid",
  },
  {
    icon: Smartphone,
    name: "Native iOS",
    tagline: "Swift/SwiftUI for iPhone & iPad",
    bestFor: "iOS-First, Premium Apps",
    features: [
      "100% native performance",
      "Latest iOS features first",
      "SwiftUI modern interface",
      "Apple ecosystem integration",
    ],
    time: "8-16 weeks",
    link: "/services/mobile-development/ios",
    cta: "Explore iOS",
  },
  {
    icon: Smartphone,
    name: "Native Android",
    tagline: "Kotlin for Android devices",
    bestFor: "Android-First, Global Reach",
    features: [
      "Pure native performance",
      "Material Design 3",
      "Jetpack Compose",
      "Google services integration",
    ],
    time: "8-16 weeks",
    link: "/services/mobile-development/kotlin",
    cta: "Explore Android",
  },
];

const comparisonRows = [
  { feature: "Development Speed", values: ["\u2b50\u2b50\u2b50\u2b50\u2b50", "\u2b50\u2b50\u2b50", "\u2b50\u2b50\u2b50"] },
  { feature: "Cost", values: ["Lower", "Higher", "Higher"] },
  { feature: "Performance", values: ["\u2b50\u2b50\u2b50\u2b50", "\u2b50\u2b50\u2b50\u2b50\u2b50", "\u2b50\u2b50\u2b50\u2b50\u2b50"] },
  { feature: "Code Sharing", values: ["iOS + Android", "iOS only", "Android only"] },
  { feature: "Native Features", values: ["Most", "All", "All"] },
  { feature: "Development Time", values: ["6-12 weeks", "8-16 weeks", "8-16 weeks"] },
  { feature: "Maintenance", values: ["Single codebase", "iOS updates", "Android updates"] },
  { feature: "Team Size", values: ["Smaller", "Larger", "Larger"] },
  { feature: "App Store Distribution", values: ["Both", "Apple only", "Google only"] },
  { feature: "User Base", values: ["Both platforms", "1.5B users", "3B users"] },
  { feature: "Best For", values: ["MVPs, Startups", "Premium apps", "Global reach"] },
  { feature: "Popular Apps", values: ["Instagram, Discord", "Apple apps", "Google apps"] },
];

const appTypes = [
  { icon: ShoppingBag, title: "E-Commerce Apps", description: "Mobile shopping experiences with cart, checkout, and payments", examples: "Fashion stores, marketplaces, food delivery" },
  { icon: Users, title: "Social & Community Apps", description: "User profiles, feeds, messaging, and engagement features", examples: "Social networks, forums, dating apps" },
  { icon: Calendar, title: "Booking & Scheduling", description: "Appointment booking, calendar sync, and notifications", examples: "Salon booking, fitness classes, consultations" },
  { icon: DollarSign, title: "FinTech Apps", description: "Banking, payments, budgeting, and financial management", examples: "Digital wallets, expense trackers, crypto" },
  { icon: Heart, title: "Health & Fitness", description: "Activity tracking, wellness, nutrition, and meditation", examples: "Workout apps, calorie counters, yoga" },
  { icon: GraduationCap, title: "Education & E-Learning", description: "Courses, quizzes, video lessons, and progress tracking", examples: "Language learning, skill courses, tutoring" },
];

const mobileFeatures = [
  { icon: User, title: "User Authentication", description: "Email, social login, biometrics, 2FA" },
  { icon: Bell, title: "Push Notifications", description: "Engage users with timely alerts and updates" },
  { icon: CreditCard, title: "In-App Payments", description: "Stripe, Apple Pay, Google Pay integration" },
  { icon: Camera, title: "Camera & Gallery", description: "Photo upload, image editing, QR scanning" },
  { icon: MapPin, title: "Location Services", description: "GPS, maps, geofencing, location tracking" },
  { icon: Wifi, title: "Offline Mode", description: "Work without internet, sync when online" },
  { icon: Share2, title: "Social Sharing", description: "Share to Instagram, Facebook, Twitter" },
  { icon: BarChart, title: "Analytics", description: "Firebase, Mixpanel, custom analytics" },
  { icon: Zap, title: "Real-Time Features", description: "Chat, live updates, WebSocket connections" },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Discovery & Design",
    points: ["Requirements gathering, user research & wireframes", "Full UI/UX design with style guide and design system", "Interactive prototype with complete user flows"],
  },
  {
    icon: Layers,
    title: "Development Setup",
    points: ["Project architecture, repository & folder structure", "API design, database schema & documentation", "Authentication system and core scaffolding"],
  },
  {
    icon: Code2,
    title: "Core Development",
    points: ["Screen implementation with navigation & state management", "Core feature development and API integration", "4-week sprint covering all primary functionality"],
  },
  {
    icon: Smartphone,
    title: "Advanced Features",
    points: ["Push notifications, payments & camera integration", "Location services and offline mode support", "Third-party services and native device features"],
  },
  {
    icon: TestTube2,
    title: "Testing & QA",
    points: ["Unit, integration & device testing (iOS and Android)", "Performance optimisation and security audit", "Bug fixes and quality assurance sign-off"],
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    points: ["App Store and Google Play submission & approval", "Post-launch monitoring and performance tracking", "30 days of included support and bug fixes"],
  },
];

const whyChooseValues = [
  { icon: Award, title: "50+ Apps Delivered", description: "Experience across industries and platforms", stat: "50+ Apps" },
  { icon: Star, title: "4.8 Average Rating", description: "Our apps consistently achieve high user ratings", stat: "4.8/5" },
  { icon: Zap, title: "Fast Development", description: "Launch in 8-16 weeks, not 6 months", stat: "8-16 Weeks" },
  { icon: Smartphone, title: "Cross-Platform Expertise", description: "React Native, iOS, and Android specialists" },
  { icon: Users, title: "User-Centric Design", description: "Beautiful interfaces that users love" },
  { icon: Headphones, title: "Post-Launch Support", description: "Updates, maintenance, and feature additions" },
];

const faqs = [
  { q: "Should I build native or cross-platform?", a: "For MVPs and startups: cross-platform (React Native/Flutter) is faster and cheaper. For premium apps or heavy performance needs: native (Swift/Kotlin) is better. We'll recommend based on your specific requirements." },
  { q: "How long does mobile app development take?", a: "Simple apps: 6-10 weeks. Standard apps: 10-14 weeks. Complex apps: 14-20 weeks. Timeline depends on features, complexity, and platforms." },
  { q: "Do I need both iOS and Android?", a: "In the UK, iOS has 50% market share. For maximum reach, build both. Start with one platform (based on your target audience) then add the other later, or use cross-platform to launch both simultaneously." },
  { q: "How much does mobile app development cost?", a: "Simple apps: \u00a315,000-\u00a325,000. Standard apps: \u00a325,000-\u00a350,000. Complex apps: \u00a350,000-\u00a3150,000+. We provide detailed quotes after understanding your requirements." },
  { q: "Can you help with App Store submission?", a: "Yes! We handle the entire submission process for both Apple App Store and Google Play Store, including app optimisation, screenshots, descriptions, and approval management." },
  { q: "What happens after the app is launched?", a: "We provide 30 days of post-launch support (bug fixes, minor updates). After that, we offer monthly maintenance packages for ongoing updates, feature additions, and technical support." },
  { q: "Can you integrate with my existing backend/API?", a: "Absolutely! We integrate with any REST API, GraphQL API, or backend system. We can also build custom backends if needed (Node.js, Python, Firebase)." },
  { q: "Do you design the app or just develop it?", a: "We do both! Our process includes full UI/UX design, wireframes, prototypes, and design systems. You'll see exactly what the app looks like before we start coding." },
  { q: "What technologies do you use?", a: "Cross-platform: React Native, Flutter. iOS: Swift, SwiftUI. Android: Kotlin, Jetpack Compose. Backend: Node.js, Firebase, AWS. We choose based on your needs." },
  { q: "Can I see the app before launch?", a: "Yes! We provide TestFlight (iOS) and beta builds (Android) so you can test the app on your device throughout development. We also do weekly demos." },
  { q: "Do you provide analytics and crash reporting?", a: "Yes, we integrate Firebase Analytics, Crashlytics, and/or Mixpanel so you can track user behaviour, crashes, and app performance from day one." },
  { q: "Can you update my existing app?", a: "Yes! We take over existing apps for updates, new features, bug fixes, or complete redesigns. We work with apps built by other teams or legacy codebases." },
];

function MobileHeroMockup() {
  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: 360 }}>
      {[
        { offset: -70, z: 1, rotate: -8, screen: "login" },
        { offset: 0, z: 3, rotate: 0, screen: "dashboard" },
        { offset: 70, z: 2, rotate: 8, screen: "profile" },
      ].map((phone, idx) => (
        <motion.div
          key={phone.screen}
          className="absolute"
          style={{ left: `calc(50% + ${phone.offset}px - 60px)`, zIndex: phone.z }}
          initial={{ opacity: 0, y: 30, rotate: phone.rotate }}
          animate={{ opacity: 1, y: 0, rotate: phone.rotate }}
          transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
        >
          <div className="w-[120px] md:w-[140px] bg-background border-2 border-border rounded-[20px] shadow-2xl overflow-hidden">
            <div className="h-4 bg-muted flex items-center justify-center">
              <div className="w-10 h-1.5 bg-muted-foreground/20 rounded-full" />
            </div>
            {phone.screen === "login" && (
              <div className="p-3 space-y-2" style={{ minHeight: 180 }}>
                <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: `${MOBILE_COLOR}15` }}>
                  <User className="h-5 w-5" style={{ color: MOBILE_COLOR }} />
                </div>
                <div className="text-[8px] font-bold text-center">Welcome Back</div>
                <div className="h-5 rounded border border-border bg-muted/50" />
                <div className="h-5 rounded border border-border bg-muted/50" />
                <div className="h-5 rounded text-white text-[6px] flex items-center justify-center font-semibold" style={{ backgroundColor: MOBILE_COLOR }}>Sign In</div>
                <div className="text-[6px] text-muted-foreground text-center">or continue with</div>
                <div className="flex gap-1 justify-center">
                  <div className="w-5 h-5 rounded border border-border bg-muted/50" />
                  <div className="w-5 h-5 rounded border border-border bg-muted/50" />
                </div>
              </div>
            )}
            {phone.screen === "dashboard" && (
              <div className="p-3 space-y-2" style={{ minHeight: 180 }}>
                <div className="flex items-center justify-between">
                  <div className="text-[8px] font-bold">Dashboard</div>
                  <Bell className="h-2.5 w-2.5 text-muted-foreground" />
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {[
                    { label: "Users", val: "2.4K" },
                    { label: "Revenue", val: "\u00a312K" },
                  ].map((s) => (
                    <div key={s.label} className="rounded p-1.5 text-center" style={{ backgroundColor: `${MOBILE_COLOR}10` }}>
                      <div className="text-[9px] font-bold" style={{ color: MOBILE_COLOR }}>{s.val}</div>
                      <div className="text-[6px] text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="h-12 rounded bg-muted/50 border border-border flex items-end px-1 pb-1 gap-0.5">
                  {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: `${MOBILE_COLOR}${i === 5 ? "" : "60"}` }} />
                  ))}
                </div>
                <div className="space-y-1">
                  {["Task Complete", "New Message"].map((t) => (
                    <div key={t} className="flex items-center gap-1 rounded p-1 bg-muted/50">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `${MOBILE_COLOR}20` }} />
                      <span className="text-[6px]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {phone.screen === "profile" && (
              <div className="p-3 space-y-2" style={{ minHeight: 180 }}>
                <div className="text-[8px] font-bold">Profile</div>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${MOBILE_COLOR}15` }}>
                    <User className="h-5 w-5" style={{ color: MOBILE_COLOR }} />
                  </div>
                  <div className="text-[8px] font-bold mt-1">Jane Smith</div>
                  <div className="text-[6px] text-muted-foreground">Premium Member</div>
                </div>
                <div className="space-y-1">
                  {["Account Settings", "Notifications", "Privacy", "Help"].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded p-1.5 bg-muted/50">
                      <span className="text-[6px]">{item}</span>
                      <ArrowRight className="h-2 w-2 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="h-3 bg-muted flex items-center justify-center">
              <div className="w-8 h-1 bg-muted-foreground/30 rounded-full" />
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute -top-2 right-4 md:right-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Badge className="text-white border-0 shadow-lg text-xs" style={{ backgroundColor: MOBILE_COLOR }}>iOS & Android</Badge>
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-2 md:left-6 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
      >
        <Badge className="text-white border-0 shadow-lg text-xs" style={{ backgroundColor: MOBILE_COLOR }}>React Native</Badge>
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-2 md:right-6 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Badge variant="outline" className="shadow-lg text-xs bg-background">60 FPS</Badge>
      </motion.div>
    </div>
  );
}

function getValueColor(feature: string, value: string): string {
  const greenValues = ["Lower", "Both", "Both platforms", "Smaller", "Single codebase", "iOS + Android", "All"];
  const yellowValues = ["Most", "iOS only", "Android only", "Higher", "Larger", "iOS updates", "Android updates", "Apple only", "Google only"];
  if (value.includes("\u2b50\u2b50\u2b50\u2b50\u2b50")) return "text-green-600 dark:text-green-400";
  if (value.includes("\u2b50\u2b50\u2b50\u2b50") && !value.includes("\u2b50\u2b50\u2b50\u2b50\u2b50")) return "text-yellow-600 dark:text-yellow-400";
  if (value.includes("\u2b50\u2b50\u2b50") && !value.includes("\u2b50\u2b50\u2b50\u2b50")) return "text-yellow-600 dark:text-yellow-400";
  if (greenValues.includes(value)) return "text-green-600 dark:text-green-400";
  if (yellowValues.includes(value)) return "text-yellow-600 dark:text-yellow-400";
  return "";
}

export default function MobileDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" data-testid="mobile-development-page">
      {/* Hero */}
      <section className="py-16 md:py-24" data-testid="section-mobile-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Mobile Development" },
              ]} />

              <Badge variant="secondary" className="mt-6 mb-4" data-testid="badge-mobile-development">
                <Smartphone className="h-3 w-3 mr-1" /> Mobile Development
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="heading-mobile-hero">
                Mobile App Development Services
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${MOBILE_COLOR}, #a855f7)` }}>
                Native iOS, Android & Cross-Platform Apps
              </p>

              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                From MVPs to enterprise apps, we build mobile applications that users love. Native iOS, native Android, or cross-platform — we'll recommend the best approach for your needs and budget.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                {[
                  { stat: "50+", label: "Apps Built" },
                  { stat: "4.8", label: "Avg Rating" },
                  { stat: "2M+", label: "Downloads" },
                ].map((s) => (
                  <div key={s.label} className="text-center" data-testid={`hero-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="text-2xl md:text-3xl font-bold" style={{ color: MOBILE_COLOR }}>{s.stat}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link href="/contact">
                  <Button data-testid="cta-discuss-app">Discuss Your App Idea</Button>
                </Link>
                <Button variant="outline" onClick={() => handleScrollTo("comparison")} data-testid="cta-compare-platforms">
                  Compare Platforms
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <MobileHeroMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-20 bg-muted" data-testid="section-platforms">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your Mobile Platform</h2>
            <p className="text-muted-foreground mt-4">We build native and cross-platform apps to fit your needs</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <motion.div key={platform.name} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`platform-${platform.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${MOBILE_COLOR}15` }}>
                      <Icon className="h-8 w-8" style={{ color: MOBILE_COLOR }} />
                    </div>

                    <h3 className="text-2xl font-bold mt-6">{platform.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{platform.tagline}</p>

                    <div className="mt-4">
                      <Badge variant="secondary" className="text-xs">Best for: {platform.bestFor}</Badge>
                    </div>

                    <ul className="mt-6 space-y-2 flex-1">
                      {platform.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: MOBILE_COLOR }} />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{platform.time}</span>
                    </div>

                    <Link href={platform.link}>
                      <Button variant="outline" className="w-full mt-6" data-testid={`cta-${platform.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        {platform.cta}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-20" data-testid="section-comparison">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Platform Comparison</h2>
            <p className="text-muted-foreground mt-4">Compare features to choose the right approach</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-x-auto rounded-lg border border-border" data-testid="comparison-table">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left font-semibold p-4 min-w-[180px] sticky left-0 bg-muted z-10">Feature</th>
                    <th className="text-center font-semibold p-4 min-w-[140px]" style={{ backgroundColor: `${MOBILE_COLOR}08` }}>
                      <div className="flex flex-col items-center gap-1">
                        <Layers className="h-4 w-4" style={{ color: MOBILE_COLOR }} />
                        <span>Hybrid (React Native)</span>
                      </div>
                    </th>
                    <th className="text-center font-semibold p-4 min-w-[140px]">
                      <div className="flex flex-col items-center gap-1">
                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                        <span>iOS (Swift)</span>
                      </div>
                    </th>
                    <th className="text-center font-semibold p-4 min-w-[140px]">
                      <div className="flex flex-col items-center gap-1">
                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                        <span>Android (Kotlin)</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-border last:border-b-0">
                      <td className="p-4 font-medium sticky left-0 bg-background z-10">{row.feature}</td>
                      {row.values.map((value, colIndex) => (
                        <td
                          key={colIndex}
                          className={`p-4 text-center text-sm ${colIndex === 0 ? "" : ""} ${getValueColor(row.feature, value)}`}
                          style={colIndex === 0 ? { backgroundColor: `${MOBILE_COLOR}05` } : {}}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-20 bg-muted" data-testid="section-cta-1">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Not Sure Which Platform to Choose?"
            description="Book a free consultation and we'll help you decide the best approach"
            primaryCTA={{ text: "Get Expert Advice", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20" data-testid="section-what-we-build">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Mobile Apps We Build</h2>
            <p className="text-muted-foreground mt-4">From concept to App Store</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((app) => {
              const Icon = app.icon;
              return (
                <motion.div key={app.title} variants={staggerItem}>
                  <Card className="p-8 h-full" data-testid={`app-type-${app.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Icon className="h-10 w-10" style={{ color: MOBILE_COLOR }} />
                    <h3 className="text-xl font-semibold mt-4">{app.title}</h3>
                    <p className="text-muted-foreground mt-2">{app.description}</p>
                    <p className="text-xs text-muted-foreground mt-4 italic">{app.examples}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mobile Features */}
      <section className="py-20 bg-muted" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Essential Mobile Features We Implement"
            subtitle="Everything your app needs to succeed"
            values={mobileFeatures}
            columns={3}
            accentColor={MOBILE_COLOR}
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-20" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Mobile App Development Process"
            subtitle="From idea to App Store in 8-16 weeks"
            steps={zigzagSteps}
            accentColor={MOBILE_COLOR}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose House of Developers for Mobile Apps"
            values={whyChooseValues}
            columns={3}
            accentColor={MOBILE_COLOR}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Mobile App Development FAQs</h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} data-testid={`faq-item-${i}`}>
                <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted" data-testid="section-cta-final">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Ready to Build Your Mobile App?"
            description="From idea to App Store, we handle everything. Book a free consultation to discuss your app concept."
            primaryCTA={{ text: "Discuss Your App Idea", link: "/contact" }}
            secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
            showContactInfo
            size="large"
          />
        </div>
      </section>
    </div>
  );
}
