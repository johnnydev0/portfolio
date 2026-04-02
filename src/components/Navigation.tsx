import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t.nav.about, number: "01" },
    { href: "#projects", label: t.nav.projects, number: "02" },
    { href: "#experience", label: t.nav.experience, number: "03" },
    { href: "#contact", label: t.nav.contact, number: "04" },
  ];

  const socials = [
    { href: "https://github.com/johnnydev0", Icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/jppessoa/", Icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:joaoppessoa719@gmail.com", Icon: Mail, label: "Email" },
    { href: "https://wa.me/5511992400586", Icon: MessageCircle, label: "WhatsApp" },
  ];

  return (
    <>
      {/* ── Vertical Sidebar (desktop) ─────────────────────────────────── */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 flex-col justify-between z-50 bg-background border-r border-border px-8 py-10">
        {/* Top: logo */}
        <div>
          <a href="#" className="flex items-center gap-2 mb-16 group">
            <span
              className="text-3xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-200"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              JP
            </span>
            <span className="w-2 h-2 rounded-full bg-primary" />
          </a>

          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 py-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <span className="code-font text-xs text-primary/50 group-hover:text-primary transition-colors duration-200 w-6 shrink-0">
                  {link.number}
                </span>
                <span className="text-sm font-semibold tracking-wide">{link.label}</span>
                <span className="ml-auto h-px w-0 group-hover:w-4 bg-primary transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Language switcher */}
          <div className="mt-8 pt-8 border-t border-border">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Bottom: CTA + socials */}
        <div className="flex flex-col gap-6">
          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center py-3 text-sm font-black text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200 tracking-wide"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          >
            {t.nav.hire}
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Mobile Top Bar ─────────────────────────────────────────────── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-6 bg-background border-b border-border">
        <a href="#" className="flex items-center gap-1.5 group">
          <span
            className="text-xl font-black tracking-tighter text-foreground"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            JP
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-foreground p-1 hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Menu Overlay ─────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-between px-8 py-20 md:hidden border-r border-border"
          >
            {/* Ghost decoration */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[16rem] font-black leading-none pointer-events-none select-none"
              style={{ color: "hsl(262 83% 58% / 0.04)", fontFamily: "Outfit, sans-serif" }}
            >
              JP
            </span>

            <nav className="relative z-10 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.07 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center gap-4 py-4 border-b border-border text-foreground hover:text-primary transition-colors duration-200"
                >
                  <span className="code-font text-xs text-primary/40 w-6">{link.number}</span>
                  <span className="text-2xl font-black tracking-tight">{link.label}</span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="relative z-10 flex flex-col gap-5"
            >
              <LanguageSwitcher />
              <div className="flex items-center gap-5">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex justify-center py-4 text-base font-black text-primary-foreground bg-primary hover:bg-primary/90 transition-colors duration-200"
                style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
              >
                {t.nav.hire}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
