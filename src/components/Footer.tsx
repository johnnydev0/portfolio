import { Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Name & Location */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-semibold">
              João Paulo <span className="text-primary">Pessoa</span>
            </span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {t.footer.location}
            </div>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/johnnydev0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jppessoa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:joaoppessoa719@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5511992400586"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 link-underline"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="text-sm text-muted-foreground">
            <span className="code-font">
              © {currentYear} <span className="text-primary">{"<JP />"}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
