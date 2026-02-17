import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  duration?: string;
}

export interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  layout?: "vertical" | "horizontal";
  accentColor?: string;
}

export function ProcessTimeline({
  title,
  subtitle,
  steps,
  layout = "vertical",
  accentColor,
}: ProcessTimelineProps) {
  const useHorizontal = layout === "horizontal" && steps.length <= 4;

  return (
    <section data-testid="process-timeline">
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {useHorizontal ? (
        <div
          className={cn(
            "grid gap-8",
            steps.length === 3 && "grid-cols-1 md:grid-cols-3",
            steps.length === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
            steps.length <= 2 && "grid-cols-1 md:grid-cols-2"
          )}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative text-center"
              data-testid={`timeline-step-${index}`}
            >
              <div className="flex justify-center mb-4">
                <div
                  className={cn("w-16 h-16 rounded-full flex items-center justify-center shadow-md border-2", !accentColor && "bg-primary/10 border-primary")}
                  style={accentColor ? { backgroundColor: `${accentColor}15`, borderColor: accentColor } : undefined}
                >
                  <span
                    className={cn("text-2xl font-bold", !accentColor && "text-primary")}
                    style={accentColor ? { color: accentColor } : undefined}
                  >
                    {index + 1}
                  </span>
                </div>
              </div>
              <span className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                {step.phase}
              </span>
              <h3 className="text-xl font-semibold mt-1">{step.title}</h3>
              {step.duration && (
                <Badge variant="secondary" className="text-xs mt-2">
                  {step.duration}
                </Badge>
              )}
              <p className="text-muted-foreground mt-2 leading-relaxed text-sm">
                {step.description}
              </p>
              {step.deliverables.length > 0 && (
                <ul className="mt-4 space-y-2 text-left inline-block">
                  {step.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={cn("h-4 w-4 mt-0.5 flex-shrink-0", !accentColor && "text-accent")} style={accentColor ? { color: accentColor } : undefined} />
                      <span className="text-sm">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="relative space-y-0">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative flex gap-6 pb-12 last:pb-0"
              data-testid={`timeline-step-${index}`}
            >
              <div className="flex-shrink-0 relative z-10">
                <div
                  className={cn("w-12 h-12 md:w-16 md:h-16 rounded-full bg-card flex items-center justify-center shadow-md border-2", !accentColor && "border-primary")}
                  style={accentColor ? { borderColor: accentColor } : undefined}
                >
                  <span
                    className={cn("text-xl md:text-2xl font-bold", !accentColor && "text-primary")}
                    style={accentColor ? { color: accentColor } : undefined}
                  >
                    {index + 1}
                  </span>
                </div>
              </div>

              <div className="pt-1 pb-4 min-w-0 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                    {step.phase}
                  </span>
                  {step.duration && (
                    <Badge variant="secondary" className="text-xs">
                      {step.duration}
                    </Badge>
                  )}
                </div>
                <h3 className="text-2xl font-semibold mt-1">{step.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {step.description}
                </p>

                {step.deliverables.length > 0 && (
                  <div className="mt-4">
                    <div className="font-semibold text-sm mb-2">Deliverables:</div>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className={cn("h-4 w-4 mt-0.5 flex-shrink-0", !accentColor && "text-accent")} style={accentColor ? { color: accentColor } : undefined} />
                          <span className="text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
