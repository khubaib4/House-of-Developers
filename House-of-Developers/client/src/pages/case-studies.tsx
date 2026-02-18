import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Star,
  Search,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const categories = [
  "All Projects",
  "Web Development",
  "Mobile Apps",
  "AI Services",
  "SEO Projects",
];

interface Project {
  id: number;
  category: string;
  title: string;
  client: string;
  description: string;
  features: string[];
  techStack: string[];
  badgeColor: string;
  gradient: string;
  mockup: React.ComponentType;
}

function BrowserDots() {
  return (
    <div className="flex gap-1.5">
      <div className="w-2 h-2 rounded-full bg-red-400" />
      <div className="w-2 h-2 rounded-full bg-yellow-400" />
      <div className="w-2 h-2 rounded-full bg-green-400" />
    </div>
  );
}

function TaskFlowMockup() {
  return (
    <div className="w-[85%] mx-auto">
      <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 flex items-center gap-3">
          <BrowserDots />
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-700 rounded px-2 py-0.5 text-[10px] text-muted-foreground flex-1 max-w-[160px]">
            <Lock className="w-2.5 h-2.5" />
            taskflow.app
          </div>
        </div>
        <div className="flex h-[140px]">
          <div className="w-12 bg-slate-800 dark:bg-slate-950 p-2 flex flex-col gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full aspect-square rounded bg-slate-700" />
            ))}
          </div>
          <div className="flex-1 p-3 bg-slate-50 dark:bg-slate-900">
            <div className="text-[9px] font-bold mb-2 text-foreground">Projects Dashboard</div>
            <div className="grid grid-cols-3 gap-1.5 mb-2">
              <div className="bg-blue-100 dark:bg-blue-900/40 rounded p-1.5">
                <div className="text-[8px] text-blue-600 dark:text-blue-400">Active</div>
                <div className="text-[11px] font-bold text-blue-700 dark:text-blue-300">12</div>
              </div>
              <div className="bg-green-100 dark:bg-green-900/40 rounded p-1.5">
                <div className="text-[8px] text-green-600 dark:text-green-400">Done</div>
                <div className="text-[11px] font-bold text-green-700 dark:text-green-300">48</div>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/40 rounded p-1.5">
                <div className="text-[8px] text-purple-600 dark:text-purple-400">Team</div>
                <div className="text-[11px] font-bold text-purple-700 dark:text-purple-300">8</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {["To Do", "In Progress", "Done"].map((col) => (
                <div key={col} className="bg-white dark:bg-slate-800 rounded p-1">
                  <div className="text-[7px] font-semibold text-muted-foreground mb-1">{col}</div>
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="bg-slate-100 dark:bg-slate-700 rounded p-1 mb-0.5 h-3" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LuxeWearMockup() {
  return (
    <div className="relative w-full h-full flex items-end justify-center">
      <div className="w-[70%] mb-2">
        <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 flex items-center gap-3">
            <BrowserDots />
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-700 rounded px-2 py-0.5 text-[10px] text-muted-foreground flex-1 max-w-[160px]">
              <Lock className="w-2.5 h-2.5" />
              luxewear.co.uk
            </div>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-900 h-[130px]">
            <div className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-lg h-12 mb-2 flex items-center justify-center">
              <span className="text-[9px] font-bold text-purple-800 dark:text-purple-200">SUMMER COLLECTION 2026</span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-slate-200 dark:bg-slate-700 rounded aspect-square" />
              ))}
            </div>
            <div className="grid grid-cols-4 gap-1 mt-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-4 bottom-0 w-[30%] transform rotate-[-3deg]">
        <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-1 shadow-2xl">
          <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden h-[120px] p-2">
            <div className="bg-slate-200 dark:bg-slate-700 rounded h-14 mb-1.5" />
            <div className="text-[8px] font-bold text-foreground">Silk Dress</div>
            <div className="text-[7px] text-muted-foreground">£129.00</div>
            <div className="bg-purple-500 text-white text-[7px] rounded px-2 py-0.5 mt-1 text-center">Add to Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthTrackMockup() {
  return (
    <div className="flex items-center justify-center gap-4 h-full">
      <div className="w-[35%] transform rotate-[-3deg]">
        <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-1.5 shadow-2xl">
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden h-[150px] p-2">
            <div className="text-[8px] font-bold text-green-600 dark:text-green-400 mb-1">HealthTrack</div>
            <div className="grid grid-cols-3 gap-1 mb-2">
              <div className="bg-green-100 dark:bg-green-900/40 rounded p-1 text-center">
                <div className="text-[7px] text-green-600 dark:text-green-400">Steps</div>
                <div className="text-[9px] font-bold text-green-700 dark:text-green-300">8,421</div>
              </div>
              <div className="bg-red-100 dark:bg-red-900/40 rounded p-1 text-center">
                <div className="text-[7px] text-red-600 dark:text-red-400">Heart</div>
                <div className="text-[9px] font-bold text-red-700 dark:text-red-300">72bpm</div>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/40 rounded p-1 text-center">
                <div className="text-[7px] text-orange-600 dark:text-orange-400">Cal</div>
                <div className="text-[9px] font-bold text-orange-700 dark:text-orange-300">1,842</div>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 rounded h-10 mb-1" />
            <div className="flex justify-around mt-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-600" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] transform rotate-[3deg]">
        <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl p-1.5 shadow-2xl">
          <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden h-[150px] p-2">
            <div className="text-[8px] font-bold text-foreground mb-1">Morning Run</div>
            <div className="flex justify-center my-2">
              <div className="w-14 h-14 rounded-full border-4 border-green-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[10px] font-bold text-foreground">24:30</div>
                  <div className="text-[6px] text-muted-foreground">min</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1 text-center">
              <div>
                <div className="text-[9px] font-bold text-foreground">5.2km</div>
                <div className="text-[6px] text-muted-foreground">Distance</div>
              </div>
              <div>
                <div className="text-[9px] font-bold text-foreground">320</div>
                <div className="text-[6px] text-muted-foreground">Calories</div>
              </div>
              <div>
                <div className="text-[9px] font-bold text-foreground">148</div>
                <div className="text-[6px] text-muted-foreground">Avg HR</div>
              </div>
            </div>
            <div className="bg-green-500 text-white text-[7px] rounded-full py-1 mt-2 text-center font-semibold">Start Run</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportBotMockup() {
  return (
    <div className="w-[85%] mx-auto">
      <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-2xl relative">
        <div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 flex items-center gap-3">
          <BrowserDots />
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-700 rounded px-2 py-0.5 text-[10px] text-muted-foreground flex-1 max-w-[160px]">
            <Lock className="w-2.5 h-2.5" />
            shop.example.com
          </div>
        </div>
        <div className="p-3 bg-slate-100 dark:bg-slate-900/50 h-[140px] relative">
          <div className="opacity-30">
            <div className="bg-slate-200 dark:bg-slate-700 rounded h-4 mb-2" />
            <div className="grid grid-cols-3 gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-slate-200 dark:bg-slate-700 rounded h-16" />
              ))}
            </div>
          </div>
          <div className="absolute right-2 bottom-2 w-[55%] bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden border">
            <div className="bg-violet-600 px-2 py-1.5 flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-[7px] text-white">AI</span>
              </div>
              <span className="text-[8px] text-white font-semibold">SupportBot</span>
            </div>
            <div className="p-1.5 space-y-1">
              <div className="flex justify-end">
                <div className="bg-violet-100 dark:bg-violet-900/40 rounded-lg px-1.5 py-0.5 max-w-[85%]">
                  <span className="text-[6px] text-violet-800 dark:text-violet-200">Do you ship to UK?</span>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg px-1.5 py-0.5 max-w-[85%]">
                  <span className="text-[6px] text-foreground">Yes! Free shipping on orders over £50 🚚</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-violet-100 dark:bg-violet-900/40 rounded-lg px-1.5 py-0.5 max-w-[85%]">
                  <span className="text-[6px] text-violet-800 dark:text-violet-200">What about returns?</span>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg px-1.5 py-0.5 max-w-[85%]">
                  <span className="text-[6px] text-foreground">30-day money back guarantee ✅</span>
                </div>
              </div>
            </div>
            <div className="px-1.5 pb-1.5">
              <div className="bg-slate-100 dark:bg-slate-700 rounded text-[6px] text-muted-foreground px-1.5 py-1">Type your message...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalBizMockup() {
  return (
    <div className="w-[85%] mx-auto">
      <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 flex items-center gap-3">
          <BrowserDots />
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-700 rounded px-2 py-0.5 text-[10px] text-muted-foreground flex-1 max-w-[160px]">
            <Search className="w-2.5 h-2.5" />
            dentist manchester
          </div>
        </div>
        <div className="p-3 bg-white dark:bg-slate-900 h-[140px]">
          <div className="flex gap-2 mb-2">
            <div className="flex-1">
              <div className="space-y-1">
                {["LocalBiz Dental", "City Smiles", "Manchester Dental"].map((name, i) => (
                  <div key={name} className={`flex items-center gap-1 p-1 rounded text-[7px] ${i === 0 ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" : ""}`}>
                    <MapPin className={`w-2.5 h-2.5 ${i === 0 ? "text-green-600" : "text-red-500"}`} />
                    <div>
                      <div className={`font-bold ${i === 0 ? "text-green-700 dark:text-green-400" : "text-foreground"}`}>{name}</div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-1.5 h-1.5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-[6px] text-muted-foreground ml-0.5">{i === 0 ? "(48)" : i === 1 ? "(22)" : "(15)"}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[35%] bg-slate-100 dark:bg-slate-700 rounded h-16 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-red-500" />
            </div>
          </div>
          <div className="border-t pt-1.5">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-1.5">
              <div className="text-[8px] font-bold text-green-700 dark:text-green-400">LocalBiz Dental - Manchester</div>
              <div className="text-[6px] text-green-600 dark:text-green-500">localbiz-dental.co.uk</div>
              <div className="text-[6px] text-muted-foreground">Expert dental care across 4 Manchester locations...</div>
            </div>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-green-500 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full shadow">#1 in 4 months</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FoodieMockup() {
  return (
    <div className="relative w-full h-full flex items-end justify-center pb-2">
      <div className="w-[60%] mb-1">
        <div className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-xl">
          <div className="bg-slate-100 dark:bg-slate-800 px-2 py-1.5 flex items-center gap-2">
            <BrowserDots />
            <div className="text-[8px] text-muted-foreground">Admin Dashboard</div>
          </div>
          <div className="p-2 bg-slate-50 dark:bg-slate-900 h-[90px]">
            <div className="text-[7px] font-bold text-foreground mb-1">Orders Today</div>
            <div className="grid grid-cols-3 gap-1 mb-1">
              <div className="bg-orange-100 dark:bg-orange-900/40 rounded p-1 text-center">
                <div className="text-[8px] font-bold text-orange-700 dark:text-orange-300">127</div>
                <div className="text-[5px] text-orange-600 dark:text-orange-400">Active</div>
              </div>
              <div className="bg-green-100 dark:bg-green-900/40 rounded p-1 text-center">
                <div className="text-[8px] font-bold text-green-700 dark:text-green-300">89</div>
                <div className="text-[5px] text-green-600 dark:text-green-400">Done</div>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/40 rounded p-1 text-center">
                <div className="text-[8px] font-bold text-blue-700 dark:text-blue-300">£2.4K</div>
                <div className="text-[5px] text-blue-600 dark:text-blue-400">Revenue</div>
              </div>
            </div>
            <div className="space-y-0.5">
              {["Margherita x2", "Pasta Carbonara"].map((item) => (
                <div key={item} className="flex justify-between items-center bg-white dark:bg-slate-800 rounded px-1 py-0.5">
                  <span className="text-[6px] text-foreground">{item}</span>
                  <span className="text-[5px] bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 px-1 rounded">Preparing</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-4 bottom-1 w-[25%] transform rotate-[5deg]">
        <div className="bg-slate-800 dark:bg-slate-950 rounded-lg p-1 shadow-xl">
          <div className="bg-white dark:bg-slate-800 rounded overflow-hidden h-[100px] p-1.5">
            <div className="text-[7px] font-bold text-foreground mb-1">Menu</div>
            <div className="space-y-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-1">
                  <div className="w-5 h-5 bg-orange-200 dark:bg-orange-800 rounded flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-600 rounded w-full mb-0.5" />
                    <div className="h-1 bg-slate-100 dark:bg-slate-700 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-3 bottom-0 w-[28%] transform rotate-[-3deg]">
        <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-1 shadow-2xl">
          <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden h-[110px] p-1.5">
            <div className="text-[7px] font-bold text-foreground mb-1">Your Order</div>
            <div className="space-y-0.5 mb-1">
              {["Margherita Pizza", "Garlic Bread", "Coke Zero"].map((item) => (
                <div key={item} className="flex justify-between text-[6px]">
                  <span className="text-foreground">{item}</span>
                  <span className="text-muted-foreground">£{(Math.random() * 10 + 5).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-0.5 flex justify-between text-[7px] font-bold text-foreground">
              <span>Total</span>
              <span>£24.97</span>
            </div>
            <div className="bg-orange-500 text-white text-[7px] rounded-full py-1 mt-1.5 text-center font-semibold">Pay Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects: Project[] = [
  {
    id: 1,
    category: "Web Development",
    title: "TaskFlow - SaaS Project Management",
    client: "Tech Startup, London",
    description:
      "Full-stack SaaS platform for project management with real-time collaboration, team dashboards, and task automation. Scaled from 0 to 5,000 active users in 6 months.",
    features: ["Real-time collaboration", "Custom workflows", "Team analytics"],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    badgeColor:
      "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
    gradient:
      "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950",
    mockup: TaskFlowMockup,
  },
  {
    id: 2,
    category: "Web Development",
    title: "LuxeWear - Fashion E-Commerce",
    client: "Fashion Retailer, Manchester",
    description:
      "High-converting Shopify store with custom features, AI-powered recommendations, and seamless checkout. £200K revenue in first 6 months.",
    features: [
      "AI product recommendations",
      "Custom checkout flow",
      "Real-time inventory",
    ],
    techStack: ["Shopify", "JavaScript", "Stripe", "Cloudflare"],
    badgeColor:
      "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
    gradient:
      "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950",
    mockup: LuxeWearMockup,
  },
  {
    id: 3,
    category: "Mobile Apps",
    title: "HealthTrack - Fitness & Wellness App",
    client: "Health Tech Startup, Bristol",
    description:
      "Native iOS and Android fitness tracking app with real-time health monitoring, workout plans, and social features. 50K downloads in 3 months.",
    features: [
      "Real-time health tracking",
      "Workout plans & guidance",
      "Social challenges",
    ],
    techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    badgeColor:
      "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
    gradient:
      "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950",
    mockup: HealthTrackMockup,
  },
  {
    id: 4,
    category: "AI Services",
    title: "SupportBot - AI Customer Service",
    client: "E-Commerce Platform, Edinburgh",
    description:
      "Intelligent AI chatbot handling 85% of customer inquiries automatically. Integrated with existing systems, trained on company data, 24/7 availability.",
    features: [
      "85% automation rate",
      "24/7 availability",
      "Multi-language support",
    ],
    techStack: ["OpenAI GPT-4", "Python", "React", "PostgreSQL"],
    badgeColor:
      "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300",
    gradient:
      "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950",
    mockup: SupportBotMockup,
  },
  {
    id: 5,
    category: "SEO Projects",
    title: "LocalBiz - Multi-Location SEO",
    client: "Dental Practice, Manchester",
    description:
      "Local SEO campaign for 4-location dental practice. Achieved #1 rankings for 28 local keywords, 300% increase in organic traffic, doubled appointment bookings.",
    features: [
      "Page 1 rankings in 4 months",
      "300% traffic increase",
      "4 locations optimized",
    ],
    techStack: ["WordPress", "Yoast SEO", "Google Business", "Ahrefs"],
    badgeColor:
      "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
    gradient:
      "bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950",
    mockup: LocalBizMockup,
  },
  {
    id: 6,
    category: "Mobile Apps",
    title: "Foodie - Restaurant Ordering App",
    client: "Restaurant Chain, Birmingham",
    description:
      "Cross-platform ordering app with table reservations, loyalty program, and real-time kitchen integration. Serving 8 locations, 2K daily orders.",
    features: [
      "Real-time order tracking",
      "Loyalty rewards system",
      "Multi-location support",
    ],
    techStack: ["Flutter", "Node.js", "PostgreSQL", "Stripe"],
    badgeColor:
      "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
    gradient:
      "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950",
    mockup: FoodieMockup,
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-24">
        <motion.div
          className="max-w-6xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block bg-muted text-foreground px-3 py-1.5 rounded-full text-sm font-medium mb-4"
          >
            Our Work
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Projects We've Built
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            Real businesses. Real results. Real software we're proud of.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
          >
            Every project tells a story. From SaaS platforms serving thousands to
            e-commerce stores doing millions—these are the solutions we've built
            for businesses like yours.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-8 justify-center"
          >
            {[
              { number: "150+", label: "Projects" },
              { number: "6 Industries", label: "Served" },
              { number: "98%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col text-center">
                <span className="text-3xl font-bold text-foreground">
                  {stat.number}
                </span>
                <span className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <div className="py-4 bg-muted sticky top-0 z-40 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`aspect-video ${project.gradient} relative p-6 flex items-center justify-center overflow-hidden`}
                  >
                    <project.mockup />
                  </div>
                  <div className="p-6">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${project.badgeColor} mb-3 inline-block`}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.client}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-1 mb-4">
                      {project.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Want Your Project Here?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground mb-8"
          >
            We're selective about the projects we take on. If you're serious
            about building something great, let's talk.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base"
              >
                View Our Services
              </Button>
            </Link>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm text-muted-foreground"
          >
            Free consultation · See if we're a good fit
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
