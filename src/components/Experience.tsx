import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { language } = useLanguage();

  const experiences = [
    {
      company: "Openvia Mobility",
      role: language === 'en' ? "Software Developer" : "Programador de Software",
      period: language === 'en' ? "2022 – Present" : "2022 – Presente",
      points: language === 'en'
        ? [
            "Backend development using .NET and C# in microservices architecture",
            "Design and implementation of RESTful APIs",
            "Containerization with Docker and orchestration with Kubernetes",
            "Integration with AWS services",
            "PostgreSQL and SQL database interaction",
            "Monitoring and CI/CD using Grafana and Jenkins",
          ]
        : [
            "Desenvolvimento backend com .NET e C# em arquitetura de microserviços",
            "Design e implementação de APIs RESTful",
            "Containerização com Docker e orquestração com Kubernetes",
            "Integração com serviços AWS",
            "Interação com bases de dados PostgreSQL e SQL",
            "Monitorização e CI/CD com Grafana e Jenkins",
          ],
    },
    {
      company: "Critical Software",
      role: language === 'en' ? "Software Engineer" : "Engenheiro de Software",
      period: "2021 – 2022",
      points: language === 'en'
        ? [
            "Development of safety-critical software for railway, aerospace and maritime systems",
            "Work under DO-178C and DO-330 standards",
            "Requirements definition, plans, test cases and test procedures",
            "Software integration and continuous improvement",
            "Participation in international and confidential projects",
          ]
        : [
            "Desenvolvimento de software safety-critical para sistemas ferroviários, aeroespaciais e marítimos",
            "Trabalho sob normas DO-178C e DO-330",
            "Definição de requisitos, planos, casos de teste e procedimentos de teste",
            "Integração de software e melhoria contínua",
            "Participação em projetos internacionais e confidenciais",
          ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono text-primary uppercase tracking-wider mb-8">
          {language === 'en' ? "Experience" : "Experiência"}
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 border-l border-border">
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary" />

              <div className="mb-2">
                <h3 className="text-lg font-medium text-foreground">
                  {exp.company}
                </h3>
                <p className="text-muted-foreground">{exp.role}</p>
                <p className="text-sm text-muted-foreground/70">{exp.period}</p>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-secondary-foreground/80 text-sm pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted-foreground"
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
