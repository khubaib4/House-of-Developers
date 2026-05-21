import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Shield, ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Our privacy policy explains how House of Developers collects, uses, and protects your personal information. UK GDPR compliant."
        canonical="/privacy"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          description:
            "Our privacy policy explains how House of Developers collects, uses, and protects your personal information. UK GDPR compliant.",
          url: "https://houseofdevelopers.co.uk/privacy",
          publisher: {
            "@type": "Organization",
            name: "House of Developers",
            url: "https://houseofdevelopers.co.uk",
          },
        }}
      />

      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-muted-foreground">
              Last updated: April 2026
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg dark:prose-invert max-w-none">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>1. Introduction</h2>
            <p>
              House of Developers Ltd ("we", "our", "us") is committed to
              protecting your personal data and respecting your privacy. This
              privacy policy explains how we collect, use, and safeguard your
              information when you visit our website at houseofdevelopers.co.uk
              or engage our services.
            </p>
            <p>
              We comply with the UK General Data Protection Regulation (UK GDPR)
              and the Data Protection Act 2018.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>
                <strong>Contact information:</strong> name, email address, phone
                number, and company name when you submit our contact form or
                book a consultation.
              </li>
              <li>
                <strong>Project details:</strong> information about your project
                requirements, budget, and timeline preferences.
              </li>
              <li>
                <strong>Usage data:</strong> information about how you use our
                website, including pages visited, time spent, and referring URLs.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser type,
                device information, and operating system.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Respond to your enquiries and provide quotes</li>
              <li>Deliver the services you have requested</li>
              <li>Send project updates and relevant communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases:</p>
            <ul>
              <li>
                <strong>Consent:</strong> when you voluntarily submit your
                contact details through our forms.
              </li>
              <li>
                <strong>Contractual necessity:</strong> when processing is
                necessary to fulfil a contract with you.
              </li>
              <li>
                <strong>Legitimate interests:</strong> to improve our services
                and communicate relevant information.
              </li>
            </ul>

            <h2>5. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share your information
              with trusted third-party service providers who assist us in
              operating our website and delivering our services (e.g., email
              service providers, analytics tools). All third parties are required
              to protect your data in accordance with applicable law.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to
              fulfil the purposes for which it was collected, or as required by
              law. Contact form submissions are retained for up to 24 months
              unless you request earlier deletion.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:khubaib@houseofdevelopers.co.uk">
              khubaib@houseofdevelopers.co.uk
              </a>
              .
            </p>

            <h2>8. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. For
              full details, please see our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data
              practices, please contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:khubaib@houseofdevelopers.co.uk">
              khubaib@houseofdevelopers.co.uk
                </a>
              </li>
              <li>Phone: +44 7429 917368</li>
              <li>Address: Weybridge, England, KT13 9XE</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
