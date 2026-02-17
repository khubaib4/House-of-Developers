import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const codeLines = [
  { indent: 0, tokens: [{ text: "import", color: "#C586C0" }, { text: " { Dashboard } ", color: "#9CDCFE" }, { text: "from", color: "#C586C0" }, { text: " './components'", color: "#CE9178" }] },
  { indent: 0, tokens: [{ text: "import", color: "#C586C0" }, { text: " { Analytics } ", color: "#9CDCFE" }, { text: "from", color: "#C586C0" }, { text: " './analytics'", color: "#CE9178" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: "export default", color: "#569CD6" }, { text: " function ", color: "#C586C0" }, { text: "App", color: "#DCDCAA" }, { text: "() {", color: "#D4D4D4" }] },
  { indent: 1, tokens: [{ text: "return", color: "#C586C0" }, { text: " (", color: "#D4D4D4" }] },
  { indent: 2, tokens: [{ text: "<", color: "#808080" }, { text: "Dashboard", color: "#4EC9B0" }] },
  { indent: 3, tokens: [{ text: "theme", color: "#9CDCFE" }, { text: "=", color: "#D4D4D4" }, { text: '"modern"', color: "#CE9178" }] },
  { indent: 3, tokens: [{ text: "realtime", color: "#9CDCFE" }, { text: "={", color: "#D4D4D4" }, { text: "true", color: "#569CD6" }, { text: "}", color: "#D4D4D4" }] },
  { indent: 2, tokens: [{ text: "/>", color: "#808080" }] },
  { indent: 1, tokens: [{ text: ")", color: "#D4D4D4" }] },
  { indent: 0, tokens: [{ text: "}", color: "#D4D4D4" }] },
];

function MiniDashboard() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50">
        <div className="w-4 h-4 rounded bg-primary/20" />
        <div className="text-[10px] font-semibold text-foreground/80">YourApp</div>
        <div className="ml-auto flex gap-3">
          <div className="w-8 h-1.5 rounded bg-muted-foreground/20" />
          <div className="w-8 h-1.5 rounded bg-muted-foreground/20" />
          <div className="w-8 h-1.5 rounded bg-muted-foreground/20" />
        </div>
      </div>

      <div className="p-3 flex-1 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Users", value: "2,847", color: "text-blue-500" },
            { label: "Revenue", value: "£48.2K", color: "text-emerald-500" },
            { label: "Growth", value: "+23%", color: "text-purple-500" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-muted/50 rounded-lg p-2 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.4 }}
            >
              <div className={`text-xs font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[8px] text-muted-foreground mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-muted/30 rounded-lg p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <div className="text-[8px] text-muted-foreground mb-1.5 font-medium">Analytics</div>
          <div className="flex items-end gap-[3px] h-12">
            {[35, 50, 40, 65, 55, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary/20"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 3.2 + i * 0.05, duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="space-y-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 0.4 }}
        >
          {[1, 2, 3].map((row) => (
            <div key={row} className="flex items-center gap-2 px-2 py-1 rounded bg-muted/30">
              <div className="w-5 h-5 rounded-full bg-muted-foreground/10 flex-shrink-0" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-3/4 rounded bg-muted-foreground/15" />
                <div className="h-1 w-1/2 rounded bg-muted-foreground/10" />
              </div>
              <div className="text-[8px] text-emerald-500 font-medium">Active</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function CodeToUIMockup() {
  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <div className="flex rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/10 dark:shadow-black/30">
        <div className="w-1/2 bg-[#1e1e1e] p-3 min-h-[340px]">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
              <div className="w-2 h-2 rounded-full bg-green-500/70" />
            </div>
            <div className="text-[9px] text-white/40 ml-2">YourApp.tsx</div>
          </div>

          <div className="font-mono text-[9px] leading-[16px] space-y-0">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                className="flex"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.25 }}
              >
                <span className="text-white/20 w-4 text-right mr-3 select-none text-[8px]">
                  {i + 1}
                </span>
                <span style={{ paddingLeft: `${line.indent * 12}px` }}>
                  {line.tokens.map((token, j) => (
                    <span key={j} style={{ color: token.color }}>{token.text}</span>
                  ))}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-3 flex items-center gap-1.5 text-[9px] text-emerald-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.3 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Building...
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center z-20 -mx-3">
          <motion.div
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, duration: 0.4, type: "spring" }}
          >
            <ArrowRight className="h-4 w-4 text-primary-foreground" />
          </motion.div>
        </div>

        <motion.div
          className="w-1/2 bg-card min-h-[340px]"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30 bg-muted/30">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/40" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
              <div className="w-2 h-2 rounded-full bg-green-500/40" />
            </div>
            <div className="flex-1 mx-2">
              <div className="bg-muted/50 rounded px-2 py-0.5 text-[8px] text-muted-foreground text-center">
                yourbusiness.com
              </div>
            </div>
          </div>
          <MiniDashboard />
        </motion.div>
      </div>

      <motion.div
        className="absolute -top-2 -left-2 bg-card border rounded-lg px-2 py-1 text-[9px] font-medium text-muted-foreground shadow-sm"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.3 }}
      >
        React + TypeScript
      </motion.div>
      <motion.div
        className="absolute -top-2 -right-2 bg-card border rounded-lg px-2 py-1 text-[9px] font-medium text-emerald-600 dark:text-emerald-400 shadow-sm"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.2, duration: 0.3 }}
      >
        Production Ready
      </motion.div>
      <motion.div
        className="absolute -bottom-2 -left-2 bg-card border rounded-lg px-2 py-1 text-[9px] font-medium text-muted-foreground shadow-sm"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.4, duration: 0.3 }}
      >
        Fully Scalable
      </motion.div>
      <motion.div
        className="absolute -bottom-2 -right-2 bg-card border rounded-lg px-2 py-1 text-[9px] font-medium text-muted-foreground shadow-sm"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.6, duration: 0.3 }}
      >
        Your Brand
      </motion.div>
    </div>
  );
}
