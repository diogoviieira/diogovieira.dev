import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
const Hero = () => {
  const {
    t
  } = useLanguage();
  return <section className="pt-8 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Language Toggle - Top Right */}
        <div className="flex justify-end mb-8">
          <LanguageToggle />
        </div>

        {/* Hero Card */}
        <div className="card-dashboard">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile Picture */}
            <div className="w-20 h-20 rounded-full bg-secondary border-2 border-border overflow-hidden flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xl font-medium">
                DV
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-semibold text-foreground mb-1">
                Diogo Vieira
              </h1>
              <p className="text-muted-foreground mb-2">Software Engineer
              </p>
              <p className="text-secondary-foreground text-sm">
                {t("Backend & cloud-focused software engineer.", "Engenheiro de software focado em backend e cloud.")}
              </p>

              {/* Icons & Download */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
                <a href="https://github.com/diogovieira" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/diogovieira" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:diogo@example.com" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors ml-2">
                  <Download className="w-4 h-4" />
                  {t("Download Resume", "Download CV")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;