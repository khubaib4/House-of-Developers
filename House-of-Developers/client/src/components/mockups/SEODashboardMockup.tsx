import { motion } from "framer-motion";
import { ArrowUp, TrendingUp, BarChart2, Eye } from "lucide-react";

const keywords = [
  { keyword: "web development agency uk", prev: 18, current: 3, change: 15, sparkline: "0,20 3,18 6,15 9,12 12,5" },
  { keyword: "custom website development london", prev: 24, current: 7, change: 17, sparkline: "0,22 3,20 6,16 9,12 12,6" },
  { keyword: "hire react developer uk", prev: 45, current: 4, change: 41, sparkline: "0,24 3,20 6,14 9,8 12,4" },
  { keyword: "mobile app development agency", prev: 12, current: 2, change: 10, sparkline: "0,12 3,10 6,8 9,5 12,2" },
  { keyword: "wordpress development services", prev: 8, current: 1, change: 7, sparkline: "0,8 3,7 6,5 9,3 12,1" },
  { keyword: "shopify developer near me", prev: 19, current: 6, change: 13, sparkline: "0,18 3,16 6,12 9,9 12,5" },
];

const annotations = [
  { label: "94% on Page 1", position: "-top-3 -left-3" },
  { label: "Zero paid ads", position: "-top-3 -right-3" },
  { label: "Organic only", position: "-bottom-3 -right-3" },
];

export default function SEODashboardMockup() {
  return (
    <div className="relative hidden lg:block">
      <div className="bg-card border rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-muted border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-sm">SEO Rankings Dashboard</span>
            <span className="text-xs text-muted-foreground">houseofdevelopers.co.uk</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-muted border px-2 py-0.5 rounded">Last 90 days</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-emerald-600">Live</span>
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-3 gap-3 p-4 border-b"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <TrendingUp className="text-emerald-600" size={16} />
            <div className="text-xs text-muted-foreground mt-1">Total Keywords</div>
            <div className="text-xl font-bold text-emerald-600">248</div>
            <div className="text-xs text-emerald-600 flex items-center gap-0.5">
              <ArrowUp size={10} />
              +34 this month
            </div>
          </motion.div>

          <motion.div
            className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <BarChart2 className="text-blue-600" size={16} />
            <div className="text-xs text-muted-foreground mt-1">Avg Position</div>
            <div className="text-xl font-bold text-blue-600">8.4</div>
            <div className="text-xs text-emerald-600">↑ from 14.2</div>
          </motion.div>

          <motion.div
            className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <Eye className="text-purple-600" size={16} />
            <div className="text-xs text-muted-foreground mt-1">Monthly Clicks</div>
            <div className="text-xl font-bold text-purple-600">12,450</div>
            <div className="text-xs text-emerald-600">+180% vs last year</div>
          </motion.div>
        </motion.div>

        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold">Keyword Rankings</span>
            <span className="text-xs text-muted-foreground">248 keywords tracked</span>
          </div>

          <motion.div
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {keywords.map((kw) => (
              <motion.div
                key={kw.keyword}
                className="flex items-center gap-3 p-2.5 bg-muted/50 rounded-lg text-xs"
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
              >
                <span className="flex-1 font-medium truncate">{kw.keyword}</span>
                <svg className="w-12 h-6" viewBox="0 0 12 24">
                  <polyline
                    points={kw.sparkline}
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-muted-foreground line-through">#{kw.prev}</span>
                <ArrowUp className="text-emerald-600" size={12} />
                {kw.current <= 3 ? (
                  <span className="bg-emerald-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    #{kw.current}
                  </span>
                ) : (
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full text-xs">
                    #{kw.current}
                  </span>
                )}
                <span className="text-xs text-emerald-600">+{kw.change}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="border-t p-4">
          <div className="text-sm font-semibold mb-3">Organic Traffic Growth</div>
          <div className="relative">
            <svg className="w-full h-24" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="seoTrafficGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                points="0,85 60,70 120,55 180,45 240,30 300,15 300,100 0,100"
                fill="url(#seoTrafficGradient)"
              />
              <polyline
                points="0,85 60,70 120,55 180,45 240,30 300,15"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              />
              <circle cx="0" cy="85" r="3" fill="#10B981" />
              <circle cx="60" cy="70" r="3" fill="#10B981" />
              <circle cx="120" cy="55" r="3" fill="#10B981" />
              <circle cx="180" cy="45" r="3" fill="#10B981" />
              <circle cx="240" cy="30" r="3" fill="#10B981" />
              <circle cx="300" cy="15" r="3" fill="#10B981" />
            </svg>
            <div className="absolute top-0 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded">
              12,450 visits/mo
            </div>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
            <span>Jan</span>
          </div>
        </div>
      </div>

      {annotations.map((ann, i) => (
        <motion.div
          key={ann.label}
          className={`absolute ${ann.position} bg-card border rounded-full px-3 py-1 text-xs shadow-sm z-20`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
        >
          {ann.label}
        </motion.div>
      ))}
    </div>
  );
}
