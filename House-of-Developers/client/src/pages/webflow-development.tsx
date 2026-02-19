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
  TrendingUp,
  Zap,
  Award,
  Smartphone,
  ArrowRight,
  Loader2,
  ImageOff,
  AlertTriangle,
  DollarSign,
  Globe,
  Clock,
  Users,
  Palette,
  Code2,
  Headphones,
  Target,
  Layers,
  Monitor,
  Sparkles,
  PenTool,
  Layout,
  MousePointer,
  Eye,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Rocket,
  Settings,
  FileCode,
  Workflow,
  Database,
  Mail,
  BarChart3,
  CreditCard,
  FileText,
  Play,
  Video,
  Box,
  Type,
  Image,
  ShoppingCart,
  Code,
  LayoutGrid,
  RefreshCw,
} from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TechStackIcons } from "@/components/ui/TechStackIcons";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";

const WF_COLOR = "#4353FF";

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
  { label: "Visual Builder", icon: PenTool },
  { label: "Clean Code", icon: Code2 },
  { label: "CMS Built-In", icon: Layers },
  { label: "No Plugins", icon: Settings },
];

const solutions = [
  {
    icon: Monitor,
    title: "Marketing Websites",
    description: "Pixel-perfect marketing sites with custom animations and interactions that convert visitors.",
    features: ["Custom animations & interactions", "Responsive across all devices", "SEO-optimised structure", "Fast page load speeds"],
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional websites for agencies, SaaS companies, and service businesses.",
    features: ["Dynamic CMS content", "Blog & resource centres", "Team & portfolio pages", "Lead capture forms"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Stores",
    description: "Beautiful online stores with Webflow's native e-commerce capabilities.",
    features: ["Product catalogues", "Custom checkout flows", "Stripe integration", "Inventory management"],
  },
];

const webflowTechnologies = [
  { name: "Webflow", slug: "webflow" },
  { name: "JavaScript", slug: "javascript" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Figma", slug: "figma" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Cloudflare", slug: "cloudflare" },
  { name: "GitHub", slug: "github" },
  { name: "Stripe", slug: "stripe" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
];

const zigzagSteps = [
  {
    icon: Eye,
    title: "Discovery & Design",
    points: [
      "Brand and content audit with Figma-to-Webflow planning",
      "Style guide setup for fonts, colours, and spacing",
      "Component library creation and responsive breakpoint strategy",
    ],
  },
  {
    icon: PenTool,
    title: "Build & Animate",
    points: [
      "Pixel-perfect page layouts with custom CSS animations",
      "CMS collection setup and dynamic content binding",
      "Responsive adjustments across all breakpoints",
    ],
  },
  {
    icon: Code2,
    title: "Content & Integration",
    points: [
      "CMS content population, form setup, and automation",
      "Third-party integrations with Zapier and Mailchimp",
      "SEO meta tags, Open Graph, and e-commerce setup",
    ],
  },
  {
    icon: Rocket,
    title: "Optimise & Launch",
    points: [
      "Performance and Core Web Vitals optimisation",
      "Cross-browser and device testing with client training",
      "Domain configuration, launch, and post-launch support",
    ],
  },
];

const resultMetrics = [
  { icon: Palette, label: "Design Fidelity", before: "70%", after: "99%", improvement: "+29 points" },
  { icon: Zap, label: "Page Speed", before: "3.2s", after: "1.1s", improvement: "66% faster" },
  { icon: Target, label: "Conversion Rate", before: "2.1%", after: "5.4%", improvement: "+157%" },
  { icon: TrendingUp, label: "SEO Score", before: "58/100", after: "95/100", improvement: "+37 points" },
  { icon: Smartphone, label: "Mobile Score", before: "64/100", after: "96/100", improvement: "+32 points" },
  { icon: Clock, label: "Time to Launch", before: "12 weeks", after: "4 weeks", improvement: "67% faster" },
];

const useCases = [
  {
    industry: "SaaS",
    title: "SaaS Product Website",
    description: "Marketing site with animated feature sections, pricing tables, and blog CMS",
    results: ["3x more demos", "95+ PageSpeed"],
    icon: Rocket,
  },
  {
    industry: "Agency",
    title: "Creative Agency Portfolio",
    description: "Portfolio with custom scroll animations, case study CMS, and team directory",
    results: ["200% more leads", "4.9s avg session"],
    icon: PenTool,
  },
  {
    industry: "Education",
    title: "Online Course Platform",
    description: "Course catalogue with CMS, Stripe checkout, and student testimonials",
    results: ["\u00a328K first month", "92% completion"],
    icon: GraduationCap,
  },
];

const whyChooseValues = [
  { icon: PenTool, title: "Design-First Approach", description: "Pixel-perfect builds that match your Figma designs exactly", stat: "99% Fidelity" },
  { icon: Zap, title: "Blazing Fast", description: "Webflow's hosted infrastructure delivers sub-second load times", stat: "<1.5s Load" },
  { icon: Code2, title: "Clean Output", description: "Semantic, accessible HTML/CSS without plugin bloat" },
  { icon: Award, title: "Webflow Experts", description: "Certified Webflow developers with 50+ projects delivered", stat: "50+ Sites" },
  { icon: Eye, title: "Visual Editing", description: "Your team can update content without touching code" },
  { icon: Headphones, title: "Ongoing Support", description: "Monthly maintenance and feature enhancements" },
];

const faqs = [
  { q: "What is Webflow and how is it different from WordPress?", a: "Webflow is a visual web development platform that generates clean, production-ready code. Unlike WordPress, it doesn't rely on plugins or themes\u2014everything is built visually with professional-grade output. It's hosted, secure, and incredibly fast out of the box." },
  { q: "Can I edit my Webflow site myself?", a: "Yes! Webflow has a powerful Editor mode that lets you update text, images, blog posts, and CMS content without any coding knowledge. We provide full training so your team can manage content confidently." },
  { q: "Is Webflow good for SEO?", a: "Excellent. Webflow generates clean semantic HTML, supports custom meta tags, auto-generates sitemaps, and scores consistently high on Core Web Vitals. Many Webflow sites outrank WordPress competitors." },
  { q: "Can Webflow handle e-commerce?", a: "Yes! Webflow has native e-commerce with Stripe integration, custom product pages, checkout flows, and inventory management. It's ideal for boutique stores and design-focused brands." },
  { q: "How long does a Webflow project take?", a: "Simple sites (5-10 pages): 2 weeks. Standard sites (10-20 pages): 3-4 weeks. Complex sites with CMS, animations, and e-commerce: 4-6 weeks." },
  { q: "Can you migrate my existing site to Webflow?", a: "Yes! We migrate content, rebuild designs pixel-perfect in Webflow, and set up CMS collections. We handle WordPress, Squarespace, and Wix migrations regularly." },
  { q: "What about Webflow hosting costs?", a: "Webflow hosting starts at \u00a312/month for basic sites and \u00a324/month for CMS sites. Enterprise hosting is available for high-traffic sites. All plans include SSL, CDN, and automatic backups." },
  { q: "Can you add custom animations and interactions?", a: "Absolutely! That's one of Webflow's biggest strengths. We create scroll-triggered animations, hover effects, parallax, Lottie animations, and complex interaction sequences\u2014all without JavaScript." },
  { q: "Do you work from Figma designs?", a: "Yes! We specialise in Figma-to-Webflow builds. We translate your designs pixel-perfect, maintaining exact spacing, typography, and responsive behaviour." },
  { q: "What if I need features Webflow doesn't support natively?", a: "We can extend Webflow with custom code embeds, third-party integrations via Zapier, and API connections. For truly complex requirements, we may recommend a hybrid approach or a different platform." },
];

function WebflowEditorMockup() {
  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <div className="bg-muted h-8 flex items-center gap-2 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-xs text-muted-foreground ml-2">webflow.io/designer</span>
        </div>

        <div className="bg-[#1e1e2e] flex" style={{ minHeight: 220 }}>
          <div className="w-10 bg-[#2d2d3d] border-r border-[#3a3a4a] flex flex-col items-center py-3 gap-2.5">
            {[Layout, Layers, PenTool, MousePointer, Settings].map((Icon, i) => (
              <div key={i} className="w-6 h-6 rounded flex items-center justify-center" style={i === 0 ? { backgroundColor: `${WF_COLOR}30` } : {}}>
                <Icon className="h-3 w-3" style={{ color: i === 0 ? WF_COLOR : "#888" }} />
              </div>
            ))}
          </div>

          <div className="flex-1 p-3">
            <div className="bg-white dark:bg-[#fafafa] rounded-lg overflow-hidden shadow-sm">
              <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded" style={{ backgroundColor: WF_COLOR }} />
                  <span className="text-[10px] font-bold text-gray-900">Acme Inc</span>
                </div>
                <div className="flex gap-3">
                  {["Features", "Pricing", "Blog"].map((n) => (
                    <span key={n} className="text-[8px] text-gray-500">{n}</span>
                  ))}
                  <div className="text-[7px] text-white px-1.5 py-0.5 rounded" style={{ backgroundColor: WF_COLOR }}>Get Started</div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gradient-to-br from-indigo-50 to-blue-50">
                <div className="border-2 border-dashed rounded-lg p-2" style={{ borderColor: `${WF_COLOR}50` }}>
                  <span className="text-[10px] font-bold text-gray-900">Build Better Websites</span>
                  <div className="w-2/3 h-1.5 bg-gray-200 rounded mt-1.5" />
                  <div className="w-1/2 h-1.5 bg-gray-200 rounded mt-1" />
                  <div className="flex gap-1.5 mt-2">
                    <div className="text-[6px] text-white px-1.5 py-0.5 rounded" style={{ backgroundColor: WF_COLOR }}>Start Free</div>
                    <div className="text-[6px] px-1.5 py-0.5 rounded border border-gray-300 text-gray-600">Watch Demo</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 px-3 py-2">
                {["Lightning Fast", "SEO Ready", "Responsive"].map((t) => (
                  <div key={t} className="bg-gray-50 rounded p-1.5 text-center border border-gray-100">
                    <div className="w-4 h-4 rounded-full mx-auto mb-0.5 flex items-center justify-center" style={{ backgroundColor: `${WF_COLOR}10` }}>
                      <Zap className="h-2 w-2" style={{ color: WF_COLOR }} />
                    </div>
                    <span className="text-[7px] text-gray-600">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-12 bg-[#2d2d3d] border-l border-[#3a3a4a] p-2 flex flex-col gap-1.5">
            <div className="text-[6px] text-gray-400 uppercase font-semibold">Style</div>
            {["Layout", "Size", "Space", "Type"].map((label) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span className="text-[5px] text-gray-500">{label}</span>
                <div className="w-full h-3 rounded bg-[#3a3a4a]" />
              </div>
            ))}
          </div>
        </div>
      </Card>

      <motion.div
        className="absolute -top-3 -right-3 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Badge className="text-white border-0 shadow-lg text-xs" style={{ backgroundColor: WF_COLOR }}>Visual Designer</Badge>
      </motion.div>
      <motion.div
        className="absolute -bottom-3 -left-3 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Badge className="text-white border-0 shadow-lg text-xs" style={{ backgroundColor: WF_COLOR }}>Clean Code</Badge>
      </motion.div>
    </div>
  );
}

function OldWebMockup() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border-2 border-red-200 dark:border-red-900 aspect-video p-4 md:p-6 flex flex-col text-left overflow-hidden">
      <div className="border-b-2 border-gray-400 dark:border-gray-600 pb-2 mb-3">
        <span className="text-lg md:text-2xl text-gray-500 dark:text-gray-400" style={{ fontFamily: "Georgia, serif" }}>Old Template Site</span>
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

function ModernWebflowMockup() {
  return (
    <div className="bg-white dark:bg-[#0a0a0a] aspect-video flex flex-col text-left overflow-hidden">
      <div className="h-5 md:h-6 flex items-center gap-2 px-2 md:px-3" style={{ backgroundColor: WF_COLOR }}>
        <Globe className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
        <span className="text-[8px] md:text-[10px] text-white/70">Webflow</span>
      </div>
      <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded flex items-center justify-center" style={{ backgroundColor: `${WF_COLOR}20` }}>
            <Sparkles className="h-2.5 w-2.5 md:h-3 md:w-3" style={{ color: WF_COLOR }} />
          </div>
          <span className="text-[10px] md:text-xs font-semibold text-gray-900 dark:text-white">Acme Inc</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          {["Features", "Pricing", "Blog"].map((n) => (
            <span key={n} className="text-[8px] md:text-[10px] text-gray-500">{n}</span>
          ))}
          <div className="text-white text-[7px] md:text-[8px] px-2 py-0.5 rounded" style={{ backgroundColor: WF_COLOR }}>Get Started</div>
        </div>
      </div>
      <div className="bg-gradient-to-r px-3 md:px-4 py-3 flex flex-col items-center justify-center" style={{ backgroundImage: `linear-gradient(to right, ${WF_COLOR}10, #818cf810)` }}>
        <span className="text-[10px] md:text-sm font-bold text-gray-900 dark:text-white">Build Something Amazing</span>
        <span className="text-[7px] md:text-[9px] text-gray-500 mt-0.5">The visual way to build for the web</span>
        <div className="flex gap-2 mt-2">
          <div className="text-white text-[6px] md:text-[8px] px-2 py-0.5 rounded" style={{ backgroundColor: WF_COLOR }}>Start Free</div>
          <div className="border border-border text-[6px] md:text-[8px] px-2 py-0.5 rounded text-gray-600 dark:text-gray-300">Watch Demo</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 md:gap-2 px-3 md:px-4 py-2 flex-1 min-h-0">
        {[
          { title: "Lightning Fast", icon: Zap },
          { title: "SEO Ready", icon: TrendingUp },
          { title: "Responsive", icon: Smartphone },
        ].map((card) => (
          <div key={card.title} className="rounded-md p-1.5 md:p-2 flex flex-col items-center justify-center border border-border/30" style={{ backgroundColor: `${WF_COLOR}05` }}>
            <card.icon className="h-3 w-3 md:h-4 md:w-4 mb-0.5" style={{ color: WF_COLOR }} />
            <span className="text-[7px] md:text-[9px] font-medium text-gray-700 dark:text-gray-300">{card.title}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2 px-3 md:px-4 py-1.5 bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 flex-wrap">
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded-full">
          <Zap className="h-2 w-2 md:h-2.5 md:w-2.5" />1.1s load
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-1.5 py-0.5 rounded-full">
          <Eye className="h-2 w-2 md:h-2.5 md:w-2.5" />99% fidelity
        </span>
        <span className="flex items-center gap-1 text-[8px] md:text-[9px] bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-1.5 py-0.5 rounded-full">
          <TrendingUp className="h-2 w-2 md:h-2.5 md:w-2.5" />SEO 95+
        </span>
      </div>
    </div>
  );
}

function WebflowResultsShowcase() {
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
          <h2 className="text-3xl md:text-4xl font-bold">Real Webflow Results We've Delivered</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">See the transformation from a template site to a custom Webflow build</p>
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
                <span className="text-xs text-muted-foreground ml-2">acme-inc.com</span>
              </div>

              <div className="relative">
                <div className="w-full"><ModernWebflowMockup /></div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                  <OldWebMockup />
                </div>
                <div className="absolute top-0 h-full w-0.5 z-20" style={{ left: `${sliderPos}%`, transform: "translateX(-50%)", backgroundColor: WF_COLOR }}>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full text-white flex items-center justify-center shadow-lg cursor-ew-resize"
                    style={{ backgroundColor: WF_COLOR }}
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
                <span className="bg-red-500/10 text-red-700 dark:text-red-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Template Site</span>
              </div>
              <div className="absolute top-10 right-3 z-30">
                <span className="bg-green-500/10 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">Custom Webflow</span>
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
                  <motion.div key={metric.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}>
                    <Card className="p-4" data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" style={{ color: WF_COLOR }} />
                        <span className="text-sm font-semibold text-muted-foreground">{metric.label}</span>
                      </div>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-lg text-muted-foreground line-through">{metric.before}</span>
                        <ArrowRight className="h-5 w-5 flex-shrink-0" style={{ color: WF_COLOR }} />
                        <span className="text-2xl md:text-3xl font-bold" style={{ color: WF_COLOR }}>{metric.after}</span>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center gap-1 bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 px-2.5 py-1 rounded-full text-xs font-semibold">
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

export default function WebflowDevelopmentPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" data-testid="webflow-development-page">
      <SEO
        title="Webflow Development UK | Custom Webflow Sites"
        description="Professional Webflow development. Custom designs, CMS integrations, animations, and responsive websites. Pixel-perfect Webflow builds."
        canonical="/services/web-development/cms/webflow"
      />
      {/* Hero */}
      <section className="py-16 md:py-24" data-testid="section-webflow-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Web Development", href: "/services/web-development" },
                { label: "CMS", href: "/services/cms-development" },
                { label: "Webflow" },
              ]} />

              <div className="w-16 h-16 mt-6 mb-4 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${WF_COLOR}15` }}>
                <img src="https://cdn.simpleicons.org/webflow/4353FF" alt="Webflow" className="w-8 h-8" />
              </div>

              <Badge variant="secondary" className="mb-4" data-testid="badge-webflow">
                <PenTool className="h-3 w-3 mr-1" /> Webflow Development
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold" data-testid="heading-webflow-hero">
                Webflow Website Development Services
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${WF_COLOR}, #818cf8)` }}>
                Design-Led Development, Production-Ready Code
              </p>

              <p className="text-xl text-muted-foreground mt-6">
                Build pixel-perfect, blazing-fast websites with Webflow's visual development platform. Custom animations, CMS-powered content, and clean code\u2014without plugin bloat.
              </p>

              <div className="flex gap-3 flex-wrap mt-6">
                {featurePills.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <span key={pill.label} className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium" style={{ backgroundColor: `${WF_COLOR}15`, color: WF_COLOR }} data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link href="/contact">
                  <Button data-testid="cta-start-webflow">Start Your Webflow Project</Button>
                </Link>
                <Button variant="outline" onClick={() => handleScrollTo("use-cases")} data-testid="cta-view-examples">
                  View Examples
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6" data-testid="trust-signal">
                Trusted by SaaS companies, agencies, and startups
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <WebflowEditorMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Webflow */}
      <section className="py-20 bg-muted" data-testid="section-why-webflow">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Webflow</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">The professional's choice for design-led web development</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Globe, stat: "3.5M+", label: "Sites Built" },
              { icon: Code2, stat: "0", label: "Plugins Needed" },
              { icon: Zap, stat: "<1.5s", label: "Avg Load Time" },
              { icon: Users, stat: "200K+", label: "Designers Use It" },
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
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${WF_COLOR}15` }}>
                    <Icon className="h-7 w-7" style={{ color: WF_COLOR }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent">{item.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20" data-testid="section-solutions">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Webflow Solutions We Build</h2>
            <p className="text-muted-foreground mt-4">From marketing sites to full CMS-powered platforms</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`solution-${s.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${WF_COLOR}15` }}>
                      <Icon className="h-7 w-7" style={{ color: WF_COLOR }} />
                    </div>
                    <h3 className="text-xl font-bold mt-6">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                    <ul className="mt-6 space-y-2 flex-1">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: WF_COLOR }} />
                          <span className="text-sm">{f}</span>
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

      {/* Webflow vs WordPress */}
      <section className="py-20 bg-muted" data-testid="section-comparison">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Webflow vs WordPress: Which is Right?</h2>
            <p className="text-muted-foreground mt-4">Both are powerful\u2014here's how to choose</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full border-2" style={{ borderColor: WF_COLOR }} data-testid="comparison-webflow">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-8 w-8" style={{ color: WF_COLOR }} />
                  <h3 className="text-xl font-bold">Choose Webflow If...</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Design quality is your top priority",
                    "You want pixel-perfect custom animations",
                    "You prefer clean code without plugins",
                    "You need fast, secure hosted infrastructure",
                    "SaaS, agency, or design-focused brand",
                    "Budget: \u00a33,000 - \u00a315,000",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: WF_COLOR }} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="p-8 h-full" data-testid="comparison-wordpress">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="h-8 w-8" style={{ color: "#21759B" }} />
                  <h3 className="text-xl font-bold">Choose WordPress If...</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "You need 60,000+ plugins ecosystem",
                    "Complex backend functionality required",
                    "Large-scale e-commerce (WooCommerce)",
                    "Multisite or multilingual needs",
                    "Enterprise or content-heavy platform",
                    "Budget: \u00a33,000 - \u00a320,000+",
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

      {/* Integrations */}
      <section className="py-20" data-testid="section-integrations">
        <div className="max-w-7xl mx-auto px-6">
          <TechStackIcons
            title="Technologies We Use"
            subtitle="We use industry-leading technologies to build products that are fast, reliable, and maintainable."
            technologies={webflowTechnologies}
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted" data-testid="section-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Webflow Development Process"
            subtitle="From design to launch in 3-4 weeks"
            steps={zigzagSteps}
            accentColor={WF_COLOR}
          />
        </div>
      </section>

      {/* CTA 1 */}
      <section className="py-20" data-testid="section-cta-1">
        <div className="max-w-4xl mx-auto px-6">
          <CTASection
            variant="bordered"
            title="Ready to Build with Webflow?"
            description="Get a pixel-perfect website that loads fast and converts visitors into customers"
            primaryCTA={{ text: "Start Your Project", link: "/contact" }}
            size="medium"
          />
        </div>
      </section>

      {/* Results Showcase */}
      <WebflowResultsShowcase />

      {/* Use Cases */}
      <section id="use-cases" className="py-20" data-testid="section-use-cases">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Webflow Sites We've Built</h2>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.title} variants={staggerItem}>
                  <Card className="p-8 h-full flex flex-col" data-testid={`usecase-${uc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Badge variant="secondary" className="w-fit mb-4">{uc.industry}</Badge>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${WF_COLOR}15` }}>
                      <Icon className="h-6 w-6" style={{ color: WF_COLOR }} />
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
            title="Why Choose Us for Webflow"
            values={whyChooseValues}
            columns={3}
            accentColor={WF_COLOR}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Webflow Development FAQs</h2>
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
            title="Let's Build Your Webflow Website"
            description="Book a free consultation and discover why Webflow is the designer's choice for modern web development"
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
