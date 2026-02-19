import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
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
import { CTASection } from "@/components/ui/CTASection";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import { Eye, Cpu, TestTube, RefreshCw } from "lucide-react";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import {
  Sparkles,
  Bot,
  Zap,
  Clock,
  MessageSquare,
  Plug,
  Brain,
  ArrowRight,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Users,
  Target,
  Globe,
  Rocket,
  MessageCircle,
  Image,
  Database,
  GitBranch,
  Table,
  Layers,
  Mail,
  ChevronRight,
  Check,
  Activity,
  CircleDot,
  Send,
  ShoppingBag,
  Headphones,
  Star,
  Mic,
  Volume2,
  Code2,
  Package,
  ShoppingCart,
  Calendar,
  Smartphone,
  Hash,
  Phone,
  Link2,
  PieChart,
  BarChart,
  BarChart3,
  LineChart,
} from "lucide-react";

function AIDashboardMockup() {
  const services = [
    {
      name: "AI Chatbots",
      icon: MessageSquare,
      color: "#8B5CF6",
      stat: "1,247 conversations today",
      status: "Active",
      statusColor: "text-green-500",
    },
    {
      name: "AI Agents",
      icon: Bot,
      color: "#3B82F6",
      stat: "24 tasks completed",
      status: "Running",
      statusColor: "text-green-500",
      progress: 85,
    },
    {
      name: "Automation",
      icon: Zap,
      color: "#F59E0B",
      stat: "18 hours saved today",
      status: "Active",
      statusColor: "text-green-500",
    },
    {
      name: "API Integration",
      icon: Plug,
      color: "#06B6D4",
      stat: "523 API calls",
      status: "Connected",
      statusColor: "text-green-500",
    },
    {
      name: "ML Models",
      icon: Brain,
      color: "#EC4899",
      stat: "94% accuracy",
      status: "Training",
      statusColor: "text-yellow-500",
    },
  ];

  return (
    <div className="relative" data-testid="ai-dashboard-mockup">
      <div className="bg-card border rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between gap-4 mb-5">
          <span className="text-sm font-semibold">AI Services Dashboard</span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground">All Systems Operational</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {services.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`border rounded-lg p-3 ${i === 4 ? "col-span-2" : ""}`}
              data-testid={`dashboard-card-${svc.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${svc.color}20` }}
                  >
                    <svc.icon className="h-4 w-4" style={{ color: svc.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold">{svc.name}</div>
                    <div className="text-[10px] text-muted-foreground">{svc.stat}</div>
                  </div>
                </div>
                <div className={`flex items-center gap-1 text-[10px] ${svc.statusColor}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${svc.statusColor === "text-green-500" ? "bg-green-500" : "bg-yellow-500"}`} />
                  {svc.status}
                </div>
              </div>
              {svc.progress && (
                <div className="mt-2">
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: svc.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${svc.progress}%` }}
                      transition={{ delay: 0.5, duration: 1 }}
                    />
                  </div>
                  <div className="text-[9px] text-muted-foreground mt-0.5 text-right">{svc.progress}%</div>
                </div>
              )}
              {svc.name === "ML Models" && (
                <div className="mt-2 flex items-end gap-0.5 h-6">
                  {[60, 72, 68, 80, 75, 88, 85, 90, 87, 94].map((v, idx) => (
                    <motion.div
                      key={idx}
                      className="flex-1 rounded-sm"
                      style={{ backgroundColor: `${svc.color}80`, height: `${v}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${v}%` }}
                      transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t">
          <span className="text-[10px] text-muted-foreground">Last updated: 2 seconds ago</span>
          <span className="text-[10px] text-muted-foreground">Powered by GPT-4, Claude 3</span>
        </div>
      </div>

      <motion.div
        className="absolute -top-3 -right-3 bg-card border rounded-lg px-3 py-1.5 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Activity className="h-3 w-3 text-green-500" />
          <span>Real-time Processing</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-3 -left-3 bg-card border rounded-lg px-3 py-1.5 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Sparkles className="h-3 w-3 text-purple-500" />
          <span>OpenAI Powered</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 -right-4 bg-card border rounded-lg px-3 py-1.5 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <Brain className="h-3 w-3 text-pink-500" />
          <span>Custom ML</span>
        </div>
      </motion.div>
    </div>
  );
}

function ChatbotDemoMockup() {
  return (
    <div className="relative" data-testid="chatbot-demo-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-muted border-b px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background rounded px-3 py-1 text-xs text-muted-foreground">
              fashionstore.co.uk
            </div>
          </div>
        </div>

        <div className="relative bg-muted/30 p-4 min-h-[300px]">
          <div className="text-xs text-muted-foreground text-center mb-4">Website Preview</div>
          <div className="grid grid-cols-3 gap-2 opacity-30">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded" />
            ))}
          </div>

          <div className="absolute bottom-4 right-4 w-64 bg-card border rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2.5">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4" />
                <span className="text-xs font-semibold">AI Shopping Assistant</span>
              </div>
            </div>

            <div className="p-3 space-y-2.5 max-h-48 overflow-y-auto">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="bg-muted rounded-lg px-3 py-1.5 text-[11px] max-w-[180px]">
                  Hi! Welcome to FashionStore. How can I help you today?
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <div className="bg-purple-600 text-white rounded-lg px-3 py-1.5 text-[11px] max-w-[180px]">
                  I'm looking for wireless headphones under £50
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="space-y-1.5">
                  <div className="bg-muted rounded-lg px-3 py-1.5 text-[11px]">
                    Great choice! Here are our top picks:
                  </div>
                  <div className="flex gap-1.5">
                    {[
                      { name: "SoundPro X1", price: "£34.99" },
                      { name: "BassMax Pro", price: "£42.99" },
                    ].map((p) => (
                      <div key={p.name} className="border rounded-md p-1.5 flex-1">
                        <div className="aspect-square bg-muted rounded mb-1 flex items-center justify-center">
                          <Headphones className="h-4 w-4 text-muted-foreground/40" />
                        </div>
                        <div className="text-[9px] font-medium">{p.name}</div>
                        <div className="text-[9px] text-purple-600 dark:text-purple-400 font-semibold">{p.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3 py-2 flex flex-wrap gap-1.5">
              {["View Details", "Add to Cart", "More Options"].map((btn) => (
                <span key={btn} className="text-[9px] border rounded-full px-2 py-0.5 text-muted-foreground">{btn}</span>
              ))}
            </div>

            <div className="border-t px-3 py-2 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-[10px] text-muted-foreground">AI is typing...</span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute top-12 -left-3 bg-card border rounded-lg px-3 py-1.5 shadow-lg"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-[10px] text-muted-foreground">GPT-4 Powered</div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 -left-3 bg-card border rounded-lg px-3 py-1.5 shadow-lg"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <div className="text-[10px] text-muted-foreground">Product Recommendations</div>
      </motion.div>
    </div>
  );
}

function AgentDashboardMockup() {
  const steps = [
    { label: "Email Received", status: "completed", time: "2 min ago" },
    { label: "Content Analyzed", status: "completed", time: "1 min ago" },
    { label: "Drafting Response", status: "in-progress", time: "Now" },
    { label: "Manager Review", status: "waiting", time: "Pending" },
    { label: "Send Response", status: "queued", time: "Queued" },
  ];

  return (
    <div data-testid="agent-dashboard-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl p-5">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-semibold">Email Processing Agent</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Running</span>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  step.status === "completed" ? "bg-green-100 dark:bg-green-900/30" :
                  step.status === "in-progress" ? "bg-blue-100 dark:bg-blue-900/30" :
                  "bg-muted"
                }`}>
                  {step.status === "completed" ? (
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  ) : step.status === "in-progress" ? (
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  )}
                </div>
                {i < steps.length - 1 && (
                  <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-4 ${
                    step.status === "completed" ? "bg-green-300 dark:bg-green-700" : "bg-border"
                  }`} />
                )}
              </div>
              <div className="flex-1 flex items-center justify-between gap-2">
                <span className={`text-xs ${step.status === "in-progress" ? "font-semibold" : step.status === "completed" ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
                  {step.label}
                </span>
                <span className="text-[10px] text-muted-foreground">{step.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 pt-3 border-t">
          {[
            { label: "Emails Today", value: "234" },
            { label: "Auto-Resolved", value: "87%" },
            { label: "Hours Saved", value: "18.5" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-lg font-bold">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AutomationWorkflowMockup() {
  const nodes = [
    { label: "New Lead", type: "trigger", color: "#3B82F6" },
    { label: "AI Analysis", type: "process", color: "#8B5CF6" },
    { label: "Score > 80?", type: "decision", color: "#F59E0B" },
  ];

  return (
    <div data-testid="automation-workflow-mockup">
      <div className="bg-card border rounded-2xl shadow-2xl p-5">
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-sm font-semibold">Lead Qualification Workflow</span>
          <Badge variant="secondary" className="text-[10px] no-default-hover-elevate no-default-active-elevate">
            <Zap className="h-3 w-3 mr-1" /> Automated
          </Badge>
        </div>

        <div className="flex flex-col items-center gap-2">
          {nodes.map((node, i) => (
            <div key={node.label} className="flex flex-col items-center">
              <div
                className={`px-4 py-2 rounded-lg border-2 text-xs font-medium text-center ${
                  node.type === "decision" ? "rotate-0 border-dashed" : ""
                }`}
                style={{ borderColor: node.color, color: node.color }}
              >
                {node.type === "trigger" && <CircleDot className="h-3 w-3 inline mr-1" />}
                {node.type === "process" && <Brain className="h-3 w-3 inline mr-1" />}
                {node.label}
              </div>
              {i < nodes.length - 1 && (
                <div className="w-0.5 h-4 bg-border" />
              )}
            </div>
          ))}

          <div className="flex items-start gap-8 mt-1">
            <div className="flex flex-col items-center gap-2">
              <div className="text-[10px] text-green-600 dark:text-green-400 font-medium">Yes (High Score)</div>
              <div className="w-0.5 h-3 bg-green-300 dark:bg-green-700" />
              <div className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-[11px] text-green-700 dark:text-green-400 font-medium">
                Notify Sales Team
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-[10px] text-orange-600 dark:text-orange-400 font-medium">No (Low Score)</div>
              <div className="w-0.5 h-3 bg-orange-300 dark:bg-orange-700" />
              <div className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg text-[11px] text-orange-700 dark:text-orange-400 font-medium">
                Send Nurture Email
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t grid grid-cols-3 gap-3">
          {[
            { label: "Avg. Time", value: "< 2s" },
            { label: "Cost Saved", value: "£3.2K/mo" },
            { label: "Accuracy", value: "94%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-sm font-bold">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const serviceCards = [
  {
    title: "AI Chatbots",
    description: "Custom AI chatbots that handle customer inquiries, qualify leads, and drive sales 24/7 using GPT-4 and Claude.",
    gradient: "from-purple-500 to-pink-500",
    colorFrom: "#8B5CF6",
    colorTo: "#EC4899",
    badge: "Most Popular",
    features: [
      "Natural language understanding",
      "Multi-channel deployment",
      "Product recommendations",
      "Lead capture & qualification",
    ],
    useCases: ["E-Commerce", "Customer Support", "Lead Gen"],
    link: "/services/ai-services/ai-chatbots",
  },
  {
    title: "Autonomous AI Agents",
    description: "Self-operating AI agents that handle complex tasks like email processing, data entry, and customer support autonomously.",
    gradient: "from-blue-500 to-cyan-500",
    colorFrom: "#3B82F6",
    colorTo: "#06B6D4",
    badge: "Trending",
    features: [
      "Multi-step task execution",
      "Decision making & routing",
      "Tool & API usage",
      "Human-in-the-loop oversight",
    ],
    useCases: ["Email Processing", "Data Entry", "Support"],
    link: "/services/ai-services/ai-agents",
  },
  {
    title: "Workflow Automation",
    description: "Automate repetitive business processes with AI-powered workflows that save 20+ hours per week.",
    gradient: "from-orange-500 to-amber-500",
    colorFrom: "#F59E0B",
    colorTo: "#FBBF24",
    features: [
      "Process automation",
      "Data extraction & analysis",
      "Smart notifications",
      "Cross-platform integration",
    ],
    useCases: ["Operations", "Marketing", "Sales"],
    link: "/services/ai-services/ai-automation",
  },
  {
    title: "AI Integration Services",
    description: "Seamlessly integrate AI capabilities into your existing tech stack with custom APIs and middleware.",
    gradient: "from-indigo-500 to-purple-500",
    colorFrom: "#6366F1",
    colorTo: "#8B5CF6",
    features: [
      "API development & integration",
      "Data pipeline setup",
      "Model deployment",
      "Performance monitoring",
    ],
    useCases: ["SaaS", "Enterprise", "E-Commerce"],
    link: "/services/ai-services/ai-integration",
  },
  {
    title: "Machine Learning Models",
    description: "Custom ML models for prediction, classification, and recommendation tailored to your business data.",
    gradient: "from-pink-500 to-rose-500",
    colorFrom: "#EC4899",
    colorTo: "#F43F5E",
    features: [
      "Custom model training",
      "Data preprocessing",
      "Model optimization",
      "Continuous learning",
    ],
    useCases: ["Prediction", "Classification", "Recommendations"],
    link: "/services/ai-services/machine-learning",
  },
];

const caseStudies = [
  {
    gradient: "from-purple-500 to-pink-500",
    borderColor: "#8B5CF6",
    industry: "E-Commerce",
    company: "Fashion Retailer (UK)",
    project: "AI Customer Support Chatbot",
    challenge: "12-hour average response time was losing customers. Support team overwhelmed with repetitive questions about sizing, shipping, and returns.",
    solution: "Built a GPT-4 powered chatbot integrated with Shopify and WhatsApp Business that handles 90% of inquiries automatically with product recommendations.",
    results: [
      { label: "Response Time", value: "12h → 8s" },
      { label: "Automated/Day", value: "450" },
      { label: "Monthly Savings", value: "£4,200" },
      { label: "CSAT Score", value: "4.7/5" },
    ],
    technologies: ["GPT-4", "Shopify API", "WhatsApp Business"],
  },
  {
    gradient: "from-blue-500 to-cyan-500",
    borderColor: "#3B82F6",
    industry: "SaaS Company",
    company: "Project Management Tool (100K users)",
    project: "AI Email Support Agent",
    challenge: "Support team spending 4+ hours daily on repetitive email responses. Slow response times causing user churn.",
    solution: "Deployed an autonomous email agent using Claude 3 Opus that reads, categorizes, drafts responses, and escalates complex issues to humans.",
    results: [
      { label: "Automated/Day", value: "180" },
      { label: "Time Saved/Day", value: "3.5h" },
      { label: "Approval Rate", value: "95%" },
      { label: "ROI", value: "450%" },
    ],
    technologies: ["Claude 3 Opus", "Gmail API", "Custom Agent Framework"],
  },
  {
    gradient: "from-orange-500 to-amber-500",
    borderColor: "#F59E0B",
    industry: "B2B Services",
    company: "Marketing Agency",
    project: "AI Lead Qualification System",
    challenge: "Sales team wasting 10+ hours/week manually reviewing and scoring leads. Low conversion rate of 18% due to poor prioritization.",
    solution: "Built a custom ML model integrated with HubSpot that instantly analyzes and scores leads based on 50+ signals, routing hot leads to sales immediately.",
    results: [
      { label: "Analysis Time", value: "Instant" },
      { label: "Time Saved/Week", value: "10h" },
      { label: "Conversion Rate", value: "18% → 32%" },
      { label: "Additional Revenue", value: "£45K/mo" },
    ],
    technologies: ["GPT-4", "Custom ML Model", "HubSpot API"],
  },
];

const AI_COLOR = "#8B5CF6";

const aiServicesTechTabs = [
  {
    label: "AI Models",
    technologies: [
      { name: "OpenAI", slug: "openai" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "Python", slug: "python" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "LangChain", slug: "langchain" },
    ],
  },
  {
    label: "Frameworks",
    technologies: [
      { name: "LangChain", slug: "langchain" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Django", slug: "django" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "GraphQL", slug: "graphql" },
    ],
  },
  {
    label: "Integrations",
    technologies: [
      { name: "Stripe", slug: "stripe" },
      { name: "HubSpot", slug: "hubspot" },
      { name: "Slack", slug: "slack" },
      { name: "Zapier", slug: "zapier" },
      { name: "Twilio", slug: "twilio" },
      { name: "Shopify", slug: "shopify" },
      { name: "PayPal", slug: "paypal" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    label: "Data Sources",
    technologies: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Redis", slug: "redis" },
      { name: "Supabase", slug: "supabase" },
      { name: "Firebase", slug: "firebase" },
      { name: "Elasticsearch", slug: "elasticsearch" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Docker", slug: "docker" },
    ],
  },
  {
    label: "Monitoring",
    technologies: [
      { name: "Datadog", slug: "datadog" },
      { name: "Grafana", slug: "grafana" },
      { name: "Sentry", slug: "sentry" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "Vercel", slug: "vercel" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Docker", slug: "docker" },
    ],
  },
];

const zigzagSteps = [
  {
    icon: Eye,
    title: "Discovery & Strategy",
    points: [
      "Business process audit & AI opportunity assessment",
      "Technical feasibility study & data readiness evaluation",
      "Solution architecture & project roadmap",
    ],
  },
  {
    icon: Cpu,
    title: "AI Development",
    points: [
      "AI model selection & fine-tuning with latest GPT-4/Claude models",
      "Custom prompt engineering & API integration development",
      "Data pipeline setup & frontend interface build",
    ],
  },
  {
    icon: TestTube,
    title: "Testing & Optimization",
    points: [
      "Accuracy testing, validation & edge case handling",
      "Performance optimization & security audit",
      "User acceptance testing & feedback cycles",
    ],
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    points: [
      "Production deployment with monitoring setup",
      "Team training & comprehensive documentation",
      "Gradual rollout strategy & performance benchmarking",
    ],
  },
  {
    icon: RefreshCw,
    title: "Monitoring & Improvement",
    points: [
      "Performance monitoring dashboard & model retraining",
      "Accuracy improvement cycles & feature enhancements",
      "24/7 technical support & ongoing optimization",
    ],
  },
];

const faqs = [
  {
    q: "What's the difference between AI chatbots and AI agents?",
    a: "AI chatbots are conversational\u2014they chat with users via text. AI agents are autonomous\u2014they execute tasks independently (read emails, analyse data, make decisions). Chatbots are reactive (respond to users); agents are proactive (take initiative). Both use LLMs like GPT-4 or Claude.",
  },
  {
    q: "Which AI model do you recommend: GPT-4 or Claude?",
    a: "GPT-4 is excellent for general tasks, creative content, and code. Claude 3 Opus excels at long-context analysis (100K+ tokens), nuanced conversations, and following complex instructions. We often use both\u2014GPT-4 for speed, Claude for depth. We'll recommend based on your use case.",
  },
  {
    q: "Can AI integrate with our existing systems?",
    a: "Yes! We integrate AI with any system that has an API\u2014CRMs (HubSpot, Salesforce), support tools (Zendesk, Intercom), databases, Slack, WhatsApp, email, and custom applications. AI can read/write data from your tools.",
  },
  {
    q: "How accurate are AI chatbots?",
    a: "When properly trained, 85-95% accuracy for common queries. We train on your FAQs, past conversations, and product data. For complex questions requiring human judgement, we route to your team. Accuracy improves over time as AI learns.",
  },
  {
    q: "What data do you need to build AI solutions?",
    a: "Depends on the project. Chatbots need FAQs, previous conversations, product docs. AI agents need task examples and tool APIs. ML models need historical data (100s-1000s of examples). We help you prepare data if you don't have it ready.",
  },
  {
    q: "How long does AI development take?",
    a: "Simple chatbot: 2-3 weeks. Custom AI agent: 3-5 weeks. Complex automation: 4-8 weeks. ML model development: 6-12 weeks. Timeline depends on data preparation, integrations, and testing requirements.",
  },
  {
    q: "What are ongoing costs after deployment?",
    a: "AI API costs (OpenAI/Anthropic charge per token), hosting, and optional maintenance. For example, a chatbot handling 10K conversations/month costs \u00a3100-300/month in API fees. We provide transparent cost estimates.",
  },
  {
    q: "Can AI replace our entire support team?",
    a: "AI can handle 60-90% of routine queries, but we recommend a hybrid approach. AI handles FAQs, order tracking, basic troubleshooting. Humans handle complex issues, complaints, and edge cases. Best results come from AI + humans working together.",
  },
  {
    q: "What if AI gives wrong answers?",
    a: "We implement safety measures: (1) Confidence thresholds\u2014AI admits when unsure, (2) Human review for high-stakes decisions, (3) Fallback to human agents, (4) Continuous monitoring and improvement. AI learns from mistakes.",
  },
  {
    q: "Do you provide training for our team?",
    a: "Yes! We provide comprehensive training on using, monitoring, and improving your AI solution. Documentation, video tutorials, and live sessions. You'll understand how to update responses, monitor performance, and optimise over time.",
  },
  {
    q: "Can we use our own AI models?",
    a: "Absolutely! If you have custom models or prefer specific providers, we can integrate them. We also build custom models trained specifically on your data for unique use cases where generic LLMs aren't sufficient.",
  },
  {
    q: "What industries do you work with?",
    a: "E-commerce, SaaS, healthcare (HIPAA-compliant), finance, education, professional services, real estate, and more. AI applications are universal\u2014every industry can benefit from automation, chatbots, or ML models.",
  },
];

const pricingFactors = [
  { icon: Layers, label: "Project Complexity" },
  { icon: Database, label: "Data Requirements" },
  { icon: Zap, label: "AI Model Choice" },
  { icon: Plug, label: "Integrations Needed" },
];

const priceRanges = [
  { label: "Simple AI Chatbot", price: "£5,000" },
  { label: "Custom AI Agent", price: "£10,000" },
  { label: "Full AI Automation", price: "£15,000" },
  { label: "ML Model Development", price: "£20,000" },
];

export default function AIServicesPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="AI Development Services | Chatbots & AI Agents UK"
        description="AI development services. ChatGPT integration, AI chatbots, automation, custom ML models. Built with GPT-4, Claude. Reduce costs, improve efficiency."
        canonical="/services/ai-services"
      />
      {/* HERO SECTION */}
      <section className="py-24" data-testid="section-ai-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Breadcrumbs
                items={[
                  { label: "Services", href: "/services" },
                  { label: "AI Services" },
                ]}
              />

              <Badge
                className="mt-6 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 no-default-hover-elevate no-default-active-elevate"
                data-testid="badge-ai-services"
              >
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                AI Development Services
              </Badge>

              <h1
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
                data-testid="text-ai-title"
              >
                AI Development & Integration Services
              </h1>

              <p
                className="mt-3 text-xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent"
                data-testid="text-ai-tagline"
              >
                Custom AI Solutions That Transform Your Business
              </p>

              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                From GPT-4 and Claude-powered chatbots to custom machine learning models, we build AI solutions that automate operations, reduce costs, and drive growth for businesses of all sizes.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "GPT-4 & Claude", icon: Sparkles },
                  { label: "Custom AI Agents", icon: Bot },
                  { label: "Automation", icon: Zap },
                  { label: "24/7 Support", icon: Clock },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-1.5 bg-muted rounded-full px-3 py-1.5 text-sm"
                    data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <pill.icon className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{pill.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4" data-testid="hero-stats">
                {[
                  { value: "30+", label: "AI Projects" },
                  { value: "70%", label: "Cost Savings" },
                  { value: "24/7", label: "Automated" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0"
                  asChild
                >
                  <Link href="/contact" data-testid="button-book-ai-consultation">
                    Book AI Consultation
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleScrollTo("ai-services")}
                  data-testid="button-explore-ai-services"
                >
                  Explore AI Services
                </Button>
              </div>

              <p className="mt-6 text-xs text-muted-foreground" data-testid="text-trust-line">
                Powered by OpenAI, Anthropic, and custom ML models
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <AIDashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="ai-services" className="py-20 bg-muted" data-testid="section-what-we-build">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-services-title">
              AI Solutions We Build
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              From chatbots to custom machine learning models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-testid={`service-card-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Card className="p-6 h-full hover-elevate">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${svc.gradient} flex items-center justify-center`}
                    >
                      {svc.title === "AI Chatbots" && <MessageSquare className="h-6 w-6 text-white" />}
                      {svc.title === "Autonomous AI Agents" && <Bot className="h-6 w-6 text-white" />}
                      {svc.title === "Workflow Automation" && <Zap className="h-6 w-6 text-white" />}
                      {svc.title === "AI Integration Services" && <Plug className="h-6 w-6 text-white" />}
                      {svc.title === "Machine Learning Models" && <Brain className="h-6 w-6 text-white" />}
                    </div>
                    {svc.badge && (
                      <Badge variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">
                        {svc.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold">{svc.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {svc.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Sparkles className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" style={{ color: svc.colorFrom }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {svc.useCases.map((uc) => (
                      <Badge key={uc} variant="outline" className="text-[10px]">
                        {uc}
                      </Badge>
                    ))}
                  </div>

                  <Link href={svc.link} data-testid={`link-${svc.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="ghost" className="mt-4 p-0 h-auto text-sm font-medium">
                      Learn More <ChevronRight className="h-4 w-4 ml-0.5" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <CTASection
        variant="gradient"
        title="Ready to Explore AI for Your Business?"
        description="Book a free consultation to discover how AI chatbots, agents, and automation can transform your operations and reduce costs."
        primaryCTA={{ text: "Book AI Consultation", link: "/contact" }}
        size="large"
      />

      {/* HOW AI TRANSFORMS BUSINESS */}
      <section className="py-20 px-6" data-testid="section-value-proposition">
        <ValueProposition
          title="How AI Transforms Your Business"
          subtitle="Real benefits our clients experience"
          columns={3}
          values={[
            { icon: Clock, title: "Save 20+ Hours/Week", description: "Automate repetitive tasks and free your team to focus on high-value work that drives growth." },
            { icon: DollarSign, title: "Reduce Costs 70%", description: "AI handles customer support, data processing, and operations at a fraction of the cost of manual labor." },
            { icon: Zap, title: "Instant Responses", description: "Respond to customer inquiries in seconds, not hours. 24/7 availability across all channels." },
            { icon: TrendingUp, title: "Increase Conversions", description: "AI-powered recommendations and lead scoring boost conversion rates by 40-80%." },
            { icon: Users, title: "Scale Infinitely", description: "Handle 10x more customers without hiring. AI scales effortlessly as your business grows." },
            { icon: Target, title: "Better Insights", description: "AI analyzes patterns in your data to reveal opportunities and predict trends you'd otherwise miss." },
            { icon: Globe, title: "24/7 Availability", description: "Your AI never sleeps. Serve customers across time zones without additional staffing costs." },
            { icon: CheckCircle, title: "Consistent Quality", description: "AI delivers the same high-quality responses every time, eliminating human error and inconsistency." },
            { icon: Rocket, title: "Competitive Edge", description: "Stay ahead of competitors by leveraging AI to innovate faster and deliver better customer experiences." },
          ]}
        />
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 bg-muted" data-testid="section-case-studies">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-case-studies-title">
              AI Success Stories
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Real results from real businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-testid={`case-study-${i}`}
              >
                <Card className="p-6 h-full hover-elevate" style={{ borderTopWidth: "3px", borderTopColor: cs.borderColor }}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">{cs.industry}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{cs.company}</div>
                  <h3 className="text-lg font-semibold mb-3">{cs.project}</h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium mb-1">Challenge</div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Solution</div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="bg-muted rounded-lg p-2.5 text-center">
                        <div className="text-sm font-bold">{r.value}</div>
                        <div className="text-[10px] text-muted-foreground">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cs.technologies.map((t) => (
                      <Badge key={t} variant="outline" className="text-[10px]">{t}</Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 2 */}
      <CTASection
        variant="bordered"
        title="Want Results Like These?"
        description="See how AI chatbots and agents can deliver measurable ROI for your business. Get a custom quote tailored to your needs."
        primaryCTA={{ text: "Get Custom Quote", link: "/contact" }}
        secondaryCTA={{ text: "Explore AI Chatbots", link: "/services/ai-services/ai-chatbots" }}
        size="medium"
      />

      {/* INTERACTIVE AI DEMO MOCKUPS */}
      <section className="py-20" data-testid="section-ai-demos">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-demos-title">
              See AI in Action
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Interactive examples of what we build
            </p>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-semibold text-center mb-6" data-testid="text-demo-chatbot">
                AI Chatbot Interface
              </h3>
              <ChatbotDemoMockup />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-center mb-6" data-testid="text-demo-agent">
                  AI Agent Dashboard
                </h3>
                <AgentDashboardMockup />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold text-center mb-6" data-testid="text-demo-automation">
                  Automation Workflow
                </h3>
                <AutomationWorkflowMockup />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES & INTEGRATIONS */}
      <section className="py-20 bg-muted px-6" data-testid="section-ai-technologies">
        <TabbedTechStack
          tabs={aiServicesTechTabs}
          title="Technologies We Use"
          subtitle="We use industry-leading technologies to build intelligent, scalable AI solutions."
        />
      </section>

      {/* PROCESS TIMELINE - ZIGZAG */}
      <section className="py-20 px-6 bg-background" data-testid="section-process">
        <ZigzagTimeline
          title="Our AI Development Process"
          subtitle="From concept to deployed AI solution"
          steps={zigzagSteps}
          accentColor={AI_COLOR}
        />
      </section>

      {/* PRICING APPROACH */}
      <section className="py-20 bg-muted" data-testid="section-pricing">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-pricing-title">
              Custom AI Solutions, Custom Pricing
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="max-w-4xl mx-auto p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every AI project is unique. Pricing depends on the complexity of your solution, the AI models required, data processing needs, and integrations. We provide transparent, detailed quotes after understanding your requirements.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {pricingFactors.map((pf) => (
                  <div key={pf.label} className="flex flex-col items-center text-center gap-2" data-testid={`pricing-factor-${pf.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <pf.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium">{pf.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {priceRanges.map((pr) => (
                  <div key={pr.label} className="bg-muted rounded-xl p-4 text-center" data-testid={`price-range-${pr.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <div className="text-xs text-muted-foreground mb-1">{pr.label}</div>
                    <div className="text-lg font-bold">from {pr.price}</div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" asChild>
                  <Link href="/contact" data-testid="button-get-custom-quote">
                    Get Custom Quote
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Free consultation included. No obligation quote within 48 hours.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="section-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold" data-testid="text-faq-title">
              AI Services FAQs
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
              data-testid="ai-faq-accordion"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-testid={`ai-faq-item-${i}`}
                >
                  <AccordionTrigger className="text-left" data-testid={`ai-faq-trigger-${i}`}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA 3 */}
      <CTASection
        variant="gradient"
        title="Let's Build Your AI Solution"
        description="From chatbots to autonomous agents, we build AI solutions that transform your business. Get started with a free consultation today."
        primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
        secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
        showContactInfo
        size="large"
      />
    </>
  );
}