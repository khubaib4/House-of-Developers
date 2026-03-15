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
import { ZigzagTimeline } from "@/components/ui/ZigzagTimeline";
import { ValueProposition } from "@/components/ui/ValueProposition";
import { CTASection } from "@/components/ui/CTASection";
import { TabbedTechStack } from "@/components/ui/TabbedTechStack";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  Layers,
  Layout,
  Server,
  Shield,
  Award,
  Zap,
  FileText,
  User,
  Briefcase,
  Building,
  Code2,
  Rocket,
  MessageSquare,
  FileCheck,
  Headphones,
  TrendingUp,
  Search,
  UserCheck,
  RefreshCw,
  DollarSign,
  Terminal,
  GitBranch,
  FolderOpen,
  FileCode,
  Hash,
} from "lucide-react";

const HIRE_COLOR = "#6366F1";

const categories = [
  {
    icon: Layers,
    name: "Full-Stack Developers",
    description: "End-to-end developers who handle frontend, backend, and deployment",
    available: "15+ Developers",
    techStack: ["MERN Stack", "MEAN Stack", "MEVN Stack", "LAMP Stack", "Next.js Full-Stack"],
    link: "/services/hire-developers/full-stack",
    cta: "View Full-Stack Developers",
  },
  {
    icon: Layout,
    name: "Frontend Developers",
    description: "UI/UX specialists who build beautiful, responsive user interfaces",
    available: "12+ Developers",
    techStack: ["React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"],
    link: "/services/hire-developers/frontend",
    cta: "View Frontend Developers",
  },
  {
    icon: Server,
    name: "Backend Developers",
    description: "API and database experts who build scalable server-side systems",
    available: "18+ Developers",
    techStack: ["Node.js", "Python Django", "PHP Laravel", ".NET Core", "Go"],
    link: "/services/hire-developers/backend",
    cta: "View Backend Developers",
  },
];

const pricingPlans = [
  {
    name: "Part-Time Developer",
    price: "£2,500",
    period: "/month",
    billing: "Monthly, no long-term contract",
    description: "Perfect for ongoing support and feature additions",
    isPopular: false,
    features: [
      "80 hours per month (4 hours/day)",
      "Flexible scheduling",
      "Direct communication (Slack/Teams)",
      "Weekly progress updates",
      "Code reviews included",
      "Easy to scale up",
    ],
    cta: "Hire Part-Time",
  },
  {
    name: "Full-Time Developer",
    price: "£4,500",
    period: "/month",
    billing: "Monthly, no long-term contract",
    description: "Dedicated resource for active development",
    isPopular: true,
    features: [
      "160 hours per month (8 hours/day)",
      "Fully dedicated to your project",
      "Daily standups & communication",
      "Sprint planning included",
      "Code reviews & documentation",
      "Priority support",
    ],
    cta: "Hire Full-Time",
  },
  {
    name: "Dedicated Team",
    price: "Custom Quote",
    period: "",
    billing: "Based on team size",
    description: "Complete team with project manager",
    isPopular: false,
    features: [
      "3+ developers (mix of roles)",
      "Project manager included",
      "Scrum/Agile ceremonies",
      "Team coordination & management",
      "Scalable team size",
      "Long-term partnership",
    ],
    cta: "Build Your Team",
  },
];

