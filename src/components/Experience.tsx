import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2021 — Presente",
    role: "Lead Designer & Developer",
    company: "Studio Próprio",
    description: "Consultoria independente focada em design de produto e desenvolvimento de aplicações web para startups e empresas em crescimento.",
    tags: ["React", "Figma", "Node.js", "UX Design"],
  },
  {
    period: "2018 — 2021",
    role: "Senior Frontend Developer",
    company: "TechCorp Lisboa",
    description: "Liderança técnica de equipa de 5 developers, responsável pela arquitetura frontend e implementação de design systems.",
    tags: ["Vue.js", "TypeScript", "Design Systems"],
  },
  {
    period: "2016 — 2018",
    role: "UI/UX Designer",
    company: "Creative Agency",
    description: "Design de interfaces para aplicações móveis e web, condução de testes de usabilidade e prototipagem interativa.",
    tags: ["Sketch", "InVision", "User Research"],
  },
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comércio eletrónico com foco em experiência mobile-first",
    image: null,
  },
  {
    title: "SaaS Dashboard",
    description: "Dashboard analítico para gestão empresarial com visualizações de dados",
    image: null,
  },
  {
    title: "Mobile App Design",
    description: "Aplicação de fitness com gamificação e tracking de progresso",
    image: null,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Experiência
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              O meu <span className="text-gradient italic">percurso</span> profissional
            </h2>
          </div>

          {/* Experience timeline */}
          <div className="space-y-8 mb-32">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-elegant"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-6">
                  <div>
                    <p className="font-body text-sm text-primary font-medium">{exp.period}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="font-body text-muted-foreground mb-4">{exp.company}</p>
                    <p className="font-body text-secondary-foreground/80 mb-6">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm font-body rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Projects showcase */}
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Projetos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Trabalhos <span className="text-gradient italic">selecionados</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/5] bg-gradient-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 cursor-pointer"
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="w-24 h-24 border border-primary/30 rounded-full" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background/90 via-background/20 to-transparent">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-body">
                      Ver projeto <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
