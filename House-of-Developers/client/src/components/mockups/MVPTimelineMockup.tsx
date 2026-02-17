import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const milestones = [
  {
    week: "Week 1",
    title: "Discovery & Design",
    barColor: "bg-green-500",
    status: "Completed",
    statusColor: "bg-green-500/10 text-green-500",
    progress: 100,
  },
  {
    week: "Week 2",
    title: "Core Development",
    barColor: "bg-primary",
    status: "In Progress",
    statusColor: "bg-primary/10 text-primary",
    progress: 65,
  },
  {
    week: "Week 3",
    title: "Feature Build",
    barColor: "bg-muted-foreground/30",
    status: "Upcoming",
    statusColor: "bg-muted text-muted-foreground",
    progress: 0,
  },
  {
    week: "Week 4",
    title: "Launch",
    barColor: "bg-muted-foreground/30",
    status: "Upcoming",
    statusColor: "bg-muted text-muted-foreground",
    progress: 0,
  },
];

export function MVPTimelineMockup() {
  return (
    <div className="w-full h-full p-4 space-y-4 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center">
          <ChevronLeft className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
        <span className="text-sm font-semibold">March 2024</span>
        <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center">
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
      </div>

      <div className="space-y-3">
        {milestones.map((m) => (
          <div key={m.week} className="flex gap-3">
            <div className={`w-1 rounded-full ${m.barColor} self-stretch`} />
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">{m.week}</div>
                  <div className="text-sm font-medium">{m.title}</div>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-md ${m.statusColor}`}
                >
                  {m.status}
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${m.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border/30">
        <span className="text-xs text-muted-foreground">28 Days Total</span>
        <span className="text-xs text-muted-foreground">14 Days Done</span>
        <div className="flex items-center gap-1">
          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
          <span className="text-xs text-green-500">On Track</span>
        </div>
      </div>
    </div>
  );
}
