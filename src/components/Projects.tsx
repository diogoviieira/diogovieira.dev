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
    name: "Telegram Finance Tracker Bot",
    description: {
      en: "A Telegram bot for personal finance tracking with multi-user support, smart categorization, and monthly analytics",
      pt: "Bot de Telegram para gestão de finanças pessoais com suporte multi-utilizador, categorização inteligente e análises mensais",
    },
    tech: ["Python", "SQLite", "Docker", "Telegram API"],
    githubUrl: "https://github.com/diogoviieira/register-track-bot",
  },
  {
    name: "Personal Portfolio Website",
    description: {
      en: "Modern portfolio website built with React, TypeScript, and shadcn/ui, featuring multilingual support and dark mode",
      pt: "Website de portfolio moderno construído com React, TypeScript e shadcn/ui, com suporte multilíngue e modo escuro",
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/diogoviieira/diogovieira.dev",
    liveUrl: "https://diogovieira.dev",
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
