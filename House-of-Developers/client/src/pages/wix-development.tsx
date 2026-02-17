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
  TrendingUp,
  Zap,
  Globe,
  Award,
  Smartphone,
  BarChart,
  ArrowRight,
  Loader2,
  ImageOff,
  AlertTriangle,
  Server,
  DollarSign,
  Briefcase,
  Camera,
  Calendar,
  Layout,
  Clock,
  Users,
  Palette,
  GraduationCap,
  Edit3,
  Sparkles,
  ShoppingCart,
  FileText,
  MessageSquare,
  FileInput,
  Dumbbell,
  Target,
  Mail,
  Search,
  Code2,
  Rocket,
  RefreshCw,
  PenTool,
  Code,
  Layers,
  LayoutGrid,
  Package,
  BarChart3,
  Workflow,
  CreditCard,
} from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TechStackIcons } from "@/components/ui/TechStackIcons";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";

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
  { label: "500+ Templates", icon: Layout },
  { label: "No Coding", icon: CheckCircle2 },
  { label: "Hosting Included", icon: Server },
  { label: "Mobile Editor", icon: Smartphone },
];

const solutions = [
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional sites for small businesses, consultants, and service providers.",
    features: ["Custom template design", "Contact forms & booking", "Google Maps integration", "Mobile-optimized"],
  },
  {
    icon: Camera,
    title: "Portfolio Sites",
    description: "Showcase your work with stunning galleries and project pages.",
    features: ["Full-screen galleries", "Project case studies", "Client testimonials", "Video backgrounds"],
  },
  {
    icon: Calendar,
    title: "Booking Sites",
    description: "Appointment scheduling with Wix Bookings integration.",
    features: ["Calendar integration", "Payment processing", "Automated reminders", "Client management"],
  },
];

