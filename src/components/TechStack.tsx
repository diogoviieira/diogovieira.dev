import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  GitBranch, 
  Users,
  Layers
} from "lucide-react";

// Tech icon mapping - using a simple approach with common dev icons
const techIcons: Record<string, string> = {
  // Languages
  "C": "C",
  "C++": "C++",
  "C#": "C#",
  "Python": "Py",
  "Ada": "Ada",
  "JavaScript": "JS",
  // Backend
  ".NET": ".NET",
  "RESTful APIs": "API",
  "Microservices": "μS",
  // Cloud
  "AWS": "AWS",
  "Docker": "🐳",
  "Kubernetes": "K8s",
  "Jenkins": "J",
  "Grafana": "G",
  // DB
  "PostgreSQL": "PG",
  "MySQL": "My",
  "SQL": "SQL",
  // Git
  "Git": "Git",
  "GitHub": "GH",
  "Bitbucket": "BB",
  // Methods
  "Agile": "A",
  "Scrum": "S",
  "Kanban": "K",
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
                  <CategoryIcon className="w-4 h-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      <span className="text-muted-foreground font-mono text-[10px] mr-1.5">
                        {techIcons[skill]}
                      </span>
                      {skill}
                    </span>
                  ))}
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
