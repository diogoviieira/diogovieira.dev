import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  GitBranch, 
  Users,
  Layers,
  FileCode,
  Cpu,
  Terminal,
  Braces,
  Binary,
  Box,
  Container,
  Activity,
  Gauge,
  HardDrive,
  CircleDot,
  GitMerge,
  GitPullRequest,
  IterationCw,
  Kanban,
  UserCheck
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Minimal icon mapping for technologies
const techIconMap: Record<string, LucideIcon> = {
  // Languages
  "C": FileCode,
  "C++": Cpu,
  "C#": Braces,
  "Python": Terminal,
  "Ada": Binary,
  "JavaScript": Code2,
  // Backend
  ".NET": Server,
  "RESTful APIs": Braces,
  "Microservices": Box,
  // Cloud
  "AWS": Cloud,
  "Docker": Container,
  "Kubernetes": CircleDot,
  "Jenkins": Activity,
  "Grafana": Gauge,
  // DB
  "PostgreSQL": Database,
  "MySQL": HardDrive,
  "SQL": Database,
  // Git
  "Git": GitBranch,
  "GitHub": GitMerge,
  "Bitbucket": GitPullRequest,
  // Methods
  "Agile": IterationCw,
  "Scrum": UserCheck,
  "Kanban": Kanban,
};

const TechStack = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: t("Programming Languages", "Linguagens de Programação"),
      icon: Code2,
      skills: ["C", "C++", "C#", "Python", "Ada", "JavaScript"],
    },
    {
      title: t("Backend & APIs", "Backend & APIs"),
      icon: Server,
      skills: [".NET", "RESTful APIs", "Microservices"],
    },
    {
      title: t("Cloud & DevOps", "Cloud & DevOps"),
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Grafana"],
    },
    {
      title: t("Databases", "Bases de Dados"),
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "SQL"],
    },
    {
      title: t("Version Control", "Controlo de Versões"),
      icon: GitBranch,
      skills: ["Git", "GitHub", "Bitbucket"],
    },
    {
      title: t("Methodologies", "Metodologias"),
      icon: Users,
      skills: ["Agile", "Scrum", "Kanban"],
    },
  ];

  return (
    <section id="tech" className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">
            <Layers className="w-4 h-4 text-muted-foreground" />
            {t("Tech Stack", "Stack Tecnológica")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.title} className="card-dashboard">
                <div className="flex items-center gap-2 mb-3">
                  <CategoryIcon className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
                  <h3 className="text-sm font-medium text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = techIconMap[skill] || Code2;
                    return (
                      <span key={skill} className="skill-tag">
                        <SkillIcon className="w-3 h-3 text-muted-foreground/70" strokeWidth={1.5} />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
