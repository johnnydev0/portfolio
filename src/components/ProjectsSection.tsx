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
      accent: "primary",
    },
    {
      key: "poraneo" as const,
      title: "Porâneo",
      image: "/poraneo.PNG",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      link: "https://www.poraneo.com",
      accent: "secondary",
    },
    {
      key: "categorizai" as const,
      title: "CategorizAI",
      image: "/categorizai.PNG",
      tech: ["React", "TypeScript", "OpenAI", "Node.js"],
      link: "https://www.categorizai.com.br",
      accent: "primary",
    },
    {
      key: "contextoMarcenaria" as const,
      title: "Contexto Marcenaria",
      image: "/contexto-marcenaria.PNG",
      tech: ["Next.js", "Supabase", "Tailwind"],
      link: "https://www.contextomarcenaria.com.br",
      accent: "secondary",
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <span className="section-number">02</span>

      <div ref={ref} className="container mx-auto px-6 mb-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >

          <h2
            className="text-[8vw] leading-[0.85] mt-4 mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="gradient-heading">{t.projects.title}</span>{" "}
            <span className="gradient-heading">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl">
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
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="flex-shrink-0 w-[420px] mx-3 group"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative bg-card border border-border overflow-hidden transition-all duration-400 group-hover:border-primary/60">
                {/* Dramatic top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                    project.accent === "primary"
                      ? "bg-gradient-to-r from-primary to-secondary"
                      : "bg-gradient-to-r from-secondary to-primary"
                  }`}
                />

                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/92 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-center items-center p-6 text-center">
                    <p className="text-sm text-foreground mb-5 leading-relaxed">
                      {t.projects.items[project.key].description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black text-background bg-primary hover:bg-primary/90 transition-colors duration-200"
                      style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                    >
                      Ver Projeto <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="text-xl tracking-tight"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      <span className="gradient-heading text-xl">{project.title}</span>
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-40 group-hover:opacity-100" />
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="code-font px-2 py-0.5 text-xs text-primary/70 bg-primary/8 border border-primary/15 group-hover:border-primary/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <p className="text-xs text-primary font-semibold flex items-center gap-2 code-font">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t.projects.items[project.key].impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