const zigzagSteps = [
  {
    icon: Search,
    title: "Consultation & Requirements",
    points: [
      "Free 30-minute call to understand your needs, tech stack, and team culture",
      "Define engagement model (part-time/full-time) and project timeline",
      "Discuss budget, required skills, and experience level",
    ],
  },
  {
    icon: Users,
    title: "Developer Matching",
    points: [
      "Match you with 2-3 pre-vetted candidates from our developer database",
      "Receive detailed profiles with CVs, portfolios, and skill assessments",
      "Candidates matched on skills, availability, and culture fit",
    ],
  },
  {
    icon: FileCheck,
    title: "Interview & Selection",
    points: [
      "Schedule interviews with shortlisted candidates for technical discussion",
      "Assess culture fit and conduct reference checks as needed",
      "Make your final candidate selection with full confidence",
    ],
  },
  {
    icon: UserCheck,
    title: "Onboarding & Setup",
    points: [
      "Contract signing and developer onboarding to your tools",
      "Access to codebase, systems, and communication channels (Slack/Teams)",
      "Initial sprint planning to hit the ground running",
    ],
  },
  {
    icon: RefreshCw,
    title: "Work & Support",
    points: [
      "Daily/weekly standups with code reviews and QA included",
      "Ongoing progress tracking and monthly performance reviews",
      "Continuous project management support and easy scaling",
    ],
  },
];

const developerProfiles = [
  {
    name: "Senior Full-Stack Developer",
    specialty: "MERN Stack Specialist",
    experience: "8+ years",
    skills: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "AWS"],
    highlights: [
      "Built 20+ production web applications",
      "Expert in microservices architecture",
      "Experience with CI/CD and DevOps",
    ],
    available: "Immediately",
    availableNow: true,
  },
  {
    name: "Senior Frontend Developer",
    specialty: "React & Next.js Expert",
    experience: "6+ years",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Jest"],
    highlights: [
      "Specialized in performance optimization",
      "Built 15+ SaaS dashboards",
      "Expert in responsive design & accessibility",
    ],
    available: "2 weeks",
    availableNow: false,
  },
  {
    name: "Senior Backend Developer",
    specialty: "Node.js & API Architect",
    experience: "10+ years",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    highlights: [
      "Designed APIs serving 1M+ requests/day",
      "Expert in database optimization",
      "Experience with AWS and GCP",
    ],
    available: "Immediately",
    availableNow: true,
  },
];

const whyHireValues = [
  { icon: Shield, title: "Pre-Vetted & Tested", description: "Every developer passes technical assessments and background checks" },
  { icon: Award, title: "Senior Level Only", description: "5+ years minimum experience, no juniors", stat: "5+ Years" },
  { icon: Zap, title: "Start in 1 Week", description: "From consultation to developer starting work", stat: "7 Days" },
  { icon: Users, title: "Perfect Culture Fit", description: "We match personalities and work styles, not just skills" },
  { icon: MessageSquare, title: "Direct Communication", description: "Developers work directly with you via Slack/Teams/Email" },
  { icon: FileCheck, title: "No Long-Term Contracts", description: "Monthly billing, cancel or pause anytime" },
  { icon: Headphones, title: "Ongoing Support", description: "We manage payroll, HR, and performance reviews" },
  { icon: TrendingUp, title: "Easy to Scale", description: "Add or remove developers as your needs change" },
  { icon: DollarSign, title: "Transparent Pricing", description: "No hidden fees, setup costs, or surprises" },
];

const whoHires = [
  { icon: Rocket, title: "Startups", description: "Scale engineering teams quickly without long hiring processes" },
  { icon: Building, title: "Agencies", description: "Handle overflow client work with reliable developers" },
  { icon: Briefcase, title: "Enterprises", description: "Fill specific skill gaps for internal projects" },
  { icon: Code2, title: "Product Teams", description: "Add capacity for new features and maintenance" },
];

