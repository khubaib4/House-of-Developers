import { type LucideIcon, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureShowcaseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
  image?: string;
  reversed?: boolean;
}

export function FeatureShowcaseCard({
  icon: Icon,
  title,
  description,
  benefits,
  image,
  reversed = false,
}: FeatureShowcaseCardProps) {
  return (
    <div
      className="rounded-2xl border border-border bg-card p-8 md:p-12"
      data-testid={`feature-showcase-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
          reversed && "lg:[direction:rtl]"
        )}
      >
        <div className={cn(reversed && "lg:[direction:ltr]")}>
          <div className="w-16 h-16 rounded-xl bg-primary/10 p-3 flex items-center justify-center">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-3xl font-bold mt-6">{title}</h3>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            {description}
          </p>
          {benefits.length > 0 && (
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  data-testid={`feature-benefit-${i}`}
                >
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={cn(reversed && "lg:[direction:ltr]")}>
          {image ? (
            <div className="rounded-xl shadow-2xl border border-border overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="rounded-xl bg-muted/50 border border-border p-8 flex items-center justify-center min-h-[250px]">
              <div className="text-center">
                <Icon className="h-16 w-16 text-primary/20 mx-auto" />
                <div className="mt-4 w-3/4 mx-auto space-y-2">
                  <div className="h-2 bg-primary/10 rounded-full" />
                  <div className="h-2 bg-primary/5 rounded-full w-2/3 mx-auto" />
                  <div className="h-2 bg-primary/10 rounded-full w-1/2 mx-auto" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
