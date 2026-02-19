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
  Smartphone,
  Users,
  Bell,
  CreditCard,
  Zap,
  Layers,
  Clock,
  Award,
  TrendingUp,
  MapPin,
  Share2,
  Fingerprint,
  Code,
  Code2,
  Heart,
  Briefcase,
  Star,
  Globe,
  FileCode,
  HardDrive,
  List,
  Camera,
  TestTube,
  Palette,
  Layout,
  GitBranch,
  Cloud,
  Database,
  Settings,
  ShoppingBag,
  UtensilsCrossed,
  GraduationCap,
  Package,
  Sun,
  RefreshCw,
  Calendar,
  Flame,
  Map,
  Play,
  User,
  Wifi,
  Signal,
  Battery,
  Plus,
  Home,
  Search,
  Wrench,
  TestTube2,
  Rocket,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";

const ANDROID_COLOR = "#3DDC84";

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

const featurePills = [
  { label: "100% Native", icon: Smartphone },
  { label: "Kotlin First", icon: Code2 },
  { label: "Material Design 3", icon: Palette },
  { label: "3B+ Users", icon: Users },
];

const solutionCards = [
  {
    icon: Smartphone,
    title: "Consumer Apps",
    description: "Feature-rich apps for the global Android user base",
    features: ["Social networking", "Media & entertainment", "Shopping & commerce", "Utilities & tools"],
    timeline: "10-14 weeks",
  },
  {
    icon: Globe,
    title: "Global Market Apps",
    description: "Apps for emerging markets and international audiences",
    features: ["Offline-first design", "Low-bandwidth optimisation", "Multiple language support", "Lightweight APKs"],
    timeline: "12-16 weeks",
  },
  {
    icon: Briefcase,
    title: "Enterprise Apps",
    description: "Internal tools and productivity apps for businesses",
    features: ["MDM integration", "Custom enterprise features", "Security & compliance", "Device management"],
    timeline: "14-18 weeks",
  },
];

const androidFeatures = [
  { icon: Layout, title: "Home Screen Widgets", description: "Interactive widgets on home screen with Glance API" },
  { icon: Bell, title: "Rich Notifications", description: "Expandable notifications with actions and custom layouts" },
  { icon: Share2, title: "Deep Intents & Sharing", description: "Share to any app, custom intent filters, app linking" },
  { icon: Settings, title: "Background Services", description: "Long-running background tasks and foreground services" },
  { icon: MapPin, title: "Location Services", description: "Google Maps SDK, geofencing, location tracking" },
  { icon: CreditCard, title: "Google Pay Integration", description: "One-tap payments with Google's payment system" },
  { icon: Database, title: "Room Database", description: "Robust local storage with SQLite abstraction" },
  { icon: Cloud, title: "Firebase Integration", description: "Analytics, Crashlytics, Cloud Messaging, Auth" },
  { icon: Fingerprint, title: "Biometric Auth", description: "Fingerprint, face unlock, pattern authentication" },
];

const materialPrinciples = [
  { icon: Palette, title: "Dynamic Colour", description: "Adapts to user's wallpaper for personalised experience" },
  { icon: Sun, title: "Light & Dark Themes", description: "Seamless theme switching with system preferences" },
  { icon: Layers, title: "Adaptive Layouts", description: "Responsive designs for phones, tablets, and foldables" },
  { icon: Zap, title: "Motion & Animation", description: "Smooth transitions and delightful micro-interactions" },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Discovery & Design",
    points: ["User research, Android best practices & Material Design wireframes", "Material Design 3 theme system & Jetpack Compose components", "Interactive prototype with complete user flows"],
  },
  {
    icon: Layers,
    title: "Development Setup",
    points: ["Android Studio project with Jetpack Compose MVVM architecture", "Kotlin coroutines, Flow & Retrofit API integration", "Room database setup and authentication scaffolding"],
  },
  {
    icon: Code2,
    title: "Feature Development",
    points: ["Compose UI screens with navigation component", "Core features, Firebase integration & Google services", "Maps, Auth, Pay and platform-specific functionality"],
  },
  {
    icon: TestTube2,
    title: "Testing & Optimisation",
    points: ["Multi-device testing (Samsung, Pixel, etc.) & Android 12+ compatibility", "Performance optimisation and memory profiling", "Bug fixes and quality assurance sign-off"],
  },
  {
    icon: Rocket,
    title: "Play Store Submission",
    points: ["Play Console setup, screenshots & feature graphic", "Store listing optimisation and beta testing track", "Production release and post-launch monitoring"],
  },
];

