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
  ArrowRight,
  Layers,
  Clock,
  Award,
  DollarSign,
  TrendingUp,
  Camera,
  MapPin,
  Wifi,
  Share2,
  Fingerprint,
  Code,
  Code2,
  Cpu,
  FileCode,
  Globe,
  Box,
  RefreshCw,
  Shield,
  Rocket,
  Settings,
  ShoppingBag,
  UtensilsCrossed,
  Dumbbell,
  User,
  Atom,
  Feather,
  Database,
  GitBranch,
  Package,
  Flame,
  Cloud,
  Server,
  Search,
  TestTube2,
} from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";

const HYBRID_COLOR = "#61DAFB";

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
  { label: "40% Faster", icon: Zap },
  { label: "Single Codebase", icon: Code2 },
  { label: "Native Performance", icon: Smartphone },
  { label: "Both Platforms", icon: Layers },
];

const solutionCards = [
  {
    icon: Rocket,
    title: "MVP Apps",
    description: "Launch your startup idea on both platforms simultaneously",
    features: ["Core features only", "Fast time to market", "User authentication", "Basic CRUD operations"],
    timeline: "6-8 weeks",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Apps",
    description: "Mobile shopping with cart, checkout, and payments",
    features: ["Product catalogues", "Stripe/PayPal integration", "Push notifications", "Order tracking"],
    timeline: "10-14 weeks",
  },
  {
    icon: Users,
    title: "Social & Community Apps",
    description: "User profiles, feeds, messaging, real-time features",
    features: ["User authentication", "Real-time chat", "Image/video uploads", "Activity feeds"],
    timeline: "12-16 weeks",
  },
];

const hybridFeatures = [
  { icon: Smartphone, title: "Native Performance", description: "60 FPS animations, smooth scrolling, native feel" },
  { icon: Camera, title: "Camera & Media", description: "Access camera, photo library, video recording" },
  { icon: Bell, title: "Push Notifications", description: "Firebase Cloud Messaging for both platforms" },
  { icon: MapPin, title: "Location Services", description: "GPS, geolocation, maps integration" },
  { icon: Wifi, title: "Offline Support", description: "Local storage, SQLite, offline-first apps" },
  { icon: CreditCard, title: "In-App Payments", description: "Stripe, Apple Pay, Google Pay" },
  { icon: Share2, title: "Native Sharing", description: "Share to social media, contacts, apps" },
  { icon: Fingerprint, title: "Biometric Auth", description: "Face ID, Touch ID, fingerprint" },
  { icon: Zap, title: "Native APIs", description: "Access all device features via native modules" },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Discovery & Design",
    points: ["Platform recommendation (React Native vs Flutter) & user research", "Wireframes, user flows & UI design for iOS and Android variants", "Interactive prototype with feature prioritisation"],
  },
  {
    icon: Layers,
    title: "Development Setup",
    points: ["React Native/Flutter project setup with navigation structure", "State management (Redux/Provider) & API integration", "Authentication system and project architecture"],
  },
  {
    icon: Code2,
    title: "Feature Development",
    points: ["Screen implementation and core functionality build-out", "Database integration and third-party API connections", "Push notifications setup and feature completion"],
  },
  {
    icon: TestTube2,
    title: "Testing & Optimisation",
    points: ["iOS device testing (iPhone, iPad) & Android device testing", "Performance optimisation and platform-specific adjustments", "Bug fixes and quality assurance across both platforms"],
  },
  {
    icon: Rocket,
    title: "Launch & Deploy",
    points: ["App Store (Apple) and Google Play Store submission", "App approval, production deployment & launch", "Post-launch monitoring and initial support"],
  },
];

const resultMetrics = [
  { icon: Clock, label: "Development Time", before: "20 weeks", after: "12 weeks", improvement: "40% faster" },
  { icon: DollarSign, label: "Development Cost", before: "\u00a380K", after: "\u00a350K", improvement: "37% savings" },
  { icon: Code2, label: "Code Reuse", before: "0%", after: "95%", improvement: "Shared codebase" },
  { icon: Users, label: "Team Size", before: "4 developers", after: "2 developers", improvement: "50% smaller" },
  { icon: TrendingUp, label: "Maintenance Cost", before: "\u00a33K/month", after: "\u00a31.5K/month", improvement: "50% lower" },
  { icon: Zap, label: "Feature Parity", before: "Delayed", after: "Simultaneous", improvement: "Same day both" },
];

