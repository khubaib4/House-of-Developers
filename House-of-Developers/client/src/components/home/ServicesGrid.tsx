import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Globe, Smartphone, Brain } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Build MVP",
    description:
      "Launch your product in 30 days. We turn your idea into a fully functional MVP with real users and feedback loops.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Scalable web applications built with modern frameworks. From SaaS platforms to enterprise dashboards.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
  },
  {
    icon: Brain,
    title: "AI Services",
    description:
      "Integrate AI and machine learning into your product. From chatbots to predictive analytics and automation.",
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-16 md:py-24"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            data-testid="text-services-title"
          >
            What We Build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end development services tailored for ambitious teams and
            startups ready to ship.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card
                className="hover-elevate transition-all duration-200 h-full"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6 md:p-8">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
