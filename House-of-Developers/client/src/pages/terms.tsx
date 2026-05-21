import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { FileText, ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms and conditions for using House of Developers services. Read our service agreement and policies."
        canonical="/terms"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service",
          description:
            "Terms and conditions for using House of Developers services. Read our service agreement and policies.",
          url: "https://houseofdevelopers.co.uk/terms",
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
              <FileText className="text-primary" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">
                Terms of Service
              </h1>
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
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the House of Developers website
              (houseofdevelopers.co.uk) and services, you agree to be bound by
              these Terms of Service. If you do not agree with any part of these
              terms, you should not use our website or services.
            </p>

            <h2>2. Our Services</h2>
            <p>
              House of Developers Ltd provides custom software development
              services including but not limited to:
            </p>
            <ul>
              <li>Web development and web application development</li>
              <li>Mobile application development (iOS, Android, hybrid)</li>
              <li>AI and machine learning solutions</li>
              <li>CMS development (WordPress, Shopify, Wix, etc.)</li>
              <li>SEO services</li>
              <li>Dedicated developer hiring</li>
            </ul>

            <h2>3. Project Agreements</h2>
            <p>
              All development projects are governed by a separate project
              agreement or statement of work (SOW) that outlines scope,
              timeline, deliverables, and payment terms. These Terms of Service
              apply in addition to any project-specific agreements.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, upon full payment for services
              rendered, the client receives full ownership of all custom code and
              deliverables produced specifically for their project. House of
              Developers retains the right to use general tools, frameworks, and
              methodologies developed during the project.
            </p>

            <h2>5. Payment Terms</h2>
            <p>
              Payment terms are specified in individual project agreements.
              Standard terms include:
            </p>
            <ul>
              <li>A deposit may be required before work commences</li>
              <li>Milestone-based payments as agreed in the SOW</li>
              <li>Final payment due upon project completion and delivery</li>
              <li>
                Late payments may incur interest as permitted under UK law
              </li>
            </ul>

            <h2>6. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>
                Providing accurate and timely information, content, and feedback
              </li>
              <li>
                Reviewing and approving deliverables within agreed timeframes
              </li>
              <li>
                Ensuring they have the rights to any content or materials
                provided to us
              </li>
              <li>Maintaining backups of their own data</li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, House of Developers Ltd
              shall not be liable for any indirect, incidental, special, or
              consequential damages arising from the use of our services. Our
              total liability shall not exceed the amount paid by the client for
              the specific service giving rise to the claim.
            </p>

            <h2>8. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any proprietary or
              sensitive information shared during the course of a project. This
              obligation survives the termination of any agreement.
            </p>

            <h2>9. Termination</h2>
            <p>
              Either party may terminate a project agreement with written notice
              as specified in the project agreement. Upon termination, the client
              is responsible for payment for all work completed up to the date
              of termination.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any
              disputes shall be subject to the exclusive jurisdiction of the
              courts of England and Wales.
            </p>

            <h2>11. Changes to These Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Material
              changes will be communicated via our website. Continued use of our
              services after changes constitutes acceptance of the updated terms.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about these terms, please contact us:
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