const useCases = [
  {
    industry: "E-Commerce",
    title: "Shopping App with Google Pay",
    description: "Native Android app with product catalogue, Google Pay, and push notifications",
    tech: "Kotlin, Jetpack Compose, Firebase, Google Pay",
    results: ["150K downloads", "4.6 rating"],
    icon: ShoppingBag,
  },
  {
    industry: "Food Delivery",
    title: "Restaurant Ordering Platform",
    description: "Real-time order tracking with Google Maps and background services",
    tech: "Kotlin, Compose, Google Maps, Firebase",
    results: ["50K orders", "4.7 rating"],
    icon: UtensilsCrossed,
  },
  {
    industry: "Education",
    title: "E-Learning App",
    description: "Offline-first video courses with Room database and WorkManager",
    tech: "Kotlin, Compose, Room, WorkManager",
    results: ["200K students", "4.8 rating"],
    icon: GraduationCap,
  },
];

const whyChooseValues = [
  { icon: Award, title: "Android Experts", description: "25+ native Android apps on Google Play", stat: "25+ Apps" },
  { icon: Code2, title: "Kotlin & Compose Specialists", description: "We use Google's latest official technologies" },
  { icon: Star, title: "4.7 Average Rating", description: "Our Android apps achieve high user satisfaction", stat: "4.7/5" },
  { icon: Globe, title: "Global Reach", description: "Built for international markets and diverse devices" },
  { icon: Zap, title: "Performance Optimised", description: "Smooth on all devices, even budget phones" },
  { icon: CheckCircle2, title: "Play Store Approved", description: "100% approval rate with Google's policies" },
];

const androidTechTabs = [
  {
    label: "Android Technologies",
    technologies: [
      { name: "Kotlin", slug: "kotlin" },
      { name: "React Native", slug: "react" },
      { name: "Flutter", slug: "flutter" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Redux", slug: "redux" },
      { name: "Firebase", slug: "firebase" },
      { name: "Supabase", slug: "supabase" },
      { name: "Expo", slug: "expo" },
    ],
  },
  {
    label: "Backend",
    technologies: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Python", slug: "python" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Redis", slug: "redis" },
      { name: "GraphQL", slug: "graphql" },
      { name: "Express.js", slug: "express" },
      { name: "FastAPI", slug: "fastapi" },
    ],
  },
  {
    label: "Cloud",
    technologies: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Docker", slug: "docker" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Vercel", slug: "vercel" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "DigitalOcean", slug: "digitalocean" },
      { name: "Terraform", slug: "terraform" },
      { name: "Kubernetes", slug: "kubernetes" },
    ],
  },
  {
    label: "Integrations",
    technologies: [
      { name: "Stripe", slug: "stripe" },
      { name: "PayPal", slug: "paypal" },
      { name: "Twilio", slug: "twilio" },
      { name: "Slack", slug: "slack" },
      { name: "HubSpot", slug: "hubspot" },
      { name: "Zapier", slug: "zapier" },
      { name: "GitHub", slug: "github" },
      { name: "Figma", slug: "figma" },
    ],
  },
  {
    label: "Testing",
    technologies: [
      { name: "Jest", slug: "jest" },
      { name: "Cypress", slug: "cypress" },
      { name: "Playwright", slug: "playwright" },
      { name: "Vitest", slug: "vitest" },
      { name: "Sentry", slug: "sentry" },
      { name: "Datadog", slug: "datadog" },
      { name: "Grafana", slug: "grafana" },
      { name: "GitHub", slug: "github" },
    ],
  },
];

