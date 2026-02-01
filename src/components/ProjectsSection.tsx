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
      tech: ["Next.js", "Tailwind", "Framer Motion"],
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
            <motion.div
              key={`${project.title}-${index}`}
              className="flex-shrink-0 w-[400px] mx-4 group perspective-1000"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-card rounded-xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay always visible */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                  {/* Description overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6 text-center backdrop-blur-sm">
                    <p className="text-sm text-foreground mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {t.projects.items[project.key].description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-primary/90"
                    >
                      Ver Projeto <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Animated border line */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-50 group-hover:opacity-100" />
                  </div>

                  {/* Tech Stack with staggered animation */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-primary bg-primary/10 rounded-md border border-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact with icon animation */}
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <span className="inline-block transition-transform duration-300 group-hover:rotate-180">✦</span>
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
