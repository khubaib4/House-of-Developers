import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const codeLines = [
  { num: 1, segments: [
    { text: "import", color: "#569CD6" }, { text: " { ", color: "#fff" },
    { text: "Dashboard", color: "#4EC9B0" }, { text: " } ", color: "#fff" },
    { text: "from", color: "#569CD6" }, { text: " ", color: "#fff" },
    { text: "'./components'", color: "#CE9178" },
  ]},
  { num: 2, segments: [
    { text: "import", color: "#569CD6" }, { text: " { ", color: "#fff" },
    { text: "useRealtime", color: "#4EC9B0" }, { text: " } ", color: "#fff" },
    { text: "from", color: "#569CD6" }, { text: " ", color: "#fff" },
    { text: "'./hooks'", color: "#CE9178" },
  ]},
  { num: 3, segments: [] },
  { num: 4, segments: [
    { text: "export", color: "#569CD6" }, { text: " ", color: "#fff" },
    { text: "default", color: "#569CD6" }, { text: " ", color: "#fff" },
    { text: "function", color: "#569CD6" }, { text: " ", color: "#fff" },
    { text: "App", color: "#4EC9B0" }, { text: "() {", color: "#fff" },
  ]},
  { num: 5, segments: [
    { text: "  ", color: "#fff" },
    { text: "const", color: "#569CD6" }, { text: " { ", color: "#fff" },
    { text: "data", color: "#9CDCFE" }, { text: ", ", color: "#fff" },
    { text: "users", color: "#9CDCFE" }, { text: " } = ", color: "#fff" },
    { text: "useRealtime", color: "#4EC9B0" }, { text: "()", color: "#fff" },
  ]},
  { num: 6, segments: [] },
  { num: 7, segments: [
    { text: "  ", color: "#fff" },
    { text: "return", color: "#569CD6" }, { text: " (", color: "#fff" },
  ]},
  { num: 8, segments: [
    { text: "    <", color: "#fff" },
    { text: "Dashboard", color: "#4EC9B0" },
  ]},
  { num: 9, segments: [
    { text: "      ", color: "#fff" },
    { text: "metrics", color: "#9CDCFE" }, { text: "={", color: "#fff" },
    { text: "data", color: "#9CDCFE" }, { text: ".", color: "#fff" },
    { text: "metrics", color: "#9CDCFE" }, { text: "}", color: "#fff" },
  ]},
  { num: 10, segments: [
    { text: "      ", color: "#fff" },
    { text: "users", color: "#9CDCFE" }, { text: "={", color: "#fff" },
    { text: "users", color: "#9CDCFE" }, { text: "}", color: "#fff" },
  ]},
  { num: 11, segments: [
    { text: "      ", color: "#fff" },
    { text: "theme", color: "#9CDCFE" }, { text: "=", color: "#fff" },
    { text: "\"violet\"", color: "#CE9178" },
  ]},
  { num: 12, segments: [
    { text: "    />", color: "#fff" },
  ]},
  { num: 13, segments: [
    { text: "  )", color: "#fff" },
  ]},
  { num: 14, segments: [
    { text: "}", color: "#fff" },
  ]},
];

const annotations = [
  { label: "React + TypeScript", position: "-top-3 -left-3" },
  { label: "Real-Time Updates", position: "-top-3 -right-3" },
  { label: "Production Ready", position: "-bottom-3 -left-3" },
  { label: "Fully Scalable", position: "-bottom-3 -right-3" },
];

const users = [
  { name: "Sarah K.", role: "Designer", status: "Online", color: "bg-green-500" },
  { name: "James T.", role: "Developer", status: "Away", color: "bg-yellow-500" },
  { name: "Emma R.", role: "PM", status: "Active", color: "bg-violet-500" },
];

