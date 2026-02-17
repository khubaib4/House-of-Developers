import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  packageName: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
  billingCycle?: string;
}

export function PricingCard({
  packageName,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  ctaLink = "/contact",
  billingCycle,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative p-8 transition-all duration-200",
        isPopular && "border-primary border-2 scale-105 z-10"
      )}
      data-testid={`pricing-card-${packageName.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {isPopular && (
        <div className="absolute -top-3 right-6">
          <Badge variant="default" className="bg-accent text-accent-foreground border-accent-border">
            Most Popular
          </Badge>
        </div>
      )}

      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
        {packageName}
      </div>

      <div className="mt-4 flex items-baseline gap-1 flex-wrap">
        <span className="text-4xl font-bold">{price}</span>
      </div>

      {billingCycle && (
        <div className="text-sm text-muted-foreground mt-1">{billingCycle}</div>
      )}

      <p className="text-muted-foreground mt-2">{description}</p>

      <div className="border-t border-border my-6" />

      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link href={ctaLink}>
          <Button
            className={cn(
              "w-full",
              isPopular
                ? "bg-accent text-accent-foreground border-accent-border"
                : ""
            )}
            variant={isPopular ? "default" : "outline"}
            size="lg"
            data-testid={`pricing-cta-${packageName.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </Card>
  );
}
