import { Link } from "wouter";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Shield,
  Award,
  Star,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";

const webDevLinks = [
  { label: "Custom Development", href: "/services/web-development/custom-development" },
  { label: "Web Applications", href: "/services/web-development/web-applications" },
  { label: "WordPress", href: "/services/web-development/cms/wordpress" },
  { label: "Shopify", href: "/services/web-development/cms/shopify" },
  { label: "Wix", href: "/services/web-development/cms/wix" },
  { label: "WooCommerce", href: "/services/web-development/cms/woocommerce" },
];

const serviceLinks = [
  { label: "Mobile Development", href: "/services/mobile-development" },
  { label: "AI Services", href: "/services/ai-services" },
  { label: "SEO Services", href: "/services/seo" },
  { label: "Hire Developers", href: "/services/hire-developers" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Services", href: "/services" },
];

const resourceLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

const trustBadges = [
  { icon: Shield, text: "ISO Certified" },
  { icon: Award, text: "Shopify Partner" },
  { icon: Star, text: "98% Satisfaction" },
  { icon: Users, text: "150+ Projects" },
  { icon: Clock, text: "8 Years Experience" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/houseofdevelopers", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/houseofdevelopers", label: "Twitter" },
  { icon: Github, href: "https://github.com/houseofdevelopers", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-gradient-to-r from-primary to-primary/80 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-4">
                Let's build something great together
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                Free consultation. Honest advice. Clear pricing. Book a call to discuss your project—no obligation.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-primary hover:bg-white/90 h-14 px-8 rounded-xl font-semibold text-lg shadow-lg flex items-center gap-2">
                    Book Free Consultation
                    <ArrowRight size={20} />
                  </Button>
                </a>
                <a href="tel:+447429917368">
                  <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 h-14 px-8 rounded-xl font-semibold flex items-center gap-2 bg-transparent">
                    <Phone size={18} />
                    Call: +44 7429 917368
                  </Button>
                </a>
              </div>
              <p className="text-sm text-white/70 mt-2 text-center lg:text-right">
                ✓ Free 30-min consultation  •  ✓ No pressure  •  ✓ Honest recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border-t py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <img src="/logo.svg" alt="House of Developers" className="h-8 w-8" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                <span className="font-bold text-lg tracking-tight">House of Developers</span>
              </Link>
              <p className="text-base text-muted-foreground leading-relaxed">
                We build custom software, websites, and AI solutions for businesses. From startups to enterprise—tailored solutions that work.
              </p>
              <div className="mt-6 space-y-3">
                <a href="mailto:hello@houseofdevelopers.co.uk" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  hello@houseofdevelopers.co.uk
                </a>
                <a href="tel:+447429917368" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  +44 7429 917368
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  United Kingdom
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center text-foreground hover:text-primary-foreground transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Web Development</h3>
                  <ul className="space-y-3">
                    {webDevLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
                  <ul className="space-y-3">
                    {serviceLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
                  <ul className="space-y-3">
                    {resourceLinks.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t">
                <p className="text-sm font-semibold mb-4">Trusted & Certified</p>
                <div className="flex flex-wrap items-center gap-6 md:gap-8">
                  {trustBadges.map((badge) => (
                    <div key={badge.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <badge.icon size={20} className="text-primary" />
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted border-t py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 House of Developers. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
