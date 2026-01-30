import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Prosperia",
    description: "Plataforma que integra consultoria financeira, IA via WhatsApp e educação contínua em um ecossistema único de transformação financeira.",
    image: "https://prosperiaco.com.br/wp-content/uploads/2025/11/Sequencia-10-1.gif",
    tech: ["React", "Chart.js", "Tailwind", "PostgreSQL", "NestJS", "IA"],
    impact: "Ecossistema completo de finanças pessoais",
    link: "https://www.prosperiaco.com.br",
  },
  {
    title: "Porâneo",
    description: "Landing page para estúdio que une arquitetura, mobiliário e expografia, traduzindo identidade visual e conceito em uma experiência digital clara e elegante.",
    image: "/poraneo.PNG",
    tech: ["React", "Tailwind", "Framer Motion"],
    impact: "Design premium e experiência imersiva",
    link: "https://www.poraneo.com",
  },
  {
    title: "CategorizAI",
    description: "IA que categoriza suas finanças e entrega insights inteligentes para você entender e controlar melhor seu dinheiro.",
    image: "/categorizai.PNG",
    tech: ["React", "TypeScript", "OpenAI", "Node.js"],
    impact: "Automação inteligente de finanças",
    link: "https://www.categorizai.com.br",
  },
  {
    title: "Contexto Marcenaria",
    description: "Landing page de alta conversão para empresa conceitual no ramo de marcenaria, com foco em captura de leads e apresentação premium dos serviços.",
    image: "/contexto-marcenaria.PNG",
    tech: ["Next.js", "Supabase", "Tailwind"],
    impact: "Otimizada para conversão de leads",
    link: "https://www.contextomarcenaria.com.br",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            {"// projects"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos <span className="text-gradient">Selecionados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Uma seleção de projetos que demonstram minha experiência em criar soluções escaláveis e de alto impacto.
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
                      {project.description}
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
                    ✦ {project.impact}
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