const faqs = [
  { q: "How quickly can a developer start?", a: "Typically within 1 week. After our initial consultation, we match you with candidates within 48 hours. You interview and select, then the developer can start as soon as your onboarding is complete." },
  { q: "Can I interview developers before hiring?", a: "Absolutely! We encourage it. We'll send you 2-3 pre-vetted profiles. You interview them (technical discussion, culture fit) and choose who you want to work with." },
  { q: "What if I'm not satisfied with a developer?", a: "We offer a 2-week trial period. If you're not satisfied for any reason, we'll find a replacement at no additional cost. After the trial, you can pause or cancel anytime with 2 weeks notice." },
  { q: "How do you vet developers?", a: "Every developer goes through: (1) Technical assessment (coding challenges), (2) Portfolio review, (3) Reference checks, (4) Background verification, (5) English proficiency test. Only 5% of applicants make it through." },
  { q: "Do developers work in my timezone?", a: "Yes, most of our developers work UK hours (GMT/BST) or with 2-4 hour overlap with your timezone. We ensure smooth real-time collaboration." },
  { q: "What's included in the monthly cost?", a: "Everything: developer's salary, our management fee, payroll, benefits, HR, performance reviews, and support. No hidden costs." },
  { q: "Can I hire a developer permanently?", a: "Yes! After 6 months, you can directly hire the developer. We charge a one-time conversion fee (equivalent to 1 month's cost)." },
  { q: "How do you handle communication and updates?", a: "Developers communicate directly with you via Slack, Teams, email, or your preferred tool. They participate in your standups, use your project management tools (Jira, Linear), and follow your processes." },
  { q: "What if the developer takes sick leave or vacation?", a: "Developers get standard UK leave (28 days/year). For critical projects, we can provide temporary backup developers at no extra cost." },
  { q: "Do you offer project management?", a: "For dedicated teams (3+ developers), we include a project manager. For individual developers, we provide account management and check-ins, but day-to-day management is with your team." },
  { q: "Can I scale up or down?", a: "Yes! You can add developers, reduce hours (full-time to part-time), or pause with 2 weeks notice. Very flexible." },
  { q: "What technologies do your developers work with?", a: "We have developers across all major stacks: MERN, MEAN, LAMP, React, Angular, Vue, Node.js, Python (Django/Flask), PHP (Laravel), .NET, and more. Check our category pages for specific technologies." },
];

const hireTechTabs = [
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
      { name: "Python", slug: "python" },
      { name: "PHP", slug: "php" },
      { name: "Express.js", slug: "express" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Django", slug: "django" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "GraphQL", slug: "graphql" },
    ],
  },
  {
    label: "Mobile",
    technologies: [
      { name: "React Native", slug: "react" },
      { name: "Flutter", slug: "flutter" },
      { name: "Swift", slug: "swift" },
      { name: "Kotlin", slug: "kotlin" },
      { name: "Expo", slug: "expo" },
      { name: "Firebase", slug: "firebase" },
      { name: "Supabase", slug: "supabase" },
      { name: "Redux", slug: "redux" },
    ],
  },
  {
    label: "Databases",
    technologies: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "Redis", slug: "redis" },
      { name: "Elasticsearch", slug: "elasticsearch" },
      { name: "Supabase", slug: "supabase" },
      { name: "Firebase", slug: "firebase" },
      { name: "Prisma", slug: "prisma" },
    ],
  },
  {
    label: "Cloud & DevOps",
    technologies: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Vercel", slug: "vercel" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "DigitalOcean", slug: "digitalocean" },
      { name: "Terraform", slug: "terraform" },
    ],
  },
];

const integrationTools = [
  { icon: GitBranch, name: "GitHub" },
  { icon: Layout, name: "Jira" },
  { icon: MessageSquare, name: "Slack" },
  { icon: Layers, name: "Linear" },
  { icon: Code2, name: "VS Code" },
  { icon: Layout, name: "Figma" },
];

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

