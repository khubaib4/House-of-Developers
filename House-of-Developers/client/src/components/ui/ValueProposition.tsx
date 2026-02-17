import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
}

export interface ValuePropositionProps {
  title: string;
  subtitle?: string;
  values: ValueItem[];
  columns?: number;
  accentColor?: string;
}

const columnClasses: Record<number, string> = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

export function ValueProposition({
  title,
  subtitle,
  values,
  columns = 3,
  accentColor,
}: ValuePropositionProps) {
  const gridClass = columnClasses[columns] || columnClasses[3];

  return (
    <section data-testid="value-proposition">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className={cn("grid gap-8 max-w-7xl mx-auto", gridClass)}>
        {values.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card
                className="p-8 h-full hover-elevate"
                data-testid={`value-card-${index}`}
              >
                <div
                  className={cn("w-14 h-14 rounded-lg flex items-center justify-center", !accentColor && "bg-primary/10")}
                  style={accentColor ? { backgroundColor: `${accentColor}15` } : undefined}
                >
                  <Icon className={cn("h-7 w-7", !accentColor && "text-primary")} style={accentColor ? { color: accentColor } : undefined} />
                </div>
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {item.description}
                </p>
                {item.stat && (
                  <div className="mt-4">
                    <div className="text-2xl font-bold text-accent">
                      {item.stat}
                    </div>
                    {item.statLabel && (
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {item.statLabel}
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
