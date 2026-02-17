import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  icon?: LucideIcon;
  logo?: string;
  category?: string;
}

export interface TechStackGridProps {
  title: string;
  description?: string;
  items: TechItem[];
  columns?: number;
  showCategories?: boolean;
  accentColor?: string;
}

const columnClasses: Record<number, string> = {
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
  8: "grid-cols-3 md:grid-cols-4 lg:grid-cols-8",
};

function ItemCard({ item, index, accentColor }: { item: TechItem; index: number; accentColor?: string }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="flex flex-col items-center p-6 rounded-xl border border-border bg-card hover-elevate"
      data-testid={`tech-item-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {item.logo ? (
        <img
          src={item.logo}
          alt={item.name}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
      ) : Icon ? (
        <Icon className="h-10 w-10 text-muted-foreground" style={accentColor ? { color: accentColor } : undefined} />
      ) : null}
      <span className="text-sm font-medium text-center mt-3">{item.name}</span>
      {item.category && (
        <span className="text-xs text-muted-foreground mt-1">
          {item.category}
        </span>
      )}
    </motion.div>
  );
}

export function TechStackGrid({
  title,
  description,
  items,
  columns = 6,
  showCategories = false,
  accentColor,
}: TechStackGridProps) {
  const gridClass = columnClasses[columns] || columnClasses[6];

  const categories = showCategories
    ? Array.from(new Set(items.map((i) => i.category).filter(Boolean)))
    : [];

  return (
    <section data-testid="tech-stack-grid">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">{title}</h2>
        {description && (
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {showCategories && categories.length > 0 ? (
        <div className="space-y-10 max-w-6xl mx-auto">
          {categories.map((cat) => {
            const catItems = items.filter((i) => i.category === cat);
            return (
              <div key={cat}>
                <h3
                  className="text-lg font-semibold mb-4 text-muted-foreground"
                  data-testid={`tech-category-${cat!.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {cat}
                </h3>
                <div className={cn("grid gap-6", gridClass)}>
                  {catItems.map((item, idx) => (
                    <ItemCard key={item.name} item={item} index={idx} accentColor={accentColor} />
                  ))}
                </div>
              </div>
            );
          })}
          {items.filter((i) => !i.category).length > 0 && (
            <div className={cn("grid gap-6", gridClass)}>
              {items
                .filter((i) => !i.category)
                .map((item, idx) => (
                  <ItemCard key={item.name} item={item} index={idx} accentColor={accentColor} />
                ))}
            </div>
          )}
        </div>
      ) : (
        <div className={cn("grid gap-6 max-w-6xl mx-auto", gridClass)}>
          {items.map((item, index) => (
            <ItemCard key={item.name} item={item} index={index} accentColor={accentColor} />
          ))}
        </div>
      )}
    </section>
  );
}