export default function WebAppHeroMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState<"idle" | "coding" | "building" | "complete">("idle");

  useEffect(() => {
    if (!isInView) return;
    setPhase("coding");
    const codingTime = codeLines.length * 150 + 500;
    const buildingTimer = setTimeout(() => setPhase("building"), codingTime);
    const completeTimer = setTimeout(() => setPhase("complete"), codingTime + 1800);
    return () => {
      clearTimeout(buildingTimer);
      clearTimeout(completeTimer);
    };
  }, [isInView]);

  return (
    <div ref={ref} className="relative h-[500px] hidden lg:block">
      <div className="absolute left-0 top-0 w-1/2 h-full bg-[#1e1e1e] rounded-l-2xl overflow-hidden p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex gap-1 ml-3">
            <span className="text-xs text-white bg-white/10 px-3 py-1 rounded-t">AppBuilder.tsx</span>
            <span className="text-xs text-gray-500 px-3 py-1">styles.css</span>
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <motion.div
            className="font-mono text-xs space-y-1.5"
            initial="hidden"
            animate={phase !== "idle" ? "visible" : "hidden"}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {codeLines.map((line) => (
              <motion.div
                key={line.num}
                className="flex"
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
              >
                <span className="text-gray-600 w-6 text-right mr-3 select-none flex-shrink-0">
                  {line.num}
                </span>
                <span>
                  {line.segments.map((seg, i) => (
                    <span key={i} style={{ color: seg.color }}>{seg.text}</span>
                  ))}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {phase !== "idle" && (
            <div className="flex items-center mt-4">
              <div className="w-[2px] h-[14px] bg-white animate-pulse" />
            </div>
          )}

          <div className="mt-4 text-xs text-[#7C3AED] flex items-center gap-1">
            Building your application
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >...</motion.span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#007ACC] text-white text-xs px-3 py-1 flex justify-between">
          <span>TypeScript React</span>
          <span>Building... ▶</span>
        </div>
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowRight className="text-white" size={20} />
      </motion.div>

      <div className="absolute right-0 top-0 w-1/2 h-full bg-card border-l border-violet-500/30 rounded-r-2xl overflow-hidden flex flex-col">
        <div className="bg-muted p-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="bg-background/50 px-3 py-1 rounded-md text-xs text-muted-foreground flex-1 truncate">
            app.houseofdevelopers.co.uk
          </div>
          <span className="bg-green-500 text-white text-xs px-2 rounded font-medium">LIVE</span>
        </div>

        <div className="p-3 space-y-2 flex-1 overflow-hidden">
          <motion.div
            className="bg-slate-800/50 h-8 rounded flex items-center px-3 text-xs text-white justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={phase === "building" || phase === "complete" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0 }}
          >
            <span className="font-semibold">AppDash</span>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">Dashboard</span>
              <span className="text-gray-400">Analytics</span>
              <span className="text-gray-400">Settings</span>
              <div className="w-5 h-5 rounded-full bg-violet-500" />
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={phase === "building" || phase === "complete" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {[
              { value: "£24.5K", label: "Revenue" },
              { value: "1,247", label: "Users" },
              { value: "94%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label} className="bg-violet-500/10 border border-violet-500/20 rounded p-2 text-center text-xs">
                <div className="font-bold">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={phase === "building" || phase === "complete" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="text-xs font-semibold mb-1">Live Analytics</div>
            <div className="h-24 bg-muted/50 rounded overflow-hidden relative">
              <svg viewBox="0 0 300 100" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points="0,100 0,70 40,55 80,65 120,35 160,45 200,25 240,40 280,20 300,30 300,100"
                  fill="url(#chartGradient)"
                />
                <polyline
                  points="0,70 40,55 80,65 120,35 160,45 200,25 240,40 280,20 300,30"
                  fill="none"
                  stroke="rgb(139, 92, 246)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={phase === "building" || phase === "complete" ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <div className="text-xs font-semibold mb-1">Active Users</div>
            <div className="space-y-1">
              {users.map((user) => (
                <div key={user.name} className="flex items-center gap-2 text-xs">
                  <div className={`w-2 h-2 rounded-full ${user.color}`} />
                  <span className="flex-1">{user.name}</span>
                  <span className="text-muted-foreground">{user.role}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                    user.status === "Online" ? "bg-green-500/20 text-green-600" :
                    user.status === "Away" ? "bg-yellow-500/20 text-yellow-600" :
                    "bg-violet-500/20 text-violet-600"
                  }`}>{user.status}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-violet-500/10 text-violet-600 rounded text-xs p-1.5 text-center"
            initial={{ opacity: 0 }}
            animate={phase === "complete" ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            ✓ Application built successfully
          </motion.div>
        </div>
      </div>

      {annotations.map((ann, i) => (
        <motion.div
          key={ann.label}
          className={`absolute ${ann.position} bg-card border rounded-full px-3 py-1 text-xs shadow-sm z-20`}
          initial={{ opacity: 0, y: 10 }}
          animate={phase === "complete" ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
        >
          {ann.label}
        </motion.div>
      ))}
    </div>
  );
}
