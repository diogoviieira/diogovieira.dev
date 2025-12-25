import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  name: string;
  description: { en: string; pt: string };
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    name: "Cloud API Gateway",
    description: {
      en: "Microservices API gateway with rate limiting and authentication",
      pt: "Gateway de API para microserviços com rate limiting e autenticação",
    },
    tech: [".NET", "Docker", "AWS"],
    githubUrl: "https://github.com/diogovieira/api-gateway",
  },
  {
    name: "DevOps Pipeline",
    description: {
      en: "CI/CD pipeline automation for containerized applications",
      pt: "Automação de pipeline CI/CD para aplicações containerizadas",
    },
    tech: ["Jenkins", "Kubernetes", "Terraform"],
    githubUrl: "https://github.com/diogovieira/devops-pipeline",
  },
  {
    name: "Real-time Monitor",
    description: {
      en: "System monitoring dashboard with real-time metrics",
      pt: "Dashboard de monitorização de sistemas com métricas em tempo real",
    },
    tech: ["Grafana", "PostgreSQL", "Python"],
    githubUrl: "https://github.com/diogovieira/system-monitor",
  },
  {
    name: "Data Migration Tool",
    description: {
      en: "Automated database migration and synchronization tool",
      pt: "Ferramenta de migração e sincronização de bases de dados",
    },
    tech: ["C#", "PostgreSQL", "MySQL"],
    githubUrl: "https://github.com/diogovieira/data-migration",
  },
];

const Projects = () => {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">
            {t("Projects", "Projetos")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="card-dashboard group">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-secondary-foreground mb-3">
                {project.description[language]}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
