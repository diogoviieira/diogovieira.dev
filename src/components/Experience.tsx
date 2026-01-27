import { ExternalLink, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";

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
    period: { en: "2025 – 2025", pt: "2025 – 2025" },
    points: {
      en: [
        "Design and develop backend services using .NET/C# in distributed microservices architecture",
        "Architect and implement RESTful APIs ensuring scalability and maintainability",
        "Deploy and orchestrate containerized services using Docker and Kubernetes",
        "Integrate cloud-native solutions with AWS infrastructure",
        "Implement database solutions using PostgreSQL and SQL Server",
        "Establish monitoring and CI/CD pipelines with Grafana and Jenkins",
      ],
      pt: [
        "Design e desenvolvimento de serviços backend com .NET/C# em arquitetura distribuída de microserviços",
        "Arquitetura e implementação de APIs RESTful garantindo escalabilidade e manutenibilidade",
        "Deploy e orquestração de serviços containerizados com Docker e Kubernetes",
        "Integração de soluções cloud-native com infraestrutura AWS",
        "Implementação de soluções de base de dados usando PostgreSQL e SQL Server",
        "Estabelecimento de pipelines de monitorização e CI/CD com Grafana e Jenkins",
      ],
    },
  },
  {
    company: "Critical Software",
    companyUrl: "https://criticalsoftware.com",
    role: { en: "Software Engineer", pt: "Engenheiro de Software" },
    period: { en: "2021 – 2025", pt: "2021 – 2025" },
    points: {
      en: [
        "Engineered safety-critical software for railway, aerospace, and maritime systems",
        "Contributed across the full software lifecycle, from requirements and architecture to verification and validation",
        "Executed software integration, test specification, and continuous improvement initiatives",
        "Collaborated with international cross-functional teams on confidential certification projects",
      ],
      pt: [
        "Engenharia de software safety-critical para sistemas ferroviários, aeroespaciais e marítimos",
        "Contribuição ao longo de todo o ciclo de vida do software, desde requisitos e arquitetura até verificação e validação",
        "Execução de integração de software, especificação de testes e iniciativas de melhoria contínua",
        "Colaboração com equipas internacionais multifuncionais em projetos confidenciais de certificação",
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
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {exp.company}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    {exp.company === "Critical Software" && (
                      <Badge variant="outline" className="text-xs font-normal border-muted-foreground/30">
                        Safety-Critical Systems · DO-178C · DO-330
                      </Badge>
                    )}
                  </div>
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
