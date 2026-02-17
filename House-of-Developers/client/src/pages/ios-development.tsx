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
  Smartphone,
  Users,
  Bell,
  CreditCard,
  Zap,
  Layers,
  Clock,
  Award,
  DollarSign,
  TrendingUp,
  MapPin,
  Share2,
  Fingerprint,
  Code,
  Code2,
  Heart,
  Briefcase,
  Star,
  Shield,
  Eye,
  Gauge,
  Hand,
  Sparkles,
  Brain,
  Box,
  TestTube,
  Package,
  Globe,
  Layout,
  GitBranch,
  Cloud,
  Palette,
  ShoppingCart,
  Wrench,
  Send,
  Flame,
  Database,
  MessageSquare,
  Watch,
  CheckSquare,
  User,
  Wifi,
  Settings,
  BarChart,
  Signal,
  Battery,
  Search,
  TestTube2,
  Rocket,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TechTabsSection } from "@/components/ui/TechTabsSection";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";

const IOS_COLOR = "#007AFF";

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
  { label: "Latest iOS Features", icon: Sparkles },
  { label: "SwiftUI Modern", icon: Code2 },
  { label: "Apple Quality", icon: Award },
];

const solutionCards = [
  {
    icon: Smartphone,
    title: "Consumer Apps",
    description: "Beautiful consumer-facing apps for iPhone and iPad users",
    features: ["Social networking apps", "Lifestyle & entertainment", "Photo & video apps", "Games & utilities"],
    timeline: "10-14 weeks",
  },
  {
    icon: Briefcase,
    title: "Enterprise Apps",
    description: "Business tools for internal teams and productivity",
    features: ["Employee management", "Field service apps", "Sales & CRM tools", "Internal workflows"],
    timeline: "12-16 weeks",
  },
  {
    icon: Heart,
    title: "Health & Fitness Apps",
    description: "HealthKit integration for wellness and fitness tracking",
    features: ["Activity tracking", "HealthKit integration", "Workout logging", "Nutrition tracking"],
    timeline: "10-14 weeks",
  },
];

const iosFeatures = [
  { icon: Fingerprint, title: "Face ID & Touch ID", description: "Biometric authentication for secure, passwordless login" },
  { icon: CreditCard, title: "Apple Pay Integration", description: "One-tap payments with Apple's secure payment system" },
  { icon: Watch, title: "Apple Watch Apps", description: "Companion apps for watchOS with complications and notifications" },
  { icon: MessageSquare, title: "iMessage Extensions", description: "Custom stickers, apps, and experiences inside Messages" },
  { icon: Share2, title: "Share Extensions", description: "Share content to your app from any iOS app" },
  { icon: Bell, title: "Rich Push Notifications", description: "Interactive notifications with actions and media" },
  { icon: Cloud, title: "iCloud Sync", description: "Seamless data sync across iPhone, iPad, and Mac" },
  { icon: Palette, title: "Widgets (iOS 14+)", description: "Home screen widgets for quick information at a glance" },
  { icon: Zap, title: "Shortcuts & Siri", description: "Siri voice commands and Shortcuts app integration" },
];

const designPrinciples = [
  { icon: Eye, title: "Clarity", description: "Clear, legible text and crisp icons throughout the interface" },
  { icon: Gauge, title: "Deference", description: "Content takes centre stage with subtle UI that doesn't compete" },
  { icon: Layers, title: "Depth", description: "Visual layers create hierarchy and understanding" },
  { icon: Hand, title: "Consistency", description: "Familiar patterns users expect from iOS apps" },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Discovery & Design",
    points: ["User research, iOS best practices & HIG compliance", "Wireframes, SwiftUI design system & user flows", "Interactive Figma prototype following iOS patterns"],
  },
  {
    icon: Layers,
    title: "Development Setup",
    points: ["Xcode project with SwiftUI architecture (MVVM)", "Combine framework, async/await API layer setup", "Core Data or SwiftData and authentication scaffolding"],
  },
  {
    icon: Code2,
    title: "Feature Development",
    points: ["SwiftUI views, NavigationStack & core features", "HealthKit, CloudKit & native integrations as needed", "Face ID / Touch ID authentication implementation"],
  },
  {
    icon: TestTube2,
    title: "Testing & Optimisation",
    points: ["Device testing across iPhone 12-16 and iPad models", "Dark mode testing and performance optimisation (Instruments)", "Memory leak detection and bug fixes"],
  },
  {
    icon: Rocket,
    title: "App Store Submission",
    points: ["App Store Connect setup, screenshots & preview video", "TestFlight beta testing with metadata & descriptions", "App Store submission, approval & launch"],
  },
];