const useCases = [
  {
    industry: "Fitness",
    title: "Workout Tracking App",
    description: "React Native app with exercise library, progress tracking, and social features",
    tech: "React Native, Firebase, Stripe",
    results: ["50K downloads", "4.6 rating"],
    icon: Dumbbell,
  },
  {
    industry: "E-Commerce",
    title: "Fashion Shopping App",
    description: "Flutter app with product catalogue, wishlist, and Apple/Google Pay",
    tech: "Flutter, Stripe, Firebase",
    results: ["\u00a3200K sales", "4.8 rating"],
    icon: ShoppingBag,
  },
  {
    industry: "Food Delivery",
    title: "Restaurant Ordering App",
    description: "React Native app with real-time order tracking and driver GPS",
    tech: "React Native, Google Maps, Stripe",
    results: ["10K orders/month", "4.5 rating"],
    icon: UtensilsCrossed,
  },
];

const whyChooseValues = [
  { icon: Award, title: "Cross-Platform Experts", description: "30+ React Native & Flutter apps delivered", stat: "30+ Apps" },
  { icon: Zap, title: "40% Faster Delivery", description: "Launch on both platforms simultaneously", stat: "40% Faster" },
  { icon: DollarSign, title: "Cost Effective", description: "35% cheaper than building native separately", stat: "35% Savings" },
  { icon: Code2, title: "React Native & Flutter", description: "We master both frameworks\u2014pick the best for you" },
  { icon: Smartphone, title: "Native Quality", description: "Apps that feel truly native on both platforms" },
  { icon: Users, title: "Proven Results", description: "Apps with 4.5+ ratings and 100K+ downloads" },
];

