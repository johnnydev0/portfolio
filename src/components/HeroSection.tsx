import { useState, useRef } from "react";
import { motion } from "framer-motion";
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
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 1 && newCount < EASTER_EGG_CLICKS) setShowHint(true);
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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14 md:pt-0">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Dramatic violet glow – top left */}
      <motion.div
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(262 83% 67% / 0.18) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Rose glow – bottom right */}
      <motion.div
        className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(344 89% 60% / 0.14) 0%, transparent 70%)" }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div>
          {/* Dramatic role tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
        
          </motion.div>

          {/* Main Headline – ultra bold, dramatic */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[12vw] leading-[0.8] font-black tracking-tighter mb-6 cursor-pointer select-none"
            style={{ fontFamily: "Outfit, sans-serif" }}
            onClick={handleNameClick}
          >
            <motion.span
              className="block gradient-heading"
              whileTap={{ scale: 0.99 }}
            >
              João
            </motion.span>
            <motion.span
              className="block gradient-heading"
              whileTap={{ scale: 0.99 }}
            >
              Pessoa
            </motion.span>
          </motion.h1>

          {/* Easter Egg Hint */}
          {showHint && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-xs code-font text-primary/70 mb-3"
            >
              {EASTER_EGG_CLICKS - clickCount} {t.hero.clicksRemaining}
            </motion.p>
          )}

          {/* Subtitle row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row md:items-end gap-6 mb-10"
          >
            <div className="flex-1">
              {/* Typing Effect */}
              <div className="h-8 mb-3">
                <span className="text-lg md:text-xl text-primary font-semibold code-font">
                  {currentText}
                  <span className="animate-pulse ml-0.5">|</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
                {t.hero.tagline}
              </p>
            </div>

            {/* Tech Stack – vertical on large screens */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-1.5">
              {["React", "Next.js", "TypeScript", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="code-font px-3 py-1 text-xs text-primary/80 border border-primary/20 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            {/* Primary CTA – solid violet, clipped corner */}
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black text-background bg-primary hover:bg-primary/90 transition-all duration-200 group overflow-hidden"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              <span className="relative z-10">{t.hero.viewProjects}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
            </a>

            {/* Secondary CTA – outline style */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-black text-primary border border-primary/40 hover:border-primary hover:bg-primary/8 transition-all duration-200"
            >
              {t.hero.getInTouch}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            {[
              { href: "https://github.com/johnnydev0", Icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/jppessoa/", Icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:joaoppessoa719@gmail.com", Icon: Mail, label: "Email" },
              { href: "https://wa.me/5511992400586", Icon: MessageCircle, label: "WhatsApp" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:-translate-y-0.5 transition-transform"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}

            {/* Divider */}
            <div className="h-px w-16 bg-border" />
            <span className="code-font text-xs text-muted-foreground">
              São Paulo, BR
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Snake Game Easter Egg */}
      <SnakeGame isOpen={showGame} onClose={() => setShowGame(false)} />
    </section>
  );
};

export default HeroSection;
