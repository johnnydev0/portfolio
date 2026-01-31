import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap, Users } from "lucide-react";
import { useTranslation } from "@/i18n";

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: t.about.highlights.fullStack.title,
      description: t.about.highlights.fullStack.description,
    },
    {
      icon: Layers,
      title: t.about.highlights.architecture.title,
      description: t.about.highlights.architecture.description,
    },
    {
      icon: Zap,
      title: t.about.highlights.performance.title,
      description: t.about.highlights.performance.description,
    },
    {
      icon: Users,
      title: t.about.highlights.collaboration.title,
      description: t.about.highlights.collaboration.description,
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
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
            {t.about.sectionTag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.paragraph2}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.paragraph3}
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
