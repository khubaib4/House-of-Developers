import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
  project?: string;
}

export interface TestimonialSliderProps {
  title?: string;
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

export function TestimonialSlider({
  title,
  testimonials,
  autoPlay = true,
  interval = 5000,
}: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  useEffect(() => {
    if (!autoPlay || isPaused || testimonials.length <= 1) return;
    const timer = setInterval(goNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, goNext, testimonials.length]);

  if (testimonials.length === 0) return null;

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({
      x: d > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section data-testid="testimonial-slider">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      )}

      <div
        ref={containerRef}
        className="relative max-w-4xl mx-auto px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden rounded-2xl bg-muted/50 p-8 md:p-12 min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Quote className="h-12 w-12 text-primary/20 mb-4" />

              {t.rating !== undefined && (
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < t.rating!
                          ? "fill-accent text-accent"
                          : "text-muted-foreground/30"
                      )}
                    />
                  ))}
                </div>
              )}

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed italic">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                <Avatar className="w-14 h-14">
                  {t.avatar && (
                    <AvatarImage src={t.avatar} alt={t.author} />
                  )}
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-lg">{t.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </div>
                  {t.project && (
                    <div className="text-xs text-accent mt-1">{t.project}</div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {testimonials.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={goPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
              aria-label="Previous testimonial"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
              aria-label="Next testimonial"
              data-testid="testimonial-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "rounded-full transition-all duration-200",
                    i === current
                      ? "w-8 h-2 bg-primary"
                      : "w-2 h-2 bg-muted-foreground/30"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-testid={`testimonial-dot-${i}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