const useCases = [
  {
    industry: "Health & Fitness",
    title: "HealthKit Activity Tracker",
    description: "Native iOS app with Apple Watch companion and HealthKit integration",
    tech: "Swift, SwiftUI, HealthKit, watchOS",
    results: ["100K downloads", "4.8 rating"],
    icon: Heart,
  },
  {
    industry: "Finance",
    title: "Personal Finance App",
    description: "Apple Pay integration, Face ID security, and iCloud sync",
    tech: "Swift, SwiftUI, Apple Pay, CloudKit",
    results: ["50K users", "\u00a32M tracked"],
    icon: DollarSign,
  },
  {
    industry: "Productivity",
    title: "Task Management App",
    description: "Widgets, Siri Shortcuts, and cross-device sync (iPhone, iPad, Mac)",
    tech: "Swift, SwiftUI, WidgetKit, Shortcuts",
    results: ["200K downloads", "4.9 rating"],
    icon: CheckSquare,
  },
];

const whyChooseValues = [
  { icon: Award, title: "iOS Specialists", description: "20+ native iOS apps in the App Store", stat: "20+ Apps" },
  { icon: Code2, title: "Swift & SwiftUI Experts", description: "We use Apple's latest technologies and best practices" },
  { icon: Star, title: "4.8 Average Rating", description: "Our iOS apps consistently achieve high user ratings", stat: "4.8/5" },
  { icon: Smartphone, title: "Latest iOS Features", description: "iOS 17+, HealthKit, Widgets, Face ID, Apple Pay" },
  { icon: Zap, title: "Performance First", description: "Smooth 60 FPS animations and instant responsiveness" },
  { icon: Shield, title: "App Store Approved", description: "100% approval rate with Apple's review process" },
];

