import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Receipt,
  LifeBuoy,
  Bell,
  Upload,
  CheckCircle,
  Clock,
  FolderOpen,
  Lock,
} from "lucide-react";

const tabs = ["Client Portal", "SaaS Dashboard"];

function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="shadow-2xl rounded-xl overflow-hidden border">
      <div className="bg-muted px-4 py-2 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="bg-background/50 rounded-md px-3 py-1 text-xs flex-1 flex items-center gap-2 text-muted-foreground">
          <Lock className="text-muted-foreground" size={12} />
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

function ClientPortalTab() {
  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/clientvault">
      <div className="bg-card">
        <div className="border-b px-6 py-3 flex items-center justify-between">
          <span className="text-violet-600 font-bold text-sm">ClientVault</span>
          <div className="hidden md:flex gap-6 text-xs text-muted-foreground">
            <span>Overview</span>
            <span>Documents</span>
            <span>Messages</span>
            <span>Invoices</span>
            <span>Support</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell size={14} className="text-muted-foreground" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </div>
            <span className="text-xs hidden md:inline">Emma Wilson</span>
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 text-white text-xs w-7 h-7 flex items-center justify-center rounded-full">
              EW
            </div>
          </div>
        </div>

        <div className="flex min-h-[400px]">
          <div className="w-48 border-r p-3 hidden md:block bg-muted/30">
            <div>
              <div className="text-sm font-semibold">Hartley Legal</div>
              <span className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-600 px-2 py-0.5 rounded inline-block mt-1">
                Premium Client
              </span>
            </div>

            <div className="mt-4 space-y-1 text-xs">
              <div className="flex items-center gap-2 bg-violet-100 dark:bg-violet-900/30 text-violet-600 rounded px-2 py-1.5">
                <LayoutDashboard size={12} /> Overview
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground">
                <FileText size={12} /> Documents
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground justify-between">
                <span className="flex items-center gap-2"><MessageSquare size={12} /> Messages</span>
                <span className="bg-violet-600 text-white text-[10px] px-1.5 rounded-full">2</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground">
                <Receipt size={12} /> Invoices
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground">
                <LifeBuoy size={12} /> Support
              </div>
            </div>

            <div className="mt-4 pt-3 border-t space-y-1.5 text-xs text-muted-foreground">
              <div>4 Active Matters</div>
              <div>12 Documents</div>
              <div>£2,450 Outstanding</div>
            </div>
          </div>

          <div className="flex-1 p-4 md:p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-lg font-semibold">Good morning, Emma 👋</div>
                <div className="text-xs text-muted-foreground">Here's your latest updates</div>
              </div>
              <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs px-3 py-1.5 rounded-lg">
                New Request
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { icon: FolderOpen, label: "Active Matters", value: "4", bg: "bg-violet-50 dark:bg-violet-950/20", border: "border-violet-200 dark:border-violet-800", iconColor: "text-violet-600" },
                { icon: FileText, label: "Pending Documents", value: "2", bg: "bg-blue-50 dark:bg-blue-950/20", border: "border-blue-200 dark:border-blue-800", iconColor: "text-blue-600" },
                { icon: CheckCircle, label: "Completed", value: "6", bg: "bg-green-50 dark:bg-green-950/20", border: "border-green-200 dark:border-green-800", iconColor: "text-green-600" },
                { icon: Clock, label: "Awaiting Response", value: "1", bg: "bg-amber-50 dark:bg-amber-950/20", border: "border-amber-200 dark:border-amber-800", iconColor: "text-amber-600" },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.label} className={`p-3 rounded-xl border text-xs ${card.bg} ${card.border}`}>
                    <Icon size={14} className={card.iconColor} />
                    <div className="text-muted-foreground mt-1">{card.label}</div>
                    <div className="text-xl font-bold">{card.value}</div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="text-sm font-semibold mb-3">Recent Activity</div>
                <div className="space-y-2">
                  {[
                    { icon: Upload, color: "bg-violet-100 dark:bg-violet-900/30 text-violet-600", title: "Document uploaded", detail: "Trademark_Application_v2.pdf", time: "2 hours ago" },
                    { icon: MessageSquare, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600", title: "New message from Sarah Mitchell", detail: "Re: Contract Review", time: "Yesterday" },
                    { icon: CheckCircle, color: "bg-green-100 dark:bg-green-900/30 text-green-600", title: "Matter closed: NDA Review", detail: "Successfully completed", time: "2 days ago" },
                    { icon: Receipt, color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600", title: "Invoice #INV-0234 sent", detail: "£1,200.00 due", time: "3 days ago" },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex gap-2 p-2 bg-muted/50 rounded-lg text-xs">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                          <Icon size={10} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{item.title}</div>
                          <div className="text-muted-foreground">{item.detail}</div>
                        </div>
                        <span className="text-muted-foreground whitespace-nowrap">{item.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="text-sm font-semibold mb-3">Active Matters</div>
                <div className="space-y-2">
                  {[
                    { name: "Trademark Registration", badge: "IP", badgeColor: "bg-violet-100 dark:bg-violet-900/30 text-violet-600", progress: 65, barColor: "bg-violet-600" },
                    { name: "Employment Contract", badge: "Employment", badgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-600", progress: 40, barColor: "bg-blue-600" },
                    { name: "Property Acquisition", badge: "Property", badgeColor: "bg-green-100 dark:bg-green-900/30 text-green-600", progress: 20, barColor: "bg-green-600" },
                  ].map((matter) => (
                    <div key={matter.name} className="p-2 border rounded-lg text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{matter.name}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] ${matter.badgeColor}`}>{matter.badge}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full ${matter.barColor}`} style={{ width: `${matter.progress}%` }} />
                      </div>
                      <div className="text-muted-foreground mt-1">{matter.progress}% complete</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function SaasDashboardTab() {
  return (
    <BrowserFrame url="houseofdevelopers.co.uk/projects/taskmaster">
      <div className="bg-[#0F172A] text-white">
        <div className="bg-[#0F172A] border-b border-white/10 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-sm text-white">TaskMaster</span>
            <div className="hidden md:flex items-center gap-4 text-xs text-gray-400">
              <span>Dashboard</span>
              <span>Projects</span>
              <span>Team</span>
              <span>Reports</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-violet-600 text-white text-xs px-2 py-0.5 rounded">Pro</span>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600" />
          </div>
        </div>

        <div className="flex min-h-[400px]">
          <div className="w-44 border-r border-white/10 p-3 hidden md:block">
            <div className="text-xs uppercase text-gray-500 mb-2">My Workspace</div>
            <div className="space-y-1 text-xs">
              {[
                { dot: "bg-purple-500", name: "Website Redesign", count: 8, active: true },
                { dot: "bg-blue-500", name: "Mobile App", count: 12, active: false },
                { dot: "bg-green-500", name: "API Integration", count: 5, active: false },
                { dot: "bg-orange-500", name: "Marketing Site", count: 3, active: false },
                { dot: "bg-red-500", name: "Bug Fixes", count: 7, active: false },
              ].map((project) => (
                <div
                  key={project.name}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded ${project.active ? "bg-violet-500/20 text-violet-300" : "text-gray-400"}`}
                >
                  <div className={`w-2 h-2 rounded-full ${project.dot}`} />
                  <span className="flex-1 truncate">{project.name}</span>
                  <span className="text-gray-500">({project.count})</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 my-3" />

            <div className="text-xs uppercase text-gray-500 mb-2">Team Members</div>
            <div className="space-y-1 text-xs text-gray-400">
              {[
                { name: "James T.", status: "bg-green-500" },
                { name: "Sarah K.", status: "bg-green-500" },
                { name: "Alex M.", status: "bg-yellow-500" },
                { name: "Lisa R.", status: "bg-gray-500" },
              ].map((member) => (
                <div key={member.name} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex-shrink-0" />
                  <span className="flex-1">{member.name}</span>
                  <div className={`w-2 h-2 rounded-full ${member.status}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white">Website Redesign</span>
                <span className="bg-violet-500/20 text-violet-300 text-xs px-2 py-0.5 rounded">In Progress</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">Due Jun 30</span>
                <button className="bg-violet-600 text-white text-xs px-2 py-1 rounded">+ Add Task</button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { value: "24/36", label: "Tasks Complete" },
                { value: "12", label: "Days Left" },
                { value: "5", label: "Members" },
                { value: "78%", label: "Budget" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                  <div className="text-sm font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-xl p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase text-gray-400">To Do</span>
                  <span className="text-xs bg-white/10 px-1.5 rounded text-gray-400">8</span>
                </div>
                <div className="space-y-2">
                  {[
                    { priority: "High", priorityColor: "bg-red-500/20 text-red-400", title: "Homepage Hero Animation", date: "Jun 18" },
                    { priority: "Medium", priorityColor: "bg-yellow-500/20 text-yellow-400", title: "Mobile Responsive QA", date: "Jun 20" },
                    { priority: "Low", priorityColor: "bg-green-500/20 text-green-400", title: "Update Documentation", date: "Jun 25" },
                  ].map((task) => (
                    <div key={task.title} className="bg-white/10 rounded-lg p-2">
                      <span className={`text-[10px] px-1.5 py-0.5 rounded ${task.priorityColor}`}>{task.priority}</span>
                      <div className="text-xs text-white mt-1">{task.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{task.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase text-gray-400">In Progress</span>
                  <span className="text-xs bg-white/10 px-1.5 rounded text-gray-400">5</span>
                </div>
                <div className="space-y-2">
                  {[
                    { title: "Design System Components", progress: 60, barColor: "bg-violet-600", assignee: "James T." },
                    { title: "Backend API Integration", progress: 35, barColor: "bg-blue-600", assignee: "Sarah K." },
                  ].map((task) => (
                    <div key={task.title} className="bg-white/10 rounded-lg p-2">
                      <div className="text-xs text-white">{task.title}</div>
                      <div className="w-full bg-white/10 rounded-full h-1 mt-1.5">
                        <div className={`h-1 rounded-full ${task.barColor}`} style={{ width: `${task.progress}%` }} />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{task.assignee}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-500/5 rounded-xl p-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase text-gray-400">Done ✓</span>
                  <span className="text-xs bg-white/10 px-1.5 rounded text-gray-400">16</span>
                </div>
                <div className="space-y-2">
                  {["Navigation Component", "Auth System"].map((task) => (
                    <div key={task} className="bg-white/10 rounded-lg p-2">
                      <div className="text-xs text-gray-500 line-through">{task}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Real Applications We've Built</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Explore our work across different application types
          </p>
        </div>

        <div className="flex gap-2 border-b mb-10 overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 font-semibold text-sm cursor-pointer transition-all whitespace-nowrap ${
                activeTab === i
                  ? "border-b-2 border-violet-600 text-violet-600"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 0 ? <ClientPortalTab /> : <SaasDashboardTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}