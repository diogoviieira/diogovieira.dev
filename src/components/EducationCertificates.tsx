import { ExternalLink, ArrowRight, GraduationCap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export interface CertificateItem {
  title: string;
  platform: string;
  year: string;
  url: string;
}

export const certificatesData: CertificateItem[] = [
  {
    title: "Complete Intro to React, v9",
    platform: "Frontend Masters",
    year: "2025",
    url: "#",
  },
  {
    title: "AWS Cloud Practitioner",
    platform: "Amazon Web Services",
    year: "2024",
    url: "#",
  },
  {
    title: "Docker Fundamentals",
    platform: "Docker",
    year: "2023",
    url: "#",
  },
  {
    title: "Kubernetes Basics",
    platform: "CNCF",
    year: "2023",
    url: "#",
  },
];

interface EducationCertificatesProps {
  showAllCertificates?: boolean;
}

const EducationCertificates = ({ showAllCertificates = false }: EducationCertificatesProps) => {
  const { t } = useLanguage();
  const displayCertificates = showAllCertificates 
    ? certificatesData 
    : certificatesData.slice(0, 3);

  return (
    <section id="education" className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">
            <Award className="w-4 h-4 text-muted-foreground" />
            {t("Education & Certificates", "Educação & Certificados")}
          </h2>
          {!showAllCertificates && (
            <Link to="/certificates" className="view-all-link">
              {t("view all", "ver tudo")}
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
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

          {/* Certificates */}
          {displayCertificates.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-dashboard group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.platform}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    {cert.year}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCertificates;
