import { useState, useEffect, useRef, useCallback } from "react";
import { Home, Menu, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { MegaMenu } from "./MegaMenu";

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
  hasMegaMenu?: boolean;
}

interface MobileServiceLink {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Services", href: "/services", isRoute: true, hasMegaMenu: true },
  { label: "Case Studies", href: "#projects" },
  { label: "About", href: "#why-choose" },
  { label: "Contact", href: "/contact", isRoute: true },
];

const mobileServiceLinks: MobileServiceLink[] = [
  { label: "Build MVP", href: "/services/build-mvp" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Custom Development", href: "/services/custom-development" },
  { label: "Web Applications", href: "/services/web-apps" },
  { label: "Mobile Development", href: "/services/mobile-development" },
  { label: "AI Services", href: "/services/ai-services" },
  { label: "CMS Development", href: "/services/cms-development" },
  { label: "Hire Developers", href: "/services/hire-developers" },
  { label: "SEO & Growth", href: "/services/seo-services" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setLocation] = useLocation();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaMenuAreaRef = useRef<HTMLDivElement>(null);
  const hasFocusWithinRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback(
    (href: string, isRoute?: boolean) => {
      setMobileMenuOpen(false);
      setMegaMenuOpen(false);
      setMobileServicesExpanded(false);
      if (isRoute) {
        setLocation(href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          setLocation("/");
          setTimeout(() => {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }
    },
    [setLocation]
  );

  const handleMegaMenuNavigate = useCallback(
    (href: string) => {
      setLocation(href);
    },
    [setLocation]
  );

  const handleMouseEnterTrigger = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setMegaMenuOpen(true);
  }, []);

  const handleMouseLeaveArea = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      if (!hasFocusWithinRef.current) {
        setMegaMenuOpen(false);
      }
    }, 300);
  }, []);

  const handleMouseEnterArea = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleMegaMenuFocusWithin = useCallback(() => {
    hasFocusWithinRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const closeMegaMenuFull = useCallback(() => {
    hasFocusWithinRef.current = false;
    setMegaMenuOpen(false);
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-background/60 backdrop-blur-md"
        }`}
        style={{ height: "72px" }}
        data-testid="header"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            data-testid="link-logo"
          >
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Home className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight hidden sm:inline">
              House of Developers
            </span>
            <span className="font-bold text-lg tracking-tight sm:hidden">
              HoD
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
            data-testid="nav-desktop"
          >
            {navItems.map((item) =>
              item.hasMegaMenu ? (
                <div
                  key={item.label}
                  className="relative"
                  ref={megaMenuAreaRef}
                  onMouseEnter={handleMouseEnterTrigger}
                  onMouseLeave={handleMouseLeaveArea}
                >
                  <button
                    ref={triggerRef}
                    type="button"
                    onClick={() => setMegaMenuOpen((prev) => !prev)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground transition-colors rounded-md hover-elevate"
                    aria-expanded={megaMenuOpen}
                    aria-haspopup="true"
                    data-testid="button-services-dropdown"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    onMouseEnter={handleMouseEnterArea}
                    onMouseLeave={handleMouseLeaveArea}
                  >
                    <MegaMenu
                      isOpen={megaMenuOpen}
                      onClose={closeMegaMenuFull}
                      onNavigate={handleMegaMenuNavigate}
                      triggerRef={triggerRef}
                      onFocusWithin={handleMegaMenuFocusWithin}
                    />
                  </div>
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors rounded-md hover-elevate"
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              className="hidden lg:inline-flex bg-accent text-accent-foreground border-accent-border"
              onClick={() => handleNavClick("/contact", true)}
              data-testid="button-book-call"
            >
              Book a Call
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-lg lg:hidden overflow-y-auto"
            data-testid="mobile-menu"
          >
            <div
              className="flex items-center justify-between px-6"
              style={{ height: "72px" }}
            >
              <Link
                href="/"
                className="flex items-center gap-2"
                data-testid="link-mobile-logo"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <Home className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg tracking-tight">
                  House of Developers
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                data-testid="button-close-mobile-menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="px-6 pt-4 pb-8 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  {item.hasMegaMenu ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setMobileServicesExpanded((prev) => !prev)}
                        className="flex items-center justify-between text-left text-lg font-medium px-3 py-3 rounded-md hover-elevate transition-colors"
                        aria-expanded={mobileServicesExpanded}
                        data-testid="mobile-button-services-toggle"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileServicesExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 flex flex-col gap-0.5">
                              <button
                                onClick={() => handleNavClick("/services", true)}
                                className="text-left text-sm font-semibold text-primary px-3 py-2.5 rounded-md hover-elevate transition-colors"
                                data-testid="mobile-link-all-services"
                              >
                                All Services
                              </button>
                              {mobileServiceLinks.map((link) => (
                                <button
                                  key={link.label}
                                  onClick={() => handleNavClick(link.href, true)}
                                  className="text-left text-base px-3 py-2.5 rounded-md hover-elevate transition-colors"
                                  data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                  {link.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.href, item.isRoute)}
                      className="text-left text-lg font-medium px-3 py-3 rounded-md hover-elevate transition-colors"
                      data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6"
              >
                <Button
                  className="w-full bg-accent text-accent-foreground border-accent-border"
                  size="lg"
                  onClick={() => handleNavClick("/contact", true)}
                  data-testid="mobile-button-book-call"
                >
                  Book a Call
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
