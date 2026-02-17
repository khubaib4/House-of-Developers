import { Search } from "lucide-react";

const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Projects", active: false },
  { label: "Analytics", active: false },
  { label: "Team", active: false },
  { label: "Settings", active: false },
];

const tableRows = [
  { name: "E-commerce Platform", status: "Active", statusColor: "bg-green-500", date: "Mar 12" },
  { name: "Mobile App v2", status: "In Review", statusColor: "bg-amber-500", date: "Mar 10" },
  { name: "API Gateway", status: "Active", statusColor: "bg-green-500", date: "Mar 8" },
  { name: "Landing Page", status: "Draft", statusColor: "bg-muted-foreground/40", date: "Mar 5" },
];

export function WebAppMockup() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="h-10 border-b border-border/50 flex items-center px-4 gap-6 shrink-0">
        <div className="w-5 h-5 rounded-md bg-primary/20" />
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium">Projects</span>
          <span className="text-xs text-muted-foreground">Analytics</span>
          <span className="text-xs text-muted-foreground">Reports</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-40 border-r border-border/30 p-3 space-y-1 shrink-0">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`text-xs px-2 py-1 rounded-md ${
                item.active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="flex-1 p-3 space-y-3 overflow-hidden">
          <div className="flex items-center gap-2 rounded-md bg-muted/50 h-8 px-3">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Search projects...</span>
          </div>

          <div>
            <div className="flex items-center text-xs text-muted-foreground border-b border-border/30 pb-1.5 mb-1">
              <span className="flex-1">Name</span>
              <span className="w-20 text-center">Status</span>
              <span className="w-16 text-right">Date</span>
            </div>
            {tableRows.map((row, i) => (
              <div
                key={i}
                className="flex items-center text-xs py-1.5 border-b border-border/30 last:border-0"
              >
                <span className="flex-1 font-medium">{row.name}</span>
                <span className="w-20 flex items-center justify-center gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${row.statusColor}`} />
                  {row.status}
                </span>
                <span className="w-16 text-right text-muted-foreground">
                  {row.date}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1 pt-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i === 0 ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
