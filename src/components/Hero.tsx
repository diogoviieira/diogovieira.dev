import { Github, Linkedin, Mail, FolderOpen, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Profile Picture */}
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-secondary border-2 border-border overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-3xl font-medium">
            DV
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
          Diogo Vieira
        </h1>

        {/* Role */}
        <p className="text-muted-foreground mb-4">
          Software Engineer @ <span className="text-foreground">Openvia</span>
        </p>

        {/* Tagline */}
        <p className="text-secondary-foreground/80 mb-8">
          {t(
            "Backend & cloud-focused software engineer.",
            "Engenheiro de software focado em backend e cloud."
          )}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/diogovieira"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/diogovieira"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:diogo@example.com"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#experience"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Projects"
          >
            <FolderOpen className="w-4 h-4" />
          </a>
        </div>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          {t("Download Resume", "Download CV")}
        </a>
      </div>
    </section>
  );
};

export default Hero;