const hybridTechTabs = [
  {
    label: "Frameworks",
    technologies: [
      { name: "React Native", slug: "react" },
      { name: "Flutter", slug: "flutter" },
      { name: "Expo", slug: "expo" },
      { name: "React", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Redux", slug: "redux" },
      { name: "GraphQL", slug: "graphql" },
    ],
  },
  {
    label: "State & Data",
    technologies: [
      { name: "Redux", slug: "redux" },
      { name: "GraphQL", slug: "graphql" },
      { name: "Firebase", slug: "firebase" },
      { name: "Supabase", slug: "supabase" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Redis", slug: "redis" },
      { name: "Prisma", slug: "prisma" },
    ],
  },
  {
    label: "Backend",
    technologies: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Python", slug: "python" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "GraphQL", slug: "graphql" },
      { name: "Stripe", slug: "stripe" },
      { name: "Twilio", slug: "twilio" },
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
  { q: "Is hybrid performance as good as native?", a: "Modern hybrid frameworks (React Native, Flutter) deliver near-native performance\u201460 FPS animations, smooth scrolling, and instant responses. For 95% of apps, users can't tell the difference. Only extremely graphics-intensive apps (3D games, AR) truly need pure native." },
  { q: "React Native or Flutter\u2014which is better?", a: "React Native if you have JavaScript/React developers or want web code reuse. Flutter if you prioritise UI performance and custom animations. Both are excellent\u2014we'll recommend based on your team, requirements, and timeline." },
  { q: "Can hybrid apps use device features like camera, GPS, etc?", a: "Yes! Hybrid apps access all device features\u2014camera, GPS, contacts, fingerprint, Face ID, push notifications, bluetooth, etc. through native modules and plugins." },
  { q: "Will my hybrid app be accepted in App Store and Google Play?", a: "Absolutely! Thousands of hybrid apps are in both stores, including major apps like Instagram (React Native) and Google Pay (Flutter). Stores don't care about the framework, only the user experience." },
  { q: "How much faster is hybrid development?", a: "40-50% faster than building native iOS and Android separately. Instead of 20 weeks (10 weeks \u00d7 2 platforms), expect 12 weeks total. You save time by writing code once instead of twice." },
  { q: "What's the cost difference vs native development?", a: "Hybrid costs 30-40% less than building native separately. If native iOS + Android costs \u00a380K, hybrid costs around \u00a350K. You're paying one team instead of two." },
  { q: "Can I convert my web app to hybrid mobile app?", a: "Partially. If your web app is React, React Native shares similar syntax (but not the same components). You'll need mobile-specific UI and native features. Expect 60-70% new code, not a direct port." },
  { q: "What if I need to add native code later?", a: "Both React Native and Flutter support custom native modules. If you need platform-specific features, we can write native Swift/Kotlin code and bridge it to your hybrid app." },
  { q: "How do updates work for hybrid apps?", a: "App Store updates: Standard review process (1-3 days). Over-the-air updates: For non-native code changes, we can push updates instantly without app store approval (using CodePush for React Native)." },
  { q: "Can hybrid apps work offline?", a: "Yes! We implement local storage, SQLite databases, and offline-first architecture. Your app can function without internet and sync when connection returns." },
];

function HybridHeroMockup() {
  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: 360 }}>
      {[
        { offset: -50, label: "iPhone", screen: "ios" },
        { offset: 50, label: "Android", screen: "android" },
      ].map((phone, idx) => (
        <motion.div
          key={phone.screen}
          className="absolute"
          style={{ left: `calc(50% + ${phone.offset}px - 65px)`, zIndex: 2 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
        >
          <div className="w-[130px] md:w-[150px] bg-background border-2 border-border rounded-[22px] shadow-2xl overflow-hidden">
            <div className="h-4 bg-muted flex items-center justify-center">
              <div className={`h-1.5 rounded-full ${phone.screen === "ios" ? "w-12 bg-muted-foreground/20" : "w-3 h-1.5 rounded-full bg-muted-foreground/20"}`} />
            </div>
            <div className="p-3 space-y-2" style={{ minHeight: 200 }}>
              <div className="flex items-center justify-between">
                <div className="text-[9px] font-bold">FitTrack</div>
                <Bell className="h-2.5 w-2.5 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${HYBRID_COLOR}20` }}>
                  <User className="h-4 w-4" style={{ color: HYBRID_COLOR }} />
                </div>
                <div>
                  <div className="text-[7px] font-semibold">Hello, Sarah</div>
                  <div className="text-[6px] text-muted-foreground">3 workouts this week</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {[
                  { label: "Steps", val: "8,420" },
                  { label: "Calories", val: "420" },
                ].map((s) => (
                  <div key={s.label} className="rounded p-1.5 text-center" style={{ backgroundColor: `${HYBRID_COLOR}10` }}>
                    <div className="text-[9px] font-bold" style={{ color: HYBRID_COLOR }}>{s.val}</div>
                    <div className="text-[5px] text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="h-8 rounded bg-muted/50 border border-border flex items-end px-1 pb-0.5 gap-0.5">
                {[35, 55, 40, 65, 50, 75, 60].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: `${HYBRID_COLOR}${i === 5 ? "" : "60"}` }} />
                ))}
              </div>
              <div className="text-white text-[7px] text-center py-1.5 rounded font-semibold" style={{ backgroundColor: HYBRID_COLOR }}>
                Start Workout
              </div>
            </div>
            <div className="h-3 bg-muted flex items-center justify-center">
              <div className="w-8 h-1 bg-muted-foreground/30 rounded-full" />
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <div className="bg-background border-2 border-border rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1">
          <Code2 className="h-3 w-3" style={{ color: HYBRID_COLOR }} />
          <span className="text-[8px] font-bold whitespace-nowrap">Single Codebase</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-2 right-2 md:right-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Badge className="text-white border-0 shadow-lg text-xs" style={{ backgroundColor: HYBRID_COLOR, color: "#000" }}>iOS & Android</Badge>
      </motion.div>
      <motion.div
        className="absolute bottom-2 left-2 md:left-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
      >
        <Badge variant="outline" className="shadow-lg text-xs bg-background">60 FPS</Badge>
      </motion.div>
      <motion.div
        className="absolute bottom-2 right-2 md:right-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Badge variant="outline" className="shadow-lg text-xs bg-background">Native APIs</Badge>
      </motion.div>
    </div>
  );
}

function NativeSeparateMockup() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-red-200 dark:border-red-900 aspect-video p-4 md:p-6 flex flex-col text-left overflow-hidden">
      <div className="text-[10px] md:text-xs font-bold text-red-600 dark:text-red-400 mb-3">Building Native Separately</div>
      <div className="flex gap-3 flex-1 min-h-0">
        <div className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-gray-700">
          <div className="text-[8px] font-semibold mb-1">iOS Team</div>
          <div className="text-[7px] text-muted-foreground mb-1">Swift / SwiftUI</div>
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-2 rounded bg-gray-300 dark:bg-gray-600" style={{ width: `${80 - i * 15}%` }} />
            ))}
          </div>
          <div className="text-[6px] text-red-500 mt-2">10 weeks</div>
        </div>
        <div className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg p-2 bg-gray-50 dark:bg-gray-700">
          <div className="text-[8px] font-semibold mb-1">Android Team</div>
          <div className="text-[7px] text-muted-foreground mb-1">Kotlin / Compose</div>
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-2 rounded bg-gray-300 dark:bg-gray-600" style={{ width: `${80 - i * 15}%` }} />
            ))}
          </div>
          <div className="text-[6px] text-red-500 mt-2">10 weeks</div>
        </div>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="text-[7px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-full">2 codebases</span>
        <span className="text-[7px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-full">2 teams</span>
        <span className="text-[7px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-full">\u00a380K cost</span>
      </div>
    </div>
  );
}

