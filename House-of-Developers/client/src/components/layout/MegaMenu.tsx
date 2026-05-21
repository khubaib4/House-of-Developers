import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Bot,
  Search,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface SubService {
  name: string;
  href: string;
  popular?: boolean;
}

interface ServiceCategory {
  name: string;
  icon: LucideIcon;
  color: string;
  href: string;
  subServices: SubService[];
}

const serviceCategories: ServiceCategory[] = [
  {
    name: "Web Development",
    icon: Globe,
    color: "from-blue-500 to-indigo-500",
    href: "/services/web-development",
    subServices: [
      { name: "Custom Development", href: "/services/custom-development", popular: true },
      { name: "Web Applications", href: "/services/web-apps" },
      { name: "CMS Development", href: "/services/cms-development" },
      { name: "WordPress", href: "/services/web-development/cms/wordpress", popular: true },
      { name: "Shopify", href: "/services/web-development/cms/shopify" },
    ],
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    href: "/services/mobile-development",
    subServices: [
      { name: "Hybrid Apps", href: "/services/mobile-development/hybrid", popular: true },
      { name: "iOS Development", href: "/services/mobile-development/ios" },
      { name: "Android Development", href: "/services/mobile-development/android" },
    ],
  },
  {
    name: "AI Services",
    icon: Bot,
    color: "from-violet-500 to-purple-500",
    href: "/services/ai-services",
    subServices: [
      { name: "AI Chatbots", href: "/services/ai-services/ai-chatbots", popular: true },
      { name: "AI Agents", href: "/services/ai-services/ai-agents", popular: true },
    ],
  },
  {
    name: "SEO Services",
    icon: Search,
    color: "from-emerald-500 to-green-500",
    href: "/services/seo-services",
    subServices: [
      { name: "SEO Services", href: "/services/seo-services", popular: true },
    ],
  },
  {
    name: "Hire Developers",
    icon: Users,
    color: "from-orange-500 to-amber-500",
    href: "/services/hire-developers",
    subServices: [
      { name: "Full-Stack Developers", href: "/services/hire-developers/full-stack", popular: true },
      { name: "Frontend Developers", href: "/services/hire-developers/frontend" },
      { name: "Backend Developers", href: "/services/hire-developers/backend" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  onFocusWithin: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function MegaMenu({ isOpen, onClose, onNavigate, triggerRef, onFocusWithin, onMouseEnter, onMouseLeave }: MegaMenuProps) {
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
            focusIndexRef.current = focusIndexRef.current <= 0 ? items.length - 1 : focusIndexRef.current - 1;
          } else {
            focusIndexRef.current = (focusIndexRef.current + 1) % items.length;
          }
          items[focusIndexRef.current]?.focus();
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          focusIndexRef.current = focusIndexRef.current <= 0 ? items.length - 1 : focusIndexRef.current - 1;
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
        <>
          <div className="fixed inset-x-0 top-[64px] h-8 z-40" />

          <motion.div
            ref={menuRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="menu"
            aria-label="Services menu"
            className="fixed left-0 right-0 top-[72px] mx-auto max-w-5xl z-50"
            style={{
              maxHeight: "calc(100vh - 100px)",
              overflowY: "auto",
              width: "calc(100vw - 32px)",
            }}
            data-testid="mega-menu"
            onFocus={handleFocusIn}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8">
                  {serviceCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <button
                        role="menuitem"
                        onClick={() => handleItemClick(category.href)}
                        className="flex items-start gap-2.5 group cursor-pointer w-full text-left outline-none focus:outline-none focus-visible:ring-0"
                        data-testid={`mega-menu-category-${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div
                          className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                        >
                          <category.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-[13px] text-foreground group-hover:text-primary transition-colors leading-tight">
                            {category.name}
                          </h3>
                        </div>
                      </button>

                      <ul className="space-y-2 pl-0.5">
                        {category.subServices.map((service) => (
                          <li key={`${category.name}-${service.name}`}>
                            <button
                              role="menuitem"
                              onClick={() => handleItemClick(service.href)}
                              className="group/item flex items-start gap-2 w-full text-left text-[13px] text-muted-foreground hover:text-foreground transition-colors leading-relaxed outline-none focus:outline-none focus-visible:ring-0"
                              data-testid={`mega-menu-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              <span className="flex-1 min-w-0">
                                {service.name}
                              </span>
                              {service.popular && (
                                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary flex-shrink-0">
                                  Popular
                                </span>
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-semibold text-foreground">
                      Not sure which service you need?
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Book a free consultation and we'll recommend the right solution
                    </p>
                  </div>
                  <button
                    role="menuitem"
                    onClick={() => handleItemClick("/contact")}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-xl transition-all duration-200 active:scale-95 whitespace-nowrap shadow-sm"
                    data-testid="mega-menu-cta"
                  >
                    Get Free Consultation
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
