import { motion } from "framer-motion";
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Cookie, ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CookiesPage() {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Learn how House of Developers uses cookies to improve your browsing experience. Manage your cookie preferences."
        canonical="/cookies"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Cookie Policy",
          description:
            "Learn how House of Developers uses cookies to improve your browsing experience. Manage your cookie preferences.",
          url: "https://houseofdevelopers.co.uk/cookies",
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
              <Cookie className="text-primary" size={32} />
              <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
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
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when
              you visit a website. They are widely used to make websites work
              more efficiently and to provide information to website owners.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              House of Developers uses cookies for the following purposes:
            </p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly.
              They enable basic features such as page navigation, theme
              preferences, and access to secure areas. The website cannot
              function properly without these cookies.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              We may use analytics cookies (such as Google Analytics) to
              understand how visitors interact with our website. These cookies
              collect information anonymously, including the number of visitors,
              where visitors come from, and the pages they visit. This helps us
              improve our website and your experience.
            </p>

            <h3>Functional Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such
              as your preferred theme or language) and provide enhanced, more
              personalised features.
            </p>

            <h2>3. Third-Party Cookies</h2>
            <p>
              Some cookies are set by third-party services that appear on our
              pages. We use the following third-party services that may set
              cookies:
            </p>
            <ul>
              <li>
                <strong>Calendly:</strong> for scheduling consultations
              </li>
              <li>
                <strong>Google Analytics:</strong> for website traffic analysis
              </li>
            </ul>
            <p>
              We do not control the cookies set by third parties. Please refer
              to their respective privacy policies for more information.
            </p>

            <h2>4. Managing Cookies</h2>
            <p>
              You can control and manage cookies in your browser settings. Most
              browsers allow you to:
            </p>
            <ul>
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p>
              Please note that blocking or deleting cookies may affect the
              functionality of our website and your user experience.
            </p>

            <h2>5. Cookie List</h2>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>theme</td>
                    <td>Stores your dark/light mode preference</td>
                    <td>1 year</td>
                    <td>Essential</td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>Google Analytics - distinguishes users</td>
                    <td>2 years</td>
                    <td>Analytics</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Google Analytics - distinguishes users</td>
                    <td>24 hours</td>
                    <td>Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>

            <h2>7. More Information</h2>
            <p>
              For more information about how we handle your personal data,
              please see our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              If you have any questions about our use of cookies, please contact
              us:
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
