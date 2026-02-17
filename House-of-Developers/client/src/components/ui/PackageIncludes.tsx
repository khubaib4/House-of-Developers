import { CheckCircle2, ChevronDown } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PackageFeature {
  name: string;
  description?: string;
}

interface PackageCategory {
  name: string;
  icon: LucideIcon;
  description?: string;
  features: PackageFeature[];
}

export interface PackageIncludesProps {
  title?: string;
  subtitle?: string;
  categories: PackageCategory[];
  layout?: "accordion" | "tabs" | "grid";
  defaultOpen?: boolean;
}

function AccordionLayout({
  categories,
  defaultOpen,
}: {
  categories: PackageCategory[];
  defaultOpen: boolean;
}) {
  const [openCategories, setOpenCategories] = useState<Set<number>>(() => {
    if (defaultOpen) return new Set(categories.map((_, i) => i));
    return new Set([0]);
  });

  const toggleCategory = (index: number) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="space-y-2">
      {categories.map((category, catIndex) => {
        const Icon = category.icon;
        const isOpen = openCategories.has(catIndex);

        return (
          <div
            key={catIndex}
            className="border border-border rounded-lg overflow-visible"
            data-testid={`package-category-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <button
              onClick={() => toggleCategory(catIndex)}
              className="w-full flex items-center justify-between gap-3 p-4 hover-elevate rounded-lg"
              aria-expanded={isOpen}
              data-testid={`package-toggle-${catIndex}`}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-left">
                  <span className="font-semibold text-lg block">
                    {category.name}
                  </span>
                  {category.description && (
                    <span className="text-sm text-muted-foreground">
                      {category.description}
                    </span>
                  )}
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform duration-200 flex-shrink-0",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 bg-muted/30">
                    {category.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={cn(
                          "flex items-start gap-3 p-3",
                          featureIndex < category.features.length - 1 &&
                            "border-b border-border"
                        )}
                        data-testid={`package-feature-${catIndex}-${featureIndex}`}
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="font-medium text-sm">
                            {feature.name}
                          </div>
                          {feature.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {feature.description}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function TabsLayout({ categories }: { categories: PackageCategory[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex gap-2 border-b border-border mb-6 overflow-x-auto flex-wrap">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap",
                i === activeTab
                  ? "border-b-2 border-primary font-semibold"
                  : "text-muted-foreground hover-elevate"
              )}
              data-testid={`package-tab-${i}`}
            >
              <Icon className="h-4 w-4" />
              {cat.name}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {categories[activeTab] && (
            <div>
              {categories[activeTab].description && (
                <p className="text-muted-foreground mb-6">
                  {categories[activeTab].description}
                </p>
              )}
              <div className="space-y-3">
                {categories[activeTab].features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3"
                    data-testid={`package-feature-${activeTab}-${i}`}
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="font-medium text-sm">{feature.name}</div>
                      {feature.description && (
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {feature.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function GridLayout({ categories }: { categories: PackageCategory[] }) {
  return (
    <div
      className={cn(
        "grid gap-6",
        categories.length === 2 && "grid-cols-1 md:grid-cols-2",
        categories.length >= 3 &&
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {categories.map((category, catIndex) => {
        const Icon = category.icon;
        return (
          <Card
            key={catIndex}
            className="p-6"
            data-testid={`package-category-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon className="h-5 w-5 text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </div>
            {category.description && (
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
            )}
            <div className="space-y-3">
              {category.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                  data-testid={`package-feature-${catIndex}-${i}`}
                >
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium text-sm">{feature.name}</div>
                    {feature.description && (
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {feature.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export function PackageIncludes({
  title,
  subtitle,
  categories,
  layout = "accordion",
  defaultOpen = false,
}: PackageIncludesProps) {
  return (
    <section data-testid="package-includes">
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

      {layout === "accordion" && (
        <AccordionLayout
          categories={categories}
          defaultOpen={defaultOpen}
        />
      )}
      {layout === "tabs" && <TabsLayout categories={categories} />}
      {layout === "grid" && <GridLayout categories={categories} />}
    </section>
  );
}
