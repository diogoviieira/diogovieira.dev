import { ExternalLink, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export interface ExperienceItem {
  company: string;
  companyUrl: string;
  role: { en: string; pt: string };
  period: { en: string; pt: string };
  points: { en: string[]; pt: string[] };
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Openvia Mobility",
    companyUrl: "https://openvia.io",
    role: { en: "Software Developer", pt: "Programador de Software" },
    period: { en: "2022 – Present", pt: "2022 – Presente" },
    points: {
      en: [
        "Backend development using .NET and C# in microservices architecture",
        "Design and implementation of RESTful APIs",
        "Containerization with Docker and orchestration with Kubernetes",
        "Integration with AWS services",
        "PostgreSQL and SQL database interaction",
        "Monitoring and CI/CD using Grafana and Jenkins",
      ],
      pt: [
        "Desenvolvimento backend com .NET e C# em arquitetura de microserviços",
        "Design e implementação de APIs RESTful",
        "Containerização com Docker e orquestração com Kubernetes",
        "Integração com serviços AWS",
        "Interação com bases de dados PostgreSQL e SQL",
        "Monitorização e CI/CD com Grafana e Jenkins",
      ],
    },
  },
  {
    company: "Critical Software",
    companyUrl: "https://criticalsoftware.com",
    role: { en: "Software Engineer", pt: "Engenheiro de Software" },
    period: { en: "2021 – 2022", pt: "2021 – 2022" },
    points: {
      en: [
        "Development of safety-critical software for railway, aerospace and maritime systems",
        "Work under DO-178C and DO-330 standards",
        "Requirements definition, plans, test cases and test procedures",
        "Software integration and continuous improvement",
        "Participation in international and confidential projects",
      ],
      pt: [
        "Desenvolvimento de software safety-critical para sistemas ferroviários, aeroespaciais e marítimos",
        "Trabalho sob normas DO-178C e DO-330",
        "Definição de requisitos, planos, casos de teste e procedimentos de teste",
        "Integração de software e melhoria contínua",
        "Participação em projetos internacionais e confidenciais",
      ],
    },
  },
];

interface ExperienceProps {
  showAll?: boolean;
}

const Experience = ({ showAll = false }: ExperienceProps) => {
  const { language, t } = useLanguage();
  const displayData = showAll ? experienceData : experienceData.slice(0, 2);

  return (
    <section id="experience" className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">
            <Briefcase className="w-4 h-4 text-muted-foreground" />
            {t("Experience", "Experiência")}
          </h2>
          {!showAll && (
            <Link to="/experience" className="view-all-link">
              {t("view all", "ver tudo")}
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        <div className="grid gap-4">
          {displayData.map((exp, index) => (
            <div key={index} className="card-dashboard">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-foreground font-medium hover:text-primary transition-colors"
                  >
                    {exp.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <p className="text-sm text-muted-foreground">
                    {exp.role[language]}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  {exp.period[language]}
                </span>
              </div>

              <ul className="space-y-1.5">
                {exp.points[language].slice(0, showAll ? undefined : 3).map((point, i) => (
                  <li
                    key={i}
                    className="text-secondary-foreground text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
