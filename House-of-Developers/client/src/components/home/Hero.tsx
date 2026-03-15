import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "wouter";
import { CALENDLY_URL } from "@/lib/constants";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "5+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 dark:opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(217 91% 60% / 0.4) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(152 100% 39% / 0.3) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 dark:opacity-5"
          style={{
            background: "radial-gradient(circle, hsl(271 81% 56% / 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-sm bg-accent/10 text-accent-foreground border-accent/30"
              data-testid="badge-mvp"
            >
              <Rocket className="h-3.5 w-3.5 mr-1.5" />
              30-Day MVP Program Available
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
            data-testid="text-hero-title"
          >
            We Build{" "}
            <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
              Launch-Ready
            </span>{" "}
            Digital Products
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
            data-testid="text-hero-subtitle"
          >
            From MVP to scale. We're the technical partner for startups who need
            to move fast and build right.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground border-accent-border"
              asChild
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" data-testid="button-hero-cta-primary">
                Book Free Consultation
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => handleNavClick("#projects")}
              data-testid="button-hero-cta-secondary"
            >
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 md:mt-20 grid grid-cols-3 gap-8 md:gap-16 w-full max-w-2xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.number}
                </span>
                <span className="mt-1 text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
