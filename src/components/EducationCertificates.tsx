import { GraduationCap, Award } from "lucide-react";
// Certificates removed from UI for now; keep only Education
import { useLanguage } from "@/contexts/LanguageContext";

const EducationCertificates = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">
            <Award className="w-4 h-4 text-muted-foreground" />
            {t("Education", "Educação")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Education Card */}
          <div className="card-dashboard">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  {t(
                    "Bachelor's Degree in Computer Engineering",
                    "Licenciatura em Engenharia Informática"
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    "Trás-os-Montes e Alto Douro University",
                    "Universidade de Trás-os-Montes e Alto Douro"
                  )}
                </p>
                <p className="text-xs text-muted-foreground font-mono mt-1">
                  2018 – 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertificates;
