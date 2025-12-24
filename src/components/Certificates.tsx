import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Certificates = () => {
  const { t } = useLanguage();

  const certificates = [
    {
      title: "Complete Intro to React, v9",
      platform: "Frontend Masters",
      year: "2025",
      url: "#",
    },
    // Add more certificates here as needed
  ];

  return (
    <section id="certificates" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-8">
          {t("Certificates", "Certificados")}
        </h2>

        <div className="space-y-4">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.platform} — {cert.year}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