const faqs = [
  { q: "Why build native Android instead of hybrid?", a: "Native Android gives you full access to all Android-specific features (widgets, background services, deep system integration), better performance on budget devices, and 100% Material Design compliance. Choose native if you're Android-first or need platform-specific features." },
  { q: "What's the difference between Kotlin and Java for Android?", a: "Kotlin is Google's modern, official language (2017+)\u2014safer, more concise, and more productive. Java is legacy. We exclusively use Kotlin for new Android projects. It's 40% less code and has null safety built-in." },
  { q: "What is Jetpack Compose?", a: "Jetpack Compose is Google's modern UI toolkit (like SwiftUI for iOS or React for web). It's declarative, requires 50% less code than XML layouts, and includes Material Design 3 out of the box. It's the future of Android UI development." },
  { q: "Can you build for phones AND tablets?", a: "Yes! Jetpack Compose makes it easy to create adaptive layouts that work across phones, tablets, foldables, and even ChromeOS. One codebase adapts to different screen sizes automatically." },
  { q: "How long does Play Store approval take?", a: "Typically a few hours to 1 day (much faster than Apple). We handle all Play Store requirements: screenshots, feature graphic, privacy policy, content rating, and submission." },
  { q: "Can you integrate Google Pay?", a: "Yes! We integrate Google Pay for one-tap payments. Users can pay instantly with their saved payment methods\u2014no typing credit card numbers." },
  { q: "What Android versions do you support?", a: "We typically support Android 8.0+ (API 26+), covering 95%+ of active devices. We test on various devices: Samsung, Pixel, OnePlus, Xiaomi, and budget phones to ensure compatibility." },
  { q: "How do you handle Android fragmentation?", a: "We use Jetpack libraries that handle compatibility automatically, test on multiple devices and Android versions, and follow Material Design guidelines for consistent experiences across all devices." },
  { q: "Can you add features to my existing Android app?", a: "Yes! We take over existing apps for new features, redesigns, bug fixes, or migration from Java to Kotlin. We work with legacy code or modern Jetpack Compose projects." },
  { q: "How much does native Android development cost?", a: "Simple apps: \u00a320,000-\u00a335,000. Standard apps: \u00a335,000-\u00a360,000. Complex apps: \u00a360,000-\u00a3120,000+. Similar to iOS pricing. We provide detailed quotes after understanding your requirements." },
];

