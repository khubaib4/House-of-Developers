import { motion } from "framer-motion";
import { Shield, Clock, Users, TrendingUp, Code2, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "From concept to launch in as little as 30 days. We move fast without cutting corners.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Production-grade code built on modern tech stacks that scale with your business.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A focused team of senior developers, designers, and product managers on your project.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing at every stage. We deliver products that work reliably from day one.",
  },
  {
    icon: TrendingUp,
    title: "Growth Ready",
    description: "Infrastructure designed to handle rapid growth. Scale from 100 to 100,000 users seamlessly.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Post-launch support and maintenance to keep your product running smoothly 24/7.",
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="py-16 md:py-24 bg-muted/50"
      data-testid="section-why-choose"
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
            data-testid="text-why-choose-title"
          >
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine speed, quality, and deep technical expertise to deliver
            products that matter.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="flex flex-col"
              data-testid={`reason-${reason.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
