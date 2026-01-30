import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "Domínio completo do ciclo de desenvolvimento, do backend ao frontend.",
  },
  {
    icon: Layers,
    title: "Arquitetura",
    description: "Design de sistemas escaláveis e manuteníveis.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização de aplicações para máxima velocidade e eficiência.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Experiência trabalhando em times e projetos de alta complexidade.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            {"// about"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-gradient">Mim</span>
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
              Com mais de <span className="text-foreground font-medium">4 anos de experiência</span> em 
              desenvolvimento de software, tenho atuado tanto em times multidisciplinares quanto como 
              único engenheiro responsável por produtos completos.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Meu foco está em construir <span className="text-foreground font-medium">aplicações escaláveis</span>, 
              com código limpo, arquitetura sólida e excelente experiência do usuário. 
              Acredito que bom software é aquele que resolve problemas reais de forma elegante.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista em <span className="text-primary">React</span>, <span className="text-primary">Next.js</span>, 
              {" "}<span className="text-primary">TypeScript</span> e <span className="text-primary">Node.js</span>, 
              com experiência em cloud computing, DevOps e metodologias ágeis.
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