function DeveloperProfilesMockup() {
  const mockProfiles = [
    { initials: "FS", role: "Senior Full-Stack Developer", exp: "8+ years", skills: ["React", "Node.js", "AWS"], rotate: "-3deg", zIndex: 1, top: "0" },
    { initials: "FE", role: "Senior Frontend Developer", exp: "6+ years", skills: ["React", "Next.js", "TypeScript"], rotate: "2deg", zIndex: 2, top: "-8px" },
    { initials: "BE", role: "Senior Backend Developer", exp: "10+ years", skills: ["Node.js", "PostgreSQL", "Docker"], rotate: "-1deg", zIndex: 3, top: "-16px" },
  ];

  return (
    <div className="relative" data-testid="mockup-developer-profiles">
      <div className="space-y-4">
        {mockProfiles.map((profile, i) => (
          <motion.div
            key={profile.initials}
            initial={{ opacity: 0, x: 30, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: Number(profile.rotate.replace("deg", "")) }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
          >
            <Card className="shadow-xl" data-testid={`mockup-profile-${i}`}>
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ backgroundColor: HIRE_COLOR }}>
                    {profile.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <p className="font-semibold text-sm">{profile.role}</p>
                      <span className="text-xs text-muted-foreground">{profile.exp}</span>
                    </div>
                    <div className="flex gap-1.5 mt-2 flex-wrap">
                      {profile.skills.map((s) => (
                        <Badge key={s} variant="secondary" className="text-xs no-default-active-elevate">{s}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium whitespace-nowrap">Available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute -top-3 -right-3"
      >
        <Badge className="shadow-lg no-default-active-elevate" style={{ backgroundColor: HIRE_COLOR, color: "white" }}>
          <Shield className="h-3 w-3 mr-1" /> Pre-Vetted
        </Badge>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.95 }}
        className="absolute -bottom-3 -left-3"
      >
        <Badge variant="outline" className="shadow-lg bg-background no-default-active-elevate">
          <Award className="h-3 w-3 mr-1" /> Senior Level
        </Badge>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute top-1/2 -right-4 -translate-y-1/2"
      >
        <Badge variant="outline" className="shadow-lg bg-background no-default-active-elevate">
          UK Time Zone
        </Badge>
      </motion.div>
    </div>
  );
}

function CodingWorkspaceMockup() {
  const files = [
    { name: "src", icon: FolderOpen, indent: 0, isFolder: true },
    { name: "App.tsx", icon: FileCode, indent: 1 },
    { name: "api.ts", icon: FileCode, indent: 1 },
    { name: "database.ts", icon: FileCode, indent: 1 },
    { name: "components", icon: FolderOpen, indent: 1, isFolder: true },
    { name: "Header.tsx", icon: FileCode, indent: 2 },
    { name: "Dashboard.tsx", icon: FileCode, indent: 2 },
    { name: "README.md", icon: FileText, indent: 0 },
  ];

  const codeLines = [
    { num: 1, content: 'import { useState, useEffect } from "react";', color: "text-purple-400" },
    { num: 2, content: 'import { fetchUsers } from "./api";', color: "text-purple-400" },
    { num: 3, content: "", color: "" },
    { num: 4, content: "export function Dashboard() {", color: "text-blue-400" },
    { num: 5, content: "  const [users, setUsers] = useState([]);", color: "text-sky-300" },
    { num: 6, content: "  const [loading, setLoading] = useState(true);", color: "text-sky-300" },
    { num: 7, content: "", color: "" },
    { num: 8, content: "  useEffect(() => {", color: "text-yellow-300" },
    { num: 9, content: "    fetchUsers().then((data) => {", color: "text-green-300" },
    { num: 10, content: "      setUsers(data);", color: "text-sky-300" },
    { num: 11, content: "      setLoading(false);", color: "text-sky-300" },
    { num: 12, content: "    });", color: "text-green-300" },
    { num: 13, content: "  }, []);", color: "text-yellow-300" },
    { num: 14, content: "", color: "" },
    { num: 15, content: "  return (", color: "text-blue-400" },
    { num: 16, content: '    <div className="dashboard">', color: "text-orange-300" },
  ];

  const tabs = ["App.tsx", "api.ts", "database.ts", "README.md"];

  return (
    <div className="rounded-md border bg-[#1e1e2e] shadow-2xl overflow-hidden" data-testid="mockup-coding-workspace">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#181825] border-b border-[#313244]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-[#6c7086] ml-2 font-mono">your-project</span>
      </div>

      <div className="flex">
        <div className="w-48 border-r border-[#313244] bg-[#181825] py-2 hidden md:block">
          <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-[#6c7086] font-semibold mb-1">Explorer</div>
          {files.map((file, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-3 py-1 text-xs text-[#cdd6f4] hover:bg-[#313244]/50 cursor-default"
              style={{ paddingLeft: `${12 + file.indent * 12}px` }}
            >
              <file.icon className={`h-3.5 w-3.5 flex-shrink-0 ${file.isFolder ? "text-[#89b4fa]" : "text-[#a6adc8]"}`} />
              <span className={file.isFolder ? "text-[#89b4fa]" : ""}>{file.name}</span>
            </div>
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex border-b border-[#313244] overflow-x-auto">
            {tabs.map((tab, i) => (
              <div
                key={tab}
                className={`px-3 py-1.5 text-xs font-mono flex-shrink-0 cursor-default ${
                  i === 0 ? "bg-[#1e1e2e] text-[#cdd6f4] border-b-2 border-[#89b4fa]" : "bg-[#181825] text-[#6c7086]"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="p-3 font-mono text-xs leading-5 overflow-hidden">
            {codeLines.map((line) => (
              <div key={line.num} className="flex">
                <span className="w-6 text-right text-[#6c7086] mr-3 select-none flex-shrink-0">{line.num}</span>
                <span className={line.color || "text-[#cdd6f4]"}>{line.content}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-[#313244] bg-[#181825] px-3 py-2">
            <div className="flex items-center gap-2 text-[10px] text-[#6c7086] font-mono">
              <Terminal className="h-3 w-3" />
              <span className="text-[#a6e3a1]">$</span>
              <span>git commit -m "feat: implement user dashboard"</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-[#a6e3a1] font-mono mt-0.5">
              <Hash className="h-3 w-3" />
              <span>[main abc1234] feat: implement user dashboard</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-2 left-4 hidden lg:block">
        <Badge variant="outline" className="shadow-md bg-background text-xs no-default-active-elevate">
          <FolderOpen className="h-3 w-3 mr-1" /> Your GitHub Repo
        </Badge>
      </div>
      <div className="absolute bottom-12 -right-2 hidden lg:block">
        <Badge variant="outline" className="shadow-md bg-background text-xs no-default-active-elevate">
          <GitBranch className="h-3 w-3 mr-1" /> Daily Commits
        </Badge>
      </div>
    </div>
  );
}

export default function HireDevelopersPage() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEO
        title="Hire Dedicated Developers UK | Remote Dev Teams"
        description="Hire dedicated developers. Full-stack, frontend, backend specialists. Monthly contracts, part-time or full-time. Expert developers, competitive rates."
        canonical="/services/hire-developers"
      />
      {/* HERO */}
      <section className="py-16 md:py-24" data-testid="section-hire-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Breadcrumbs items={[
                { label: "Services", href: "/services" },
                { label: "Hire Developers" },
              ]} />

              <Badge variant="secondary" className="mt-6 mb-4" data-testid="badge-hire-developers">
                <Users className="h-3 w-3 mr-1" /> Hire Developers
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight" data-testid="text-hire-title">
                Hire Vetted Developers for Your Projects
              </h1>

              <p className="mt-2 text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Pre-Screened. Senior-Level. Ready to Start.
              </p>

              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Scale your team with senior developers who integrate seamlessly with your workflow. Full-time, part-time, or dedicated teams — vetted, managed, and ready to deliver.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                {[
                  { icon: Shield, label: "Pre-Vetted" },
                  { icon: Award, label: "5+ Years Exp" },
                  { icon: Zap, label: "Start in 1 Week" },
                  { icon: FileText, label: "No Long-Term Contracts" },
                ].map((pill) => (
                  <Badge key={pill.label} variant="outline" className="px-3 py-1.5 text-sm no-default-active-elevate" data-testid={`pill-${pill.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <pill.icon className="h-3.5 w-3.5 mr-1.5" />
                    {pill.label}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#profiles" onClick={(e) => { e.preventDefault(); handleScrollTo("profiles"); }} data-testid="button-view-profiles">
                    View Developer Profiles <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" onClick={() => handleScrollTo("pricing")} data-testid="button-see-pricing">
                  See Pricing
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground" data-testid="text-trust-signal">
                Trusted by 30+ companies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <DeveloperProfilesMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* DEVELOPER CATEGORIES */}
      <section className="py-20 bg-muted/50" data-testid="section-hire-categories">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-categories-title">
              Hire Developers by Expertise
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find the right talent for your tech stack
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <motion.div key={cat.name} variants={itemVariants}>
                <Card className="h-full hover-elevate" data-testid={`card-category-${cat.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-md flex items-center justify-center mb-6" style={{ backgroundColor: `${HIRE_COLOR}15` }}>
                      <cat.icon className="h-6 w-6" style={{ color: HIRE_COLOR }} />
                    </div>
                    <h3 className="text-2xl font-bold">{cat.name}</h3>
                    <p className="text-muted-foreground mt-2">{cat.description}</p>
                    <Badge variant="secondary" className="mt-4 no-default-active-elevate" style={{ backgroundColor: `${HIRE_COLOR}15`, color: HIRE_COLOR }}>
                      {cat.available}
                    </Badge>
                    <div className="mt-6 flex gap-2 flex-wrap">
                      {cat.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs no-default-active-elevate">{tech}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-8" asChild>
                      <Link href={cat.link} data-testid={`button-category-${cat.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        {cat.cta} <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA 1 - After Categories */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <CTASection
          variant="bordered"
          title="Need a Developer ASAP?"
          description="We can match you with qualified candidates within 48 hours"
          primaryCTA={{ text: "Get Matched Now", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
          size="medium"
        />
      </div>

      {/* PRICING */}
      <section id="pricing" className="py-20" data-testid="section-hire-pricing">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-pricing-title">
              Flexible Engagement Models
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose what works for your team and budget
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan) => (
              <motion.div key={plan.name} variants={itemVariants}>
                <Card
                  className={`h-full relative ${plan.isPopular ? "border-2" : ""}`}
                  style={plan.isPopular ? { borderColor: HIRE_COLOR } : undefined}
                  data-testid={`card-pricing-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="no-default-active-elevate" style={{ backgroundColor: HIRE_COLOR, color: "white" }}>Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {plan.name}
                    </p>
                    <p className="mt-4 text-4xl font-bold tracking-tight">
                      {plan.price}
                      <span className="text-base font-normal text-muted-foreground">{plan.period}</span>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{plan.billing}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: HIRE_COLOR }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      size="lg"
                      className="w-full mt-8"
                      variant={plan.isPopular ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/contact" data-testid={`button-pricing-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        {plan.cta} <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center space-y-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">All plans include 2-week trial period</p>
            <p className="text-sm text-muted-foreground">No setup fees or hidden costs</p>
            <p className="text-sm text-muted-foreground">Cancel or pause anytime</p>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-muted/50" data-testid="section-hire-process">
        <div className="max-w-7xl mx-auto px-6">
          <ZigzagTimeline
            title="How Hiring Works"
            subtitle="From consultation to developer onboarding in 1 week"
            steps={zigzagSteps}
            accentColor={HIRE_COLOR}
          />
        </div>
      </section>

      {/* DEVELOPER PROFILES */}
      <section id="profiles" className="py-20" data-testid="section-hire-profiles">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-profiles-title">
              Meet Our Developers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pre-vetted senior developers ready to join your team
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {developerProfiles.map((dev, i) => (
              <motion.div key={dev.name + i} variants={itemVariants}>
                <Card className="h-full hover-elevate" data-testid={`card-profile-${i}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${HIRE_COLOR}15` }}>
                        <User className="h-7 w-7" style={{ color: HIRE_COLOR }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${dev.availableNow ? "bg-green-500" : "bg-amber-500"}`} />
                          <span className={`text-xs font-medium ${dev.availableNow ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}>
                            Available: {dev.available}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg" data-testid={`text-profile-name-${i}`}>{dev.name}</h3>
                    <p className="text-sm text-muted-foreground">{dev.specialty}</p>

                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4 flex-shrink-0" />
                      <span>{dev.experience} experience</span>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs font-semibold mb-2 uppercase tracking-wide text-muted-foreground">Core Skills</p>
                      <div className="flex gap-2 flex-wrap">
                        {dev.skills.map((s) => (
                          <Badge key={s} variant="secondary" className="text-xs no-default-active-elevate">{s}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 space-y-1.5">
                      {dev.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: HIRE_COLOR }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full mt-6" asChild>
                      <a href="https://calendly.com/khubaib-houseofdevelopers/new-meeting" target="_blank" rel="noopener noreferrer">
                        Schedule Interview <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-sm text-muted-foreground text-center mt-8">
            All profiles are examples. We match developers based on your specific needs.
          </p>
        </div>
      </section>

      {/* CTA 2 - After Profiles */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <CTASection
          variant="gradient"
          title="Ready to Hire Your Next Developer?"
          description="Book a free consultation to discuss your needs and meet our developers"
          primaryCTA={{ text: "Book Consultation", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
          secondaryCTA={{ text: "View All Developers", link: "#categories" }}
          size="large"
        />
      </div>

      {/* WHY HIRE FROM US */}
      <section className="py-20 bg-muted/50" data-testid="section-hire-why">
        <div className="max-w-7xl mx-auto px-6">
          <ValueProposition
            title="Why Hire Developers Through Us"
            subtitle="We handle the hard parts so you can focus on building"
            values={whyHireValues}
            columns={3}
            accentColor={HIRE_COLOR}
          />
        </div>
      </section>

      {/* WHO HIRES OUR DEVELOPERS */}
      <section className="py-20" data-testid="section-hire-who">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-who-hires-title">
              Who Hires Our Developers
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Companies and teams that benefit from dedicated developers
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whoHires.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Card className="h-full hover-elevate" data-testid={`card-who-${item.title.toLowerCase()}`}>
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center mb-4" style={{ backgroundColor: `${HIRE_COLOR}15` }}>
                      <item.icon className="h-5 w-5" style={{ color: HIRE_COLOR }} />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CODING WORKSPACE MOCKUP */}
      <section className="py-20 bg-muted/50" data-testid="section-hire-workspace">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-workspace-title">
              Your Developers, Your Workflow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Seamlessly integrated into your existing tools and processes
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CodingWorkspaceMockup />
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center flex-wrap mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {integrationTools.map((tool) => (
              <Badge key={tool.name} variant="outline" className="px-3 py-1.5 text-sm no-default-active-elevate" data-testid={`badge-tool-${tool.name.toLowerCase()}`}>
                <tool.icon className="h-3.5 w-3.5 mr-1.5" />
                {tool.name}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <TabbedTechStack
        title="Our Tech Stack"
        subtitle="We use industry-leading technologies to build products that are fast, reliable, and maintainable."
        tabs={hireTechTabs}
      />

      {/* FAQ */}
      <section className="py-20" data-testid="section-hire-faq">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" data-testid="text-faq-title">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} data-testid={`faq-item-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA 3 - Final */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <CTASection
          variant="gradient"
          title="Let's Build Your Dream Team"
          description="Tell us what you need and we'll find the perfect developers for your project"
          primaryCTA={{ text: "Hire Developers Now", link: "https://calendly.com/khubaib-houseofdevelopers/new-meeting" }}
          secondaryCTA={{ text: "Call: +44 7429 917368", link: "tel:+447429917368" }}
          showContactInfo
          size="large"
        />
      </div>
    </>
  );
}
