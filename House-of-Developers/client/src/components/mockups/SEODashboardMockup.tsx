import { TrendingUp } from "lucide-react";

const metrics = [
  { label: "Organic Traffic", value: "24.5K", trend: "+12%" },
  { label: "Keywords", value: "342", trend: "+8%" },
  { label: "Backlinks", value: "1.2K", trend: "+15%" },
  { label: "DA Score", value: "52", trend: "+3" },
];

const keywords = [
  { keyword: "project management", position: "#3", volume: "8.1K" },
  { keyword: "mvp development", position: "#1", volume: "2.4K" },
  { keyword: "startup agency", position: "#5", volume: "1.8K" },
];

export function SEODashboardMockup() {
  return (
    <div className="w-full h-full p-4 space-y-4 overflow-hidden">
      <div className="grid grid-cols-4 gap-2">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-card/50 rounded-md p-3 border border-border/50"
          >
            <div className="text-xs text-muted-foreground">{m.label}</div>
            <div className="text-sm font-bold mt-0.5">{m.value}</div>
            <div className="text-xs text-green-500 mt-0.5">{m.trend}</div>
          </div>
        ))}
      </div>

      <div className="bg-card/50 rounded-md p-3 border border-border/50">
        <div className="text-xs text-muted-foreground mb-2">Traffic Trend</div>
        <svg
          viewBox="0 0 300 100"
          className="w-full h-28"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="seo-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" className="[stop-color:hsl(var(--primary))]" stopOpacity="0.3" />
              <stop offset="100%" className="[stop-color:hsl(var(--primary))]" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <path
            d="M0,80 C30,75 60,60 90,55 C120,50 150,45 180,35 C210,25 240,20 270,15 L300,10 L300,100 L0,100 Z"
            fill="url(#seo-fill)"
          />
          <path
            d="M0,80 C30,75 60,60 90,55 C120,50 150,45 180,35 C210,25 240,20 270,15 L300,10"
            fill="none"
            className="[stroke:hsl(var(--primary))]"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="bg-card/50 rounded-md p-3 border border-border/50">
        <div className="text-xs text-muted-foreground mb-2">Top Keywords</div>
        <div className="flex items-center text-xs text-muted-foreground border-b border-border/30 pb-1 mb-1">
          <span className="flex-1">Keyword</span>
          <span className="w-10 text-center">Pos</span>
          <span className="w-12 text-center">Vol</span>
          <span className="w-8 text-right">Trend</span>
        </div>
        {keywords.map((kw) => (
          <div
            key={kw.keyword}
            className="flex items-center text-xs py-1.5 border-b border-border/30 last:border-0"
          >
            <span className="flex-1 font-medium">{kw.keyword}</span>
            <span className="w-10 text-center text-muted-foreground">
              {kw.position}
            </span>
            <span className="w-12 text-center text-muted-foreground">
              {kw.volume}
            </span>
            <span className="w-8 flex justify-end">
              <TrendingUp className="w-3 h-3 text-green-500" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
