import { Home, Search, BarChart3, User } from "lucide-react";

const transactions = [
  { name: "Design Studio", amount: "-\u00a3240", time: "2h ago", color: "bg-primary" },
  { name: "Client Payment", amount: "+\u00a31,200", time: "5h ago", color: "bg-green-500" },
  { name: "Cloud Hosting", amount: "-\u00a389", time: "1d ago", color: "bg-amber-500" },
];

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Search" },
  { icon: BarChart3, label: "Chart" },
  { icon: User, label: "Profile" },
];

export function MobileAppMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <span className="text-xs font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 rounded-sm bg-foreground/40" />
          <div className="w-3 h-2 rounded-sm bg-foreground/40" />
          <div className="w-6 h-3 rounded-sm bg-foreground/40" />
        </div>
      </div>

      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">Good morning</div>
            <div className="text-sm font-semibold">Welcome Back</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-border/50" />
        </div>
      </div>

      <div className="px-4 grid grid-cols-2 gap-2">
        <div className="rounded-md bg-muted/50 p-3">
          <div className="text-xs text-muted-foreground">Balance</div>
          <div className="text-sm font-bold">{"\u00a3"}2,450</div>
        </div>
        <div className="rounded-md bg-muted/50 p-3">
          <div className="text-xs text-muted-foreground">Growth</div>
          <div className="text-sm font-bold text-green-500">+12.5%</div>
        </div>
      </div>

      <div className="px-4 pt-4 flex-1">
        <div className="text-xs text-muted-foreground mb-2">Recent</div>
        <div className="space-y-0">
          {transactions.map((tx, i) => (
            <div
              key={i}
              className="flex items-center gap-3 py-2 border-b border-border/30 last:border-0"
            >
              <div
                className={`w-7 h-7 rounded-full ${tx.color}/20 flex items-center justify-center`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${tx.color}`} />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium">{tx.name}</div>
                <div className="text-xs text-muted-foreground">{tx.time}</div>
              </div>
              <span className="text-xs font-semibold">{tx.amount}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-around px-4 py-3 border-t border-border/30">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex flex-col items-center gap-0.5">
              <Icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-[9px] text-muted-foreground">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
