import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you're looking for doesn't exist. Browse our services or return to the homepage."
        noindex={true}
      />
      <section className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-8xl font-bold text-primary mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" className="h-12 px-6">
                <Home className="w-4 h-4 mr-2" />
                Back to Homepage
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="h-12 px-6">
                View Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>
              Need help?{" "}
              <a
                href="mailto:khubaib@houseofdevelopers.co.uk"
                className="text-primary hover:underline"
              >
                khubaib@houseofdevelopers.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
