import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTrack Pro",
    category: "Fintech",
    description:
      "A comprehensive financial tracking platform for small businesses with real-time analytics and automated reporting.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10",
  },
  {
    title: "MediConnect",
    category: "Healthcare",
    description:
      "Telemedicine platform connecting patients with specialists. Handles video consultations, prescriptions, and health records.",
    tags: ["React Native", "AWS", "Python"],
    color: "from-emerald-500/20 to-green-500/20 dark:from-emerald-500/10 dark:to-green-500/10",
  },
  {
    title: "LearnFlow AI",
    category: "EdTech",
    description:
      "AI-powered adaptive learning platform that personalises study plans and provides intelligent tutoring for students.",
    tags: ["Next.js", "OpenAI", "MongoDB"],
    color: "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10",
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsShowcase() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24"
      data-testid="section-projects"
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
            data-testid="text-projects-title"
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of products we've built for ambitious teams across
            industries.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card
                className="hover-elevate transition-all duration-200 h-full overflow-visible"
                data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-0">
                  <div
                    className={`h-40 rounded-t-md bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <span className="text-2xl font-bold text-foreground/60">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <Badge variant="outline" className="text-xs no-default-active-elevate">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs no-default-active-elevate"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
