import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Globe,
  Code2,
  Layout,
  Smartphone,
  Brain,
  FileText,
  Users,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
}

interface FeaturedCard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge: string;
}

const developmentServices: ServiceItem[] = [
  {
    icon: Globe,
    label: "Web Development",
    description: "High-performance websites and landing pages",
    href: "/services/web-development",
  },
  {
    icon: Code2,
    label: "Custom Development",
    description: "Bespoke software for unique business needs",
    href: "/services/custom-development",
  },
  {
    icon: Layout,
    label: "Web Applications",
    description: "Full-stack SaaS platforms built for scale",
    href: "/services/web-apps",
  },
  {
    icon: Smartphone,
    label: "Mobile Development",
    description: "Native and cross-platform mobile apps",
    href: "/services/mobile-development",
  },
  {
    icon: FileText,
    label: "CMS Development",
    description: "WordPress, Shopify, and headless CMS",
    href: "/services/cms-development",
  },
];

const growthServices: ServiceItem[] = [
  {
    icon: Brain,
    label: "AI Services",
    description: "Intelligent automation and AI integration",
    href: "/services/ai-services",
  },
  {
    icon: TrendingUp,
    label: "SEO & Growth",
    description: "Data-driven SEO and growth marketing",
    href: "/services/seo-services",
  },
  {
    icon: Users,
    label: "Hire Developers",
    description: "Vetted developers for your team",
    href: "/services/hire-developers",
  },
];

const featuredCards: FeaturedCard[] = [
  {
    icon: Rocket,
    title: "30-Day MVP Program",
    description: "Go from idea to launched product in just 30 days. Our most popular service for startups.",
    href: "/services/build-mvp",
    badge: "Popular",
  },
  {
    icon: Users,
    title: "Hire Developers",
    description: "Scale your team with pre-vetted senior developers. Flexible monthly engagement.",
    href: "/services/hire-developers",
    badge: "Flexible",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.15 } },
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  onFocusWithin: () => void;
}

export function MegaMenu({ isOpen, onClose, onNavigate, triggerRef, onFocusWithin }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [hasRendered, setHasRendered] = useState(false);
  const focusableRefs = useRef<HTMLElement[]>([]);
  const focusIndexRef = useRef(-1);

  useEffect(() => {
    if (isOpen && !hasRendered) {
      setHasRendered(true);
    }
  }, [isOpen, hasRendered]);

  const collectFocusables = useCallback(() => {
    if (!menuRef.current) return;
    focusableRefs.current = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(
        'button[role="menuitem"]'
      )
    );
  }, []);

  useEffect(() => {
    if (!isOpen) {
      focusIndexRef.current = -1;
      return;
    }

    const timer = setTimeout(() => {
      collectFocusables();
      if (focusableRefs.current.length > 0) {
        focusIndexRef.current = 0;
        focusableRefs.current[0]?.focus();
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [isOpen, collectFocusables]);

  const closeAndReturnFocus = useCallback(() => {
    onClose();
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, [onClose, triggerRef]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const items = focusableRefs.current;
      if (!items.length) return;

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          closeAndReturnFocus();
          break;
        case "ArrowDown": {
          e.preventDefault();
          focusIndexRef.current = (focusIndexRef.current + 1) % items.length;
          items[focusIndexRef.current]?.focus();
          break;
        }
        case "Tab": {
          e.preventDefault();
          if (e.shiftKey) {
            focusIndexRef.current = focusIndexRef.current <= 0
              ? items.length - 1
              : focusIndexRef.current - 1;
          } else {
            focusIndexRef.current = (focusIndexRef.current + 1) % items.length;
          }
          items[focusIndexRef.current]?.focus();
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          focusIndexRef.current = focusIndexRef.current <= 0
            ? items.length - 1
            : focusIndexRef.current - 1;
          items[focusIndexRef.current]?.focus();
          break;
        }
        case "Home": {
          e.preventDefault();
          focusIndexRef.current = 0;
          items[0]?.focus();
          break;
        }
        case "End": {
          e.preventDefault();
          focusIndexRef.current = items.length - 1;
          items[items.length - 1]?.focus();
          break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeAndReturnFocus]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        closeAndReturnFocus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeAndReturnFocus, triggerRef]);

  useEffect(() => {
    if (!isOpen) return;
    let scrollStart = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - scrollStart) > 100) {
        closeAndReturnFocus();
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, closeAndReturnFocus]);

  const handleFocusIn = useCallback(() => {
    onFocusWithin();
  }, [onFocusWithin]);

  if (!hasRendered) return null;

  const handleItemClick = (href: string) => {
    onNavigate(href);
    onClose();
    requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="menu"
          aria-label="Services menu"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[780px] rounded-lg border border-border bg-popover/95 backdrop-blur-xl shadow-2xl overflow-visible"
          data-testid="mega-menu"
          onFocus={handleFocusIn}
        >
          <div className="grid grid-cols-3 gap-0">
            <motion.div
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              className="p-6 border-r border-border"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Development
              </h3>
              <div className="space-y-1">
                {developmentServices.map((item) => (
                  <ServiceMenuItem
                    key={item.label}
                    item={item}
                    onClick={handleItemClick}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              className="p-6 border-r border-border"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Growth & Teams
              </h3>
              <div className="space-y-1">
                {growthServices.map((item) => (
                  <ServiceMenuItem
                    key={item.label}
                    item={item}
                    onClick={handleItemClick}
                  />
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <button
                  role="menuitem"
                  onClick={() => handleItemClick("/services")}
                  className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors rounded-md px-3 py-2 w-full hover-elevate"
                  data-testid="mega-menu-view-all"
                >
                  View All Services
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              className="p-6 bg-muted/30"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Featured
              </h3>
              <div className="space-y-3">
                {featuredCards.map((card) => (
                  <FeaturedCardItem
                    key={card.title}
                    card={card}
                    onClick={handleItemClick}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ServiceMenuItem({
  item,
  onClick,
}: {
  item: ServiceItem;
  onClick: (href: string) => void;
}) {
  const Icon = item.icon;
  return (
    <motion.button
      variants={itemVariants}
      role="menuitem"
      onClick={() => onClick(item.href)}
      className="group flex items-start gap-3 w-full text-left px-3 py-2.5 rounded-md hover-elevate transition-colors"
      data-testid={`mega-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="mt-0.5 flex-shrink-0">
        <Icon className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-semibold leading-tight">{item.label}</div>
        <div className="text-xs text-muted-foreground mt-0.5 leading-snug">
          {item.description}
        </div>
      </div>
    </motion.button>
  );
}

function FeaturedCardItem({
  card,
  onClick,
}: {
  card: FeaturedCard;
  onClick: (href: string) => void;
}) {
  const Icon = card.icon;
  return (
    <motion.button
      variants={itemVariants}
      role="menuitem"
      onClick={() => onClick(card.href)}
      className="group w-full text-left p-4 rounded-lg border border-border bg-background/60 transition-all duration-200 hover:border-primary/30 hover:scale-[1.02]"
      data-testid={`mega-menu-featured-${card.title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-semibold">{card.title}</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary">
              {card.badge}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1 leading-snug">
            {card.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
