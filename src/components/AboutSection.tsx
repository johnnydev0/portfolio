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
      {/* Decorative ghost number */}
      <span className="section-number">01</span>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
     
          <h2
            className="text-[8vw] leading-[0.85] mt-4"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="gradient-heading">{t.about.title}</span>{" "}
            <span className="gradient-heading">{t.about.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="space-y-6 pl-6 border-l-2 border-primary/30">
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.about.paragraph1}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.about.paragraph2}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t.about.paragraph3}
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid – dramatic cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-2 gap-px bg-border"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                className="bg-card p-6 group hover:bg-muted transition-colors duration-300 cursor-default"
              >
                <item.icon className="w-7 h-7 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-black text-foreground mb-2 text-sm tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
