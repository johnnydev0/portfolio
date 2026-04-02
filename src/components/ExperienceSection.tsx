import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "@/i18n";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      key: "saas" as const,
      technologies: ["React", "Next.js", "TypeScript", "OpenAI", "NestJS", "PostgreSQL"],
      isCurrent: true,
    },
    {
      key: "ot3n" as const,
      technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
      isCurrent: false,
    },
    {
      key: "a3media" as const,
      technologies: ["Next.js", "React", "Stripe", "Firebase", "MongoDB"],
      isCurrent: false,
    },
    {
      key: "bws" as const,
      technologies: ["React", "JavaScript", "Google Maps API", "MQTT", "WebSocket"],
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <span className="section-number">03</span>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
    
          <h2
            className="text-[8vw] leading-[0.85] mt-4 mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="gradient-heading">{t.experience.title}</span>{" "}
            <span className="gradient-heading">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Experience list – dramatic left-bordered cards */}
        <div className="space-y-0 relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => {
            const expData = t.experience.items[exp.key];
            return (
              <motion.div
                key={exp.key}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.12 }}
                className="relative pl-10 pb-16 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-3 h-3 -translate-x-1/2 border-2 transition-all duration-300 ${
                    exp.isCurrent
                      ? "bg-primary border-primary"
                      : "bg-background border-primary/40 group-hover:border-primary"
                  }`}
                />

                {/* Current badge */}
                {exp.isCurrent && (
                  <span className="code-font inline-flex items-center gap-1.5 text-xs text-primary mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {expData.period}
                  </span>
                )}

                {!exp.isCurrent && (
                  <span className="code-font text-xs text-muted-foreground mb-3 block">
                    {expData.period}
                  </span>
                )}

                {/* Card */}
                <div className="border border-border bg-card p-6 group-hover:border-primary/40 transition-all duration-300 group-hover:bg-muted/30">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className="text-xl font-black mb-1 tracking-tight"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        <span className="gradient-heading text-xl">{expData.title}</span>
                      </h3>
                      <p className="text-sm font-semibold text-primary">
                        {expData.company}
                      </p>
                    </div>
                    <div className="text-xs code-font text-muted-foreground text-right">
                      <p>{expData.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-5">
                    {expData.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-end gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="code-font px-2 py-0.5 text-xs text-primary/70 bg-primary/8 border border-primary/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
