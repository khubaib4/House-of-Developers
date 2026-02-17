import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-6 pt-6"
      data-testid="breadcrumbs"
    >
      <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1"
            data-testid="breadcrumb-home"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover-elevate rounded-md px-1"
                data-testid={`breadcrumb-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-foreground font-medium"
                data-testid={`breadcrumb-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
