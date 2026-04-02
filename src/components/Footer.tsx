import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "@/i18n";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border relative overflow-hidden">
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left – bold monogram + location */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span
              className="text-2xl font-black tracking-tighter text-foreground"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              JP<span className="text-primary">.</span>
            </span>
            <span className="code-font text-xs text-muted-foreground">
              {t.footer.location}
            </span>
          </div>

          {/* Center – social links */}
          <div className="flex items-center gap-5">
            {[
         
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
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Right – copyright */}
          <div className="code-font text-xs text-muted-foreground">
            © {currentYear}{" "}
            <span className="text-primary font-semibold">João Paulo Pessoa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
