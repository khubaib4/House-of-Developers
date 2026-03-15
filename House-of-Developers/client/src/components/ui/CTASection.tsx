import { type LucideIcon, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

function isExternal(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

interface CTAAction {
  text: string;
  link: string;
}

export interface CTASectionProps {
  variant?: "default" | "gradient" | "bordered" | "minimal";
  title: string;
  description: string;
  primaryCTA: CTAAction;
  secondaryCTA?: CTAAction;
  showContactInfo?: boolean;
  icon?: LucideIcon;
  size?: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "py-12 md:py-16",
  medium: "py-16 md:py-20",
  large: "py-20 md:py-24",
};

export function CTASection({
  variant = "default",
  title,
  description,
  primaryCTA,
  secondaryCTA,
  showContactInfo = false,
  icon: Icon,
  size = "medium",
}: CTASectionProps) {
  const containerClasses = cn(
    "rounded-2xl",
    sizeClasses[size],
    variant === "default" && "bg-muted",
    variant === "gradient" &&
      "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl",
    variant === "bordered" && "bg-card border-2 border-primary shadow-md",
    variant === "minimal" && "border-t border-border rounded-none"
  );

  const titleClasses = cn(
    "text-3xl md:text-4xl font-bold",
    variant === "gradient" && "text-primary-foreground"
  );

  const descClasses = cn(
    "text-lg mt-4 max-w-2xl mx-auto",
    variant === "gradient"
      ? "text-primary-foreground/90"
      : "text-muted-foreground"
  );

  return (
    <section
      className={containerClasses}
      data-testid="cta-section"
    >
      <div className="max-w-4xl mx-auto text-center px-6">
        {Icon && (
          <div className="flex justify-center mb-4">
            <Icon
              className={cn(
                "h-12 w-12",
                variant === "gradient"
                  ? "text-primary-foreground"
                  : "text-primary"
              )}
            />
          </div>
        )}

        <h2 className={titleClasses}>{title}</h2>
        <p className={descClasses}>{description}</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {isExternal(primaryCTA.link) ? (
            <a href={primaryCTA.link} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant={variant === "gradient" ? "secondary" : "default"}
                data-testid="cta-primary"
              >
                {primaryCTA.text}
              </Button>
            </a>
          ) : (
            <Link href={primaryCTA.link}>
              <Button
                size="lg"
                variant={variant === "gradient" ? "secondary" : "default"}
                data-testid="cta-primary"
              >
                {primaryCTA.text}
              </Button>
            </Link>
          )}
          {secondaryCTA && (
            isExternal(secondaryCTA.link) ? (
              <a href={secondaryCTA.link} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    variant === "gradient" &&
                      "border-primary-foreground/30 text-primary-foreground"
                  )}
                  data-testid="cta-secondary"
                >
                  {secondaryCTA.text}
                </Button>
              </a>
            ) : (
              <Link href={secondaryCTA.link}>
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    variant === "gradient" &&
                      "border-primary-foreground/30 text-primary-foreground"
                  )}
                  data-testid="cta-secondary"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )
          )}
        </div>

        {showContactInfo && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a
              href="tel:+44123456789"
              className={cn(
                "flex items-center gap-2 hover-elevate rounded-md px-3 py-2",
                variant === "gradient"
                  ? "text-primary-foreground/80"
                  : "text-muted-foreground"
              )}
              data-testid="cta-phone"
            >
              <Phone className="h-4 w-4" />
              <span>+44 123 456 789</span>
            </a>
            <a
              href="mailto:hello@houseofdevelopers.co.uk"
              className={cn(
                "flex items-center gap-2 hover-elevate rounded-md px-3 py-2",
                variant === "gradient"
                  ? "text-primary-foreground/80"
                  : "text-muted-foreground"
              )}
              data-testid="cta-email"
            >
              <Mail className="h-4 w-4" />
              <span>hello@houseofdevelopers.co.uk</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
