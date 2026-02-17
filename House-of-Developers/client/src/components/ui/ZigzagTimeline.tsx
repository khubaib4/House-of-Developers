import { motion } from "framer-motion";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface ZigzagStep {
  icon: LucideIcon;
  title: string;
  points: string[];
}

interface ZigzagTimelineProps {
  title: string;
  subtitle?: string;
  steps: ZigzagStep[];
  accentColor?: string;
}

export function ZigzagTimeline({ title, subtitle, steps, accentColor = "#8B5CF6" }: ZigzagTimelineProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

        {steps.map((step, i) => {
          const isLeft = i % 2 === 0;
          const StepIcon = step.icon;
          return (
            <motion.div
              key={i}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              data-testid={`process-step-${i}`}
            >
              <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-0 z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                  style={{ borderColor: accentColor, background: "hsl(var(--background))" }}
                >
                  <StepIcon className="h-5 w-5" style={{ color: accentColor }} />
                </div>
              </div>

              <div className={`md:w-[45%] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-3 md:hidden">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${accentColor}20` }}
                    >
                      <StepIcon className="h-4 w-4" style={{ color: accentColor }} />
                    </div>
                    <h3 className="font-bold text-lg" style={{ color: accentColor }}>{step.title}</h3>
                  </div>
                  <h3 className="font-bold text-lg mb-3 hidden md:block" style={{ color: accentColor }}>
                    {step.title}
                  </h3>
                  <ul className="space-y-2">
                    {step.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
