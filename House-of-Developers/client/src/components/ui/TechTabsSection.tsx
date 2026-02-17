import { useState } from "react";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TechItem {
  icon: LucideIcon;
  name: string;
  description: string;
}

interface TechTab {
  id: string;
  label: string;
  items: TechItem[];
}

export interface TechTabsSectionProps {
  title: string;
  subtitle?: string;
  tabs: TechTab[];
  accentColor?: string;
}

export function TechTabsSection({
  title,
  subtitle,
  tabs,
  accentColor = "#3B82F6",
}: TechTabsSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");
  const activePanel = tabs.find((t) => t.id === activeTab);

  return (
    <div data-testid="tech-tabs-section">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div
        className="flex flex-wrap gap-2 justify-center mb-8"
        data-testid="tech-tab-nav"
      >
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveTab(tab.id)}
            style={
              activeTab === tab.id
                ? { background: accentColor, borderColor: accentColor }
                : undefined
            }
            className={activeTab === tab.id ? "text-white" : ""}
            data-testid={`tech-tab-${tab.id}`}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {activePanel && (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          data-testid={`tech-panel-${activeTab}`}
        >
          {activePanel.items.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <Card
                key={i}
                className="p-4 text-center flex flex-col items-center gap-2"
                data-testid={`tech-card-${activeTab}-${i}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${accentColor}15` }}
                >
                  <ItemIcon
                    className="w-5 h-5"
                    style={{ color: accentColor }}
                  />
                </div>
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
