import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
const Hero = () => {
  const {
    t
  } = useLanguage();
  return <section className="pt-8 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Language Toggle - Top Right */}
        <div className="flex justify-end mb-8 gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>

        {/* Hero Card */}
        <div className="card-dashboard">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile Picture */}
            <Avatar className="w-40 h-40 border-2 border-border bg-secondary flex-shrink-0 overflow-hidden">
              <AvatarImage src="/profile.jpg" alt="Diogo Vieira" className="object-cover object-center" />
              <AvatarFallback className="text-muted-foreground text-xl font-medium">DV</AvatarFallback>
            </Avatar>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-semibold text-foreground mb-1">
                Diogo Vieira
              </h1>
              <p className="text-muted-foreground mb-2">Software Engineer
              </p>
              <p className="text-secondary-foreground text-sm">
                {t("Drinking coffee while keeping systems running (most of the time)", "Bebendo café enquanto mantenho os sistemas a funcionar (na maior parte do tempo)")}
              </p>

              {/* Icons & Download */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
                <a href="https://github.com/diogoviieira" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/diogoviieira" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="mailto:dvieira.work@gmail.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="Contact">
                  <Mail className="w-4 h-4" />
                  {t("Contact", "Contacto")}
                </a>
                <a href="/Diogo_Vieira_CV.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors ml-2">
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