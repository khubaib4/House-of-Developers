import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiFlutter,
  SiFigma,
  SiOpenai,
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPython, name: "Python" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiAmazonwebservices, name: "AWS" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiOpenai, name: "OpenAI" },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export function TechStack() {
  return (
    <section
      className="py-16 md:py-24 bg-muted/50"
      data-testid="section-tech-stack"
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
            data-testid="text-tech-title"
          >
            Our Tech Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We use industry-leading technologies to build products that are
            fast, reliable, and maintainable.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="flex flex-col items-center gap-2 py-4 px-2 rounded-md hover-elevate transition-all"
              data-testid={`tech-${tech.name.toLowerCase()}`}
            >
              <tech.icon className="h-8 w-8 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
