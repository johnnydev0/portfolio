import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
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
            {t.experience.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.experience.title} <span className="text-gradient">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => {
            const expData = t.experience.items[exp.key];
            return (
              <motion.div
                key={exp.key}
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
                        {expData.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="w-4 h-4" />
                        {expData.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {expData.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {expData.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {expData.description.map((item, i) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
