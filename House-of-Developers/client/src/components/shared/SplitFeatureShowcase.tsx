import { type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SplitFeatureShowcaseProps {
  badge?: string;
  title: string;
  description: string;
  features: Array<{ icon: LucideIcon; title: string; description: string }>;
  mockupType: "dashboard" | "mobile" | "browser" | "calendar" | "chat";
  mockupContent: ReactNode;
  reversed?: boolean;
  theme?: "light" | "dark" | "gradient";
}

function BrowserFrame({
  children,
  theme,
}: {
  children: ReactNode;
  theme: string;
}) {
  const contentBg =
    theme === "gradient"
      ? "bg-gradient-to-br from-primary/5 via-background to-accent/5"
      : theme === "dark"
        ? "bg-card"
        : "bg-background";

  return (
    <div className="rounded-md border border-border shadow-2xl bg-card overflow-visible">
      <div className="h-10 bg-muted rounded-t-md flex items-center px-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-background px-3 py-1 rounded-md text-xs text-muted-foreground">
            houseofdevelopers.co.uk
          </div>
        </div>
      </div>
      <div className={`p-0 min-h-[400px] overflow-hidden ${contentBg}`}>
        {children}
      </div>
    </div>
  );
}

function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[320px] mx-auto">
      <div className="aspect-[9/19] bg-[#1a1a1a] dark:bg-[#0a0a0a] rounded-[3rem] p-3 shadow-2xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-[#1a1a1a] dark:bg-[#0a0a0a] rounded-b-2xl z-10" />
        <div className="bg-background rounded-[2.5rem] overflow-hidden h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function DashboardFrame({
  children,
  theme,
}: {
  children: ReactNode;
  theme: string;
}) {
  const contentBg =
    theme === "gradient"
      ? "bg-gradient-to-br from-primary/5 via-background to-accent/5"
      : theme === "dark"
        ? "bg-card"
        : "bg-background";

  return (
    <div className="rounded-md border border-border shadow-2xl bg-card overflow-visible">
      <div className="h-10 bg-muted rounded-t-md flex items-center px-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-background px-3 py-1 rounded-md text-xs text-muted-foreground">
            houseofdevelopers.co.uk
          </div>
        </div>
      </div>
      <div className="flex min-h-[400px]">
        <div className="w-14 bg-muted/80 border-r border-border flex flex-col items-center py-4 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-md bg-muted-foreground/10"
            />
          ))}
        </div>
        <div className={`flex-1 overflow-hidden ${contentBg}`}>{children}</div>
      </div>
    </div>
  );
}

function MockupFrame({
  mockupType,
  theme,
  children,
}: {
  mockupType: SplitFeatureShowcaseProps["mockupType"];
  theme: string;
  children: ReactNode;
}) {
  switch (mockupType) {
    case "mobile":
    case "chat":
      return <MobileFrame>{children}</MobileFrame>;
    case "dashboard":
      return <DashboardFrame theme={theme}>{children}</DashboardFrame>;
    case "browser":
    case "calendar":
    default:
      return <BrowserFrame theme={theme}>{children}</BrowserFrame>;
  }
}

export function SplitFeatureShowcase({
  badge,
  title,
  description,
  features,
  mockupType,
  mockupContent,
  reversed = false,
  theme = "gradient",
}: SplitFeatureShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();

  const noMotion = { opacity: 1, y: 0, x: 0 };

  const contentVariants = {
    hidden: shouldReduceMotion ? noMotion : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const featureVariants = {
    hidden: shouldReduceMotion ? noMotion : { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  const mockupVariants = {
    hidden: shouldReduceMotion ? noMotion : { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      className="py-16 lg:py-24 max-w-7xl mx-auto px-6"
      data-testid="section-split-feature-showcase"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={contentVariants}
        >
          {badge && (
            <Badge
              variant="outline"
              className="bg-primary/10 px-3 py-1 text-sm font-medium mb-4"
            >
              {badge}
            </Badge>
          )}
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {description}
          </p>
          <div className="space-y-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="flex gap-4 items-start"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={featureVariants}
                >
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{feature.title}</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className={reversed ? "lg:order-first" : ""}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={mockupVariants}
          aria-hidden="true"
        >
          <MockupFrame mockupType={mockupType} theme={theme}>
            {mockupContent}
          </MockupFrame>
        </motion.div>
      </div>
    </section>
  );
}