function HybridResultMockup() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] aspect-video flex flex-col text-left overflow-hidden">
      <div className="h-5 md:h-6 flex items-center gap-2 px-2 md:px-3" style={{ backgroundColor: HYBRID_COLOR }}>
        <Code2 className="h-2.5 w-2.5 md:h-3 md:w-3 text-black" />
        <span className="text-[8px] md:text-[10px] text-black/70">Hybrid Development</span>
      </div>
      <div className="p-3 md:p-4 flex-1 flex flex-col gap-2">
        <div className="text-[10px] md:text-xs font-bold">Single Unified Codebase</div>
        <div className="border border-border rounded-lg p-2 bg-muted/50 flex-1 min-h-0">
          <div className="text-[8px] font-semibold mb-1" style={{ color: HYBRID_COLOR }}>React Native / Flutter</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded p-1.5 text-center" style={{ backgroundColor: `${HYBRID_COLOR}10` }}>
              <Smartphone className="h-3 w-3 mx-auto mb-0.5" style={{ color: HYBRID_COLOR }} />
              <span className="text-[6px]">iOS</span>
            </div>
            <div className="rounded p-1.5 text-center" style={{ backgroundColor: `${HYBRID_COLOR}10` }}>
              <Smartphone className="h-3 w-3 mx-auto mb-0.5" style={{ color: HYBRID_COLOR }} />
              <span className="text-[6px]">Android</span>
            </div>
          </div>
          <div className="space-y-1 mt-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-2 rounded" style={{ width: `${90 - i * 10}%`, backgroundColor: `${HYBRID_COLOR}30` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2 px-3 md:px-4 py-1.5 border-t border-gray-100 dark:border-gray-800 flex-wrap">
        <span className="text-[7px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">1 codebase</span>
        <span className="text-[7px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">1 team</span>
        <span className="text-[7px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">\u00a350K cost</span>
      </div>
    </div>
  );
}

