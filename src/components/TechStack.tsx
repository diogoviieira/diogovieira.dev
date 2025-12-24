import { useLanguage } from "@/contexts/LanguageContext";

const TechStack = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: t("Programming Languages", "Linguagens de Programação"),
      skills: ["C", "C++", "C#", "Python", "Ada", "JavaScript"],
    },
    {
      title: t("Backend & APIs", "Backend & APIs"),
      skills: [".NET", "RESTful APIs", "Microservices"],
    },
    {
      title: t("Cloud & DevOps", "Cloud & DevOps"),
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Grafana"],
    },
    {
      title: t("Databases", "Bases de Dados"),
      skills: ["PostgreSQL", "MySQL", "SQL"],
    },
    {
      title: t("Version Control", "Controlo de Versões"),
      skills: ["Git", "GitHub", "Bitbucket"],
    },
    {
      title: t("Methodologies", "Metodologias"),
      skills: ["Agile", "Scrum", "Kanban"],
    },
  ];

  return (
    <section id="tech" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-8">
          {t("Tech Stack", "Stack Tecnológica")}
        </h2>

        <div className="grid gap-6">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm text-muted-foreground mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded border border-border"
                  >
                    {skill}
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

export default TechStack;