function AndroidHeroMockup() {
  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: 380 }}>
      <motion.div
        className="absolute"
        style={{ right: "calc(50% - 140px)", top: 30, zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="w-[90px] bg-background/60 border border-border/60 rounded-[10px] shadow-lg overflow-hidden">
          <div className="h-2.5 bg-muted" />
          <div className="p-1.5 space-y-1" style={{ minHeight: 110 }}>
            <div className="h-2 rounded bg-muted/80" />
            <div className="h-2 rounded bg-muted/80 w-3/4" />
            <div className="h-8 rounded bg-muted/50 mt-1" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-[160px] md:w-[180px] bg-background border-2 border-border rounded-[20px] shadow-2xl overflow-hidden">
          <div className="h-5 bg-muted flex items-center justify-between px-3">
            <div className="flex items-center gap-1">
              <Signal className="h-2 w-2 text-muted-foreground/60" />
              <Wifi className="h-2 w-2 text-muted-foreground/60" />
            </div>
            <span className="text-[7px] text-muted-foreground/60">12:00</span>
            <Battery className="h-2.5 w-3 text-muted-foreground/60" />
          </div>

          <div className="p-3 space-y-2.5" style={{ minHeight: 240 }}>
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-bold">Shop</div>
              <Search className="h-3 w-3 text-muted-foreground" />
            </div>

            <div className="rounded-xl p-2.5" style={{ backgroundColor: `${ANDROID_COLOR}12` }}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${ANDROID_COLOR}20` }}>
                  <ShoppingBag className="h-5 w-5" style={{ color: ANDROID_COLOR }} />
                </div>
                <div>
                  <div className="text-[8px] text-muted-foreground">Flash Sale</div>
                  <div className="text-[11px] font-bold" style={{ color: ANDROID_COLOR }}>Up to 50% Off</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {[
                { label: "Orders", val: "12", icon: Package },
                { label: "Saved", val: "24", icon: Heart },
              ].map((s) => (
                <div key={s.label} className="rounded-lg p-2 bg-muted/50 border border-border/50">
                  <s.icon className="h-3 w-3 mb-0.5" style={{ color: ANDROID_COLOR }} />
                  <div className="text-[9px] font-bold">{s.val}</div>
                  <div className="text-[6px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-muted/50 border border-border/50 p-2">
              <div className="text-[7px] text-muted-foreground mb-1">Categories</div>
              <div className="flex gap-1">
                {[Smartphone, Wrench, Star, Globe].map((Icon, i) => (
                  <div key={i} className="flex-1 h-6 rounded flex items-center justify-center" style={{ backgroundColor: i === 0 ? `${ANDROID_COLOR}20` : "transparent" }}>
                    <Icon className="h-3 w-3" style={{ color: i === 0 ? ANDROID_COLOR : undefined }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="text-white text-[8px] text-center py-2 rounded-lg font-semibold" style={{ backgroundColor: ANDROID_COLOR }}>
              Browse Products
            </div>
          </div>

          <div className="h-5 bg-muted flex items-center justify-center gap-4 px-4">
            {[Home, Search, ShoppingBag, User].map((Icon, i) => (
              <Icon key={i} className="h-2.5 w-2.5" style={{ color: i === 0 ? ANDROID_COLOR : undefined }} />
            ))}
          </div>

          <div className="h-1 bg-muted flex items-center justify-center">
            <div className="w-8 h-0.5 bg-muted-foreground/30 rounded-full" />
          </div>
        </div>

        <motion.div
          className="absolute -bottom-2 -right-4 z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
        >
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: ANDROID_COLOR }}>
            <Plus className="h-4 w-4" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="absolute -top-1 right-4 md:right-10 z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
        <Badge className="text-white border-0 shadow-lg text-xs" style={{ backgroundColor: ANDROID_COLOR }}>Kotlin</Badge>
      </motion.div>
      <motion.div className="absolute top-8 left-2 md:left-6 z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }}>
        <Badge className="text-white border-0 shadow-lg text-xs" style={{ backgroundColor: ANDROID_COLOR }}>Jetpack Compose</Badge>
      </motion.div>
      <motion.div className="absolute bottom-8 right-2 md:right-6 z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}>
        <Badge variant="outline" className="shadow-lg text-xs bg-background">Play Store Ready</Badge>
      </motion.div>
      <motion.div className="absolute bottom-2 left-4 md:left-10 z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 }}>
        <Badge variant="outline" className="shadow-lg text-xs bg-background">Material Design</Badge>
      </motion.div>
    </div>
  );
}

export default function AndroidDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" data-testid="android-development-page">
      <SEO
        title="Android App Development UK | Kotlin & Jetpack"
        description="Native Android app development with Kotlin. Material Design, Google Play optimization, and enterprise Android solutions. Free consultation."
        canonical="/services/mobile-development/kotlin"
      />
      {/* Hero */}
      <section className="py-16 md:py-24" data-testid="section-android-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Mobile Development", href: "/services/mobile-development" },
                { label: "Android Development" },
              ]} />

              <Badge variant="secondary" className="mt-6 mb-4" data-testid="badge-android">
                <Smartphone className="h-3 w-3 mr-1" /> Android Development
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold" data-testid="heading-android-hero">
                Native Android App Development
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${ANDROID_COLOR}, #4285F4)` }}>
                Kotlin, Jetpack Compose & Google Play
              </p>

              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                Build powerful Android apps with Kotlin and modern Jetpack Compose. Reach 3 billion Android users worldwide with native performance, Material Design 3, and seamless Google services integration.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {featurePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <span key={pill.label} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: `${ANDROID_COLOR}15`, color: ANDROID_COLOR }} data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link href="/contact">
                  <Button data-testid="cta-start-android">Start Your Android App</Button>
                </Link>
                <Button variant="outline" onClick={() => handleScrollTo("use-cases")} data-testid="cta-view-examples">
                  View Examples
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Built for Google Play Store
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <AndroidHeroMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Native Android */}
      <section className="py-20 bg-muted" data-testid="section-why-android">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Native Android Development</h2>
            <p className="text-muted-foreground mt-4">The largest mobile platform in the world</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Smartphone, stat: "3B+", label: "Active Devices" },
              { icon: Globe, stat: "72%", label: "Global Market Share" },
              { icon: TrendingUp, stat: "85%", label: "Emerging Markets" },
              { icon: Package, stat: "3.5M+", label: "Apps on Play Store" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col items-center"
                  data-testid={`stat-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${ANDROID_COLOR}15` }}>
                    <Icon className="h-7 w-7" style={{ color: ANDROID_COLOR }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{item.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kotlin & Jetpack Compose */}
      <section className="py-20" data-testid="section-kotlin-compose">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Modern Android with Kotlin & Jetpack Compose</h2>
            <p className="text-muted-foreground mt-4">Google's official languages and frameworks</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full border-2" style={{ borderColor: ANDROID_COLOR }} data-testid="card-kotlin">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${ANDROID_COLOR}15` }}>
                  <Code2 className="h-6 w-6" style={{ color: ANDROID_COLOR }} />
                </div>
                <h3 className="text-xl font-bold">Kotlin Programming Language</h3>
                <p className="text-sm text-muted-foreground mt-2">Google's preferred language for Android</p>
                <ul className="mt-6 space-y-3">
                  {["Concise & expressive syntax", "100% Java interoperable", "Null safety built-in", "Coroutines for async code", "Google's official language (2019+)", "Modern and actively developed"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: ANDROID_COLOR }} />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["40% less code than Java", "Fewer crashes with null safety", "Google's recommended"].map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full" data-testid="card-compose">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${ANDROID_COLOR}15` }}>
                  <Layout className="h-6 w-6" style={{ color: ANDROID_COLOR }} />
                </div>
                <h3 className="text-xl font-bold">Jetpack Compose Framework</h3>
                <p className="text-sm text-muted-foreground mt-2">Modern declarative UI toolkit</p>
                <ul className="mt-6 space-y-3">
                  {["Declarative UI (like SwiftUI/React)", "Less boilerplate code", "Built-in Material Design 3", "Live preview in Android Studio", "Reactive by default", "Google's future of Android UI"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: ANDROID_COLOR }} />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["50% less code than XML", "Faster UI development", "Material Design 3 built-in"].map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-muted" data-testid="section-what-we-build">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Android Apps We Build</h2>
            <p className="text-muted-foreground mt-4">Reaching billions of Android users</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionCards.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`solution-${s.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${ANDROID_COLOR}15` }}>
                      <Icon className="h-7 w-7" style={{ color: ANDROID_COLOR }} />
                    </div>
                    <h3 className="text-xl font-bold mt-6">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                    <ul className="mt-6 space-y-2 flex-1">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: ANDROID_COLOR }} />
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{s.timeline}</span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Android Exclusive Features */}
      <section className="py-20" data-testid="section-android-features">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Android-Exclusive Features We Implement"
            subtitle="Take advantage of Android's unique capabilities"
            values={androidFeatures}
            columns={3}
            accentColor={ANDROID_COLOR}
          />
        </div>
      </section>

      {/* Material Design 3 */}
      <section className="py-20 bg-muted" data-testid="section-material-design">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Material Design 3 Excellence</h2>
            <p className="text-muted-foreground mt-4">Google's latest design system built into every app</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materialPrinciples.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} variants={staggerItem}>
                  <Card className="p-6 h-full" data-testid={`principle-${p.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Icon className="h-8 w-8 mb-4" style={{ color: ANDROID_COLOR }} />
                    <h3 className="font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Android Development Process"
            subtitle="From concept to Google Play Store"
            steps={zigzagSteps}
            accentColor={ANDROID_COLOR}
          />
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-20 bg-muted" data-testid="section-cta-1">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Ready to Build Your Android App?"
            description="Reach 3 billion Android users with native performance"
            primaryCTA={{ text: "Start Your Project", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Android Apps We've Built</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`usecase-${uc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Badge variant="secondary" className="w-fit mb-4">{uc.industry}</Badge>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${ANDROID_COLOR}15` }}>
                      <Icon className="h-6 w-6" style={{ color: ANDROID_COLOR }} />
                    </div>
                    <h3 className="text-xl font-bold mt-4">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{uc.description}</p>
                    <p className="text-xs text-muted-foreground mt-2 italic">{uc.tech}</p>
                    <div className="flex gap-2 flex-wrap mt-4">
                      {uc.results.map((r) => (
                        <Badge key={r} variant="outline">{r}</Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose Us for Android Development"
            values={whyChooseValues}
            columns={3}
            accentColor={ANDROID_COLOR}
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20" data-testid="section-tech-stack">
        <div className="max-w-7xl mx-auto px-6">
          <TabbedTechStack
            tabs={androidTechTabs}
            title="Technologies We Use"
            subtitle="We use industry-leading technologies to build exceptional Android applications."
          />
        </div>
      </section>

      {/* Android vs iOS Comparison */}
      <section className="py-20 bg-muted" data-testid="section-comparison">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Android vs iOS: Which Platform First?</h2>
            <p className="text-muted-foreground mt-4">We help you choose based on your market</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full border-2" style={{ borderColor: ANDROID_COLOR }} data-testid="comparison-android">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${ANDROID_COLOR}15` }}>
                    <Smartphone className="h-5 w-5" style={{ color: ANDROID_COLOR }} />
                  </div>
                  <h3 className="text-xl font-bold">Build Android First If...</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Targeting global/emerging markets",
                    "Budget-conscious user base",
                    "Need maximum device diversity",
                    "Prioritise customisation & flexibility",
                    "Want faster Play Store approval (hours not days)",
                    "72% global market share matters",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: ANDROID_COLOR }} />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-3 rounded-lg" style={{ backgroundColor: `${ANDROID_COLOR}10` }}>
                  <p className="text-xs font-semibold" style={{ color: ANDROID_COLOR }}>Market Focus</p>
                  <p className="text-sm text-muted-foreground mt-1">Asia, Africa, Latin America, Europe</p>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full" data-testid="comparison-ios">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-muted">
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">Build iOS First If...</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Targeting UK/US/Western markets",
                    "Premium user base",
                    "Higher revenue per user",
                    "Need latest features first",
                    "Apple ecosystem integration",
                    "50% UK market share matters",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-3 rounded-lg bg-muted/50">
                  <p className="text-xs font-semibold text-muted-foreground">Market Focus</p>
                  <p className="text-sm text-muted-foreground mt-1">UK, USA, Canada, Australia, Japan</p>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div className="text-center mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <p className="text-sm text-muted-foreground">
              Or build both simultaneously with{" "}
              <Link href="/services/mobile-development/hybrid" className="font-semibold underline" style={{ color: ANDROID_COLOR }}>
                hybrid development
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Android Development FAQs</h2>
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
            title="Let's Build Your Android App"
            description="Book a free consultation to discuss your Android app idea with our Kotlin experts"
            primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
            secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
            showContactInfo
            size="large"
          />
        </div>
      </section>
    </div>
  );
}
