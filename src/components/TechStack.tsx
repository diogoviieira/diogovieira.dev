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
    <section id="tech" className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <h2 className="section-title">
            {t("Tech Stack", "Stack Tecnológica")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.title} className="card-dashboard">
              <h3 className="text-sm font-medium text-foreground mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
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
