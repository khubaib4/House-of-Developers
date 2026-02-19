import { useState } from "react";
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
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import { CTASection } from "@/components/ui/CTASection";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  Layers,
  FileText,
  Zap,
  Search,
  Smartphone,
  Shield,
  Code2,
  Database,
  Lock,
  Palette,
  Headphones,
  ShoppingBag,
  Target,
  RefreshCw,
  TrendingUp,
  Award,
  GitBranch,
  Users,
  BarChart,
  Settings,
  Bell,
  ShoppingCart,
  Heart,
  CreditCard,
  DollarSign,
  Cloud,
  Package,
  Activity,
  Image,
  TestTube,
  CheckCircle,
  Paintbrush,
  FileCode,
  Server,
  Triangle,
  Stethoscope,
  Building,
  GraduationCap,
  Utensils,
  Rocket,
  Home,
  Folder,
  Star,
} from "lucide-react";

const WEB_DEV_COLOR = "#3B82F6";

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function BrowserFrame({
  url,
  children,
  className = "",
  glowColor,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-border bg-card shadow-2xl ${className}`}
      style={glowColor ? { boxShadow: `0 25px 50px -12px ${glowColor}30` } : {}}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/80 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-1.5">
            <Lock className="w-3 h-3" />
            {url}
          </div>
        </div>
        <RefreshCw className="w-3 h-3 text-muted-foreground" />
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function CodeEditorMockup() {
  return (
    <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden flex-1 min-w-0">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#333]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <div className="flex gap-0 ml-4">
          <div className="px-3 py-1 text-[10px] text-white bg-[#1e1e1e] border-t-2 border-t-[#3B82F6] rounded-t">
            HomePage.tsx
          </div>
          <div className="px-3 py-1 text-[10px] text-gray-500 bg-[#2d2d2d] rounded-t">
            styles.css
          </div>
        </div>
      </div>

      <div className="p-4 font-mono text-[10px] leading-relaxed overflow-hidden">
        {[
          { num: 1, content: <><span style={{ color: "#569CD6" }}>import</span> <span style={{ color: "#DCDCAA" }}>{"{ Hero, Nav }"}</span> <span style={{ color: "#569CD6" }}>from</span> <span style={{ color: "#CE9178" }}>'./components'</span></> },
          { num: 2, content: <><span style={{ color: "#569CD6" }}>import</span> <span style={{ color: "#DCDCAA" }}>{"{ motion }"}</span> <span style={{ color: "#569CD6" }}>from</span> <span style={{ color: "#CE9178" }}>'framer-motion'</span></> },
          { num: 3, content: null },
          { num: 4, content: <><span style={{ color: "#569CD6" }}>export default function</span> <span style={{ color: "#DCDCAA" }}>HomePage</span><span style={{ color: "#D4D4D4" }}>() {"{"}</span></> },
          { num: 5, content: <><span style={{ color: "#D4D4D4" }}>{"  "}</span><span style={{ color: "#569CD6" }}>return</span> <span style={{ color: "#D4D4D4" }}>(</span></> },
          { num: 6, content: <><span style={{ color: "#D4D4D4" }}>{"    "}&lt;</span><span style={{ color: "#569CD6" }}>main</span> <span style={{ color: "#9CDCFE" }}>className</span><span style={{ color: "#D4D4D4" }}>=</span><span style={{ color: "#CE9178" }}>"min-h-screen"</span><span style={{ color: "#D4D4D4" }}>&gt;</span></> },
          { num: 7, content: <><span style={{ color: "#D4D4D4" }}>{"      "}&lt;</span><span style={{ color: "#4EC9B0" }}>Nav</span> <span style={{ color: "#9CDCFE" }}>brand</span><span style={{ color: "#D4D4D4" }}>=</span><span style={{ color: "#CE9178" }}>"BrandName"</span> <span style={{ color: "#D4D4D4" }}>/&gt;</span></> },
          { num: 8, content: <><span style={{ color: "#D4D4D4" }}>{"      "}&lt;</span><span style={{ color: "#4EC9B0" }}>Hero</span> <span style={{ color: "#9CDCFE" }}>title</span><span style={{ color: "#D4D4D4" }}>=</span><span style={{ color: "#CE9178" }}>"Build Extraordinary"</span> <span style={{ color: "#D4D4D4" }}>/&gt;</span></> },
          { num: 9, content: <><span style={{ color: "#D4D4D4" }}>{"      "}&lt;</span><span style={{ color: "#4EC9B0" }}>Features</span> <span style={{ color: "#9CDCFE" }}>columns</span><span style={{ color: "#D4D4D4" }}>={"{"}</span><span style={{ color: "#B5CEA8" }}>3</span><span style={{ color: "#D4D4D4" }}>{"}"} /&gt;</span></> },
          { num: 10, content: <><span style={{ color: "#D4D4D4" }}>{"      "}&lt;</span><span style={{ color: "#4EC9B0" }}>Testimonials</span> <span style={{ color: "#D4D4D4" }}>/&gt;</span></> },
          { num: 11, content: <><span style={{ color: "#D4D4D4" }}>{"      "}&lt;</span><span style={{ color: "#4EC9B0" }}>CTASection</span> <span style={{ color: "#9CDCFE" }}>variant</span><span style={{ color: "#D4D4D4" }}>=</span><span style={{ color: "#CE9178" }}>"gradient"</span> <span style={{ color: "#D4D4D4" }}>/&gt;</span></> },
          { num: 12, content: <><span style={{ color: "#D4D4D4" }}>{"    "}&lt;/</span><span style={{ color: "#569CD6" }}>main</span><span style={{ color: "#D4D4D4" }}>&gt;</span></> },
          { num: 13, content: <><span style={{ color: "#D4D4D4" }}>{"  "})</span></> },
          { num: 14, content: <><span style={{ color: "#D4D4D4" }}>{"}"}</span></> },
        ].map((line) => (
          <div key={line.num} className="flex">
            <span className="w-6 text-right mr-4 text-gray-600 select-none">{line.num}</span>
            <span>{line.content || "\u00A0"}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 py-1 text-white text-[9px]" style={{ backgroundColor: WEB_DEV_COLOR }}>
        <span>TypeScript React</span>
        <span>Ln 8, Col 32</span>
      </div>
    </div>
  );
}

function LiveWebPreviewMockup() {
  return (
    <div className="relative flex-1 min-w-0">
      <div className="absolute -top-3 -right-3 z-10">
        <Badge className="bg-green-500 text-white border-0 shadow-lg text-[10px] animate-pulse">
          Live Preview
        </Badge>
      </div>
      <BrowserFrame url="houseofdevelopers.co.uk/projects/brand" glowColor={WEB_DEV_COLOR}>
        <div className="bg-background min-h-[280px]">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: "white" }} />
              <span className="text-white text-[10px] font-bold">BrandName</span>
            </div>
            <div className="text-white text-[12px] font-bold mb-1">Build Something Extraordinary</div>
            <div className="text-white/70 text-[8px] mb-2">Modern websites that drive growth</div>
            <div className="flex gap-1.5 justify-center">
              <div className="bg-white text-blue-600 text-[7px] px-2 py-0.5 rounded font-semibold">Get Started</div>
              <div className="border border-white/50 text-white text-[7px] px-2 py-0.5 rounded">Learn More</div>
            </div>
          </div>

          <div className="p-3">
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { label: "Speed", val: "< 1s", color: "#3B82F6" },
                { label: "SEO Score", val: "98/100", color: "#10B981" },
                { label: "Mobile Ready", val: "100%", color: "#8B5CF6" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg p-2 bg-muted/50 border border-border">
                  <div className="text-[10px] font-bold" style={{ color: s.color }}>{s.val}</div>
                  <div className="text-[7px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              {[
                { name: "Responsive Design", status: "Live" },
                { name: "SEO Optimised", status: "Live" },
                { name: "Analytics Integrated", status: "Active" },
              ].map((row) => (
                <div key={row.name} className="flex items-center justify-between rounded px-2 py-1 bg-muted/30 border border-border">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span className="text-[8px] text-foreground">{row.name}</span>
                  </div>
                  <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-600">{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrowserFrame>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative">
      <motion.div
        className="absolute -top-3 left-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Badge className="text-white border-0 shadow-lg text-[10px]" style={{ backgroundColor: WEB_DEV_COLOR }}>Next.js & React</Badge>
      </motion.div>
      <motion.div
        className="absolute -top-3 right-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
      >
        <Badge className="text-white border-0 shadow-lg text-[10px]" style={{ backgroundColor: "#10B981" }}>99.9% Uptime</Badge>
      </motion.div>
      <motion.div
        className="absolute -bottom-3 left-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Badge variant="outline" className="shadow-lg text-[10px] bg-background">SEO Optimised</Badge>
      </motion.div>
      <motion.div
        className="absolute -bottom-3 right-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
      >
        <Badge variant="outline" className="shadow-lg text-[10px] bg-background">Mobile-First</Badge>
      </motion.div>

      <div className="flex gap-3 items-stretch">
        <CodeEditorMockup />
        <div className="flex flex-col items-center justify-center px-1">
          <div className="text-[9px] text-muted-foreground mb-1">Builds to</div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </div>
        <LiveWebPreviewMockup />
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/luxewear" glowColor="#10B981">
      <div className="bg-white dark:bg-gray-50 min-h-[380px]">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200">
          <span className="text-gray-900 text-sm font-bold italic">LuxeWear</span>
          <div className="flex items-center gap-3 text-[10px] text-gray-600">
            <span>Women</span>
            <span>Men</span>
            <span className="text-red-500 font-semibold">Sale</span>
            <span>About</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-gray-500" />
            <div className="relative">
              <ShoppingBag className="w-3.5 h-3.5 text-gray-500" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-black text-white text-[7px] rounded-full flex items-center justify-center">3</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-0">
          <div className="bg-gradient-to-br from-rose-100 to-pink-50 p-6 flex items-center justify-center min-h-[120px]">
            <div className="text-center">
              <Heart className="w-8 h-8 text-rose-300 mx-auto mb-2" />
              <p className="text-gray-400 text-[9px]">Featured Look</p>
            </div>
          </div>
          <div className="p-4 flex flex-col justify-center">
            <span className="text-[8px] text-gray-500 uppercase tracking-wider">New Collection</span>
            <p className="text-gray-900 text-sm font-bold mt-1">Spring / Summer 2025</p>
            <p className="text-gray-500 text-[9px] mt-1.5 leading-relaxed">Discover the latest trends in premium fashion</p>
            <div className="flex gap-2 mt-3">
              <div className="bg-gray-900 text-white text-[9px] px-3 py-1.5 rounded font-medium">Shop Now</div>
              <div className="text-gray-600 text-[9px] px-3 py-1.5 underline">View Lookbook</div>
            </div>
          </div>
        </div>

        <div className="px-4 py-3">
          <div className="grid grid-cols-4 gap-2">
            {[
              { brand: "LUXE", name: "Silk Dress", price: "£189", color: "bg-rose-50" },
              { brand: "MAISON", name: "Wool Blazer", price: "£249", color: "bg-blue-50" },
              { brand: "LUXE", name: "Leather Bag", price: "£129", color: "bg-amber-50" },
              { brand: "ATELIER", name: "Sneakers", price: "£89", color: "bg-green-50" },
            ].map((p) => (
              <div key={p.name} className="group">
                <div className={`${p.color} rounded-lg aspect-[3/4] flex items-center justify-center`}>
                  <ShoppingBag className="w-5 h-5 text-gray-300" />
                </div>
                <p className="text-gray-400 text-[7px] mt-1.5 uppercase">{p.brand}</p>
                <p className="text-gray-900 text-[9px] font-semibold">{p.name}</p>
                <p className="text-gray-700 text-[9px] font-bold">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function SaaSMockup() {
  const projects = [
    { name: "Website Redesign", progress: 78, status: "On Track", statusColor: "text-green-500 bg-green-500/10" },
    { name: "Mobile App MVP", progress: 45, status: "At Risk", statusColor: "text-orange-500 bg-orange-500/10" },
    { name: "API Integration", progress: 100, status: "Complete", statusColor: "text-blue-500 bg-blue-500/10" },
    { name: "E-commerce Store", progress: 62, status: "On Track", statusColor: "text-green-500 bg-green-500/10" },
  ];

  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/projecthub" glowColor="#3B82F6">
      <div className="flex min-h-[380px]">
        <div className="w-44 bg-gray-900 dark:bg-gray-950 p-3 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white text-xs font-bold">ProjectHub</span>
          </div>
          <nav className="space-y-1 flex-1">
            {[
              { icon: Home, label: "Dashboard", active: true },
              { icon: Folder, label: "Projects", active: false },
              { icon: Users, label: "Team", active: false },
              { icon: BarChart, label: "Analytics", active: false },
              { icon: Settings, label: "Settings", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs ${
                  item.active
                    ? "bg-blue-500/20 text-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
            <span className="text-gray-400 text-[10px]">Sarah M.</span>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-foreground text-sm font-semibold">Good morning, Sarah 👋</p>
              <p className="text-muted-foreground text-[10px]">Tuesday, Feb 17</p>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-3.5 h-3.5 text-muted-foreground" />
              <div className="bg-blue-500 text-white text-[9px] px-2 py-1 rounded-md font-semibold">+ New Project</div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { label: "Active Projects", value: "12", color: "border-blue-500/30 bg-blue-500/5" },
              { label: "Tasks Due", value: "8", color: "border-orange-500/30 bg-orange-500/5" },
              { label: "Team Members", value: "24", color: "border-green-500/30 bg-green-500/5" },
              { label: "On Track", value: "92%", color: "border-purple-500/30 bg-purple-500/5" },
            ].map((stat) => (
              <div key={stat.label} className={`border rounded-lg p-2 ${stat.color}`}>
                <p className="text-foreground text-sm font-bold">{stat.value}</p>
                <p className="text-muted-foreground text-[8px]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border rounded-lg overflow-hidden">
            <div className="grid grid-cols-[1fr_80px_60px_40px] gap-2 px-3 py-1.5 bg-muted/50 text-[9px] text-muted-foreground font-medium">
              <span>Project</span>
              <span>Progress</span>
              <span>Status</span>
              <span>Team</span>
            </div>
            {projects.map((p) => (
              <div key={p.name} className="grid grid-cols-[1fr_80px_60px_40px] gap-2 px-3 py-2 border-t border-border items-center">
                <span className="text-foreground text-[10px] font-medium">{p.name}</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <span className="text-[8px] text-muted-foreground">{p.progress}%</span>
                </div>
                <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${p.statusColor}`}>
                  {p.status}
                </span>
                <div className="flex -space-x-1">
                  <div className="w-4 h-4 rounded-full bg-blue-400 border border-background" />
                  <div className="w-4 h-4 rounded-full bg-purple-400 border border-background" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function CorporateMockup() {
  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/hartley-law" glowColor="#F59E0B">
      <div className="min-h-[380px]">
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900">
          <span className="text-white text-xs font-bold">Hartley & Associates</span>
          <div className="flex items-center gap-3 text-[10px] text-slate-300">
            <span>Practice Areas</span>
            <span>Attorneys</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className="bg-amber-500 text-white text-[9px] px-2.5 py-1 rounded font-semibold">Book Consultation</div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center">
          <p className="text-white text-base font-bold">Experienced Legal Counsel</p>
          <p className="text-slate-400 text-[10px] mt-1">Protecting Your Rights Since 1994</p>
          <div className="flex gap-2 justify-center mt-3">
            <div className="bg-amber-500 text-white text-[9px] px-3 py-1.5 rounded font-medium">Free Consultation</div>
            <div className="border border-white/30 text-white text-[9px] px-3 py-1.5 rounded">Our Practice</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-0 bg-white dark:bg-gray-100 border-b border-gray-200">
          {["30+ Years", "500+ Cases", "Legal 500", "Free Consult"].map((t) => (
            <div key={t} className="text-center py-2 border-r border-gray-200 last:border-r-0">
              <p className="text-gray-800 text-[9px] font-bold">{t}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 p-3 bg-white dark:bg-gray-50">
          {[
            { icon: Building, label: "Corporate" },
            { icon: Users, label: "Employment" },
            { icon: Home, label: "Property" },
            { icon: Shield, label: "Litigation" },
            { icon: Users, label: "Family" },
            { icon: CreditCard, label: "Tax" },
          ].map((s) => (
            <div key={s.label} className="bg-slate-50 dark:bg-gray-100 rounded-lg p-2 text-center border border-slate-200">
              <s.icon className="w-3.5 h-3.5 text-amber-600 mx-auto mb-1" />
              <p className="text-gray-800 text-[8px] font-medium">{s.label} Law</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function PortfolioMockup() {
  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/artisan-studio" glowColor="#8B5CF6">
      <div className="min-h-[380px] bg-background">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center">
              <Palette className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-foreground text-xs font-bold">Artisan Studio</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
            <span>Work</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
          <div className="bg-purple-500 text-white text-[9px] px-2.5 py-1 rounded font-semibold">Hire Us</div>
        </div>

        <div className="p-4">
          <div className="text-center mb-4">
            <div className="text-foreground text-base font-bold">Creative Design Studio</div>
            <div className="text-muted-foreground text-[10px]">Branding · Web Design · UI/UX</div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { bg: "bg-gradient-to-br from-purple-200 to-pink-100", label: "Brand Identity", tag: "Branding" },
              { bg: "bg-gradient-to-br from-blue-200 to-cyan-100", label: "SaaS Dashboard", tag: "UI/UX" },
              { bg: "bg-gradient-to-br from-amber-200 to-orange-100", label: "Mobile App", tag: "Design" },
            ].map((item) => (
              <div key={item.label}>
                <div className={`${item.bg} rounded-lg aspect-[4/3] flex items-center justify-center`}>
                  <Image className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-foreground text-[9px] font-semibold mt-1.5">{item.label}</p>
                <p className="text-muted-foreground text-[7px]">{item.tag}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { bg: "bg-gradient-to-br from-green-200 to-emerald-100", label: "E-Commerce", tag: "Web" },
              { bg: "bg-gradient-to-br from-rose-200 to-red-100", label: "Restaurant", tag: "Branding" },
              { bg: "bg-gradient-to-br from-indigo-200 to-blue-100", label: "Startup MVP", tag: "UI/UX" },
            ].map((item) => (
              <div key={item.label}>
                <div className={`${item.bg} rounded-lg aspect-[4/3] flex items-center justify-center`}>
                  <Image className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-foreground text-[9px] font-semibold mt-1.5">{item.label}</p>
                <p className="text-muted-foreground text-[7px]">{item.tag}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-foreground text-[10px] font-semibold">Client Reviews</div>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-muted-foreground text-[8px] ml-1">4.9 (127 reviews)</span>
                </div>
              </div>
              <div className="bg-purple-500 text-white text-[8px] px-2 py-1 rounded">View All</div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

const showcaseTabs = [
  { id: "ecommerce", label: "E-Commerce Store" },
  { id: "saas", label: "SaaS Platform" },
  { id: "corporate", label: "Corporate Website" },
  { id: "portfolio", label: "Portfolio / Agency" },
];

const webServices = [
  {
    icon: Globe,
    gradient: "from-[#3B82F6] to-[#6366F1]",
    name: "Custom Website Development",
    description: "Bespoke websites built from scratch, tailored to your brand and business goals. Every pixel crafted for maximum impact and conversion.",
    examples: ["Marketing websites", "Portfolio sites", "Multi-page business sites"],
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "/services/custom-development",
  },
  {
    icon: ShoppingBag,
    gradient: "from-[#10B981] to-[#059669]",
    name: "E-Commerce Development",
    description: "High-converting online stores built with modern technology. From product pages to checkout flows optimised for maximum sales.",
    examples: ["Fashion stores", "B2B wholesalers", "Subscription boxes"],
    tech: ["Shopify", "WooCommerce", "Stripe"],
    link: "/services/web-development/cms/shopify",
  },
  {
    icon: FileText,
    gradient: "from-[#8B5CF6] to-[#6366F1]",
    name: "CMS Development",
    description: "Powerful content management systems that put you in control. Update your website anytime without touching a single line of code.",
    examples: ["WordPress sites", "Blog platforms", "News portals"],
    tech: ["WordPress", "Sanity", "Strapi"],
    link: "/services/cms-development",
  },
  {
    icon: Layers,
    gradient: "from-[#F59E0B] to-[#EF4444]",
    name: "Web Application Development",
    description: "Complex, feature-rich web applications that solve real business problems. Built with scalable architecture for long-term success.",
    examples: ["SaaS platforms", "Client portals", "Dashboard tools"],
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "/services/web-apps",
  },
  {
    icon: Target,
    gradient: "from-[#EC4899] to-[#8B5CF6]",
    name: "Landing Page Development",
    description: "High-converting landing pages designed to turn visitors into customers. A/B tested, optimised, and built for results.",
    examples: ["Product launches", "Lead gen pages", "Event registrations"],
    tech: ["Next.js", "React", "Framer Motion"],
  },
  {
    icon: RefreshCw,
    gradient: "from-[#06B6D4] to-[#3B82F6]",
    name: "Website Redesign",
    description: "Transform your outdated website into a modern, high-performing digital asset. Keep your brand, lose the old design.",
    examples: ["Legacy site updates", "Mobile-first rebuilds", "Performance overhauls"],
    tech: ["React", "Next.js", "Figma"],
  },
];

const industries = [
  {
    icon: ShoppingBag,
    gradient: "from-green-500 to-green-600",
    name: "E-Commerce & Retail",
    description: "Beautiful online stores that convert browsers into buyers.",
    useCases: ["Custom storefronts", "Product catalogues", "Shopping cart & checkout", "Inventory management"],
  },
  {
    icon: Building,
    gradient: "from-blue-500 to-blue-600",
    name: "Professional Services",
    description: "Websites that establish authority and generate leads.",
    useCases: ["Law firm websites", "Consultancy sites", "Accounting portals", "Practice management"],
  },
  {
    icon: Stethoscope,
    gradient: "from-red-500 to-red-600",
    name: "Healthcare",
    description: "GDPR-compliant websites for medical practices and clinics.",
    useCases: ["Clinic websites", "Patient booking", "Service directories", "Health information portals"],
  },
  {
    icon: GraduationCap,
    gradient: "from-purple-500 to-purple-600",
    name: "Education",
    description: "Engaging platforms that inform, educate, and enrol.",
    useCases: ["School websites", "Course platforms", "Alumni portals", "Event registration"],
  },
  {
    icon: Utensils,
    gradient: "from-orange-500 to-orange-600",
    name: "Hospitality",
    description: "Stunning sites for restaurants, hotels, and venues.",
    useCases: ["Restaurant menus & booking", "Hotel showcases", "Event venues", "Online ordering"],
  },
  {
    icon: Home,
    gradient: "from-cyan-500 to-cyan-600",
    name: "Real Estate",
    description: "Property listing sites that attract buyers and sellers.",
    useCases: ["Property listings", "Agent profiles", "Virtual tours", "Mortgage calculators"],
  },
];

const webDevTechTabs = [
  {
    label: "Frontend",
    technologies: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Vue.js", slug: "vuedotjs" },
      { name: "Angular", slug: "angular" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Vite", slug: "vite" },
      { name: "Framer Motion", slug: "framer" },
    ],
  },
  {
    label: "Backend",
    technologies: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "Python", slug: "python" },
      { name: "PHP", slug: "php" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Redis", slug: "redis" },
      { name: "GraphQL", slug: "graphql" },
    ],
  },
  {
    label: "CMS & E-Commerce",
    technologies: [
      { name: "WordPress", slug: "wordpress" },
      { name: "Shopify", slug: "shopify" },
      { name: "WooCommerce", slug: "woocommerce" },
      { name: "Sanity", slug: "sanity" },
      { name: "Contentful", slug: "contentful" },
      { name: "Strapi", slug: "strapi" },
      { name: "Stripe", slug: "stripe" },
      { name: "PayPal", slug: "paypal" },
    ],
  },
  {
    label: "Cloud & DevOps",
    technologies: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Vercel", slug: "vercel" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "Docker", slug: "docker" },
      { name: "GitHub", slug: "github" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "DigitalOcean", slug: "digitalocean" },
      { name: "Terraform", slug: "terraform" },
    ],
  },
  {
    label: "Design & Tools",
    technologies: [
      { name: "Figma", slug: "figma" },
      { name: "Adobe XD", slug: "adobexd" },
      { name: "Jest", slug: "jest" },
      { name: "Cypress", slug: "cypress" },
      { name: "Playwright", slug: "playwright" },
      { name: "Sentry", slug: "sentry" },
      { name: "Datadog", slug: "datadog" },
      { name: "Grafana", slug: "grafana" },
    ],
  },
];

const caseStudies = [
  {
    gradient: "from-green-600 to-teal-600",
    icon: ShoppingBag,
    industry: "E-Commerce",
    title: "LuxeWear - Premium Fashion Store",
    description: "Complete online store for a premium fashion brand with custom design, advanced product filtering, wishlist functionality, and seamless Stripe checkout. Built on WooCommerce with a fully custom theme.",
    features: ["🛍️ Custom product catalogue with advanced filters", "💳 Stripe checkout with Apple Pay & Google Pay", "❤️ Wishlist and saved items for returning customers", "📱 Fully responsive mobile shopping experience", "📊 Admin dashboard with sales analytics"],
    tech: ["WordPress", "WooCommerce", "Stripe", "AWS CloudFront"],
    timeline: "8 weeks • Fashion Brand, London",
  },
  {
    gradient: "from-blue-600 to-purple-600",
    icon: Layers,
    industry: "SaaS Platform",
    title: "ProjectHub - Team Management Tool",
    description: "Full-featured SaaS platform for project management with real-time collaboration, task boards, file sharing, and team analytics. Built from scratch for a startup preparing for their Series A.",
    features: ["📋 Kanban boards with drag-and-drop tasks", "👥 Real-time team collaboration and chat", "📊 Project analytics and progress tracking", "🔔 Smart notifications and deadline alerts", "📁 File sharing with version history"],
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    timeline: "12 weeks • Tech Startup, Manchester",
  },
  {
    gradient: "from-amber-600 to-orange-600",
    icon: Building,
    industry: "Professional Services",
    title: "Hartley & Associates - Law Firm",
    description: "Professional WordPress website for a leading law firm with case study system, attorney profiles, practice area pages, integrated booking, and SEO strategy that achieved #1 Google rankings.",
    features: ["⚖️ Practice area pages with detailed content", "👨‍💼 Attorney profiles with credentials", "📅 Integrated appointment booking system", "📝 Blog and legal resources section", "🔍 SEO-optimised for local search rankings"],
    tech: ["WordPress", "Custom Theme", "MySQL", "Cloudflare"],
    timeline: "6 weeks • Law Firm, Birmingham",
  },
];

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Timelines vary by project type. A landing page takes 1-2 weeks, a business website 4-6 weeks, an e-commerce store 6-10 weeks, and a complex web application 12-20 weeks. We provide a detailed project timeline after discovery. We always deliver on schedule.",
  },
  {
    q: "What's included in a website project?",
    a: "Every project includes: UX research and wireframes, custom design (Figma), responsive development, cross-browser testing, SEO setup (meta tags, sitemap, robots.txt), Google Analytics, performance optimisation, SSL certificate, and 30-day post-launch support.",
  },
  {
    q: "Do you work with existing brands or create new ones?",
    a: "Both! If you have a brand, we design within it. If you need branding, our design team can create logos, colour palettes, and brand guidelines as part of or alongside the web project.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Absolutely. We design mobile-first—starting with the smallest screen and scaling up. Every website is tested on iOS and Android phones, tablets, and desktops. We test on real devices, not just browser simulations.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes! We build on user-friendly CMS platforms (WordPress, Sanity) so you can update content, add blog posts, change images, and manage products without touching code. We provide training and documentation.",
  },
  {
    q: "Do you provide hosting?",
    a: "We can recommend and set up hosting, but you own it directly (no lock-in). We typically use AWS, Vercel, or DigitalOcean depending on your needs. We help you understand costs and manage the setup.",
  },
  {
    q: "What about SEO?",
    a: "Every website is built with SEO best practices: semantic HTML, fast load times, Core Web Vitals optimisation, meta tags, Open Graph, structured data, sitemaps, and clean URL structure. We don't do ongoing SEO campaigns but build the perfect foundation.",
  },
  {
    q: "How do you handle revisions?",
    a: "Our process includes structured feedback rounds: 2 design revision rounds and 1 development revision round. We use Figma for design feedback (comment directly on designs) and maintain clear communication throughout.",
  },
  {
    q: "Will my website be secure?",
    a: "Security is built in from day one: SSL certificates, input validation, SQL injection prevention, regular updates, secure authentication, GDPR-compliant cookie handling, and OWASP guidelines. We never cut corners on security.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of post-launch support (bug fixes, tweaks). After that, we offer maintenance packages covering updates, backups, monitoring, and ongoing development. We're a long-term partner, not a one-time vendor.",
  },
  {
    q: "How much does a website cost?",
    a: "Landing pages start at £3,000-£5,000. Business websites range from £5,000-£15,000. E-commerce stores run £10,000-£30,000. Complex web applications are £20,000+. We provide detailed, itemised quotes after a free discovery session.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes, we offer monthly maintenance packages that include security updates, backups, performance monitoring, content updates, and priority support. Packages start at £300/month depending on the size and complexity of your website.",
  },
];

export default function WebDevelopmentPage() {
  const [activeShowcase, setActiveShowcase] = useState("ecommerce");

  return (
    <div className="min-h-screen">
      <SEO
        title="Web Development Services UK | Custom Websites"
        description="Custom web development services UK. React, Next.js, full-stack applications. Fast, secure, scalable. 100+ web projects delivered. Free consultation."
        canonical="/services/web-development"
      />
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/services" },
                  { label: "Web Development" },
                ]}
              />

              <Badge variant="secondary" className="mt-6 mb-4">
                <Globe className="h-3 w-3 mr-1" /> Web Development
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Web Development Services
              </h1>

              <p className="text-xl md:text-2xl font-semibold mt-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${WEB_DEV_COLOR}, #a855f7)` }}>
                Websites & Applications That Drive Real Business Growth
              </p>

              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                From stunning marketing websites to complex SaaS platforms, we build web solutions that combine beautiful design with powerful functionality. Every project delivered on time, on budget, and built to scale.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: Palette, label: "Design-First" },
                  { icon: Zap, label: "Lightning Fast" },
                  { icon: Smartphone, label: "Mobile-First" },
                  { icon: Search, label: "SEO Built-In" },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted border border-border text-sm"
                  >
                    <pill.icon className="w-3.5 h-3.5" style={{ color: WEB_DEV_COLOR }} />
                    <span className="text-foreground text-sm">{pill.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-4 mt-8">
                {[
                  { stat: "150+", label: "Projects" },
                  { stat: "98%", label: "Satisfaction" },
                  { stat: "8 Yrs", label: "Experience" },
                  { stat: "50ms", label: "Load Time" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold" style={{ color: WEB_DEV_COLOR }}>{s.stat}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 mt-8 flex-wrap">
                <Link href="/contact">
                  <Button size="lg">
                    Start Your Project
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" onClick={() => { const el = document.getElementById("portfolio"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>
                  View Our Work
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <HeroMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY WEB DEVELOPMENT */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Invest in Professional Web Development?</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Your website is your most important digital asset. It's the first impression potential
                customers have of your business. A professionally built website doesn't just look
                good—it drives traffic, converts visitors, and grows your revenue.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                DIY website builders promise quick results, but they come with hidden limitations:
                poor performance, limited SEO, cookie-cutter designs, and vendor lock-in.
                Professional development gives you a website that's truly yours—fast, unique, and
                built to grow with your business.
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Signs You Need a Professional Website</h3>
                <div className="space-y-3">
                  {[
                    "Your current site loads slowly or looks outdated",
                    "You're losing customers to competitors with better sites",
                    "Your website doesn't rank on Google",
                    "You can't update content without developer help",
                    "Your site doesn't work properly on mobile",
                    "You need features that template builders can't provide",
                  ].map((sign) => (
                    <div key={sign} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: WEB_DEV_COLOR }} />
                      <span className="text-foreground">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Professional vs DIY Website Builders</h3>
                <div className="overflow-hidden rounded-lg border border-border">
                  <div className="grid grid-cols-3 bg-muted/50 px-4 py-2 text-sm font-semibold text-foreground border-b border-border">
                    <span>Feature</span>
                    <span className="text-center">Professional</span>
                    <span className="text-center">DIY Builder</span>
                  </div>
                  {[
                    { feature: "Unique custom design", pro: "✓", diy: "✗" },
                    { feature: "Fast load times (<2s)", pro: "✓", diy: "⚠️" },
                    { feature: "Full SEO control", pro: "✓", diy: "⚠️" },
                    { feature: "Code ownership", pro: "✓", diy: "✗" },
                    { feature: "Custom functionality", pro: "✓", diy: "✗" },
                    { feature: "No monthly platform fees", pro: "✓", diy: "✗" },
                    { feature: "Scales with business", pro: "✓", diy: "⚠️" },
                    { feature: "Lower upfront cost", pro: "✗", diy: "✓" },
                    { feature: "Quick to set up", pro: "✗", diy: "✓" },
                    { feature: "Long-term value", pro: "✓", diy: "⚠️" },
                  ].map((row) => (
                    <div key={row.feature} className="grid grid-cols-3 px-4 py-2.5 text-sm border-b border-border last:border-0">
                      <span className="text-foreground">{row.feature}</span>
                      <span className={`text-center ${row.pro === "✓" ? "text-green-500" : "text-red-500"}`}>{row.pro}</span>
                      <span className={`text-center ${row.diy === "✓" ? "text-green-500" : row.diy === "⚠️" ? "text-amber-500" : "text-red-500"}`}>{row.diy}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WEB SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Web Development Services</h2>
            <p className="text-muted-foreground mt-4">End-to-end solutions for every business need</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {webServices.map((service) => {
              const Icon = service.icon;
              const cardContent = (
                <Card className="p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#3B82F6] transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{service.description}</p>
                  <div className="mt-4 space-y-1.5">
                    {service.examples.map((ex) => (
                      <div key={ex} className="flex items-center gap-2 text-sm text-foreground">
                        <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: WEB_DEV_COLOR }} />
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {service.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  {"link" in service && (
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: WEB_DEV_COLOR }}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Card>
              );
              return (
                <motion.div key={service.name} variants={itemVariants}>
                  {"link" in service ? (
                    <Link href={(service as { link: string }).link} className="block h-full">
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA 1 */}
      <div className="max-w-7xl mx-auto px-6">
        <CTASection
          variant="bordered"
          title="Not Sure Which Service You Need?"
          description="Book a free consultation and we'll recommend the right solution for your business"
          primaryCTA={{ text: "Get Free Advice", link: "/contact" }}
          size="medium"
        />
      </div>

      {/* INTERACTIVE WEB SHOWCASE */}
      <section id="portfolio" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">See What We Build</h2>
            <p className="text-muted-foreground mt-4">Interactive previews of the types of websites we create</p>
          </motion.div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {showcaseTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeShowcase === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveShowcase(tab.id)}
                style={activeShowcase === tab.id ? { background: WEB_DEV_COLOR, borderColor: WEB_DEV_COLOR } : undefined}
                className={activeShowcase === tab.id ? "text-white" : ""}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <motion.div
            key={activeShowcase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto overflow-x-auto -mx-6 px-6 pb-4"
          >
            <div className="min-w-[640px]">
              {activeShowcase === "ecommerce" && <EcommerceMockup />}
              {activeShowcase === "saas" && <SaaSMockup />}
              {activeShowcase === "corporate" && <CorporateMockup />}
              {activeShowcase === "portfolio" && <PortfolioMockup />}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Industries We Build For</h2>
            <p className="text-muted-foreground mt-4">Deep expertise across key sectors</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.name} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${ind.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{ind.description}</p>
                    <div className="mt-4 space-y-2">
                      {ind.useCases.map((uc) => (
                        <div key={uc} className="flex items-center gap-2 text-sm text-foreground">
                          <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: WEB_DEV_COLOR }} />
                          <span>{uc}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Choose House of Developers"
            subtitle="What sets our web development apart"
            columns={3}
            accentColor={WEB_DEV_COLOR}
            values={[
              { icon: Palette, title: "Design-First Approach", description: "Every project starts with UX research and wireframes before a single line of code is written" },
              { icon: Zap, title: "Performance Obsessed", description: "We target sub-2 second load times and 90+ Lighthouse scores on every project" },
              { icon: Smartphone, title: "Mobile-First Always", description: "Designed for mobile first, then scaled up—because 60% of traffic is mobile" },
              { icon: TrendingUp, title: "Built for SEO", description: "Clean code structure, semantic HTML, Core Web Vitals optimised from day one" },
              { icon: Lock, title: "Security Built-In", description: "SSL, input validation, OWASP compliance—security is never an afterthought" },
              { icon: Headphones, title: "Ongoing Support", description: "We don't disappear after launch—dedicated support and maintenance packages" },
              { icon: Code2, title: "Clean Code", description: "Documented, maintainable code your team can understand and extend" },
              { icon: GitBranch, title: "Agile Process", description: "Weekly updates, transparent progress, and flexibility throughout development" },
              { icon: Award, title: "UK-Based Team", description: "All development done in-house by our UK team—no outsourcing, no surprises" },
            ]}
          />
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <TabbedTechStack
            tabs={webDevTechTabs}
            title="Technologies We Build With"
            subtitle="We use industry-leading technologies to build products that are fast, reliable, and maintainable."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Web Development Process"
            subtitle="A proven process delivering projects on time and on budget"
            steps={[
              { icon: Search, title: "Discovery & Strategy", points: ["Deep-dive into your business goals and target audience", "Competitor analysis and market research", "Technical requirements and scope definition"] },
              { icon: Palette, title: "Design & Prototyping", points: ["Wireframes and user experience mapping", "High-fidelity Figma designs for approval", "Interactive prototype before development begins"] },
              { icon: Code2, title: "Development & Testing", points: ["Agile sprints with weekly progress updates", "Cross-browser and device testing throughout", "Performance and security audits before launch"] },
              { icon: Rocket, title: "Launch & Growth", points: ["Smooth deployment with zero downtime", "SEO setup, analytics, and monitoring configured", "Ongoing support and continuous improvements"] },
            ]}
            accentColor={WEB_DEV_COLOR}
          />
        </div>
      </section>

      {/* CTA 2 */}
      <div className="max-w-7xl mx-auto px-6">
        <CTASection
          variant="gradient"
          title="Ready to Build Something Great?"
          description="Join 150+ businesses that trusted us to build their digital presence"
          primaryCTA={{ text: "Start Your Project", link: "/contact" }}
          secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
          size="large"
        />
      </div>

      {/* CASE STUDIES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Web Development in Action</h2>
            <p className="text-muted-foreground mt-4">Real websites built for real businesses</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <motion.div key={study.title} variants={itemVariants}>
                  <Card className="overflow-hidden h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className={`h-48 bg-gradient-to-br ${study.gradient} flex flex-col items-center justify-center relative`}>
                      <Icon className="w-12 h-12 text-white/80 mb-3" />
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">{study.industry}</Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground">{study.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{study.industry}</p>
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{study.description}</p>

                      <div className="mt-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Key Features Built</p>
                        <div className="space-y-1.5">
                          {study.features.map((f) => (
                            <div key={f} className="text-sm text-muted-foreground">{f}</div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {study.tech.map((t) => (
                          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">{t}</span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                        <Rocket className="w-4 h-4" style={{ color: WEB_DEV_COLOR }} />
                        <span>Delivered in {study.timeline}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Web Development FAQs</h2>
            <p className="text-muted-foreground mt-4">Everything you need to know about our web development services</p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4 bg-card">
                <AccordionTrigger className="text-left text-foreground font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA 3 */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <CTASection
          variant="gradient"
          title="Let's Build Your Dream Website"
          description="Free consultation, no obligation quote within 48 hours"
          primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
          secondaryCTA={{ text: "View All Services", link: "/services" }}
          showContactInfo={true}
          size="large"
        />
      </div>
    </div>
  );
}
