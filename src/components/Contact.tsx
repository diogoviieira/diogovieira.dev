import { Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-8">
          {t("Contact", "Contacto")}
        </h2>

        <div className="space-y-4">
          <a
            href="mailto:diogo@example.com"
            className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>diogo@example.com</span>
          </a>

          <a
            href="https://linkedin.com/in/diogovieira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/diogovieira</span>
          </a>

          <a
            href="https://github.com/diogovieira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-secondary-foreground/80 hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>github.com/diogovieira</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