const techTabs = [
  {
    id: "languages",
    label: "Languages & UI",
    items: [
      { icon: Code2, name: "Swift", description: "Apple's modern programming language" },
      { icon: Layout, name: "SwiftUI", description: "Declarative UI framework for Apple platforms" },
      { icon: Code, name: "Objective-C", description: "Legacy language for iOS compatibility" },
      { icon: Layers, name: "UIKit", description: "Imperative UI framework for fine control" },
      { icon: GitBranch, name: "Combine", description: "Reactive programming for async events" },
      { icon: Zap, name: "Swift Concurrency", description: "Async/await and structured concurrency" },
      { icon: Wrench, name: "Xcode", description: "Apple's integrated development environment" },
      { icon: Palette, name: "Interface Builder", description: "Visual UI design tool in Xcode" },
    ],
  },
  {
    id: "frameworks",
    label: "Apple Frameworks",
    items: [
      { icon: Heart, name: "HealthKit", description: "Health and fitness data integration" },
      { icon: Cloud, name: "CloudKit", description: "iCloud backend storage and sync" },
      { icon: Sparkles, name: "WidgetKit", description: "Home screen and lock screen widgets" },
      { icon: ShoppingCart, name: "StoreKit", description: "In-app purchases and subscriptions" },
      { icon: MapPin, name: "MapKit", description: "Apple Maps integration and navigation" },
      { icon: Database, name: "CoreData", description: "Persistent data storage framework" },
      { icon: Box, name: "ARKit", description: "Augmented reality experiences on iOS" },
      { icon: Brain, name: "CoreML", description: "On-device machine learning models" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Services",
    items: [
      { icon: Send, name: "TestFlight", description: "Beta testing and app distribution" },
      { icon: Flame, name: "Firebase", description: "Analytics, push notifications and auth" },
      { icon: Package, name: "CocoaPods", description: "Dependency manager for Swift projects" },
      { icon: Package, name: "Swift Package Manager", description: "Apple's native dependency manager" },
      { icon: TestTube, name: "XCTest", description: "Unit and UI testing framework" },
      { icon: Gauge, name: "Instruments", description: "Performance profiling and debugging" },
      { icon: Rocket, name: "Fastlane", description: "Automated build and release pipeline" },
      { icon: Globe, name: "App Store Connect", description: "App submission and analytics portal" },
    ],
  },
];

const faqs = [
  { q: "Why build native iOS instead of hybrid?", a: "Native iOS gives you 100% access to all Apple features the moment they're released, better performance (especially for complex UI/animations), and a truly native feel. Choose native if: you're iOS-first, need cutting-edge features (HealthKit, Widgets, AR), or want premium quality." },
  { q: "What's the difference between Swift and Objective-C?", a: "Swift is Apple's modern language (2014+)\u2014safer, faster, and easier to read. Objective-C is legacy (1980s). We exclusively use Swift for new projects. It's Apple's recommended language and the future of iOS development." },
  { q: "What is SwiftUI and why use it?", a: "SwiftUI is Apple's declarative UI framework (like React for iOS). Benefits: 50% less code, live previews, automatic dark mode, easier animations, and cross-device support (iPhone/iPad/Mac from same code). It's the modern way to build iOS apps." },
  { q: "Can you build for iPhone, iPad, and Mac?", a: "Yes! With SwiftUI, we can create apps that work across iPhone, iPad, Apple Watch, and even Mac (via Catalyst or native SwiftUI). One codebase adapts to different screen sizes and input methods." },
  { q: "How long does App Store approval take?", a: "Typically 1-3 days for the initial review. We handle all App Store requirements: screenshots, privacy policy, app description, TestFlight beta testing, and submission. Our apps have a 100% approval rate." },
  { q: "Can you integrate Apple Pay?", a: "Yes! We integrate Apple Pay for one-tap payments using Stripe, Braintree, or direct StoreKit. Your users can pay instantly with Face ID\u2014no typing credit card numbers." },
  { q: "Do you build Apple Watch apps?", a: "Yes! We build companion watchOS apps that sync with your iPhone app. Perfect for fitness tracking, notifications, quick interactions, and complications (watch face widgets)." },
  { q: "What's the cost difference vs Android or hybrid?", a: "Native iOS costs roughly the same as native Android (\u00a325K-\u00a360K depending on complexity). It's 40-50% more expensive than hybrid, but you get premium quality and full Apple ecosystem access." },
  { q: "Can you add features to my existing iOS app?", a: "Yes! We take over existing apps for new features, redesigns, bug fixes, or complete rebuilds. We work with legacy Objective-C code or modern Swift/SwiftUI projects." },
  { q: "How do you handle different iPhone sizes?", a: "SwiftUI automatically adapts to all iPhone and iPad sizes. We test on iPhone SE (smallest), standard iPhones, Plus/Pro Max (largest), and iPads to ensure perfect layouts everywhere." },
];

function IOSHeroMockup() {
  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: 380 }}>
      <motion.div
        className="absolute"
        style={{ left: "calc(50% + 60px)", top: 40, zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="w-[80px] bg-background/60 border border-border/60 rounded-[14px] shadow-lg overflow-hidden">
          <div className="h-2.5 bg-muted" />
          <div className="p-1.5 space-y-1" style={{ minHeight: 100 }}>
            <div className="h-2 rounded bg-muted/80" />
            <div className="h-2 rounded bg-muted/80 w-3/4" />
            <div className="h-6 rounded bg-muted/50 mt-1" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: "calc(50% - 100px)", bottom: 10, zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="w-[50px] h-[50px] bg-background/60 border border-border/60 rounded-[12px] shadow-lg overflow-hidden flex items-center justify-center">
          <Watch className="h-5 w-5 text-muted-foreground/50" />
        </div>
      </motion.div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-[160px] md:w-[180px] bg-background border-2 border-border rounded-[26px] shadow-2xl overflow-hidden">
          <div className="h-5 bg-muted flex items-center justify-between px-3">
            <div className="flex items-center gap-1">
              <Signal className="h-2 w-2 text-muted-foreground/60" />
              <Wifi className="h-2 w-2 text-muted-foreground/60" />
            </div>
            <div className="w-12 h-2 rounded-full bg-muted-foreground/20" />
            <div className="flex items-center gap-1">
              <Battery className="h-2.5 w-3 text-muted-foreground/60" />
            </div>
          </div>

          <div className="p-3 space-y-2.5" style={{ minHeight: 240 }}>
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-bold">Health</div>
              <User className="h-3 w-3 text-muted-foreground" />
            </div>

            <div className="rounded-xl p-2.5" style={{ backgroundColor: `${IOS_COLOR}10` }}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full border-[2.5px] flex items-center justify-center" style={{ borderColor: IOS_COLOR }}>
                  <Heart className="h-4 w-4" style={{ color: IOS_COLOR }} />
                </div>
                <div>
                  <div className="text-[8px] text-muted-foreground">Today's Activity</div>
                  <div className="text-[11px] font-bold" style={{ color: IOS_COLOR }}>8,420 steps</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {[
                { label: "Calories", val: "420", icon: Flame },
                { label: "Heart Rate", val: "72 bpm", icon: Heart },
              ].map((s) => (
                <div key={s.label} className="rounded-lg p-2 bg-muted/50 border border-border/50">
                  <s.icon className="h-3 w-3 mb-0.5" style={{ color: IOS_COLOR }} />
                  <div className="text-[9px] font-bold">{s.val}</div>
                  <div className="text-[6px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="rounded-lg bg-muted/50 border border-border/50 p-2">
              <div className="text-[7px] text-muted-foreground mb-1">Weekly Progress</div>
              <div className="flex items-end gap-0.5 h-8">
                {[40, 60, 50, 75, 55, 85, 70].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 5 ? IOS_COLOR : `${IOS_COLOR}40` }} />
                ))}
              </div>
            </div>

            <div className="text-white text-[8px] text-center py-2 rounded-lg font-semibold" style={{ backgroundColor: IOS_COLOR }}>
              Start Workout
            </div>
          </div>

          <div className="h-5 bg-muted flex items-center justify-center gap-4 px-4">
            {[Heart, BarChart, Settings, User].map((Icon, i) => (
              <Icon key={i} className="h-2.5 w-2.5" style={{ color: i === 0 ? IOS_COLOR : undefined }} />
            ))}
          </div>

          <div className="h-3 bg-muted flex items-center justify-center">
            <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
          </div>
        </div>
      </motion.div>

      <motion.div className="absolute -top-1 right-4 md:right-10 z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
        <Badge className="text-white border-0 shadow-lg text-xs" style={{ backgroundColor: IOS_COLOR }}>Swift</Badge>
      </motion.div>
      <motion.div className="absolute top-8 left-2 md:left-6 z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }}>
        <Badge className="text-white border-0 shadow-lg text-xs" style={{ backgroundColor: IOS_COLOR }}>SwiftUI</Badge>
      </motion.div>
      <motion.div className="absolute bottom-8 right-2 md:right-6 z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}>
        <Badge variant="outline" className="shadow-lg text-xs bg-background">App Store Ready</Badge>
      </motion.div>
      <motion.div className="absolute bottom-2 left-4 md:left-10 z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 }}>
        <Badge variant="outline" className="shadow-lg text-xs bg-background">60 FPS</Badge>
      </motion.div>
    </div>
  );
}

