import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  ListChecks,
  Wrench,
  Zap,
  Mail,
  BarChart,
  Search,
  Target,
  Brain,
  GitBranch,
  CheckCircle,
  Headphones,
  FileText,
  Users,
  Database,
  RefreshCw,
  Shield,
  Clock,
  DollarSign,
  TrendingUp,
  MessageSquare,
  AlertTriangle,
  ChevronRight,
  ArrowRight,
  Star,
  Code2,
  TestTube,
  Rocket,
  Globe,
  Sparkles,
  Calendar,
  Activity,
  Rss,
  Cloud,
  Table,
  Archive,
  Link,
  Code,
  Image,
  Cpu,
  Eye,
  Layers,
  Network,
  Workflow,
  Settings,
  Puzzle,
  Send,
  CreditCard,
  LayoutGrid,
  Gauge,
  Bug,
  LineChart,
  Scroll,
  Bell,
  FlaskConical,
  HardDrive,
  Unplug,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { TechStackIcons } from "@/components/ui/TechStackIcons";
import { Link as WouterLink } from "wouter";

const AGENT_COLOR = "#3B82F6";

function AgentDashboardMockup() {
  return (
    <div className="relative" data-testid="agent-dashboard-mockup">
      <div
        className="rounded-2xl border bg-card p-4 space-y-3"
        style={{ boxShadow: "0 0 40px rgba(59, 130, 246, 0.15)" }}
      >
        <div className="flex items-center justify-between gap-2 border-b pb-3">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}
            >
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold">AI Agent Control Center</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] text-muted-foreground">3 Agents Active</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-green-500/10 px-2 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[10px] font-medium text-green-600 dark:text-green-400">Auto Mode: ON</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="rounded-lg bg-muted p-3 pl-4" style={{ borderLeft: "3px solid #3B82F6" }}>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" style={{ color: "#3B82F6" }} />
                <span className="text-xs font-semibold">Email Agent</span>
              </div>
              <Badge variant="secondary" className="text-[9px] bg-green-500/10 text-green-600 dark:text-green-400 no-default-hover-elevate no-default-active-elevate">Running</Badge>
            </div>
            <div className="w-full bg-muted-foreground/10 rounded-full h-1.5 mb-2">
              <div className="h-1.5 rounded-full" style={{ width: "67%", background: "linear-gradient(90deg, #3B82F6, #06B6D4)" }} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <CheckCircle className="h-2.5 w-2.5 text-green-500" />
                <span>Sorted 23 emails</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <CheckCircle className="h-2.5 w-2.5 text-green-500" />
                <span>Drafted 8 replies</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="text-center">
                <p className="text-[10px] font-bold">47</p>
                <p className="text-[8px] text-muted-foreground">Processed</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold">18</p>
                <p className="text-[8px] text-muted-foreground">Drafted</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold">3</p>
                <p className="text-[8px] text-muted-foreground">Escalated</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-3 pl-4" style={{ borderLeft: "3px solid #06B6D4" }}>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <BarChart className="h-3.5 w-3.5" style={{ color: "#06B6D4" }} />
                <span className="text-xs font-semibold">Analytics Agent</span>
              </div>
              <Badge variant="secondary" className="text-[9px] bg-green-500/10 text-green-600 dark:text-green-400 no-default-hover-elevate no-default-active-elevate">Running</Badge>
            </div>
            <div className="w-full bg-muted-foreground/10 rounded-full h-1.5 mb-2">
              <div className="h-1.5 rounded-full" style={{ width: "85%", background: "linear-gradient(90deg, #06B6D4, #3B82F6)" }} />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <CheckCircle className="h-2.5 w-2.5 text-green-500" />
                <span>Fetched Q4 sales data</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <CheckCircle className="h-2.5 w-2.5 text-green-500" />
                <span>Generated 3 charts</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="text-center">
                <p className="text-[10px] font-bold">12K</p>
                <p className="text-[8px] text-muted-foreground">Rows</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold">5</p>
                <p className="text-[8px] text-muted-foreground">Insights</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold">3</p>
                <p className="text-[8px] text-muted-foreground">Charts</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-3 pl-4" style={{ borderLeft: "3px solid #8B5CF6" }}>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <Search className="h-3.5 w-3.5" style={{ color: "#8B5CF6" }} />
                <span className="text-xs font-semibold">Research Agent</span>
              </div>
              <Badge variant="secondary" className="text-[9px] no-default-hover-elevate no-default-active-elevate">Idle</Badge>
            </div>
            <div className="text-[10px] text-muted-foreground space-y-1">
              <div className="flex items-center gap-1">
                <Clock className="h-2.5 w-2.5" />
                <span>Next: Competitor scan at 6:00 AM</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-2.5 w-2.5 text-green-500" />
                <span>Last: Industry report completed 2h ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-2">
          <p className="text-[10px] font-semibold mb-1.5">Activity Log</p>
          <div className="space-y-1">
            {[
              { time: "2:45 PM", text: "Email Agent drafted reply to client inquiry" },
              { time: "2:30 PM", text: "Analytics Agent generated revenue report" },
              { time: "2:15 PM", text: "Research Agent completed competitor analysis" },
              { time: "1:58 PM", text: "Email Agent escalated urgent message to team" },
            ].map((entry, i) => (
              <div key={i} className="flex items-start gap-2 text-[10px] text-muted-foreground">
                <span className="text-[9px] text-muted-foreground/60 w-12 flex-shrink-0">{entry.time}</span>
                <span>{entry.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-1">
          <span className="text-[9px] bg-muted px-2 py-1 rounded text-muted-foreground">Powered by GPT-4 & Custom Tools</span>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="absolute -top-2 -left-2">
        <Badge variant="secondary" className="text-[10px] no-default-hover-elevate no-default-active-elevate shadow-sm">
          Autonomous Execution
        </Badge>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
        className="absolute top-6 -right-2">
        <Badge variant="secondary" className="text-[10px] no-default-hover-elevate no-default-active-elevate shadow-sm">
          Multi-Agent System
        </Badge>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-20 -left-2">
        <Badge variant="secondary" className="text-[10px] no-default-hover-elevate no-default-active-elevate shadow-sm">
          Real-Time Monitoring
        </Badge>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        className="absolute top-24 -right-8 hidden lg:block">
        <Badge variant="secondary" className="text-[10px] no-default-hover-elevate no-default-active-elevate shadow-sm">
          24/7 Active
        </Badge>
      </motion.div>
    </div>
  );
}

const agentTypes = [
  {
    icon: Mail,
    name: "Email Management Agent",
    description: "Autonomously processes, categorizes, drafts, and responds to emails based on your rules and preferences.",
    capabilities: ["Auto-categorize incoming emails", "Draft context-aware responses", "Schedule follow-ups", "Escalate urgent messages"],
    timeSaved: "12-15 hrs/week",
    gradient: "from-blue-500 to-blue-600",
    color: "#3B82F6",
  },
  {
    icon: BarChart,
    name: "Data Analysis Agent",
    description: "Fetches, cleans, analyzes, and visualizes data from multiple sources to deliver actionable insights.",
    capabilities: ["Automated data collection", "Trend analysis & forecasting", "Report generation", "Anomaly detection"],
    timeSaved: "8-10 hrs/week",
    gradient: "from-cyan-500 to-cyan-600",
    color: "#06B6D4",
  },
  {
    icon: Search,
    name: "Research & Intelligence Agent",
    description: "Monitors competitors, market trends, and industry news to keep your team informed automatically.",
    capabilities: ["Competitor monitoring", "Market trend analysis", "News aggregation", "Strategic summaries"],
    timeSaved: "10-12 hrs/week",
    gradient: "from-purple-500 to-purple-600",
    color: "#8B5CF6",
  },
  {
    icon: Headphones,
    name: "Support Ticket Agent",
    description: "Triages, responds to, and resolves customer support tickets with intelligent automation.",
    capabilities: ["Auto-triage tickets by priority", "Generate solution responses", "Escalate complex issues", "Track resolution metrics"],
    timeSaved: "15-20 hrs/week",
    gradient: "from-green-500 to-green-600",
    color: "#22C55E",
  },
  {
    icon: Target,
    name: "Sales Outreach Agent",
    description: "Qualifies leads, personalizes outreach, and manages follow-up sequences autonomously.",
    capabilities: ["Lead scoring & qualification", "Personalized email sequences", "CRM updates", "Meeting scheduling"],
    timeSaved: "6-8 hrs/week",
    gradient: "from-orange-500 to-orange-600",
    color: "#F97316",
  },
  {
    icon: FileText,
    name: "Content Creation Agent",
    description: "Generates, edits, and publishes content across channels based on your brand guidelines.",
    capabilities: ["Blog post drafting", "Social media content", "SEO optimization", "Content scheduling"],
    timeSaved: "10-15 hrs/week",
    gradient: "from-indigo-500 to-indigo-600",
    color: "#6366F1",
  },
];

const agentTechnologies = [
  { name: "OpenAI", slug: "openai" },
  { name: "Python", slug: "python" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Docker", slug: "docker" },
  { name: "GitHub", slug: "github" },
  { name: "Slack", slug: "slack" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Zapier", slug: "zapier" },
];

const faqData = [
  { q: "What is an AI agent?", a: "An AI agent is an autonomous system that can perceive its environment, make decisions, and take actions to achieve specific goals. Unlike chatbots that respond to prompts, agents proactively execute multi-step tasks using tools, APIs, and reasoning capabilities." },
  { q: "How are AI agents different from chatbots?", a: "Chatbots respond to individual messages in a conversation. AI agents go further - they autonomously plan, execute multi-step workflows, use external tools (email, databases, APIs), make decisions, and complete complex tasks without constant human input." },
  { q: "What tasks can AI agents automate?", a: "AI agents can automate email management, data analysis, research, customer support, sales outreach, content creation, scheduling, report generation, competitor monitoring, lead qualification, and virtually any repetitive knowledge work." },
  { q: "Are AI agents safe to use?", a: "Yes. We build agents with multiple safety layers: human-in-the-loop approval for sensitive actions, configurable guardrails, action logging, rate limits, and rollback capabilities. You maintain full control over what agents can and cannot do." },
  { q: "How long does it take to build an AI agent?", a: "A typical AI agent takes 4-6 weeks from workflow analysis to deployment. Simple single-task agents can be ready in 2-3 weeks, while complex multi-agent systems may take 6-8 weeks." },
  { q: "What data do AI agents need?", a: "Agents need access to the tools and data sources relevant to their tasks - such as email accounts, CRM systems, databases, or APIs. We help you set up secure integrations and define exactly what each agent can access." },
  { q: "Can AI agents work with my existing tools?", a: "Absolutely. We build agents that integrate with your existing stack - Gmail, Outlook, Salesforce, HubSpot, Slack, Google Sheets, Jira, and 100+ other tools through APIs and webhooks." },
  { q: "How do you ensure AI agent accuracy?", a: "We use a combination of fine-tuned models, structured prompting, validation checks, human-in-the-loop review for critical decisions, comprehensive testing, and continuous monitoring to maintain 95%+ accuracy." },
  { q: "What happens if an agent makes a mistake?", a: "Agents include self-correction mechanisms and escalation protocols. If an agent detects uncertainty, it pauses and requests human review. All actions are logged for audit, and critical actions require approval before execution." },
  { q: "Can multiple agents work together?", a: "Yes. We build multi-agent systems where specialized agents collaborate - for example, a research agent feeds data to an analysis agent, which triggers an email agent. An orchestrator coordinates the workflow." },
  { q: "What is the ROI of AI agents?", a: "Most clients see ROI within 2-3 months. A typical agent saves 15-20 hours per week per workflow, reducing operational costs by 40-60%. The time saved allows teams to focus on strategic, high-value work." },
  { q: "Do you provide ongoing support?", a: "Yes. We offer monthly maintenance packages that include performance monitoring, model updates, new tool integrations, workflow adjustments, and priority support. Agents continuously improve based on usage data." },
];

const processSteps = [
  {
    icon: Target,
    title: "Workflow Analysis",
    points: [
      "Map your current manual workflows and identify automation opportunities",
      "Define agent goals, constraints, and success metrics",
      "Design the agent architecture and tool integration plan",
    ],
  },
  {
    icon: Code2,
    title: "Agent Development",
    points: [
      "Build the agent with appropriate AI models and frameworks",
      "Integrate with your existing tools, APIs, and data sources",
      "Implement guardrails, error handling, and escalation protocols",
    ],
  },
  {
    icon: TestTube,
    title: "Testing & Validation",
    points: [
      "Run comprehensive test scenarios against real workflow data",
      "Validate accuracy, safety, and edge case handling",
      "Human-in-the-loop testing with your team for quality assurance",
    ],
  },
  {
    icon: Rocket,
    title: "Deploy & Optimize",
    points: [
      "Deploy to production with monitoring and alerting in place",
      "Train your team on agent management and oversight",
      "Continuously optimize based on performance data and feedback",
    ],
  },
];

export default function AIAgentsPage() {
  useEffect(() => {
    document.title = "AI Agent Development | Autonomous AI Agents | House of Developers";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "AI Services", href: "/services/ai" },
          { label: "AI Agents" },
        ]}
      />

      {/* HERO SECTION */}
      <section className="py-24" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                className="mb-6 text-white no-default-hover-elevate no-default-active-elevate"
                style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }}
                data-testid="hero-badge"
              >
                Autonomous AI Agents
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
                Autonomous AI Agent Development
              </h1>

              <p className="text-2xl md:text-3xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent" data-testid="hero-tagline">
                AI That Takes Action While You Sleep
              </p>

              <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-xl" data-testid="hero-description">
                We build autonomous AI agents that execute complex workflows end-to-end. From email management to data analysis, our agents plan, decide, and act — saving your team 15+ hours every week.
              </p>

              <div className="flex flex-wrap gap-3 mt-6" data-testid="feature-pills">
                {[
                  { icon: Bot, label: "Autonomous" },
                  { icon: ListChecks, label: "Multi-Step Tasks" },
                  { icon: Wrench, label: "Tool Use" },
                  { icon: Zap, label: "Real-Time" },
                ].map((pill) => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm"
                  >
                    <pill.icon className="h-3.5 w-3.5" style={{ color: AGENT_COLOR }} />
                    <span>{pill.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8" data-testid="hero-stats">
                {[
                  { value: "12+", label: "Agents", sublabel: "Deployed" },
                  { value: "18", label: "Hrs/Week", sublabel: "Avg Time Saved" },
                  { value: "95%", label: "Accuracy", sublabel: "Task Success" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold" style={{ color: AGENT_COLOR }}>{stat.value}</p>
                    <p className="text-sm font-medium">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <WouterLink href="/contact">
                  <Button
                    size="lg"
                    style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)", border: "none" }}
                    className="text-white"
                    data-testid="cta-build-agent"
                  >
                    Build Your AI Agent
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </WouterLink>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById("demos")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="cta-see-demo"
                >
                  See Agent Demo
                </Button>
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground" data-testid="trust-line">
                <Star className="h-4 w-4" style={{ color: AGENT_COLOR }} />
                <span>Trusted by teams automating complex workflows</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AgentDashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT ARE AI AGENTS */}
      <section className="py-20 bg-muted" data-testid="what-are-agents">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold">What Are Autonomous AI Agents?</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
              AI agents are autonomous software systems that go beyond simple chatbots. They perceive their environment, reason about tasks, use tools, make decisions, and execute multi-step workflows independently — only escalating to humans when necessary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: 1, icon: Target, title: "Goal Set", desc: "You define the objective and constraints" },
              { num: 2, icon: Brain, title: "Plans Steps", desc: "Agent breaks goal into executable steps" },
              { num: 3, icon: Wrench, title: "Uses Tools", desc: "Connects to APIs, databases, and services" },
              { num: 4, icon: GitBranch, title: "Decides & Adapts", desc: "Makes decisions based on data and context" },
              { num: 5, icon: CheckCircle, title: "Completes Task", desc: "Delivers results and reports back" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
                data-testid={`agent-step-${i}`}
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold mb-3"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ background: `${AGENT_COLOR}15` }}
                  >
                    <step.icon className="h-6 w-6" style={{ color: AGENT_COLOR }} />
                  </div>
                  <h3 className="font-semibold text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden md:flex absolute top-8 -right-2 z-10">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENT TYPES */}
      <section className="py-20" data-testid="agent-types">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">AI Agent Solutions We Build</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentTypes.map((agent, i) => {
              const AgentIcon = agent.icon;
              return (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="p-6 h-full" data-testid={`agent-type-${i}`}>
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                      style={{ background: `linear-gradient(135deg, ${agent.color}20, ${agent.color}40)` }}
                    >
                      <AgentIcon className="h-7 w-7" style={{ color: agent.color }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>
                    <div className="space-y-2 mb-4">
                      {agent.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t">
                      <Badge variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">
                        <Clock className="h-3 w-3 mr-1" />
                        Saves {agent.timeSaved}
                      </Badge>
                      <WouterLink href="/contact" className="text-sm font-medium flex items-center gap-1" style={{ color: agent.color }}>
                        Learn More <ChevronRight className="h-3.5 w-3.5" />
                      </WouterLink>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <div className="max-w-7xl mx-auto px-6">
        <CTASection
          variant="gradient"
          title="Ready to Automate Your Workflow?"
          description="Let's build an AI agent that saves your team 15+ hours every week"
          primaryCTA={{ text: "Build My Agent", link: "/contact" }}
          size="large"
        />
      </div>

      {/* AGENT EXECUTION DEMOS */}
      <section className="py-20 bg-muted" id="demos" data-testid="demos-section">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Watch AI Agents Work Autonomously</h2>
          </motion.div>

          <div className="space-y-8">
            {/* Demo 1 - Email Processing */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="p-6" data-testid="demo-email">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
                    <Mail className="h-3 w-3 mr-1" /> Email Processing
                  </Badge>
                  <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">Agent: EmailBot v2</Badge>
                  <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">Company: TechCorp</Badge>
                </div>

                <div className="space-y-4">
                  {[
                    { step: 1, title: "Read Inbox", status: "done", detail: "Scanned 47 new emails from 3 connected accounts" },
                    { step: 2, title: "Categorize", status: "done", detail: "Sorted into: 18 Client Inquiries, 12 Internal, 8 Marketing, 6 Urgent, 3 Spam" },
                    { step: 3, title: "Draft Responses", status: "progress" },
                    { step: 4, title: "Submit for Approval", status: "queued" },
                    { step: 5, title: "Send Auto-Replies", status: "queued" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3" data-testid={`demo-email-step-${item.step}`}>
                      <div className="flex-shrink-0 mt-0.5">
                        {item.status === "done" && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {item.status === "progress" && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <RefreshCw className="h-5 w-5" style={{ color: AGENT_COLOR }} />
                          </motion.div>
                        )}
                        {item.status === "queued" && <Clock className="h-5 w-5 text-muted-foreground" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">Step {item.step}: {item.title}</span>
                          {item.status === "done" && <span className="text-[10px] text-green-600 dark:text-green-400">Completed</span>}
                          {item.status === "progress" && <span className="text-[10px]" style={{ color: AGENT_COLOR }}>In Progress</span>}
                          {item.status === "queued" && <span className="text-[10px] text-muted-foreground">Queued</span>}
                        </div>
                        {item.detail && item.status === "done" && (
                          <div className="bg-muted rounded-md p-2 mt-1 text-xs text-muted-foreground">{item.detail}</div>
                        )}
                        {item.status === "progress" && (
                          <div className="mt-2 space-y-2">
                            <div className="bg-muted rounded-md p-3 text-xs">
                              <p className="font-medium mb-1">Current Draft:</p>
                              <p className="text-muted-foreground italic">"Dear Sarah, Thank you for your inquiry about our enterprise plan. I'd be happy to schedule a call to discuss your requirements in detail..."</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-muted-foreground/10 rounded-full h-1.5">
                                <div className="h-1.5 rounded-full" style={{ width: "28%", background: AGENT_COLOR }} />
                              </div>
                              <span className="text-xs text-muted-foreground">28%</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t pt-4">
                  <p className="text-sm font-semibold mb-2">Decision Log</p>
                  <div className="space-y-1">
                    {[
                      "Categorized supplier invoice as 'Internal' - routed to finance",
                      "Detected urgent client complaint - escalated to manager",
                      "Identified 3 duplicate emails - merged into single thread",
                      "Auto-replied to 26 marketing newsletters with opt-out",
                    ].map((decision, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{decision}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 border-t pt-4">
                  {[
                    { value: "47", label: "Emails Processed" },
                    { value: "3", label: "Escalated" },
                    { value: "18", label: "Drafts Created" },
                    { value: "26", label: "Auto-Handled" },
                  ].map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="text-lg font-bold" style={{ color: AGENT_COLOR }}>{m.value}</p>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 bg-amber-500/10 rounded-lg p-3 flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700 dark:text-amber-400">Human Oversight: All drafted responses are queued for manager approval before sending. Urgent escalations trigger instant Slack notifications.</p>
                </div>
              </Card>
            </motion.div>

            {/* Demo 2 - Data Analysis */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="p-6" data-testid="demo-data-analysis">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
                    <BarChart className="h-3 w-3 mr-1" /> Data Analysis
                  </Badge>
                  <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">Agent: AnalyticsBot</Badge>
                  <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">Company: RetailMax</Badge>
                </div>

                <div className="space-y-4">
                  {[
                    { step: 1, title: "Fetch Data", status: "done", detail: "Connected to Shopify API, pulled 12,847 orders from Q4 2024" },
                    { step: 2, title: "Clean & Transform", status: "done", detail: "Removed 23 duplicates, standardized date formats, enriched with customer segments" },
                    { step: 3, title: "Analyze Patterns", status: "done" },
                    { step: 4, title: "Visualize Results", status: "done", detail: "Generated 5 charts: revenue trend, product breakdown, customer segments, AOV, conversion funnel" },
                    { step: 5, title: "Write Insights", status: "done" },
                    { step: 6, title: "Save & Notify", status: "progress" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3" data-testid={`demo-data-step-${item.step}`}>
                      <div className="flex-shrink-0 mt-0.5">
                        {item.status === "done" && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {item.status === "progress" && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <RefreshCw className="h-5 w-5" style={{ color: "#06B6D4" }} />
                          </motion.div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">Step {item.step}: {item.title}</span>
                          {item.status === "done" && <span className="text-[10px] text-green-600 dark:text-green-400">Completed</span>}
                          {item.status === "progress" && <span className="text-[10px]" style={{ color: "#06B6D4" }}>In Progress</span>}
                        </div>
                        {item.detail && item.status === "done" && (
                          <div className="bg-muted rounded-md p-2 mt-1 text-xs text-muted-foreground">{item.detail}</div>
                        )}
                        {item.step === 3 && item.status === "done" && (
                          <div className="bg-muted rounded-md p-3 mt-1 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                            <div><p className="text-muted-foreground">Revenue</p><p className="font-bold">$2.4M</p></div>
                            <div><p className="text-muted-foreground">AOV</p><p className="font-bold">$186.50</p></div>
                            <div><p className="text-muted-foreground">Top Product</p><p className="font-bold">Pro Widget X</p></div>
                            <div><p className="text-muted-foreground">Top Category</p><p className="font-bold">Electronics</p></div>
                          </div>
                        )}
                        {item.step === 5 && item.status === "done" && (
                          <div className="bg-muted rounded-md p-3 mt-1 text-xs space-y-2">
                            <div>
                              <p className="font-medium">Key Findings:</p>
                              <ul className="list-disc pl-4 text-muted-foreground space-y-0.5 mt-1">
                                <li>Revenue up 23% QoQ, driven by electronics category</li>
                                <li>Customer retention rate improved to 67%</li>
                                <li>Mobile conversions increased 34% after redesign</li>
                              </ul>
                            </div>
                            <div>
                              <p className="font-medium">Recommendations:</p>
                              <ul className="list-disc pl-4 text-muted-foreground space-y-0.5 mt-1">
                                <li>Increase ad spend on electronics by 20%</li>
                                <li>Launch loyalty program for repeat buyers</li>
                              </ul>
                            </div>
                          </div>
                        )}
                        {item.status === "progress" && (
                          <div className="bg-muted rounded-md p-3 mt-1 text-xs">
                            <div className="flex items-center gap-2">
                              <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                              <span className="font-medium">Q4_2024_Sales_Report.pdf</span>
                            </div>
                            <p className="text-muted-foreground mt-1">Saving to Google Drive and notifying team via Slack...</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-green-500/10 rounded-lg p-4 flex items-start gap-3">
                  <Clock className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-green-700 dark:text-green-400">Time Saved</p>
                    <p className="text-muted-foreground text-xs mt-1">Human analyst: ~4 hours | AI Agent: 12 minutes | <span className="font-bold text-green-600 dark:text-green-400">95% faster</span></p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Demo 3 - Research Agent */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="p-6" data-testid="demo-research">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">
                    <Search className="h-3 w-3 mr-1" /> Competitive Research
                  </Badge>
                  <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">Agent: ResearchBot</Badge>
                  <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">Company: FinanceFlow</Badge>
                </div>

                <div className="space-y-4">
                  {[
                    { step: 1, title: "Visit Competitors", status: "done", detail: "Scanned 8 competitor websites and 12 social media channels" },
                    { step: 2, title: "Detect Changes", status: "done" },
                    { step: 3, title: "Analyze Significance", status: "done" },
                    { step: 4, title: "Compile Summary", status: "done", detail: "Generated 3-page competitive intelligence briefing" },
                    { step: 5, title: "Distribute Report", status: "progress" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3" data-testid={`demo-research-step-${item.step}`}>
                      <div className="flex-shrink-0 mt-0.5">
                        {item.status === "done" && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {item.status === "progress" && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <RefreshCw className="h-5 w-5" style={{ color: "#8B5CF6" }} />
                          </motion.div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">Step {item.step}: {item.title}</span>
                          {item.status === "done" && <span className="text-[10px] text-green-600 dark:text-green-400">Completed</span>}
                          {item.status === "progress" && <span className="text-[10px]" style={{ color: "#8B5CF6" }}>In Progress</span>}
                        </div>
                        {item.detail && item.status === "done" && (
                          <div className="bg-muted rounded-md p-2 mt-1 text-xs text-muted-foreground">{item.detail}</div>
                        )}
                        {item.step === 2 && item.status === "done" && (
                          <div className="bg-muted rounded-md p-3 mt-1 text-xs space-y-1.5">
                            <p className="font-medium">3 Changes Detected:</p>
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <span className="font-bold text-amber-500">1.</span>
                              <span>CompetitorA launched new enterprise pricing tier (-15% from current rates)</span>
                            </div>
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <span className="font-bold text-amber-500">2.</span>
                              <span>CompetitorB announced AI-powered analytics feature (beta launch)</span>
                            </div>
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <span className="font-bold text-amber-500">3.</span>
                              <span>CompetitorC hired 12 new engineers (LinkedIn data)</span>
                            </div>
                          </div>
                        )}
                        {item.step === 3 && item.status === "done" && (
                          <div className="bg-muted rounded-md p-3 mt-1 text-xs space-y-1.5">
                            <p className="font-medium">Impact Assessment:</p>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-[9px] bg-red-500/10 text-red-600 dark:text-red-400 no-default-hover-elevate no-default-active-elevate">HIGH</Badge>
                                <span className="text-muted-foreground">Pricing undercut requires immediate response</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-[9px] bg-amber-500/10 text-amber-600 dark:text-amber-400 no-default-hover-elevate no-default-active-elevate">MEDIUM</Badge>
                                <span className="text-muted-foreground">AI feature overlaps with our Q2 roadmap</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-[9px] no-default-hover-elevate no-default-active-elevate">LOW</Badge>
                                <span className="text-muted-foreground">Hiring trend suggests product expansion in 6+ months</span>
                              </div>
                            </div>
                          </div>
                        )}
                        {item.status === "progress" && (
                          <div className="bg-muted rounded-md p-3 mt-1 text-xs">
                            <p className="text-muted-foreground">Sending briefing to leadership via email and Slack #competitive-intel channel...</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t pt-4">
                  <p className="text-sm font-semibold mb-2">Next Steps</p>
                  <div className="space-y-1">
                    {[
                      "Schedule pricing review meeting with leadership",
                      "Accelerate AI analytics feature development",
                      "Monitor CompetitorC hiring for product signals",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <ArrowRight className="h-3 w-3 flex-shrink-0 mt-0.5" style={{ color: "#8B5CF6" }} />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-lg p-4 flex items-start gap-3" style={{ background: `${AGENT_COLOR}10` }}>
                  <DollarSign className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: AGENT_COLOR }} />
                  <div className="text-sm">
                    <p className="font-semibold" style={{ color: AGENT_COLOR }}>Value Delivered</p>
                    <p className="text-muted-foreground text-xs mt-1">This daily scan replaces 10 hours/week of manual research. Annual savings: <span className="font-bold" style={{ color: AGENT_COLOR }}>~$26,000</span></p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20" data-testid="capabilities-section">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="What AI Agents Can Do"
            subtitle="Autonomous capabilities that replace hours of manual work"
            columns={3}
            accentColor={AGENT_COLOR}
            values={[
              { icon: Brain, title: "Autonomous Planning", description: "Breaks complex goals into step-by-step execution plans" },
              { icon: Wrench, title: "Tool Use & APIs", description: "Uses 100+ tools — email, CRM, databases, web scraping" },
              { icon: GitBranch, title: "Decision Making", description: "Makes intelligent decisions based on data and context" },
              { icon: RefreshCw, title: "Self-Correction", description: "Detects errors and adjusts approach automatically" },
              { icon: Database, title: "Memory & Context", description: "Remembers past actions and maintains long-term context" },
              { icon: Zap, title: "Real-Time Execution", description: "Works 24/7 without breaks, holidays, or sick days" },
              { icon: Users, title: "Human Collaboration", description: "Escalates to humans for complex or sensitive decisions" },
              { icon: BarChart, title: "Performance Tracking", description: "Logs all actions and provides detailed analytics" },
              { icon: Shield, title: "Guardrails & Safety", description: "Built-in constraints prevent unintended actions" },
            ]}
          />
        </div>
      </section>

      {/* MULTI-AGENT SYSTEMS */}
      <section className="py-20 bg-muted" data-testid="multi-agent-section">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Multi-Agent Systems</h2>
            <p className="text-muted-foreground mt-2">Multiple agents working together on complex workflows</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
                {[
                  { icon: Mail, label: "Email Agent", color: "#3B82F6" },
                  { icon: Brain, label: "Orchestrator", color: "#F97316" },
                  { icon: Search, label: "Research Agent", color: "#8B5CF6" },
                  { icon: BarChart, label: "Analysis Agent", color: "#06B6D4" },
                ].map((agent, i) => (
                  <div key={agent.label} className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center"
                        style={{ background: `${agent.color}20` }}
                      >
                        <agent.icon className="h-7 w-7" style={{ color: agent.color }} />
                      </div>
                      <span className="text-xs font-medium mt-1">{agent.label}</span>
                    </div>
                    {i < 3 && <ArrowRight className="h-5 w-5 text-muted-foreground hidden md:block" />}
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-4">Lead Qualification Workflow</h3>
                <div className="space-y-3">
                  {[
                    "Email Agent receives new inquiry and extracts key information",
                    "Orchestrator routes data to Research Agent for company analysis",
                    "Research Agent gathers company size, industry, and tech stack",
                    "Analysis Agent scores lead (1-100) based on qualification criteria",
                    "Orchestrator triggers email sequence or schedules demo based on score",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ background: AGENT_COLOR }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 border-t pt-6">
                {[
                  { icon: Zap, title: "Faster", desc: "Parallel processing across agents" },
                  { icon: Shield, title: "Reliable", desc: "Each agent specializes in its domain" },
                  { icon: TrendingUp, title: "Scalable", desc: "Add more agents as workflows grow" },
                  { icon: Brain, title: "Intelligent", desc: "Agents learn from each other's outputs" },
                ].map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <benefit.icon className="h-6 w-6 mx-auto mb-2" style={{ color: AGENT_COLOR }} />
                    <p className="text-sm font-semibold">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20" data-testid="technologies-section">
        <TechStackIcons
          title="Technologies & Tools We Use"
          technologies={agentTechnologies}
        />
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-muted" data-testid="case-study-section">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">AI Agent Success Story</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">TaskFlow</Badge>
                <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">SaaS</Badge>
                <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">28 Employees</Badge>
                <Badge variant="secondary" className="no-default-hover-elevate no-default-active-elevate">5,000 Customers</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-red-500">The Challenge</h3>
                  <div className="space-y-2">
                    {[
                      "Support team drowning in 200+ tickets/day",
                      "Average response time: 4.2 hours",
                      "Customer satisfaction dropping to 72%",
                      "3 full-time agents handling repetitive queries",
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: AGENT_COLOR }}>The Solution</h3>
                  <div className="space-y-2">
                    {[
                      "AI agent triages and categorizes all incoming tickets",
                      "Auto-resolves 68% of common questions instantly",
                      "Drafts responses for complex issues with context",
                      "Escalates to human agents with full ticket history",
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-sm mb-3">Training Data Used</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "18 months of ticket history",
                    "Product documentation (200+ pages)",
                    "Internal knowledge base (150 articles)",
                    "Previous agent responses (12K examples)",
                  ].map((item) => (
                    <Badge key={item} variant="secondary" className="text-xs no-default-hover-elevate no-default-active-elevate">{item}</Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {[
                  { metric: "Response Time", before: "4.2 hrs", after: "12 min", improvement: "95% faster" },
                  { metric: "Resolution Rate", before: "45%", after: "68%", improvement: "+23%" },
                  { metric: "CSAT Score", before: "72%", after: "94%", improvement: "+22 pts" },
                  { metric: "Tickets/Day", before: "200", after: "200", improvement: "Same volume" },
                  { metric: "Human Agents", before: "3 FTE", after: "1 FTE", improvement: "-2 headcount" },
                  { metric: "Monthly Cost", before: "$12,500", after: "$4,200", improvement: "66% savings" },
                ].map((r) => (
                  <div key={r.metric} className="text-center bg-muted rounded-lg p-3" data-testid={`result-${r.metric.toLowerCase().replace(/\s+/g, "-")}`}>
                    <p className="text-xs text-muted-foreground">{r.metric}</p>
                    <p className="text-xs line-through text-muted-foreground/60 mt-1">{r.before}</p>
                    <p className="text-lg font-bold" style={{ color: AGENT_COLOR }}>{r.after}</p>
                    <p className="text-[10px] text-green-600 dark:text-green-400 font-medium">{r.improvement}</p>
                  </div>
                ))}
              </div>

              <div className="bg-muted rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: AGENT_COLOR }} />
                  <div>
                    <p className="text-sm italic text-muted-foreground">"The AI agent transformed our support operation. What used to take our team hours now happens in minutes. Our customers are happier, our team is less stressed, and we're saving $8K per month."</p>
                    <p className="text-sm font-semibold mt-2">James Carter, Head of Support, TaskFlow</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Development Time", value: "5 weeks" },
                  { label: "Framework", value: "LangChain + GPT-4" },
                  { label: "Integrations", value: "Zendesk, Slack, Notion" },
                  { label: "ROI Period", value: "6 weeks" },
                ].map((detail) => (
                  <div key={detail.label} className="text-center">
                    <p className="text-xs text-muted-foreground">{detail.label}</p>
                    <p className="text-sm font-semibold mt-0.5">{detail.value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA 2 */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <CTASection
          variant="bordered"
          title="Want Results Like TaskFlow?"
          description="See how AI agents can cut response times 95% and boost satisfaction"
          primaryCTA={{ text: "Get Agent Quote", link: "/contact" }}
          secondaryCTA={{ text: "Watch Agent Demo", link: "#demos" }}
          size="medium"
        />
      </div>

      {/* PRICING */}
      <section className="py-20" data-testid="pricing-section">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">AI Agent Development Pricing</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-6">
              <p className="text-muted-foreground mb-6">
                Every AI agent is custom-built for your specific workflow, tools, and requirements. Pricing depends on complexity, integrations, and the level of autonomy needed.
              </p>

              <h3 className="font-bold mb-4">Pricing Factors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Brain, title: "Complexity", desc: "Number of decision points and task steps" },
                  { icon: Link, title: "Integrations", desc: "Tools, APIs, and data sources connected" },
                  { icon: Shield, title: "Safety Level", desc: "Human-in-the-loop requirements" },
                  { icon: RefreshCw, title: "Autonomy", desc: "Level of independent decision-making" },
                ].map((factor) => (
                  <div key={factor.title} className="flex items-start gap-3">
                    <factor.icon className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: AGENT_COLOR }} />
                    <div>
                      <p className="text-sm font-semibold">{factor.title}</p>
                      <p className="text-xs text-muted-foreground">{factor.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-muted rounded-lg p-4 mb-6">
                <h3 className="font-bold text-sm mb-3">Typical Development Costs</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Simple single-task agent</span>
                    <span className="font-semibold">$5,000 - $10,000</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Multi-step workflow agent</span>
                    <span className="font-semibold">$10,000 - $25,000</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Multi-agent system</span>
                    <span className="font-semibold">$25,000 - $50,000+</span>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-4 mb-6">
                <h3 className="font-bold text-sm mb-3">Monthly Operating Costs</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">AI model API costs</span>
                    <span className="font-semibold">$200 - $2,000/mo</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Hosting & infrastructure</span>
                    <span className="font-semibold">$100 - $500/mo</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">Maintenance & support</span>
                    <span className="font-semibold">$500 - $2,000/mo</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg p-4 mb-6" style={{ background: `${AGENT_COLOR}10` }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: AGENT_COLOR }}>ROI Calculation</h3>
                <p className="text-xs text-muted-foreground">
                  A typical agent saving 15 hrs/week at $50/hr = $3,000/month in labour savings. Most agents pay for themselves within 2-3 months, delivering 300-500% ROI in the first year.
                </p>
              </div>

              <div className="text-center">
                <WouterLink href="/contact">
                  <Button
                    size="lg"
                    style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)", border: "none" }}
                    className="text-white"
                    data-testid="cta-get-quote"
                  >
                    Get Custom Quote
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </WouterLink>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-muted" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="Our AI Agent Development Process"
            subtitle="From workflow analysis to autonomous execution in 4-6 weeks"
            steps={processSteps}
            accentColor={AGENT_COLOR}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" data-testid="faq-section">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">AI Agent FAQs</h2>
          </motion.div>

          <Accordion type="single" collapsible data-testid="faq-accordion">
            {faqData.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} data-testid={`faq-item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <CTASection
          variant="gradient"
          title="Let's Build Your Autonomous AI Agent"
          description="Book a free consultation to analyze your workflow and design the perfect agent"
          primaryCTA={{ text: "Book Free Consultation", link: "/contact" }}
          secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
          showContactInfo={true}
          size="large"
        />
      </div>
    </div>
  );
}