const wixTechnologies = [
  { name: "JavaScript", slug: "javascript" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Stripe", slug: "stripe" },
  { name: "AWS", slug: "amazonaws" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "PayPal", slug: "paypal" },
  { name: "Redis", slug: "redis" },
];

const zigzagSteps = [
  {
    icon: Palette,
    title: "Design & Build",
    points: [
      "Template selection, brand customization with colors, fonts, and logo",
      "Page creation, content layout, and image optimization",
      "Mobile editor customization for responsive design",
    ],
  },
  {
    icon: Rocket,
    title: "Features & Launch",
    points: [
      "Contact forms, booking setup, and SEO optimization",
      "Google Analytics, Maps integration, and final QA testing",
      "Domain connection and live site launch",
    ],
  },
  {
    icon: RefreshCw,
    title: "Support & Updates",
    points: [
      "Editor training with video tutorials for self-management",
      "Content update assistance and monthly maintenance",
      "Ongoing performance monitoring and optimization",
    ],
  },
];

const resultMetrics = [
  { icon: Palette, label: "Design Quality", before: "Template", after: "Custom Brand", improvement: "+100%" },
  { icon: Smartphone, label: "Mobile Score", before: "72/100", after: "94/100", improvement: "+22 points" },
  { icon: Zap, label: "Page Speed", before: "3.8s", after: "1.9s", improvement: "50% faster" },
  { icon: TrendingUp, label: "SEO Score", before: "65/100", after: "88/100", improvement: "+23 points" },
  { icon: Target, label: "Lead Generation", before: "5/month", after: "35/month", improvement: "+600%" },
  { icon: Clock, label: "Time to Launch", before: "8 weeks", after: "2 weeks", improvement: "75% faster" },
];

const useCases = [
  {
    industry: "Consulting",
    title: "Business Consultant Portfolio",
    description: "Professional site with booking system and client testimonials",
    results: ["50+ bookings", "Top 5 Google"],
    icon: Briefcase,
  },
  {
    industry: "Photography",
    title: "Wedding Photography Studio",
    description: "Stunning gallery site with inquiry forms and pricing packages",
    results: ["80 inquiries/month", "4.9/5 rating"],
    icon: Camera,
  },
  {
    industry: "Fitness",
    title: "Personal Training Business",
    description: "Wix Bookings integration for class scheduling and payments",
    results: ["200 clients", "\u00a315K/month"],
    icon: Dumbbell,
  },
];

const whyChooseValues = [
  { icon: Zap, title: "Fast Delivery", description: "Launch in 1-2 weeks, not months", stat: "1-2 Weeks" },
  { icon: Award, title: "Wix Experts", description: "Official Wix Partner with 30+ successful sites", stat: "30+ Sites" },
  { icon: Palette, title: "Custom Design", description: "We don't just use templates\u2014we customize them heavily" },
  { icon: GraduationCap, title: "Full Training", description: "You'll be able to update content yourself confidently" },
  { icon: TrendingUp, title: "SEO Optimized", description: "Proper SEO setup from day one" },
  { icon: DollarSign, title: "Affordable", description: "Perfect for small business budgets" },
];

const faqs = [
  { q: "Can I update the content myself after launch?", a: "Yes! That's the beauty of Wix. The drag-and-drop editor makes it incredibly easy to update text, images, add pages, and make changes without any coding knowledge." },
  { q: "Is Wix good for SEO?", a: "Yes! Wix has significantly improved its SEO capabilities. We implement proper meta tags, alt text, clean URLs, sitemaps, and schema markup. Many Wix sites rank well on Google." },
  { q: "What's included in Wix hosting?", a: "Wix includes hosting, SSL certificate, CDN, and 99.9% uptime. You just pay the monthly Wix subscription (starting at \u00a315/month for basic sites)." },
  { q: "Can I add e-commerce to my Wix site?", a: "Yes! Wix has built-in e-commerce functionality. You can sell products, accept payments, manage inventory, and track orders. Perfect for small online stores." },
  { q: "How long does a Wix project take?", a: "Simple sites (5-10 pages): 1 week. Standard sites (10-20 pages): 2 weeks. Complex sites with e-commerce or booking: 3-4 weeks." },
  { q: "Can you migrate my existing site to Wix?", a: "Yes! We can migrate content from any platform to Wix. However, we usually recommend Wix for new sites or simple migrations, not for complex WordPress sites." },
  { q: "What if I outgrow Wix?", a: "For most small-medium businesses, Wix is sufficient. If you need enterprise features, we can migrate you to WordPress or a custom solution later." },
  { q: "Do you provide training?", a: "Yes! We provide comprehensive video training on how to use the Wix editor, update content, add pages, and manage your site independently." },
];

function WixEditorMockup() {
  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <div className="bg-muted h-8 flex items-center gap-2 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-xs text-muted-foreground ml-2">editor.wix.com</span>
        </div>

        <div className="bg-[#f0f3f5] dark:bg-[#1a1a2e] flex">
          <div className="w-12 bg-white dark:bg-[#232334] border-r border-border flex flex-col items-center py-3 gap-3">
            {[Layout, FileText, Camera, MessageSquare, ShoppingCart].map((Icon, i) => (
              <div key={i} className="w-7 h-7 rounded-md bg-muted dark:bg-[#2a2a3d] flex items-center justify-center">
                <Icon className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            ))}
          </div>

          <div className="flex-1 p-3">
            <div className="bg-white dark:bg-[#0d0d1a] rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#0C6EFC] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-white" />
                  <span className="text-xs font-semibold text-white">My Business</span>
                </div>
                <div className="flex gap-3">
                  {["Home", "About", "Services"].map((n) => (
                    <span key={n} className="text-[9px] text-white/70">{n}</span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <div className="border-2 border-dashed border-[#0C6EFC]/40 rounded-lg p-3 mb-3">
                  <span className="text-sm font-bold text-gray-800 dark:text-white">Welcome to Our Studio</span>
                  <div className="w-3/4 h-2 bg-gray-200 dark:bg-gray-700 rounded mt-2" />
                  <div className="w-1/2 h-2 bg-gray-200 dark:bg-gray-700 rounded mt-1.5" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["Services", "Portfolio", "Contact"].map((title) => (
                    <div key={title} className="bg-gray-50 dark:bg-gray-800/50 rounded-md p-2 text-center border border-border/50">
                      <div className="w-6 h-6 rounded-full bg-[#0C6EFC]/10 mx-auto mb-1 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0C6EFC]/30" />
                      </div>
                      <span className="text-[8px] font-medium text-gray-600 dark:text-gray-300">{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-14 bg-white dark:bg-[#232334] border-l border-border p-2 flex flex-col gap-2">
            <div className="text-[7px] text-muted-foreground font-semibold uppercase">Design</div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full h-5 rounded bg-muted dark:bg-[#2a2a3d]" />
            ))}
            <div className="text-[7px] text-muted-foreground font-semibold uppercase mt-1">Colors</div>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-[#0C6EFC]" />
              <div className="w-3 h-3 rounded-full bg-gray-800" />
              <div className="w-3 h-3 rounded-full bg-white border border-border" />
            </div>
          </div>
        </div>
      </Card>

      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Badge className="bg-[#0C6EFC] text-white border-0 shadow-lg text-xs">Drag & Drop</Badge>
      </motion.div>
      <motion.div
        className="absolute -bottom-3 -left-3 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Badge className="bg-[#0C6EFC] text-white border-0 shadow-lg text-xs">Live Preview</Badge>
      </motion.div>
    </div>
  );
}

function OldWixMockup() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-red-200 dark:border-red-900 aspect-video p-4 md:p-6 flex flex-col text-left overflow-hidden">
      <div className="border-b-2 border-gray-400 dark:border-gray-600 pb-2 mb-3">
        <span className="text-lg md:text-2xl text-gray-500 dark:text-gray-400" style={{ fontFamily: "Georgia, serif" }}>Generic Template</span>
      </div>
      <div className="flex gap-3 mb-3 flex-wrap">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <span key={item} className="text-[10px] md:text-xs text-gray-500 cursor-default">{item}</span>
        ))}
      </div>
      <div className="flex-1 min-h-0 flex flex-col gap-2">
        <div className="bg-gray-300 dark:bg-gray-700 rounded-sm h-16 flex items-center justify-center">
          <ImageOff className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="bg-gray-250 dark:bg-gray-750 border border-gray-300 dark:border-gray-600 rounded-sm p-2">
            <div className="w-full h-1.5 bg-gray-400/30 rounded mb-1" />
            <div className="w-3/4 h-1.5 bg-gray-400/30 rounded" />
          </div>
          <div className="bg-gray-250 dark:bg-gray-750 border border-gray-300 dark:border-gray-600 rounded-sm p-2">
            <div className="w-full h-1.5 bg-gray-400/30 rounded mb-1" />
            <div className="w-2/3 h-1.5 bg-gray-400/30 rounded" />
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded-full">
          <Loader2 className="h-2 w-2 md:h-2.5 md:w-2.5 animate-spin" />Slow loading
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-1.5 py-0.5 rounded-full">
          <AlertTriangle className="h-2 w-2 md:h-2.5 md:w-2.5" />Generic design
        </span>
      </div>
    </div>
  );
}

function ModernWixMockup() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] aspect-video flex flex-col text-left overflow-hidden">
      <div className="bg-[#0C6EFC] h-5 md:h-6 flex items-center gap-2 px-2 md:px-3">
        <Palette className="h-2.5 w-2.5 md:h-3 md:w-3" />
        <span className="text-[8px] md:text-[10px] text-white/70">Wix Editor</span>
      </div>
      <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#0C6EFC]/20 flex items-center justify-center">
            <Briefcase className="h-2.5 w-2.5 md:h-3 md:w-3 text-[#0C6EFC]" />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-gray-900 dark:text-white">My Business</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          {["Home", "About", "Services"].map((n) => (
            <span key={n} className="text-[8px] md:text-[10px] text-gray-500">{n}</span>
          ))}
          <div className="bg-[#0C6EFC] text-white text-[7px] md:text-[8px] px-2 py-0.5 rounded-md">Book Now</div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0C6EFC]/10 to-blue-400/10 px-3 md:px-4 py-3 flex flex-col items-center justify-center">
        <span className="text-[10px] md:text-sm font-bold text-gray-900 dark:text-white">Transform Your Business</span>
        <span className="text-[7px] md:text-[9px] text-gray-500 mt-0.5">Professional services you can trust</span>
        <div className="flex gap-2 mt-2">
          <div className="bg-[#0C6EFC] text-white text-[6px] md:text-[8px] px-2 py-0.5 rounded-md">Get Started</div>
          <div className="border border-border text-[6px] md:text-[8px] px-2 py-0.5 rounded-md text-gray-600 dark:text-gray-300">Our Work</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 md:gap-2 px-3 md:px-4 py-2 flex-1 min-h-0">
        {[
          { color: "bg-blue-500/10", title: "Consulting" },
          { color: "bg-indigo-500/10", title: "Strategy" },
          { color: "bg-cyan-500/10", title: "Growth" },
        ].map((card) => (
          <div key={card.title} className={`${card.color} rounded-md p-1.5 md:p-2 flex flex-col items-center justify-center shadow-sm border border-border/30`}>
            <Briefcase className="h-3 w-3 md:h-4 md:w-4 text-[#0C6EFC] mb-0.5" />
            <span className="text-[7px] md:text-[9px] font-medium text-gray-700 dark:text-gray-300">{card.title}</span>
            <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-700 rounded mt-1" />
          </div>
        ))}
      </div>
      <div className="flex gap-2 px-3 md:px-4 py-1.5 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 flex-wrap">
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">
          <Zap className="h-2 w-2 md:h-2.5 md:w-2.5" />1.9s load
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1.5 py-0.5 rounded-full">
          <Smartphone className="h-2 w-2 md:h-2.5 md:w-2.5" />Responsive
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-1.5 py-0.5 rounded-full">
          <TrendingUp className="h-2 w-2 md:h-2.5 md:w-2.5" />SEO ready
        </span>
      </div>
    </div>
  );
}