function ResultsShowcase() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    const onMove = (e: MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
    const onUp = () => { isDragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  }, [handleMove]);

  const handleTouchStart = useCallback(() => {
    isDragging.current = true;
    const onMove = (e: TouchEvent) => { if (isDragging.current && e.touches[0]) handleMove(e.touches[0].clientX); };
    const onEnd = () => { isDragging.current = false; window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  }, [handleMove]);

  return (
    <section className="py-20" data-testid="section-results">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold">Real Hybrid App Results</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">See the savings from hybrid vs native development</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div className="space-y-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div ref={containerRef} className="relative rounded-xl shadow-lg overflow-hidden border border-border select-none" style={{ cursor: "ew-resize" }} data-testid="before-after-slider">
              <div className="bg-muted h-8 flex items-center gap-2 px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground ml-2">development comparison</span>
              </div>
              <div className="relative">
                <div className="w-full"><HybridResultMockup /></div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                  <NativeSeparateMockup />
                </div>
                <div className="absolute top-0 h-full w-0.5 z-20" style={{ left: `${sliderPos}%`, transform: "translateX(-50%)", backgroundColor: HYBRID_COLOR }}>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg cursor-ew-resize"
                    style={{ backgroundColor: HYBRID_COLOR }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    data-testid="slider-handle"
                  >
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-3 bg-black rounded-full" />
                      <div className="w-0.5 h-3 bg-black rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 left-3 z-30">
                <span className="bg-red-500/10 text-red-700 dark:text-red-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Native Separate</span>
              </div>
              <div className="absolute top-10 right-3 z-30">
                <span className="bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Hybrid</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center">Drag the slider to compare approaches</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-8">The Savings</h3>
            <div className="space-y-4">
              {resultMetrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <motion.div key={metric.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}>
                    <Card className="p-4" data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" style={{ color: HYBRID_COLOR }} />
                        <span className="text-sm font-semibold text-muted-foreground">{metric.label}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-lg text-muted-foreground line-through">{metric.before}</span>
                        <ArrowRight className="h-5 w-5 flex-shrink-0" style={{ color: HYBRID_COLOR }} />
                        <span className="text-2xl md:text-3xl font-bold" style={{ color: HYBRID_COLOR }}>{metric.after}</span>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center gap-1 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 px-2.5 py-1 rounded-full text-xs font-semibold">
                          <TrendingUp className="h-3 w-3" />
                          {metric.improvement}
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HybridDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" data-testid="hybrid-development-page">
      <SEO
        title="Hybrid App Development | React Native & Flutter UK"
        description="Cross-platform mobile app development with React Native and Flutter. One codebase, both platforms. Faster development, lower costs. Free consultation."
        canonical="/services/mobile-development/hybrid"
      />
      {/* Hero */}
      <section className="py-16 md:py-24" data-testid="section-hybrid-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Mobile Development", href: "/services/mobile-development" },
                { label: "Hybrid Apps" },
              ]} />

              <Badge variant="secondary" className="mt-6 mb-4" data-testid="badge-hybrid">
                <Zap className="h-3 w-3 mr-1" /> Hybrid Development
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold" data-testid="heading-hybrid-hero">
                Cross-Platform Mobile App Development
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, #3b82f6, #22c55e)` }}>
                One Codebase, iOS & Android
              </p>

              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                Build your app once, deploy to both iOS and Android. Using React Native or Flutter, we create native-quality apps that look and feel perfect on both platforms\u201440% faster and more cost-effective than building separately.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {featurePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <span key={pill.label} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: `${HYBRID_COLOR}15`, color: "#0891b2" }} data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link href="/contact">
                  <Button data-testid="cta-start-hybrid">Start Your Hybrid App</Button>
                </Link>
                <Button variant="outline" onClick={() => handleScrollTo("use-cases")} data-testid="cta-view-examples">
                  View Examples
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Used by Instagram, Discord, Airbnb
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <HybridHeroMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Hybrid */}
      <section className="py-20 bg-muted" data-testid="section-why-hybrid">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Hybrid Development</h2>
            <p className="text-muted-foreground mt-4">The smart choice for startups and businesses</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Zap, stat: "40%", label: "Faster Development" },
              { icon: DollarSign, stat: "35%", label: "Lower Cost" },
              { icon: Users, stat: "100%", label: "Platform Coverage" },
              { icon: TrendingUp, stat: "90%+", label: "Code Reuse" },
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
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${HYBRID_COLOR}15` }}>
                    <Icon className="h-7 w-7" style={{ color: HYBRID_COLOR }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{item.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* React Native vs Flutter */}
      <section className="py-20" data-testid="section-comparison">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">React Native or Flutter?</h2>
            <p className="text-muted-foreground mt-4">We work with both\u2014here's how to choose</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full border-2" style={{ borderColor: HYBRID_COLOR }} data-testid="comparison-react-native">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${HYBRID_COLOR}15` }}>
                    <Atom className="h-5 w-5" style={{ color: HYBRID_COLOR }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">React Native</h3>
                    <p className="text-sm text-muted-foreground">By Facebook/Meta</p>
                  </div>
                </div>
                <p className="font-semibold mb-3">Choose React Native if...</p>
                <ul className="space-y-2 mb-6">
                  {[
                    "You have React/JavaScript developers",
                    "Large developer community important",
                    "You need web version later (React)",
                    "Hot reload for faster development",
                    "Mature ecosystem (8+ years)",
                    "Used by: Instagram, Discord, Shopify",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: HYBRID_COLOR }} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript/TypeScript", "React Components", "Native Modules", "Expo"].map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full" data-testid="comparison-flutter">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${HYBRID_COLOR}15` }}>
                    <Feather className="h-5 w-5" style={{ color: HYBRID_COLOR }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Flutter</h3>
                    <p className="text-sm text-muted-foreground">By Google</p>
                  </div>
                </div>
                <p className="font-semibold mb-3">Choose Flutter if...</p>
                <ul className="space-y-2 mb-6">
                  {[
                    "You want best UI performance",
                    "Pixel-perfect custom designs",
                    "Faster animations (120 FPS)",
                    "Material Design out of box",
                    "Growing rapidly (newer)",
                    "Used by: Google Pay, BMW, Alibaba",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Dart Language", "Widget System", "Skia Graphics Engine", "Hot Reload"].map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact">
              <Button variant="outline" data-testid="cta-not-sure">
                Not sure? We'll recommend based on your project
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-muted" data-testid="section-what-we-build">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Hybrid Apps We Build</h2>
            <p className="text-muted-foreground mt-4">Perfect for startups and businesses</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionCards.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`solution-${s.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${HYBRID_COLOR}15` }}>
                      <Icon className="h-7 w-7" style={{ color: HYBRID_COLOR }} />
                    </div>
                    <h3 className="text-xl font-bold mt-6">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                    <ul className="mt-6 space-y-2 flex-1">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: HYBRID_COLOR }} />
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

      {/* Features */}
      <section className="py-20" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="What You Get with Hybrid Apps"
            subtitle="Native capabilities with cross-platform efficiency"
            values={hybridFeatures}
            columns={3}
            accentColor={HYBRID_COLOR}
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Hybrid App Development Process"
            subtitle="From concept to dual-platform launch"
            steps={zigzagSteps}
            accentColor={HYBRID_COLOR}
          />
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-20" data-testid="section-cta-1">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Ready to Build Your Cross-Platform App?"
            description="Launch on iOS and Android simultaneously with hybrid development"
            primaryCTA={{ text: "Start Your Project", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      {/* Results Showcase */}
      <ResultsShowcase />

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-muted" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Hybrid Apps We've Built</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`usecase-${uc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Badge variant="secondary" className="w-fit mb-4">{uc.industry}</Badge>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${HYBRID_COLOR}15` }}>
                      <Icon className="h-6 w-6" style={{ color: HYBRID_COLOR }} />
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
      <section className="py-20" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose Us for Hybrid Development"
            values={whyChooseValues}
            columns={3}
            accentColor={HYBRID_COLOR}
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted" data-testid="section-tech-stack">
        <div className="max-w-7xl mx-auto px-6">
          <TabbedTechStack
            tabs={hybridTechTabs}
            title="Technologies We Use"
            subtitle="We use industry-leading technologies to build cross-platform mobile applications."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Hybrid Development FAQs</h2>
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
            title="Let's Build Your Hybrid Mobile App"
            description="Book a free consultation to discuss React Native or Flutter for your app idea"
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
