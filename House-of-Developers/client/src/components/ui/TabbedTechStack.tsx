import { useState } from "react";

interface Tech {
  name: string;
  slug: string;
}

interface Tab {
  label: string;
  technologies: Tech[];
}

interface TabbedTechStackProps {
  title?: string;
  subtitle?: string;
  tabs: Tab[];
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
      <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
        {tech.name}
      </span>
    </div>
  );
}

export function TabbedTechStack({
  title = "Technologies We Use",
  subtitle,
  tabs,
  className = "",
}: TabbedTechStackProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="flex gap-2 border-b mb-10 overflow-x-auto pb-0 scrollbar-hide">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
                activeTab === index
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
          {tabs[activeTab].technologies.map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
