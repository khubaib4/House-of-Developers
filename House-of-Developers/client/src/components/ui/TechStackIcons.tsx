import { useState } from "react";

interface Tech {
  name: string;
  slug: string;
}

interface TechStackIconsProps {
  title?: string;
  subtitle?: string;
  technologies: Tech[];
  className?: string;
}

function TechIcon({ tech }: { tech: Tech }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3 group">
      {failed ? (
        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-lg font-bold text-muted-foreground">
            {tech.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      ) : (
        <img
          src={`https://cdn.simpleicons.org/${tech.slug}/9CA3AF`}
          alt={tech.name}
          className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      <span className="text-sm font-medium text-muted-foreground text-center">
        {tech.name}
      </span>
    </div>
  );
}

export function TechStackIcons({
  title = "Technologies We Use",
  subtitle,
  technologies,
  className = "",
}: TechStackIconsProps) {
  return (
    <div className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 md:gap-12">
          {technologies.map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
