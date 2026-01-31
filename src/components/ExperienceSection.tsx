import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Founder & Full Stack Engineer",
    company: "Projetos SaaS Próprios",
    location: "Remoto",
    period: "2026 - Presente",
    description: [
      "Liderando o desenvolvimento de produtos SaaS do zero ao mercado",
      "Arquitetura de sistemas escaláveis com foco em automação e IA",
      "Desenvolvimento full-stack com integrações de inteligência artificial",
      "Gestão completa do ciclo de vida dos produtos: ideação, desenvolvimento e go-to-market",
    ],
    technologies: ["React", "Next.js", "TypeScript", "OpenAI", "NestJS", "PostgreSQL"],
    isCurrent: true,
  },
  {
    title: "Senior Software Engineer",
    company: "OT3N Brasil",
    location: "Brasília, Brasil",
    period: "2024 - Dez 2025",
    description: [
      "Desenvolvimento técnico em projetos de alta complexidade",
      "Desenvolvimento de dashboards analíticos com React e TypeScript",
      "Arquitetura de soluções escaláveis em cloud",
      "Mentoria de desenvolvedores júnior e pleno",
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    isCurrent: false,
  },
  {
    title: "Software Engineer",
    company: "A3 Media",
    location: "Barueri, Brasil",
    period: "2023 - 2024",
    description: [
      "Desenvolvimento full-stack de plataformas de mídia",
      "Implementação de sistemas de pagamento com Stripe",
      "Otimização de performance reduzindo tempo de carregamento em 50%",
      "Integração com APIs de terceiros e serviços de cloud",
    ],
    technologies: ["Next.js", "React", "Stripe", "Firebase", "MongoDB"],
    isCurrent: false,
  },
  {
    title: "Frontend Engineer",
    company: "BWS IoT",
    location: "Barueri, Brasil",
    period: "2020 - 2023",
    description: [
      "Desenvolvimento de dashboards IoT com atualização em tempo real",
      "Redução de 80% nos custos com Google Maps através de otimização",
      "Implementação de interfaces responsivas e acessíveis",
      "Integração com protocolos MQTT e WebSocket",
    ],
    technologies: ["React", "JavaScript", "Google Maps API", "MQTT", "WebSocket"],
    isCurrent: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="code-font text-sm text-primary mb-4 block">
            {"// experience"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Uma trajetória de crescimento contínuo, sempre buscando desafios maiores e impacto real.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative pl-8 md:pl-0 pb-16 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full border-2 left-0 -translate-x-1/2 md:left-1/2 ${
                  exp.isCurrent
                    ? "bg-primary border-primary animate-pulse"
                    : "bg-card border-primary/50"
                }`}
              />

              {/* Content Card */}
              <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover-glow">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-center gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-primary bg-primary/10 rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
