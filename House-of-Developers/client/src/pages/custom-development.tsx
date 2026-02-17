import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code2,
  ArrowRight,
  CheckCircle2,
  Layers,
  Wrench,
  RefreshCw,
  Shield,
  BarChart,
  Zap,
  TrendingUp,
  Users,
  Fingerprint,
  Settings,
  Search,
  Rocket,
  Lock,
  Cloud,
  Network,
  Briefcase,
  ShoppingBag,
  Heart,
  Truck,
  GraduationCap,
  Headphones,
  Award,
  GitBranch,
  Server,
  Code,
  Database,
  Table,
  Key,
  Eye,
  AlertTriangle,
  FileCheck,
  Package,
  Paintbrush,
  Activity,
  Globe,
  FileCode,
  TestTube,
  CheckCircle,
  Archive,
} from "lucide-react";
import { Link } from "wouter";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { CTASection } from "@/components/ui/CTASection";
import { TechTabsSection } from "@/components/ui/TechTabsSection";

const CUSTOM_DEV_COLOR = "#F59E0B";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

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
          <div className="px-3 py-1 text-[10px] text-white bg-[#1e1e1e] border-t-2 border-t-[#007ACC] rounded-t">
            Dashboard.tsx
          </div>
          <div className="px-3 py-1 text-[10px] text-gray-500 bg-[#2d2d2d] rounded-t">
            api.ts
          </div>
        </div>
      </div>

      <div className="p-4 font-mono text-[10px] leading-relaxed overflow-hidden">
        {[
          { num: 1, content: <><span style={{ color: "#569CD6" }}>import</span> <span style={{ color: "#DCDCAA" }}>{"{ useState }"}</span> <span style={{ color: "#569CD6" }}>from</span> <span style={{ color: "#CE9178" }}>'react'</span></> },
          { num: 2, content: <><span style={{ color: "#569CD6" }}>import</span> <span style={{ color: "#DCDCAA" }}>{"{ Analytics }"}</span> <span style={{ color: "#569CD6" }}>from</span> <span style={{ color: "#CE9178" }}>'./components'</span></> },
          { num: 3, content: null },
          { num: 4, content: <><span style={{ color: "#569CD6" }}>export default function</span> <span style={{ color: "#DCDCAA" }}>Dashboard</span><span style={{ color: "#D4D4D4" }}>() {"{"}</span></> },
          { num: 5, content: <><span style={{ color: "#D4D4D4" }}>{"  "}</span><span style={{ color: "#569CD6" }}>const</span> <span style={{ color: "#D4D4D4" }}>[data, setData] = </span><span style={{ color: "#DCDCAA" }}>useState</span><span style={{ color: "#D4D4D4" }}>([])</span></> },
          { num: 6, content: null },
          { num: 7, content: <><span style={{ color: "#D4D4D4" }}>{"  "}</span><span style={{ color: "#569CD6" }}>return</span> <span style={{ color: "#D4D4D4" }}>(</span></> },
          { num: 8, content: <><span style={{ color: "#D4D4D4" }}>{"    "}&lt;</span><span style={{ color: "#569CD6" }}>div</span> <span style={{ color: "#9CDCFE" }}>className</span><span style={{ color: "#D4D4D4" }}>=</span><span style={{ color: "#CE9178" }}>"dashboard"</span><span style={{ color: "#D4D4D4" }}>&gt;</span></> },
          { num: 9, content: <><span style={{ color: "#D4D4D4" }}>{"      "}&lt;</span><span style={{ color: "#4EC9B0" }}>Analytics</span> <span style={{ color: "#9CDCFE" }}>data</span><span style={{ color: "#D4D4D4" }}>={"{"}</span><span style={{ color: "#9CDCFE" }}>data</span><span style={{ color: "#D4D4D4" }}>{"}"} /&gt;</span></> },
          { num: 10, content: <><span style={{ color: "#D4D4D4" }}>{"      "}&lt;</span><span style={{ color: "#4EC9B0" }}>RevenueChart</span> <span style={{ color: "#D4D4D4" }}>/&gt;</span></> },
          { num: 11, content: <><span style={{ color: "#D4D4D4" }}>{"      "}&lt;</span><span style={{ color: "#4EC9B0" }}>UserTable</span> <span style={{ color: "#9CDCFE" }}>users</span><span style={{ color: "#D4D4D4" }}>={"{"}</span><span style={{ color: "#9CDCFE" }}>data</span><span style={{ color: "#D4D4D4" }}>{"}"} /&gt;</span></> },
          { num: 12, content: <><span style={{ color: "#D4D4D4" }}>{"    "}&lt;/</span><span style={{ color: "#569CD6" }}>div</span><span style={{ color: "#D4D4D4" }}>&gt;</span></> },
          { num: 13, content: <><span style={{ color: "#D4D4D4" }}>{"  "})</span></> },
          { num: 14, content: <><span style={{ color: "#D4D4D4" }}>{"}"}</span></> },
        ].map((line) => (
          <div key={line.num} className="flex">
            <span className="w-6 text-right mr-4 text-gray-600 select-none">{line.num}</span>
            <span>{line.content || "\u00A0"}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 py-1 bg-[#007ACC] text-white text-[9px]">
        <span>TypeScript React</span>
        <span>Ln 8, Col 24</span>
      </div>
    </div>
  );
}

function LivePreviewMockup() {
  return (
    <div className="relative flex-1 min-w-0">
      <div className="absolute -top-3 -right-3 z-10">
        <Badge className="bg-green-500 text-white border-0 shadow-lg text-[10px] animate-pulse">
          Live Preview
        </Badge>
      </div>
      <BrowserFrame url="houseofdevelopers.co.uk/projects/bizflow" glowColor={CUSTOM_DEV_COLOR}>
        <div className="p-3 bg-background min-h-[280px]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded" style={{ backgroundColor: CUSTOM_DEV_COLOR }} />
              <span className="text-[11px] font-bold text-foreground">BizFlow</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded bg-muted" />
              <div className="w-5 h-5 rounded bg-muted" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: "Revenue", value: "£24.5K", color: "#10B981" },
              { label: "Users", value: "1,247", color: "#3B82F6" },
              { label: "Uptime", value: "94%", color: "#8B5CF6" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg p-2 bg-muted/50 border border-border">
                <div className="text-[10px] font-bold" style={{ color: s.color }}>{s.value}</div>
                <div className="text-[7px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-muted/30 border border-border p-2 mb-3">
            <div className="text-[8px] text-muted-foreground mb-1">Revenue Trend</div>
            <div className="flex items-end gap-1 h-12">
              {[35, 50, 40, 65, 55, 75, 60, 80, 70, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 9 ? CUSTOM_DEV_COLOR : `${CUSTOM_DEV_COLOR}40`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            {[
              { name: "John Smith", role: "Admin", status: "Active" },
              { name: "Sarah Jones", role: "Editor", status: "Active" },
              { name: "Mike Brown", role: "Viewer", status: "Away" },
            ].map((row) => (
              <div key={row.name} className="flex items-center justify-between rounded px-2 py-1 bg-muted/30 border border-border">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-muted" />
                  <span className="text-[8px] text-foreground">{row.name}</span>
                </div>
                <span className="text-[7px] text-muted-foreground">{row.role}</span>
                <span className={`text-[7px] px-1.5 py-0.5 rounded-full ${row.status === "Active" ? "bg-green-500/10 text-green-600" : "bg-yellow-500/10 text-yellow-600"}`}>
                  {row.status}
                </span>
              </div>
            ))}
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
        <Badge className="text-white border-0 shadow-lg text-[10px]" style={{ backgroundColor: CUSTOM_DEV_COLOR }}>React + TypeScript</Badge>
      </motion.div>
      <motion.div
        className="absolute -top-3 right-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
      >
        <Badge className="text-white border-0 shadow-lg text-[10px]" style={{ backgroundColor: "#10B981" }}>Real-Time Updates</Badge>
      </motion.div>
      <motion.div
        className="absolute -bottom-3 left-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Badge variant="outline" className="shadow-lg text-[10px] bg-background">Clean Architecture</Badge>
      </motion.div>
      <motion.div
        className="absolute -bottom-3 right-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
      >
        <Badge variant="outline" className="shadow-lg text-[10px] bg-background">Production Ready</Badge>
      </motion.div>

      <div className="flex gap-3 items-stretch">
        <CodeEditorMockup />
        <div className="flex flex-col items-center justify-center px-1">
          <div className="text-[9px] text-muted-foreground mb-1">Builds to</div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </div>
        <LivePreviewMockup />
      </div>
    </div>
  );
}

function SaaSDashboardMockup() {
  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/taskmaster" glowColor={CUSTOM_DEV_COLOR}>
      <div className="flex min-h-[380px]">
        <div className="w-14 bg-gray-900 p-2 flex flex-col items-center gap-3 pt-4">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
            <Settings className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
            <Users className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
            <BarChart className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>

        <div className="w-40 bg-gray-800 p-3 border-r border-gray-700">
          <div className="text-white text-[10px] font-bold mb-3">TaskMaster</div>
          <div className="text-gray-400 text-[8px] uppercase tracking-wider mb-2">Projects</div>
          {["Website Redesign", "Mobile App", "API Build", "Dashboard"].map((p, i) => (
            <div key={p} className={`text-[9px] px-2 py-1.5 rounded mb-1 ${i === 0 ? "bg-amber-500/20 text-amber-400" : "text-gray-400"}`}>
              {p}
            </div>
          ))}
        </div>

        <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-foreground text-sm font-bold">Website Redesign</div>
              <div className="text-muted-foreground text-[9px]">Sprint 4 · 12 tasks remaining</div>
            </div>
            <div className="bg-amber-500 text-white text-[9px] px-2 py-1 rounded font-semibold">+ Add Task</div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: "Progress", value: "68%", color: "text-green-500" },
              { label: "Due Date", value: "Mar 15", color: "text-amber-500" },
              { label: "Team", value: "5 members", color: "text-blue-500" },
            ].map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-lg p-2">
                <div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
                <div className="text-[8px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { title: "To Do", color: "border-t-gray-400", tasks: [{ name: "Design homepage", tag: "Design" }, { name: "Write copy", tag: "Content" }] },
              { title: "In Progress", color: "border-t-amber-500", tasks: [{ name: "Build nav component", tag: "Dev" }, { name: "API integration", tag: "Dev" }] },
              { title: "Done", color: "border-t-green-500", tasks: [{ name: "Wireframes", tag: "Design" }, { name: "Database schema", tag: "Dev" }] },
            ].map((col) => (
              <div key={col.title} className={`bg-card border border-border rounded-lg overflow-hidden border-t-2 ${col.color}`}>
                <div className="px-2 py-1.5 text-[9px] font-semibold text-foreground">{col.title}</div>
                <div className="px-2 pb-2 space-y-1.5">
                  {col.tasks.map((t) => (
                    <div key={t.name} className="bg-muted/50 rounded p-1.5">
                      <div className="text-[8px] text-foreground">{t.name}</div>
                      <div className="text-[7px] text-muted-foreground mt-0.5">{t.tag}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function ClientPortalMockup() {
  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/clientspace" glowColor="#3B82F6">
      <div className="min-h-[380px] bg-background">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
              <Users className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-foreground text-xs font-bold">ClientSpace</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
            <span>Dashboard</span>
            <span>Cases</span>
            <span>Documents</span>
            <span>Messages</span>
          </div>
          <div className="w-6 h-6 rounded-full bg-blue-500" />
        </div>

        <div className="p-4">
          <div className="mb-4">
            <div className="text-foreground text-sm font-semibold">Welcome back, James 👋</div>
            <div className="text-muted-foreground text-[10px]">Here's your latest updates</div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-card border border-border rounded-lg p-3">
              <div className="text-[9px] font-semibold text-muted-foreground uppercase mb-2">Active Cases</div>
              {["Contract Review", "IP Filing", "Employment Dispute"].map((c) => (
                <div key={c} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
                  <span className="text-[9px] text-foreground">{c}</span>
                  <span className="text-[7px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-500">Active</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-3">
              <div className="text-[9px] font-semibold text-muted-foreground uppercase mb-2">Recent Documents</div>
              {["NDA_Final.pdf", "Invoice_Feb.pdf", "Terms_v3.docx"].map((d) => (
                <div key={d} className="flex items-center gap-2 py-1.5 border-b border-border last:border-0">
                  <FileCheck className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[9px] text-foreground">{d}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-3">
              <div className="text-[9px] font-semibold text-muted-foreground uppercase mb-2">Messages</div>
              {[
                { from: "Sarah K.", msg: "Documents signed", time: "2h ago" },
                { from: "Legal Team", msg: "Case update ready", time: "5h ago" },
                { from: "Support", msg: "Meeting scheduled", time: "1d ago" },
              ].map((m) => (
                <div key={m.from} className="py-1.5 border-b border-border last:border-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-medium text-foreground">{m.from}</span>
                    <span className="text-[7px] text-muted-foreground">{m.time}</span>
                  </div>
                  <div className="text-[8px] text-muted-foreground">{m.msg}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function InternalToolMockup() {
  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/staffhub" glowColor="#8B5CF6">
      <div className="flex min-h-[380px]">
        <div className="w-44 bg-gray-900 p-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg bg-purple-500 flex items-center justify-center">
              <Users className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white text-xs font-bold">StaffHub</span>
          </div>
          <nav className="space-y-1">
            {[
              { label: "Dashboard", active: true },
              { label: "Employees", active: false },
              { label: "Leave", active: false },
              { label: "Payroll", active: false },
              { label: "Reports", active: false },
            ].map((item) => (
              <div key={item.label} className={`text-[10px] px-2.5 py-1.5 rounded-md ${item.active ? "bg-purple-500/20 text-purple-400" : "text-gray-400"}`}>
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-semibold text-foreground">HR Dashboard</div>
            <div className="text-[8px] text-muted-foreground">February 2024</div>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-3">
            {[
              { label: "Total Staff", value: "84", color: "border-purple-500/30 bg-purple-500/5" },
              { label: "On Leave", value: "6", color: "border-orange-500/30 bg-orange-500/5" },
              { label: "New Hires", value: "3", color: "border-green-500/30 bg-green-500/5" },
              { label: "Open Positions", value: "7", color: "border-blue-500/30 bg-blue-500/5" },
            ].map((stat) => (
              <div key={stat.label} className={`border rounded-lg p-2 ${stat.color}`}>
                <div className="text-foreground text-sm font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-[8px]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-card border border-border rounded-lg p-3">
              <div className="text-[9px] font-semibold text-foreground mb-2">Team Calendar</div>
              <div className="grid grid-cols-7 gap-0.5 text-center">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={i} className="text-[6px] text-muted-foreground font-medium">{d}</div>
                ))}
                {Array.from({ length: 28 }, (_, i) => {
                  const day = i + 1;
                  const isToday = day === 17;
                  const hasLeave = [5, 6, 12, 13, 19, 20].includes(day);
                  const hasMeeting = [3, 10, 24].includes(day);
                  return (
                    <div key={i} className={`text-[7px] py-0.5 rounded ${isToday ? "bg-purple-500 text-white font-bold" : hasLeave ? "bg-orange-500/20 text-orange-600" : hasMeeting ? "bg-blue-500/20 text-blue-600" : "text-foreground"}`}>
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-3">
              <div className="text-[9px] font-semibold text-foreground mb-2">Recent Activity</div>
              {[
                { action: "Sarah K. approved annual leave (2 days)", time: "10m ago" },
                { action: "New hire: James T. starts Monday", time: "2h ago" },
                { action: "Payroll run completed - £84,230", time: "1d ago" },
                { action: "Performance review due: 12 staff", time: "2d ago" },
              ].map((a) => (
                <div key={a.action} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
                  <span className="text-[8px] text-foreground">{a.action}</span>
                  <span className="text-[7px] text-muted-foreground">{a.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {["Add Employee", "Process Leave", "Run Payroll", "Generate Report"].map((action) => (
              <div key={action} className="bg-purple-500/10 border border-purple-500/20 rounded p-2 text-center">
                <div className="text-[8px] font-medium text-foreground">{action}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function DataPlatformMockup() {
  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/datacore" glowColor="#10B981">
      <div className="min-h-[380px] bg-gray-950 text-white">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center">
              <Activity className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs font-bold">DataCore Analytics</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[9px] text-gray-400">Last updated: 2 min ago</span>
            </div>
            <div className="text-[9px] text-gray-500 bg-gray-800 rounded px-2 py-0.5">Jan 1 - Jan 31</div>
            <div className="text-[9px] text-gray-400 bg-gray-800 rounded px-2 py-0.5">Export</div>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { label: "Total Revenue", value: "£482K", change: "+12%", color: "#10B981" },
              { label: "Active Users", value: "12,847", change: "+8%", color: "#3B82F6" },
              { label: "Conversion", value: "3.2%", change: "+0.4%", color: "#8B5CF6" },
              { label: "Avg Order", value: "£67", change: "+5%", color: "#F59E0B" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-gray-900 border border-gray-800 rounded-lg p-2">
                <div className="text-sm font-bold" style={{ color: kpi.color }}>{kpi.value}</div>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-gray-400">{kpi.label}</span>
                  <span className="text-[7px] text-emerald-400">{kpi.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 bg-gray-900 border border-gray-800 rounded-lg p-3">
              <div className="text-[9px] text-gray-400 mb-2">Revenue by Month</div>
              <div className="flex items-end gap-1 h-20">
                {[40, 55, 45, 60, 50, 70, 65, 80, 75, 85, 70, 90].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 11 ? "#10B981" : "#10B98140" }} />
                ))}
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-3">
              <div className="text-[9px] text-gray-400 mb-2">Traffic Source</div>
              <div className="relative w-16 h-16 mx-auto">
                <svg viewBox="0 0 32 32" className="w-full h-full -rotate-90">
                  <circle cx="16" cy="16" r="12" fill="none" stroke="#3B82F6" strokeWidth="6" strokeDasharray="45 75.4" />
                  <circle cx="16" cy="16" r="12" fill="none" stroke="#10B981" strokeWidth="6" strokeDasharray="25 75.4" strokeDashoffset="-45" />
                  <circle cx="16" cy="16" r="12" fill="none" stroke="#F59E0B" strokeWidth="6" strokeDasharray="15 75.4" strokeDashoffset="-70" />
                </svg>
              </div>
              <div className="space-y-1 mt-2">
                {[
                  { label: "Direct", color: "#3B82F6" },
                  { label: "Organic", color: "#10B981" },
                  { label: "Referral", color: "#F59E0B" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                    <span className="text-[7px] text-gray-400">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg mt-3 overflow-hidden">
            <div className="grid grid-cols-4 gap-2 px-3 py-1.5 text-[8px] text-gray-500 border-b border-gray-800">
              <span>Product</span><span>Sales</span><span>Revenue</span><span>Growth</span>
            </div>
            {[
              { product: "Pro Plan", sales: "1,247", revenue: "£89K", growth: "+18%" },
              { product: "Enterprise", sales: "342", revenue: "£214K", growth: "+24%" },
              { product: "Starter", sales: "3,891", revenue: "£78K", growth: "+6%" },
            ].map((row) => (
              <div key={row.product} className="grid grid-cols-4 gap-2 px-3 py-1.5 text-[9px] border-b border-gray-800 last:border-0">
                <span className="text-white">{row.product}</span>
                <span className="text-gray-400">{row.sales}</span>
                <span className="text-gray-400">{row.revenue}</span>
                <span className="text-emerald-400">{row.growth}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

const showcaseTabs = [
  { id: "saas", label: "SaaS Dashboard" },
  { id: "portal", label: "Client Portal" },
  { id: "internal", label: "Internal Tool" },
  { id: "data", label: "Data Platform" },
];

const whatWeBuild = [
  {
    icon: Layers,
    gradient: "from-blue-500 to-blue-600",
    name: "Web Applications",
    description: "Full-featured web applications with complex business logic, real-time data, and seamless user experiences.",
    examples: ["Customer dashboards", "Booking systems", "Collaboration platforms"],
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    icon: Cloud,
    gradient: "from-purple-500 to-purple-600",
    name: "SaaS Platforms",
    description: "Multi-tenant SaaS products with subscription billing, user management, and scalable infrastructure.",
    examples: ["Project management tools", "CRM platforms", "Analytics dashboards"],
    tech: ["Next.js", "Stripe", "AWS"],
  },
  {
    icon: Wrench,
    gradient: "from-orange-500 to-orange-600",
    name: "Internal Business Tools",
    description: "Custom tools that automate workflows, manage data, and boost your team's productivity.",
    examples: ["HR management systems", "Inventory trackers", "Approval workflows"],
    tech: ["React", "Python", "PostgreSQL"],
  },
  {
    icon: Users,
    gradient: "from-green-500 to-green-600",
    name: "Client Portals",
    description: "Secure portals where your clients can access documents, track progress, and communicate.",
    examples: ["Legal case portals", "Patient portals", "Client reporting"],
    tech: ["Next.js", "Auth0", "S3"],
  },
  {
    icon: Network,
    gradient: "from-cyan-500 to-cyan-600",
    name: "API Development",
    description: "RESTful and GraphQL APIs that connect your systems, power your apps, and enable integrations.",
    examples: ["Payment processing APIs", "Data sync services", "Third-party integrations"],
    tech: ["Node.js", "GraphQL", "Redis"],
  },
  {
    icon: RefreshCw,
    gradient: "from-slate-500 to-slate-600",
    name: "Legacy Modernisation",
    description: "Transform outdated systems into modern, maintainable applications without losing your data.",
    examples: ["Database migrations", "UI redesigns", "Architecture upgrades"],
    tech: ["React", "Docker", "CI/CD"],
  },
];

const industries = [
  {
    icon: Briefcase,
    gradient: "from-blue-500 to-blue-600",
    name: "Professional Services",
    description: "Streamline operations for law firms, consultancies, and agencies.",
    useCases: ["Case management systems", "Client portals", "Time & billing tools", "Document automation"],
  },
  {
    icon: ShoppingBag,
    gradient: "from-green-500 to-green-600",
    name: "E-Commerce & Retail",
    description: "Custom shopping experiences beyond off-the-shelf platforms.",
    useCases: ["Custom storefronts", "Inventory management", "Order processing", "Customer analytics"],
  },
  {
    icon: Heart,
    gradient: "from-red-500 to-red-600",
    name: "Healthcare",
    description: "GDPR-compliant systems for patient care and medical operations.",
    useCases: ["Patient management", "Appointment booking", "Medical records", "Telehealth platforms"],
  },
  {
    icon: Truck,
    gradient: "from-orange-500 to-orange-600",
    name: "Logistics & Operations",
    description: "Track, manage, and optimise your fleet and supply chain.",
    useCases: ["Fleet management", "Route optimisation", "Warehouse systems", "Delivery tracking"],
  },
  {
    icon: TrendingUp,
    gradient: "from-purple-500 to-purple-600",
    name: "Finance & Fintech",
    description: "Secure financial platforms built for compliance and scale.",
    useCases: ["Portfolio management", "Payment processing", "Risk analysis", "Regulatory reporting"],
  },
  {
    icon: GraduationCap,
    gradient: "from-cyan-500 to-cyan-600",
    name: "Education & Training",
    description: "Learning platforms and training systems that engage and educate.",
    useCases: ["LMS platforms", "Course management", "Student portals", "Assessment tools"],
  },
];

const techTabs = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { icon: Code2, name: "React", description: "UI library" },
      { icon: ArrowRight, name: "Next.js", description: "Full-stack" },
      { icon: FileCode, name: "TypeScript", description: "Type safety" },
      { icon: Paintbrush, name: "Tailwind CSS", description: "Styling" },
      { icon: Zap, name: "Framer Motion", description: "Animations" },
      { icon: Package, name: "Redux", description: "State mgmt" },
      { icon: TestTube, name: "Jest", description: "Testing" },
      { icon: CheckCircle, name: "Cypress", description: "E2E tests" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { icon: Server, name: "Node.js", description: "Runtime" },
      { icon: Code2, name: "Express.js", description: "Framework" },
      { icon: Layers, name: "NestJS", description: "Enterprise Node" },
      { icon: Code, name: "Python", description: "Data & ML" },
      { icon: Network, name: "GraphQL", description: "API queries" },
      { icon: Shield, name: "JWT/OAuth", description: "Auth" },
      { icon: Zap, name: "WebSockets", description: "Real-time" },
      { icon: Package, name: "REST APIs", description: "Integration" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { icon: Database, name: "PostgreSQL", description: "Primary DB" },
      { icon: Database, name: "MongoDB", description: "Document DB" },
      { icon: Zap, name: "Redis", description: "Caching" },
      { icon: Table, name: "MySQL", description: "SQL DB" },
      { icon: Search, name: "Elasticsearch", description: "Search" },
      { icon: Cloud, name: "Supabase", description: "Backend-as-service" },
      { icon: Archive, name: "Prisma ORM", description: "DB toolkit" },
      { icon: GitBranch, name: "Migrations", description: "DB versioning" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: [
      { icon: Cloud, name: "AWS", description: "Cloud platform" },
      { icon: Cloud, name: "DigitalOcean", description: "Hosting" },
      { icon: Package, name: "Docker", description: "Containers" },
      { icon: Layers, name: "Kubernetes", description: "Orchestration" },
      { icon: GitBranch, name: "GitHub Actions", description: "CI/CD" },
      { icon: Globe, name: "Cloudflare", description: "CDN" },
      { icon: Activity, name: "Datadog", description: "Monitoring" },
      { icon: Shield, name: "Terraform", description: "Infrastructure" },
    ],
  },
  {
    id: "security",
    label: "Security",
    items: [
      { icon: Lock, name: "SSL/TLS", description: "Encryption" },
      { icon: Shield, name: "OWASP", description: "Security standard" },
      { icon: Key, name: "Auth0", description: "Authentication" },
      { icon: FileCheck, name: "GDPR", description: "Compliance" },
      { icon: AlertTriangle, name: "Pen Testing", description: "Vulnerability" },
      { icon: Eye, name: "Audit Logs", description: "Activity tracking" },
      { icon: Database, name: "Encryption", description: "Data at rest" },
      { icon: RefreshCw, name: "Auto Backups", description: "Disaster recovery" },
    ],
  },
];

const caseStudies = [
  {
    gradient: "from-blue-600 to-purple-600",
    icon: Truck,
    industry: "Logistics & Operations",
    title: "Fleet Management Platform",
    description: "Built a real-time fleet tracking and dispatch platform for a UK logistics company managing 45 vehicles. The platform handles route optimisation, driver scheduling, delivery confirmation, and customer notifications.",
    features: ["📍 Live GPS tracking for all 45 vehicles", "📋 Automated dispatch and route assignment", "📱 Driver mobile app for delivery confirmation", "📊 Operations dashboard with daily analytics", "📧 Automated customer delivery notifications"],
    tech: ["React", "Node.js", "PostgreSQL", "Google Maps API", "AWS"],
    timeline: "14 weeks • Logistics Company, Birmingham",
  },
  {
    gradient: "from-purple-600 to-pink-600",
    icon: Heart,
    industry: "Healthcare",
    title: "Patient Management System",
    description: "Developed a comprehensive patient management system for a group of private dental clinics across 6 locations. Replaced a legacy system that was causing double bookings and lost patient records.",
    features: ["🦷 Online booking with real-time availability", "📋 Digital patient records and treatment history", "💳 Integrated payment and insurance processing", "📱 Patient reminder SMS and email system", "📊 Multi-location management dashboard"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Twilio", "Stripe"],
    timeline: "16 weeks • Private Dental Group, London",
  },
  {
    gradient: "from-green-600 to-teal-600",
    icon: BarChart,
    industry: "Financial Services",
    title: "Investment Portfolio Platform",
    description: "Created a white-label investment portfolio management platform for an independent financial adviser. Clients log in to view holdings, performance, and statements in real-time—replacing manual PDF reports.",
    features: ["📈 Real-time portfolio performance tracking", "📄 Automated monthly statement generation", "🔒 Bank-grade security and two-factor authentication", "📊 Interactive charts for holdings and returns", "👤 White-label client portal with custom branding"],
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
    timeline: "12 weeks • IFA Firm, Manchester",
  },
];

const faqs = [
  { q: "How much does custom software development cost?", a: "Custom projects vary widely based on scope and complexity. A simple internal tool starts around £15,000-£25,000. A full SaaS platform ranges from £40,000-£100,000+. We provide a detailed, itemised quote after a free discovery session. We never give vague estimates—you know exactly what you're paying for and why." },
  { q: "How long does custom development take?", a: "Simple web application: 8-12 weeks. Mid-complexity platform: 12-20 weeks. Full SaaS product: 16-28 weeks. We work in 2-week Agile sprints with weekly demos, so you see real progress throughout. Timelines are agreed upfront and we stick to them." },
  { q: "Do we own the code after the project?", a: "100% yes. You own all source code, assets, and intellectual property from day one. We hand over a full repository at project end. There are no licensing fees, no ongoing royalties, and no lock-in to us as a provider. It's yours to take anywhere." },
  { q: "What if requirements change mid-project?", a: "Requirements always evolve—that's why we work in Agile sprints. Minor changes within scope are handled at no extra cost. Significant new features are scoped, quoted, and added to the roadmap. We're flexible, not rigid." },
  { q: "Can you integrate with our existing systems?", a: "Yes, integration is core to what we do. We can connect with any system that has an API: CRMs, ERPs, accounting software, payment gateways, databases, legacy systems. If it doesn't have an API, we can often build one." },
  { q: "Will the application work on mobile?", a: "Every web application we build is fully responsive—designed mobile-first and tested on real iOS and Android devices. If you need a native mobile app alongside the web app, we handle that too." },
  { q: "How do you handle data security and GDPR?", a: "Security is built into architecture from day one: encrypted data at rest and in transit, OWASP-compliant code, regular dependency updates, penetration testing, audit logs, and GDPR-compliant data handling. For healthcare or finance, we apply the appropriate compliance standards." },
  { q: "Can we start small and scale up later?", a: "Absolutely—this is the recommended approach. We design architecture that scales, but build only what you need now. You can launch an MVP, validate with users, then add features iteratively. This reduces risk and gets you to market faster." },
  { q: "What happens if there are bugs after launch?", a: "All projects include a 60-day post-launch warranty covering bug fixes at no charge. After that, we offer maintenance retainers for ongoing support, bug fixes, security updates, and feature development." },
  { q: "Do you work with startups or only established businesses?", a: "Both! For startups we often build MVPs—the minimum viable version that proves the concept and attracts investment. For established businesses we build internal tools, client portals, and process automation. The approach differs but the quality doesn't." },
  { q: "Can you rescue a failed project from another developer?", a: "Yes—we've done this multiple times. We audit the existing codebase, assess what's salvageable, and provide an honest recommendation: fix, refactor, or rebuild. We never push for a full rebuild unless it's genuinely the right answer." },
  { q: "Do you provide training for the finished product?", a: "Yes, training is included in every project. We provide video walkthroughs, written documentation, and live training sessions for your team. We want you to be fully independent with the application after handover." },
];

export default function CustomDevelopmentPage() {
  const [activeShowcase, setActiveShowcase] = useState("saas");

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Custom Development" },
              ]} />

              <Badge variant="secondary" className="mt-6 mb-4">
                <Settings className="h-3 w-3 mr-1" /> Custom Development
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Custom Software Development
              </h1>

              <p
                className="text-xl md:text-2xl font-semibold mt-4 bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${CUSTOM_DEV_COLOR}, #f97316)` }}
              >
                Built Exactly for Your Business. Nothing More, Nothing Less.
              </p>

              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Off-the-shelf software forces you to adapt. Custom software adapts to you. We build
                bespoke applications that fit your workflows perfectly, scale as you grow, and give
                you complete ownership of your technology.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  { icon: Fingerprint, label: "100% Tailored" },
                  { icon: TrendingUp, label: "Scalable Architecture" },
                  { icon: Code2, label: "You Own The Code" },
                  { icon: Shield, label: "Built to Last" },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted border border-border text-sm"
                  >
                    <pill.icon className="w-3.5 h-3.5" style={{ color: CUSTOM_DEV_COLOR }} />
                    <span className="text-foreground text-sm">{pill.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-4 gap-4 mt-8">
                {[
                  { stat: "80+", label: "Custom Apps Built" },
                  { stat: "12 Weeks", label: "Avg Delivery" },
                  { stat: "100%", label: "Code Ownership" },
                  { stat: "5★", label: "Client Rating" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold" style={{ color: CUSTOM_DEV_COLOR }}>{s.stat}</div>
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
                <Link href="/services/web-development">
                  <Button variant="outline" size="lg">
                    View Our Work
                  </Button>
                </Link>
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

      {/* WHAT IS CUSTOM DEVELOPMENT */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Is Custom Development?</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Custom software development is the process of designing, creating, and maintaining software
                applications tailored specifically to your business needs. Unlike off-the-shelf solutions
                that force you to adapt your processes, custom software is built around your exact workflows.
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Whether you need an internal tool to streamline operations, a client-facing portal, or a
                full SaaS platform, custom development ensures every feature serves a purpose and every
                interaction is optimised for your users.
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Signs You Need Custom Development</h3>
                <div className="space-y-3">
                  {[
                    "Your team uses spreadsheets to manage critical processes",
                    "Off-the-shelf tools don't fit your workflow",
                    "You're paying for features you never use",
                    "You need to integrate multiple disconnected systems",
                    "Security and compliance require full control",
                    "You want to own your technology, not rent it",
                  ].map((sign) => (
                    <div key={sign} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CUSTOM_DEV_COLOR }} />
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
                <h3 className="text-lg font-bold text-foreground mb-4">Custom vs Off-The-Shelf</h3>
                <div className="overflow-hidden rounded-lg border border-border">
                  <div className="grid grid-cols-3 bg-muted/50 px-4 py-2 text-sm font-semibold text-foreground border-b border-border">
                    <span>Feature</span>
                    <span className="text-center">Custom</span>
                    <span className="text-center">Off-The-Shelf</span>
                  </div>
                  {[
                    { feature: "Tailored to your workflow", custom: "✓", shelf: "✗" },
                    { feature: "Full code ownership", custom: "✓", shelf: "✗" },
                    { feature: "No monthly licensing fees", custom: "✓", shelf: "✗" },
                    { feature: "Scales with your business", custom: "✓", shelf: "⚠️" },
                    { feature: "Integrates with anything", custom: "✓", shelf: "⚠️" },
                    { feature: "Lower upfront cost", custom: "✗", shelf: "✓" },
                    { feature: "Immediate availability", custom: "✗", shelf: "✓" },
                    { feature: "No vendor lock-in", custom: "✓", shelf: "✗" },
                    { feature: "Competitive advantage", custom: "✓", shelf: "✗" },
                    { feature: "Long-term cost efficiency", custom: "✓", shelf: "⚠️" },
                  ].map((row) => (
                    <div key={row.feature} className="grid grid-cols-3 px-4 py-2.5 text-sm border-b border-border last:border-0">
                      <span className="text-foreground">{row.feature}</span>
                      <span className={`text-center ${row.custom === "✓" ? "text-green-500" : "text-red-500"}`}>{row.custom}</span>
                      <span className={`text-center ${row.shelf === "✓" ? "text-green-500" : row.shelf === "⚠️" ? "text-amber-500" : "text-red-500"}`}>{row.shelf}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Build</h2>
            <p className="text-muted-foreground mt-4">Custom solutions for every business challenge</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whatWeBuild.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.name} variants={itemVariants}>
                  <Card className="p-6 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                    <div className="mt-4 space-y-1.5">
                      {item.examples.map((ex) => (
                        <div key={ex} className="flex items-center gap-2 text-sm text-foreground">
                          <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: CUSTOM_DEV_COLOR }} />
                          <span>{ex}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.tech.map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </Card>
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
          title="Not Sure What You Need?"
          description="Book a free consultation and we'll map out the right solution for your business"
          primaryCTA={{ text: "Book Free Discovery Call", link: "/contact" }}
          size="medium"
        />
      </div>

      {/* INTERACTIVE APP SHOWCASE */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">See What Custom Software Looks Like</h2>
            <p className="text-muted-foreground mt-4">Interactive previews of the types of applications we build</p>
          </motion.div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {showcaseTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeShowcase === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveShowcase(tab.id)}
                style={activeShowcase === tab.id ? { background: CUSTOM_DEV_COLOR, borderColor: CUSTOM_DEV_COLOR } : undefined}
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
            className="max-w-5xl mx-auto"
          >
            {activeShowcase === "saas" && <SaaSDashboardMockup />}
            {activeShowcase === "portal" && <ClientPortalMockup />}
            {activeShowcase === "internal" && <InternalToolMockup />}
            {activeShowcase === "data" && <DataPlatformMockup />}
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
            <p className="text-muted-foreground mt-4">Custom solutions with deep domain knowledge</p>
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
                          <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: CUSTOM_DEV_COLOR }} />
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
            title="Why Custom Development With Us"
            subtitle="What makes our custom builds different"
            columns={3}
            accentColor={CUSTOM_DEV_COLOR}
            values={[
              { icon: Code2, title: "You Own Everything", description: "Full source code ownership. No vendor lock-in, no licensing fees, no surprises. It's yours forever." },
              { icon: TrendingUp, title: "Built to Scale", description: "Architecture designed for growth. Start small, scale to millions of users without rebuilding." },
              { icon: Fingerprint, title: "Truly Tailored", description: "Built around your exact workflows—not the other way around. Every feature exists for a reason." },
              { icon: Shield, title: "Enterprise Security", description: "GDPR compliant, penetration tested, encrypted. Security built in from architecture to deployment." },
              { icon: Zap, title: "Performant by Design", description: "Optimised queries, efficient architecture, CDN delivery. Fast for users, efficient on infrastructure." },
              { icon: GitBranch, title: "Maintainable Code", description: "Documented, tested, clean code your team can maintain and extend for years to come." },
              { icon: Users, title: "Collaborative Process", description: "Weekly demos, transparent progress, your feedback shapes every sprint. No surprises at launch." },
              { icon: Headphones, title: "Long-Term Partner", description: "We stick around after launch. Ongoing development, bug fixes, and feature additions." },
              { icon: Award, title: "UK-Based Team", description: "All development in-house by our UK team. Direct communication, same timezone, no outsourcing." },
            ]}
          />
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <TechTabsSection
            title="Technologies We Use"
            subtitle="The right tools for every custom build"
            tabs={techTabs}
            accentColor={CUSTOM_DEV_COLOR}
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our Custom Development Process"
            subtitle="A structured process that delivers on time, every time"
            steps={[
              { icon: Search, title: "Discovery & Architecture", points: ["Deep-dive into your business workflows and requirements", "Technical architecture design and database planning", "Sprint roadmap with clear milestones and deliverables"] },
              { icon: Layers, title: "Design & Prototyping", points: ["UX wireframes mapping every user journey", "High-fidelity Figma designs reviewed and approved", "Clickable prototype before any code is written"] },
              { icon: Code2, title: "Agile Development", points: ["2-week sprints with live demo every Friday", "Weekly progress updates and feedback rounds", "Continuous testing and code review throughout"] },
              { icon: Rocket, title: "Launch & Scale", points: ["Zero-downtime deployment to production", "Team training, documentation, and handover", "Ongoing support and feature development available"] },
            ]}
            accentColor={CUSTOM_DEV_COLOR}
          />
        </div>
      </section>

      {/* CTA 2 */}
      <div className="max-w-7xl mx-auto px-6">
        <CTASection
          variant="gradient"
          title="Ready to Build Something Custom?"
          description="Let's discuss your project. Free consultation, detailed quote within 48 hours."
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Custom Software in Action</h2>
            <p className="text-muted-foreground mt-4">Real applications built for real businesses</p>
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
                        <Rocket className="w-4 h-4" style={{ color: CUSTOM_DEV_COLOR }} />
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4">Everything you need to know about custom development</p>
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
          title="Let's Build Your Custom Solution"
          description="Every great product started with a conversation. Let's have ours."
          primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
          secondaryCTA={{ text: "View All Web Services", link: "/services/web-development" }}
          showContactInfo={true}
          size="large"
        />
      </div>
    </div>
  );
}
