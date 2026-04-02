import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n";

const CTASection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Dramatic background: violet glow center + rose glow edge */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(262 83% 67% / 0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(344 89% 60% / 0.1) 0%, transparent 70%)" }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
  

          {/* Dramatic Headline */}
          <h2
            className="text-[10vw] leading-[0.85] mt-6 mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="gradient-heading">{t.cta.title}</span>{" "}
            <span className="gradient-heading">{t.cta.titleHighlight}</span>
            <br />
            <span className="gradient-heading">{t.cta.together}</span>
          </h2>

          {/* Description */}
          <p className="text-base text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
            {t.cta.description}
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {/* Primary */}
            <a
              href="mailto:joaoppessoa719@gmail.com"
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black text-background bg-primary hover:bg-primary/90 transition-all duration-200 group overflow-hidden"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              <Mail className="w-5 h-5 relative z-10" />
              <span className="relative z-10">{t.cta.letsChat}</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jppessoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black text-primary border border-primary/40 hover:border-primary hover:bg-primary/8 transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5" />
              LinkedIn
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5511992400586"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black text-secondary border border-secondary/40 hover:border-secondary hover:bg-secondary/8 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 border border-border bg-card"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="code-font text-sm text-muted-foreground">
              {t.cta.available}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
