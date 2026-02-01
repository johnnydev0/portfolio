import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import SnakeGame from "./SnakeGame";

const EASTER_EGG_CLICKS = 7;

const HeroSection = () => {
  const { t } = useTranslation();
  const { currentText } = useTypingEffect({
    words: t.hero.typingWords,
    typingSpeed: 80,
    deletingSpeed: 40,
    delayBetweenWords: 2500,
  });

  const [clickCount, setClickCount] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const clickTimeoutRef = useRef<number>();

  const handleNameClick = () => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount >= 1 && newCount < EASTER_EGG_CLICKS) {
      setShowHint(true);
    }

    if (newCount >= EASTER_EGG_CLICKS) {
      setShowGame(true);
      setClickCount(0);
      setShowHint(false);
    }

    clickTimeoutRef.current = window.setTimeout(() => {
      setClickCount(0);
      setShowHint(false);
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Code-like intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="code-font text-sm text-muted-foreground px-4 py-2 bg-secondary/50 rounded-full border border-border">
            {"<"}<span className="text-primary">SoftwareEngineer</span>{" />"}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <motion.span
            className="text-foreground cursor-pointer select-none inline-block"
            onClick={handleNameClick}
            whileTap={{ scale: 0.98 }}
            animate={clickCount > 0 ? {
              color: [`hsl(var(--foreground))`, `hsl(var(--primary))`, `hsl(var(--foreground))`],
            } : {}}
            transition={{ duration: 0.3 }}
          >
            João Paulo
          </motion.span>
          <br />
          <motion.span
            className="text-gradient glow-text cursor-pointer select-none inline-block"
            onClick={handleNameClick}
            whileTap={{ scale: 0.98 }}
          >
            Pessoa
          </motion.span>
        </motion.h1>

        {/* Easter Egg Hint */}
        {showHint && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-primary/70 mb-2"
          >
            {EASTER_EGG_CLICKS - clickCount} {t.hero.clicksRemaining}
          </motion.p>
        )}

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto font-light"
        >
          Software Engineer Full Stack
        </motion.p>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="h-8 mb-4"
        >
          <span className="text-lg md:text-xl text-primary font-medium">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm text-primary border border-primary/30 rounded-full bg-primary/5"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          {t.hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">{t.hero.viewProjects}</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#contact">{t.hero.getInTouch}</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/johnnydev0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/jppessoa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:joaoppessoa719@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/5511992400586"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* Snake Game Easter Egg */}
      <SnakeGame isOpen={showGame} onClose={() => setShowGame(false)} />
    </section>
  );
};

export default HeroSection;
