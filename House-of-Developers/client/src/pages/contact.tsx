import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Calendar,
  Clock,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Link } from "wouter";

const serviceOptions = [
  "30-Day MVP Program",
  "Web Development",
  "Mobile Development",
  "AI Services",
  "Custom Development",
  "Hire Developers",
  "SEO Services",
  "Not Sure / Multiple Services",
];

const budgetOptions = [
  "Under £10,000",
  "£10,000 - £25,000",
  "£25,000 - £50,000",
  "£50,000 - £100,000",
  "£100,000+",
  "Prefer not to say",
];

const timelineOptions = [
  "ASAP (Within 2 weeks)",
  "1-2 months",
  "2-3 months",
  "3+ months",
  "Just exploring options",
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "MVPs: 30 days. Custom projects: 2-6 months depending on complexity. We'll give you an accurate timeline in our first call.",
  },
  {
    q: "What's your pricing structure?",
    a: "MVPs start at £15,000. Custom projects are quoted based on scope. We provide detailed proposals after initial consultation.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely! 80% of our clients are early-stage startups. We understand the urgency and budget constraints.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes, we're happy to sign NDAs before any project discussion. Just mention it in your message.",
  },
];

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
      timeline: "",
    },
    mode: "onBlur",
  });

  const messageValue = form.watch("message");

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus("idle");
      await apiRequest("POST", "/api/contact", data);
      setSubmitStatus("success");
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div>
      <SEO
        title="Contact Us | Free Project Consultation"
        description="Get in touch for a free consultation. Discuss your project, get honest advice, and receive a clear quote. Call +44 7429 917368 or fill out our form."
        canonical="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact House of Developers",
          "url": "https://houseofdevelopers.co.uk/contact"
        }}
      />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="py-16 md:py-24" data-testid="section-contact-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" data-testid="badge-contact">
              Get In Touch
            </Badge>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6"
              data-testid="text-contact-title"
            >
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Great Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Book a free consultation to discuss your project. We typically
              respond within 2 hours during business hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16" data-testid="section-contact-main">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {submitStatus === "success" && (
                  <div
                    role="alert"
                    className="flex items-center gap-3 p-4 mb-6 rounded-md bg-accent/10 border border-accent/20 text-foreground"
                    data-testid="alert-success"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <p className="text-sm">
                      Message sent successfully! We'll get back to you within 2
                      hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    role="alert"
                    className="flex items-center gap-3 p-4 mb-6 rounded-md bg-destructive/10 border border-destructive/20 text-foreground"
                    data-testid="alert-error"
                  >
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <p className="text-sm">
                      Something went wrong. Please try again or email us
                      directly.
                    </p>
                  </div>
                )}

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold tracking-tight">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground mt-1 mb-8">
                      Fill out the form below and we'll get back to you shortly.
                    </p>

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                        data-testid="form-contact"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
                                    data-testid="input-name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    data-testid="input-email"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+44 7XXX XXXXXX"
                                    data-testid="input-phone"
                                    {...field}
                                  />
                                </FormControl>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Include country code
                                </p>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your Company Ltd"
                                    data-testid="input-company"
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="service"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Service Interested In *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-service">
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {serviceOptions.map((opt) => (
                                      <SelectItem key={opt} value={opt}>
                                        {opt}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Budget (Optional)</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger data-testid="select-budget">
                                      <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {budgetOptions.map((opt) => (
                                      <SelectItem key={opt} value={opt}>
                                        {opt}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Details *</FormLabel>
                              <FormControl>
                                <Textarea
                                  rows={6}
                                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                                  className="resize-none"
                                  data-testid="input-message"
                                  {...field}
                                />
                              </FormControl>
                              <div className="flex items-center justify-between">
                                <FormMessage />
                                <p className="text-xs text-muted-foreground ml-auto">
                                  {(messageValue || "").length} / 500
                                </p>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>When do you want to start? *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger data-testid="select-timeline">
                                    <SelectValue placeholder="Select a timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timelineOptions.map((opt) => (
                                    <SelectItem key={opt} value={opt}>
                                      {opt}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full sm:w-auto bg-accent text-accent-foreground border-accent-border"
                          disabled={form.formState.isSubmitting}
                          data-testid="button-submit-contact"
                        >
                          {form.formState.isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-muted border-0">
                  <CardContent className="p-6">
                    <Phone className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold mt-3">Phone</h3>
                    <a
                      href="tel:+447429917368"
                      className="text-muted-foreground mt-1 block text-sm hover-elevate rounded-md px-1 py-0.5 -mx-1"
                      data-testid="link-contact-phone"
                    >
                      +44 7429 917368
                    </a>

                    <Mail className="h-6 w-6 text-primary mt-6" />
                    <h3 className="font-semibold mt-3">Email</h3>
                    <a
                      href="mailto:khubaib@houseofdevelopers.co.uk"
                      className="text-muted-foreground mt-1 block text-sm break-all hover-elevate rounded-md px-1 py-0.5 -mx-1"
                      data-testid="link-contact-email"
                    >
                      khubaib@houseofdevelopers.co.uk
                    </a>

                    <MapPin className="h-6 w-6 text-primary mt-6" />
                    <h3 className="font-semibold mt-3">Address</h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Weybridge, England, KT13 9XE
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div
                  className="rounded-md bg-gradient-to-br from-primary to-accent p-6 text-white"
                  data-testid="card-whatsapp"
                >
                  <MessageCircle className="h-8 w-8" />
                  <h3 className="font-semibold mt-3 text-lg">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-white/80 text-sm mt-1">
                    Chat with us directly on WhatsApp for quick responses.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full mt-4 bg-white text-foreground border-0"
                    asChild
                  >
                    <a
                      href="https://wa.me/447429917368?text=Hi!%20I'm%20interested%20in%20discussing%20a%20project%20with%20House%20of%20Developers."
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="link-whatsapp"
                    >
                      Open WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold mt-3">Book a Call</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Schedule a free 30-minute consultation at a time that works
                      for you.
                    </p>
                    <Button className="w-full mt-4" asChild>
                      <a href="#calendly" data-testid="link-calendly">
                        View Available Times
                      </a>
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">
                      We'll send you a confirmation email
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card className="bg-muted border-0">
                  <CardContent className="p-6">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold mt-3">Business Hours</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center justify-between gap-4 flex-wrap">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM GMT</span>
                      </li>
                      <li className="flex items-center justify-between gap-4 flex-wrap">
                        <span>Saturday</span>
                        <span>10:00 AM - 2:00 PM GMT</span>
                      </li>
                      <li className="flex items-center justify-between gap-4 flex-wrap">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-3">
                      We respond to emails within 2 hours during business hours
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 md:py-20 bg-muted"
        data-testid="section-contact-faq"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              data-testid="text-contact-faq-title"
            >
              Common Questions
            </h2>
            <p className="text-muted-foreground mt-2">
              Quick answers before you reach out
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card data-testid={`card-faq-${i}`}>
                  <CardContent className="p-6">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold mt-3">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-trust-signals">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className="text-2xl font-bold tracking-tight"
              data-testid="text-trust-title"
            >
              Trusted by Startups Across the UK
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 max-w-3xl mx-auto">
              {[
                { value: "50+", label: "Projects Launched" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "2-Hour", label: "Response Time" },
              ].map((stat) => (
                <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24" data-testid="section-contact-final-cta">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="relative rounded-md bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 dark:from-primary/5 dark:via-primary/3 dark:to-accent/5 border border-border p-8 md:p-16 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Not Ready to Contact Yet?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Explore our services and case studies to learn more about what we
              do.
            </p>
            <Button size="lg" asChild>
              <Link href="/services" data-testid="link-view-services-cta">
                View Services
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