export default function IOSDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" data-testid="ios-development-page">
      {/* Hero */}
      <section className="py-16 md:py-24" data-testid="section-ios-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Mobile Development", href: "/services/mobile-development" },
                { label: "iOS Development" },
              ]} />

              <Badge variant="secondary" className="mt-6 mb-4" data-testid="badge-ios">
                <Smartphone className="h-3 w-3 mr-1" /> iOS Development
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold" data-testid="heading-ios-hero">
                Native iOS App Development
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${IOS_COLOR}, #a855f7)` }}>
                Swift, SwiftUI & the Apple Ecosystem
              </p>

              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                Build premium iOS apps that leverage the full power of Apple's ecosystem. From iPhone to iPad, Apple Watch to Mac — we create native experiences using Swift and SwiftUI that users love and Apple features first.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {featurePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <span key={pill.label} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: `${IOS_COLOR}15`, color: IOS_COLOR }} data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link href="/contact">
                  <Button data-testid="cta-start-ios">Start Your iOS App</Button>
                </Link>
                <Button variant="outline" onClick={() => handleScrollTo("use-cases")} data-testid="cta-view-examples">
                  View Examples
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Built for the App Store
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <IOSHeroMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Native iOS */}
      <section className="py-20 bg-muted" data-testid="section-why-ios">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Native iOS Development</h2>
            <p className="text-muted-foreground mt-4">The premium choice for Apple's ecosystem</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Smartphone, stat: "1.5B+", label: "Active iPhones" },
              { icon: TrendingUp, stat: "50%", label: "UK Market Share" },
              { icon: Award, stat: "4.8", label: "Higher Ratings" },
              { icon: DollarSign, stat: "2.5x", label: "Higher Revenue" },
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
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${IOS_COLOR}15` }}>
                    <Icon className="h-7 w-7" style={{ color: IOS_COLOR }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{item.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Swift & SwiftUI */}
      <section className="py-20" data-testid="section-swift-swiftui">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Modern iOS Development with Swift & SwiftUI</h2>
            <p className="text-muted-foreground mt-4">Apple's latest technologies for best-in-class apps</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full border-2" style={{ borderColor: IOS_COLOR }} data-testid="card-swift">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${IOS_COLOR}15` }}>
                  <Code2 className="h-6 w-6" style={{ color: IOS_COLOR }} />
                </div>
                <h3 className="text-xl font-bold">Swift Programming Language</h3>
                <p className="text-sm text-muted-foreground mt-2">Apple's modern, safe, and fast language</p>
                <ul className="mt-6 space-y-3">
                  {["Type-safe & memory-safe", "Fast performance (compiled)", "Clean, readable syntax", "Async/await for modern code", "Full Apple platform support", "Open source"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: IOS_COLOR }} />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Faster than Objective-C", "Safer with fewer crashes", "Apple's recommended"].map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full" data-testid="card-swiftui">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${IOS_COLOR}15` }}>
                  <Layout className="h-6 w-6" style={{ color: IOS_COLOR }} />
                </div>
                <h3 className="text-xl font-bold">SwiftUI Framework</h3>
                <p className="text-sm text-muted-foreground mt-2">Declarative UI framework by Apple</p>
                <ul className="mt-6 space-y-3">
                  {["Declarative syntax (like React)", "Live previews in Xcode", "Built-in animations", "Dark mode automatic", "Cross-device layouts (iPhone/iPad/Mac)", "Constantly evolving"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: IOS_COLOR }} />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["50% less code than UIKit", "Apple's future of iOS", "Beautiful interfaces faster"].map((t) => (
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
            <h2 className="text-3xl md:text-4xl font-bold">iOS Apps We Build</h2>
            <p className="text-muted-foreground mt-4">Premium experiences for Apple users</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionCards.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`solution-${s.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${IOS_COLOR}15` }}>
                      <Icon className="h-7 w-7" style={{ color: IOS_COLOR }} />
                    </div>
                    <h3 className="text-xl font-bold mt-6">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                    <ul className="mt-6 space-y-2 flex-1">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: IOS_COLOR }} />
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

      {/* iOS Exclusive Features */}
      <section className="py-20" data-testid="section-ios-features">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="iOS-Exclusive Features We Implement"
            subtitle="Take advantage of Apple's unique capabilities"
            values={iosFeatures}
            columns={3}
            accentColor={IOS_COLOR}
          />
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 bg-muted" data-testid="section-design-principles">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">iOS Design Excellence</h2>
            <p className="text-muted-foreground mt-4">We follow Apple's Human Interface Guidelines</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} variants={staggerItem}>
                  <Card className="p-6 h-full" data-testid={`principle-${p.title.toLowerCase()}`}>
                    <Icon className="h-8 w-8 mb-4" style={{ color: IOS_COLOR }} />
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
            title="Our iOS Development Process"
            subtitle="From concept to App Store"
            steps={zigzagSteps}
            accentColor={IOS_COLOR}
          />
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-20 bg-muted" data-testid="section-cta-1">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Ready to Build Your iOS App?"
            description="Create a premium native experience for Apple users"
            primaryCTA={{ text: "Start Your Project", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">iOS Apps We've Built</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`usecase-${uc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Badge variant="secondary" className="w-fit mb-4">{uc.industry}</Badge>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${IOS_COLOR}15` }}>
                      <Icon className="h-6 w-6" style={{ color: IOS_COLOR }} />
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
            title="Why Choose Us for iOS Development"
            values={whyChooseValues}
            columns={3}
            accentColor={IOS_COLOR}
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20" data-testid="section-tech-stack">
        <div className="max-w-7xl mx-auto px-6">
          <TechTabsSection
            title="iOS Technologies We Use"
            subtitle="Apple's latest frameworks and tools"
            tabs={techTabs}
            accentColor="#007AFF"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">iOS Development FAQs</h2>
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
      <section className="py-20" data-testid="section-cta-final">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="gradient"
            title="Let's Build Your iOS App"
            description="Book a free consultation to discuss your iOS app idea with our Swift experts"
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
