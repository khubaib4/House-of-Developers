import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="py-16 md:py-24" data-testid="section-cta">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="relative overflow-hidden rounded-md bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 dark:from-primary/5 dark:via-primary/3 dark:to-accent/5 border border-border p-8 md:p-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            data-testid="text-cta-title"
          >
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss your project. Book a free consultation and we'll show
            you how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground border-accent-border"
              asChild
            >
              <Link href="/contact" data-testid="button-cta-consultation">
                Book Free Consultation
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a
                href="mailto:khubaib@houseofdevelopers.co.uk"
                data-testid="button-cta-email"
              >
                <Mail className="h-4 w-4 mr-1" />
                Send Us an Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