function WixResultsShowcase() {
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
    <section className="py-20 bg-muted" data-testid="section-results-showcase">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold">Real Wix Results We've Delivered</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">See the transformation from a generic template to a custom branded Wix site</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div className="space-y-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div
              ref={containerRef}
              className="relative rounded-xl shadow-lg overflow-hidden border border-border select-none"
              style={{ cursor: "ew-resize" }}
              data-testid="before-after-slider"
            >
              <div className="bg-muted h-8 flex items-center gap-2 px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground ml-2">mybusiness.com</span>
              </div>

              <div className="relative">
                <div className="w-full">
                  <ModernWixMockup />
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <OldWixMockup />
                </div>
                <div
                  className="absolute top-0 h-full w-0.5 bg-[#0C6EFC] z-20"
                  style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0C6EFC] text-white flex items-center justify-center shadow-lg cursor-ew-resize"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    data-testid="slider-handle"
                  >
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-3 bg-white rounded-full" />
                      <div className="w-0.5 h-3 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-10 left-3 z-30">
                <span className="bg-red-500/10 text-red-700 dark:text-red-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Generic Template</span>
              </div>
              <div className="absolute top-10 right-3 z-30">
                <span className="bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Custom Wix Site</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center">Drag the slider to compare before and after</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-8">The Results</h3>
            <div className="space-y-4">
              {resultMetrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                  >
                    <Card className="p-4" data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#0C6EFC]" />
                        <span className="text-sm font-semibold text-muted-foreground">{metric.label}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-lg text-muted-foreground line-through">{metric.before}</span>
                        <ArrowRight className="h-5 w-5 text-[#0C6EFC] flex-shrink-0" />
                        <span className="text-2xl md:text-3xl font-bold text-[#0C6EFC]">{metric.after}</span>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full text-xs font-semibold">
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

export default function WixDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" data-testid="wix-development-page">
      {/* Hero Section */}
      <section className="py-16 md:py-24" data-testid="section-wix-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Web Development", href: "/services/web-development" },
                { label: "CMS", href: "/services/cms-development" },
                { label: "Wix" },
              ]} />

              <div className="w-16 h-16 mt-6 mb-4 rounded-xl bg-[#0C6EFC]/10 flex items-center justify-center">
                <img src="https://cdn.simpleicons.org/wix/0C6EFC" alt="Wix" className="w-8 h-8" />
              </div>

              <Badge variant="secondary" className="mb-4" data-testid="badge-wix">
                <Sparkles className="h-3 w-3 mr-1" /> Wix Development
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold" data-testid="heading-wix-hero">
                Wix Website Development Services
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 bg-gradient-to-r from-[#0C6EFC] to-purple-400 bg-clip-text text-transparent">
                Drag-and-Drop Simplicity, Professional Results
              </p>

              <p className="text-xl text-muted-foreground mt-6">
                Perfect for small businesses and entrepreneurs who need a professional website fast. We build stunning Wix sites with drag-and-drop editing, so you can update content yourself.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {featurePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <span key={pill.label} className="flex items-center gap-1.5 text-sm bg-[#0C6EFC]/10 text-[#0C6EFC] dark:text-blue-400 px-3 py-1.5 rounded-full font-medium" data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link href="/contact">
                  <Button data-testid="cta-start-wix">Start Your Wix Site</Button>
                </Link>
                <Button variant="outline" onClick={() => handleScrollTo("use-cases")} data-testid="cta-view-examples">
                  View Examples
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6" data-testid="trust-signal">
                Perfect for startups and small businesses
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <WixEditorMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Wix Section */}
      <section className="py-20 bg-muted" data-testid="section-why-wix">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Wix for Your Website</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">The easiest way to create a professional website</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Globe, stat: "200M+", label: "Websites Created" },
              { icon: Layout, stat: "500+", label: "Templates" },
              { icon: Clock, stat: "1-2 Weeks", label: "Launch Time" },
              { icon: Users, stat: "Easy", label: "For Anyone" },
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
                  <div className="w-14 h-14 rounded-full bg-[#0C6EFC]/10 flex items-center justify-center mb-3">
                    <Icon className="h-7 w-7 text-[#0C6EFC]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{item.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20" data-testid="section-solutions">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Wix Solutions We Build</h2>
            <p className="text-muted-foreground mt-4">From portfolios to business sites</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <motion.div key={solution.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`solution-${solution.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-14 h-14 rounded-full bg-[#0C6EFC]/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-[#0C6EFC]" />
                    </div>
                    <h3 className="text-xl font-bold mt-6">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{solution.description}</p>
                    <ul className="mt-6 space-y-2 flex-1">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#0C6EFC] flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features & Apps */}
      <section className="py-20 bg-muted" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-6">
          <TechStackIcons
            title="Technologies We Use"
            subtitle="We use industry-leading technologies to build products that are fast, reliable, and maintainable."
            technologies={wixTechnologies}
          />
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Wix Development Process"
            subtitle="Launch in 1-2 weeks"
            steps={zigzagSteps}
            accentColor="#0C6EFC"
          />
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-20 bg-muted" data-testid="section-cta-1">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Ready to Launch Your Wix Site?"
            description="Get a professional website up and running in just 1-2 weeks"
            primaryCTA={{ text: "Start Your Project", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      {/* Results Showcase */}
      <WixResultsShowcase />

      {/* Use Cases */}
      <section id="use-cases" className="py-20" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Wix Sites We've Built</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`usecase-${uc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Badge variant="secondary" className="w-fit mb-4">{uc.industry}</Badge>
                    <div className="w-12 h-12 rounded-full bg-[#0C6EFC]/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#0C6EFC]" />
                    </div>
                    <h3 className="text-xl font-bold mt-4">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{uc.description}</p>
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
            title="Why Choose Us for Wix Development"
            values={whyChooseValues}
            columns={3}
          />
        </div>
      </section>

      {/* Wix vs WordPress */}
      <section className="py-20" data-testid="section-comparison">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Wix vs WordPress: Which is Right for You?</h2>
            <p className="text-muted-foreground mt-4">We help you choose the best platform</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full border-2 border-[#0C6EFC]" data-testid="comparison-wix">
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="h-8 w-8" style={{ color: '#0C6EFC' }} />
                  <h3 className="text-xl font-bold">Choose Wix If...</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "You want to launch quickly (1-2 weeks)",
                    "You need drag-and-drop editing",
                    "You want hosting included",
                    "You prefer simplicity over complexity",
                    "Small to medium business",
                    "Budget: \u00a31,000 - \u00a33,000",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0C6EFC] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full" data-testid="comparison-wordpress">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-8 w-8" style={{ color: '#21759B' }} />
                  <h3 className="text-xl font-bold">Choose WordPress If...</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "You need maximum customization",
                    "You plan to scale significantly",
                    "You want 60,000+ plugins",
                    "You need complex functionality",
                    "Growing business or enterprise",
                    "Budget: \u00a33,000 - \u00a315,000+",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Link href="/contact">
              <Button variant="outline" data-testid="cta-help-decide">
                Not sure? We'll help you decide
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Wix Development FAQs</h2>
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
            title="Let's Build Your Wix Website"
            description="Book a free consultation and we'll show you how Wix can work for your business"
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
