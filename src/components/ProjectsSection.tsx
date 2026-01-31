import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/i18n";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      key: "prosperia" as const,
      title: "Prosperia",
      image: "https://prosperiaco.com.br/wp-content/uploads/2025/11/Sequencia-10-1.gif",
      tech: ["React", "Chart.js", "Tailwind", "PostgreSQL", "NestJS", "IA"],
      link: "https://www.prosperiaco.com.br",
    },
    {
      key: "poraneo" as const,
      title: "Porâneo",
      image: "/poraneo.PNG",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "https://www.poraneo.com",
    },
    {
      key: "categorizai" as const,
      title: "CategorizAI",
      image: "/categorizai.PNG",
      tech: ["React", "TypeScript", "OpenAI", "Node.js"],
      link: "https://www.categorizai.com.br",
    },
    {
      key: "contextoMarcenaria" as const,
      title: "Contexto Marcenaria",
      image: "/contexto-marcenaria.PNG",
      tech: ["Next.js", "Supabase", "Tailwind"],
      link: "https://www.contextomarcenaria.com.br",
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="code-font text-sm text-primary mb-4 block">
            {t.projects.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.projects.title} <span className="text-gradient">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.projects.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex animate-scroll-left hover:[animation-play-state:paused]"
          style={{ width: "fit-content" }}
        >
          {/* Double the projects for infinite scroll effect */}
          {[...projects, ...projects].map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="flex-shrink-0 w-[400px] mx-4 group"
            >
              <div className="relative bg-card rounded-xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover-glow">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-sm text-muted-foreground">
                      {t.projects.items[project.key].description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-primary bg-primary/10 rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <p className="text-sm text-primary font-medium">
                    ✦ {t.projects.items[project.key].impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
