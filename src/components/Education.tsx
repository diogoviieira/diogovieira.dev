import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-8">
          {t("Education", "Educação")}
        </h2>

        <div className="border-l border-border pl-6 relative">
          <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary" />

          <h3 className="text-lg font-medium text-foreground">
            {t(
              "Bachelor's Degree in Computer Engineering",
              "Licenciatura em Engenharia Informática"
            )}
          </h3>
          <p className="text-muted-foreground">
            {t(
              "Trás-os-Montes e Alto Douro University",
              "Universidade de Trás-os-Montes e Alto Douro"
            )}
          </p>
          <p className="text-sm text-muted-foreground/70">2018 – 2021</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
