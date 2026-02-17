import { useState, useRef, useCallback } from "react";
import { type LucideIcon, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ComparisonMetric {
  label: string;
  before: string | number;
  after: string | number;
  improvement?: string;
  icon?: LucideIcon;
}

export interface BeforeAfterComparisonProps {
  title?: string;
  description?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string;
  afterImage?: string;
  metrics: ComparisonMetric[];
}

export function BeforeAfterComparison({
  title,
  description,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeImage,
  afterImage,
  metrics,
}: BeforeAfterComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pct);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const hasImages = beforeImage && afterImage;

  return (
    <section data-testid="before-after-comparison">
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && (
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          ref={containerRef}
          className="relative aspect-video rounded-xl overflow-hidden border border-border cursor-col-resize select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft")
              setSliderPosition((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight")
              setSliderPosition((p) => Math.min(100, p + 5));
          }}
        >
          {hasImages ? (
            <>
              <img
                src={beforeImage}
                alt={beforeLabel}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={afterImage}
                  alt={afterLabel}
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-destructive/5 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-destructive/20">
                    {beforeLabel}
                  </div>
                  <div className="mt-2 space-y-1.5 w-48">
                    <div className="h-2 bg-destructive/10 rounded-full" />
                    <div className="h-2 bg-destructive/5 rounded-full w-3/4" />
                    <div className="h-2 bg-destructive/10 rounded-full w-1/2" />
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-0 bg-accent/5 flex items-center justify-center"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-accent/30">
                    {afterLabel}
                  </div>
                  <div className="mt-2 space-y-1.5 w-48">
                    <div className="h-2 bg-accent/20 rounded-full" />
                    <div className="h-2 bg-accent/15 rounded-full" />
                    <div className="h-2 bg-accent/20 rounded-full" />
                  </div>
                </div>
              </div>
            </>
          )}

          <div
            className="absolute top-0 bottom-0 w-1 bg-primary z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-3 bg-primary-foreground rounded-full" />
                <div className="w-0.5 h-3 bg-primary-foreground rounded-full" />
              </div>
            </div>
          </div>

          <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-destructive/80 text-destructive-foreground text-xs font-semibold">
            {beforeLabel}
          </div>
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-accent/80 text-accent-foreground text-xs font-semibold">
            {afterLabel}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">The Results</h3>
          <div className="space-y-4 mt-6">
            {metrics.map((metric, i) => {
              const MetricIcon = metric.icon;
              return (
                <Card
                  key={i}
                  className="p-6"
                  data-testid={`metric-${metric.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex items-start gap-4">
                    {MetricIcon && (
                      <MetricIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold">{metric.label}</div>
                      <div className="flex items-center gap-3 mt-3 flex-wrap">
                        <span className="text-lg text-muted-foreground line-through">
                          {metric.before}
                        </span>
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-2xl font-bold">
                          {metric.after}
                        </span>
                        {metric.improvement && (
                          <Badge
                            variant="secondary"
                            className="bg-accent/10 text-accent border-transparent"
                          >
                            {metric.improvement}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
