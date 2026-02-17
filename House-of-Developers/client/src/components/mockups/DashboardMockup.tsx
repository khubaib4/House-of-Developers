import { FolderOpen, Users, CheckSquare, TrendingUp } from "lucide-react";

const stats = [
  { icon: FolderOpen, value: "12", label: "Active Projects", trend: "+8%" },
  { icon: Users, value: "8", label: "Team Members", trend: "" },
  { icon: CheckSquare, value: "156", label: "Tasks Done", trend: "+12%" },
  { icon: TrendingUp, value: "\u00a348K", label: "Revenue", trend: "+24%" },
];

const barHeights = [45, 65, 38, 80, 55, 72, 48, 60];

const activities = [
  { color: "bg-green-500", name: "Homepage redesign completed", date: "2h ago" },
  { color: "bg-primary", name: "New client onboarded", date: "4h ago" },
  { color: "bg-amber-500", name: "Sprint review scheduled", date: "6h ago" },
  { color: "bg-green-500", name: "API integration deployed", date: "1d ago" },
];

export function DashboardMockup() {
  return (
    <div className="w-full h-full p-4 space-y-4 overflow-hidden">
      <div className="grid grid-cols-4 gap-2">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-card/50 rounded-md p-3 border border-border/50"
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                {stat.trend && (
                  <span className="text-xs text-green-500">{stat.trend}</span>
                )}
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="bg-card/50 rounded-md p-3 border border-border/50">
        <div className="text-xs text-muted-foreground mb-2">Monthly Overview</div>
        <div className="relative h-32">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="border-b border-border/20 w-full" />
            ))}
          </div>
          <div className="relative h-full flex items-end gap-2 px-1">
            {barHeights.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/60 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-card/50 rounded-md p-3 border border-border/50">
        <div className="text-xs text-muted-foreground mb-2">Recent Activity</div>
        <div className="space-y-0">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="flex items-center gap-2 py-1.5 border-b border-border/30 last:border-0"
            >
              <div className={`w-2 h-2 rounded-full ${activity.color}`} />
              <span className="text-xs flex-1">{activity.name}</span>
              <span className="text-xs text-muted-foreground">{activity.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
