import { Home, Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiX, SiGithub } from "react-icons/si";
import { Link, useLocation } from "wouter";

interface FooterLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

const serviceLinks: FooterLink[] = [
  { label: "Build MVP", href: "/services/build-mvp", isRoute: true },
  { label: "Web Development", href: "/services/web-development", isRoute: true },
  { label: "Mobile Apps", href: "/services/mobile-development", isRoute: true },
  { label: "AI Services", href: "/services/ai-services", isRoute: true },
  { label: "SEO & Growth", href: "/services/seo-services", isRoute: true },
  { label: "CMS Development", href: "/services/cms-development", isRoute: true },
  { label: "Hire Developers", href: "/services/hire-developers", isRoute: true },
];

const companyLinks: FooterLink[] = [
  { label: "Case Studies", href: "#projects" },
  { label: "About Us", href: "#why-choose" },
  { label: "Contact", href: "/contact", isRoute: true },
  { label: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiX, href: "#", label: "Twitter" },
  { icon: SiGithub, href: "#", label: "GitHub" },
];

function FooterNavLink({ link }: { link: FooterLink }) {
  const [, setLocation] = useLocation();

  if (link.isRoute) {
    return (
      <Link
        href={link.href}
        className="text-sm text-muted-foreground hover-elevate rounded-md px-1 py-0.5"
        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        const el = document.querySelector(link.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          setLocation("/");
          setTimeout(() => {
            const target = document.querySelector(link.href);
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }}
      className="text-sm text-muted-foreground hover-elevate rounded-md px-1 py-0.5"
      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {link.label}
    </button>
  );
}

export function Footer() {
  return (
    <footer
      className="bg-muted border-t border-border"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4"
              data-testid="footer-link-home"
            >
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Home className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                House of Developers
              </span>
            </Link>
            <p className="text-sm font-medium mb-2">
              Building launch-ready digital products
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We partner with startups and businesses to build exceptional
              digital products, from MVP to scale.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <FooterNavLink link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Weybridge, England, KT13 9XE
                </span>
              </li>
              <li>
                <a
                  href="tel:+447429917368"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover-elevate rounded-md px-1 py-0.5"
                  data-testid="footer-link-phone"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  +44 7429 917368
                </a>
              </li>
              <li>
                <a
                  href="mailto:khubaib@houseofdevelopers.co.uk"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover-elevate rounded-md px-1 py-0.5"
                  data-testid="footer-link-email"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all">khubaib@houseofdevelopers.co.uk</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover-elevate"
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p
            className="text-sm text-muted-foreground text-center"
            data-testid="text-copyright"
          >
            Copyright &copy; 2024 House of Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
